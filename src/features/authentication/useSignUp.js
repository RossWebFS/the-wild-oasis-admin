import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signUp as signUpAPI } from "../../services/apiAuth";

export const useSignUp = () => {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please, verify the new account from the user's email address"
      );
    },
    onError: () => {
      toast.error("There was an error while signing up");
    },
  });

  return { signUp, isLoading };
};
