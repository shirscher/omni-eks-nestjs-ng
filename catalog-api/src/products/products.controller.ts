import { Controller, Get } from '@nestjs/common';
import { Product } from './Product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
    }

    @Get()
    async getProducts(): Promise<Product[]> {
        const response = await this.productsService.getProducts();
        return response;
    }
}
