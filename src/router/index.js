import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import CategoryItems from "../components/categories/CategoryItems.vue";
import PricingView from "../views/PricingView.vue";
import StudyCaseView from "../views/StudyCaseView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailView from "../views/DetailView.vue";
import SuccessView from "../views/SuccessView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/categories/:id",
      name: "categories-items",
      component: CategoryItems,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: DetailView,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
    {
      path: "/study-case",
      name: "study-case",
      component: StudyCaseView,
    },
  ],
});

export default router;
