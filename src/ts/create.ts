import { Pizza, PizzaProp } from "./models/Pizza";

const titleInput = document.querySelector(
  'input[name="title"]'
) as HTMLInputElement;
const descriptionInput = document.querySelector(
  "textarea"
) as HTMLTextAreaElement;

const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProp = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    toppings: data.getAll("toppings") as string[],
    price: parseInt(data.get("price") as string) || 10,
  };

  const res = await Pizza.save(newPizza);

  if (res.ok) {
    window.location.href = "/";
  } else {
    console.log("Fail to create new pizza");
  }
});
