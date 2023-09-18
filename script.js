const wrapper = document.querySelector( '.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login');
const iconClose = document.querySelector('.close');
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

const submitForm = () => {
    const names = document.getElementById("names").value;
    const year = document.getElementById("year").value;
    const reg = document.getElementById("reg").value;
    const phone = document.getElementById("phone").value;

    console.log("hi");
    const formData = new FormData();
    formData.append("entry.2092238618", names);
    formData.append("entry.1556369182", year);
    formData.append("entry.479301265", reg);
    formData.append("entry.1345269615", phone);
  
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScvsJ_plEo8wwIMvY5riqdqVcul7Q_ryZd9hdHGfIh1uQH0Yg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    ).then((res) => console.log(res));
    // alert("Submitted.");
    window.confirm("Submitted!\nNow download your template.");
  };

function replaceContentInContainer(target, source) {
    document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
  }

registerLink.addEventListener('click', ()=> {
    wrapper.classList. add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList. remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList. add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList. remove('active-popup');
});  
  
  function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);
          