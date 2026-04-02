'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '@/data/mockData';

type ProductGridProps = {
  products: Product[];
  onAddToCart: () => void;
};

const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price);

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-[#2f2823] md:text-5xl">Популярные товары</h2>
        <button
          type="button"
          className="rounded-full border border-[#ddd4cb] bg-[#f6eee6] px-5 py-2 text-sm font-medium text-[#5b5048] transition hover:bg-[#efe6dd]"
        >
          Все товары
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-3xl border border-[#e1d7ce] bg-[#fcf8f3] shadow-[0_12px_30px_rgba(59,47,40,0.10)]"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />

              {product.isHit && (
                <span className="absolute left-3 top-3 rounded-full bg-[#4d3a2f]/90 px-3 py-1 text-xs font-medium text-[#f5ece2]">
                  Хит
                </span>
              )}
            </div>

            <div className="space-y-3 p-5">
              <div>
                <h3 className="text-2xl font-semibold text-[#2d2621]">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6d6258]">{product.description}</p>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full border border-[#e4d8cd] bg-[#f8efe6] px-3 py-1 text-xs font-semibold text-[#7d6651]">
                <Star size={14} className="fill-current" /> {product.rating} / 5
              </div>

              <p className="text-4xl font-semibold tracking-tight text-[#2f2823]">{formatPrice(product.price)} ₽</p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onAddToCart}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#3d322b] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#312821] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d5241]"
                >
                  <ShoppingBag size={16} /> В корзину
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-[#ddd3c8] bg-white p-3 text-[#6d6258] transition hover:bg-[#f3ebe3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d5241]"
                  aria-label="Добавить в избранное"
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
