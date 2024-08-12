// import './App.css'
import { useState } from "react";
import "./reset.css";
import styled from "styled-components";

const App = () => {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [gMedal, setGMedal] = useState(0);
  const [sMedal, setSMedal] = useState(0);
  const [bMedal, setBMedal] = useState(0);

  // 추가 버튼
  const onClickAddBtn = () => {
    if (state.filter((el) => el.country === name).length > 0) {
      alert("동일한 국가가 존재 합니다");
    } else if (name === "") {
      alert("국가명을 입력하세요");
    } else {
      const newList = {
        id: crypto.randomUUID(),
        country: name,
        gold: gMedal,
        silver: sMedal,
        bronze: bMedal,
      };
      setState([...state, newList]);
      setName("");
      setGMedal(0);
      setSMedal(0);
      setBMedal(0);
    }
  };

  // 삭제 버튼
  const onClickDeleteBtn = (id) => {
    const delState = state.filter((el) => el.id !== id);
    setState(delState);
  };

  // 업데이트 버튼
  const onClickUpdateBtn = () => {
    if (state.filter((el) => el.country === name).length > 0) {
      const indexNum = state.indexOf(
        state.filter((el) => el.country === name)[0]
      );
      const updateList = {
        id: crypto.randomUUID(),
        country: name,
        gold: gMedal,
        silver: sMedal,
        bronze: bMedal,
      };
      let copyState = [...state];
      copyState[indexNum] = updateList;
      setState(copyState);
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
        <Container>
          <Label>국가명</Label>
          <Input
            type="text"
            placeholder="국가 입력"
            value={name}
            onChange={(el) => setName(el.target.value)}
          />
        </Container>
        <Container>
          <Label>금메달</Label>
          <Input
            type="number"
            value={gMedal}
            onChange={(el) => setGMedal(el.target.value)}
          />
        </Container>
        <Container>
          <Label>은메달</Label>
          <Input
            type="number"
            value={sMedal}
            onChange={(el) => setSMedal(el.target.value)}
          />
        </Container>
        <Container>
          <Label>동메달</Label>
          <Input
            type="number"
            value={bMedal}
            onChange={(el) => setBMedal(el.target.value)}
          />
        </Container>
        <Button onClick={onClickAddBtn}>국가 추가</Button>
        <Button onClick={onClickUpdateBtn}>업데이트</Button>
      </Function>
      <TableDiv>
        {state.length > 0 ? (
          <Table>
            <Thead>
              <Tr>
                <Th>국가명</Th>
                <Th>금메달</Th>
                <Th>은메달</Th>
                <Th>동메달</Th>
                <Th>액션</Th>
              </Tr>
            </Thead>
            <Tbody>
              {state
                .sort((a, b) => b.gold - a.gold)
                .map((el) => {
                  return (
                    <Tr key={el.id}>
                      <Td>{el.country}</Td>
                      <Td>{el.gold}</Td>
                      <Td>{el.silver}</Td>
                      <Td>{el.bronze}</Td>
                      <Td>
                        <Button onClick={() => onClickDeleteBtn(el.id)}>
                          삭제
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        ) : (
          "국가를 추가해 주세요"
        )}
      </TableDiv>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fc0;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;

// 테이블
const TableDiv = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #e6e6fa;
`;

const Thead = styled.thead`
  color: white;
  background-color: #003580;
  font-weight: bold;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  color: white;
`;

const Th = styled.th`
  padding: 12px;
`;

const Td = styled.td`
  text-align: center;
  padding: 8px 0;
`;
