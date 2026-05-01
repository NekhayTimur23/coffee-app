import { atom } from "jotai";

export interface AtomCardCoffe {
  id: number;
  name: string;
  subTitle: string;
  type: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface CoffeState {
  cards: Record<string, AtomCardCoffe>;
}

export const coffeAtom = atom<CoffeState>({ cards: {} });

export const setCardInObject = atom(
  (get) => get(coffeAtom),
  (get, set, cards: AtomCardCoffe[]) => {
    const cardsObject: Record<string, AtomCardCoffe> = {};

    cards.forEach((card) => {
      cardsObject[card.id] = card;
    });

    set(coffeAtom, { cards: cardsObject });
  },
);

export const coffeTypeAtom = atom<string>("all");

export const coffeInputAtom = atom<string>("");
