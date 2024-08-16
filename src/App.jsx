// import './App.css'
import { useState } from "react";
import "./reset.css";
import styled from "styled-components";
import MedalPost from "./components/MedalPost";
import Button from "./components/Button";
import InputBox from "./components/InputBox";

const App = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [gMedal, setGMedal] = useState(0);
  const [sMedal, setSMedal] = useState(0);
  const [bMedal, setBMedal] = useState(0);

  // 추가 버튼
  const onClickAddBtn = () => {
    if (list.filter((el) => el.country === name).length > 0) {
      alert("동일한 국가가 존재 합니다");
    } else if (name === "") {
      alert("국가명을 입력하세요");
    } else {
      const newList = {
        id: crypto.randomUUID(),
        country: name,
        gold: +gMedal,
        silver: +sMedal,
        bronze: +bMedal,
      };
      setList([...list, newList]);
      setName("");
      setGMedal(0);
      setSMedal(0);
      setBMedal(0);
    }
  };

  // 삭제 버튼
  const onClickDeleteBtn = (id) => {
    const delState = list.filter((el) => el.id !== id);
    setList(delState);
  };

  // 업데이트 버튼
  const onClickUpdateBtn = () => {
    if (list.filter((el) => el.country === name).length > 0) {
      const indexNum = list.indexOf(
        list.filter((el) => el.country === name)[0]
      );
      const updateList = {
        id: crypto.randomUUID(),
        country: name,
        gold: +gMedal,
        silver: +sMedal,
        bronze: +bMedal,
      };
      let copyState = [...list];
      copyState[indexNum] = updateList;
      setList(copyState);
      setName("");
      setGMedal(0);
      setSMedal(0);
      setBMedal(0);
    } else {
      alert("국가명을 확인해 주세요");
    }
  };

  return (
    <Wrapper>
      <Title>2024 파리 올림픽</Title>
      <Function>
        <InputBox value={name} setvalue={setName}>
          국가명
        </InputBox>
        <InputBox value={gMedal} setvalue={setGMedal}>
          금메달
        </InputBox>
        <InputBox value={sMedal} setvalue={setSMedal}>
          은메달
        </InputBox>
        <InputBox value={bMedal} setvalue={setBMedal}>
          동메달
        </InputBox>
        <Button onClick={onClickAddBtn}>국가 추가</Button>
        <Button onClick={onClickUpdateBtn}>업데이트</Button>
      </Function>
      {list.length === 0 ? (
        "정보가 없습니다"
      ) : (
        <MedalPost list={list} onClickDeleteBtn={onClickDeleteBtn} />
      )}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 100px auto;
  border: 2px solid black;
  width: 74%;
  border-radius: 16px;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #003580;
`;

const Function = styled.div`
  display: flex;
  gap: 14px;
`;
