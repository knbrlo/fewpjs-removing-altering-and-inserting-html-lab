// 1 - Remove the main item
let mainElement = document.getElementById('main');
mainElement.remove();

// 2 - Add the newHeader
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Ken is the champion!';