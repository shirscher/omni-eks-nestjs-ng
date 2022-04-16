import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [ProductsModule, SystemModule]
})
export class AppModule {}
