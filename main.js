let hp = 30;
let maxHp = hp;
let defense = 1;
let maxDefense = defense;
let minDamage = 1;
let maxDamage = 2;
let money = 15;
let reputation = 1;
let mana = 50;

let cost;
console.log("Сьогодні почнеться велика історія, історія чоловіка на ім'я ...");
let userName = prompt("Як вас звати?");
console.log("Так... Історія чоловіка на ім'я ", userName);
console.log("Ви вийшли з дому й вирішили піти на ринок і купити обладунки. У вас є 15 золотих.");
console.log("Прийшовши, ви можете купити обладунок за 5 золота й зброю за 7 золотих.");

while (true) {
    let i = prompt("Введіть, що будете купувати, або 'q', щоб вийти").toLowerCase();
    if (i !== "q") {
        if (i === "зброя") {
            console.log("Ви купили меч");
            cost = 7;
            maxDamage += 4;
            minDamage += 2;
            money -= cost;
        } else if (i === "обладунок") {
            console.log("Ви купили обладунок");
            cost = 5;
            defense += 5;
            maxDefense = defense;
            money -= cost;
        } else {
            console.log("Такого не існує");
        }
    } else {
        break;
    }
}

console.log(`Після цього ${userName} пішов за завданнями. Там було 3 завдання.`);
console.log("Перше було піти в печеру неподалеку й знищити монстрів. Нагорода - 30 золотих. *Це завдання обов'язкове для сюжету");
console.log("Друге було піти в ліс на півдні й захистити торговий шлях. Нагорода - 25 золотих");
console.log("Третє було піти до алхіміка й заказати в нього яд. Нагорода - 15 золотих");

let quest = parseInt(prompt("Виберіть квест (1-3)"));

