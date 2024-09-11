import { DiaryEntryUpdateManyWithoutUsersInput } from "./DiaryEntryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  diaryEntries?: DiaryEntryUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  goal?: string | null;
  height?: number | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  weight?: number | null;
};
