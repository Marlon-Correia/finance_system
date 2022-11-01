import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  cursor: pointer;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
  color: #888;
`;

export const Info = styled.div<{ color?: string }>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color ?? "#000"};
`;
