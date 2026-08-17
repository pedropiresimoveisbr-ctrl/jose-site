(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5522999973444"; // +55 22 99997-3444

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = !menu.hasAttribute("hidden");
      if (isOpen) {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        menu.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Máscara de telefone ---------- */
  var phoneInput = document.querySelector('input[name="whatsapp"]');
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      var digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
      var formatted = digits;

      if (digits.length > 10) {
        formatted = digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      } else if (digits.length > 6) {
        formatted = digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else if (digits.length > 2) {
        formatted = digits.replace(/(\d{2})(\d{0,5})/, "($1) $2");
      } else if (digits.length > 0) {
        formatted = digits.replace(/(\d{0,2})/, "($1");
      }

      phoneInput.value = formatted.trim();
    });
  }

  /* ---------- Formulário de lead ---------- */
  var form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var nome = form.nome.value.trim();
      var whatsapp = form.whatsapp.value.trim();
      var cidade = form.cidade.value.trim();
      var consentimento = form.consentimento ? form.consentimento.checked : true;

      var status = form.querySelector(".form-status");
      if (!status) {
        status = document.createElement("p");
        status.className = "form-status";
        form.appendChild(status);
      }

      if (!nome || !whatsapp || !cidade || !consentimento) {
        status.textContent = "Preencha nome, WhatsApp, cidade e aceite a política de privacidade.";
        status.className = "form-status error";
        return;
      }

      var digits = whatsapp.replace(/\D/g, "");
      if (digits.length < 10) {
        status.textContent = "Informe um WhatsApp válido com DDD.";
        status.className = "form-status error";
        return;
      }

      var mensagem =
        "Olá! Meu nome é " + nome +
        ". Tenho interesse no Parque Ilhabela e moro/quero morar em " + cidade +
        ". Meu WhatsApp: " + whatsapp;

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(mensagem);

      status.textContent = "Perfeito! Abrindo o WhatsApp para finalizar seu atendimento…";
      status.className = "form-status success";

      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }
})();
