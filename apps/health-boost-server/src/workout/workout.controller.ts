import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkoutService } from "./workout.service";
import { WorkoutControllerBase } from "./base/workout.controller.base";

@swagger.ApiTags("workouts")
@common.Controller("workouts")
export class WorkoutController extends WorkoutControllerBase {
  constructor(
    protected readonly service: WorkoutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
