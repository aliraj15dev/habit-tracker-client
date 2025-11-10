import axios from "axios";
import { use } from "react";
import PublicHabit from "./PublicHabit";

const userHabits = axios.get("http://localhost:3000/userHabits");

const PublicHabits = () => {
  const publicHabits = use(userHabits).data;

  return (
    <div className="max-w-9/10 mx-auto mt-10">
        <h2 className="text-4xl font-semibold mb-5">All Public Habits <span className="text-xl">({publicHabits.length})</span></h2>
      <div className="grid grid-cols-2 gap-5">
        {publicHabits.map((habit) => (
          <PublicHabit key={habit._id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default PublicHabits;
