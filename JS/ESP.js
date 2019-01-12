        function languageESP(){
           
            document.getElementById("language").innerHTML = "Español";   
            document.getElementById("Trabalho").innerHTML = "Sitio web realizado por: <br> Gonçalo Cruz <br> Nº45141 DDM B";
            language="ESP";   
        }

        function changeImageBackESP(){
          
          if(counterback==7){
             document.img.src="7Grumpy.png";
             document.getElementById("nome").innerHTML = "Gruñón";
             counterback=6;
             counternext=1;
          }else if(counterback==6){
             document.img.src="6Sleepy.png";
             document.getElementById("nome").innerHTML = "Dormilón";
             counterback=5;
             counternext=7
          }else if(counterback==5){
             document.img.src="5Dopey.png";
             document.getElementById("nome").innerHTML = "Mudito";
             counterback=4;
             counternext=6;
          }else if(counterback==4){
             document.img.src="4Happy.png";
             document.getElementById("nome").innerHTML = "Feliz";
             counterback=3;  
             counternext=5;
          }else if(counterback==3){
             document.img.src="3Sneezy.png";
             document.getElementById("nome").innerHTML = "Mocoso";
             counterback=2;
             counternext=4;
          }else if(counterback==2){
             document.img.src="2Bashful.png";
             document.getElementById("nome").innerHTML = "Tímido";
             counterback=1;
             counternext=3;
          }else {
             document.img.src="1Doc.png";
             document.getElementById("nome").innerHTML = "Sabiondo";
             counterback=7;
             counternext=2;
          }
            
           
        }
    
        function changeImageNextESP(){
           
            if(counternext==1){
                 document.img.src="1Doc.png";
                 document.getElementById("nome").innerHTML = "Sabiondo";
                 counternext=2;
                 counterback=7;
          }else if(counternext==2){
                 document.img.src="2Bashful.png";
                 document.getElementById("nome").innerHTML = "Tímido";
                 counternext=3;
                 counterback=1;
          }else if(counternext==3){
                 document.img.src="3Sneezy.png";
                 document.getElementById("nome").innerHTML = "Mocoso";
                 counternext=4;
                 counterback=2;
          }else if(counternext==4){
                 document.img.src="4Happy.png";
                 document.getElementById("nome").innerHTML = "Feliz";
                 counternext=5;
                 counterback=3;
          }else if(counternext==5){
                 document.img.src="5Dopey.png";
                 document.getElementById("nome").innerHTML = "Mudito";
                 counternext=6;
                 counterback=4;
          }else if(counternext==6){
                 document.img.src="6Sleepy.png";
                 document.getElementById("nome").innerHTML = "Dormilón";
                 counternext=7;
                 counterback=5;
          }else {
                 document.img.src="7Grumpy.png";
                 document.getElementById("nome").innerHTML = "Gruñón";
                 counternext=1;
                 counterback=6;
          }
            
           
        }