if (quest === 1) {
    console.log("Ви підійшли до печери і помітили табличку з надписом");
    console.log('"Хто Прийде Той Помре"');
    console.log("Але ви вирішили піти, не дивлячись на надпис.");
    console.log("Пройшовши вглиб, ви побачили дві дороги.");
    console.log("Біля першої було написано - легкий, але не кращий шлях.");
    console.log("Біля другої було написано - складніший, але не гірший шлях.");

    let choose = parseInt(prompt("Куди підете? (1 або 2)"));
    if (choose === 1) {
        console.log("Ви просто пройшли цей шлях і вийшли з печери живим");
        money += 30;
    } else {
        console.log("Ви пройшли у другий тунель і побачили двох орків й груду каменю.");
        console.log("Аааргх. прокричали вони і почався бій *в цій битві після 5 раунду з'явиться новий ворог");

        let firstOrkHp = 25;
        let secondOrkHp = 25;
        let round = 0;

        while (true) {
            round += 1;
            defense = maxDefense;

            if (hp <= 0) {
                console.log("Game over. Битва починається заново");
                firstOrkHp = 25;
                secondOrkHp = 25;
                hp = maxHp;
                mana = 50;
                continue;
            } else if (firstOrkHp <= 0 && secondOrkHp <= 0) {
                console.log("Ви помітили як груда каменя перетворюється на голема");
                break;
            } else {
                console.log("У вас", hp, "здоров'я");
                console.log("Виберіть, що будете робити: ударити, використати магію, захищатися або використати хіл");

                let choose = prompt("Виберіть").toLowerCase();

                if (choose === "ударити") {
                    let chooseThree = parseInt(prompt("Виберіть, кого атакувати 1 чи 2?"));
                    if (chooseThree === 1) {
                        if (Math.floor(Math.random() * 20) + 1 >= 5) {
                            firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                        }
                    } else {
                        if (Math.floor(Math.random() * 20) + 1 >= 5) {
                            secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                        }
                    }
                } else if (choose === "магію") {
                    mana -= 15;
                    firstOrkHp -= Math.floor(Math.random() * 5) + 4;
                    secondOrkHp -= Math.floor(Math.random() * 5) + 4;
                } else if (choose === "захищатися") {
                    defense += Math.floor(defense * 0.5);
                } else if (choose === "хіл") {
                    let heal = Math.round(maxHp * 0.2);
                    hp += heal;
                    console.log(`Ви отримали ${heal} здоров'я`);
                }

                if (firstOrkHp > 0) {
                    if (Math.floor(Math.random() * 10) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * 4) + 2;
                    }
                }

                if (secondOrkHp > 0) {
                    if (Math.floor(Math.random() * 10) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * 4) + 2;
                    }
                }

                if (round === 5) {
                    console.log("Ви помітили як груда каменя перетворюється на голема");
                    break;
                }
            }
        }

        let golemHp = 70;

        while (true) {
            defense = maxDefense;

            if (hp <= 0) {
                console.log("Game over. Битва починається заново");
                firstOrkHp = 25;
                secondOrkHp = 25;
                golemHp = 70;
                hp = maxHp;
                mana = 50;
                continue;
            } else if (firstOrkHp <= 0 && secondOrkHp <= 0 && golemHp <= 0) {
                mana = 50;
                maxHp += Math.floor(maxHp * ((Math.floor(Math.random() * 8) + 3) / 10));
                hp = maxHp;
                money += 30;
                console.log("Ви виграли в битві. Ви перемогли боса і вийшли з печери");
                console.log("Тепер ваше здоров'я дорівнює", maxHp);
                console.log("Тепер у вас", money, "грошей");
                console.log("Також ви знайшли сильний меч і обладунок");
                maxDefense += 5;
                maxDamage += 4;
                minDamage += 2;
                break;
            } else {
                console.log("У вас", hp, "здоров'я");
                console.log("Виберіть, що будете робити: ударити, використати магію, захищатися або використати хіл");

                let choose = prompt("Виберіть").toLowerCase();

                if (choose === "ударити") {
                    let chooseThree = parseInt(prompt("Виберіть, кого атакувати 1, 2 чи 3?"));
                    if (chooseThree === 1) {
                        if (Math.floor(Math.random() * 20) + 1 >= 5) {
                            firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                            console.log("Тепер у першого орка", firstOrkHp, "здоров'я");
                        } else {
                            console.log("Ви промахнулися");
                        }
                    } else if (chooseThree === 2) {
                        if (Math.floor(Math.random() * 20) + 1 >= 5) {
                            secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                            console.log("Тепер у другого орка", secondOrkHp, "здоров'я");
                        } else {
                            console.log("Ви промахнулися");
                        }
                    } else {
                        if (Math.floor(Math.random() * 20) + 1 >= 5) {
                            golemHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                            console.log("Тепер у голема", golemHp, "здоров'я");
                        } else {
                            console.log("Ви промахнулися");
                        }
                    }
                } else if (choose === "магію") {
                    mana -= 15;
                    firstOrkHp -= Math.floor(Math.random() * 5) + 4;
                    secondOrkHp -= Math.floor(Math.random() * 5) + 4;
                } else if (choose === "захищатися") {
                    defense += Math.floor(defense * 0.5);
                } else if (choose === "хіл") {
                    let heal = Math.round(maxHp * 0.2);
                    hp += heal;
                    console.log(`Ви отримали ${heal} здоров'я`);
                }

                if (firstOrkHp > 0) {
                    if (Math.floor(Math.random() * 10) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * 4) + 2;
                    }
                }

                if (secondOrkHp > 0) {
                    if (Math.floor(Math.random() * 10) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * 4) + 2;
                    }
                }
            }
        }
    }
}
else if (quest === 2) {
    console.log(`Прийшовши в ліс на дорогу ви помітили двох величезних павуків, які одразу ж на вас напали`);
    let firstSpiderHp = 10;
    let secondSpiderHp = 10;
    while (true) {
        if (defense !== maxDefense) {
            defense = maxDefense;
        }
        if (hp === 0) {
            console.log("Game over. Битва починається заново");
            firstSpiderHp = 10;
            secondSpiderHp = 10;
            hp = maxHp;
            mana = 50;
            continue;
        }
        else if (firstSpiderHp === 0 && secondSpiderHp === 0) {
            mana = 50;
            maxHp += maxHp * ((Math.floor(Math.random() * (10 - 2 + 1)) + 2) / 10);
            hp = maxHp;
            money += 25;
            console.log("Ви виграли в битві");
            console.log("тепер ваше здоров'я дорівнює", maxHp);
            console.log("тепер у вас", money, "грошей");
            break;
        }
        else {
            console.log("у вас", hp, "здоров'я");
            console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
            let choose;
            while (true) {
                let chooseTwo = prompt("Виберіть")
                chooseTwo = chooseTwo.toLowerCase()
                if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                    choose = chooseTwo
                    break;
                }
            }
            if (choose === "ударити") {
                let chooseThree = parseInt(prompt("Виберіть кого атакувати 1 чи 2?"));
                if (chooseThree === 1) {
                    if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                        firstSpiderHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                    }
                }
                else {
                    if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                        secondSpiderHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                    }
                }
            }
            else if (choose === "магію") {
                mana -= 15;
                firstSpiderHp -= Math.floor(Math.random() * (7 - 4 + 1)) + 4;
                secondSpiderHp -= Math.floor(Math.random() * (7 - 4 + 1)) + 4;
            }
            else if (choose === "захищатися") {
                defense += defense * 0.5;
            }
            else if (choose === "хіл") {
                let heal = Math.round(maxHp * 0.2);
                hp += heal;
                console.log(`Ви отримали ${heal} здоров'я`)
            }
            if (firstSpiderHp === 0) {
                if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                    hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                }
            }
            else if (secondSpiderHp === 0) {

                if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                    hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                }
            }
            else {
                if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                    hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                }
                if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                    hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                }
            }
        }
    }
    console.log(`Після цього ${userName} пішов за завданнями. Там було 2 завдання`);
    console.log("перше було піти в печеру неподалеку й знищити монстрів. Нагорода - 30 золотих. *це завдання обов'язеове для сюжету");
    console.log("друге було піти до алхіміка й заказати в нього яд. Нагорода - 15 золотих");
    let quest = prompt("Виберіть квест (1-2)");
    if (quest === 1) {
        console.log("Ви підійшли до печери і помітили табличку з надписом");
        console.log('"Хто Прийде Той Помре"');
        console.log("але ви вирішили піти, не дивлячись на надпис");
        console.log("пройшовши вглиб, ви побачили дві дороги");
        console.log("біля першої було написно - легкий, але не кращий шлях.");
        console.log("біля другого було написано - складніший, але не гірший шлях");
        let choose = parseInt(prompt("Куди підете?"));
        if (choose === 1) {
            console.log("Ви просто пройшли цей шлях і вийшли з печери живим")
            money += 30;
        }
        else {
            console.log("ви пройшли у другий тунель і побачили двох орків й груду каменю");
            console.log("Аааргх. прокричали вони і почався бій *в цій битві після 5 раунду з'явиться новий ворог");
            let firstOrkHp = 25;
            let secondOrkHp = 25;
            let round = 0;
            while (true) {
                round += 1;
                if (defense !== maxDefense) {
                    defense = maxDefense;
                }
                if (hp === 0) {
                    console.log("Game over. Битва починається заново");
                    firstOrkHp = 25;
                    secondOrkHp = 25;
                    hp = maxHp;
                    mana = 50;
                    continue;
                }
                else if (firstOrkHp === 0 && secondOrkHp === 0) {
                    // mana = 50;
                    // maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                    // hp = maxHp;
                    // money += 30;
                    // console.log("Ви виграли в битві");
                    // console.log("тепер ваше здоров'я дорівнює", maxHp);
                    // console.log("тепер у вас", money, "грошей");
                    console.log("Ви помітили як груда каменя перетворюється на голема");
                    break;
                }
                else {
                    console.log("у вас", hp, "здоров'я");
                    console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                    let choose;
                    while (true) {
                        let chooseTwo = prompt("Виберіть")
                        chooseTwo = chooseTwo.toLowerCase()
                        if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                            choose = chooseTwo
                            break;
                        }
                    }
                    if (choose === "ударити") {
                        let chooseThree = parseInt(prompt("Виберіть кого атакувати 1 чи 2?"));
                        if (chooseThree === 1) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                            }
                        }
                    }
                    else if (choose === "магію") {
                        mana -= 15;
                        firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                    }
                    else if (choose === "захищатися") {
                        defense += defense * 0.5;
                    }
                    else if (choose === "хіл") {
                        let heal = Math.round(maxHp * 0.2);
                        hp += heal;
                        console.log(`Ви отримали ${heal} здоров'я`)
                    }
                    if (firstOrkHp === 0) {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else if (secondOrkHp === 0) {

                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                        }
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }

                    if (round === 5) {
                        console.log("Ви помітили як груда каменя перетворюється на голема");
                        break;
                    }
                }
            }
            let golemHp = 70;
            while (true) {
                if (defense !== maxDefense) {
                    defense = maxDefense;
                }
                if (hp === 0) {
                    console.log("Game over. Битва починається заново");
                    firstOrkHp = 25;
                    secondOrkHp = 25;
                    golemHp = 70;
                    hp = maxHp;
                    mana = 50;
                    continue;
                }
                else if (firstOrkHp === 0 && secondOrkHp === 0 && golemHp === 0) {
                    mana = 50;
                    maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                    hp = maxHp;
                    money += 30;
                    console.log("Ви виграли в битві. Ви перемогли боса і вийшли з печери");
                    console.log("тепер ваше здоров'я дорівнює", maxHp);
                    console.log("тепер у вас", money, "грошей");
                    console.log("Також ви знайшли сильний меч і обладунок")
                    maxDefense += 5;
                    maxDamage += 4;
                    minDamage += 2;
                    break;
                }
                else {
                    console.log("у вас", hp, "здоров'я");
                    console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                    let choose;
                    while (true) {
                        let chooseTwo = prompt("Виберіть")
                        chooseTwo = chooseTwo.toLowerCase()
                        if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                            choose = chooseTwo
                            break;
                        }
                    }
                    if (choose === "ударити") {
                        let chooseThree = parseInt(prompt("Виберіть кого атакувати 1, 2 чи 3?"));
                        if (chooseThree === 1) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у першого орка", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                        else if (chooseThree === 2) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у другого орка", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                golemHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у голема", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                    }
                    else if (choose === "магію") {
                        mana -= 15;
                        firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                    }
                    else if (choose === "захищатися") {
                        defense += defense * 0.5;
                    }
                    else if (choose === "хіл") {
                        let heal = Math.round(maxHp * 0.2);
                        hp += heal;
                        console.log(`Ви отримали ${heal} здоров'я`)
                    }
                    if (firstOrkHp === 0) {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else if (secondOrkHp === 0) {

                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                        }
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                }
            }
        }
    }
    else {
        console.log(`Прийшовши ти сказав йому - "Мені одне зілля отрути" він здивувався, але зробив. "З вас 3 золота". * -30 репутації бо отруту покупати не дозвалено в цьому місті, але якщо і купити то з націнкою`);
        reputation += 0.30;
        money += 12;
        console.log(`Після цього ${userName} пішов за завданнями. Там було 1 завдання`);
        console.log("перше було піти в печеру неподалеку й знищити монстрів. Нагорода - 30 золотих. *це завдання обов'язеове для сюжету");
        console.log("друге було піти в ліс на півдні й захистити торговий шлях. Нагорода - 25 золотих");
        while (true) {
            let quest1 = prompt("Виберіть квест (1)");
            if (quest1 === 1) {
                break;
            }
        }
        quest = quest1;
        if (quest === 1) {
            console.log("Ви підійшли до печери і помітили табличку з надписом");
            console.log('"Хто Прийде Той Помре"');
            console.log("але ви вирішили піти, не дивлячись на надпис");
            console.log("пройшовши вглиб, ви побачили дві дороги");
            console.log("біля першої було написно - легкий, але не кращий шлях.");
            console.log("біля другого було написано - складніший, але не гірший шлях");
            let choose = parseInt(prompt("Куди підете?"));
            if (choose === 1) {
                console.log("Ви просто пройшли цей шлях і вийшли з печери живим")
                money += 30;
            }
            else {
                console.log("ви пройшли у другий тунель і побачили двох орків й груду каменю");
                console.log("Аааргх. прокричали вони і почався бій *в цій битві після 5 раунду з'явиться новий ворог");
                let firstOrkHp = 25;
                let secondOrkHp = 25;
                let round = 0;
                while (true) {
                    round += 1;
                    if (defense !== maxDefense) {
                        defense = maxDefense;
                    }
                    if (hp === 0) {
                        console.log("Game over. Битва починається заново");
                        firstOrkHp = 25;
                        secondOrkHp = 25;
                        hp = maxHp;
                        mana = 50;
                        continue;
                    }
                    else if (firstOrkHp === 0 && secondOrkHp === 0) {
                        // mana = 50;
                        // maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                        // hp = maxHp;
                        // money += 30;
                        // console.log("Ви виграли в битві");
                        // console.log("тепер ваше здоров'я дорівнює", maxHp);
                        // console.log("тепер у вас", money, "грошей");
                        console.log("Ви помітили як груда каменя перетворюється на голема");
                        break;
                    }
                    else {
                        console.log("у вас", hp, "здоров'я");
                        console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                        let choose;
                        while (true) {
                            let chooseTwo = prompt("Виберіть")
                            chooseTwo = chooseTwo.toLowerCase()
                            if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                                choose = chooseTwo
                                break;
                            }
                        }
                        if (choose === "ударити") {
                            let chooseThree = parseInt(prompt("Виберіть кого атакувати 1 чи 2?"));
                            if (chooseThree === 1) {
                                if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                    firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                                }
                            }
                            else {
                                if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                    secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                                }
                            }
                        }
                        else if (choose === "магію") {
                            mana -= 15;
                            firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                            secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        }
                        else if (choose === "захищатися") {
                            defense += defense * 0.5;
                        }
                        else if (choose === "хіл") {
                            let heal = Math.round(maxHp * 0.2);
                            hp += heal;
                            console.log(`Ви отримали ${heal} здоров'я`)
                        }
                        if (firstOrkHp === 0) {
                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                            }
                        }
                        else if (secondOrkHp === 0) {

                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                            }
                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                            }
                        }

                        if (round === 5) {
                            console.log("Ви помітили як груда каменя перетворюється на голема");
                            break;
                        }
                    }
                }
                let golemHp = 70;
                while (true) {
                    if (defense !== maxDefense) {
                        defense = maxDefense;
                    }
                    if (hp === 0) {
                        console.log("Game over. Битва починається заново");
                        firstOrkHp = 25;
                        secondOrkHp = 25;
                        golemHp = 70;
                        hp = maxHp;
                        mana = 50;
                        continue;
                    }
                    else if (firstOrkHp === 0 && secondOrkHp === 0 && golemHp === 0) {
                        mana = 50;
                        maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                        hp = maxHp;
                        money += 30;
                        console.log("Ви виграли в битві. Ви перемогли боса і вийшли з печери");
                        console.log("тепер ваше здоров'я дорівнює", maxHp);
                        console.log("тепер у вас", money, "грошей");
                        console.log("Також ви знайшли сильний меч і обладунок")
                        maxDefense += 5;
                        maxDamage += 4;
                        minDamage += 2;
                        break;
                    }
                    else {
                        console.log("у вас", hp, "здоров'я");
                        console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                        let choose;
                        while (true) {
                            let chooseTwo = prompt("Виберіть")
                            chooseTwo = chooseTwo.toLowerCase()
                            if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                                choose = chooseTwo
                                break;
                            }
                        }
                        if (choose === "ударити") {
                            let chooseThree = parseInt(prompt("Виберіть кого атакувати 1, 2 чи 3?"));
                            if (chooseThree === 1) {
                                if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                    firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                    console.log("тепер у першого орка", golemHp, "здоров'я")
                                }
                                else {
                                    console.log("Ви промахнулися")
                                }
                            }
                            else if (chooseThree === 2) {
                                if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                    secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                    console.log("тепер у другого орка", golemHp, "здоров'я")
                                }
                                else {
                                    console.log("Ви промахнулися")
                                }
                            }
                            else {
                                if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                    golemHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                    console.log("тепер у голема", golemHp, "здоров'я")
                                }
                                else {
                                    console.log("Ви промахнулися")
                                }
                            }
                        }
                        else if (choose === "магію") {
                            mana -= 15;
                            firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                            secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        }
                        else if (choose === "захищатися") {
                            defense += defense * 0.5;
                        }
                        else if (choose === "хіл") {
                            let heal = Math.round(maxHp * 0.2);
                            hp += heal;
                            console.log(`Ви отримали ${heal} здоров'я`)
                        }
                        if (firstOrkHp === 0) {
                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                            }
                        }
                        else if (secondOrkHp === 0) {

                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                            }
                            if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                                hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                            }
                        }
                    }
                }
            }
        }
    }
}
else {
    console.log(`Прийшовши ти сказав йому - "Мені одне зілля отрути" він здивувався, але зробив. "З вас 3 золота". * -30 репутації бо отруту покупати не дозвалено в цьому місті, але якщо і купити то з націнкою`);
    reputation += 0.30;
    money += 12;
    console.log(`Після цього ${userName} пішов за завданнями. Там було 2 завдання`);
    console.log("перше було піти в печеру неподалеку й знищити монстрів. Нагорода - 30 золотих. *це завдання обов'язеове для сюжету");
    console.log("друге було піти в ліс на півдні й захистити торговий шлях. Нагорода - 25 золотих");
    let quest = prompt("Виберіть квест (1-2)");

    if (quest === 1) {
        console.log("Ви підійшли до печери і помітили табличку з надписом");
        console.log('"Хто Прийде Той Помре"');
        console.log("але ви вирішили піти, не дивлячись на надпис");
        console.log("пройшовши вглиб, ви побачили дві дороги");
        console.log("біля першої було написно - легкий, але не кращий шлях.");
        console.log("біля другого було написано - складніший, але не гірший шлях");
        let choose = parseInt(prompt("Куди підете?"));
        if (choose === 1) {
            console.log("Ви просто пройшли цей шлях і вийшли з печери живим")
            money += 30;
        }
        else {
            console.log("ви пройшли у другий тунель і побачили двох орків й груду каменю");
            console.log("Аааргх. прокричали вони і почався бій *в цій битві після 5 раунду з'явиться новий ворог");
            let firstOrkHp = 25;
            let secondOrkHp = 25;
            let round = 0;
            while (true) {
                round += 1;
                if (defense !== maxDefense) {
                    defense = maxDefense;
                }
                if (hp === 0) {
                    console.log("Game over. Битва починається заново");
                    firstOrkHp = 25;
                    secondOrkHp = 25;
                    hp = maxHp;
                    mana = 50;
                    continue;
                }
                else if (firstOrkHp === 0 && secondOrkHp === 0) {
                    // mana = 50;
                    // maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                    // hp = maxHp;
                    // money += 30;
                    // console.log("Ви виграли в битві");
                    // console.log("тепер ваше здоров'я дорівнює", maxHp);
                    // console.log("тепер у вас", money, "грошей");
                    console.log("Ви помітили як груда каменя перетворюється на голема");
                    break;
                }
                else {
                    console.log("у вас", hp, "здоров'я");
                    console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                    let choose;
                    while (true) {
                        let chooseTwo = prompt("Виберіть")
                        chooseTwo = chooseTwo.toLowerCase()
                        if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                            choose = chooseTwo
                            break;
                        }
                    }
                    if (choose === "ударити") {
                        let chooseThree = parseInt(prompt("Виберіть кого атакувати 1 чи 2?"));
                        if (chooseThree === 1) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                            }
                        }
                    }
                    else if (choose === "магію") {
                        mana -= 15;
                        firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                    }
                    else if (choose === "захищатися") {
                        defense += defense * 0.5;
                    }
                    else if (choose === "хіл") {
                        let heal = Math.round(maxHp * 0.2);
                        hp += heal;
                        console.log(`Ви отримали ${heal} здоров'я`)
                    }
                    if (firstOrkHp === 0) {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else if (secondOrkHp === 0) {

                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                        }
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }

                    if (round === 5) {
                        console.log("Ви помітили як груда каменя перетворюється на голема");
                        break;
                    }
                }
            }
            let golemHp = 70;
            while (true) {
                if (defense !== maxDefense) {
                    defense = maxDefense;
                }
                if (hp === 0) {
                    console.log("Game over. Битва починається заново");
                    firstOrkHp = 25;
                    secondOrkHp = 25;
                    golemHp = 70;
                    hp = maxHp;
                    mana = 50;
                    continue;
                }
                else if (firstOrkHp === 0 && secondOrkHp === 0 && golemHp === 0) {
                    mana = 50;
                    maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                    hp = maxHp;
                    money += 30;
                    console.log("Ви виграли в битві. Ви перемогли боса і вийшли з печери");
                    console.log("тепер ваше здоров'я дорівнює", maxHp);
                    console.log("тепер у вас", money, "грошей");
                    console.log("Також ви знайшли сильний меч і обладунок")
                    maxDefense += 5;
                    maxDamage += 4;
                    minDamage += 2;
                    break;
                }
                else {
                    console.log("у вас", hp, "здоров'я");
                    console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                    let choose;
                    while (true) {
                        let chooseTwo = prompt("Виберіть")
                        chooseTwo = chooseTwo.toLowerCase()
                        if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                            choose = chooseTwo
                            break;
                        }
                    }
                    if (choose === "ударити") {
                        let chooseThree = parseInt(prompt("Виберіть кого атакувати 1, 2 чи 3?"));
                        if (chooseThree === 1) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у першого орка", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                        else if (chooseThree === 2) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у другого орка", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                golemHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у голема", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                    }
                    else if (choose === "магію") {
                        mana -= 15;
                        firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                    }
                    else if (choose === "захищатися") {
                        defense += defense * 0.5;
                    }
                    else if (choose === "хіл") {
                        let heal = Math.round(maxHp * 0.2);
                        hp += heal;
                        console.log(`Ви отримали ${heal} здоров'я`)
                    }
                    if (firstOrkHp === 0) {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else if (secondOrkHp === 0) {

                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                        }
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                }
            }
        }
    }
    else {
        console.log(`Прийшовши в ліс на дорогу ви помітили двох величезних павуків, які одразу ж на вас напали`);
        let firstSpiderHp = 10;
        let secondSpiderHp = 10;
        while (true) {
            if (defense !== maxDefense) {
                defense = maxDefense;
            }
            if (hp === 0) {
                console.log("Game over. Битва починається заново");
                firstSpiderHp = 10;
                secondSpiderHp = 10;
                hp = maxHp;
                mana = 50;
                continue;
            }
            else if (firstSpiderHp === 0 && secondSpiderHp === 0) {
                mana = 50;
                maxHp += maxHp * ((Math.floor(Math.random() * (10 - 2 + 1)) + 2) / 10);
                hp = maxHp;
                money += 25;
                console.log("Ви виграли в битві");
                console.log("тепер ваше здоров'я дорівнює", maxHp);
                console.log("тепер у вас", money, "грошей");
                break;
            }
            else {
                console.log("у вас", hp, "здоров'я");
                console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                let choose;
                while (true) {
                    let chooseTwo = prompt("Виберіть")
                    chooseTwo = chooseTwo.toLowerCase()
                    if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                        choose = chooseTwo
                        break;
                    }
                }
                if (choose === "ударити") {
                    let chooseThree = parseInt(prompt("Виберіть кого атакувати 1 чи 2?"));
                    if (chooseThree === 1) {
                        if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                            firstSpiderHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                            secondSpiderHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                        }
                    }
                }
                else if (choose === "магію") {
                    mana -= 15;
                    firstSpiderHp -= Math.floor(Math.random() * (7 - 4 + 1)) + 4;
                    secondSpiderHp -= Math.floor(Math.random() * (7 - 4 + 1)) + 4;
                }
                else if (choose === "захищатися") {
                    defense += defense * 0.5;
                }
                else if (choose === "хіл") {
                    let heal = Math.round(maxHp * 0.2);
                    hp += heal;
                    console.log(`Ви отримали ${heal} здоров'я`)
                }
                if (firstSpiderHp === 0) {
                    if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                    }
                }
                else if (secondSpiderHp === 0) {

                    if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                    }
                }
                else {
                    if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                    }
                    if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                        hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                    }
                }
            }
        }
    }
    console.log(`Після цього ${userName} пішов за завданнями. Там було 1 завдання`);
    console.log("перше було піти в печеру неподалеку й знищити монстрів. Нагорода - 30 золотих. *це завдання обов'язеове для сюжету");
    quest = prompt("Виберіть квест (1)");
    if (quest === 1) {
        console.log("Ви підійшли до печери і помітили табличку з надписом");
        console.log('"Хто Прийде Той Помре"');
        console.log("але ви вирішили піти, не дивлячись на надпис");
        console.log("пройшовши вглиб, ви побачили дві дороги");
        console.log("біля першої було написно - легкий, але не кращий шлях.");
        console.log("біля другого було написано - складніший, але не гірший шлях");
        let choose = parseInt(prompt("Куди підете?"));
        if (choose === 1) {
            console.log("Ви просто пройшли цей шлях і вийшли з печери живим")
            money += 30;
        }
        else {
            console.log("ви пройшли у другий тунель і побачили двох орків й груду каменю");
            console.log("Аааргх. прокричали вони і почався бій *в цій битві після 5 раунду з'явиться новий ворог");
            let firstOrkHp = 25;
            let secondOrkHp = 25;
            let round = 0;
            while (true) {
                round += 1;
                if (defense !== maxDefense) {
                    defense = maxDefense;
                }
                if (hp === 0) {
                    console.log("Game over. Битва починається заново");
                    firstOrkHp = 25;
                    secondOrkHp = 25;
                    hp = maxHp;
                    mana = 50;
                    continue;
                }
                else if (firstOrkHp === 0 && secondOrkHp === 0) {
                    // mana = 50;
                    // maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                    // hp = maxHp;
                    // money += 30;
                    // console.log("Ви виграли в битві");
                    // console.log("тепер ваше здоров'я дорівнює", maxHp);
                    // console.log("тепер у вас", money, "грошей");
                    console.log("Ви помітили як груда каменя перетворюється на голема");
                    break;
                }
                else {
                    console.log("у вас", hp, "здоров'я");
                    console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                    let choose;
                    while (true) {
                        let chooseTwo = prompt("Виберіть")
                        chooseTwo = chooseTwo.toLowerCase()
                        if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                            choose = chooseTwo
                            break;
                        }
                    }
                    if (choose === "ударити") {
                        let chooseThree = parseInt(prompt("Виберіть кого атакувати 1 чи 2?"));
                        if (chooseThree === 1) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
                            }
                        }
                    }
                    else if (choose === "магію") {
                        mana -= 15;
                        firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                    }
                    else if (choose === "захищатися") {
                        defense += defense * 0.5;
                    }
                    else if (choose === "хіл") {
                        let heal = Math.round(maxHp * 0.2);
                        hp += heal;
                        console.log(`Ви отримали ${heal} здоров'я`)
                    }
                    if (firstOrkHp === 0) {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else if (secondOrkHp === 0) {

                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                        }
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }

                    if (round === 5) {
                        console.log("Ви помітили як груда каменя перетворюється на голема");
                        break;
                    }
                }
            }
            let golemHp = 70;
            while (true) {
                if (defense !== maxDefense) {
                    defense = maxDefense;
                }
                if (hp === 0) {
                    console.log("Game over. Битва починається заново");
                    firstOrkHp = 25;
                    secondOrkHp = 25;
                    golemHp = 70;
                    hp = maxHp;
                    mana = 50;
                    continue;
                }
                else if (firstOrkHp === 0 && secondOrkHp === 0 && golemHp === 0) {
                    mana = 50;
                    maxHp += maxHp * ((Math.floor(Math.random() * (10 - 3 + 1)) + 3) / 10);
                    hp = maxHp;
                    money += 30;
                    console.log("Ви виграли в битві. Ви перемогли боса і вийшли з печери");
                    console.log("тепер ваше здоров'я дорівнює", maxHp);
                    console.log("тепер у вас", money, "грошей");
                    console.log("Також ви знайшли сильний меч і обладунок")
                    maxDefense += 5;
                    maxDamage += 4;
                    minDamage += 2;
                    break;
                }
                else {
                    console.log("у вас", hp, "здоров'я");
                    console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
                    let choose;
                    while (true) {
                        let chooseTwo = prompt("Виберіть")
                        chooseTwo = chooseTwo.toLowerCase()
                        if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                            choose = chooseTwo
                            break;
                        }
                    }
                    if (choose === "ударити") {
                        let chooseThree = parseInt(prompt("Виберіть кого атакувати 1, 2 чи 3?"));
                        if (chooseThree === 1) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                firstOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у першого орка", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                        else if (chooseThree === 2) {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                secondOrkHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у другого орка", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                        else {
                            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                                golemHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
                                console.log("тепер у голема", golemHp, "здоров'я")
                            }
                            else {
                                console.log("Ви промахнулися")
                            }
                        }
                    }
                    else if (choose === "магію") {
                        mana -= 15;
                        firstOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                        secondOrkHp -= Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                    }
                    else if (choose === "захищатися") {
                        defense += defense * 0.5;
                    }
                    else if (choose === "хіл") {
                        let heal = Math.round(maxHp * 0.2);
                        hp += heal;
                        console.log(`Ви отримали ${heal} здоров'я`)
                    }
                    if (firstOrkHp === 0) {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else if (secondOrkHp === 0) {

                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                    else {
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 3 + 1)) + 3
                        }
                        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 >= defense) {
                            hp -= Math.floor(Math.random() * (5 - 2 + 1)) + 2
                        }
                    }
                }
            }
        }
    }
}

