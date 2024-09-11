import { SortOrder } from "../../util/SortOrder";

export type WorkoutOrderByInput = {
  caloriesBurned?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  diaryEntryId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
