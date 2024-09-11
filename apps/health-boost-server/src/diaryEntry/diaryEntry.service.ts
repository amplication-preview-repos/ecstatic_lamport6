import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiaryEntryServiceBase } from "./base/diaryEntry.service.base";

@Injectable()
export class DiaryEntryService extends DiaryEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
