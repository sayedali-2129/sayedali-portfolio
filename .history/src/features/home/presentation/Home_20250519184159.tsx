import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../components/NavBar"), { ssr: true });
const ProfileBody = dynamic(() => import("../components/ProfileBody"), {
  ssr: true,
});
const RecentWorks = dynamic(() => import("../components/RecentWorks"), {
  ssr: true,
});

function Home() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <ProfileBody />
      <RecentWorks />
    </div>
  );
}

export default Home;
