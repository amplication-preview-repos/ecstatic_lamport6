import { FoodCreateNestedManyWithoutDiaryEntriesInput } from "./FoodCreateNestedManyWithoutDiaryEntriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkoutCreateNestedManyWithoutDiaryEntriesInput } from "./WorkoutCreateNestedManyWithoutDiaryEntriesInput";

export type DiaryEntryCreateInput = {
  date?: Date | null;
  description?: string | null;
  foods?: FoodCreateNestedManyWithoutDiaryEntriesInput;
  user?: UserWhereUniqueInput | null;
  workouts?: WorkoutCreateNestedManyWithoutDiaryEntriesInput;
};
