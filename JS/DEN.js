        function languageDEN(){
           
            document.getElementById("language").innerHTML = "Dansk";  
            document.getElementById("Trabalho").innerHTML = "Hjemmeside oprettet af: <br> Gonçalo Cruz <br> Nº45141 DDM B";
            language="DEN";   
        }

        function changeImageBackDEN(){
          
          if(counterback==7){
             document.img.src="7Grumpy.png";
             document.getElementById("nome").innerHTML = "Ganvpot";
             counterback=6;
             counternext=1;
          }else if(counterback==6){
             document.img.src="6Sleepy.png";
             document.getElementById("nome").innerHTML = "Sovnig";
             counterback=5;
             counternext=7
          }else if(counterback==5){
             document.img.src="5Dopey.png";
             document.getElementById("nome").innerHTML = "Dumpe";
             counterback=4;
             counternext=6;
          }else if(counterback==4){
             document.img.src="4Happy.png";
             document.getElementById("nome").innerHTML = "Lystig";
             counterback=3;  
             counternext=5;
          }else if(counterback==3){
             document.img.src="3Sneezy.png";
             document.getElementById("nome").innerHTML = "Prosit";
             counterback=2;
             counternext=4;
          }else if(counterback==2){
             document.img.src="2Bashful.png";
             document.getElementById("nome").innerHTML = "Flovmand";
             counterback=1;
             counternext=3;
          }else {
             document.img.src="1Doc.png";
             document.getElementById("nome").innerHTML = "Brille";
             counterback=7;
             counternext=2;
          }
            
           
        }
    
        function changeImageNextDEN(){
           
            if(counternext==1){
                 document.img.src="1Doc.png";
                 document.getElementById("nome").innerHTML = "Brille";
                 counternext=2;
                 counterback=7;
          }else if(counternext==2){
                 document.img.src="2Bashful.png";
                 document.getElementById("nome").innerHTML = "Flovmand";
                 counternext=3;
                 counterback=1;
          }else if(counternext==3){
                 document.img.src="3Sneezy.png";
                 document.getElementById("nome").innerHTML = "Prosit";
                 counternext=4;
                 counterback=2;
          }else if(counternext==4){
                 document.img.src="4Happy.png";
                 document.getElementById("nome").innerHTML = "Lystig";
                 counternext=5;
                 counterback=3;
          }else if(counternext==5){
                 document.img.src="5Dopey.png";
                 document.getElementById("nome").innerHTML = "Dumpe";
                 counternext=6;
                 counterback=4;
          }else if(counternext==6){
                 document.img.src="6Sleepy.png";
                 document.getElementById("nome").innerHTML = "Sovnig";
                 counternext=7;
                 counterback=5;
          }else {
                 document.img.src="7Grumpy.png";
                 document.getElementById("nome").innerHTML = "Gnavpot";
                 counternext=1;
                 counterback=6;
          }
            
           
        }