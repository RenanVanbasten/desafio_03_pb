import { Controller, Post, Get, Param, Body, Patch, Delete, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { QueryCategoryDto } from './dtos/query-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.categoryService.createCategory(body);
  }

  @Get()
  async getCategories(@Query() query: QueryCategoryDto) {
    return this.categoryService.getCategoriesWithFilters(query);
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(Number(id));
  }

  @Patch(':id')
  async updateCategory(@Param('id') id: number, @Body() data: UpdateCategoryDto) {
    return this.categoryService.updateCategory(Number(id), data);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(Number(id));
  }
}
