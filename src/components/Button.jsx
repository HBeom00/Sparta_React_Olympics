import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return <MedalBtn onClick={onClick}>{children}</MedalBtn>;
};
export default Button;

const MedalBtn = styled.button`
  padding: 10px 20px;
  background-color: #fc0;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;
