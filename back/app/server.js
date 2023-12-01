import express from "express";
import ProductoRoute from "../routes/productos.routes.js";
import ApiProductoRoute from "../api/routes/route.api.productos.js";
import ApiAuth from "../api/routes/route.api.auth.js";
import cors from "cors";
import multer from "multer";
import sharp from "sharp";
import { Server as SocketIO } from "socket.io";
import http from "http";

const app = express(); //el servidor
const server = http.createServer(app);
const io = new SocketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const usuarios = {}   
io.on("connection", (socket) => {
  console.log("NUEVO CLIENTE CONECTADO", socket.id);

  socket.on("nuevo-usuario", (nombre) => {
    console.log("nuevo-usuario", nombre)
    usuarios[nombre] = socket.id;
    socket.broadcast.emit("nuevo-usuario", nombre);
    socket.username = nombre;
  });

  socket.on("mensaje", ({ msg, username }) => {
    if( usuarios[username] ){
      socket.to(usuarios[username]).emit("mensaje", { msg, username: socket.username })
    }else{
      socket.emit("mensaje", { msg: "El usuario no existe", username: "" });
    }
  })

  socket.on("disconnect", (username) => {
    console.log("El cliente se ha desconectado");
    delete usuarios[username];
  });

});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.trim().replace(/\s/g, "_"));
  },
});

async function resizeImage(req, res, next) {
  console.log("resizeImage: Redimensionando imagen", req.file.path);
  return sharp(req.file.path)
    .resize(150)
    .webp()
    .rotate(90)
    .tint({ r: 255, g: 240, b: 16 })
    .toFile("uploads/" + new Date().getMilliseconds() + ".webp")
    .then(() => {
      console.log("resizeImage: Imagen redimensionada");
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

const upload = multer({ storage });
app.post(
  "/uploads",
  [upload.single("uploaded_file"), resizeImage],
  function (req, res) {
    console.log(req.file, req.body);
    res.send("ok");
  }
);

app.use(express.urlencoded({ extended: true })); 
app.use("/", express.static("public"));
app.use("/uploads", [], express.static("uploads"));
app.use(express.json()); 
app.use(cors());

app.use(ProductoRoute);
app.use("/api", ApiProductoRoute);
app.use("/api", ApiAuth);

server.listen(2023, () => {
  console.log("Servidor iniciado en el puerto 2023");
});
