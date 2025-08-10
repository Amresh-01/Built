"use client";
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "components/custom/Header";
import { MessagesContext } from "context/MessagesContext";
import { UserDetailContext } from "context/UserDetailContext";
import { useConvex } from "convex/react";
import { api } from "../convex/_generated/api"; // Adjust path as needed

const Provider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [userDetail, setUserDetail] = useState();
  const convex = useConvex();

  useEffect(() => {
    IsAuthenticated();
  }, []);

  const IsAuthenticated = async () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      // fetch from db
      const result = await convex.query(api.users.Getuser, {
        email: user?.email,
      });
      console.log(result);
    }
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="203207323470-refhvi6n4nhuu0oivjpet97gde9laoau.apps.googleusercontent.com">
        <UserDetailContext.Provider value={{}}>
          <MessagesContext.Provider value={{ messages, setMessages }}>
            <NextThemesProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </NextThemesProvider>
          </MessagesContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </div>
  );
};

export default Provider;
