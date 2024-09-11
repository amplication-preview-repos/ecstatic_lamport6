import { FoodWhereInput } from "./FoodWhereInput";
import { FoodOrderByInput } from "./FoodOrderByInput";

export type FoodFindManyArgs = {
  where?: FoodWhereInput;
  orderBy?: Array<FoodOrderByInput>;
  skip?: number;
  take?: number;
};
