// import * as S from "./loginPage.styled";
import React, { useState } from "react";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      <input
        placeholder="전화번호 사용자 이름 또는 이메일"
        id="id"
        className="login"
        onChange={(e) => {
          setId(e.target.value);
        }}
        // onKeyUp={changeButton}
      />
      <input
        type="password"
        placeholder="비밀번호"
        id="password"
        className="login"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        // onKeyUp={changeButton}
      />
    </div>
  );
};

export default LoginPage;
