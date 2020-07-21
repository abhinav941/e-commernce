import fs from 'fs';
import dirPath from '../util/path';

const path = dirPath('data/cart.json');

export const readFilefrom = (cb: Function) => {
  fs.readFile(path, (err: any, fileContent: any) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent.toString()));
  });
};

class Cart {
  static save(product: any) {
    readFilefrom((cart: any) => {
      cart.push(product);
      fs.writeFile(path, JSON.stringify(cart), (err: any) => {
        console.error(err);
      });
    });
  }

  static fetchCart(cb: Function) {
    return readFilefrom(cb);
  }
}

export default Cart;
