
async function search (id){
    const resp  = await  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon =  await resp.json();
    
    return pokemon;
}


export default search;