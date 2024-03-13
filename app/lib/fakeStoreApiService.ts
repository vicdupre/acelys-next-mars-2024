import { Product } from "./types"

export const fetchFakeStore = 
    async <TResponse>(uri : string, init? : RequestInit ) : Promise<TResponse> => {
    const response = await fetch(`https://fakestoreapi.com/${uri}`, init)
    const data = await response.json()
    //await new Promise((resolve) => setTimeout(resolve, 5000))
    return data as TResponse
}

export const fetchRatingWithDelay = async (id : number | string) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const product = await fetchFakeStore<Product>(`products/${id}`)
    return product.rating
}