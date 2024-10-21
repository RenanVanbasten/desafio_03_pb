import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // Criar uma nova categoria
  async createCategory(data: { name: string; image_link: string }) {
    return await this.prisma.category.create({
      data: {
        name: data.name,
        image_link: data.image_link, // Certifique-se de usar image_link
      },
    });
  }
  

  // Buscar todas as categorias
  async getCategories() {
    return await this.prisma.category.findMany();
  }

  // Buscar uma categoria por ID
  async getCategoryById(id: number) {
    return await this.prisma.category.findUnique({
      where: {
        id: Number(id),  // Certifica-se de que o id é tratado como número
      },
    });
  }
  

  // Atualizar uma categoria
  async updateCategory(id: number, data: { name?: string; image_link?: string }) {
    return await this.prisma.category.update({
      where: { id },
      data,
    });
  }

  // Deletar uma categoria
  async deleteCategory(id: number) {
    return await this.prisma.category.delete({
      where: {
        id: Number(id),  // Certifica-se de que o id é tratado como número
      },
    });
  }
  
  
}
