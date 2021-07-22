import { StackNavigationProp } from '@react-navigation/stack';

export type Dish = {
    id: number,
    name: string,
    image: string,
    category: string,
    label: string,
    price:string,
    featured: boolean,
    description: string
}

export type MenuStackParamList = {
    Menu: undefined;
    DishDetail: { dishId: number };
};

export type MainStackParamList = {
    Home: undefined;
    Menu: undefined;
}
  