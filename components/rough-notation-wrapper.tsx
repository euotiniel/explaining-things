// components/RoughNotationWrapper.tsx
'use client';

import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import type { RoughAnnotation, RoughAnnotationConfig } from 'rough-notation/lib/model';

interface RoughNotationWrapperProps {
  children: React.ReactNode;
  type?: RoughAnnotationConfig['type'];
  color?: string;
  animate?: boolean;
  animationDuration?: number;
  strokeWidth?: number;
  padding?: number;
  multiline?: boolean;
  iterations?: number;
  brackets?: RoughAnnotationConfig['brackets'];
}

export default function RoughNotationWrapper({
  children,
  type = 'underline',
  color = '#fbbf24',
  animate = true,
  animationDuration = 800,
  strokeWidth = 2,
  padding = 5,
  multiline = true,
  iterations = 2,
  brackets,
}: RoughNotationWrapperProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    if (ref.current && !annotationRef.current) {
      annotationRef.current = annotate(ref.current, {
        type,
        color,
        animate,
        animationDuration,
        strokeWidth,
        padding,
        multiline,
        iterations,
        brackets,
      });
      
      annotationRef.current.show();
    }

    return () => {
      if (annotationRef.current) {
        annotationRef.current.hide();
      }
    };
  }, [type, color, animate, animationDuration, strokeWidth, padding, multiline, iterations, brackets]);

  return <span ref={ref}>{children}</span>;
}