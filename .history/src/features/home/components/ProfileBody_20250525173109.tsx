"use client";

import FlutterImg from "@/assets/images/flutter-bird.png";
import ScrollDownLottie from "@/assets/lottie/scroll-down.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import RotatingText from "./RotatingText";

export default function ProfileBody() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="md:mt-32 mt-24 xl:px-52 md:px-20 sm:px-12 px-2 flex flex-wrap items-center justify-center">
        <div className="md:w-1/2 w-full order-2 md:order-1 md:h-[530px] h-80 flex flex-col justify-center">
          <h2 className="xl:text-[36px] md:text-[30px] text-[26px] text-TextColor font-RalewaySemiBold">
            Hey There,
          </h2>

          <ul className="flex flex-row items-start gap-3 md:h-20 h-14">
            <li>
              <h2 className="xl:text-[52px] md:text-[45px] sm:text-[39px] text-[34px] text-TextColor font-RalewaySemiBold">
                I'm
              </h2>
            </li>
            <li>
              <RotatingText />
            </li>
          </ul>
          {/* <h3 className="text-[36px] text-TextColor font-RalewaySemiBold">
            Based On India
          </h3> */}
          <p className="text-TextColor font-RalewayRegular pb-20 md:pb-0">
            Passionate Flutter Developer skilled in building high-performance,
            scalable apps with clean Dart code and strong UI/UX design.
            Experienced in Firebase and Web3 integration to deliver seamless
            user experiences and robust backend functionality. Thrives in
            collaborative teams, eager to drive innovation in mobile and
            blockchain development.
          </p>
        </div>
        <motion.div
          className="md:w-1/2 order-1 md:order-2 md:h-[530px] h-72 pb-16 md:pb-0 pt-6 justify-center items-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={FlutterImg}
            alt="Flutter Developer"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>

      {mounted && (
        <Lottie
          animationData={ScrollDownLottie}
          loop={true}
          autoplay={true}
          className="md:h-12 h-10 "
        />
      )}
    </>
  );
}
