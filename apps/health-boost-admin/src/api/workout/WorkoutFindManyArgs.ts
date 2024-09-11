import { WorkoutWhereInput } from "./WorkoutWhereInput";
import { WorkoutOrderByInput } from "./WorkoutOrderByInput";

export type WorkoutFindManyArgs = {
  where?: WorkoutWhereInput;
  orderBy?: Array<WorkoutOrderByInput>;
  skip?: number;
  take?: number;
};
