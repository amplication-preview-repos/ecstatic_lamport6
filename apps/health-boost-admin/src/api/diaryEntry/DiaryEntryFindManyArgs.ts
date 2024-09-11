import { DiaryEntryWhereInput } from "./DiaryEntryWhereInput";
import { DiaryEntryOrderByInput } from "./DiaryEntryOrderByInput";

export type DiaryEntryFindManyArgs = {
  where?: DiaryEntryWhereInput;
  orderBy?: Array<DiaryEntryOrderByInput>;
  skip?: number;
  take?: number;
};
