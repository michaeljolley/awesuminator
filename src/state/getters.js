import { sidebar } from "./modules/sidebar";
import { fauna } from "./modules/fauna";

export const getters = {
  sidebar: sidebar.getters,
  fauna: fauna.getters,
};
