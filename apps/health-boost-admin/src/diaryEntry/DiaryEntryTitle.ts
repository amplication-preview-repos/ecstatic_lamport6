import { DiaryEntry as TDiaryEntry } from "../api/diaryEntry/DiaryEntry";

export const DIARYENTRY_TITLE_FIELD = "id";

export const DiaryEntryTitle = (record: TDiaryEntry): string => {
  return record.id?.toString() || String(record.id);
};
