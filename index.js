// Inisialisasi data produk
const products = [
  { id: 1, name: 'Beras', price: 15000 },
  { id: 2, name: 'Telor', price: 25000 },
  { id: 3, name: 'Minyak Goreng', price: 20000 },
  { id: 4, name: 'Aqua Galon', price: 21000 },
  { id: 5, name: 'Gula', price: 12000 },
];

// Inisialisasi data keranjang belanja
let cartItems = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
  const selectedProduct = products.find(product => product.id === productId);

  if (selectedProduct) {
    cartItems.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price
    });

    updateCart();
  }
}

// Fungsi untuk mengupdate tampilan keranjang
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Bersihkan tampilan keranjang
  cartList.innerHTML = '';

  // Hitung total harga
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // Tampilkan item-item dalam keranjang
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${item.name}</span><span>Rp. ${item.price}</span>
                            <button onclick="editCartItem(${item.id})">Edit</button>
                            <button onclick="deleteCartItem(${item.id})">Hapus</button>`;
    cartList.appendChild(listItem);
  });

  // Tampilkan total harga
  totalElement.textContent = `Rp. ${totalAmount}`;
}

// Fungsi untuk menghapus item dari keranjang
function deleteCartItem(itemId) {
  const itemIndex = cartItems.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    updateCart();
  }
}

// Fungsi untuk mengedit item dalam keranjang
function editCartItem(itemId) {
  const newName = prompt('Masukkan nama baru:');
  const newPrice = parseInt(prompt('Masukkan harga baru:'));

  if (newName && !isNaN(newPrice)) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      cartItems[itemIndex].name = newName;
      cartItems[itemIndex].price = newPrice;
      updateCart();
    }
  } else {
    alert('Input tidak valid. Nama harus diisi dan harga harus berupa angka.');
  }
}

// Fungsi untuk melakukan checkout
function checkout() {
  // Implementasi checkout (misalnya, proses pembayaran atau pengiriman)
  alert('Terimakasih Telah berbelanja di toko kami!');
}
