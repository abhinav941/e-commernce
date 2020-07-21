import fs from 'fs';
import dirPath from '../util/path';

const path = dirPath('data/product.json');

const readFilefrom = (cb: Function) => {
  fs.readFile(path, (err: any, fileContent: any) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent.toString()));
  });
};

interface ConstructorProps {
  title: String;
  imageUrl: string;
  description: string;
  price: number;
}
class Product {
  data: ConstructorProps = {
    title: '',
    imageUrl: '',
    description: '',
    price: 0,
  };

  constructor({ title, imageUrl, description, price }: ConstructorProps) {
    this.data = {
      title,
      imageUrl,
      description,
      price,
    };
  }

  save() {
    readFilefrom((products: any) => {
      products.push(this.data);
      fs.writeFile(path, JSON.stringify(products), (err: any) => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb: Function) {
    return readFilefrom(cb);
  }
}

export default Product;
