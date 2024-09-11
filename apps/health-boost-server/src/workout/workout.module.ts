import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkoutModuleBase } from "./base/workout.module.base";
import { WorkoutService } from "./workout.service";
import { WorkoutController } from "./workout.controller";
import { WorkoutResolver } from "./workout.resolver";

@Module({
  imports: [WorkoutModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkoutController],
  providers: [WorkoutService, WorkoutResolver],
  exports: [WorkoutService],
})
export class WorkoutModule {}
