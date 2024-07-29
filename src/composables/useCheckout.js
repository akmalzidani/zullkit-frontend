import axios from "axios";

export default function useCheckout() {
  const checkout = async (price) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/checkout`,
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
