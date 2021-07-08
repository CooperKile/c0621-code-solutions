var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var valueObj = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('valueObj:', valueObj);
});

$form.reset();
