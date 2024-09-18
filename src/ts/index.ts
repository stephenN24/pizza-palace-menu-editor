import { Pizza } from "./models/Pizza";

document.addEventListener("DOMContentLoaded", async () => {
  //load pizza data
  const pizzas = await Pizza.loadAll();
  console.log(pizzas);
});
