import { Link } from "react-router";

const PublicHabit = ({ habit }) => {
  const { image, description, userName, habitTitle, category, reminderTime } =
    habit;

  return (
    <div className="p-4 rounded-lg border-2 border-gray-200 space-y-3 shadow-md hover:shadow-lg transition duration-200">
      <figure className="bg-gray-100 p-4 rounded-xl">
        <img
          className="h-60 w-full object-cover rounded-lg"
          src={image}
          alt={habitTitle}
        />
      </figure>
      <div className="text-xl font-bold text-gray-800">
        <h3>{userName}</h3>
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
          {habitTitle}
        </h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-600">Category:</span>{" "}
          {category} 🌞
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-600">Reminder:</span> ⏰{" "}
          {reminderTime}
        </p>
      </div>

      <Link to="/viewdetails">
        <button className="btn text-lg bg-linear-to-b from-green-400 to-green-800 text-white w-full rounded-lg py-2 mt-2 hover:from-green-500 hover:to-green-900 transition">
          Habit Details
        </button>
      </Link>
    </div>
  );
};

export default PublicHabit;
