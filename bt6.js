let  count = 0;
 let sumDiv7 = 0;
for (let i = 1; ; i++){
     if (i % 7 == 0){
         sumDiv7 += i;
        count ++;
         if (count == 30){
             break;
         }
     }
 }
 document.write(sumDiv7);
