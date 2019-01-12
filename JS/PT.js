        function languagePT(){
           
            document.getElementById("language").innerHTML = "Português (PT)"; 
            document.getElementById("Trabalho").innerHTML = "Website realizado por: <br> Gonçalo Cruz <br> Nº45141 DDM B";
            language="PT";   
        }

        function changeImageBackPT(){
          
          if(counterback==7){
             document.img.src="7Grumpy.png";
             document.getElementById("nome").innerHTML = "Zangado";
            counterback=6;
            counternext=1;
          }else if(counterback==6){
             document.img.src="6Sleepy.png";
              document.getElementById("nome").innerHTML = "Soneca";
            counterback=5;
            counternext=7
          }else if(counterback==5){
             document.img.src="5Dopey.png";
              document.getElementById("nome").innerHTML = "Mudo";
            counterback=4;
            counternext=6;
          }else if(counterback==4){
             document.img.src="4Happy.png";
              document.getElementById("nome").innerHTML = "Feliz";
            counterback=3;
            counternext=5;
          }else if(counterback==3){
             document.img.src="3Sneezy.png";
              document.getElementById("nome").innerHTML = "Atchim";
            counterback=2;
              counternext=4;
          }else if(counterback==2){
             document.img.src="2Bashful.png";
              document.getElementById("nome").innerHTML = "Tímido";
            counterback=1;
            counternext=3;
          }else {
             document.img.src="1Doc.png";
              document.getElementById("nome").innerHTML = "Sabichão";
            counterback=7;
            counternext=2;
          }
            
           
        }
    
        function changeImageNextPT(){
           
            if(counternext==1){
                 document.img.src="1Doc.png";
                 document.getElementById("nome").innerHTML = "Sabichão";
                 counternext=2;
                 counterback=7;
          }else if(counternext==2){
             document.img.src="2Bashful.png";
              document.getElementById("nome").innerHTML = "Tímido";
            counternext=3;
            counterback=1;
          }else if(counternext==3){
             document.img.src="3Sneezy.png";
              document.getElementById("nome").innerHTML = "Atchim";
            counternext=4;
            counterback=2;
          }else if(counternext==4){
             document.img.src="4Happy.png";
              document.getElementById("nome").innerHTML = "Feliz";
            counternext=5;
            counterback=3;
          }else if(counternext==5){
             document.img.src="5Dopey.png";
             document.getElementById("nome").innerHTML = "Mudo";
             counternext=6;
             counterback=4;
          }else if(counternext==6){
             document.img.src="6Sleepy.png";
              document.getElementById("nome").innerHTML = "Soneca";
            counternext=7;
              counterback=5;
          }else {
             document.img.src="7Grumpy.png";
              document.getElementById("nome").innerHTML = "Zangado";
            counternext=1;
              counterback=6;
          }
            
           
        }
