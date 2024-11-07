const requestURL = "https://dragonball-api.com/api/planets?limit=58"

async function fetchPlanetsJson() {
    try {
      const response = await fetch(requestURL);
      if (!response.ok) {
        throw new Error(`Error en la peticion ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error al obtener los planets de la API : `, error);
      return null;
    }
  }
  
  function createPlanetCard({ id, name, description, image }) {
    return `<div class="card allCards" style="background-color: #000;">
              <img class="card-img-top" src="${image}" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${race} - ${gender}</p>
              </div>
              <ul class="list-group list-group-flush" >
                  <li class="list-group-item"> ${description}</li>
                  <li class="list-group-item">Maximum Ki: ${maxKi}</li>
              </ul>
            </div>
    `;
  }
  
  async function displayplanets() {
    const planetSection = document.getElementById("planetsection");
    const planetData = await fetchPlanetsJson();
  
    if (planetData && planetData.items) {
      const planetCards = planetData.items
        .map(createPlanetCard)
        .join("");
      planetSection.innerHTML = planetCards;
    } else {
      planetSection.innerHTML = `<p>No se ha podido cargar el Json de los planets</p>`;
    }
  }
  displayplanets();