"use client";

import Card from "@/components/Card";
import Counter from "@/components/Counter";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Watch from "../../public/img/watch.jpg";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { LuCat } from "react-icons/lu";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    name: string;
    imgCat: string;
    harga: string;
  } | null>(null);
  let img = "https://cdn2.thecatapi.com/images";

  const handleCardClick = (name: string, imgCat: string, harga: string) => {
    setSelectedCard({ name, imgCat, harga });
    setModal(true);
  };

  const [activeSection, setActiveSection] = useState("");

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className="bg-main3 w-full bg-cover ">
      <div className="bg-gradient-to-b from-secondary/20 to-primary/20 pb-60">
        <header>
          <div className="flex justify-center">
            <nav className="bg-white/30 animate-bounce  wrapper backdrop-blur-sm border-2 border-slate-700/30 rounded-full w-full shadow-sm py-4 pt-4 fixed bottom-10 z-10">
              <div className="wrapper flex justify-between">
                <h1 className="font-bold text-3xl text-dark">
                  List <span className="text-third">Data.</span>
                </h1>
                <ul className="flex gap-2 items-center">
                  <li
                    className={`${
                      activeSection === "#" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#" onClick={() => handleLinkClick("#")}>
                      Home
                    </a>
                  </li>
                  <li
                    className={`${
                      activeSection === "kucing" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#kucing" onClick={() => handleLinkClick("kucing")}>
                      Kucing
                    </a>
                  </li>
                  <li
                    className={`${
                      activeSection === "produk" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#produk" onClick={() => handleLinkClick("produk")}>
                      Produk Jualan
                    </a>
                  </li>
                  <li
                    className={`${
                      activeSection === "character" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a
                      href="#character"
                      onClick={() => handleLinkClick("character")}
                    >
                      Character Figure
                    </a>
                  </li>
                  <li
                    className={`${
                      activeSection === "others" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#others" onClick={() => handleLinkClick("others")}>
                      Others
                    </a>
                  </li>
                </ul>
                <div className="flex gap-2 items-center">
                  <div className="text-white bg-dark w-10 h-10 flex justify-center items-center rounded-full">
                    <FaSearch className="text-2xl" />
                  </div>
                  <div className="text-white bg-dark w-10 h-10 flex justify-center items-center rounded-full">
                    <FaUser className="text-2xl" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <section id="hero" className="pt-10 wrapper">
            <div className="flex gap-10">
              <div className="w-2/3 h-80 rounded-2xl bg-primary relative ">
                <div className="bg-main bg-opacity-15 w-full h-full bg-cover bg-center p-10">
                  <button className="bg-white text-dark text-xl font-bold absolute bottom-0 right-0 rounded-tl-2xl w-fit h-10 px-4">
                    Go Ahead
                  </button>
                  <div className="flex flex-col text-white font-bold text-4xl gap-2">
                    <h1>STARTS YOUR</h1>
                    <h1>Journey</h1>
                  </div>
                  <p className="text-white pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae quisquam ab quae aliquam unde? Accusantium nesciunt
                    rerum repudiandae quae laboriosam ipsa optio officiis quod
                    distinctio nisi nihil illo ipsam ratione reprehenderit,
                    vero, consequatur laborum earum, voluptate ipsum error.
                    Repellat, eius.
                  </p>
                </div>
              </div>
              <div className="w-1/3 h-80 rounded-2xl bg-hero bg-cover bg-center relative flex justify-center items-center">
                <div className="bg-white/20 cursor-pointer backdrop-blur-md w-20 h-20 rounded-full flex justify-center items-center">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <div className="flex mt-4 gap-4 items-center">
              <div className="w-60 h-80 rounded-xl bg-sasuke bg-cover relative bg-center">
                <div className="text-center font-semibold text-dark pt-2 text-2xl">
                  NEW US
                </div>
                <div className="absolute bottom-10 px-4 w-full">
                  <div className="flex w-full">
                    <div className="w-full bg-white/50 h-10 relative rounded-full flex justify-center items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-dark bg-white/50 absolute left-0 flex justify-center items-center">
                        <FaArrowLeft className="text-dark text-xl" />
                      </div>
                      <h1 className="text-dark font-bold">View All</h1>
                      <div className="w-10 h-10 rounded-full border-2 border-dark bg-dark absolute right-0 flex justify-center items-center">
                        <FaArrowRight className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4">
                  <div className="w-40 h-[5rem] bg-third rounded-md p-4">
                    <h1 className="text-white">
                      run by Fabyan Yastika Permana
                    </h1>
                  </div>
                  <div className="bg-white w-[90%] flex justify-center items-center rounded-xl h-[5rem]">
                    <h1 className="font-semibold text-xl">
                      Stay{" "}
                      <span className="capitalize text-3xl font-bold">
                        Awesome
                      </span>
                    </h1>
                  </div>
                </div>
                <h1 className="text-dark text-2xl font-semibold">
                  Choose Your List <span className="text-third">Data. </span>
                </h1>
                <div className="flex items-center justify-between gap-10 w-full">
                  <div className="bg-slate-300 rounded-xl shadow-xl relative w-full h-[10.8rem] p-4 flex flex-col gap-2">
                    <Image
                      src={Watch}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Apple Watch</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                  <div className="bg-slate-300 rounded-xl shadow-xl relative w-full h-[10.8rem] p-4 flex flex-col gap-2">
                    <Image
                      src={Watch}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Apple Watch</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                  <div className="bg-slate-300 rounded-xl shadow-xl relative w-full h-[10.8rem] p-4 flex flex-col gap-2">
                    <Image
                      src={Watch}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Apple Watch</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                  <div className="bg-slate-300 rounded-xl shadow-xl relative w-full h-[10.8rem] p-4 flex flex-col gap-2">
                    <Image
                      src={Watch}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Apple Watch</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <section id="kucing" className="mt-10 wrapper ">
          <div className="flex items-center gap-4 text-dark text-3xl font-semibold">
            <LuCat />
            <h1>Kucing</h1>
          </div>
          <div className="mt-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={3.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              freeMode={true}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[FreeMode, Pagination]}
            >
              <SwiperSlide>
                {" "}
                <div className="h-80 rounded-xl bg-sasuke bg-cover relative bg-center">
                  <div className="text-center font-semibold text-dark pt-2 text-2xl">
                    NEW US
                  </div>
                  <div className="absolute bottom-10 px-4 w-full">
                    <div className="flex w-full">
                      <div className="w-full bg-white/50 h-10 relative rounded-full flex justify-center items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-white/50 absolute left-0 flex justify-center items-center">
                          <FaArrowLeft className="text-dark text-xl" />
                        </div>
                        <h1 className="text-dark font-bold">View All</h1>
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-dark absolute right-0 flex justify-center items-center">
                          <FaArrowRight className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="h-80 rounded-xl bg-sasuke bg-cover relative bg-center">
                  <div className="text-center font-semibold text-dark pt-2 text-2xl">
                    NEW US
                  </div>
                  <div className="absolute bottom-10 px-4 w-full">
                    <div className="flex w-full">
                      <div className="w-full bg-white/50 h-10 relative rounded-full flex justify-center items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-white/50 absolute left-0 flex justify-center items-center">
                          <FaArrowLeft className="text-dark text-xl" />
                        </div>
                        <h1 className="text-dark font-bold">View All</h1>
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-dark absolute right-0 flex justify-center items-center">
                          <FaArrowRight className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="h-80 rounded-xl bg-sasuke bg-cover relative bg-center">
                  <div className="text-center font-semibold text-dark pt-2 text-2xl">
                    NEW US
                  </div>
                  <div className="absolute bottom-10 px-4 w-full">
                    <div className="flex w-full">
                      <div className="w-full bg-white/50 h-10 relative rounded-full flex justify-center items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-white/50 absolute left-0 flex justify-center items-center">
                          <FaArrowLeft className="text-dark text-xl" />
                        </div>
                        <h1 className="text-dark font-bold">View All</h1>
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-dark absolute right-0 flex justify-center items-center">
                          <FaArrowRight className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="h-80 rounded-xl bg-sasuke bg-cover relative bg-center">
                  <div className="text-center font-semibold text-dark pt-2 text-2xl">
                    NEW US
                  </div>
                  <div className="absolute bottom-10 px-4 w-full">
                    <div className="flex w-full">
                      <div className="w-full bg-white/50 h-10 relative rounded-full flex justify-center items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-white/50 absolute left-0 flex justify-center items-center">
                          <FaArrowLeft className="text-dark text-xl" />
                        </div>
                        <h1 className="text-dark font-bold">View All</h1>
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-dark absolute right-0 flex justify-center items-center">
                          <FaArrowRight className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </main>
  );
}
