const button = document.querySelector('#btn_input');
const ol = document.querySelector('#tasks');

const tasks = [
  {
    id: 1,
    name: 'Доделать задачу',
    compleated: false,
  },
];

button.onclick = function () {
  const tempObj = {
    id: 1,
    name: '',
    compleated: true,
  };

  tasks.push(tempObj);

  console.log('Мы нажали на кнопку');
  // ЧТо то написать, что бы в массив tasks добавлялся объект с полями(id,name,compleated)
  // методы массивы
  console.log(tasks);

  // верстать дизайн
};
