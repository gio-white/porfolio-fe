import { BentoGrid, BentoGridItem } from "../../ui/BentoGridHome";
import { certification } from "@/data/home-page/highlights";

const HighlightsGrid = () => {
  return (
    <section id="highlights">
      <BentoGrid>
        {certification.map(({ id, name, desc, className, img }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={name}
            description={desc}
            className={className}
            img={img}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
export default HighlightsGrid;
