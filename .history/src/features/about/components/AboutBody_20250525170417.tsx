import DartIcon from "@/assets/icons/dart-icon.png";
import FirebaseIcon from "@/assets/icons/firebase-icon.png";
import FlutterIcon from "@/assets/icons/flutter-icon.png";
import NextIcon from "@/assets/icons/nextjs-icon.png";
import SayedAli from "@/assets/images/sayed ali.png";
import Image from "next/image";

export default function AboutBody() {
  return (
    <div className="pt-36 xl:px-52 md:px-20 sm:px-12 px-2 flex flex-wrap items-center justify-center md:gap-0 gap-12">
      <div className="md:w-1/3  flex flex-col items-center">
        <Image
          src={SayedAli}
          className="md:w-[232px] w-[200px] md:h-[318px] h-[270px] "
          alt="Sayed Ali Flutter Developer image"
        />
        <div className="mt-6 w-40 h-10  px-[10px] py-[10px] border border-TextBlue relative">
          <a
            href="https://drive.google.com/file/d/1XpBqr2Nca2le6zMz7zG3WaW7BrghwNyU/view"
            download="Jaseel Rahman CV.pdf"
            className="absolute w-40 border border-TextBlue bg-BackGroundColor flex items-center cursor-pointer justify-center px-5 py-3 text-[14px] text-TextBlue tracking-wide hover:underline underline-offset-4 font-PoppinsMedium"
          >
            View Resume
          </a>
        </div>

        <h3 className="mt-12 font-PoppinsSemiBold tracking-wide text-xl">
          Tools
        </h3>

        <div>
          <ul className="mt-6 flex gap-2">
            <li>
              <Image
                src={FlutterIcon}
                alt="FIGMA "
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
                src={FirebaseIcon}
                alt="Sketch "
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
                src={DartIcon}
                alt="Adobe Illustrator "
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
                src={NextIcon}
                alt="Adobe Photoshop "
                className="md:w-7 w-6 md:h-7 h-6"
              />
            </li>
            <li>
              <h4 className=" font-PoppinsRegular tracking-wide text-base">
                Next.js
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* right section */}
      <div className="sm:w-4/6 px-4 ">
        <h2 className="sm:text-[38px] text-[30px] font-RalewaySemiBold text-TextColor">
          Hi ✋🏼,
        </h2>
        <h2 className="sm:text-[38px] text-[30px] font-RalewaySemiBold text-TextColor tracking-wide">
          I Am <span className="text-TextBlue">Jaseel Rahman</span>
        </h2>
        <h3 className="text-TextColor font-RalewayMedium sm:text-[22px] text-[18px] sm:tracking-[16px] tracking-[12px]">
          UI/UX Designer
        </h3>
        <p className="mt-6 font-PoppinsRegular  text-[14px] leading-7 sm:tracking-[1px] tracking-[1px]">
          As a UI/UX designer, my path has been a dynamic blend of creativity,
          learning, and growth. It all began with my graduation in BA Arts from
          Calicut University—an unexpected foundation for what lay ahead.
          <br />
          Post-graduation, I dipped my toes into programming, exploring PHP and
          even embarking on a Python internship. But my heart yearned for
          design—the intersection of aesthetics and functionality. UX design
          became my compass. <br /> At Vitez Software, I honed my skills for one
          transformative years. We crafted intuitive interfaces, conducted user
          research, and iterated relentlessly. Collaborating with engineers and
          stakeholders, I learned the delicate dance of user-centric design.
          <br />
          Then came TotalX Software—a new chapter(still Moving Forword). Here, I
          delved into intricate workflows, enterprise solutions, and
          accessibility considerations. Wireframes, prototypes, and late-night
          design critiques fueled my growth. My interdisciplinary
          background—arts, programming, and design—gave me a unique lens.
          Problems weren’t obstacles; they were puzzles waiting for creative
          solutions. And those solutions? They bridged cultures, fostering
          understanding. Today, I’m still learning, still pushing boundaries.
          Each pixel I place, each interaction I refine—it’s all part of my
          quest to create Smoothly, delightful experiences. UX design isn’t just
          pixels; it’s empathy in action.
        </p>
      </div>
    </div>
  );
}
