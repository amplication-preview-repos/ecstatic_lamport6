/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Food } from "./Food";
import { FoodCountArgs } from "./FoodCountArgs";
import { FoodFindManyArgs } from "./FoodFindManyArgs";
import { FoodFindUniqueArgs } from "./FoodFindUniqueArgs";
import { CreateFoodArgs } from "./CreateFoodArgs";
import { UpdateFoodArgs } from "./UpdateFoodArgs";
import { DeleteFoodArgs } from "./DeleteFoodArgs";
import { DiaryEntry } from "../../diaryEntry/base/DiaryEntry";
import { FoodService } from "../food.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Food)
export class FoodResolverBase {
  constructor(
    protected readonly service: FoodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "read",
    possession: "any",
  })
  async _foodsMeta(
    @graphql.Args() args: FoodCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Food])
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "read",
    possession: "any",
  })
  async foods(@graphql.Args() args: FoodFindManyArgs): Promise<Food[]> {
    return this.service.foods(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Food, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "read",
    possession: "own",
  })
  async food(@graphql.Args() args: FoodFindUniqueArgs): Promise<Food | null> {
    const result = await this.service.food(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Food)
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "create",
    possession: "any",
  })
  async createFood(@graphql.Args() args: CreateFoodArgs): Promise<Food> {
    return await this.service.createFood({
      ...args,
      data: {
        ...args.data,

        diaryEntry: args.data.diaryEntry
          ? {
              connect: args.data.diaryEntry,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Food)
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "update",
    possession: "any",
  })
  async updateFood(@graphql.Args() args: UpdateFoodArgs): Promise<Food | null> {
    try {
      return await this.service.updateFood({
        ...args,
        data: {
          ...args.data,

          diaryEntry: args.data.diaryEntry
            ? {
                connect: args.data.diaryEntry,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Food)
  @nestAccessControl.UseRoles({
    resource: "Food",
    action: "delete",
    possession: "any",
  })
  async deleteFood(@graphql.Args() args: DeleteFoodArgs): Promise<Food | null> {
    try {
      return await this.service.deleteFood(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => DiaryEntry, {
    nullable: true,
    name: "diaryEntry",
  })
  @nestAccessControl.UseRoles({
    resource: "DiaryEntry",
    action: "read",
    possession: "any",
  })
  async getDiaryEntry(
    @graphql.Parent() parent: Food
  ): Promise<DiaryEntry | null> {
    const result = await this.service.getDiaryEntry(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}