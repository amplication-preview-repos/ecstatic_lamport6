import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiaryEntryService } from "./diaryEntry.service";
import { DiaryEntryControllerBase } from "./base/diaryEntry.controller.base";

@swagger.ApiTags("diaryEntries")
@common.Controller("diaryEntries")
export class DiaryEntryController extends DiaryEntryControllerBase {
  constructor(
    protected readonly service: DiaryEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
