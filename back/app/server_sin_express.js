import http from "node:http";
import { createPage, createProductList } from "../pages/utils.js";
import { productos } from "../data/productos.js";
import { readFile } from "node:fs";

const server = http.createServer((require, response) => {
  console.log("INICIO", require.url);

  switch (require.url) {
    case "/":
      response.write(
        createPage("Sebastián Loria", "<h1>Mi espectacular pagina web</h1>")
      );
      response.end();
      break;

    case "/materia":
      console.log("Aplicaciones Hibridas");
      response.write("<h1>Mi espectacular pagina web</h1>");
      response.end();

      break;

    case "/profesor":
      console.log("Victor Villafañe");
      response.write("<h1>Mi espectacular pagina web</h1>");
      response.end();

      break;

    case "/productos":
      // response.write("<table> <tr> <th>ID</th> <th>Nombre</th> <th>precio</th> </tr>")
      // for (const producto of productos) {
      //     response.write( `<tr> <td>${producto.id}</td> <td>${producto.name}</td> <td>${producto.price}</td> </tr>`)
      // }
      // response.write( "</table>")
      response.write(createPage("productos", createProductList(productos)));
      response.end();
      break;
    case "/pagina_completa":
      readFile("./test.html", (err, data) => {
        if (err) throw err;
        response.write(data);
        console.log("TERMINE DE LEER");
      });
      readFile("./data/poductos.json", (err, data) => {
        if (err) throw err;
        response.write(data);
        console.log("TERMINE DE LEER");
        response.end();
      });
      break;
    case "/index.html":
      readFile("./public/index.html", (err, data) => {
        if (err) throw err;
        response.write(data);
        console.log("TERMINE DE LEER");
        response.end();
      });
      break;
    case "/contact.html":
      readFile("./public/contact.html", (err, data) => {
        if (err) throw err;
        response.write(data);
        console.log("TERMINE DE LEER");
        response.end();
      });
      break;
    case "/css/style.css":
      readFile("./public/css/style.css", (err, data) => {
        if (err) throw err;
        response.write(data);
        console.log("TERMINE DE LEER");
        response.end();
      });
      break;
    case "/algo.jpg":
      break;
  }
  console.log("FINALIZACION DE MI BACKEND");
});

server.listen(2023);
