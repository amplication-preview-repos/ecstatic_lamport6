import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkoutServiceBase } from "./base/workout.service.base";

@Injectable()
export class WorkoutService extends WorkoutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
