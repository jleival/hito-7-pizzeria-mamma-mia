export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión clásica de la cocina napolitana. Se elabora tradicionalmente con una base de mozzarella fresca, tomates, jamón y un toque de orégano.",
    id: "P001",
    img: "https://cdn.shopify.com/s/files/1/0669/8503/3862/files/20260810214040-pizza-napolitana.jpg?v=1786398042&width00",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza española destaca por su sabor intenso y rústico, combinando una base de mozzarella y salsa de tomate con rodajas de jamón y el toque característico del choricillo.",
    id: "P002",
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/3DasfyR7d55vx4YWH-300-x.webp",
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "Una opción directa y llena de sabor. La pizza de salame combina la tradicional salsa de tomate y queso mozzarella con finas rodajas de salame y un toque aromático de orégano.",
    id: "P003",
    img: "https://www.lafabbrica.cl/cdn/shop/files/Pizza_Salame_a154d2bc-37bd-4476-bd7f-ecdc6bf26485.jpg?v=1721873069",
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "La clásica pizza Cuatro Estaciones representa la variedad en una sola preparación, equilibrando magistralmente la mozzarella, el salame, aceitunas seleccionadas y champiñones frescos.",
    id: "P004",
    img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/5D256C95-CEB8-4BAC-A299-59992B158F22/Derivates/ff1b9a83e0c28319aabaabac6c6f32906837d6fb.jpg",
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "Una alternativa irresistible y ahumada. La pizza de bacon incorpora trozos crujientes de tocino combinados con tomates cherry frescos sobre una capa de queso mozzarella.",
    id: "P005",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5a3b3cRUIdQ1NRQ1kZjqTS7VAMFbK1cLDIr5lmMP40RVdk9rH5wCyMcPg&s=10",
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "Ideal para los amantes de los sabores intensos y con carácter. La pizza de pollo picante mezcla jugoso pollo grillé con pimientos frescos y un toque de picor estimulante.",
    id: "P006",
    img: "https://www.comemelapizza.com/wp-content/uploads/2014/03/pizza-de-pollo-al-infierno_main_mini.jpg",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://cdn.shopify.com/s/files/1/0669/8503/3862/files/20260810214040-pizza-napolitana.jpg?v=1786398042&width00",
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/3DasfyR7d55vx4YWH-300-x.webp",
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: "https://www.lafabbrica.cl/cdn/shop/files/Pizza_Salame_a154d2bc-37bd-4476-bd7f-ecdc6bf26485.jpg?v=1721873069",
  },
];
