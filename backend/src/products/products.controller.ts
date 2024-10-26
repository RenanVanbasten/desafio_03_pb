import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
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
    return this.productsService.getProductById(Number(id));
  }

  @Post()
  async createProduct(@Body() data) {
    return this.productsService.createProduct(data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(Number(id));
  }

  // Método de atualização (PATCH)
  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() data) {
    return this.productsService.updateProduct(id, data);
  }
}
