import { useEffect } from "react";

export default function TopSellerAnimation() {
  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>(".topSellerRow");

    rows.forEach((row, index) => {
      const children = Array.from(row.children) as HTMLElement[];

      children.forEach(child => {
        const clone = child.cloneNode(true) as HTMLElement;
        row.appendChild(clone);
      });

      const rowWidth = children.reduce((acc, child) => acc + child.offsetWidth, 0);

      let x = 0;
      const speed = index % 2 === 0 ? 1 : -1; 

      const animate = () => {
        x += speed;

        x = ((x % rowWidth) + rowWidth) % rowWidth;

        row.style.transform = `translateX(${-x}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    });
  }, []);

  return null;
}
