export interface IStudent {
    id?: string;
    name: string;
    age: string;
    place: string;
    email: string;
    phone: string;
    // education: string;
}

export interface IFilter{
    name: string;
    age: string;
    place: string;
    email: string;
    phone: string;
    [key: string]: string;
}

export interface ITheme {
    name: string
    backgroundColor: string;
    color: string;
    secondaryColor: string;
}