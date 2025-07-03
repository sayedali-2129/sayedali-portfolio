import Home from "@/features/home/presentation/Home";
import { Analytics } from "@vercel/analytics/next";

export default function HomePage() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
