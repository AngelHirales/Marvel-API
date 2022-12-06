'use strict';

const Marvel = {
    render:() => {
        const url = "https://gateway.marvel.com:443/v1/public/comics?&ts=1&apikey=234be5a0cc5c241fd72cb998f7db3888&hash=54055a32bdddfb01be0a1e57ca64cdec";
        const container = document.querySelector("#Marvel-row");
        let contentHTML = "";
  
        fetch(url)
          .then(res => res.json())
          .then((json) => {
  
            console.log(json, "RES.JSON");
  
            for(const comic of json.data.results){
              let urlcomic = comic.urls[0].url;
              contentHTML += `            
                <div class="data" id="data">
                  <a href="${urlcomic}" target="_blank">
                    <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="img-hero" id="comicimg">
                  </a>
                  <h3 id="titulocomic" class="main__data_Marvel-title">${comic.title}</h3>
                </div> 
              `;
            }
              container.innerHTML = contentHTML;
          })
    }
  };

  Marvel.render();