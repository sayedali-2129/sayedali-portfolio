import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfigue";

const PROJECTS = [
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

async function seed() {
  console.log("Seeding projects to Firestore...");
  const projectsRef = collection(db, "projects");
  for (const project of PROJECTS) {
    const docRef = doc(projectsRef, project.id);
    await setDoc(docRef, project);
    console.log(`Seeded project: ${project.title} (${project.id})`);
  }
  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Error seeding projects:", err);
  process.exit(1);
});
