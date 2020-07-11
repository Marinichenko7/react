
let a = {
    name: "Max",
    surname: "Petrov",
    age: 25,
    tichers: ["Vlad", "Andrey", "Tolya", "Misha"],
    oneTicher: {
        name: Vlad,
        predmet: {
            math: true,
            biology: false,
            literature: true
        }
    }
}

let b = a;
b.name = "Vitya";
let c = {...a};
c.age = 30;
c.oneTitcher.name = "Slavik";

c.tichers = {...a.tichers};
c.oneTicher = {...a.oneTicher};
c.oneTicher.predmet = {...a.oneTicher.predmet};

// "a" - это не объект, а ссылка на него
// "b" - это не копирование объекта, а создание еще одной ссылки на объект
// b.name = "Vitya" - эта операция поменяет значение "name" в объекте "a"
// "c" = это поверхностное копирование объекта (копируются только приметивы) не копируются вложенные объекты, а это массивы и объекты.
// "c.age = 30" - эта операция поменяет занчение age в объекте "c", но не поменяет его в объекте "a"
// c.oneTitcher.name = "Slavik" - эта операция поменяет значение в объекте "a", так как вложенные объекты не копируются методом "c = {...a}",
// в этих случаях на вложенные объекты создаются ссылки на них.
// c.tichers = {...a.tichers}; c.oneTicher = {...a.oneTicher}; c.oneTicher.predmet = {...a.oneTicher.predmet}; - операции полного копирования объекта. Теперь "a" независим от "c".
