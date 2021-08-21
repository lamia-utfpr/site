import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

// Service
import { ServiceAreaExpertise } from '../services/areaExpertise.service';

// Entity
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

// Erros
import Errors from 'v2/utils/Errors';
import ICreateAreaExpertiseDTO from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { ISelectOrderAreaExpertiseDTO } from '../dtos/areaExpertise/IOrderAreaExpertise.dto';
import { apiConfig } from '@config/api';

@ApiTags('Areas Expertise')
@Controller(`${apiConfig.version}/works/areas-expertise`)
export class ControllerAreaExpertise {
  constructor(private readonly serviceAreaExpertise: ServiceAreaExpertise) {}

  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityAreaExpertise,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateAreaExpertiseDTO) {
    return this.serviceAreaExpertise.createAreaExpertise(data);
  }

  @ApiQuery({
    type: ISelectOrderAreaExpertiseDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of Area(s) Expertise(s)',
    type: EntityAreaExpertise,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderAreaExpertiseDTO) {
    return this.serviceAreaExpertise.findAll(order);
  }
}
