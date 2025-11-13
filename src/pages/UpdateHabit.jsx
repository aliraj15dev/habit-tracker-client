import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const UpdateHabit = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://habit-tracker-server-11vz.onrender.com/userHabits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
      });
  }, [id]);

  const handleUpdateHabit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const habitTitle = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const reminderTime = form.time.value;

    const updatedHabit = {
      habitTitle,
      description,
      category,
      reminderTime,
      userEmail: habit.userEmail,
      userName: habit.userName,
    };

    await fetch(`https://habit-tracker-server-11vz.onrender.com/userHabits/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    });

    toast.success("Habit Updated Successfully!");
    setLoading(false);
    navigate("/myHabits");
  };

  if(!habit){
    return <p className="text-center">Loading habit data...</p>
  }

  console.log(habit?.category)

  return (
    <motion.div
      className="max-w-lg mx-auto my-12 bg-base-100 shadow-xl p-8 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Update Habit</h2>

      <form onSubmit={handleUpdateHabit} className="space-y-4">
        <div>
          <label className="font-semibold">Habit Title</label>
          <input
            type="text"
            name="title"
            defaultValue={habit?.habitTitle}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            defaultValue={habit?.description}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            defaultValue={habit?.category}
            className="select select-bordered w-full"
          >
            <option>Morning</option>
            <option>Work</option>
            <option>Fitness</option>
            <option>Evening</option>
            <option>Study</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Reminder Time</label>
          <input
            type="datetime-local"
            name="time"
            defaultValue={habit?.reminderTime}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Upload New Image (optional)</label>
          <input
            type="text"
            name="image"
            className="file-input file-input-bordered w-full"
            defaultValue={habit?.image}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">User Name</label>
            <input
              type="text"
              readOnly
              value={user.displayName || ""}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="font-semibold">User Email</label>
            <input
              type="email"
              readOnly
              value={user.email || ""}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? "Updating..." : "Update Habit"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default UpdateHabit;
