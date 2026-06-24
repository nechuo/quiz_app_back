import "dotenv/config";
import app from "./src/routes";
import "./src/config/db";

app.listen(3001, () => {
  console.log("Serveur démarré sur le port 3001");
});
