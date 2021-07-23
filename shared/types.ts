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

export type Comment = {
    id: number,
    dishId: number,
    rating: number,
    comment: string,
    author: string,
    date: string
}

export type Leader = {
    id: number,
    name: string,
    image: string,
    designation: string,
    abbr: string,
    featured: boolean,
    description: string
}

export type Promotion = {
    id: number,
    name: string,
    image: string,
    label: string,
    price: string,
    featured: boolean,
    description: string
}






  