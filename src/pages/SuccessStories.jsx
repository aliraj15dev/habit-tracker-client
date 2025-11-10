import { motion } from "framer-motion";

const SuccessStories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-20 px-6 text-center bg-linear-to-r from-purple-50 to-blue-50 py-16"
    >
      <h2 className="text-3xl font-bold mb-10">💬 Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
          <p className="text-gray-600 italic mb-4">
            “I have finally built a daily workout routine. 60 days and counting!”
          </p>
          <h4 className="font-semibold text-blue-600">Rahim Uddin</h4>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
          <p className="text-gray-600 italic mb-4">
            “Reminders help me study every day no more procrastination.”
          </p>
          <h4 className="font-semibold text-green-600">Mehnaz Akter</h4>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
          <p className="text-gray-600 italic mb-4">
            “Tracking habits visually keeps me motivated and focused.”
          </p>
          <h4 className="font-semibold text-purple-600">Arif Hossain</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStories;
