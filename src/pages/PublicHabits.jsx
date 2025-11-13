import { useEffect, useState } from "react";
import PublicHabit from "./PublicHabit";

const PublicHabits = () => {
  const [publicHabits, setPublicHabits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("AllCategory");

  useEffect(() => {
    fetch("https://habit-tracker-server-11vz.onrender.com/userHabits")
      .then(res => res.json())
      .then(data=>setPublicHabits(data))
      .catch(err => console.log(err));
  }, []);

  const filteredHabits = publicHabits.filter(habit => {
    const categoryMatch = selectedCategory === "AllCategory" || habit.category === selectedCategory;
    const searchMatch = habit.habitTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="max-w-9/10 mx-auto my-10">
      <div className="flex flex-col sm:flex-row md:items-center justify-between mb-5">
        <h2 className="text-3xl font-semibold">
          All Public Habits <span className="text-xl">({filteredHabits.length})</span>
        </h2>

        <div className="space-x-5">
          <input
          type="text"
          placeholder="Search habits..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="AllCategory">All Category</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Fitness">Fitness</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredHabits.map((habit) => (
          <PublicHabit key={habit._id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default PublicHabits;
