'use strict';

export const Marvel = {
  render:() => {
      const url = "https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=5b0ec23e4b31d296a963da374013a05f&hash=5e0c47b24de6203f1251f8f96e30151e";
      const container = document.querySelector("#Marvel-row");
      let contentHTML = "";

      fetch(url)
        .then(res => res.json())
        .then((json) => {

          console.log(json, "RES.JSON");

          for(const hero of json.data.results){
            let urlhero = hero.urls[0].url;
            contentHTML += `            
              <div class="data" id="data">
                <a href="${urlhero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-hero" id="heroimg">
                </a>
                  <h3 id="tituloper" class="main__data_Marvel-title">${hero.name}</h3>
              </div> 
            `;
          }
            container.innerHTML = contentHTML;
        })
  }
};

export const Search = async (name)=>{
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=234be5a0cc5c241fd72cb998f7db3888&hash=54055a32bdddfb01be0a1e57ca64cdec`);
  const datos = await response.json();
  return datos;
};