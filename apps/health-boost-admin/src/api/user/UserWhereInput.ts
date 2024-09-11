import { DiaryEntryListRelationFilter } from "../diaryEntry/DiaryEntryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  diaryEntries?: DiaryEntryListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  goal?: StringNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  weight?: IntNullableFilter;
};
