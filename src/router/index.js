import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import SearchbyLetter from "../views/SearchbyLetter.vue";
import SearchbyName from "../views/SearchbyName.vue";
import SearchbyIngredient from "../views/SearchbyIngredients.vue";
import Ingredients from "../views/Ingredients.vue";
import DrinkDetail from "../views/DrinkDetail.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchbyLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchbyName,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: SearchbyIngredient,
      },
      {
        path: "/drink/:id",
        name: "drinkDetail",
        component: DrinkDetail,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
