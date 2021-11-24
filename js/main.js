let a = true;

function changeColor() {
   let bgColor = document.getElementById('div');

   if (a) {
      bgColor.style.background = 'blue';
      a = false;
   } else {
      bgColor.style.background = 'red';
      a = true;
   }
}