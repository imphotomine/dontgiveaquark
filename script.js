const INSTAGRAM_URL = "https://www.instagram.com/dont.give.a.quark?igsh=ZGxsbTh3OTdxcmJq";

const vocabulary = {
  product: {
    vacuum: "vacuum",
    obscura: "obscura",
    synthesis: "synthesis",
    exoticMatter: "exotic matter",
    hawkingRadiation: "hawking radiation",
    learnedHelplessness: "learned helplessness",
    hadronField: "hadron field",
    colorGlassCondensate: "color glass condensate",
  },
  productAlt: {
    vacuum: "fruit and glowing jellies",
    obscura: "glowing jellies",
    synthesis: "sour fruit jellies",
    exoticMatter: "ethnobotanical jellies with \"dream herbs\"",
    hawkingRadiation: "fruit jellies in dark chocolate with glowing flower ones",
    learnedHelplessness: "glowing jellies in dark chocolate",
    hadronField: "fruit jellies with plant seeds",
    colorGlassCondensate: "glowing flower syrup",
  },
  group: {
    one: "flavour of space",
    two: "flavour of photons",
    three: "photon spectrum",
    four: "quark flavour",
    five: "exotic flavour",
  },
  groupAlt: {
    one: "fruit jellies flavour",
    two: "glowing jellies flavour",
    three: "colour of the glow of flower jellies",
    four: "type of seeds",
    five: "type of plant",
  },
  item: {
    lorenz: "lorenz contraction",
    eventHorizon: "event horizon",
    superluminal: "superluminal motion",
    indistinguishability: "indistinguishability",
    ultraviolet: "ultraviolet catastrophe",
    divinorum: "divinorum",
    mindBlowing: "mind-blowing",
    breathtaking: "breathtaking",
    magic: "magic",
    revitalizing: "revitalizing",
    yellowGreen: "yellow-green",
    blue: "blue",
    up: "up",
    down: "down",
    strange: "strange",
    charm: "charm",
    beauty: "beauty",
    truth: "truth",
    caleaZacatechichi: "calea zacatechichi",
    entadaRheedii: "entada rheedii",
  },
  itemAlt: {
    lorenz: "banana",
    eventHorizon: "apple",
    superluminal: "pineapple",
    indistinguishability: "peach",
    ultraviolet: "black currant",
    divinorum: "sage",
    mindBlowing: "dandelion",
    breathtaking: "thyme",
    magic: "elderflower",
    revitalizing: "mint",
    yellowGreen: "yellow-green",
    blue: "blue",
    up: "hemp seeds",
    down: "sesame seeds",
    strange: "chia seeds",
    charm: "poppy seeds",
    beauty: "flax seeds",
    truth: "amaranth seeds",
    caleaZacatechichi: "calea zacatechichi",
    entadaRheedii: "entada rheedii",
  },
};

const optionDefinitions = {
  one: ["lorenz", "eventHorizon", "superluminal", "indistinguishability", "ultraviolet"],
  two: ["divinorum", "mindBlowing", "breathtaking", "magic", "revitalizing"],
  three: ["yellowGreen", "blue"],
  four: ["up", "down", "strange", "charm", "beauty", "truth"],
  five: ["caleaZacatechichi", "entadaRheedii"],
};

