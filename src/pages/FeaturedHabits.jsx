import { Link } from "react-router";


const FeaturedHabits = ({userHabit}) => {
    const {_id,image,description,userName,habitTitle} = userHabit

    return (
        <div className="p-4 rounded-lg border-2 border-gray-200 space-y-3">
        <figure className="bg-gray-200 p-4 rounded-xl">
          {image && <img className="w-full" src={image} alt="Habit Image"/>}

        </figure>
        <div className="text-xl font-bold">
          <h3>{habitTitle}</h3>
        </div>
        <div>
          <h2>{description}</h2>
        </div>
          <h3 className="text-xl font-semibold">By : {userName}</h3>
        <Link to={`/viewdetails/${_id}`}>
        <button className="btn text-2xl bg-linear-to-b from-green-400 to-green-800 text-white w-full">View Details</button>
        </Link>
      </div>
    );
};

export default FeaturedHabits;