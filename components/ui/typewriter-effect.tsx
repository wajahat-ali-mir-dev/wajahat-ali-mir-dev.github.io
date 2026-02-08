"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterEffectProps {
  text: string | string[];
  className?: string;
  cursorClassName?: string;
  speed?: number;
  delay?: number;
}

export function TypewriterEffect({
  text,
  className,
  cursorClassName,
  speed = 0.05,
  delay = 0,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const textArray = Array.isArray(text) ? text : [text];
  const fullText = textArray.join(""); // For simple typing, join if array, or enhance for multi-line later if needed.

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      let i = 0;
      setDisplayText(""); // Ensure starts empty
      
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
    } else if (!isInView) {
      setDisplayText("");
      setIsTyping(false);
    }
  }, [isInView, fullText, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${cursorClassName}`}
      />
    </span>
  );
}
