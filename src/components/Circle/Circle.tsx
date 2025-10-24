import React, { useEffect, useRef, useState } from 'react';

export function Circle() {
  const items = [1, 2, 3, 4, 5, 6];
  const peak = 300;

  const circleRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [rotate, setRotate] = useState(peak);
  const [activeItem, setActiveItem] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  useEffect(() => {
    if (circleRef.current) {
      const [width, height] = [
        circleRef.current.clientWidth,
        circleRef.current.clientHeight
      ];
      console.log(circleRef.current.clientWidth);
      setRadius(Math.min(width, height) / 2);
    }
  }, []);

  const handleClick = (index: number) => {
    const anglePerItem = 360 / items.length;
    setRotate(peak - index * anglePerItem);
    setActiveItem(index);
  };

  return (
    <div
      className='circle'
      ref={circleRef}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {items.map((item, index) => {
        const baseSize = 56;
        const smallSize = 6;
        const size =
          index === activeItem || hoverIndex === index ? baseSize : smallSize;
        const angle = (360 / items.length) * index;
        const rad = (angle * 3.14) / 180;
        const x = radius * Math.cos(rad) - size / 2;
        const y = radius * Math.sin(rad) - size / 2;
        return (
          <div
            key={item}
            className={`item ${index === activeItem ? 'active' : ''}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `translate(${x}px, ${y}px) rotate(${360 - rotate}deg)`
            }}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
