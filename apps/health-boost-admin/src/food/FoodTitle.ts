import { Food as TFood } from "../api/food/Food";

export const FOOD_TITLE_FIELD = "name";

export const FoodTitle = (record: TFood): string => {
  return record.name?.toString() || String(record.id);
};
