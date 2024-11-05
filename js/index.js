const requestURL = 'https://dragonball-api.com/api/characters?';
async function fetchItemJson(){
    try{
        const response = await fetch("https://dragonball-api.com/api/characters?page=1");
        if (!response.ok) {
            throw new Error(`Error en la peticion ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error(`Error al obtener las burgers de la API : `,error);
        return null;
    }
}
function createItemsCard ({id, name, ki, maxKi, description}){
    return `<div class="card-group">
                <div class="card" id='allCards'>
                    <img src="${image}" class="card-img-top" alt="" id='allCards'>
                    <div class="card-body" id='allCards'>
                        <h5 class="card-title" id='allCards'>${id} - ${name}</h5>
                        <h6 class="card-text" id='allCards'>€ ${price}</h6>
                        <p class="card-text"><small class="text-muted" id='descriptionCards'>${description}</small></p>
                    </div>
                </div>
            </div>
    `;
}
async function displayItems() {
    const itemSection = document.getElementById('itemSection');
    const itemsData = await fetchItemJson();

    if (itemsData && itemsData.items){
        const itemCards = itemsData.items.map(createitemCard).join('');
        itemSection.innerHTML = itemCards;
    }
    else{
        itemSection.innerHTML = `<p>No se ha podido cargar el Json de las burgers</p>`
    }
}
displayItems();