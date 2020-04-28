function cal() {
   var n1 = parseFloat(document.getElementById('n1').value);
   var n2 = parseFloat(document.getElementById('n2').value);

   var oper = document.getElementById('operators').value;

   if (oper == 'add') {
      document.getElementById('result').value = n1 + n2;
   }

   if (oper == 'min') {
      document.getElementById('result').value = n1 - n2;
   }

   if (oper == 'mult') {
      document.getElementById('result').value = n1 * n2;
   }

   if (oper == 'div') {
      document.getElementById('result').value = n1 / n2;
   }


}
