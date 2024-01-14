const submitBtn = document.querySelector(".btn");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  usernameError.textContent = "";
  passwordError.textContent = "";
  const user = { username: "", password: "" };
  user.username = document.getElementById("username").value;
  user.password = document.getElementById("password").value;

  try {
    const response = await sendSignInReq(user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

const sendSignInReq = async (userInfo) => {
  try {
    const rawResponse = await fetch("http://localhost:3000/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...userInfo }),
    });
    const data = await rawResponse.json();
    if (data.errors) {
      usernameError.textContent = data.errors.username;
      passwordError.textContent = data.errors.password;
    }

    // if (data.user) {
    //   location.assign("./index.html");
    // }

    return data;
  } catch (error) {
    console.log(error);
  }
};