const products = [
  {
    id: "vacuum",
    groups: [
      { id: "one", type: "checkbox", min: 1, max: 4 },
      { id: "two", type: "radio", min: 1, max: 1 },
      { id: "three", type: "checkbox", min: 1, max: 2 },
    ],
  },
  {
    id: "obscura",
    groups: [
      { id: "two", type: "checkbox", min: 1, max: 4 },
      { id: "three", type: "checkbox", min: 1, max: 2 },
    ],
  },
  {
    id: "synthesis",
    groups: [{ id: "one", type: "checkbox", min: 1, max: 4 }],
  },
  {
    id: "exoticMatter",
    groups: [
      { id: "five", type: "radio", min: 1, max: 1 },
      { id: "two", type: "checkbox", min: 1, max: 2 },
    ],
  },
  {
    id: "hawkingRadiation",
    groups: [
      { id: "one", type: "checkbox", min: 1, max: 4 },
      { id: "two", type: "radio", min: 1, max: 1 },
      { id: "three", type: "checkbox", min: 1, max: 2 },
    ],
  },
  {
    id: "learnedHelplessness",
    groups: [
      { id: "two", type: "checkbox", min: 1, max: 4 },
      { id: "three", type: "checkbox", min: 1, max: 2 },
    ],
  },
  {
    id: "hadronField",
    groups: [
      { id: "one", type: "checkbox", min: 1, max: 4 },
      { id: "four", type: "checkbox", min: 2, max: 3 },
    ],
  },
  {
    id: "colorGlassCondensate",
    groups: [
      { id: "two", type: "radio", min: 1, max: 1 },
      { id: "three", type: "radio", min: 1, max: 1 },
    ],
  },
];

const productSpecs = {
  vacuum: { price: "7,40 €", baseWeight: "1,01·10^35 ev", openWeight: "180 g" },
  obscura: { price: "7,20 €", baseWeight: "1,01·10^35 ev", openWeight: "180 g" },
  synthesis: { price: "7,50 €", baseWeight: "1,01·10^35 ev", openWeight: "180 g" },
  exoticMatter: { price: "10,25 €", baseWeight: "1,01·10^35 ev", openWeight: "180 g" },
  hawkingRadiation: { price: "8,90 €", baseWeight: "1,57·10^35 ev", openWeight: "280 g" },
  learnedHelplessness: { price: "9,30 €", baseWeight: "1,86·10^35 ev", openWeight: "330 g" },
  hadronField: { price: "7,80 €", baseWeight: "1,01·10^35 ev", openWeight: "180 g" },
  colorGlassCondensate: { price: "7,90 €", baseWeight: "1,8·10^35 ev", openWeight: "250 ml" },
};

const productGroupLabelOverrides = {
  exoticMatter: {
    two: {
      base: "flavour of space",
      alt: "jellies flavour",
    },
  },
};

const state = {
  globalOpen: false,
  albedoOpen: false,
  setOpen: false,
  sectionOpen: {
    main: false,
    catalog: false,
    about: false,
  },
  productOpen: Object.fromEntries(products.map((p) => [p.id, false])),
  expandedProducts: Object.fromEntries(products.map((p) => [p.id, false])),
  cart: [],
  sliderIndex: 0,
  sliderTimer: null,
};

function resolveText(key, isOpen, mapName) {
  const baseMap = vocabulary[mapName];
  const altMap = vocabulary[`${mapName}Alt`];
  return isOpen ? altMap[key] : baseMap[key];
}

function getSetWord() {
  return state.globalOpen ? "bag" : "set";
}

function getEmptySetWord() {
  return isCartNamesOpen() ? "empty bag" : "empty set";
}

function getCartWord() {
  return state.setOpen || state.globalOpen ? "bag" : "set";
}

function isCartNamesOpen() {
  return state.setOpen || state.globalOpen;
}

function parsePrice(priceText) {
  const normalized = priceText.replace("€", "").replace(/\s/g, "").replace(",", ".");
  const value = Number(normalized);
  return Number.isFinite(value) ? value : 0;
}

function formatEuro(value) {
  return `${value.toFixed(2).replace(".", ",")} €`;
}

function getProductWeight(productId, isOpen) {
  const spec = productSpecs[productId];
  return isOpen ? spec.openWeight : spec.baseWeight;
}

function getGroupLabel(productId, groupId, isOpen) {
  const override = productGroupLabelOverrides[productId]?.[groupId];
  if (override) {
    return isOpen ? override.alt : override.base;
  }
  return resolveText(groupId, isOpen, "group");
}

