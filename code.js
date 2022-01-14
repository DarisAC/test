
const url ="https://fakestoreapi.com/products";
async function fetchURL(){
   
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        const type =typeof(data)
        console.log(type);
        data.forEach(function (elem, index, data){
           
        if (elem.category!=undefined) {
            let div = document.createElement('div');
            div.className = "category";
            div.innerHTML =elem.category
            document.body.append(div);

        }
        if (elem.title!=undefined) {
            let div = document.createElement('div');
            div.className = "title";
            div.innerHTML =elem.title
            document.body.append(div);

        }
        if (elem.image!=undefined) {
            let div = document.createElement('div');
            div.className = "image";
            const divURL = elem.image;
            div.innerHTML =`"<img src=${divURL}>"`;
        
            document.body.append(div);

        }
        if (elem.description!=undefined) {
            let div = document.createElement('div');
            div.className = "description";
            div.innerHTML =elem.description
            document.body.append(div);

        }
        if (elem.rating!=undefined) {
            let div = document.createElement('div');
            div.className = "rating";
             let Ratingstr =JSON.stringify(elem.rating)
             var x = '{';
             var y = '}';
            var rExp = new RegExp(x, "g");
            var rExpy = new RegExp(y, "g");
            Ratingstr =Ratingstr.replace(rExp, '');
            div.innerHTML=Ratingstr.replace(rExpy, '');
            document.body.append(div);

        }
        })
    }
    catch(error){
        console.error(error)
    }
}

fetchURL()
