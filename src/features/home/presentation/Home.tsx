import NavBar from "../components/NavBar";
import ProfileBody from "../components/ProfileBody";
import RecentWorks from "../components/RecentWorks";

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
