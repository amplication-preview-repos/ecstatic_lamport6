import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FoodListRelationFilter } from "../food/FoodListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkoutListRelationFilter } from "../workout/WorkoutListRelationFilter";

export type DiaryEntryWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  foods?: FoodListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  workouts?: WorkoutListRelationFilter;
};
