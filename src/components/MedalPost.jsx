import styled from "styled-components";
import Button from "./Button";

const MedalPost = ({ list, onClickDeleteBtn }) => {
  return (
    <TableDiv>
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
          {list
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
    </TableDiv>
  );
};
export default MedalPost;

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

const Tr = styled.tr``;

const Th = styled.th`
  padding: 12px;
`;

const Td = styled.td`
  text-align: center;
  padding: 8px 0;
`;
