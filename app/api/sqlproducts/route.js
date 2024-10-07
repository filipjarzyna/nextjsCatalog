import pool from "@utils/sqldb";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    try {
        //simple test query 
        const [q] = await pool.query('SELECT * FROM Products;')
        console.log(q)
        return NextResponse.json({data: q}, { status: 200 })
    }
    catch (error) {
        console.log("ERROR-------------------------------------\n",error)
        return NextResponse.json({error: "error fetching"}, {status: 500})
    }
}
