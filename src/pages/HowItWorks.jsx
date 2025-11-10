import { motion } from "framer-motion";
import { FaClipboardList, FaBell, FaChartLine, FaSmile } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-16 p-6 text-center border-2 border-gray-200 rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-10">⚙️ How It Works</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 rounded-2xl shadow-lg bg-base-100 hover:shadow-xl transition-all">
          <FaClipboardList className="text-4xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Add a Habit</h3>
          <p className="text-sm text-gray-600">
            Create a habit with title, category, and reminder time.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-base-100 hover:shadow-xl transition-all">
          <FaBell className="text-4xl text-yellow-500 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Set Reminders</h3>
          <p className="text-sm text-gray-600">
            Get notified at your chosen time to stay consistent.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-base-100 hover:shadow-xl transition-all">
          <FaChartLine className="text-4xl text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Track Progress</h3>
          <p className="text-sm text-gray-600">
            See how consistent you’ve been over time.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-base-100 hover:shadow-xl transition-all">
          <FaSmile className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Celebrate Wins</h3>
          <p className="text-sm text-gray-600">
            Build motivation by celebrating your progress!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
