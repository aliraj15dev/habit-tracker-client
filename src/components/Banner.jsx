import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BuildGoodHabit from '../assets/BuildGoodhabit.jpg'
import Progess from '../assets/Progress.jpg'
import StayConsistent from '../assets/StayConsistent.jpg'

const Banner = () => {
  return (
    <div className="mb-12">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={BuildGoodHabit}
            alt="Build Better Habits"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-6">
            <h2 className="text-4xl font-bold mb-3">Build Better Habits</h2>
            <p className="max-w-xl text-sm md:text-base">
              Start your journey toward consistency and self-discipline with
              daily habit tracking.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={StayConsistent}
            alt="Stay Healthy"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-6">
            <h2 className="text-4xl font-bold mb-3">Stay Healthy, Stay Consistent</h2>
            <p className="max-w-xl text-sm md:text-base">
              Turn your small actions into long-term success through powerful
              habit-building.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={Progess}
            alt="Track Your Progress"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-6">
            <h2 className="text-4xl font-bold mb-3">Track Your Progress</h2>
            <p className="max-w-xl text-sm md:text-base">
              Monitor your improvement daily and celebrate your achievements.
            </p>
          </div>
        </motion.div>
      </Carousel>
    </div>
  );
};

export default Banner;
