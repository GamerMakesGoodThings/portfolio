"use client";

import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    timeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink ml-0.5 inline-block w-[3px] h-[1em] bg-cyan-400 align-middle" />
    </span>
  );
}
