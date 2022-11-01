import React, { useState } from "react";
import { categories } from "../../data/categories";
import { PropItems } from "../../types/item";
import * as C from "./styled";
import { formatInsertDate } from "../../helpers/datFilter";
type Props = {
  addExpense: (item: PropItems) => void;
};

const initialState = {
  date: "",
  category: "",
  title: "",
  value: "",
};

const InsertArea = ({ addExpense }: Props) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    return;
  };

  const handleSendingForm = () => {
    const { date, category, title, value } = formValues;
    const newDate = formatInsertDate(date);

    if (!date || !category || !title || !value) {
      alert("Preencha todos os campos");
      return;
    }
    addExpense({
      date: newDate,
      category,
      title,
      value: parseFloat(value),
    });
    setFormValues(initialState);
  };
  return (
    <C.Cont>
      <form>
        <input
          className="date"
          type="date"
          name="date"
          onChange={handleFormValue}
        />
        <select
          className="select"
          name="category"
          onChange={(e) => (formValues.category = e.target.value)}
        >
          <option selected>Select</option>
          {Object.keys(categories).map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <input
          className="title"
          type="text"
          name="title"
          onChange={handleFormValue}
          value={formValues.title}
        />
        <input
          className="value"
          type="number"
          name="value"
          onChange={handleFormValue}
          value={formValues.value}
        />
        <button type="button" onClick={handleSendingForm}>
          Cadastrar
        </button>
      </form>
    </C.Cont>
  );
};

export default InsertArea;
