import { Controller, Get, Post, Body, Delete, Param, Patch, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilterProductsDto } from './dtos/filter-products.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Query() filters: FilterProductsDto) {
    return this.productsService.getFilteredProducts(filters);
  }

  @Get('all')
  async getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(Number(id));
  }

  @Post()
  async createProduct(@Body() data: CreateProductDto) {
    return this.productsService.createProduct(data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(Number(id));
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() data: UpdateProductDto) {
    return this.productsService.updateProduct(id, data);
  }
}
