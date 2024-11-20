import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { FilterProductsDto } from './dtos/filter-products.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getFilteredProducts(filters: FilterProductsDto) {
    const { category_ids, is_new, has_discount, sort_by, page = 1, limit = 16 } = filters;
  
    let categories: number[] | undefined;
    if (typeof category_ids === 'string') {
      categories = category_ids
        .split(',')
        .map((id) => parseInt(id, 10))
        .filter((id) => !isNaN(id));
    } else if (Array.isArray(category_ids)) {
      categories = category_ids
        .map((id) => parseInt(id.toString(), 10))
        .filter((id) => !isNaN(id));
    }
  
    const newStatus = is_new ? String(is_new) === 'true' : undefined;
    const discountStatus = has_discount ? String(has_discount) === 'true' : undefined;
  
    const maxLimit = 16;
    const itemsPerPage = Math.min(parseInt(limit.toString(), 10), maxLimit);
    const currentPage = parseInt(page.toString(), 10);
  
    const skip = (currentPage - 1) * itemsPerPage;
  
    const where: Prisma.productWhereInput = {};
    if (categories?.length) {
      where.category_id = { in: categories };
    }
    if (newStatus !== undefined) {
      where.is_new = newStatus;
    }
    if (discountStatus) {
      where.discount_price = { not: null };
    }
    
    const orderBy: Prisma.productOrderByWithRelationInput | undefined = sort_by
      ? { price: sort_by === 'ascending' ? 'asc' : 'desc' }
      : undefined;
  
    const products = await this.prisma.product.findMany({
      where,
      orderBy,
      skip,
      take: itemsPerPage,
    });
  
    const total = await this.prisma.product.count({ where });
  
    return {
      products,
      total,
      page: currentPage,
      totalPages: Math.ceil(total / itemsPerPage),
    };
  }
  

  async createProduct(data: CreateProductDto) {
    const { category_id, name, price, sku, description, large_description } = data;

    if (!category_id || !name || !price || !sku || !description || !large_description) {
      throw new Error('Missing required fields');
    }

    return this.prisma.product.create({
      data: {
        category_id,
        name,
        price,
        sku,
        description,
        large_description,
        discount_price: data.discount_price || null,
        is_new: data.is_new || false,
        image_link: data.image_link || null,
        other_images_link: data.other_images_link || [],
      } as Prisma.productUncheckedCreateInput,
    });
  }

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async updateProduct(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

}
