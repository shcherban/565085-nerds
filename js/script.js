      var link = document.querySelector(".contacts-card-write-us");
      var popup = document.querySelector(".modal-contact");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector("form");
      var name1 = popup.querySelector("[name=contact-form-name]");
      var email = form.querySelector("[name=contact-form-email]");
      var message = form.querySelector("[name=contact-form-message]");
      var isStorageSupport = true;
      var storage = "";
      try {
        storageName = localStorage.getItem("name1");
        storageEmail = localStorage.getItem("email");
      } catch (err) {
        isStorageSupport = false;
      }
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        name1.focus();
        if (storageName) {
          name1.value = storageName;
          email.focus();
        }
        if (storageEmail) {
          email.value = storageEmail;
          message.focus();
        }
      })
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        name1.classList.remove("invalid");
        email.classList.remove("invalid");
        message.classList.remove("invalid");
      })
      form.addEventListener("submit", function (evt) {
        if (!name1.value || !email.value || !message.value || message.value) {
          evt.preventDefault();
          if (!name1.value) {
            name1.classList.add("invalid");
          }
          if (!email.value) {
            email.classList.add("invalid");
          }
          if (!message.value) {
            message.classList.add("invalid");
          }
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
            localStorage.setItem("name1", name1.value);
            localStorage.setItem("email", email.value);
          }
        }
      })
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            name1.classList.remove("invalid");
            email.classList.remove("invalid");
            message.classList.remove("invalid");
          }
        }
      })
      name1.addEventListener("focus", function (evt) {
        name1.classList.remove("invalid");
      })
      email.addEventListener("focus", function (evt) {
        email.classList.remove("invalid");
      })
      message.addEventListener("focus", function (evt) {
        message.classList.remove("invalid");
      })