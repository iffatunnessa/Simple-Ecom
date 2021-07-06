import { atom, selector } from 'recoil';

export const cartAtom = atom({
    key: 'cartAtom',
    default: [],
});