const Menu = require('./models/Menu');
(async () => {
  await Menu.bulkCreate([
    { name:'Fried Chicken', price:10, category:'Main', imageUrl:'/img/fc.jpg' },
    { name:'Grilled Chicken',price:20, category:'Special', label:'SPECIAL',imageUrl:'/img/gc.jpg' }
  ]);
})();
