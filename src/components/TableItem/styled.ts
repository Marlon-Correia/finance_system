import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ back: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.back};
`;
export const Value = styled.div<{ back: string }>`
  color: ${(props) => props.back};
`;
