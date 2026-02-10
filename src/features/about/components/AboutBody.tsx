"use client";

import DartIcon from "@/assets/icons/dart-icon.png";
import FirebaseIcon from "@/assets/icons/firebase-icon.png";
import FlutterIcon from "@/assets/icons/flutter-icon.png";
import Web3Icon from "@/assets/icons/web-3-icon.png";
import SayedAli from "@/assets/images/sayed ali.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBody() {
  return (
    <motion.div
      className="pt-36 xl:px-52 md:px-20 sm:px-12 px-2 flex flex-wrap items-center justify-center md:gap-0 gap-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="md:w-1/3  flex flex-col items-center"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-[232px] w-[200px] md:h-[318px] h-[270px] rounded-xl p-[2px] bg-TextBlue/70 shadow-[0_0_22px_rgba(34,211,238,0.45),0_0_50px_rgba(34,211,238,0.22)]">
          <div className="w-full h-full rounded-[10px] overflow-hidden bg-black">
            <Image
              src={SayedAli}
              className="w-full h-full object-cover"
              alt="Sayed Ali Flutter Developer image"
            />
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1RZEtvXqp5InLEl7slGU7ve9E9FTDZwtA/view"
          download="Sayed Ali MH CV.pdf"
          className="mt-6 inline-flex h-10 w-40 items-center justify-center rounded-md border border-TextBlue/60 bg-white/5 px-5 text-[14px] font-PoppinsMedium tracking-wide text-TextBlue shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_16px_rgba(34,211,238,0.12)] transition-all hover:bg-TextBlue/10 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_22px_rgba(34,211,238,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-TextBlue/60"
        >
          View CV
        </a>

        <h3 className="mt-12 font-PoppinsSemiBold tracking-wide text-xl">
          Tools
        </h3>

        <div>
          <ul className="mt-6 flex gap-2">
            <li>
              <Image
                src={FlutterIcon}
                alt="Flutter"
                className="md:w-7 w-6 md:h-7 h-6"
              />
            </li>
            <li>
              <h4 className=" font-PoppinsRegular tracking-wide text-base">
                Flutter
              </h4>
            </li>
          </ul>
          <ul className="mt-6 flex gap-2">
            <li>
              <Image
                src={DartIcon}
                alt="Dart"
                className="md:w-7 w-6 md:h-7 h-6"
              />
            </li>
            <li>
              <h4 className=" font-PoppinsRegular tracking-wide text-base">
                Dart
              </h4>
            </li>
          </ul>
          <ul className="mt-6 flex gap-2">
            <li>
              <Image
                src={FirebaseIcon}
                alt="Firebase"
                className="md:w-7 w-6 md:h-7 h-6"
              />
            </li>
            <li>
              <h4 className=" font-PoppinsRegular tracking-wide text-base">
                Firebase
              </h4>
            </li>
          </ul>

          <ul className="mt-6 flex gap-2">
            <li>
              <Image
                src={Web3Icon}
                alt="Web3"
                className="md:w-7 w-6 md:h-7 h-6"
              />
            </li>
            <li>
              <h4 className=" font-PoppinsRegular tracking-wide text-base">
                Web3
              </h4>
            </li>
          </ul>
        </div>
      </motion.div>
      {/* right section */}
      <motion.div
        className="sm:w-4/6 px-4 "
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="sm:text-[38px] text-[30px] font-RalewaySemiBold text-TextColor">
          Hi ✋🏼,
        </h2>
        <h2 className="sm:text-[38px] text-[30px] font-RalewaySemiBold text-TextColor tracking-wide">
          I Am{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Sayed Ali M H
          </span>
        </h2>
        <h3 className="text-TextColor font-RalewayMedium sm:text-[22px] text-[18px] sm:tracking-[16px] tracking-[12px]">
          Flutter Developer
        </h3>
        <p className="mt-6 pb-10 font-PoppinsRegular  text-[14px] leading-7 sm:tracking-[1px] tracking-[1px]">
          As a Flutter developer with a background in B.Com Computer Application
          from MG University, I quickly discovered my true calling in building
          mobile applications. While my academic path started in commerce and
          computing, Flutter became the perfect blend of creativity and
          technology for me—offering the ability to create smooth,
          cross-platform apps with a single codebase. I dived deep into its
          ecosystem, building everything from e-commerce platforms to healthcare
          and educational apps, each one helping me refine my skills and
          understand the nuances of user-focused development.
          <br />
          <br />
          As my experience in Flutter matured, so did my curiosity for emerging
          technologies—especially Web3. I began exploring blockchain, crypto
          integration, smart contracts, and the possibilities of decentralized
          apps. The idea of combining intuitive mobile interfaces with
          transparent, secure backend systems was both challenging and exciting.
          This transition allowed me to bridge the gap between traditional app
          development and the decentralized future, working on projects like
          crypto-based reward systems and wallet-integrated mobile apps.
          <br />
          <br />
          Today, I continue to evolve at the crossroads of mobile development
          and Web3 innovation. I approach every project with a problem-solving
          mindset—balancing sleek UI with robust performance and secure
          infrastructure. With a foundation in commerce, programming, and
          cutting-edge tech, I strive to build not just functional apps, but
          meaningful digital experiences that are ready for the future.
        </p>
      </motion.div>
    </motion.div>
  );
}
