import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedYearProps {
  year: number;
  style?: 'primary-color' | 'secondary-color';
}

export const AnimatedYear = ({ year, style }: AnimatedYearProps) => {
  const [displayYear, setDisplayYear] = useState(year);
  useEffect(() => {
    const obj = { value: displayYear };

    gsap.to(obj, {
      value: year,
      duration: 1,
      roundProps: 'value',
      ease: 'power1.inOut',
      onUpdate: () => setDisplayYear(obj.value)
    });
  }, [year, 1]);

  return <span className={style}>{displayYear}</span>;
};
