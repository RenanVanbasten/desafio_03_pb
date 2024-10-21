import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(Number(id)); // Converte o ID para número
  }

  @Post()
  async createProduct(@Body() data) {
    return this.productsService.createProduct(data);
  }

  // Adicionar o método DELETE
  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(Number(id));
  }
}
