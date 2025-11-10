import { Link } from "react-router";


const FeaturedHabits = ({userHabit}) => {
    const {image,description,userName } = userHabit

    return (
        <div className="p-4 rounded-lg border-2 border-gray-200 space-y-3">
        <figure className="bg-gray-200 p-4 rounded-xl">
          <img className="h-50 w-full"
            src={image}
            alt="service Image"
          />
        </figure>
        <div className="text-xl font-bold">
          <h3>{userName}</h3>
        </div>
        <div className="">
          <h2>{description}</h2>
        </div>
        <Link to={'/viewdetails'}>
        <button className="btn text-2xl bg-linear-to-b from-green-400 to-green-800 text-white w-full">View Details</button>
        </Link>
      </div>
    );
};

export default FeaturedHabits;