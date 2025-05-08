import { HoverEffect } from "../components/ui/card-hover-effect";

export const projects = [
  {
    title: "Učinkovito rješenje",
    image: "/images/serum-1.png", // Replace with actual image path
    link: "/services/ucinkovito-rjesenje" // Add link for detail page
  },
  {
    title: "Personalizirajte njegu",
    image: "/images/mirror-1.png", // Replace with actual image path
    link: "/services/personalized-care" // Add link for detail page
  },
  {
    title: "Moderna tehnologija",
    image: "/images/microscope-1.png", // Replace with actual image path
    link: "/services/modern-tehnology" // Add link for detail page
  },
  {
    title: "Stručni profesionalac",
    image: "/images/facial-massage-1.png", // Replace with actual image path
    link: "/services/expert-professional" // Add link for detail page
  },
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex flex-row-1 sm:grid-cols-2 ml-5 md:grid-cols-3 gap-2">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