console.log("Після цього ви вирішили піти на ринок і купити обладунки.");
while (true) {
    let choose = prompt("Виберіть що купити меч за 5 золота, щит за 6 золота чи вогняний меч за 20 золота");
    choose = choose.toLowerCase
    if (choose === "меч") {
        console.log("ви купили меч");
        money -= 5;
        maxDamage += 3;
        minDamage += 1;
        break;
    }
    else if (choose === "щит") {
        console.log("Ви купили щит");
        money -= 6;
        maxDefense += 4;
        defense = maxDefense;
        break;
    }
    else if (choose === "вогняний меч") {
        console.log("Ви купили вогняний меч");
        money -= 20;
        maxDamage += 10;
        minDamage += 4;
        break;
    }
    else {
        console.log("Такого не існує");
        break;
    }
}

console.log("Далі вам запропонували завдання на знищення дракона");
console.log("І ви вирушили до логова дракона");
console.log("Підходячи до лігва повітря стало жарким");

let dragonHp = 150;
let dragonAttack = 0;
while (true) {
    dragonAttack += Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (defense !== maxDefense) {
        defense = maxDefense;
    }
    if (hp === 0) {
        console.log("Game over. Битва починається заново");
        dragonHp = 150;
        hp = maxHp;
        mana = 50;
        continue;
    }
    else if (dragonHp === 0) {
        mana = 50;
        maxHp += maxHp * ((Math.floor(Math.random() * (10 - 2 + 1)) + 2) / 10);
        hp = maxHp;
        money += 25;
        console.log("Ви виграли в битві з фінальним босом. Мої вітання ви пройшли гру");
        break;
    }
    else {
        console.log("у вас", hp, "здоров'я");
        console.log("Виберіть що будете робити: ударити, використати магію, захищатися або використати хіл");
        let choose;
        while (true) {
            let chooseTwo = prompt("Виберіть")
            chooseTwo = chooseTwo.toLowerCase()
            if (chooseTwo === "ударити" || chooseTwo === "магію" || chooseTwo === "захищатися" || chooseTwo === "хіл") {
                choose = chooseTwo
                break;
            }
        }
        if (choose === "ударити") {
            if (Math.floor(Math.random() * (20 - 1 + 1)) + 1 >= 5) {
                dragonHp -= Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
            }
        }
        else if (choose === "магію") {
            mana -= 15;
            dragonHp -= Math.floor(Math.random() * (12 - 6 + 1)) + 6;
        }
        else if (choose === "захищатися") {
            defense += defense * 0.5;
        }
        else if (choose === "хіл") {
            let heal = Math.round(maxHp * 0.2);
            hp += heal;
            console.log(`Ви отримали ${heal} здоров'я`)
        }

        if (dragonAttack === 1) {
            if (Math.floor(Math.random() * (20 - 14 + 1)) + 10 >= defense) {
                console.log("Дракон вас вдарив")
                hp -= Math.floor(Math.random() * (10 - 7 + 1)) + 7;
            }
            else {
                console.log("Промах");
            }
        }

        else if (dragonAttack === 2) {
            console.log("Дракон випустив вогонь");
            hp -= Math.floor(Math.random() * (25 - 5 + 1)) + 5
        }
        else {
            console.log("Дракон використав хіл");
            dragonHp += Math.floor(Math.random() * (20 - 2 + 1)) + 2;
        }
    }
}
