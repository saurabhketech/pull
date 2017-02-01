$(function(){
            $(".notification").hide();
            $("#pricecol").hide();
            function explode(){
               var btn='<img src="layer_37.png" height="25%">&emsp;</span><font>Expired pass</font>';
                     $(".notification").append(btn);
                     $(".notification").show();
            }
            setTimeout(explode, 2000);
            var content="";
            var price=0;
            var counter=0,dc=0,wc=0,mc=0,ac=0;
            var str="";
            // alert(price+2);
            //month
            $("#month").click(function(){
               if((counter==0)){
               content +='<font class="hbody">Month pass</font>';
               counter++;
               mc=1;
               price+=50.00;
            }
            else{
               if(!mc){
               content +='<font class="hbody">+Month pass</font>';
               price+=50.00;
               counter++;
               mc=1;
            }
            else{
               if(counter>1){
               content=content.replace("+Month pass", "");
               }
               else{
                  content=content.replace("Month pass", "");
               }
               counter--;
               price-=50.00;
               mc=0;
            }
            }  
               $("#pricecol").html('Price:'+price+' dlls');
               $("#pricecol").show();
               $("#replace").html(content);
            })

            // annual....


            $("#annual").click(function(){
               if(counter==0){
               content+='<font class="hbody">Annual pass</font>';
               counter++;
               price+=60.00;
               ac=1;
            }
            else{
               if(!ac){
               content+='<font class="hbody">+Annual pass</font>';
               price+=60.00;
               counter++;
               ac=1;
               }
               else{
               if(counter>1){
               content=content.replace("+Annual pass", "");
               }
               else{
                  content=content.replace("Annual pass", "");
               }
               counter--;
               price-=60.00;
               ac=0;
            }
            }
               $("#pricecol").html('Price:'+price+' dlls');
               $("#pricecol").show();
               $("#replace").html(content);
            })


            // daily....
            $("#daily").click(function(){
               if(counter==0){
               content+='<font class="hbody">Daily pass</font>';
               counter++;
               price+=10.00;
               dc=1;
            }
            else{
               if(!dc)
               {
               content+='<font class="hbody">+Daily pass</font>';
               price+=10.00;
               dc=1;
            }
               else{
               if(counter>1){
               content=content.replace("+Daily pass", "");
               counter--;
               }
               else{
                  content=content.replace("Daily pass", "");
                  counter--;
               }
               price-=10.00;
               dc=0;
            }
         }
               $("#replace").html(content);
               $("#pricecol").html('Price:'+price+' dlls');
               $("#pricecol").show();
            })


            // weekly....

            $("#weekly").click(function(){
               if(counter==0){
               content+='<font class="hbody">Weekly pass</font>';
               counter++;
               price+=20.00;
               wc=1;
            }
            else{
               if(!wc){
               content+='<font class="hbody">+Weekly pass</font>';
               price+=20.00;
               wc=1;
            }
               else{
               if(counter>1){
               content=content.replace("+Weekly pass", "");
               counter--;
               }
               else{
                  content=content.replace("Weekly pass", "");
                  counter--;
               }
               price-=20.00;
               wc=0;
            }
         }
               $("#replace").html(content);
               $("#pricecol").html('Price:'+price+' dlls');
               $("#pricecol").show();
            })
            });