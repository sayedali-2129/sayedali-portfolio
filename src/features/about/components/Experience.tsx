"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      className="pb-20 xl:px-52 md:px-20 sm:px-12 px-2 flex flex-wrap items-start justify-center md:justify-start gap-8"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full mx-auto md:mx-0 md:w-[330px] flex flex-col items-center justify-center">
        <h3 className="mb-4 text-center font-PoppinsSemiBold tracking-wide text-[24px] text-TextColor">
          Experience
        </h3>
        <p className="sm:mt-0 mt-4 sm:px-0 px-4 font-PoppinsRegular tracking-[2px] text-[13px] text-center text-TextColor text-opacity-50 leading-6">
          Total X Softwares, Nilambur
        </p>
        <p className="sm:mt-0 mt-4 sm:px-0 px-4 font-PoppinsRegular tracking-[2px] text-[13px] text-center text-TextColor text-opacity-50 leading-6">
          Flutter Developer
        </p>
        <p className="sm:mt-0 mt-4 sm:px-0 px-4 font-PoppinsRegular tracking-[2px] text-[13px] text-center text-TextColor text-opacity-50 leading-6">
          {(() => {
            // Start date: Feb 2024
            const start = new Date(2024, 1); // months are 0-indexed, so 1 = Feb
            const now = new Date();
            let years = now.getFullYear() - start.getFullYear();
            let months = now.getMonth() - start.getMonth();

            if (months < 0) {
              years--;
              months += 12;
            }

            // If the current day is before the start day, subtract a month
            if (now.getDate() < start.getDate()) {
              months--;
              if (months < 0) {
                years--;
                months += 12;
              }
            }

            let duration = "";
            if (years > 0) duration += `${years} y${years > 1 ? "s" : ""}`;
            if (months > 0) {
              if (duration) duration += " ";
              duration += `${months} m`;
            }
            if (!duration) duration = "Less than a month";

            return `Feb 2024 - Present (${duration})`;
          })()}
        </p>
      </div>
    </motion.div>
  );
}
