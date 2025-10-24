import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedYearProps {
  year: number | undefined;
  duration?: number;
  style?: 'primary-color' | 'secondary-color';
}

export const AnimatedYear = ({
  year,
  style,
  duration = 1
}: AnimatedYearProps) => {
  const [displayYear, setDisplayYear] = useState(year);
  if (!year) {
    return;
  }
  useEffect(() => {
    const obj = { value: displayYear };

    gsap.to(obj, {
      value: year,
      duration,
      roundProps: 'value',
      ease: 'power1.inOut',
      onUpdate: () => setDisplayYear(obj.value)
    });
  }, [year, duration]);

  return <span className={style}>{displayYear}</span>;
};
