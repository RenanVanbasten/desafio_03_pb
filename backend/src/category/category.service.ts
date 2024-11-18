import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { QueryCategoryDto } from './dtos/query-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }

  async getCategoriesWithFilters(query: QueryCategoryDto) {
    const { name, page = 1, limit = 10 } = query;

    const where = name ? { name: { contains: name } } : {};
    const skip = (page - 1) * limit;

    const categories = await this.prisma.category.findMany({
      where,
      skip,
      take: limit,
    });

    const total = await this.prisma.category.count({ where });

    return { categories, total, page, totalPages: Math.ceil(total / limit) };
  }

  async getCategories() {
    return this.prisma.category.findMany();
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async updateCategory(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
