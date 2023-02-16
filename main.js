const exitBg = document.querySelector('.exit_bg')

const hamMenu = document.querySelector('header menu')

const hamBt = document.querySelector('.hambt')

const hambDot = document.querySelector('.hambt div')

let showingMenu = false;


function hamburguer() {
    if(showingMenu == false) {

        exitBg.style.opacity = 1;
        exitBg.style.visibility = 'visible';

        hamMenu.style.transform = 'translateX(0)';

        hambDot.style.transform = 'scale(5)'

        showingMenu = true;
    } else {

        exitBg.style.opacity = 0;
        exitBg.style.visibility = 'hidden';

        hamMenu.style.transform = 'translateX(-100%)';

        hambDot.style.transform = 'scale(1)'

        showingMenu = false;
    }
}

hamBt.addEventListener('click', hamburguer)
exitBg.addEventListener('click', hamburguer)


document.body.onscroll = function() {
    if (window.pageYOffset > 50) {
        hamBt.style.transform = 'translateY(3rem)';
    } else {
        hamBt.style.transform = 'translateY(0rem)';
    }

    if(showingMenu == true) {
        hamburguer()
    }
}


// NETLIFY FORM


const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => success())
      .catch((error) => alert(error));
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);


  const formBt = document.querySelector('form button')

  function success() {
    formBt.innerHTML = 'Form successfully sent!'

    setTimeout(() => {
        checkContactModal()
    }, 1000);
  }



  let isContactShowing = false;

  const outArea = document.querySelector('.out_area')
  const contactBt = document.getElementById('contactBt')
  const contactSec = document.querySelector('.contact_section')

  function checkContactModal() {
    if(isContactShowing == false) {
        outArea.classList.add('show_out_area')
        contactSec.classList.add('show_contact_sec')

        document.documentElement.style.overflowY = 'hidden'

        isContactShowing = true;
    } else {
        outArea.classList.remove('show_out_area')
        contactSec.classList.remove('show_contact_sec')

        document.documentElement.style.overflowY = 'auto'

        isContactShowing = false;
    }
  }

  contactBt.addEventListener('click', checkContactModal)
  outArea.addEventListener('click', checkContactModal)