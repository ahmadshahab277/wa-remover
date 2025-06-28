import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './samplesec.css';

import img1 from '../../assets/Images/img-5.jpg';
import img2 from '../../assets/Images/img-6.jpg';
import img3 from '../../assets/Images/img-7.jpg';
import img4 from '../../assets/Images/img-8.jpg';
import img5 from '../../assets/Images/img-4.jpg';
import img6 from '../../assets/Images/img-2.jpg';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../contexts/LoaderContext';

const SampleSec = ({
  cardWidth = 256,
  cardHeight = 352,
  className = '',
  autoplay = true,
  autoplayDelay = 3000
}) => {
  const images = [img1, img2, img3, img4, img5, img6];
  const cardStackRef = useRef(null);
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationFrameId = useRef(null);
  const autoplayRef = useRef(null);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const [cardOrder, setCardOrder] = useState(() =>
    Array.from({ length: images.length }, (_, i) => i)
  );

  const getDurationFromCSS = useCallback((varName, el) => {
    const target = el || document.documentElement;
    const value = getComputedStyle(target)?.getPropertyValue(varName)?.trim();
    if (!value) return 0;
    if (value.endsWith("ms")) return parseFloat(value);
    if (value.endsWith("s")) return parseFloat(value) * 1000;
    return parseFloat(value) || 0;
  }, []);

  const getCards = useCallback(() => {
    if (!cardStackRef.current) return [];
    return [...cardStackRef.current.querySelectorAll('.image-card')];
  }, []);

  const getActiveCard = useCallback(() => getCards()[0] || null, [getCards]);

  const updatePositions = useCallback(() => {
    getCards().forEach((card, i) => {
      card.style.setProperty('--i', (i + 1).toString());
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
    });
  }, [getCards]);

  const applySwipeStyles = useCallback((deltaX) => {
    const card = getActiveCard();
    if (!card) return;
    card.style.setProperty('--swipe-x', `${deltaX}px`);
    card.style.setProperty('--swipe-rotate', `${deltaX * 0.2}deg`);
    card.style.opacity = (1 - Math.min(Math.abs(deltaX) / 100, 1) * 0.75).toString();
  }, [getActiveCard]);

  const handleStart = useCallback((clientX) => {
    if (isSwiping.current) return;
    isSwiping.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    const card = getActiveCard();
    if (card) card.style.transition = 'none';
  }, [getActiveCard]);

  const handleEnd = useCallback(() => {
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    const deltaX = 300;
    const duration = getDurationFromCSS('--card-swap-duration', cardStackRef.current);
    const card = getActiveCard();

    if (card) {
      card.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
      card.style.setProperty('--swipe-x', `${deltaX}px`);
      card.style.setProperty('--swipe-rotate', `20deg`);

      setTimeout(() => {
        if (getActiveCard() === card) card.style.setProperty('--swipe-rotate', `-20deg`);
      }, duration * 0.5);

      setTimeout(() => {
        setCardOrder(prev => [...prev.slice(1), prev[0]]);
      }, duration);
    }

    isSwiping.current = false;
    startX.current = 0;
    currentX.current = 0;
  }, [getDurationFromCSS, getActiveCard]);

  const handleMove = useCallback((clientX) => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

    animationFrameId.current = requestAnimationFrame(() => {
      currentX.current = clientX;
      const deltaX = currentX.current - startX.current;
      applySwipeStyles(deltaX);
      if (Math.abs(deltaX) > 50) handleEnd();
    });
  }, [applySwipeStyles, handleEnd]);

  useEffect(() => {
    const el = cardStackRef.current;
    if (!el) return;

    const pointerDown = e => handleStart(e.clientX);
    const pointerMove = e => handleMove(e.clientX);

    el.addEventListener('pointerdown', pointerDown);
    el.addEventListener('pointermove', pointerMove);
    el.addEventListener('pointerup', handleEnd);

    return () => {
      el.removeEventListener('pointerdown', pointerDown);
      el.removeEventListener('pointermove', pointerMove);
      el.removeEventListener('pointerup', handleEnd);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [handleStart, handleMove, handleEnd]);

  useEffect(() => updatePositions(), [cardOrder, updatePositions]);

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => handleEnd(), autoplayDelay);
    return () => clearInterval(autoplayRef.current);
  }, [handleEnd, autoplay, autoplayDelay]);

  // Create floating SVG paths
  const floatingPaths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
    opacity: 0.1 + i * 0.03,
    width: 0.5 + i * 0.03
  }));

  return (
    <div className={`hero-wrapper relative overflow-hidden ${className}`}>
      {/* Animated Background Paths */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full text-slate-900 dark:text-white" viewBox="0 0 696 316" fill="none">
          {floatingPaths.map(path => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={path.opacity}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
              transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Info Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl">AI Image Background Remover</h1>
          <p className="text-white max-w-md">
            Remove image backgrounds with a single swipe. Clean, precise and fast.
          </p>
          <button
            className="px-6 py-3 mt-4 rounded-[8px] cursor-pointer text-white font-medium bg-[var(--tog-color)] hover:bg-[var(--primary-color)] transition"
            onClick={() => {
              navigate("/upload");
              setLoading(true);
            }}
          >
            Try it now
          </button>
        </div>

        {/* Image Swiper Section */}
        <section
          ref={cardStackRef}
          className="relative grid place-content-center select-none"
          style={{
            width: cardWidth + 32,
            height: cardHeight + 32,
            touchAction: 'none',
            transformStyle: 'preserve-3d',
            '--card-perspective': '700px',
            '--card-z-offset': '12px',
            '--card-y-offset': '7px',
            '--card-max-z-index': images.length.toString(),
            '--card-swap-duration': '0.9s'
          }}
        >
          {cardOrder.map((originalIndex, displayIndex) => (
            <article
              key={`${originalIndex}-${images[originalIndex]}`}
              className="image-card absolute cursor-grab active:cursor-grabbing place-self-center border border-slate-300 rounded-[8px] shadow-xl overflow-hidden transition-all will-change-transform"
              style={{
                '--i': (displayIndex + 1).toString(),
                zIndex: images.length - displayIndex,
                width: cardWidth,
                height: cardHeight,
                transform: `perspective(var(--card-perspective))
                            translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                            translateY(calc(var(--card-y-offset) * var(--i)))
                            translateX(var(--swipe-x, 0px))
                            rotateY(var(--swipe-rotate, 0deg))`
              }}
            >
              <img
                src={images[originalIndex]}
                alt={`Swiper image ${originalIndex + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
              />
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export { SampleSec };
