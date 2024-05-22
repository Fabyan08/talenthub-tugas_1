import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { FaRegBookmark } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

interface Slide {
  title: string;
  background: any;
  alt: string;
}

interface CustomSwiperProps {
  slides: Slide[];
  spaceBetween: number;
}

const CustomSwiper: FC<CustomSwiperProps> = ({ slides, spaceBetween }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="fixed top-0 z-[999] backdrop-blur-sm left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between gap-10">
              <h1>Modal Content</h1>
              <button onClick={toggleModal}>x</button>
            </div>
            <div className="mt-10">
              <h1 className="font-semibold text-dark text-3xl">
                Belum Ada Data, Masih Belajar 👀
              </h1>
            </div>
          </div>
        </div>
      )}
      <Swiper
        spaceBetween={spaceBetween}
        // slidesPerView={slidesPerView}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        modules={[FreeMode, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-80 rounded-xl relative flex justify-center">
              <div className="font-semibold absolute bg-white/40 backdrop-blur-sm p-2 w-fit rounded-md top-2 text-dark pt-2 text-2xl z-40">
                <h1 className="text-center">{slide.title}</h1>
              </div>
              <div className="absolute top-2 left-2">
                <div className="bg-white w-10 h-10 flex justify-center items-center rounded-md">
                  <FaRegBookmark className="text-red-500 text-2xl" />
                </div>
              </div>
              <Image
                src={slide.background}
                alt={slide.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover object-center rounded-xl"
              />
              <button
                className="absolute bottom-4 px-4 w-full"
                onClick={toggleModal}
              >
                <div className="bg-dark hover:bg-white/40 backdrop-blur-sm hover:text-dark rounded-md px-14 text-center py-4 text-white font-bold text-md duration-150 hover:-translate-y-3">
                  <h1>DETAIL</h1>
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSwiper;
