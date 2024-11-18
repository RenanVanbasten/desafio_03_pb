import { IsOptional, IsBoolean, IsArray, IsString, IsNumber } from 'class-validator';

export class FilterProductsDto {
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  category_ids?: string | string[];
  
  @IsOptional()
  @IsBoolean()
  is_new?: boolean;

  @IsOptional()
  @IsBoolean()
  has_discount?: boolean;

  @IsOptional()
  @IsString()
  sort_by?: 'ascending' | 'descending';

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
