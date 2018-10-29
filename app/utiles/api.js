import AppConst from './appConst';

function handleError(error){
    console.warn(error);
    return null;
}

export async function getBooks (username) {
    const response = await fetch(`${AppConst.apiUrl}`)
        .catch(handleError);
    
    return response.json();
  }