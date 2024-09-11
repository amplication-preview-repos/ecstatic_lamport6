import { DiaryEntryWhereUniqueInput } from "../diaryEntry/DiaryEntryWhereUniqueInput";

export type FoodUpdateInput = {
  calories?: number | null;
  carbohydrates?: number | null;
  description?: string | null;
  diaryEntry?: DiaryEntryWhereUniqueInput | null;
  fat?: number | null;
  name?: string | null;
  protein?: number | null;
};
