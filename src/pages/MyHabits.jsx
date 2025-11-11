import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CiBookmarkCheck, CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const MyHabits = () => {
  const { user } = use(AuthContext);
  const [myHabits, setMyHabits] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/featuredHabits?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyHabits(data);
        });
    }
  }, [user?.email]);
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/userHabits/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMyHabits((prev) => prev.filter((habit) => habit._id !== id));
      });
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
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
              <tr key={ind}>
                <th>{ind + 1}</th>
                <td>{habit.habitTitle}</td>
                <td>{habit.category}</td>
                <td>{habit.currentStreak || 0} days</td>
                <td>{habit.reminderTime}</td>
                <td className="flex gap-2">
                  <button onClick={()=>handelUpdate(habit._id)}
                   className="flex items-center gap-2 text-violet-500 btn bg-transparent border-violet-400">
                    <CiEdit /> Update
                  </button>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="flex items-center gap-2 text-red-500 btn bg-transparent border-red-400"
                  >
                    <MdDeleteForever /> Delete
                  </button>
                  <button
                    className="flex items-center gap-2 text-green-500 btn bg-transparent border-green-400"
                  >
                    <CiBookmarkCheck /> Mark Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyHabits;
