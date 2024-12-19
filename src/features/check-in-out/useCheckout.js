import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`訂單 #${data.id} 退房成功`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("訂單發生錯誤"),
  });

  return { checkout, isCheckingOut };
}
