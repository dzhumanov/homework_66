export interface mealProps {
  name: string;
  category: string;
  cal: number;
  date: date;
}

export interface Meals {
  [mealId: string]: mealProps;
}
