import { Food } from "../food/Food";
import { User } from "../user/User";
import { Workout } from "../workout/Workout";

export type DiaryEntry = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  foods?: Array<Food>;
  id: string;
  updatedAt: Date;
  user?: User | null;
  workouts?: Array<Workout>;
};
