let searchBtn= document.getElementById(".seach")


async function getAPIData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
        
    } catch(error) {
        return error;
    }
}

let tab=getAPIData("../books-1.json")
console.log(tab)
let i=1;
$(document).ready(function(){
    tab.then(book=>
        book.books.forEach(element => { 
            let div=$(`<div class="card">
            <div class="img-box" id=${i}>
              <img
                src=${element.image}
                alt="image"
              />
            </div>
            <div class="card-info">
              <h2>${element.name}</h2>
              <h3>${element.author}</h3>
              <h3>Category : ${element.category}</h3>
    
              <h3>description :</h3>
              <p>
              ${element.discription.split(" ").splice(0,40).join(" ")}...
              </p>
            </div>
            <div class="des">
              <h3 class="position">${element.rating} <i class="fa-solid fa-star"></i></h3>
              <h3 class="position">${element.price}$</h3>
            </div>
          </div>`);
        //   console.log(element.discription.split(" ").splice(0,40).join(" "))
        $(".card-box").append(div)
        $(`#${i}`).css("background",`linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),no-repeat center url(${element.image})`)
        $(`#${i}`).css("background-size","cover")
        // console.log(div.children(0))
            ++i
            
        })
        )
    tab.then(book=>{
        let tab2=[]
        $("#search").on("click",function(){
            tab2=book.books
            console.log(tab2)
            i=1
           $(".card-box").html("")
            if($("#name").val()!=""){
                tab2=tab2.filter(e=>e.name.toUpperCase()==$("#name").val().toUpperCase())
            }
            if($("#author").val()!=""){
                tab2=tab2.filter(e=>e.author.toUpperCase()==$("#author").val().toUpperCase())
            }
            if($("#category").val()!=""){
                tab2=tab2.filter(e=>e.category.toUpperCase()==$("#category").val().toUpperCase())
            }
            console.log(tab2);
            tab2.forEach(element => { 
                let div=$(`<div class="card">
                <div class="img-box" id=${i}>
                  <img
                    src=${element.image}
                    alt="image"
                  />
                </div>
                <div class="card-info">
                  <h2>${element.name}</h2>
                  <h3>${element.author}</h3>
                  <h3>Category : ${element.category}</h3>
                  <h3>description :</h3>
                  <p>
                  ${element.discription.split(" ").splice(0,40).join(" ")}...
                  </p>
                </div>
                <div class="des">
                  <h3 class="position">${element.rating} <i class="fa-solid fa-star"></i></h3>
                  <h3 class="position">${element.price}$</h3>
                </div>
              </div>`);
            //   console.log(element.discription.split(" ").splice(0,40).join(" "))
            $(".card-box").append(div)
            $(`#${i}`).css("background",`linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),no-repeat center url(${element.image})`)
            $(`#${i}`).css("background-size","cover")
                ++i
                
            })
        })
    }
    )
}); 
