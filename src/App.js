import React from "react";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";
// index.js에서 route 붙여줬으므로 app.js에서 쓸 준비가 됨
// import NotFound from "./NotFound"; 안써서 주석처리
import StarRating from "./StarRating";
// 여기부터 세부 페이지가 되어줄 컴포넌트들 불러오기
import Detail from "./Detail";
import Mon from "./Mon";
import Tue from "./Tue";
import Wed from "./Wed";
import Thu from "./Thu";
import Fri from "./Fri";
import Sat from "./Sat";
import Sun from "./Sun";



function App() {

    const [list, setList] = React.useState(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
    // state를 list라는 이름으로 참조하고, state를 변경시키는 메소드는 setList라는 이름으로 참조
    const text = React.useRef(null);

    const addStarRating = () => { 
        setList([...list, text.current.value]); //스프레드 문법으로 배열 내 요소를 밖으로 꺼내주고 윗 list에 새 값(text.current.value)을 넣어줌
    }
    console.log("list :" + list);

    return (
        <div className="App">
            {/* 메인부터 각 요일별 페이지(mon.js 등) 까지 연결해줌 */}
            <Container>
                <Title>이번 주도 갓생 살았나요?</Title>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <StarRating list={list} />
                        )} //starrating.js로 이동, 여기서 보낸 {list}값이 starrating.js 내 {list}로 들어감
                    />
                    <Route path="/detail" component={Detail} />
                    {/* <Route>
                        <NotFound />
                    </Route> */}
                    {/* // 각 요일페이지를 detail.js 페이지 컴포넌트와 연결(위에 detail 임포트 완료) */}
                    <Route path="/mon" component={Detail}>
                    </Route>
                    <Route path="/tue" component={Detail}>
                    </Route>
                    <Route path="/wed" component={Detail}>
                    </Route>
                    <Route path="/thu" component={Detail}>
                    </Route>
                    <Route path="/fri" component={Detail}>
                    </Route>
                    <Route path="/sat" component={Detail}>
                    </Route>
                    <Route path="/sun" component={Detail}>
                    </Route>
                    <StarRating />
                </Switch>
            </Container>
        </div>
    );
}

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background: linear-gradient(to left, #FFAAAF , #FFE6EB);
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h3`
color: #FF607F;
text-align: center;
`;


export default App;