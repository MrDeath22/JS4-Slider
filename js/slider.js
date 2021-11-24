let a = 0;
let b = 0;

function right() {

   let rightSlick = document.getElementById('box1');
   let rightSlick2 = document.getElementById('box2');
   let rightSlick3 = document.getElementById('box3');

   if (a == 0) {
      rightSlick.style.left = '-50%';
      rightSlick2.style.left = '50%';
      rightSlick3.style.left = '150%';
      a += 1;
   } else if (a == 1) {
      rightSlick.style.left = '-100%';
      rightSlick2.style.left = '-50%';
      rightSlick3.style.left = '50%';
      a += 1;
   } else if (a == 2) {
      rightSlick.style.left = '50%';
      rightSlick2.style.left = '150%';
      rightSlick3.style.left = '200%';
      a = 0;
   }
}

function left() {

   let rightSlick = document.getElementById('box1');
   let rightSlick2 = document.getElementById('box2');
   let rightSlick3 = document.getElementById('box3');

   if (b == 0) {
      rightSlick.style.left = '150%';
      rightSlick2.style.left = '-50%';
      rightSlick3.style.left = '50%';
      b += 1;
   } else if (b == 1) {
      rightSlick.style.left = '-50%';
      rightSlick2.style.left = '50%';
      rightSlick3.style.left = '150%';
      b += 1;
   } else if (b == 2) {
      rightSlick.style.left = '50%';
      rightSlick2.style.left = '150%';
      rightSlick3.style.left = '200%';
      b = 0;
   }
}  