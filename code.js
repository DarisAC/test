
const url ="https://fakestoreapi.com/products";
async function fetchURL(){
   
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        const type =typeof(data)
        console.log(type);
        data.forEach(elem,index,data =>{
           
        if (data[0].category!=undefined) {
            let div = document.createElement('div');
            div.className = "category";
            div.innerHTML =data[0].category
            document.body.append(div);

        }
        if (data[0].title!=undefined) {
            let div = document.createElement('div');
            div.className = "title";
            div.innerHTML =data[0].title
            document.body.append(div);

        }
        if (data[0].image!=undefined) {
            let div = document.createElement('div');
            div.className = "image";
            const divURL = data[0].image;
            div.innerHTML =`"<img src=${divURL}>"`;
        
            document.body.append(div);

        }
        if (data[0].description!=undefined) {
            let div = document.createElement('div');
            div.className = "description";
            div.innerHTML =data[0].description
            document.body.append(div);

        }
        if (data[0].rating!=undefined) {
            let div = document.createElement('div');
            div.className = "rating";
             let Ratingstr =JSON.stringify(data[0].rating)
             var x = '{';
             var y = '}';
            var rExp = new RegExp(x, "g");
            var rExpy = new RegExp(y, "g");
            Ratingstr =Ratingstr.replace(rExp, '');
            div.innerHTML=Ratingstr.replace(rExpy, '');
            document.body.append(div);

        }
        }
    } catch(error){
        console.error(error)
    }
}

fetchURL()
