/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FoodService } from "../food.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FoodCreateInput } from "./FoodCreateInput";
import { Food } from "./Food";
import { FoodFindManyArgs } from "./FoodFindManyArgs";
import { FoodWhereUniqueInput } from "./FoodWhereUniqueInput";
import { FoodUpdateInput } from "./FoodUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FoodControllerBase {
  constructor(
    protected readonly service: FoodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Food })
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFood(@common.Body() data: FoodCreateInput): Promise<Food> {
    return await this.service.createFood({
      data: {
        ...data,

        diaryEntry: data.diaryEntry
          ? {
              connect: data.diaryEntry,
            }
          : undefined,
      },
      select: {
        calories: true,
        carbohydrates: true,
        createdAt: true,
        description: true,

        diaryEntry: {
          select: {
            id: true,
          },
        },

        fat: true,
        id: true,
        name: true,
        protein: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Food] })
  @ApiNestedQuery(FoodFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async foods(@common.Req() request: Request): Promise<Food[]> {
    const args = plainToClass(FoodFindManyArgs, request.query);
    return this.service.foods({
      ...args,
      select: {
        calories: true,
        carbohydrates: true,
        createdAt: true,
        description: true,

        diaryEntry: {
          select: {
            id: true,
          },
        },

        fat: true,
        id: true,
        name: true,
        protein: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Food })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async food(
    @common.Param() params: FoodWhereUniqueInput
  ): Promise<Food | null> {
    const result = await this.service.food({
      where: params,
      select: {
        calories: true,
        carbohydrates: true,
        createdAt: true,
        description: true,

        diaryEntry: {
          select: {
            id: true,
          },
        },

        fat: true,
        id: true,
        name: true,
        protein: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Food })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFood(
    @common.Param() params: FoodWhereUniqueInput,
    @common.Body() data: FoodUpdateInput
  ): Promise<Food | null> {
    try {
      return await this.service.updateFood({
        where: params,
        data: {
          ...data,

          diaryEntry: data.diaryEntry
            ? {
                connect: data.diaryEntry,
              }
            : undefined,
        },
        select: {
          calories: true,
          carbohydrates: true,
          createdAt: true,
          description: true,

          diaryEntry: {
            select: {
              id: true,
            },
          },

          fat: true,
          id: true,
          name: true,
          protein: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Food })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFood(
    @common.Param() params: FoodWhereUniqueInput
  ): Promise<Food | null> {
    try {
      return await this.service.deleteFood({
        where: params,
        select: {
          calories: true,
          carbohydrates: true,
          createdAt: true,
          description: true,

          diaryEntry: {
            select: {
              id: true,
            },
          },

          fat: true,
          id: true,
          name: true,
          protein: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
