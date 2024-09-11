import { DiaryEntry } from "../diaryEntry/DiaryEntry";

export type Food = {
  calories: number | null;
  carbohydrates: number | null;
  createdAt: Date;
  description: string | null;
  diaryEntry?: DiaryEntry | null;
  fat: number | null;
  id: string;
  name: string | null;
  protein: number | null;
  updatedAt: Date;
};
