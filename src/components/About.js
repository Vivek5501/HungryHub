import User from "./Users";
import UserClass from "./UsersClass";
const About=()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is about section</h2>
            
            {/* <User name={"Vivek"} /> */}
            <UserClass name={"Vivek"} location={"Gzb"} />
        </div>
        

    )
}

export default About;