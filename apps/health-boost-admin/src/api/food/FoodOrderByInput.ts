import { SortOrder } from "../../util/SortOrder";

export type FoodOrderByInput = {
  calories?: SortOrder;
  carbohydrates?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  diaryEntryId?: SortOrder;
  fat?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  protein?: SortOrder;
  updatedAt?: SortOrder;
};
