$(document).ready(()=>{


    $("#design").click(function(){
        $("#des").fadeIn(()=>{
          $("#design").fadeOut(()=>{
            $("#des").click(()=>{
              $("#design").fadeIn(()=>{
                $("#des").fadeOut()
              })
            })
          });

        });
      });

      
      
      
      $("#development").click(function(){
        $("#dev").fadeIn(()=>{
          $("#development").fadeOut(()=>{
            $("#dev").click(()=>{
              $("#development").fadeIn(()=>{
                $("#dev").fadeOut()
              })
            })
          });

        });
      });
      
      
      
      
      
      



      $("#product").click(function(){
        $("#prod").fadeIn(()=>{
          $("#product").fadeOut(()=>{
            $("#prod").click(()=>{
              $("#product").fadeIn(()=>{
                $("#prod").fadeOut()
              })
            })
          });

        });
      });

      $('.submit').click((e)=>{
        e.preventDefault();
        var name=$('#name').val();
        var email=$('#email').val();
        var textarear=$('#name').val();
        var errors=document.getElementById('errors');
        var response=document.getElementById('content');

        if(name==''|| name==null|| email=='' || email==null || textarear=='' || textarear==null){
          
           errors.innerText="All fields are required, Kindly fill in all the details."      
          
          $('#errors').show();  
          return false;     
        } else{
          
           
          response.innerText=`Hey ${name}, thank you for contacting us, we will get back to you within 24hours via the email you have provided ${email}`;

          $('#modal').show(setTimeout(dismiss, 5000)); 
           

        }
        
      })

   

//function to dismiss data
function dismiss(){
  $('#modal').fadeOut(3000);
}
 $('#dynamic').hover(()=>{
 $('#prj1').toggleClass('info');
})

$('#sec').hover(()=>{
  $('#prj2').toggleClass('info');
 })

 $('#third').hover(()=>{
  $('#prj3').toggleClass('info');
 })

 $('#fourth').hover(()=>{
  $('#prj4').toggleClass('info');
 })

 $('#fifth').hover(()=>{
  $('#prj5').toggleClass('info');
 })

 $('#sixth').hover(()=>{
  $('#prj6').toggleClass('info');
 })

 $('#seventh').hover(()=>{
  $('#prj7').toggleClass('info');
 })

 $('#eighth').hover(()=>{
  $('#prj8').toggleClass('info');
 })


});