function getSectionLabel(sectionId, isOpen) {
  if (sectionId === "main") {
    return isOpen ? "photos" : "wave functions";
  }
  if (sectionId === "catalog") {
    return isOpen ? "catalog" : "detectors";
  }
  return isOpen ? "faq" : "quark you";
}

function buildProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;

  card.innerHTML = `
    <div class="product-head">
      <h3 class="product-name"></h3>
      <button class="eye-btn closed product-eye" aria-label="toggle ${product.id} names" title="toggle names">
        <span class="eye-mark"></span>
      </button>
    </div>
    <div class="product-body" hidden>
      <div class="meta">
        <span class="badge price-label"></span>
        <span class="badge weight-label"></span>
      </div>
      <form class="options"></form>
      <button class="add-btn" type="button">add to set</button>
    </div>
  `;

  const form = card.querySelector(".options");
  product.groups.forEach((groupConfig) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "option-group";
    fieldset.dataset.groupId = groupConfig.id;
    fieldset.dataset.max = groupConfig.max;
    fieldset.dataset.min = groupConfig.min;
    fieldset.dataset.type = groupConfig.type;

    const legend = document.createElement("legend");
    legend.className = "group-label";
    fieldset.appendChild(legend);

    const list = document.createElement("div");
    list.className = "option-list";

    optionDefinitions[groupConfig.id].forEach((itemKey) => {
      const item = document.createElement("label");
      item.className = "option-item";
      item.dataset.itemKey = itemKey;

      const input = document.createElement("input");
      input.type = groupConfig.type;
      input.name = `${product.id}-${groupConfig.id}`;
      input.value = itemKey;

      const text = document.createElement("span");
      text.className = "item-label";

      item.appendChild(input);
      item.appendChild(text);
      list.appendChild(item);
    });

    const error = document.createElement("p");
    error.className = "error";

    fieldset.appendChild(list);
    fieldset.appendChild(error);
    form.appendChild(fieldset);
  });

  return card;
}

function applyEyeState() {
  document.getElementById("global-eye").classList.toggle("closed", !state.globalOpen);
  document.getElementById("albedo-eye").classList.toggle("closed", !state.albedoOpen);
  document.getElementById("main-eye").classList.toggle("closed", !state.sectionOpen.main);
  document.getElementById("catalog-eye").classList.toggle("closed", !state.sectionOpen.catalog);
  document.getElementById("about-eye").classList.toggle("closed", !state.sectionOpen.about);
  document.getElementById("set-eye").classList.toggle("closed", !state.setOpen);

  document.getElementById("main-title").textContent = getSectionLabel("main", state.sectionOpen.main);
  document.getElementById("catalog-title").textContent = getSectionLabel("catalog", state.sectionOpen.catalog);
  document.getElementById("about-title").textContent = getSectionLabel("about", state.sectionOpen.about);

  document.getElementById("main-nav-label").textContent = getSectionLabel("main", state.sectionOpen.main);
  document.getElementById("catalog-nav-label").textContent = getSectionLabel("catalog", state.sectionOpen.catalog);
  document.getElementById("about-nav-label").textContent = getSectionLabel("about", state.sectionOpen.about);

  document.getElementById("set-nav-label").textContent = getSetWord();

  const albedoOn = state.albedoOpen;
  document.getElementById("albedo-title").textContent = albedoOn ? "discount" : "albedo";
  document.getElementById("albedo-nav-label").textContent = albedoOn ? "discount" : "albedo";

  document.querySelectorAll(".product-card").forEach((card) => {
    const productId = card.dataset.productId;
    const localOpen = state.productOpen[productId];
    const isExpanded = state.expandedProducts[productId];
    const spec = productSpecs[productId];

    const eye = card.querySelector(".product-eye");
    eye.classList.toggle("closed", !localOpen);
    card.querySelector(".product-body").hidden = !isExpanded;
    card.classList.toggle("expanded", isExpanded);
    card.querySelector(".add-btn").textContent = state.globalOpen ? "add to bag" : "add to set";
    card.querySelector(".price-label").textContent = spec.price;

    card.querySelector(".product-name").textContent = resolveText(productId, localOpen, "product");
    card.querySelector(".weight-label").textContent = getProductWeight(productId, localOpen);

    card.querySelectorAll(".option-group").forEach((group) => {
      const groupId = group.dataset.groupId;
      group.querySelector(".group-label").textContent = getGroupLabel(productId, groupId, localOpen);
      group.querySelectorAll(".option-item").forEach((item) => {
        const key = item.dataset.itemKey;
        item.querySelector(".item-label").textContent = resolveText(key, localOpen, "item");
      });
    });
  });

  renderCart();
}

