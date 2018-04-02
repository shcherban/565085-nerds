      var link = document.querySelector(".contacts-card-write-us");
      var popup = document.querySelector(".modal-contact");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector("form");
      var name1 = popup.querySelector("[name=contact-form-name]");
      var email = form.querySelector("[name=contact-form-email]");
      var message = form.querySelector("[name=contact-form-message]");
      var isStorageSupport = true;
      var storage = "";
      var slide1 = document.querySelector(".slide-1");
      var slide2 = document.querySelector(".slide-2");
      var slide3 = document.querySelector(".slide-3");
      var button1 = document.querySelector(".slider-button-1");
      var button2 = document.querySelector(".slider-button-2");
      var button3 = document.querySelector(".slider-button-3");

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

      button1.addEventListener("click", function (evt) {
          clearSliderState();
          slide1.classList.add("slide-current");
          button1.classList.add("active");
      });

      button2.addEventListener("click", function (evt) {
          clearSliderState();
          slide2.classList.add("slide-current");
          button2.classList.add("active");
      });

      button3.addEventListener("click", function (evt) {
          clearSliderState();
          slide3.classList.add("slide-current");
          button3.classList.add("active");
      });

      function clearSliderState() {
          slide1.classList.remove("slide-current");
          slide2.classList.remove("slide-current");
          slide3.classList.remove("slide-current");
          button1.classList.remove("active");
          button2.classList.remove("active");
          button3.classList.remove("active");
      }