import React from "react";
import { Route, useHistory } from "react-router-dom";


const Mon = (props) => { // 컴포넌트 Mon
    const history = useHistory();
    console.log(props);
    return <div onClick={() => {
        history.push("/"); //클릭 시 메인으로 이동
        }}></div>
}
        
<Route path="/" exact> </Route> //라우팅

export default Mon;