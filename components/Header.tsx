'use client';

import Link from 'next/link';
import { Heart, Search, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

type HeaderProps = {
  cartCount: number;
};

const navItems = ['Главная', 'Каталог', 'Коллекции', 'О нас', 'Контакты'];

export function Header({ cartCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d2ca]/70 bg-[#f7f1ea]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="#" className="text-3xl font-semibold tracking-tight text-[#2f2924]">
          Мебель
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Главная навигация">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-[#5f554d] transition-colors duration-300 hover:text-[#2f2924]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[Search, Heart].map((Icon, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-[#d8d0c8] bg-white/90 p-2.5 text-[#4a413a] transition-shadow hover:shadow-sm"
              type="button"
              aria-label="action"
            >
              <Icon size={18} />
            </motion.button>
          ))}

          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative rounded-full border border-[#d8d0c8] bg-white/90 p-2.5 text-[#4a413a] transition-shadow hover:shadow-sm"
            type="button"
            aria-label="Корзина"
          >
            <ShoppingBag size={18} />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#3f342d] px-1 text-[11px] font-semibold text-white">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
