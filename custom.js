var contractorsSelected = 0;

function changeQuotesAmount() {
  contractorsSelected = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (contractorsSelected === 3) {
    $('input[type="checkbox"]:not(:checked)').attr('disabled', true);
  } else {
       $('input[type="checkbox"]:not(:checked)').attr('disabled', false);
  }
  if (contractorsSelected) {
    $('a.cta-button').removeClass("inactive");
    $('a.cta-button').addClass("active");
  } else {
    $('a.cta-button').removeClass("active");
    $('a.cta-button').addClass("inactive");
  }
}

function changeTest() {
  // e.preventDefault();
  $('#page-intro h1')[0].innerHTML = "Request a Project Quote";
  $('#page-intro p')[0].innerHTML = "Thanks for your request! Your information has been sent to the following Pella Certified Contractors. A representative for each group will be in touch as soon as they can.";
  $('#page-content').hide();
  $('#confirmation-container').show();
}

// $(document).ready(function() {
//   $("#PccForm").submit(function(e) {  });
// });