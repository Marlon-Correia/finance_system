import React, { useState, useEffect } from "react";
import * as C from "./AppStyles";
import { Category } from "./types/category";
import { PropItems } from "./types/item";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { getCurrentMonth, getListFiltered } from "./helpers/datFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import InsertArea from "./components/InsertArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<PropItems[]>();
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(getListFiltered(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[parseInt(i)].category].expense) {
        expenseCount += filteredList[parseInt(i)].value;
      } else {
        incomeCount += filteredList[parseInt(i)].value;
      }
      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredList, currentMonth]);

  const monthChange = (newMonth: string) => {
    setcurrentMonth(newMonth);
  };

  const handleAddExpense = (item: PropItems) => {
    let newList = list;
    newList.push(item);
    setList(newList);
    console.log(list);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText></C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          monthChange={monthChange}
          income={income}
          expense={expense}
        />
        <InsertArea addExpense={handleAddExpense} />
        <TableArea list={filteredList as PropItems[]} />
      </C.Body>
    </C.Container>
  );
};
export default App;
