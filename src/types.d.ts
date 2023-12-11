export interface mealProps {
    name: string;
    category: string;
    cal: number;
}

export interface Meals{
    [mealId: string]: mealProps;
}