import { IProduct } from '../interfaces';
import ProductModel from '../models/product.model';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async getAllProducts(): Promise<IProduct[]> {
    return this.productModel.getAllProducts();
  }
}