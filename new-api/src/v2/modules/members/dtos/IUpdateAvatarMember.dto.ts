import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsUUID } from 'class-validator';
import { AllowedImagesType } from '@config/upload';

export class IUpdateAvatarMemberBasicDataDTO {
  @ApiProperty({
    type: `FILE: ${AllowedImagesType}`,
    description: "Member's avatar",
  })
  avatar: Express.Multer.File;
}

export class IUpdateAvatarMemberDTO {
  @IsDefined()
  fileName: string;

  @IsDefined()
  @IsUUID()
  idMember: string;
}
