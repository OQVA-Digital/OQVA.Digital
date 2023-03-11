

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
  const contactBt = document.querySelectorAll('.contact_bt')
  const contactSec = document.querySelector('.form_ctnr')

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

  for(i=0;i<contactBt.length;i++) {
    contactBt[i].addEventListener('click', checkContactModal)
  }

  outArea.addEventListener('click', checkContactModal)