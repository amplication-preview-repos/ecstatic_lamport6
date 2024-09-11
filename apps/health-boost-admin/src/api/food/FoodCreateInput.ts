import { DiaryEntryWhereUniqueInput } from "../diaryEntry/DiaryEntryWhereUniqueInput";

export type FoodCreateInput = {
  calories?: number | null;
  carbohydrates?: number | null;
  description?: string | null;
  diaryEntry?: DiaryEntryWhereUniqueInput | null;
  fat?: number | null;
  name?: string | null;
  protein?: number | null;
};
