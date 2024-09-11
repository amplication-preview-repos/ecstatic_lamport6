import { DiaryEntryCreateNestedManyWithoutUsersInput } from "./DiaryEntryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  diaryEntries?: DiaryEntryCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  goal?: string | null;
  height?: number | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  weight?: number | null;
};
