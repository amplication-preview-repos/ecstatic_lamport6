import { DiaryEntry } from "../diaryEntry/DiaryEntry";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  diaryEntries?: Array<DiaryEntry>;
  email: string | null;
  firstName: string | null;
  goal: string | null;
  height: number | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  weight: number | null;
};
