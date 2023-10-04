import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/carousel.css';

gsap.registerPlugin(ScrollTrigger);

function Carousel() {
  const imgsRef = useRef([]);
  const tlsRef = useRef([]);
  const rowRef = useRef(null);

  useEffect(() => {
    
    const imgs = imgsRef.current;
    const tls = tlsRef.current;

    gsap.set(imgs, {
      attr: { preserveAspectRatio: 'xMidYMid slice', width: '390', height: '300', 'clip-path': 'url(#cp1)' },
    });

    gsap.set(rowRef.current, { rotate: -15, svgOrigin: '400 400' });

    imgs.forEach((img, i) => {
      tls.push(
        gsap
          .timeline({ defaults: { duration: 1, ease: 'none' }, paused: true, repeat: -1 })
          .fromTo(img, { x: -400 }, { x: 1600 })
          .progress((i % 5) / 5)
      );
    });

    // Initialize ScrollTrigger
    ScrollTrigger.create({
      trigger: window,
      scroller: window,
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => prev(),
      onEnterBack: () => next(),
      toggleActions: 'play none none none',
    });
  }, []);

  function prev() {
    tlsRef.current.forEach((tl, i) => {
      gsap.to(tl, {
        progress: () => (i < 5 ? '+=0.03' : '+=0.02'),
        modifiers: {
          progress: (p) => gsap.utils.wrap(0, 1, p),
        },
        ease: 'power2',
      });
    });
  }

  function next() {
    tlsRef.current.forEach((tl, i) => {
      gsap.to(tl, {
        progress: () => (i < 5 ? '-=0.03' : '-=0.02'),
        modifiers: {
          progress: (p) => gsap.utils.wrap(0, 1, p),
        },
        ease: 'power2',
      });
    });
  }

  return (
    <div>
      <h2>Instagram Carousel</h2>
      <svg id="stage" viewBox="0 0 900 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="cp1">
          <rect width="390" height="300" rx="15" />
        </clipPath>

        <g className="r1 row" ref={rowRef}>
          <image href="https://picsum.photos/id/55/800/600" ref={(el) => (imgsRef.current[0] = el)} />
          <image href="https://picsum.photos/id/98/800/600" ref={(el) => (imgsRef.current[1] = el)} />
          <image href="https://picsum.photos/id/35/800/600" ref={(el) => (imgsRef.current[2] = el)} />
          <image href="https://picsum.photos/id/62/800/600" ref={(el) => (imgsRef.current[3] = el)} />
          <image href="https://picsum.photos/id/46/800/600" ref={(el) => (imgsRef.current[4] = el)} />
        </g>

        <g className="r2 row">
          <image href="https://picsum.photos/id/50/800/600" />
          <image href="https://picsum.photos/id/80/800/600" />
          <image href="https://picsum.photos/id/40/800/600" />
          <image href="https://picsum.photos/id/69/800/600" />
          <image href="https://picsum.photos/id/66/800/600" />
        </g>
      </svg>
    </div>
  );
}

export default Carousel;