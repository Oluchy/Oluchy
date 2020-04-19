function output(jstask){
    let arrayN =[];
        for(i=1; i<=jstask; i++){
         if(1 % 2 === 0 && i % 3 === 0 && i % 5 == 0 ){
               arrayN.push("yu-gi-oh");
            }else if (i % 2 === 0 && i % 3 === 0){
               arrayN.push ("yu-gi");
            }else if (i % 2 === 0 && i % 5 === 0){
               arrayN.push ("yu-oh");
            }else if (i % 3=== 0 && i % 5 === 0){
               arrayN.push ("gi-oh");
            }else if (i % 2 ===0){
               arrayN.push ("yu");
            }else if (i % 3 === 0) {
               arrayN.push ("gi");
            }else if (i % 5 === 0) {
               arrayN.push ("oh");
            }else {
               arrayN.push (i);
            }
        }
         console.log( arrayN);
          return arrayN;
    }
    output (100);
    output (50);
 