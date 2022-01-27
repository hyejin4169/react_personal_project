import React from "react";
// 리액트 패키지 불러옴
import styled from "styled-components";
// styled-components 패키지 불러옴
import { FaBorderNone, FaRegLaughSquint } from "react-icons/fa";
// 스마일 아이콘 불러옴
import { FaPlay } from "react-icons/fa";
// 플레이 아이콘 불러옴
import { useHistory } from "react-router-dom";
// 리액트 돔 usehistory 불러옴

const colors = {
    pink: "#E065CB",
    grey: "#a9a9a9"
}
//아래 FaRegLaughSquint 아이콘에서 사용할 컬러


const StarRating = (props) => { //부모 컴포넌트(StarRating)에게 받아온 데이터
    let history = useHistory(); //usehistory 훅을 history에 저장
    console.log("props :" + props);
    const my_lists = props.list; //부모 컴포넌트에게 받아온 데이터 리스트를 my_lists라는 변수에 저장하여 선언

    console.log("my_lists :" + my_lists)


// 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트)를 반환 (컴포넌트는 무조건 return이 하나 이상 있어야함)
    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                const random = Math.floor(Math.random() * 5 ) + 1;
                //메인 접속 시 스마일 아이콘을 1부터 5까지 랜덤 넘버로 뿌려줌. random 변수에 저장
                console.log("random :" + random)
                return (
                    <div key={index}>
                        <ItemStyle
                            className="list_item" //해당 div(이름 list_item)안에 컴포넌트 넣어주고 넘겨줄 것들 명시
                            key={index}
                            onClick={() => {
                                history.push(`/${list}`); //각 인덱스 값 클릭 시 각 요일페이지 템플릿 리터럴로 연결
                            }}
                        >
                            {list}
                            {/* //부모 컴포넌트에게 받아온 데이터 리스트 */}
                            {[...Array(5)].map((_, index) => { //스마일 아이콘 갯수(5)개 만큼 반복하며 뱉어냄
                                return <label key={index}>
                                    <FaRegLaughSquint // 스마일 아이콘 시작
                                        key={index}
                                        size={30}
                                        style={{
                                            marginRight: 3,
                                        }}
                                        color={(random) > index ? colors.pink : colors.grey}
                                        //스마일 아이콘이 Map을 도는 중에 위에서 만든 랜덤 넘버보다 크면 핑크컬러 표시, 작다면 회색컬러 표시
                                    />
                                </label>
                            })}
                            <GoStyle>
                                <label><FaPlay className="click" size={30} style={{
                                            marginRight: 3,
                                            cursor: "pointer"
                                        }} //메인 페이지 플레이 버튼에 마우스 커서 갖다대면 클릭 가능
                             /></label>
                            </GoStyle>
                        </ItemStyle>
                    </div>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;
//Lifestyle을 styled-components로 꾸민다

const ItemStyle = styled.div`
padding: 14px;
margin: 3px;
font-weight: bold;
color: #E16A9D;
display: flex;
justify-content: space-around;
`;
//ItemStyle을 styled-components로 꾸민다

const GoStyle = styled.div`
display: flex;
justify-content: space-around;
color: #C8386B;
`;
//GoStyle을 styled-components로 꾸민다

export default StarRating;
// 함수형 컴포넌트를 export 해줌. 타 컴포넌트에서 StarRating 컴포넌트를 불러다 쓸 수 있음.