import React from "react";
import * as C from "./styled";
import { formatCurrentMonth } from "../../helpers/datFilter";
import ResumeItem from "../ResumeItem";

type Props = {
  currentMonth: string;
  monthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, monthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    monthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.Infos>
        <ResumeItem title="Receitas" value={income} color="#0f0" />
        <ResumeItem title="Despezas" value={expense} color="#f00" />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense > 0 ? "#0F0" : "#f00"}
        />
      </C.Infos>
    </C.Container>
  );
};
export default InfoArea;
