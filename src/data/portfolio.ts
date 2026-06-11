import { 
  Smartphone, 
  Code2, 
  Flame, 
  Cpu, 
  CreditCard, 
  Layers, 
  Rocket, 
  Palette 
} from "lucide-react";
import { Project, Skill, Experience, Service } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "flyxpay",
    title: "FlyxPay",
    description: "Built a Web3 payment platform with 1.5M registered and 50K+ active users, covering P2P transfers, business payments, and airdrop participation.",
    image: "https://play-lh.googleusercontent.com/PqP4SHv71UvzHW8yvz21eldb-Bqw_QPhEcsMEfqXC4ul3qdNP-scyeBF-0L1Eu2Q-Dru=w3840-h2160-rw",
    tags: ["Flutter", "Firebase", "Web3"],
    category: "FinTech",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.flyx.pay",
    appstoreLink: "https://apps.apple.com/us/app/flyx-pay/id6743554267",
    collaboratedWith: "FlyxCoin Pvt Ltd",
    index: 0,
    enabled: true,
  },
  {
    id: "instil-learning-hub",
    title: "Instil Learning Hub",
    description: "Instil Learning Hub is a comprehensive mobile and web-based education platform designed to enhance the learning experience across Android, iOS, and web platforms.",
    image: "https://play-lh.googleusercontent.com/yCO3cHHD3TiKY9H4xKT_EBmmyYLigTiV5r3XyTJaF083nSOErwnY4oqyCMqwDZQScINMnsCJCb7vJUWdhx2v",
    tags: ["Flutter", "Dart", "Zoom", "HDFC"],
    category: "EdTech",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.instil",
    appstoreLink: "https://apps.apple.com/us/app/instil-learning-hub/id6751219718",
    collaboratedWith: "TotalX Softwares",
    index: 1,
    enabled: true,
  },
  {
    id: "healthycart",
    title: "HealthyCart",
    description: "This comprehensive healthcare mobile application, built using Flutter and Firebase, is designed to make accessing healthcare services easier, faster, and more efficient. Users can effortlessly locate nearby hospitals, laboratories, and pharmacies, book doctor appointments, schedule lab tests, and order medicines for doorstep delivery—all within a single, user-friendly platform.",
    image: "https://play-lh.googleusercontent.com/vmuAj2aLhf9HtCV1HwrzsL1GKDzpK-czy1jhkW8mYwqeyFEY77UIbmhrZYpNbsBAUmo=w240-h480-rw",
    tags: ["Flutter", "Dart","Firebase", "Razorpay"],
    category: "Health Care",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.healthy_cart_user",
    appstoreLink: "https://apps.apple.com/in/app/healthy-cart/id6740842513",
    collaboratedWith: "TotalX Softwares",
    index: 2,
    enabled: true,
  },
  {
    id: "sayidcj",
    title: "Sayid CJ - Video Streaming and Chat Mobile App",
    description: "Sayid CJ is an educational app developed under Total X Softwares, crafted to empower learners with practical and impactful training in business accounting, taxation, and personal development",
    image: "https://play-lh.googleusercontent.com/TUCn_8CAJ5p7Tm3KPCThgd_Ppv6WLkIriKyI9EsUF4F7MrJXrCxT0kX665eYH1z6szM",
    tags: ["Flutter", "Dart","Firebase"],
    category: "EdTech",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.sayidcj",
    appstoreLink: "https://apps.apple.com/us/app/tasc-buz-powered-by-sayid-cj/id6738337961",
    collaboratedWith: "TotalX Softwares",
    index: 3,
    enabled: true,
  },
  {
    id: "strollin",
    title: "Strollin - A Multi-Vendor Ecommerce",
    description: "Strollin is a complete e-commerce mobile application built with Flutter and Firebase, delivering a seamless shopping experience right at your fingertips. It comes packed with essential features like cart management, wishlisting, real-time order tracking, coupon integration, and a reward points system that users can redeem for discounts.",
    image: "https://play-lh.googleusercontent.com/rQoVIT8ZE9dj9xcRTW6HFwKy9PUxxNZD73IyIPjMXVn3nbPcZ4VEmMeYc3FhfEY2yEx7=w240-h480-rw",
    tags: ["Flutter", "Dart","Firebase","Razorpay"],
    category: "E-Commerce",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.strollin",
    appstoreLink: "",
    collaboratedWith: "TotalX Softwares",
    index: 4,
    enabled: true,
  }
];

export const SKILLS: Skill[] = [
  { name: "Flutter", icon: Smartphone, iconBlue: "/flutter_blue.png", iconWhite: "/flutter_white.png", level: 95 },
  { name: "Dart", icon: Code2, iconBlue: "/dart_blue.png", iconWhite: "/dart_white.png", level: 90 },
  { name: "Firebase", icon: Flame, iconBlue: "/firebase_blue.png", iconWhite: "/firebase_white.png", level: 85 },
  { name: "REST APIs", icon: Cpu, iconBlue: "/restapi_blue.png", iconWhite: "/restapi_white.png", level: 92 },
  { name: "Payment Gateway", icon: CreditCard, iconBlue: "/payment_gateway_blue.png", iconWhite: "/payment_gateway_whitw.png", level: 88 },
  { name: "Provider", icon: Layers, iconBlue: "/provider_blue.png", iconWhite: "/provider_white.png", level: 90 },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Flutter Developer",
    company: "Total X Softwares",
    period: "Feb 2024 — Present",
    points: [
      "Architect and deliver 15+ cross-platform Flutter applications for clients across industries, personally leading development on client apps from Figma handoff to store approval.",
      "Engineer complex UI components and feature modules for production client apps, collaborating with UI/UX designers and product managers in Agile sprint cycles to ship on schedule.",
      "Collaborated with backend teams to integrate secure REST APIs and real-time sockets.",
    "Collaborate with cross-functional teams across multiple projects to translate Figma designs into pixel-perfect, responsive Flutter interfaces aligned with client requirements.",
"Deploy Flutter applications to Apple App Store and Google Play Store, resolving all platform compliance rejections and achieving final approval on 100% of submissions.",
"Contribute to apps with a combined reach of 10K+ downloads, maintaining performance standards and post-launch stability across iOS and Android."      
    ]

  },
  {
    role: "Flutter Developer",
    company: "FlyxPay",
    period: "Dec 2024 — Present",
    points: [
      "Build and maintain FlyxPay, a decentralized payment platform with 1.5M registered users and 50K+ active users.",
      "Engineer a mobile-number-based crypto transaction flow, removing wallet address complexity and making P2P transfers accessible to non-technical users.",
      "Integrate blockchain and crypto wallet APIs for secure, real-time transactions across P2P transfers, business payments, and airdrop participation.",
      "Collaborate with product, engineering, and security teams to ship scalable Web3 features, contributing to measurable growth in platform transaction volume.",
      "Participate in code reviews and maintain clean, modular Dart codebases following Flutter best practices across a remote cross-functional team."
    ]
  }
];

export const SERVICES: Service[] = [
  { 
    title: "App Development", 
    icon: Smartphone, 
    desc: "Building robust, high-performance mobile applications for Android and iOS using a single codebase." 
  },
  { 
    title: "Backend Integration", 
    icon: Rocket, 
    desc: "Seamlessly connecting your mobile front-end with scalable cloud infrastructures and secure APIs." 
  },
  { 
    title: "UI Implementation", 
    icon: Palette, 
    desc: "Transforming design into pixel-perfect Flutter widgets with fluid animations and M3 compliance." 
  }
];
