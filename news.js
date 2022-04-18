console.log('This is News Application')
   let apiKey = '943e9e521a8940b186f1f8f7854211bf';
const xhr = new XMLHttpRequest()
xhr.open('GET' , `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}` , true)
xhr.onload = function () {
    if (this.status===200) {
        let Json  = JSON.parse(this.responseText)
        // console.log(Json)
        let articles = Json.articles;
        console.log(articles);
        let newsHtml = "";
          articles.forEach(function (element , index) {

     
            let news = ` <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>Breaking News :  ${index+1 } </b>      ${element.title}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>${element.description}</strong>${element.content} <a href="${element.url}" target="_blank">Read About More....</a>
        </div>
      </div>
      </div>`
      newsHtml += news;
      newsAccordian.innerHTML=newsHtml;
          });
    }else{
        console.log('Error occured')
    }
   

 

}
xhr.send();

let newsAccordian = document.getElementById('newsAccordian')
