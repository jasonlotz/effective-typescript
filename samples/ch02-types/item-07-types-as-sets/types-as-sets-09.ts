interface Identified {
  id: string;
}
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07"),
}; // OK

type PersonSpan2 = keyof (Person & Lifespan); // "name" | "birth" | "death?"
type PersonSpan3 = keyof Person | keyof Lifespan; // "name" | "birth" | "death?"

type PersonSpan4 = keyof (Person | Lifespan); // never
type PersonSpan5 = keyof Person & keyof Lifespan; // never
