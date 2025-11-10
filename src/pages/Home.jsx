import { use } from "react";
import FeaturedHabits from "../components/FeaturedHabits";
import Banner from "../components/Banner";
import WhyBuildHabits from "./../components/WhyBuildHabits";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";

const userHabitsPromise = fetch("http://localhost:3000/userHabits").then(
  (res) => res.json()
);

const Home = () => {
  const userHabits = use(userHabitsPromise);
  console.log(userHabits);
  return (
    <>
      <Banner />
      <div className="max-w-9/10 mx-auto">
        <div className="grid grid-cols-2 gap-5 mt-10 border-2 border-gray-200 rounded-lg p-5">
          {userHabits.map((userHabit) => (
            <FeaturedHabits key={userHabit._id} userHabit={userHabit} />
          ))}
        </div>
        <WhyBuildHabits />
        <HowItWorks />
        <SuccessStories />
      </div>
    </>
  );
};

export default Home;
