const { createProduct } = require('./productModel');
async function main() {
  const samples = [
    { produk: 'Produk A', jumlah_stok: 100 },
    { produk: 'Produk B', jumlah_stok: 50  },
    { produk: 'Produk C', jumlah_stok: 200 }
  ];
  for (const item of samples) {
    const doc = await createProduct(item);
    console.log('Created:', doc);
  }
  process.exit(0);
}
main();