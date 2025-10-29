/* =================
   ACORDEON
   ================= */
const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");

acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const acordeon = trigger.parentElement;
    const isOpen = acordeon.classList.contains("open");

    if (isOpen) {
      acordeon.classList.remove("open");
    } else {
      acordeon.classList.add("open");
    }
  });
});

/* =================
   THEME TOGGLE
   ================= */
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Verifica o tema preferido do OS.
// Se for escuro, mantém o padrão (Cyber).
// Se for claro, ativa o tema invertido (Invert).
if (prefersDarkScheme.matches) {
  document.body.classList.remove("inverted-theme"); // <-- CLASSE ALTERADA
} else {
  document.body.classList.add("inverted-theme"); // <-- CLASSE ALTERADA
}

themeToggleBtn.addEventListener("click", () => {
  // Alterna a classe 'inverted-theme'
  document.body.classList.toggle("inverted-theme"); // <-- CLASSE ALTERADA
});

/* =================
   LANGUAGE TOGGLE
   ================= */

// 1. Define as traduções para o <title> da página
const translations = {
  pt: {
    title: "Luccas Souza | Developer web",
  },
  en: {
    title: "Luccas Souza | Web Developer",
  },
};

// 2. Seleciona os elementos
const langToggleCheckbox = document.getElementById("lang-toggle-checkbox");
const translatableElements = document.querySelectorAll("[data-lang-pt]");
const htmlTag = document.documentElement;

// 3. Função para mudar o idioma
function setLanguage(lang) {
  htmlTag.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = translations[lang].title;

  translatableElements.forEach((element) => {
    const text =
      lang === "pt" ? element.dataset.langPt : element.dataset.langEn;
    if (text) {
      element.innerHTML = text;
    }
  });
}

// 4. Adiciona o evento de 'change'
langToggleCheckbox.addEventListener("change", () => {
  if (langToggleCheckbox.checked) {
    setLanguage("en");
  } else {
    setLanguage("pt");
  }
});

// 5. Garante que o site carregue em Português (padrão 'off')
setLanguage("pt");