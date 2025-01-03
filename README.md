# CI Test demo
[![Build status](https://ci.appveyor.com/api/projects/status/1ibdml8it9hlxqns?svg=true)](https://ci.appveyor.com/project/Natasha01013/ajs-hw5-task1-classes)

# Домашнее задание к лекции «Классы, наследование»
## Задача. 1 Классы, наследование

### Легенда
Вы решили перейти на классы и реализовать иерархию, выделив в качестве базового класса класс `Character`, а для остальных персонажей создать классы, наследующиеся от него.

### Описание
Реализуйте описанную иерархию классов: класс `Character` является родительским для всех остальных, 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` от него наследуются, сами задавая свои характеристики. 

Свойства, которые должны быть у объектов класса `Character`: 

`name` - имя 
`type` - тип 
`health` - уровень жизни 
`level` - уровень персонажа 
`attack` - атака 
`defence` - защита 

Конструктор класса должен соответствовать следующим требованиям:  

`name` - строка, min - 2 символа, max - 10 
`type` - один из типов (строка): Bowerman, Swordsman, Magician, Daemon, Undead, Zombie 
В случае, если передаются некорректные значения, должна выбрасываться ошибка (`throw new Error(...)`). 

В вашей функции автоматически должны устанавливаться значения следующих полей: 

1. health: 100 
2. level: 1 
3. Атака/защита: 
    1. Bowerman: 25/25 
    2. Swordsman: 40/10 
    3. Magician: 10/40 
    4. Undead: 25/25 
    5. Zombie: 40/10 
    6. Daemon: 10/40 