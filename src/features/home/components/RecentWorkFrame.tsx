"use client";

import appstore from "@/assets/icons/appstore.png";
import playstore from "@/assets/icons/playstore.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface RecentWorkFrameProps {
  title: string;
  description: string;
  image: string;
  color: string;
  playstoreLink: string | undefined;
  appstoreLink: string | undefined;
  collabWith: string;
}

export default function RecentWorkFrame({
  title,
  description,
  image,
  color,
  playstoreLink,
  appstoreLink,
  collabWith,
}: RecentWorkFrameProps) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={
        mounted && isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.98 }
      }
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      className="md:w-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden relative group shadow-md hover:shadow-cyan-500/10 transition-all"
      style={{
        // accent glow using provided color
        boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px -24px ${color}44`,
      }}
    >
      {/* corner accent glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-52 w-52 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity"
        style={{
          background: `radial-gradient(closest-side, ${color}55, transparent)`,
        }}
      />

      <div className="p-5 sm:p-6 flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl border border-white/10 bg-black/30 p-2 md:p-2.5">
            <Image
              src={image}
              alt={title}
              width={56}
              height={56}
              className="md:h-14 md:w-14 h-12 w-12 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-RalewaySemiBold md:text-[22px] text-[16px] text-TextColor leading-snug">
              {title}
            </h4>
            <p className="font-RalewayRegular md:text-[14px] text-[12px] text-TextColor/70 mt-1">
              Collaborated with {collabWith}
            </p>
          </div>
        </div>

        <div className="w-full">
          <p className="font-PoppinsLight md:text-[15px] text-[13px] text-TextColor/85">
            {description}
          </p>
        </div>

        <div className="flex flex-row gap-3 pt-1">
          {playstoreLink && (
            <a
              href={playstoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-TextColor/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Image
                src={playstore}
                alt="Play Store"
                width={18}
                height={18}
                className="invert brightness-0"
              />
              <span className="text-[12px] md:text-[13px] font-PoppinsRegular">
                Play Store
              </span>
            </a>
          )}
          {appstoreLink && (
            <a
              href={appstoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-TextColor/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Image
                src={appstore}
                alt="App Store"
                width={18}
                height={18}
                className="invert brightness-0"
              />
              <span className="text-[12px] md:text-[13px] font-PoppinsRegular">
                App Store
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// SLIDE UPTO CENTER

// "use client";

// import appstore from "@/assets/icons/appstore.png";
// import playstore from "@/assets/icons/playstore.png";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// interface RecentWorkFrameProps {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   playstoreLink: string | undefined;
//   appstoreLink: string | undefined;
//   collabWith: string;
// }

// export default function RecentWorkFrame({
//   title,
//   description,
//   image,
//   color,
//   playstoreLink,
//   appstoreLink,
//   collabWith,
// }: RecentWorkFrameProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="md:w-full w-full py-8 flex flex-col gap-4 pl-4 pr-2 rounded-xl"
//       style={{ backgroundColor: color }}
//     >
//       <div className="flex flex-row items-start">
//         <img src={image} alt={title} className="md:h-14 h-12 rounded-xl" />
//         <ul className="flex flex-col justify-center px-4">
//           <li>
//             <h4 className="font-RalewaySemiBold md:text-[24px] text-[16px] text-TextColor">
//               {title}
//             </h4>
//           </li>
//           <li>
//             <p className="font-RalewayRegular md:text-[14px] text-[11px] text-TextColor">
//               Collaborated with {collabWith}
//             </p>
//           </li>
//         </ul>
//       </div>

//       <div className="w-full">
//         <p className="font-PoppinsLight  md:text-[15px] text-[12px] text-TextColor">
//           {description}
//         </p>
//       </div>
//       <div className="flex flex-row gap-4">
//         <a href={playstoreLink} target="_blank" rel="noopener noreferrer">
//           <img
//             src={playstore.src}
//             alt="playstore"
//             className="md:w-5 md:h-5 w-4 h-4"
//           />
//         </a>
//         {appstoreLink !== undefined && (
//           <a href={appstoreLink} target="_blank" rel="noopener noreferrer">
//             <img
//               src={appstore.src}
//               alt="appstore"
//               className="md:w-5 md:h-5 w-4 h-4"
//             />
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }
