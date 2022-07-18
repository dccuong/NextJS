
import useSWR, { useSWRConfig } from 'swr'
import { add, getAll } from '../pages/api/product';



const useProduct = () => {
    const fetcher = async (url: string) => {
        const { data } = await getAll(url)
        return data
    }
    const { data, error, mutate } = useSWR("/products", fetcher, { dedupingInterval: 5000 })
    const create = async (product) => {
        const { data: item } = await add(product)
        return [...data, product];

    }
    return { data, error, create, mutate }
}

export default useProduct