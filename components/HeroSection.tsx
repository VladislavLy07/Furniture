'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-8 pt-8 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-7"
      >
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#2b2520] md:text-6xl">
          Мебель, которая формирует характер интерьера
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[#6a5f56] md:text-xl">
          Премиальная мебель из натуральных материалов для вашего комфорта и уюта.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl bg-[#3a2f28] px-7 py-3 text-base font-medium text-white shadow-[0_14px_30px_rgba(58,47,40,0.25)] transition hover:bg-[#2f2621]"
            type="button"
          >
            Смотреть каталог
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl border border-[#d9d1c8] bg-[#f5eee7] px-7 py-3 text-base font-medium text-[#4e433b] transition hover:bg-[#efe7df]"
            type="button"
          >
            Новая коллекция
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div
          className="h-[420px] overflow-hidden rounded-[2rem] border border-[#dfd7ce] bg-cover bg-center shadow-[0_25px_60px_rgba(54,44,38,0.16)] md:h-[560px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(247,241,234,0.82), rgba(247,241,234,0.2)), url('https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1600&q=80')"
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="absolute bottom-4 right-4 flex max-w-[260px] items-center gap-3 rounded-2xl border border-[#ded4ca] bg-[#f8f2eb]/95 p-4 shadow-lg md:bottom-8 md:right-8"
        >
          <span className="rounded-full border border-[#d6c4af] bg-[#f3e7d7] p-2 text-[#8b6744]">
            <Award size={18} />
          </span>
          <p className="text-sm font-medium text-[#4f453d]">Премиальная коллекция 2026</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
