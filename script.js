const products = [
  { name: 'Диван "Комфорт"', price: '49 990 ₽' },
  { name: 'Кресло "Сканди"', price: '15 490 ₽' },
  { name: 'Кровать "Элегант"', price: '39 990 ₽' },
  { name: 'Шкаф "Лофт"', price: '27 990 ₽' },
  { name: 'Стол обеденный "Норд"', price: '18 750 ₽' },
  { name: 'Стул "Модерн"', price: '6 390 ₽' }
];

const productGrid = document.getElementById('productGrid');

products.forEach((product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    <div>
      <h3>${product.name}</h3>
      <p class="price">Цена: ${product.price}</p>
    </div>
    <button class="details-btn" type="button">Подробнее</button>
  `;

  productGrid.appendChild(card);
});
