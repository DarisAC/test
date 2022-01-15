
const url ="https://fakestoreapi.com/products";
function createDivAndClass(type) {
    let div = document.createElement('div');
    div.className = type;
    return div
}

function addDiv(newDiv) {
    document.body.append(newDiv); 
}

function createDiv(elem, type) {
    const newDiv = createDivAndClass(type)
    newDiv.innerHTML = elem[type];
    addDiv(newDiv)
}

function renderElement(elem, type) {
    if (elem[type] != undefined) {
        createDiv(elem, type)
    }
}

async function fetchURL(){
   
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(function (elem, index, data){
        console.log(elem);
        
        renderElement(elem,'category');
        renderElement(elem,'title');

        if (elem.image != undefined) {
            const newDiv = createDivAndClass('image')
            const divURL = elem.image;
            newDiv.innerHTML =`"<img src=${divURL}>"`;
            addDiv(newDiv)
        }

        renderElement(elem,'description');

        if (elem.rating != undefined) {
            const newDiv = createDivAndClass('rating')
             let Ratingstr =JSON.stringify(elem.rating)
             let x = '{';
             let y = '}';
             let rExp = new RegExp(x, "g");
             let rExpy = new RegExp(y, "g");
            Ratingstr = Ratingstr.replace(rExp, '');
            newDiv.innerHTML= Ratingstr.replace(rExpy, '');
            addDiv(newDiv)
        }
        })
    }
    catch(error) {
        console.error(error)
    }
}

fetchURL()
