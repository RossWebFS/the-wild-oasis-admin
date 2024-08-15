import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logout as logoutAPI } from "../../services/apiAuth";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
        queryClient.removeQueries(["user"])
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
};
