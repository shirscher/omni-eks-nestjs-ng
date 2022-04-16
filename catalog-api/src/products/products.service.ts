import { Injectable } from '@nestjs/common';
import { Product } from './Product';

@Injectable()
export class ProductsService {

    /**
     * getProducts
     * 
     * @returns A list of products
     */
    getProducts() : Promise<Product[]> {
        return new Promise((resolve) => {
            const products = [
                {
                    id: "1",
                    name: "Widget",
                    description: "A widget is a small, inexpensive, and somewhat useful item."
                },
                {
                    id: "2",
                    name: "Gadget",
                    description: "A gadget is a small, inexpensive, and somewhat useful item."
                }
            ];

            resolve(products);
        });
    }
}
