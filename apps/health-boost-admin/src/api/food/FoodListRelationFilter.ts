import { FoodWhereInput } from "./FoodWhereInput";

export type FoodListRelationFilter = {
  every?: FoodWhereInput;
  some?: FoodWhereInput;
  none?: FoodWhereInput;
};
