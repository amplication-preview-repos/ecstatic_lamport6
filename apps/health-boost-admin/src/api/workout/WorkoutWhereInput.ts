import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiaryEntryWhereUniqueInput } from "../diaryEntry/DiaryEntryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type WorkoutWhereInput = {
  caloriesBurned?: IntNullableFilter;
  description?: StringNullableFilter;
  diaryEntry?: DiaryEntryWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
