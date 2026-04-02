'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const metrics = [
  { value: '10+', label: 'лет опыта' },
  { value: '5000+', label: 'довольных клиентов' },
  { value: '100%', label: 'натуральные материалы' }
];

export function AboutSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="space-y-5"
      >
        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#2f2823] md:text-5xl">
          Мы создаём мебель, которая объединяет эстетику, комфорт и долговечность.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[#6e6258] md:text-lg">
          Каждая коллекция разрабатывается командой дизайнеров и технологов, чтобы сочетать современный
          интерьерный язык с тактильным ощущением домашнего тепла.
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-[#6e6258] md:text-lg">
          Мы тщательно подбираем материалы, контролируем производство и сопровождаем клиента от выбора модели
          до финальной доставки и сборки.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[#dfd5cb] bg-[#faf4ed] p-4">
              <p className="text-2xl font-semibold text-[#3a3028]">{metric.value}</p>
              <p className="text-sm text-[#6e6258]">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative h-[420px] overflow-hidden rounded-[2rem] border border-[#e0d5cb] shadow-[0_25px_50px_rgba(58,47,40,0.14)]"
      >
        <Image
          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80"
          alt="Атмосферный интерьер"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </section>
  );
}
