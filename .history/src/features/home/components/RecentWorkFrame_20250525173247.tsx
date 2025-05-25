"use client";

import appstore from "@/assets/icons/appstore.png";
import playstore from "@/assets/icons/playstore.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="md:w-full w-full py-8 flex flex-col gap-4 pl-4 pr-2 rounded-xl"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row items-start">
        <Image
          src={image}
          alt={title}
          width={56}
          height={56}
          className="md:h-14 h-12 rounded-xl object-contain"
        />
        <ul className="flex flex-col justify-center px-4">
          <li>
            <h4 className="font-RalewaySemiBold md:text-[24px] text-[16px] text-TextColor">
              {title}
            </h4>
          </li>
          <li>
            <p className="font-RalewayRegular md:text-[14px] text-[11px] text-TextColor">
              Collaborated with {collabWith}
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full">
        <p className="font-PoppinsLight  md:text-[15px] text-[12px] text-TextColor">
          {description}
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <a href={playstoreLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={playstore}
            alt="playstore"
            width={20}
            height={20}
            className="md:w-5 md:h-5 w-4 h-4"
          />
        </a>
        {appstoreLink !== undefined && (
          <a href={appstoreLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={appstore}
              alt="appstore"
              width={20}
              height={20}
              className="md:w-5 md:h-5 w-4 h-4"
            />
          </a>
        )}
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
