import { useEffect, useState, use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CiBookmarkCheck, CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import toast from "react-hot-toast";

const MyHabits = () => {
  const { user } = use(AuthContext);
  const [myHabits, setMyHabits] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://habit-tracker-server-11vz.onrender.com/featuredHabits?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyHabits(data))
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
  toast(
    (t) => (
      <div className="flex flex-col space-y-2">
        <p>Are you sure you want to delete this habit?</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              fetch(`https://habit-tracker-server-11vz.onrender.com/userHabits/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then(() => {
                  setMyHabits((prev) => prev.filter((habit) => habit._id !== id));
                  toast.success("Habit deleted successfully!");
                })
                .catch(() => toast.error("Failed to delete habit!"))
                .finally(() => toast.dismiss(t.id));
            }}
            className="btn btn-sm btn-error text-white"
          >
            Yes
          </button>

          <button
            onClick={() => {
              toast.dismiss(t.id);
              toast("Delete cancelled");
            }}
            className="btn btn-sm"
          >
            No
          </button>
        </div>
      </div>
    ),
    {
      duration: 8000,
      position: "top-center",
    }
  );
};

  const handleMarkComplete = (id) => {
    fetch(`https://habit-tracker-server-11vz.onrender.com/userHabits/${id}/complete`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.currentStreak !== undefined) {
          setMyHabits((prev) =>
            prev.map((habit) =>
              habit._id === id
                ? { ...habit, currentStreak: data.currentStreak }
                : habit
            )
          );
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <div className="max-w-9/10 mx-auto my-10 hidden sm:block overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Title</th>
              <th>Category</th>
              <th>Current Streak</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myHabits.map((habit, ind) => (
              <tr key={habit._id}>
                <th>{ind + 1}</th>
                <td>{habit.habitTitle}</td>
                <td>{habit.category}</td>
                <td>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    {habit.currentStreak || 0} days
                  </span>
                </td>
                <td>{new Date(habit.reminderTime).toLocaleDateString()}</td>
                <td className="flex flex-wrap gap-2">
                  <Link
                    to={`/updateHabit/${habit._id}`}
                    className="flex items-center gap-2 text-violet-500 btn btn-sm bg-transparent border-violet-400"
                  >
                    <CiEdit /> Update
                  </Link>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="flex items-center gap-2 text-red-500 btn btn-sm bg-transparent border-red-400"
                  >
                    <MdDeleteForever /> Delete
                  </button>
                  <button
                    onClick={() => handleMarkComplete(habit._id)}
                    className="flex items-center gap-2 text-green-500 btn btn-sm bg-transparent border-green-400"
                  >
                    <CiBookmarkCheck /> Mark Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block sm:hidden space-y-4">
        {myHabits.map((habit, ind) => (
          <div
            key={habit._id}
            className="border rounded-lg p-4 bg-base-100 shadow-sm"
          >
            <h3 className="font-semibold text-2xl">
              {ind + 1}. {habit.habitTitle}
            </h3>
            <p className="text-xl text-gray-600">Category: {habit.category}</p>
            <p className="text-xl">
              Streak:{" "}
              <span className="text-green-600 font-medium">
                {habit.currentStreak || 0} days
              </span>
            </p>
            <p className="text-xl">
              Created: {new Date(habit.reminderTime).toLocaleDateString()}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Link
                to={`/updateHabit/${habit._id}`}
                className="flex items-center gap-2 text-violet-500 btn btn-xs bg-transparent border-violet-400"
              >
                <CiEdit /> Update
              </Link>
              <button
                onClick={() => handleDelete(habit._id)}
                className="flex items-center gap-2 text-red-500 btn btn-xs bg-transparent border-red-400"
              >
                <MdDeleteForever /> Delete
              </button>
              <button
                onClick={() => handleMarkComplete(habit._id)}
                className="flex items-center gap-2 text-green-500 btn btn-xs bg-transparent border-green-400"
              >
                <CiBookmarkCheck /> Mark Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyHabits;
