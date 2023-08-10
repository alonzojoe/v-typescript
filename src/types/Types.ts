export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: string;
}

export interface Person {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
}

export interface RootState {
    data: {
        persons: Person[];
    };
}

export type SetPersonsPayload = Person[];
