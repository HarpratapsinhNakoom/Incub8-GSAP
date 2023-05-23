$('input,textarea').val("");
  $('.main__form div input, .main__form div textarea').focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
});


const btn = document.getElementById('form_submit_button');

document.getElementById('main__form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_rwv4oyq';
   const templateID = 'template_ksz847d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message'; 
      alert('We have recieved the email.😄');
      document.getElementById('main__form').reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert("Oops! Something went wrong. Kindly try again.");
    });

});