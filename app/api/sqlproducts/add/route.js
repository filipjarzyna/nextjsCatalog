import { NextResponse } from 'next/server';
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import pool from '@utils/sqldb';

// export const config = {
//   api: {
//     bodyParser: false, // Disable default body parsing
//   },
// };

export const POST = async (req) => {

  try {
    //get form data from client 
    const formData = await req.formData()
    const file = formData.get('file')
    console.log("files:", file)
    console.log('formData:', formData)

    //values prep for sql db
    const values = {
      name: formData.get("name"),
      price: formData.get("price"),
      category: formData.get("category"),
      brand: formData.get("brand"),
      location: formData.get("location"),
    }

    let fileName;
    //if file was sent
    if (file != null) {


      //file name and extension
      fileName = file.name.toString()
      const fileType = fileName.slice(fileName.lastIndexOf('.'), fileName.length)
      console.log("NAME: ", fileName)
      console.log("TYPE: ", fileType)

      //create a unique file name with ext
      fileName = formData.get("name").toString() + "_" + Date.now() + fileType
      fileName = fileName.replaceAll(" ", "_")
      console.log("NAME AFTER: ", fileName)
      

      //add item to a sql db, if name is already added increment quantity, before saving file 
      const q = await pool.query(
        `INSERT INTO Products (name, price, image, category, location, brand)
          VALUES ('${values.name}', ${values.price}, '${fileName}', '${values.category}', ${values.location}, '${values.brand}')
          ON DUPLICATE KEY UPDATE quantity = quantity + 1;
          `
      )

      //read the file buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer)


      //upload file to the uploads dir
      await fs.writeFile(`./public/uploads/${fileName}`, buffer)



      //update cache
      revalidatePath("/")
    } else {
      console.log("file not uploaded")
      //add item to a sql db, if name is already added increment quantity, no file
      const q = await pool.query(
        `INSERT INTO Products (name, price, category, location, brand)
          VALUES ('${values.name}', ${values.price}, '${values.category}', ${values.location}, '${values.brand}')
          ON DUPLICATE KEY UPDATE quantity = quantity + 1;`
      )
    }


    return NextResponse.json({ message: "Data handled correctly" }, {
      status: 200,
    });

  } catch (err) {

    console.error(err);
    return NextResponse.json({ error: "Error parsing form data" }, {
      status: 400,
    });
  }
};