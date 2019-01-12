        function languageING(){
           
            document.getElementById("language").innerHTML = "English";  
            document.getElementById("Trabalho").innerHTML = "Website created by: <br> Gonçalo Cruz <br> Nº45141 DDM B";
            language="ING";   
        }

        function changeImageBackING(){
          
          if(counterback==7){
             document.img.src="7Grumpy.png";
             document.getElementById("nome").innerHTML = "Grumpy";
             counterback=6;
             counternext=1;
          }else if(counterback==6){
             document.img.src="6Sleepy.png";
             document.getElementById("nome").innerHTML = "Sleepy";
             counterback=5;
             counternext=7
          }else if(counterback==5){
             document.img.src="5Dopey.png";
             document.getElementById("nome").innerHTML = "Dopey";
             counterback=4;
             counternext=6;
          }else if(counterback==4){
             document.img.src="4Happy.png";
             document.getElementById("nome").innerHTML = "Happy";
             counterback=3;  
             counternext=5;
          }else if(counterback==3){
             document.img.src="3Sneezy.png";
             document.getElementById("nome").innerHTML = "Sneezy";
             counterback=2;
             counternext=4;
          }else if(counterback==2){
             document.img.src="2Bashful.png";
             document.getElementById("nome").innerHTML = "Bashful";
             counterback=1;
             counternext=3;
          }else {
             document.img.src="1Doc.png";
             document.getElementById("nome").innerHTML = "Doc";
             counterback=7;
             counternext=2;
          }
            
           
        }
    
        function changeImageNextING(){
           
            if(counternext==1){
                 document.img.src="1Doc.png";
                 document.getElementById("nome").innerHTML = "Doc";
                 counternext=2;
                 counterback=7;
          }else if(counternext==2){
                 document.img.src="2Bashful.png";
                 document.getElementById("nome").innerHTML = "Bashful";
                 counternext=3;
                 counterback=1;
          }else if(counternext==3){
                 document.img.src="3Sneezy.png";
                 document.getElementById("nome").innerHTML = "Sneezy";
                 counternext=4;
                 counterback=2;
          }else if(counternext==4){
                 document.img.src="4Happy.png";
                 document.getElementById("nome").innerHTML = "Happy";
                 counternext=5;
                 counterback=3;
          }else if(counternext==5){
                 document.img.src="5Dopey.png";
                 document.getElementById("nome").innerHTML = "Dopey";
                 counternext=6;
                 counterback=4;
          }else if(counternext==6){
                 document.img.src="6Sleepy.png";
                 document.getElementById("nome").innerHTML = "Sleepy";
                 counternext=7;
                 counterback=5;
          }else {
                 document.img.src="7Grumpy.png";
                 document.getElementById("nome").innerHTML = "Grumpy";
                 counternext=1;
                 counterback=6;
          }
            
           
        }