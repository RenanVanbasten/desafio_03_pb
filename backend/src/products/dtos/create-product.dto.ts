import { IsString, IsOptional, IsNumber, IsBoolean, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name?: string;

  @IsString()
  sku?: string;

  @IsNumber()
  category_id?: number;

  @IsString()
  description?: string;

  @IsString()
  large_description?: string;

  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  discount_price?: number;

  @IsOptional()
  @IsBoolean()
  is_new?: boolean;

  @IsOptional()
  @IsString()
  image_link?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  other_images_link?: string[];
}
