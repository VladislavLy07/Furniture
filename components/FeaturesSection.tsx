'use client';

import { motion } from 'framer-motion';
import { Leaf, Palette, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Натуральные материалы',
    description: 'Массив дерева, экологичные ткани и премиальная фурнитура.',
    icon: Leaf
  },
  {
    title: 'Современный дизайн',
    description: 'Точные пропорции, мягкие формы и актуальная эстетика.',
    icon: Palette
  },
  {
    title: 'Доставка по всей стране',
    description: 'Бережная логистика и удобные интервалы доставки.',
    icon: Truck
  },
  {
    title: 'Гарантия качества',
    description: 'Контроль каждого этапа и официальная гарантия на мебель.',
    icon: ShieldCheck
  }
];

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#ded6cd] bg-[#fbf7f2] p-6 shadow-[0_10px_25px_rgba(62,52,45,0.08)] transition-shadow hover:shadow-[0_14px_34px_rgba(62,52,45,0.14)]"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-[#dfd3c7] bg-[#f6ede2] p-2.5 text-[#8a6a4a]">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-semibold text-[#312a24]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6f645a]">{feature.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
