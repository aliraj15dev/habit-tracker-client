import { use, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const AddHabit = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddHabit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const habitTitle = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const reminderTime = form.time.value;
    const imageFile = form.image.files[0];

    let uploadedImage = "";
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=2d721fd85088ef34c6fdda3efa36e17d`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      uploadedImage = data.data.url;
    }

    const newHabit = {
      habitTitle,
      description,
      category,
      reminderTime: reminderTime,
      image: uploadedImage,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    await fetch("https://habit-tracker-server-11vz.onrender.com/addedHabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHabit),
    });

    setLoading(false);
    form.reset();
    toast.success("Habit Added Successfully!");
  };

  return (
    <motion.div
      className="max-w-lg mx-auto my-12 bg-base-100 shadow-xl p-8 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Add a New Habit
      </h2>

      <form onSubmit={handleAddHabit} className="space-y-4">
        <div>
          <label className="font-semibold">Habit Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter habit title"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            required
            placeholder="Write a short description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <div>
          <label className="font-semibold">Category</label>
          <select defaultValue="Choose Category" name="category" required className="select select-bordered w-full">
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
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Upload Image (optional)</label>
          <input type="file" name="image" accept="image/*" className="file-input file-input-bordered w-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">User Name</label>
            <input
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="font-semibold">User Email</label>
            <input
              type="email"
              readOnly
              value={user?.email || ""}
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
            {loading ? "Adding..." : "Add Habit"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddHabit;
