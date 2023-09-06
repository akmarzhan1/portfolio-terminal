import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
}

export function Counter({ from, to }: CounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2.5,
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(0);
        }
      },
      ease: [0.4, 0, 0.2, 1],
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}
