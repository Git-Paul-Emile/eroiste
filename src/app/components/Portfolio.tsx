"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface PortfolioProps {
  onNavigateToWork?: () => void;
  onArticleClick?: (articleId: number) => void;
}

export function Portfolio({
  onNavigateToWork,
  onArticleClick,
}: PortfolioProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const didDrag = useRef(false);

  const articles: Article[] = [
    {
      id: 1,
      title: "Stratégies de croissance pour les entreprises africaines à l'ère de l'IA",
      excerpt: "L'Afrique ne gagnera pas en copiant la Silicon Valley, mais en construisant son propre modèle de croissance.",
      category: "Stratégie",
      date: "12 juillet 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1080&q=80",
    },
    {
      id: 2,
      title: "Design Thinking en Afrique : repenser l'expérience utilisateur",
      excerpt: "Concevoir pour l'Afrique commence par comprendre l'humain africain. Les usages ne sont jamais séparés de leur contexte.",
      category: "Design",
      date: "28 juin 2025",
      image: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?w=1080&q=80",
    },
    {
      id: 3,
      title: "Eroïste : design, technologie et stratégie au service des entreprises africaines",
      excerpt: "Une nouvelle génération de studio pour accompagner les organisations africaines ambitieuses.",
      category: "Studio",
      date: "15 mai 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80",
    },
  ];

  // Track active dot via scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.scrollWidth / articles.length;
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIndex(Math.min(idx, articles.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [articles.length]);

  // Scroll to card
  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.scrollWidth / articles.length;
    el.scrollTo({ left: cardW * idx, behavior: 'smooth' });
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    didDrag.current = false;
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    el.scrollLeft = dragStartScroll.current - dx;
  };

  const onMouseUp = () => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(false);
    el.style.cursor = 'grab';
    el.style.userSelect = '';
    // Snap to nearest card
    const cardW = el.scrollWidth / articles.length;
    const idx = Math.round(el.scrollLeft / cardW);
    scrollTo(Math.min(idx, articles.length - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`py-20 lg:py-32 bg-[#F0EDE6] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl lg:text-4xl font-light text-[#191924] tracking-tight">
              Notre manifeste
            </h2>
            <ArrowRight className="w-6 h-6 text-[#1B5BFF]" />
          </div>
          <Button
            onClick={onNavigateToWork}
            variant="outline"
            className="border-[rgba(8,8,8,0.15)] text-[#191924] hover:border-[#1B5BFF] hover:text-[#191924] hover:bg-[#1B5BFF]/10 rounded-full px-6 py-2 text-sm font-medium"
          >
            → Voir tous les articles
          </Button>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
            paddingBottom: 8,
            scrollbarWidth: 'none',
          }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => {
                if (!didDrag.current && onArticleClick) onArticleClick(article.id);
              }}
              className="group flex-shrink-0"
              style={{
                scrollSnapAlign: 'start',
                width: 'clamp(280px, 32vw, 420px)',
                cursor: onArticleClick ? 'pointer' : 'grab',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden h-80 border border-[rgba(8,8,8,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191924]/90 via-[#191924]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1.5 leading-snug group-hover:text-[#1B5BFF] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#F0EDE6]/70 text-sm leading-relaxed">{article.excerpt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#1B5BFF]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-6">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                height: 2,
                width: i === activeIndex ? 32 : 12,
                background: i === activeIndex ? '#191924' : 'rgba(25,25,36,0.2)',
                border: 'none',
                borderRadius: 2,
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}