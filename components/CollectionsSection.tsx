'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Collection } from '@/data/mockData';

type CollectionsSectionProps = {
  collections: Collection[];
};

export function CollectionsSection({ collections }: CollectionsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <div className="mb-6">
        <h2 className="text-4xl font-semibold tracking-tight text-[#2f2823] md:text-5xl">Коллекции</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {collections.map((collection, index) => (
          <motion.article
            key={collection.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[1.75rem]"
          >
            <div className="relative h-80">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e2520]/60 via-[#2e2520]/20 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-[#f6ede5]">
              <h3 className="text-2xl font-semibold">{collection.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-[#f8efe6]/90">{collection.subtitle}</p>
              <button
                type="button"
                className="mt-4 rounded-xl border border-white/50 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20"
              >
                Смотреть коллекцию
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
