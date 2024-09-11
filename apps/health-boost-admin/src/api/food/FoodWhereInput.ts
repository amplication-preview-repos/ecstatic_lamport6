import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiaryEntryWhereUniqueInput } from "../diaryEntry/DiaryEntryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FoodWhereInput = {
  calories?: IntNullableFilter;
  carbohydrates?: IntNullableFilter;
  description?: StringNullableFilter;
  diaryEntry?: DiaryEntryWhereUniqueInput;
  fat?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  protein?: IntNullableFilter;
};