function validateGroup(fieldset) {
  const inputs = Array.from(fieldset.querySelectorAll("input"));
  const checked = inputs.filter((i) => i.checked);
  const type = fieldset.dataset.type;
  const max = Number(fieldset.dataset.max);
  const min = Number(fieldset.dataset.min);
  const errorNode = fieldset.querySelector(".error");

  if (type === "checkbox") {
    if (checked.length > max) {
      checked[checked.length - 1].checked = false;
      errorNode.textContent = `max ${max} options`;
      return false;
    }
  }

  if (checked.length < min) {
    errorNode.textContent = min === 1 ? "select at least 1 option" : `select at least ${min} options`;
    return false;
  }

  errorNode.textContent = "";
  return true;
}

function validateProduct(card, showErrors = true) {
  const groups = Array.from(card.querySelectorAll(".option-group"));
  let valid = true;

  groups.forEach((group) => {
    const inputs = Array.from(group.querySelectorAll("input"));
    const checked = inputs.filter((i) => i.checked);
    const min = Number(group.dataset.min);
    const max = Number(group.dataset.max);
    const type = group.dataset.type;
    const errorNode = group.querySelector(".error");

    if (checked.length < min) {
      valid = false;
      if (showErrors) {
        errorNode.textContent = min === 1 ? "select at least 1 option" : `select at least ${min} options`;
      }
      return;
    }

    if (type === "checkbox" && checked.length > max) {
      valid = false;
      if (showErrors) {
        errorNode.textContent = `max ${max} options`;
      }
      return;
    }

    if (showErrors) {
      errorNode.textContent = "";
    }
  });

  return valid;
}

function collectProductSelection(card) {
  const productId = card.dataset.productId;
  const spec = productSpecs[productId];

  const selected = Array.from(card.querySelectorAll(".option-group")).map((group) => {
    const selectedValues = Array.from(group.querySelectorAll("input:checked")).map((input) => input.value);

    return {
      groupId: group.dataset.groupId,
      values: selectedValues,
    };
  });

  return {
    id: productId,
    price: spec.price,
    selected,
  };
}

function renderCart() {
  const title = document.getElementById("set-title");
  const cartNode = document.getElementById("cart-items");
  const checkout = document.getElementById("checkout-btn");
  const totalNode = document.getElementById("cart-total");
  const total = state.cart.reduce((sum, item) => sum + parsePrice(item.price), 0);

  if (state.cart.length === 0) {
    title.textContent = getEmptySetWord();
    cartNode.innerHTML = "";
    totalNode.textContent = `total: ${formatEuro(0)}`;
    checkout.classList.add("disabled");
    checkout.setAttribute("aria-disabled", "true");
    return;
  }

  title.textContent = getCartWord();
  totalNode.textContent = `total: ${formatEuro(total)}`;
  checkout.classList.remove("disabled");
  checkout.setAttribute("aria-disabled", "false");

  cartNode.innerHTML = "";

  state.cart.forEach((item, index) => {
    const node = document.createElement("div");
    node.className = "cart-item";

    const optionsText = item.selected
      .map((group) => {
        if (group.groupId) {
          const groupLabel = getGroupLabel(item.id, group.groupId, isCartNamesOpen());
          const valueLabels = group.values
            .map((valueKey) => resolveText(valueKey, isCartNamesOpen(), "item"))
            .join(", ");
          return `${groupLabel}: ${valueLabels}`;
        }

        return `${group.label}: ${group.values.join(", ")}`;
      })
      .join(" | ");

    node.innerHTML = `
      <strong>${index + 1}. ${resolveText(item.id, isCartNamesOpen(), "product")}</strong><br />
      ${item.price} | ${getProductWeight(item.id, isCartNamesOpen())}<br />
      ${optionsText}<br />
      <button type="button" class="cart-remove" data-index="${index}">remove</button>
    `;

    cartNode.appendChild(node);
  });

  cartNode.querySelectorAll(".cart-remove").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      if (!Number.isInteger(index)) {
        return;
      }
      state.cart.splice(index, 1);
      renderCart();
    });
  });
}

