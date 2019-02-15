// -------------------------- Home work --------------------------
// -------------------------- Chernov Andrew --------------------------
/**
 * 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3),
 *    Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 * 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
 * 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
 *    getCodeStringFromText(‘hello’) // “104 101 108 108 111”
 *    подсказка: для получения кода используйте специальный метод
 * 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
 *    Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
 * 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
 * 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:doubleArray([1,2,3]) // [1,2,3,1,2,3]
 * 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
 * 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
 * 9. Создать две функции и дать им осмысленные названия:
 * - первая функция принимает массив и колбэк (одна для всех вызовов)
 * - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

 */

//1
/**
 * 'функцию multiply' возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
 *
 * @param {number}
 * @return {number} произведение чисел
 */

function multiply() {
    let result = 1;
    if (arguments.length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
          console.log("Error");
          return false;
        }
        result *= arguments[i];
      }
    } else {
      result = 0;
    }
    console.log(result);
    return result;
  }
  
  //2
  /**
   * Принимает строку и возвращает строку-перевертыш
   *
   * @param {String} string произвольная строка
   * @return {String} string в revers
   */
  function reverseStr(str) {
    let newStr = "",
      i;
    for (i = str.length - 1; i >= 0; i--) {
      newStr += str.charAt(i);
    }
    return newStr;
  }
  console.log(reverseStr("tset"));
  
  //3
  /**
   * юникод-значение символа
   *
   * @param {String} str произвольная строка.
   * @return {String} юникод символов строки с пробелами между ними.
   */
  let str = "hello";
  
  function unicode(str) {
    let newStr = "";
    if (!isNaN(parseInt(str))) {
      let arr = str.split(" ");
      for (let j = 0; j < arr.length; j++) {
        let arr2 = parseInt(arr[j]);
        newStr += String.fromCharCode(arr2);
      }
    } else {
      for (let i = 0; i < str.length; i++) {
        newStr += str.charCodeAt(i) + " ";
      }
    }
    return newStr;
  }
  console.log(unicode(str));
  
  //4
  /**
   * Функция "Угадай число"
   *
   * @param {number} userGuess Число, введенное пользователем.
   * @return {String} Результат проверки совпадения.
   */
  function checkGuess(userGuess) {
    if (userGuess < 0) {
      return "Ошибка - введите число от 0 до 10";
    } else if (userGuess > 10) {
      return "Ошибка - введите число от 0 до 10";
    }
  
    let randomNumber = Math.ceil(Math.random() * 10);
    if (userGuess !== randomNumber) {
      console.log(
        `Вы не угадали ваше число ${userGuess} а выпало число ${randomNumber}`
      );
    } else {
      console.log("Вы выиграли");
    }
  }
  
  //5
  /**
   * Принимает число n и возвращает массив, заполненный числами от 1 до n
   *
   * @param {number} n Конечное число массива.
   * @return {Arr} Массив от 1 до n.
   */
  function getArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  //6
  /**
   * Возвращает новый массив с дублированными элементами входного массива
   *
   * @param {Arr} аrr Входной массив с набором чисел.
   * @return {Arr} Массив с дублированными элементами входного массива.
   */
  function doubleArray(arr) {
    arr = arr.concat(arr);
    return console.log(arr);
  }
  doubleArray([1, 2, 3]);
  
  //7
  /**
   * Удаляет из каждого массива первый элемент
   *
   * @param {arr} arr Входной массив.
   * @return {arr} newArr Массив из оставшихся значений.
   */
  function changeCollection() {
    let newArr = [];
  
    for (let i = 0; i < arguments.length; i++) {
      newArr.push(arguments[i].slice(1));
    }
    return newArr;
  }
  //8
  /**
   * Принимает массив пользователей и выводит искомый массив
   *
   * @param {users} users Массив пользователей.
   * @param {String} key Параметры массива.
   * @param {String} value Значения параметров массива.
   * @return {Users} Искомый массив.
   */
  let users = [{
      name: 'Denis',
      age: 29,
      gender: 'male'
    },
    {
      name: 'Ivan',
      age: 20,
      gender: 'male'
    }
  ];
  
  function getUsers(users, key, value) {
    if (!key || !value) {
      return 'Ошибка - введите все параметры';
    }
  
    let newUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i][key] == value) {
        newUsers.push(users[i]);
      }
    }
    return newUsers;
  }
  
  //9
  /**
   * Создает строки с результатами обработки данных коллбеком
   *
   * @param {Аrr} arr Массив.
   * @param {callback} Коллбек для обработки массива.
   * @returns {String} Сообщение с результатами обработки.
   */
  function newValue(arr, callback) {
    if (!Array.isArray(arr)) return console.log('error');
  
    let res = "New value: ";
  
    for (let i = 0; i < arr.length; i++) {
      res += callback(arr[i]);
    }
    return res;
  
  }
  
  let newRes1 = newValue(['my', 'name', 'is', 'Trinity'], function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  
  let newRes2 = newValue([10, 20, 30], function (item) {
    return item * 10 + ', ';
  
  });
  
  let newRes3 = newValue([{
    age: 45,
    name: 'Jhon'
  }, {
    age: 20,
    name: 'Aaron'
  }], function (item) {
    return (`${item.name} is ${item.age}, `);
  });
  
  let newRes4 = newValue(['abc', '123'], function (item) {
    return item.split('').reverse().join('') + ', ';
  });
  console.log(newRes1);
  console.log(newRes2);
  console.log(newRes3);