        function languageGER(){
           
            document.getElementById("language").innerHTML = "Deutsch"; 
            document.getElementById("Trabalho").innerHTML = "Website erstellt von: <br> Gonçalo Cruz <br> Nº45141 DDM B";
            language="GER";   
        }

        function changeImageBackGER(){
          
          if(counterback==7){
             document.img.src="7Grumpy.png";
             document.getElementById("nome").innerHTML = "Brummbar";
             counterback=6;
             counternext=1;
          }else if(counterback==6){
             document.img.src="6Sleepy.png";
             document.getElementById("nome").innerHTML = "Schlafmutze";
             counterback=5;
             counternext=7
          }else if(counterback==5){
             document.img.src="5Dopey.png";
             document.getElementById("nome").innerHTML = "Seppl";
             counterback=4;
             counternext=6;
          }else if(counterback==4){
             document.img.src="4Happy.png";
             document.getElementById("nome").innerHTML = "Happy";
             counterback=3;  
             counternext=5;
          }else if(counterback==3){
             document.img.src="3Sneezy.png";
             document.getElementById("nome").innerHTML = "Hatschi";
             counterback=2;
             counternext=4;
          }else if(counterback==2){
             document.img.src="2Bashful.png";
             document.getElementById("nome").innerHTML = "Pimpel";
             counterback=1;
             counternext=3;
          }else {
             document.img.src="1Doc.png";
             document.getElementById("nome").innerHTML = "Chef";
             counterback=7;
             counternext=2;
          }
            
           
        }
    
        function changeImageNextGER(){
           
            if(counternext==1){
                 document.img.src="1Doc.png";
                 document.getElementById("nome").innerHTML = "Chef";
                 counternext=2;
                 counterback=7;
          }else if(counternext==2){
                 document.img.src="2Bashful.png";
                 document.getElementById("nome").innerHTML = "Pimpel";
                 counternext=3;
                 counterback=1;
          }else if(counternext==3){
                 document.img.src="3Sneezy.png";
                 document.getElementById("nome").innerHTML = "Hatschi";
                 counternext=4;
                 counterback=2;
          }else if(counternext==4){
                 document.img.src="4Happy.png";
                 document.getElementById("nome").innerHTML = "Happy";
                 counternext=5;
                 counterback=3;
          }else if(counternext==5){
                 document.img.src="5Dopey.png";
                 document.getElementById("nome").innerHTML = "Seppl";
                 counternext=6;
                 counterback=4;
          }else if(counternext==6){
                 document.img.src="6Sleepy.png";
                 document.getElementById("nome").innerHTML = "Schlafmutze";
                 counternext=7;
                 counterback=5;
          }else {
                 document.img.src="7Grumpy.png";
                 document.getElementById("nome").innerHTML = "Brummbar";
                 counternext=1;
                 counterback=6;
          }
            
           
        }