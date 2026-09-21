const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const path = require("node:path");

const app = express();
const PORT = 3000;

// Datos iniciales en memoria
const salasPermitidas = ["Sala Norte", "Sala Sur", "Sala Multimedia"];
const turnosPermitidos = ["Mañana", "Tarde", "Noche"];

let reservas = [
    { id: 1, estudiante: "Ana López", email: "ana@ejemplo.com", sala: "Sala Norte", fecha: "2026-10-01", turno: "Mañana", personas: 2 },
    { id: 2, estudiante: "Carlos Ruiz", email: "carlos@ejemplo.com", sala: "Sala Multimedia", fecha: "2026-10-02", turno: "Tarde", personas: 5 },
    { id: 3, estudiante: "María Soler", email: "maria@ejemplo.com", sala: "Sala Sur", fecha: "2026-10-03", turno: "Noche", personas: 3 },
    { id: 4, estudiante: "Juan Pérez", email: "juan@ejemplo.com", sala: "Sala Norte", fecha: "2026-10-04", turno: "Mañana", personas: 1 }
];


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(expressLayouts);
app.set("layout", "layouts/main");


app.get("/", (req, res) => {
    res.render("inicio", { titulo: "Reserva de Salas" });
});


app.listen(PORT, () => {
    console.log(`Aplicación disponible en http://localhost:${PORT}`);
});