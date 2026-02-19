"use client";

import { memo, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TypewriterEffectProps {
  text: string | string[];
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypewriterEffect = memo(function TypewriterEffect({
  text,
  className,
  speed = 0.04,
  delay = 0,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  const fullText = Array.isArray(text) ? text.join("") : text;

  useEffect(() => {
    if (isInView && !hasAnimated.current && !isTyping) {
      hasAnimated.current = true;
      setIsTyping(true);
      
      const startTimeout = setTimeout(() => {
        let i = 0;
        setDisplayText("");
        
        const typeInterval = setInterval(() => {
          if (i < fullText.length) {
            setDisplayText(fullText.slice(0, i + 1));
            i++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
          }
        }, speed * 1000);

        return () => clearInterval(typeInterval);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, fullText, speed, delay, isTyping]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle"
          aria-hidden="true"
        />
      )}
    </span>
  );
});
