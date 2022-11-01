import React from "react";
import { PropItems } from "../../types/item";
import * as C from "./styled";
import TableItem from "../TableItem";

type Props = {
  list: PropItems[];
};

const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={150}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={180}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn width={500}>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list?.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};

export default TableArea;
