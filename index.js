const element = document.getElementById('main');
element.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.id = 'victory'
newHeader.innerHTML = "Edwin is the champion";
