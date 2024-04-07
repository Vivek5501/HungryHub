import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props);
    this.state={
        // count:0,
    };
}
render(){
    const {name,location}=this.props;
    const{count}=this.state;
    return(
        <div className="about-user">
            {/* <h1>Count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                });
            }}>Count Increased</button> */}
    <h2>Name:{name} Class</h2>
    <h3>Location:{location}  Class</h3>
</div>
    );
}
}
export default UserClass;