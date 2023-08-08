interface Person {
    name: string;
    age: number;
    address: string;
}

// Define interfaces for state and data structures
interface Geo {
    lat: string;
    lng: string;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  interface Person {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
  }
  
  // Define the root state interface
  interface RootState {
    data: {
      persons: Person[];
    };
  }
  
  // Define the type for the payload in setPersons mutation
  type SetPersonsPayload = Person[];
  
  export { Geo, Address, Person, RootState, SetPersonsPayload }
  