import { defineStore } from "pinia";
import { ref, computed, watchEffect } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref(false);
  const isLoggedIn = computed(() => user.value !== false);
  const getUser = computed(() => user.value);

  const getUserData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user`, {
        headers: {
          Authorization: `${localStorage.getItem("token_type")} ${localStorage.getItem("access_token")}`,
        },
      });
      user.value = response.data.data;
    } catch (error) {
      user.value = false;
    }
  };

  return { user, isLoggedIn, getUser, getUserData };
});
