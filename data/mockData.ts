export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  isHit?: boolean;
};

export type Collection = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 'elegant-chair',
    name: 'Кресло «Элегант»',
    description: 'Мягкое кресло с фактурной обивкой и анатомичной посадкой для зоны отдыха.',
    price: 19900,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    isHit: true
  },
  {
    id: 'norfolk-sofa',
    name: 'Диван «Норфолк»',
    description: 'Глубокий трёхместный диван в нейтральном оттенке для современной гостиной.',
    price: 79900,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    isHit: true
  },
  {
    id: 'loft-wardrobe',
    name: 'Шкаф «Лофт»',
    description: 'Система хранения с тонированным стеклом, подсветкой и модулями под гардероб.',
    price: 64900,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1616594039964-3f6b3e2b2fc7?auto=format&fit=crop&w=1200&q=80',
    isHit: true
  },
  {
    id: 'nord-table',
    name: 'Стол обеденный «Норд»',
    description: 'Обеденный стол с округлой геометрией и столешницей в тёплом природном тоне.',
    price: 54900,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  }
];

export const collections: Collection[] = [
  {
    id: 'scandi',
    title: 'Скандинавская коллекция',
    subtitle: 'Светлые формы, текстуры дерева и ощущение простора.',
    image:
      'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'minimal',
    title: 'Минимализм',
    subtitle: 'Чистые линии и функциональность без лишних деталей.',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'warm-wood',
    title: 'Тёплое дерево',
    subtitle: 'Натуральные оттенки и мягкая атмосфера семейного уюта.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80'
  }
];
