

const FeaturedHabits = ({userHabit}) => {
    const {image,description,user_name } = userHabit

    return (
        <div className="p-6 rounded-lg border-2 border-gray-200 space-y-5">
        <figure className="bg-gray-200 p-4 rounded-xl">
          <img className="h-50 w-full"
            src={image}
            alt="service Image"
          />
        </figure>
        <div className="text-xl">
          <h3>{user_name}</h3>

        </div>
        <div className="">
          <h2>{description}</h2>
        </div>
      </div>
    );
};

export default FeaturedHabits;