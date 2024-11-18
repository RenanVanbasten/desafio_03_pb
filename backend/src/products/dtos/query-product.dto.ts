import { IsOptional, IsBoolean, IsArray, IsString, IsNumber } from 'class-validator';

export class QueryProductDto {
  @IsOptional()
  @IsArray()
  category_ids?: number[];

  @IsOptional()
  @IsBoolean()
  is_new?: boolean;

  @IsOptional()
  @IsBoolean()
  has_discount?: boolean;

  @IsOptional()
  @IsString()
  sort_by?: string;

  @IsOptional()
  @IsNumber()
  price_min?: number;

  @IsOptional()
  @IsNumber()
  price_max?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
