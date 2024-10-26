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

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  // Método de atualização
  // Método de atualização
async updateProduct(id: number, data) {
  return this.prisma.product.update({
    where: {
      id: Number(id)  // Converte o id para um número
    },
    data,
  });
}

}
