import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async getAllProducts(): Promise<IProduct[]> {
    return this.productModel.getAllProducts();
  }

  async saveProduct(name: string, amount: string): Promise<number> {
    return this.productModel.saveProduct(name, amount);
  }
}