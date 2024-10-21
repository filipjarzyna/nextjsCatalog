import { brandsList, categoriesList } from "@components/reusable/Variables";
import pool from "@utils/sqldb";
import { NextResponse } from "next/server";

//return table using search and filters
export const POST = async (req) => {
    //function to convert filters from indexes form to string elements
    const indexesToArray = (indexes, arr) => {
        if (!indexes || indexes.length == 0) {
            return ""
        }
        const elements = indexes.map(index => `'${arr[index]}'`);
        return `${elements.join(', ')}`;
    }

    try {
        const result = await req.json()

        const brands = indexesToArray(result.brands, brandsList)
        const categories = indexesToArray(result.categories, categoriesList)
        const search = result.search

        if (!search && !categories && !brands) {
            throw new Error("No parameters passed")
        }

        //create a search query
        const filters = []
        const queryParams = [];

        let query = `SELECT name, price, image, category, brand FROM Products WHERE`

        if (brands && brands.length != 0) {
            filters.push(`brand IN (${brands})`)
        }

        if (categories && categories.length != 0) {
            filters.push(`category IN (${categories})`)
        }

        if (search && search.length != 0) {
            filters.push(`name LIKE ?`) //basic protection from sql injection
            queryParams.push(`%${search}%`)
        }

        //create query string from provided filters
        if (filters.length > 0) {
            query += ` ${filters.join(" AND ")};`
        } else {
            //normally on the client side it will fetch from /api/products/all
            throw new Error("No parameters passed to filters") 
        }

        const [q] = await pool.query(query, queryParams)  
        return NextResponse.json({ data: q }, { status: 200 })
    } catch (error) {
        console.log(error)

        return NextResponse.json({ error: "Error fetching data" }, { status: 500 })
    }
}