import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodServiceBase } from "./base/food.service.base";

@Injectable()
export class FoodService extends FoodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
