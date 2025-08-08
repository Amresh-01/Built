"use client";
import React, { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "components/custom/Header";
import { MessagesContext } from "context/MessagesContext";
import { UserDetailContext } from "context/UserDetailContext";

const Provider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  return (
    <div>
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
    </div>
  );
};

export default Provider;
