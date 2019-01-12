        function languageFR(){
           
            document.getElementById("language").innerHTML = "Le français";  
            document.getElementById("Trabalho").innerHTML = "Site Web créé par: <br> Gonçalo Cruz <br> Nº45141 DDM B";
            language="FR";   
        }

        function changeImageBackFR(){
          
          if(counterback==7){
             document.img.src="7Grumpy.png";
             document.getElementById("nome").innerHTML = "Grincheux";
             counterback=6;
             counternext=1;
          }else if(counterback==6){
             document.img.src="6Sleepy.png";
             document.getElementById("nome").innerHTML = "Dormeur";
             counterback=5;
             counternext=7
          }else if(counterback==5){
             document.img.src="5Dopey.png";
             document.getElementById("nome").innerHTML = "Simplet";
             counterback=4;
             counternext=6;
          }else if(counterback==4){
             document.img.src="4Happy.png";
             document.getElementById("nome").innerHTML = "Joyeux";
             counterback=3;  
             counternext=5;
          }else if(counterback==3){
             document.img.src="3Sneezy.png";
             document.getElementById("nome").innerHTML = "Atchoum";
             counterback=2;
             counternext=4;
          }else if(counterback==2){
             document.img.src="2Bashful.png";
             document.getElementById("nome").innerHTML = "Timide";
             counterback=1;
             counternext=3;
          }else {
             document.img.src="1Doc.png";
             document.getElementById("nome").innerHTML = "Prof";
             counterback=7;
             counternext=2;
          }
            
           
        }
    
        function changeImageNextFR(){
           
            if(counternext==1){
                 document.img.src="1Doc.png";
                 document.getElementById("nome").innerHTML = "Prof";
                 counternext=2;
                 counterback=7;
          }else if(counternext==2){
                 document.img.src="2Bashful.png";
                 document.getElementById("nome").innerHTML = "Timide";
                 counternext=3;
                 counterback=1;
          }else if(counternext==3){
                 document.img.src="3Sneezy.png";
                 document.getElementById("nome").innerHTML = "Atchoum";
                 counternext=4;
                 counterback=2;
          }else if(counternext==4){
                 document.img.src="4Happy.png";
                 document.getElementById("nome").innerHTML = "Joyeux";
                 counternext=5;
                 counterback=3;
          }else if(counternext==5){
                 document.img.src="5Dopey.png";
                 document.getElementById("nome").innerHTML = "Simplet";
                 counternext=6;
                 counterback=4;
          }else if(counternext==6){
                 document.img.src="6Sleepy.png";
                 document.getElementById("nome").innerHTML = "Dormeur";
                 counternext=7;
                 counterback=5;
          }else {
                 document.img.src="7Grumpy.png";
                 document.getElementById("nome").innerHTML = "Grincheux";
                 counternext=1;
                 counterback=6;
          }
            
           
        }