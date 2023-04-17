
export const Card = (props) => {
  console.log(props)
  return (
    <>
      <div className="card">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.data.cloudinaryImageId}`}
          alt={props.data.name}
          className=" "
        />
        <h3 className=" ">{props.data.name}</h3>
        <h4 className=" "> Delivered in:{props.data.sla.deliveryTime} min</h4>
        <h4 className=" ">{props.data.avgRating} stars</h4>
      </div>
    </>
  );
};
