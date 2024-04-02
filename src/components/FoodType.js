import { FOOD_IMG } from "../utilities/constants";

const FoodType=(props)=>{

    const {typeData}=props;

    const {imageId}=typeData;


    return(
        <div className="food-type" style={{backgroundColor:"#f0f0f"}}>
            <img className="foodType-logo" alt="logo" 
            src={FOOD_IMG + imageId}
            />
        </div>
    );
};

export default FoodType;