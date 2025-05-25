import DartIcon from "@/assets/icons/dart-icon.png";
import FirebaseIcon from "@/assets/icons/firebase-icon.png";
import FlutterIcon from "@/assets/icons/flutter-icon.png";
import Web3Icon from "@/assets/icons/web-3-icon.png";
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
            download="Sayed Ali CV.pdf"
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
      </div>
      {/* right section */}
      <div className="sm:w-4/6 px-4 ">
        <h2 className="sm:text-[38px] text-[30px] font-RalewaySemiBold text-TextColor">
          Hi ✋🏼,
        </h2>
        <h2 className="sm:text-[38px] text-[30px] font-RalewaySemiBold text-TextColor tracking-wide">
          I Am <span className="text-TextBlue">Sayed Ali M H</span>
        </h2>
        <h3 className="text-TextColor font-RalewayMedium sm:text-[22px] text-[18px] sm:tracking-[16px] tracking-[12px]">
          Flutter Developer
        </h3>
        <p className="mt-6 font-PoppinsRegular  text-[14px] leading-7 sm:tracking-[1px] tracking-[1px]">
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
      </div>
    </div>
  );
}
