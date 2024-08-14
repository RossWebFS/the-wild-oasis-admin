import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingAPI,
    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("There was error while deleting");
    },
  });

  return { deleteBooking, isDeleting };
};