function setupProducts() {
  const container = document.getElementById("products");

  products.forEach((product) => {
    const card = buildProductCard(product);
    container.appendChild(card);

    const eye = card.querySelector(".product-eye");
    eye.addEventListener("click", () => {
      state.productOpen[product.id] = !state.productOpen[product.id];
      applyEyeState();
    });

    card.querySelector(".product-head").addEventListener("click", (event) => {
      if (event.target.closest(".product-eye")) {
        return;
      }
      state.expandedProducts[product.id] = !state.expandedProducts[product.id];
      applyEyeState();
    });

    card.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => {
        validateGroup(input.closest(".option-group"));
      });
    });

    card.querySelector(".add-btn").addEventListener("click", () => {
      const valid = validateProduct(card, true);
      if (!valid) {
        return;
      }

      state.cart.push(collectProductSelection(card));
      renderCart();
      card.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
      validateProduct(card, false);
    });
  });

  applyEyeState();
}

function setupGlobalEyes() {
  const globalEye = document.getElementById("global-eye");
  const albedoEye = document.getElementById("albedo-eye");
  const mainEye = document.getElementById("main-eye");
  const catalogEye = document.getElementById("catalog-eye");
  const aboutEye = document.getElementById("about-eye");
  const setEye = document.getElementById("set-eye");

  globalEye.classList.add("closed");
  albedoEye.classList.add("closed");
  mainEye.classList.add("closed");
  catalogEye.classList.add("closed");
  aboutEye.classList.add("closed");
  setEye.classList.add("closed");

  globalEye.addEventListener("click", () => {
    state.globalOpen = !state.globalOpen;
    state.albedoOpen = state.globalOpen;
    state.sectionOpen.main = state.globalOpen;
    state.sectionOpen.catalog = state.globalOpen;
    state.sectionOpen.about = state.globalOpen;
    products.forEach((product) => {
      state.productOpen[product.id] = state.globalOpen;
    });
    applyEyeState();
  });

  albedoEye.addEventListener("click", () => {
    state.albedoOpen = !state.albedoOpen;
    applyEyeState();
  });

  mainEye.addEventListener("click", () => {
    state.sectionOpen.main = !state.sectionOpen.main;
    applyEyeState();
  });

  catalogEye.addEventListener("click", () => {
    state.sectionOpen.catalog = !state.sectionOpen.catalog;
    applyEyeState();
  });

  aboutEye.addEventListener("click", () => {
    state.sectionOpen.about = !state.sectionOpen.about;
    applyEyeState();
  });

  setEye.addEventListener("click", () => {
    state.setOpen = !state.setOpen;
    applyEyeState();
  });
}

function renderSlider(index) {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".slider-dot"));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function moveSlider(step) {
  const slides = document.querySelectorAll(".slide");
  state.sliderIndex = (state.sliderIndex + step + slides.length) % slides.length;
  renderSlider(state.sliderIndex);
}

