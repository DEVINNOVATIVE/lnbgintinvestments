'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall, Sparkles, TrendingUp } from 'lucide-react';

const carouselSlides = [
  {
    image: '/assets/bn1-5-3.jpg',
    tag: 'WELCOME TO LNBG INTERNATIONAL INVESTMENT',
    icon: Sparkles,
    titleLine1: 'Make a ',
    highlight: 'unique planning',
    titleLine2: ' for your business',
    description:
      'Providing tailored investment strategies and expert financial planning to elevate your enterprise.',
  },
  {
    image: '/assets/bn2-5-3.jpg',
    tag: 'IMPROVE YOUR BUSINESS',
    icon: TrendingUp,
    titleLine1: 'We will help you To ',
    highlight: 'grow up',
    titleLine2: ' your business',
    description:
      'Strategic insights, asset management, and research services built to accelerate your corporate vision.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const activeSlide = carouselSlides[currentSlide];
  const TagIcon = activeSlide.icon;

  return (
    <section className="relative min-h-[700px] lg:min-h-[760px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Images Carousel */}
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            quality={100}
            unoptimized // Keeps background imagery crisp & clear
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Light Gradient Overlay for Image Clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 z-10" />

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Dynamic Tagline */}
          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-white/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-md">
            <TagIcon className="w-4 h-4 text-red-500" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {activeSlide.tag}
            </span>
          </div>

          {/* Dynamic Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] mb-6 tracking-tight drop-shadow-md">
            {activeSlide.titleLine1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-400">
              {activeSlide.highlight}
            </span>
            {activeSlide.titleLine2}
          </h1>

          {/* Subtext */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal drop-shadow">
            {activeSlide.description}
          </p>

          {/* Modern Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-white hover:text-slate-900 hover:border-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-red-400 group-hover:text-slate-900 group-hover:rotate-12 transition-all duration-300" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Carousel Controls */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full bg-slate-900/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Dots */}
        <div className="flex items-center gap-2 px-2">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-red-600' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-slate-900/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}