let users = [
  {
    index: 0,
    isActive: true,
    balance: 2226.6,
    name: "Eugenia Sawyer",
    gender: "female",
    phone: "+1 (840) 583-3207",
    address: "949 John Street, Rose, Puerto Rico, 1857",
  },
  {
    index: 1,
    isActive: true,
    balance: 2613.77,
    name: "Pauline Gallegos",
    gender: "female",
    phone: "+1 (985) 593-3328",
    address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
  },
  {
    index: 2,
    isActive: false,
    balance: 3976.41,
    name: "Middleton Chaney",
    gender: "male",
    phone: "+1 (995) 591-2478",
    address: "807 Fleet Walk, Brutus, Arkansas, 9783",
  },
  {
    index: 3,
    isActive: true,
    balance: 1934.58,
    name: "Burns Poole",
    gender: "male",
    phone: "+1 (885) 559-3422",
    address: "730 Seba Avenue, Osage, Alabama, 6290",
  },
  {
    index: 4,
    isActive: true,
    balance: 3261.65,
    name: "Mcfadden Horne",
    gender: "male",
    phone: "+1 (942) 565-3988",
    address: "120 Scholes Street, Kirk, Michigan, 1018",
  },
  {
    index: 5,
    isActive: false,
    balance: 1790.56,
    name: "Suzette Lewis",
    gender: "female",
    phone: "+1 (837) 586-3283",
    address: "314 Dunne Place, Bawcomville, Guam, 9053",
  },
];

let phones = users
  .filter((user) => user.balance > 2000)
  .map((user) => user.phone);

console.log(
  "Phones of users that have on balance more than 2000 dollars",
  phones
);

let totalBalance = users.reduce((sum, user) => sum + user.balance, 0);

console.log("Sum of all users balances:", totalBalance);

/*Пояснения для себя :

Метод .map() используется в том случае, если нужно сделать следующее:

1.Надо выполнить над каждым элементом итерируемого объекта некую последовательность действий.
2.Надо вернуть значение, которое, предположительно, было изменено.

Метод .filter() применяется в тех случаях, когда из итерируемого объекта нужно выбрать некие элементы. 
При использовании этого метода нужно помнить о том, что значения, соответствующие фильтру, включаются в итоговый результат, а не 
исключаются из него. То есть — всё, для чего функция, переданная .filter(), возвратит true, будет оставлено.

.reduce() Имя этого метода намекает на то, что он используется для сведения нескольких значений к одному. 
Однако мне кажется, что легче размышлять о нём как о методе, который позволяет собирать некие значения из частей.
В отличие от методов .map() и .filter(), метод .reduce() нуждается в коллбэке, принимающем два параметра.
 Это — аккумулятор и текущее значение.
  Аккумулятор — это первый параметр. Именно он модифицируется на каждой итерации и передаётся в следующую*/
