import { findAllByPlaceholderText } from '@testing-library/react'
import { API_BASE_URL } from '../Utils/Constants'

export const getPokemonApi = async (value, endPoint) => {
    const url = `${API_BASE_URL}${endPoint}${value}`
    const response = await fetch(url)
    const json = await response.json()
    return json
}
