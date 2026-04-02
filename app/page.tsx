'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProductGrid } from '@/components/ProductGrid';
import { CollectionsSection } from '@/components/CollectionsSection';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { collections, products } from '@/data/mockData';

export default function HomePage() {
  const [cartCount, setCartCount] = useState(2);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#f7f1ea] text-[#2f2823]">
      <Header cartCount={cartCount} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
        <CollectionsSection collections={collections} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
