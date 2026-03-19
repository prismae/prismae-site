const pizzas = [
  {
    nome: "Margherita",
    descricao: "Molho de tomate italiano, mozzarella fior di latte e manjericão fresco",
    preco: 42.9,
    imagem: "img/margherita.jpg",
    categoria: "tradicionais"
  },
  {
    nome: "Pepperoni",
    descricao: "Pepperoni artesanal, mozzarella derretida e molho especial da casa",
    preco: 48.9,
    imagem: "img/pepperoni.jpg",
    categoria: "tradicionais"
  },
  {
    nome: "Quattro Formaggi",
    descricao: "Mozzarella, gorgonzola, parmesão e catupiry",
    preco: 52.9,
    imagem: "img/quattro-formaggi.jpg",
    categoria: "especiais"
  },
  {
    nome: "Calabresa",
    descricao: "Calabresa fatiada, cebola roxa, mozzarella e orégano",
    preco: 46.9,
    imagem: "img/calabresa.jpg",
    categoria: "tradicionais"
  },
  {
    nome: "Portuguesa",
    descricao: "Presunto, ovos, cebola, azeitonas, mozzarella e ervilhas",
    preco: 49.9,
    imagem: "img/portuguesa.jpg",
    categoria: "tradicionais"
  },
  {
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado temperado, catupiry cremoso e mozzarella",
    preco: 50.9,
    imagem: "img/frango-catupiry.jpg",
    categoria: "especiais"
  },
  {
    nome: "Napolitana",
    descricao: "Molho de tomate, mozzarella, tomate fresco e parmesão",
    preco: 44.9,
    imagem: "img/napolitana.jpg",
    categoria: "tradicionais"
  },
  {
    nome: "Vegetariana",
    descricao: "Abobrinha, berinjela, pimentão, cebola, azeitonas e mozzarella",
    preco: 47.9,
    imagem: "img/vegetariana.jpg",
    categoria: "especiais"
  },
  {
    nome: "Mussarela",
    descricao: "Mozzarella especial, molho de tomate e orégano",
    preco: 41.9,
    imagem: "img/mussarela.jpg",
    categoria: "tradicionais"
  },
  {
    nome: "Bacon & Cheddar",
    descricao: "Bacon crocante, cheddar cremoso e mozzarella",
    preco: 53.9,
    imagem: "img/bacon-cheddar.jpg",
    categoria: "especiais"
  },
  {
    nome: "Lombinho Canadense",
    descricao: "Lombo canadense, catupiry e mozzarella",
    preco: 54.9,
    imagem: "img/lombo-canadense.jpg",
    categoria: "especiais"
  },
  {
    nome: "Chocolate",
    descricao: "Chocolate ao leite derretido com granulado",
    preco: 36.9,
    imagem: "img/chocolate.jpg",
    categoria: "doces"
  },
  {
    nome: "Nutella & Morango",
    descricao: "Nutella cremosa com morangos frescos",
    preco: 38.9,
    imagem: "img/nutella.jpg",
    categoria: "doces"
  },
  {
    nome: "Banana com Canela",
    descricao: "Banana caramelizada, açúcar e canela",
    preco: 35.9,
    imagem: "img/banana-canela.jpg",
    categoria: "doces"
  }
];

const pizzaList = document.getElementById("pizza-list");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

/* ================= MODAL PIZZA ================= */
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const addToCartBtn = document.getElementById("add-to-cart");

let selectedPizza = null;

/* ================= CARRINHO COM LOCALSTORAGE ================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ---------- RENDERIZA PIZZAS ---------- */
function renderPizzas(lista) {
  pizzaList.innerHTML = "";

  lista.forEach((pizza) => {
    const card = document.createElement("div");
    card.className = "pizza-card";

    card.innerHTML = `
      <img src="${pizza.imagem}" alt="${pizza.nome}">
      <h3>${pizza.nome}</h3>
      <p>${pizza.descricao}</p>
      <strong>R$ ${pizza.preco.toFixed(2)}</strong>
    `;

    card.addEventListener("click", () => openModal(pizza));
    pizzaList.appendChild(card);
  });
}

