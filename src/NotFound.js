import React from "react";
import { FaFileExcel } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  let history = useHistory();
  return (
    <div>
      <h2 style={{ color: "#E065CB" }}>주소가 올바르지 않아요!</h2>
      <button style={styles.button}
        onClick={() => {
          history.push("/");
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

const styles = {
  button: {
      borderRadius: 5,
      borderColor: "white",
      width: 200,
      padding: 10,
      margin: 10,
      background: "#FFA6C5",
      color: "#FDF5E6"
  }
}

export default NotFound;