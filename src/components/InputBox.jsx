import styled from "styled-components";

const InputBox = ({ value, setvalue, children }) => {
  return (
    <Container>
      <Label>{children}</Label>
      <Input
        type={children === "국가명" ? "text" : "number"}
        placeholder={children === "국가명" ? "국가 입력" : ""}
        value={value}
        onChange={(el) => setvalue(el.target.value)}
      />
    </Container>
  );
};
export default InputBox;

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
