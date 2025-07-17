import { SortData } from "./sortData";
import { Numbers } from "./Numbers";
import { Strings } from "./Strings";

const dateArray = [
  new Date(2010, 9, 24),
  new Date(2035, 9, 24),
  new Date(2001, 9, 24),
  new Date(2029, 9, 24),
];

const years: number[] = dateArray.map((date) => {
  return date.getFullYear();
});

const numberData = new Numbers(years)
numberData.sort()
console.log(numberData.number);

const stringsData = new Strings("vdGryF");
stringsData.sort()
console.log(stringsData.str)