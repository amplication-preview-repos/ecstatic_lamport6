import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiaryEntryModuleBase } from "./base/diaryEntry.module.base";
import { DiaryEntryService } from "./diaryEntry.service";
import { DiaryEntryController } from "./diaryEntry.controller";
import { DiaryEntryResolver } from "./diaryEntry.resolver";

@Module({
  imports: [DiaryEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiaryEntryController],
  providers: [DiaryEntryService, DiaryEntryResolver],
  exports: [DiaryEntryService],
})
export class DiaryEntryModule {}
