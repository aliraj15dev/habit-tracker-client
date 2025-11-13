import { use } from "react";
import Banner from "../components/Banner";
import WhyBuildHabits from "./../components/WhyBuildHabits";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";
import FeaturedHabits from "./FeaturedHabits";

const userHabitsPromise = fetch("https://habit-tracker-server-11vz.onrender.com/featuredHabits").then(res=>res.json());

const Home = () => {
  const userHabits = use(userHabitsPromise);
  return (
    <>
      <Banner />
      <div className="max-w-9/10 mx-auto">
        <div className="mt-10 p-5">
          <h2 className="mb-5 text-center text-2xl sm:text-4xl font-bold">🌱 Featured Habits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {userHabits.map((userHabit) => <FeaturedHabits key={userHabit._id} userHabit={userHabit}/>)}
          </div>
        </div>
        <WhyBuildHabits />
        <HowItWorks />
      </div>
      <SuccessStories />
    </>
  );
};

export default Home;
