"use client";

import Card from "@/components/Card";
import Counter from "@/components/Counter";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Watch from "../../public/img/Watch.jpg";
import Sasuke from "../../public/img/sasuke.jpg";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { LuCat } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { FaArrowAltCircleUp } from "react-icons/fa";

import CustomSwiper from "@/components/CustomSwiper";

// Kucing
import kucing1 from "../../public/img/kucing/kucing1.jpg";
import kucing2 from "../../public/img/kucing/kucing2.jpg";
import kucing3 from "../../public/img/kucing/kucing3.jpg";
import kucing4 from "../../public/img/kucing/kucing4.jpg";
import kucing5 from "../../public/img/kucing/kucing5.jpg";

// Figure
import figure1 from "../../public/img/figure/figure1.jpg";
import figure2 from "../../public/img/figure/figure2.jpg";
import figure3 from "../../public/img/figure/figure3.jpg";
import figure4 from "../../public/img/figure/figure4.jpg";

// Produk
import produk1 from "../../public/img/produk/produk1.jpg";
import produk2 from "../../public/img/produk/produk2.jpg";
import produk3 from "../../public/img/produk/produk3.jpg";
import produk4 from "../../public/img/produk/produk4.jpg";
import { IoHomeSharp } from "react-icons/io5";
import { GiHoodedFigure } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const kucing = [
    {
      title: "Kucing Peliharaan",
      background: kucing1,
      alt: "kucing 1",
    },
    {
      title: "Kucing Putih",
      background: kucing2,
      alt: "kucing 2",
    },
    {
      title: "Kucing Oren",
      background: kucing3,
      alt: "kucing 3",
    },
    {
      title: "Kucing Lucu",
      background: kucing4,
      alt: "kucing 4",
    },
    {
      title: "Kucing Narsis",
      background: kucing5,
      alt: "kucing 5",
    },
  ];

  const figure = [
    {
      title: "Figure 1",
      background: Sasuke,
      alt: "sasuke",
    },
    {
      title: "Figure 2",
      background: figure2,
      alt: "figure 2",
    },
    {
      title: "Figure 3",
      background: figure3,
      alt: "figure 3",
    },
    {
      title: "Figure 4",
      background: figure4,
      alt: "figure 4",
    },
    {
      title: "Figure 5",
      background: figure1,
      alt: "figure 5",
    },
  ];
  const produk = [
    {
      title: "Produk 1",
      background: Watch,
      alt: "produk 1",
    },
    {
      title: "Produk 2",
      background: produk2,
      alt: "produk 2",
    },
    {
      title: "Produk 3",
      background: produk3,
      alt: "produk 3",
    },
    {
      title: "Produk 4",
      background: produk4,
      alt: "produk 4",
    },
    {
      title: "Produk 5",
      background: produk1,
      alt: "produk 5",
    },
  ];

  return (
    <main className="bg-main3 w-full bg-cover ">
      {modal && (
        <div className="fixed top-0 z-[999] backdrop-blur-sm left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between gap-10">
              <h1 className="font-semibold text-dark">Introduction Cat</h1>
              <button onClick={toggleModal}>x</button>
            </div>
            <div className="mt-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nnjXKnsPOGs?si=ngGp9juBpjVDdmpC"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      )}
      <div className="bg-gradient-to-b from-secondary/20 to-primary/20 pb-40">
        <header>
          <div className="flex justify-center">
            <nav className="bg-white/30 animate-bounce  wrapper backdrop-blur-sm border-2 border-slate-700/30 rounded-full w-full shadow-sm py-4 pt-4 fixed bottom-10 z-10">
              <div className="wrapper flex items-center justify-between">
                <h1 className="font-bold text-sm md:text-3xl text-dark">
                  List <span className="text-third">Data.</span>
                </h1>
                <ul className="flex gap-2 items-center">
                  <li
                    className={`${
                      activeSection === "#" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#" onClick={() => handleLinkClick("#")}>
                      <h1 className="hidden md:block">Home</h1>
                      <div className="md:hidden">
                        <IoHomeSharp size={20} />
                      </div>
                    </a>
                  </li>
                  <li
                    className={`${
                      activeSection === "kucing" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#kucing" onClick={() => handleLinkClick("kucing")}>
                      <h1 className="hidden md:block">Kucing</h1>
                      <div className="md:hidden">
                        <LuCat size={20} />
                      </div>
                    </a>
                  </li>
                  <li
                    className={`${
                      activeSection === "produk" ? "bg-dark text-white" : ""
                    } border-2 border-dark text-dark rounded-full font-semibold py-2 px-4`}
                  >
                    <a href="#produk" onClick={() => handleLinkClick("produk")}>
                      <h1 className="hidden md:block">Produk</h1>
                      <div className="md:hidden">
                        <AiOutlineProduct size={20} />
                      </div>{" "}
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
                      <h1 className="hidden md:block">Figure</h1>
                      <div className="md:hidden">
                        <GiHoodedFigure size={20} />
                      </div>{" "}
                    </a>
                  </li>
                </ul>
                <div className="md:flex hidden  gap-2 items-center">
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
            <div className="flex md:flex-row flex-col gap-10">
              <div className="w-full md:w-2/3 h-80 rounded-2xl bg-primary relative ">
                <div className="bg-main bg-opacity-15 w-full h-full bg-cover bg-center p-4 md:p-10">
                  <button className="bg-white text-dark text-xl font-bold absolute bottom-0 right-0 rounded-tl-2xl w-fit h-10 px-4">
                    Go Ahead
                  </button>
                  <div className="flex flex-col text-white font-bold text-4xl gap-2">
                    <h1>STARTS YOUR</h1>
                    <h1>Journey</h1>
                  </div>
                  <p className="text-white text-sm md:text-md pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae quisquam ab quae aliquam unde? Accusantium nesciunt
                    rerum repudiandae quae laboriosam ipsa optio officiis quod
                    distinctio nisi nihil illo ipsam ratione reprehenderit,
                    vero, consequatur laborum earum, voluptate ipsum error.
                    Repellat, eius.
                  </p>
                </div>
              </div>

              <button className="w-full   md:w-1/3 h-80 rounded-2xl bg-hero bg-cover bg-center relative flex justify-center items-center">
                <div
                  onClick={toggleModal}
                  className="bg-slate-900/20 animate-wiggle cursor-pointer backdrop-blur-md w-20 h-20 rounded-full flex justify-center items-center"
                >
                  <FaPlay className="text-white text-4xl" />
                </div>
              </button>
            </div>
            <div className="flex md:flex-row flex-col mt-4 gap-4 items-center">
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
                  <div className="w-40 h-[5rem] bg-third rounded-md p-2 text-sm md:text-md md:p-4">
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
                <div className="md:flex md:flex-row grid grid-cols-2 pr-4 items-center justify-between gap-10 w-full">
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
                      src={produk3}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Kacamata Hitam</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                  <div className="bg-slate-300 rounded-xl shadow-xl relative w-full h-[10.8rem] p-4 flex flex-col gap-2">
                    <Image
                      src={produk1}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Kamera Jadul</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                  <div className="bg-slate-300 rounded-xl shadow-xl relative w-full h-[10.8rem] p-4 flex flex-col gap-2">
                    <Image
                      src={produk4}
                      alt="product"
                      width={300}
                      height={20}
                      className="rounded-2xl object-cover object-center w-full h-28"
                    />
                    <h1 className="font-semibold">Sepatu Nike</h1>
                    <div className="absolute -bottom-4 rounded-md -right-4 bg-third w-10 h-10 flex justify-center items-center">
                      <FaEye className="text-white text-xl " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <div className="mt-14 flex justify-center gap-4 items-center text-4xl text-dark">
          <FaArrowDown className="animate-bounce" />
        </div>
        <section id="kucing" className="mt-10 wrapper ">
          <div className="flex items-center gap-4 text-dark text-3xl font-semibold">
            <LuCat />
            <h1>Kucing</h1>
          </div>
          <div className="mt-10">
            <CustomSwiper slides={kucing} spaceBetween={50} />
          </div>
        </section>
        <section id="produk" className="mt-10 wrapper ">
          <div className="flex items-center gap-4 text-dark text-3xl font-semibold">
            <AiOutlineProduct />
            <h1>Produk</h1>
          </div>
          <div className="mt-10">
            <CustomSwiper slides={produk} spaceBetween={50} />
          </div>
        </section>
        <section id="character" className="mt-10 wrapper ">
          <div className="flex items-center gap-4 text-dark text-3xl font-semibold">
            <GiHoodedFigure />
            <h1>Figure</h1>
          </div>
          <div className="mt-10">
            <CustomSwiper slides={figure} spaceBetween={50} />
          </div>
        </section>
        <section
          id="next"
          className="bg-secondary w-[82%] wrapper flex justify-center items-center rounded-xl h-80 mt-10 "
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white font-semibold text-4xl">
              Wait For Next!!!
            </h1>
            <a href="#">
              <FaArrowAltCircleUp className="text-white text-4xl animate-bounce" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
