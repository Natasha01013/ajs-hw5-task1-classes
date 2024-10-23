import { Character } from "../character";

test("error in name", () => {
    expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test("error in type", () => {
    expect(() => new Character('Andrey', 'Sword')).toThrow('Не верный тип');
});