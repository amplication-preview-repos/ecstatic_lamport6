import { Workout as TWorkout } from "../api/workout/Workout";

export const WORKOUT_TITLE_FIELD = "name";

export const WorkoutTitle = (record: TWorkout): string => {
  return record.name?.toString() || String(record.id);
};
