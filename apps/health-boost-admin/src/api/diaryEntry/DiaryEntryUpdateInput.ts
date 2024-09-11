import { FoodUpdateManyWithoutDiaryEntriesInput } from "./FoodUpdateManyWithoutDiaryEntriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkoutUpdateManyWithoutDiaryEntriesInput } from "./WorkoutUpdateManyWithoutDiaryEntriesInput";

export type DiaryEntryUpdateInput = {
  date?: Date | null;
  description?: string | null;
  foods?: FoodUpdateManyWithoutDiaryEntriesInput;
  user?: UserWhereUniqueInput | null;
  workouts?: WorkoutUpdateManyWithoutDiaryEntriesInput;
};
