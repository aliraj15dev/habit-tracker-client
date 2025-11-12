import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";

const ViewDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/userHabits/${id}`)
      .then((res) => res.json())
      .then((data) => setHabit(data))
      .catch((err) => console.error("Error fetching habit:", err));
  }, [id]);

  if (!habit) return <p className="text-center my-12">Loading habit details...</p>;

  const progress = Math.round((habit.completedDays / 30) * 100);

  return (
    <motion.div
      className="max-w-2xl mx-auto my-10 bg-base-100 shadow-xl rounded-2xl p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-center">{habit?.habitTitle}</h2>

      {habit.image && (
        <img
          src={habit.image}
          alt={habit.habitTitle}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
      )}

      <p className="text-gray-600 mb-4">{habit?.description}</p>

      <p className="font-semibold mb-2">
        <span className="badge badge-info badge-outline mr-2">Category</span>
        {habit?.category}
      </p>

      <div className="mt-4">
        <p className="font-semibold mb-1">Progress (last 30 days)</p>
        <progress
          className="progress progress-primary w-full"
          value={progress}
          max="100"
        ></progress>
        <p className="text-sm text-gray-500 mt-1">{progress}% completed</p>
      </div>

      <div className="mt-4">
        <span className="badge badge-success p-3 text-lg">
          🔥 {habit.streak} Day Streak
        </span>
      </div>

      <div className="mt-6 border-t pt-4">
        <p className="font-semibold">Creator Info</p>
        <p>{habit.userName}</p>
        <p className="text-sm text-gray-500">{habit.userEmail}</p>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => alert("Marked as complete!")}
          className="btn btn-primary w-full"
        > Mark Complete </button>
      </div>
    </motion.div>
  );
};

export default ViewDetails;
