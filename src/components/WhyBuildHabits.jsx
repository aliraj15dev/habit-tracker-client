import { FaBullseye, FaSmile, FaClock, FaBrain } from "react-icons/fa";

const WhyBuildHabits = () => {
  return (
    <div className="my-12 p-6  text-center border-2 border-gray-200 rounded-lg">
      <h2 className="text-3xl font-bold mb-10">🌟 Why Build Habits?</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="flex flex-col items-center space-y-3">
            <FaBullseye className="text-4xl text-blue-600" />
            <h3 className="text-xl font-semibold">Better Focus</h3>
            <p className="text-gray-600 text-sm">
              Building good habits trains your mind to focus on meaningful tasks
              every day.
            </p>
          </div>
        </div>

        <div className="shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="flex flex-col items-center space-y-3">
            <FaSmile className="text-4xl text-green-500" />
            <h3 className="text-xl font-semibold">Reduced Stress</h3>
            <p className="text-gray-600 text-sm">
              Consistent routines bring peace and lower your daily anxiety levels.
            </p>
          </div>
        </div>

        <div className="shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="flex flex-col items-center space-y-3">
            <FaClock className="text-4xl text-orange-500" />
            <h3 className="text-xl font-semibold">Time Management</h3>
            <p className="text-gray-600 text-sm">
              Habits automate your daily actions, helping you save time and energy.
            </p>
          </div>
        </div>

        <div className="shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="flex flex-col items-center space-y-3">
            <FaBrain className="text-4xl text-purple-600" />
            <h3 className="text-xl font-semibold">Personal Growth</h3>
            <p className="text-gray-600 text-sm">
              Building strong habits helps you grow mentally, physically, and emotionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuildHabits;
