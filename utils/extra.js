import { unstable_cache } from "next/cache"

export const getAllProducts = unstable_cache(async () => {
    console.log("------------------------------")
    const res = await fetch("http://localhost:3000/api/products", { method: "GET" })
    console.log(res)
    const result = await res.json()

    return result.data;
})