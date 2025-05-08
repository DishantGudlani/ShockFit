import { FocusCards } from "../components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "",
      src: "/images/image-1.jpeg",
      },
    {
      title: "",
      src: "/images/image-2.jpeg",
      },
    {
      title: "",
      src: "/images/image-3.jpeg",
      
    },
    {
      title: "",
      src: "/images/image-4.jpeg",
      
    },
    {
      title: "",
      src: "/images/image-5.jpeg",
      
    },
    {
      title: "",
      src: "/images/image-6.jpeg",
      },
      {
        title: "",
        src: "/images/image-7.jpeg",
        },
   
      // {
      //   title: "",
      //   src: "/images/image-11.jpeg",
        
      // },
      {
        title: "",
        src: "/images/image-12.jpeg",
        },
        {
          title: "",
          src: "/images/image-13.jpeg",
          },
        {
          title: "",
          src: "/images/image-14.jpeg",
          
        },
        {
          title: "",
          src: "/images/image-15.jpeg",
          
        },
        {
          title: "",
          src: "/images/image-16.jpeg",
          
        },
      
  ];

  return <FocusCards cards={cards} />;
}
