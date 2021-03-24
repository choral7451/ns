"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  cpsword = document.querySelector("#cpsword"),
  phonNumber = document.querySelector("#pn"),
  psword = document.querySelector("#psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        cpsword: cpsword.value,
        phonNumber: pn.value,
        psword: psword.value,
    };
    console.log(req);
    
    fetch("/register", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          location.href = "/login";
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
      });
}