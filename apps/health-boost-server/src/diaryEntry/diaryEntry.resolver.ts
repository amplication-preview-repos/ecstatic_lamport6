import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiaryEntryResolverBase } from "./base/diaryEntry.resolver.base";
import { DiaryEntry } from "./base/DiaryEntry";
import { DiaryEntryService } from "./diaryEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiaryEntry)
export class DiaryEntryResolver extends DiaryEntryResolverBase {
  constructor(
    protected readonly service: DiaryEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
