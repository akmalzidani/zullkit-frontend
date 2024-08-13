import axios from "axios";
import { config } from "@/utils/config";

export default function useCheckout() {
  const checkout = async (price) => {
    try {
      const response = await axios.post(
        `${config.baseURL}/checkout`,
        {
          payment_total: price,
          payment_status: "PENDING",
        },
        {
          headers: {
            Authorization: `${localStorage.getItem(
              "token_type"
            )} ${localStorage.getItem("access_token")}`,
          },
        }
      );
      window.location.href = response.data.data.payment_url;
    } catch (error) {
      console.error(error);
    }
  };

  return { checkout };
}