/* ---------- FILTRO POR CATEGORIA ---------- */
function filtrarPizzas(categoria) {
  const filtradas = pizzas.filter(p => p.categoria === categoria);
  renderPizzas(filtradas);
}

/* ---------- MODAL ---------- */
function openModal(pizza) {
  selectedPizza = pizza;
  modalImg.src = pizza.imagem;
  modalTitle.textContent = pizza.nome;
  modalDescription.textContent = pizza.descricao;
  modalPrice.textContent = `R$ ${pizza.preco.toFixed(2)}`;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

/* ================= CARRINHO ================= */

/* ADICIONAR AO CARRINHO */
addToCartBtn.addEventListener("click", () => {
  const itemExistente = cart.find(item => item.nome === selectedPizza.nome);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    cart.push({
      ...selectedPizza,
      quantidade: 1
    });
  }

  salvarCarrinho();
  renderCart();
  modal.classList.add("hidden");
});


/* ================= MODAL DO CARRINHO ================= */

const openCart = document.getElementById("open-cart");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

if (openCart && cartModal && closeCart) {
  openCart.addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.classList.remove("hidden");
  });

  closeCart.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });

  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.classList.add("hidden");
    }
  });
}

/* RENDERIZA CARRINHO */
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((pizza, index) => {
    const subtotal = pizza.preco * pizza.quantidade;
    total += subtotal;

    const li = document.createElement("li");
    li.innerHTML = `
      <span class="cart-item-text">
        ${pizza.nome} <br>
        <small>Qtd: ${pizza.quantidade} × R$ ${pizza.preco.toFixed(2)}</small>
      </span>

      <button class="remove-item" onclick="removeFromCart(${index})">×</button>
    `;

    cartList.appendChild(li);
  });

  cartTotal.textContent = `R$ ${total.toFixed(2)}`;

  const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);
  document.getElementById("cart-count").textContent = totalItens;
}


/* REMOVER ITEM */
function removeFromCart(index) {
  if (cart[index].quantidade > 1) {
    cart[index].quantidade -= 1;
  } else {
    cart.splice(index, 1);
  }

  salvarCarrinho();
  renderCart();
}



/* SALVAR NO LOCALSTORAGE */
function salvarCarrinho() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


/* ================= INIT ================= */
renderPizzas(pizzas);
renderCart();

const pagamentoSelect = document.getElementById("pagamento");
const dadosCartao = document.getElementById("dados-cartao");
const dadosPix = document.getElementById("dados-pix");
const finalizarBtn = document.getElementById("finalizar-pedido");

if (pagamentoSelect) {
  pagamentoSelect.addEventListener("change", () => {
    dadosCartao?.classList.add("hidden");
    dadosPix?.classList.add("hidden");

    if (pagamentoSelect.value === "credito" || pagamentoSelect.value === "debito") {
      dadosCartao?.classList.remove("hidden");
    }

    if (pagamentoSelect.value === "pix") {
      dadosPix?.classList.remove("hidden");
    }
  });
}

if (finalizarBtn) {
  finalizarBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    if (!pagamentoSelect.value) {
      alert("Selecione uma forma de pagamento.");
      return;
    }

    if (pagamentoSelect.value === "credito" || pagamentoSelect.value === "debito") {
      const nome = document.getElementById("nome-cartao");
      const numero = document.getElementById("numero-cartao");
      const validade = document.getElementById("validade-cartao");
      const cvv = document.getElementById("cvv-cartao");

      if (!nome || !numero || !validade || !cvv ||
          !nome.value || !numero.value || !validade.value || !cvv.value) {
        alert("Preencha todos os dados do cartão.");
        return;
      }
    }

    if (pagamentoSelect.value === "pix") {
      const nomePix = document.getElementById("nome-pix");
      const cpfPix = document.getElementById("cpf-pix");

      if (!nomePix || !cpfPix || !nomePix.value || !cpfPix.value) {
        alert("Preencha os dados do PIX.");
        return;
      }
    }

    alert("✅ Pedido Finalizado!");

    cart = [];
    salvarCarrinho();
    renderCart();
    cartModal.classList.add("hidden");
  });
}
