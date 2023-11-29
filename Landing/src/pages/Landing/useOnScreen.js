import React, { useState, useEffect } from 'react';

// Hook para detectar si un elemento es visible en la pantalla
export const useOnScreen = (ref, rootMargin = '0px') => {
  // Estado y setter para el estado de visibilidad
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualiza nuestro estado cuando el observador notifica la visibilidad del elemento
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
};