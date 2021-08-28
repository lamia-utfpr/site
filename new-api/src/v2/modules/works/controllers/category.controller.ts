import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { ApiConfig } from '../../../config/api';
import ICreateCategoryDTO from '../dtos/category/ICreateCategory.dto';
import { ISelectOrderCategoryDTO } from '../dtos/category/IOrderCategory.dto';
import { EntityCategory } from '../typeorm/entities/category.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ServiceCategory } from '../services/category.service';

@ApiTags('category')
@Controller(`${ApiConfig.version}/category`)
export class ControllerCategory {
  constructor(private readonly ServiceCategory: ServiceCategory) {}

  @ApiCreatedResponse({
    description: 'Create success',
    type: EntityCategory,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  // If request is Post, it will be created new areaExpertise
  @Post()
  create(@Body() data: ICreateCategoryDTO) {
    return this.ServiceCategory.createCategory(data);
  }

  @ApiQuery({
    type: ISelectOrderCategoryDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of Categorys',
    type: EntityCategory,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  // Else request is the POST, it will be returned all areaExpertises
  @Get()
  findAll(@Query() order: ISelectOrderCategoryDTO) {
    return this.ServiceCategory.findAll(order);
  }
}
