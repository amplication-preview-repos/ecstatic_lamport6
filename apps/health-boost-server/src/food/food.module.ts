import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FoodModuleBase } from "./base/food.module.base";
import { FoodService } from "./food.service";
import { FoodController } from "./food.controller";
import { FoodResolver } from "./food.resolver";

@Module({
  imports: [FoodModuleBase, forwardRef(() => AuthModule)],
  controllers: [FoodController],
  providers: [FoodService, FoodResolver],
  exports: [FoodService],
})
export class FoodModule {}
