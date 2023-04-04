
export const RestaurantCard = (props) => {
  // console.log(props);
  // const { name, cloudinaryImageId, cusins, rating } = props;
  return (
    <>
      <div className="  w-68 border border-gray-200 p-3 rounded-lg shadow-lg hover:shadow-blue-200">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.data.cloudinaryImageId}`}
          alt={props.data.name}
          className=" rounded-lg shadow-lg h-40"
        />
        <h3 className=" font-semibold text-lg">{props.data.name}</h3>
        {/* <h3 className=" font-semibold text-sm">{props.data.cuisines.join(",")}</h3> */}
        <h4 className=" text-gray-800"> Delivered in:{props.data.sla.deliveryTime} min</h4>
        <h4 className=" text-gray-600">{props.data.avgRating} stars</h4>
      </div>
    </>
  );
};
