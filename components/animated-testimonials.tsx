import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    { src: "/images/image-1.jpeg" },
    { src: "/images/image-2.jpeg" },
    { src: "/images/image-3.jpeg" },
    { src: "/images/image-4.jpeg" },
    { src: "/images/image-5.jpeg" },
    { src: "/images/image-6.jpeg" },
    { src: "/images/image-7.jpeg" },
    { src: "/images/image-8.jpeg" },
    { src: "/images/image-9.jpeg" },
    { src: "/images/image-10.jpeg" },
    { src: "/images/image-11.jpeg" },
    { src: "/images/image-12.jpeg" },
    { src: "/images/image-13.jpeg" },
    { src: "/images/image-14.jpeg" },
    { src: "/images/image-15.jpeg" },
    { src: "/images/image-16.jpeg" },
    { src: "/images/image-17.jpeg" },
    { src: "/images/image-18.jpeg" },
  ];

  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      autoplay={true}
      intervalTime={2000} // Optional: Adjust autoplay interval (default is 5000ms)
    />
  );
}
