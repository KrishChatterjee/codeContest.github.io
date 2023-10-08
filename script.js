const getData = async () => {
  let url = "https://kontests.net/api/v1/all"
  let response = await fetch(url)
  let data = await response.json();
  let imageUrl = "https://api.unsplash.com/search/photos?&query=coding&client_id=z2mtmWQ1qsLbHWjFu3moFelifzjVcWzvzmkmUoEJXDU"
  let imageResponse = await fetch(imageUrl)
  let imageData = await imageResponse.json();
  ihtml = ""
  i=0
  l=imageData.results.length
  l=l-1
  for (item in data) {
    if(i>l){
      i=0
    }
    ihtml += `<div class="card mx-2 my-2" style="width: 18rem;">
        <img class="card-img-top" src=${imageData.results[i].urls.small} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data[item].name}</h5>
          <p class="card-text">Site: ${data[item].site}</p>
          <p class="card-text">Start At: ${data[item].start_time}</p>
          <p class="card-text">Ends At: ${data[item].end_time}</p>
          <p class="card-text">In 24 hr: ${data[item].in_24_hours}</p>
          <p class="card-text">Status: ${data[item].status}</p>
          <a href="${data[item].url}" target="_blank" class="btn btn-primary btn-sm">Visit Website</a>
        </div>
      </div>`
    i+=1;
  }

  let e = document.getElementById("cardContainer");
  e.innerHTML = ihtml
  console.log(e)

}
const getImage = async () => {



}
getData()
// getImage()
