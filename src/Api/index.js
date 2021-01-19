import { API_BASE_URL } from '../Utils/Constants'

export const getPokemonApi = async (value) => {
    const url = `${API_BASE_URL}${value}`
    const response = await fetch(url)
    const json = await response.json()
    return json
}
