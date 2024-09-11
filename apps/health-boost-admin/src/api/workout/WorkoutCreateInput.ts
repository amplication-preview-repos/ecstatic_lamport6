import { DiaryEntryWhereUniqueInput } from "../diaryEntry/DiaryEntryWhereUniqueInput";

export type WorkoutCreateInput = {
  caloriesBurned?: number | null;
  description?: string | null;
  diaryEntry?: DiaryEntryWhereUniqueInput | null;
  name?: string | null;
};
