let count = 3;
const interval = setInterval(countdown, 1000);
function countdown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(interval);
  }
}
