import { use } from "react";
import FeaturedHabits from "../components/FeaturedHabits";
import Banner from "../components/Banner";
import WhyBuildHabits from './../components/WhyBuildHabits';

const userHabitsPromise = fetch("http://localhost:3000/userHabits").then(
  (res) => res.json()
);

const Home = () => {
  const userHabits = use(userHabitsPromise);
  console.log(userHabits);
  return (
    <div className="max-w-9/10 mx-auto">
      <Banner/>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {userHabits.map((userHabit) => (
          <FeaturedHabits key={userHabit._id} userHabit={userHabit} />
        ))}
      </div>
      <WhyBuildHabits/>
      <div className="mt-10">
        Extra 2 section need
      </div>
    </div>
  );
};

export default Home;
