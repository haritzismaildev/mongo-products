const { connect }   = require('./db');
const { getNextSequence } = require('./counter');

async function createProduct({ produk, jumlah_stok }) {
  const db = await connect();
  const id = await getNextSequence('productid');

  const doc = {
    id,
    produk,
    jumlah_stok,
    total_terjual: 0
  };
  const res = await db.collection('products').insertOne(doc);
  return doc;
}

async function getProductById(id) {
  const db = await connect();
  return db.collection('products').findOne({ id });
}

async function updateStock(id, delta) {
  const db = await connect();
  return db.collection('products')
    .findOneAndUpdate(
      { id, jumlah_stok: { $gte: delta * -1 } },
      { $inc: { jumlah_stok: delta, total_terjual: delta < 0 ? -delta : 0 } },
      { returnDocument: 'after' }
    );
}

module.exports = { createProduct, getProductById, updateStock };