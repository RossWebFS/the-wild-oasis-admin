import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSettings as updateSettingsAPI } from "../../services/apiSettings";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingsAPI,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSettings, isUpdating };
};
