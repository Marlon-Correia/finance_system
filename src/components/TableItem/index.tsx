import React from "react";
import * as C from "./styled";
import { PropItems } from "../../types/item";
import { formatDate } from "../../helpers/datFilter";
import { categories } from "../../data/categories";
type Props = {
  item: PropItems;
};

const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category back={categories?.[item.category].color}>
          {categories?.[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value back={categories?.[item.category].expense ? "#f00" : "#0f0"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};

export default TableItem;
