import "./style.css";
export const RestaurantCard = (props) => {
  // console.log(props);
  // const { name, cloudinaryImageId, cusins, rating } = props;
  return (
    <>
      <div className="card">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.data.cloudinaryImageId}`}
          alt={props.data.name}
          className="img"
        />
        <h3>{props.data.name}</h3>
        <h4>{props.data.avgRating} stars</h4>
      </div>
    </>
  );
};
