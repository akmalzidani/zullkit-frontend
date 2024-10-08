import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { config } from "@/utils/config";

export default function useProducts() {
  const products = ref([]);
  const product = ref([]);
  const limit = ref();

  const getAllProducts = async () => {
    try {
      const params = new URLSearchParams();
      if (limit.value) {
        params.append("limit", limit.value);
      }

      const response = await axios.get(
        `${config.baseURL}/products?${params.toString()}`
      );
      products.value = response.data.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getProductById = async () => {
    try {
      const route = useRoute();
      const params = new URLSearchParams();
      if (route.params.id) {
        params.append("id", route.params.id);
      }

      const response = await axios.get(
        `${config.baseURL}/products?${params.toString()}`
      );
      product.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { products, product, getProductById, getAllProducts, limit };
}
