import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';  // Importar o PrismaModule

@Module({
  imports: [PrismaModule],  // Importe o PrismaModule aqui
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
