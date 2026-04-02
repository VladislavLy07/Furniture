const products = [
  { name: 'Диван "Комфорт"', price: '49 990 ₽' },
  { name: 'Кресло "Сканди"', price: '15 490 ₽' },
  { name: 'Кровать "Элегант"', price: '39 990 ₽' },
  { name: 'Шкаф "Лофт"', price: '27 990 ₽' },
  { name: 'Стол обеденный "Норд"', price: '18 750 ₽' },
  { name: 'Стул "Модерн"', price: '6 390 ₽' }
];

const productGrid = document.getElementById('productGrid');
const cartCountElement = document.getElementById('cartCount');
let cartCount = 0;

if (productGrid && cartCountElement) {
  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    card.innerHTML = `
      <div>
        <h3>${product.name}</h3>
        <p class="price">Цена: ${product.price}</p>
      </div>
      <div class="product-actions">
        <button class="details-btn" type="button">Подробнее</button>
        <button class="add-to-cart-btn" type="button">Добавить в корзину</button>
      </div>
    `;

    productGrid.appendChild(card);
  });

  productGrid.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-cart-btn');

    if (!addButton) {
      return;
    }

    cartCount += 1;
    cartCountElement.textContent = String(cartCount);
  });
}
products.forEach((product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    <div>
      <h3>${product.name}</h3>
      <p class="price">Цена: ${product.price}</p>
    </div>
    <div class="product-actions">
      <button class="details-btn" type="button">Подробнее</button>
      <button class="add-to-cart-btn" type="button">Добавить в корзину</button>
    </div>
    <button class="details-btn" type="button">Подробнее</button>
  `;

  productGrid.appendChild(card);
});

productGrid.addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-to-cart-btn');

  if (!addButton) {
    return;
  }

  cartCount += 1;
  cartCountElement.textContent = String(cartCount);
});
