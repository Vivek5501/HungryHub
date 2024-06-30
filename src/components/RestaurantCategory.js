import ItemList from "./ItemList";
const RestaurantCategory=({data})=>{
    // console.log(data);
    return (
    <div>
       {/* Header*/}
       <div className="w-6/12  shadow-lg mx-auto my-4 p-4">
        <div className="flex justify-between font-bold">
        <span>
            {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
        </div>
        <ItemList items={data.itemCards}/>
       </div>
    </div>
    );
};

export default RestaurantCategory;