import axios from "axios";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { config } from "@/utils/config";

export default function useAuth() {
  const form = ref();
  const userStore = useUserStore();
  const router = useRouter();

  const login = async () => {
    try {
      const response = await axios.post(`${config.baseURL}/login`, {
        email: form.value.email,
        password: form.value.password,
      });
      localStorage.setItem("access_token", response.data.data.access_token);
      localStorage.setItem("token_type", response.data.data.token_type);
      userStore.getUserData();
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(`${config.baseURL}/register`, {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        title: form.value.title,
      });
      localStorage.setItem("access_token", response.data.data.access_token);
      localStorage.setItem("token_type", response.data.data.token_type);
      userStore.getUserData();
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return { form, login, register };
}
