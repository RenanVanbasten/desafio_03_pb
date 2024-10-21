import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data) {
    return this.prisma.product.create({ data });
  }

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  // Adicionar o método DELETE
  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id: id },
    });
  }
}