function restartSliderTimer() {
  if (state.sliderTimer) {
    clearInterval(state.sliderTimer);
  }
  state.sliderTimer = setInterval(() => {
    moveSlider(1);
  }, 4800);
}

function setupSlider() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dotsContainer = document.getElementById("slider-dots");

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `show photo ${index + 1}`);
    dot.addEventListener("click", () => {
      state.sliderIndex = index;
      renderSlider(state.sliderIndex);
      restartSliderTimer();
    });
    dotsContainer.appendChild(dot);
  });

  document.getElementById("slider-prev").addEventListener("click", () => {
    moveSlider(-1);
    restartSliderTimer();
  });

  document.getElementById("slider-next").addEventListener("click", () => {
    moveSlider(1);
    restartSliderTimer();
  });

  renderSlider(state.sliderIndex);
  restartSliderTimer();
}

function seedParticles() {
  const root = document.getElementById("particles");
  const count = 40;
  const colors = ["#85b9ff", "#7ecfc0", "#9ec4f5", "#b4e0b0"];

  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("span");
    dot.className = "particle";
    const size = Math.random() * 2.6 + 1;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 120 + 10}%`;
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.animationDuration = `${Math.random() * 22 + 16}s`;
    dot.style.animationDelay = `${Math.random() * -24}s`;
    root.appendChild(dot);
  }
}

function setupPressFeedback() {
  const pressableNodes = Array.from(document.querySelectorAll(".add-btn, #checkout-btn"));

  pressableNodes.forEach((node) => {
    const addPressed = () => node.classList.add("is-pressed");
    const removePressed = () => node.classList.remove("is-pressed");

    node.addEventListener("pointerdown", addPressed);
    node.addEventListener("pointerup", removePressed);
    node.addEventListener("pointerleave", removePressed);
    node.addEventListener("pointercancel", removePressed);
    node.addEventListener("blur", removePressed);
  });
}

function boot() {
  setupProducts();
  setupGlobalEyes();
  setupSlider();
  setupPressFeedback();
  renderCart();
  seedParticles();

  // Маппинг товаров на Stripe Price ID (ОБЯЗАТЕЛЬНО ЗАПОЛНИТЕ РЕАЛЬНЫМИ ID)
  const STRIPE_PRICES = {
    vacuum: "price_1TErkMDwaKl3xBLLgeszrTGQ", // Замените на реальные ID из Stripe
    obscura: "price_1TEqO8DwaKl3xBLLvDmgidZy",
    synthesis: "price_1TEqPFDwaKl3xBLLsiNiLtsN",
    exoticMatter: "price_1TJEwzDwaKl3xBLLbOddmXCB",
    hawkingRadiation: "price_1TEqQ4DwaKl3xBLLpcV8g4EW",
    learnedHelplessness: "price_1TEqR2DwaKl3xBLL1ETcIp2p",
    hadronField: "price_1TErRHDwaKl3xBLLWKaVaZX0",
    colorGlassCondensate: "price_1TErSDDwaKl3xBLLYoief6ia"
  };

  document.getElementById("checkout-btn").addEventListener("click", async (event) => {
    event.preventDefault(); // Отменяем стандартный переход по ссылке

    if (state.cart.length === 0) {
      return;
    }

    // Подготовка списка товаров для Stripe
    const stripeGroups = {};
    
    state.cart.forEach((item) => {
      const priceId = STRIPE_PRICES[item.id];
      if (!priceId) {
        console.warn(`Price ID не найден для товара: ${item.id}`);
        return;
      }
      
      if (stripeGroups[priceId]) {
        stripeGroups[priceId].quantity += 1;
      } else {
        stripeGroups[priceId] = { price: priceId, quantity: 1 };
      }
    });

    const cartForStripe = Object.values(stripeGroups);

    try {
      // Отправляем запрос к нашему API
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartForStripe)
      });

      const data = await response.json();
      
      // Перенаправляем на Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Ошибка: Stripe не вернул URL", data);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  });
}

boot();
