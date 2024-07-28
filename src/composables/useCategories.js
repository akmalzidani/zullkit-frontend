import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default function useCategories() {
  const categories = ref([]);
  const category = ref();
  const limit = ref(); 

  const getAllCategories = async () => {
    try {
      const params = new URLSearchParams();
      if (limit.value) {
        params.append('limit', limit.value);
      }

      const response = await axios.get(`http://127.0.0.1:8000/api/categories?${params.toString()}`);
      categories.value = response.data.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoryById = async () =>{
    const route = useRoute();
    const params = new URLSearchParams();
    console.log(route.params.id);
    if (route.params.id) {
      params.append("id", route.params.id);
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/categories?${params.toString()}`
      );
      category.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  return { categories, category, getAllCategories, getCategoryById, limit };
}
