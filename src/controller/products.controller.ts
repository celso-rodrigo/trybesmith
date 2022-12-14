import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async getAllProducts(_req: Request, res: Response) {    
    const allProducts = await this.productService.getAllProducts();
    res.status(200).json(allProducts);
  }

  async saveProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    const id = await this.productService.saveProduct(name, amount);
    res.status(201).json({ id, name, amount });
  }
}