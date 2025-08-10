import React, { useContext } from "react";
import { Button } from "/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { api } from "../../convex/_generated/api"; // Adjust path as needed
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/ui/dialog";
import Lookup from "data/Lookup";
import { UserDetailContext } from "context/UserDetailContext";
import { useMutation } from "convex/react";

const SignInDialog = ({ openDialog, closeDialog }) => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const CreateUser = useMutation(api.users.CreateUser);
  const createUser = useMutation(api.users.CreateUser);
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: "Bearer " + tokenResponse?.access_token,
            },
          }
        );
        console.log(userInfo);
        const user = userInfo.data;
        await createUser({
          name: user?.name,
          email: user?.email,
          picture: user?.picture,
          uid: uuid4(),
        });
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(userInfo?.data));
        }

        setUserDetail(userInfo?.data);
        closeDialog(false);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (errorResponse) => console.error("Login error:", errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center gap-3">
              <span className="font-bold text-center text-2xl text-white">
                {Lookup.SIGNIN_HEADING}
              </span>
              <p className="mt-2 text-center text-lg">
                {Lookup.SIGNIN_SUBHEADING}
              </p>
              <Button
                className="bg-blue-500 text-white hover:bg-blue-400 mt-3"
                onClick={googleLogin}
              >
                Sign In with Google
              </Button>
              <p>{Lookup.SIGNIN_AGREEMENT_TEXT}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
