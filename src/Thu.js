import React from "react";
import { Route, useHistory } from "react-router-dom";


const Thu = (props) => {
    const history = useHistory();
    console.log(props);
    return <div onClick={() => {
        history.push("/");
        }}></div>
}
        
<Route path="/" exact> </Route>

export default Thu;