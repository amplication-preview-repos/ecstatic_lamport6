import { DiaryEntry } from "../diaryEntry/DiaryEntry";

export type Workout = {
  caloriesBurned: number | null;
  createdAt: Date;
  description: string | null;
  diaryEntry?: DiaryEntry | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
