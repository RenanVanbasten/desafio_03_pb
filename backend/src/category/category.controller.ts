import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() body: { name: string; image_link: string }) {
    return this.categoryService.createCategory({
      name: body.name,
      image_link: body.image_link, // Certifique-se de passar 'image_link'
    });
  }

  @Get()
  async getCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @Patch(':id')
  async updateCategory(@Param('id') id: number, @Body() data: { name?: string; image_link?: string }) {
    return this.categoryService.updateCategory(id, {
      name: data.name,
      image_link: data.image_link, // Certifique-se de passar 'image_link'
    });
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
