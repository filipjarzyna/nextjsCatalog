import pool from "@utils/sqldb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {

        const [q] = await pool.query("SELECT REPLACE(LOWER(name), ' ', '-') AS `name` FROM Products;")

        return NextResponse.json({ data: q }, { status: 200 })
    } catch (error) {
        console.log(error)

        return NextResponse.json({ error: "Error fetching data" }, { status: 500 })
    }
}