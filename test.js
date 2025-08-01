const { getProductById, updateStock } = require('./productModel');

async function main() {
  console.log('Before sale:', await getProductById(1));
  await updateStock(1, -5); // jual 5 unit
  console.log('After sale:', await getProductById(1));
  await updateStock(1, 10); // restock 10
  console.log('After restock:', await getProductById(1));
  process.exit(0);
}
main();