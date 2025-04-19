document.addEventListener("DOMContentLoaded", () => {
  const emailField = document.querySelector("#Email");

  if (emailField) {
    emailField.addEventListener("blur", async () => {
      const email = emailField.value.trim();
      if (!email) {
        alert("Введите email");
        return;
      }

      try {
        const user = await getUserData(email);
        alert(`Пользователь найден: ${user.name}`);
      } catch (error) {
        alert("Пользователь не найден. Регистрируем нового.");

        const userName =
          document.querySelector("#First Name")?.value || "Имя не указано";
        const newUser = { name: userName, email: email };

        await saveUserData(newUser);
      }
    });
  } else {
    console.log("Поле email не найдено");
  }
});

// Получени данных пользователя
async function getUserData(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("User not found");
  }
  return await response.json();
}

// Сохраанение данных пользователя
async function saveUserData(user) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Не удалось сохранить пользователя");
  }

  alert("Пользователь зарегистрирован!");
  console.log(await response.json());
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    ...document.querySelectorAll(".shipping-address__submit-button"),
    ...document.querySelectorAll(".proceed__checkout"),
    ...document.querySelectorAll(".email__field__button"),
    ...document.querySelectorAll(".social__icon__block"),
    ...document.querySelectorAll(".email__field"),
    ...document.querySelectorAll(".cart__button__left "),
    ...document.querySelectorAll(".browse-all__button "),
  ];

  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      element.style.transform = "scale(1.05)";
      element.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });

    element.addEventListener("mouseout", () => {
      element.style.transform = "scale(1)";
      element.style.boxShadow = "none";
    });
  });
});
