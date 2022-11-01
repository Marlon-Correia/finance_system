import { PropItems } from "../types/item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() + 1}`;
};

export const getListFiltered = (
  list: PropItems[],
  date: string
): PropItems[] => {
  let newList: PropItems[] = [];
  let [year, month] = date.split("-");

  for (let item in list) {
    if (
      list[item].date.getFullYear() === parseInt(year) &&
      list[item].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[item]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${addZeroToNumber(day)}/${addZeroToNumber(month)}/${addZeroToNumber(
    year
  )}`;
};

const addZeroToNumber = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let Months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${Months[parseInt(month) - 1]} de ${year}`;
};

export const formatInsertDate = (date: string) => {
  const [year, month, day] = date.split("-");
  const newDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return newDate;
};
