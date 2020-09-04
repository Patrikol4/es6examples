// Arrays

const array = [1, 3, 5, 9, 12 ];

const newArray = array.map(function (item){
	return item * 2;
});

console.log(newArray);

// Outra forma de declaração
// Desta vez, utilizando o valor da index para ser multiplicado com o valor do item

const newArray = [1, 3, 5, 9, 12];

const anotherArray = array.map(function (item, index){
	return item + index;
});

console.log(anotherArray);

