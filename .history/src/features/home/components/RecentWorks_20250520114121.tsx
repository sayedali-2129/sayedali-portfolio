import recentWorks from "../data/RecentWorksData";
import RecentWorkFrame from "./RecentWorkFrame";

export default function RecentWorks() {
  return (
    <div className="md:mt-32 mt-16 xl:px-52 md:px-20 sm:px-12 px-2 pb-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="xl:w-full flex flex-row h-5 justify-start items-start w-full">
          <h4 className="font-RalewaySemiBold ">RECENT PROJECTS</h4>
        </div>
        {recentWorks.map((work, index) => (
          <RecentWorkFrame
            key={index}
            title={work.title}
            description={work.description}
            image={work.image.src}
            color={work.color}
            playstoreLink={work.playstoreLink}
            appstoreLink={work.appstoreLink}
            collabWith={work.collabWith}
          />
        ))}
      </div>
    </div>
  );
}
