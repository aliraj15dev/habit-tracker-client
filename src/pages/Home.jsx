import { use } from "react";
import Banner from "../components/Banner";
import WhyBuildHabits from "./../components/WhyBuildHabits";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";
import axios from "axios";
import FeaturedHabits from "./FeaturedHabits";

const userHabitsPromise = axios.get("http://localhost:3000/featuredHabits");

const Home = () => {
  const userHabits = use(userHabitsPromise).data;
  return (
    <>
      <Banner />
      <div className="max-w-9/10 mx-auto">
        <div className="mt-10 p-5">
          <h2 className="mb-5 text-center text-4xl font-bold">🌱 Featured Habits</h2>
          <div className="grid grid-cols-2 gap-5">
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
