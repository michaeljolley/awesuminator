import { fauna } from "./modules/fauna";
import { functions } from "./modules/functions";
import { sidebar } from "./modules/sidebar";

export const types = {
  fauna: fauna.types,
  functions: functions.types,
  sidebar: sidebar.types,
};
