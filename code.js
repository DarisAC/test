
const url ="https://fakestoreapi.com/products";

async function fetchURL(){
   
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(function (elem, index, data){
        console.log(elem);
        function renderElement(type) {
            if (elem[type] != undefined) {
                let div = document.createElement('div');
                div.className = type;
                div.innerHTML = elem[type];
                document.body.append(div);
            }
        }
        renderElement('category');
        renderElement('title');
        if (elem.image != undefined) {
            let div = document.createElement('div');
            div.className = "image";
            const divURL = elem.image;
            div.innerHTML =`"<img src=${divURL}>"`;
            document.body.append(div);
        }
        renderElement('description');
        if (elem.rating != undefined) {
            let div = document.createElement('div');
            div.className = "rating";
             let Ratingstr =JSON.stringify(elem.rating)
             var x = '{';
             var y = '}';
            var rExp = new RegExp(x, "g");
            var rExpy = new RegExp(y, "g");
            Ratingstr = Ratingstr.replace(rExp, '');
            div.innerHTML= Ratingstr.replace(rExpy, '');
            document.body.append(div);
        }
        })
    }
    catch(error) {
        console.error(error)
    }
}

fetchURL()
