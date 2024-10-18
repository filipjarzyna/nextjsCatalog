import { brandsList, categoriesList } from "@components/reusable/Variables";
import pool from "@utils/sqldb";
import { NextResponse } from "next/server";

//return single product info by name
export const GET = async (req) => {

    try {

        const url = new URL(req.url)
        const name = url.searchParams.get('name')


        if (!name || name.length == 0) {
            throw new Error("No parameters passed")
        }

        // create a search query for individual product
        const query = `SELECT name, price, image, category, brand FROM Products WHERE name=?;`
        const [q] = await pool.query(query, name) //preventing injection  

        return NextResponse.json({ data: q }, { status: 200 })
    } catch (error) {
        console.log(error)

        return NextResponse.json({ error: "Error fetching data" }, { status: 500 })
    }
}