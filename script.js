$(document).ready(function(){
    $("#contact").validate({
        rules:{
            mail:{
                required:true,
                email:true,
                
            },urname:{
                required:true,
                lettersonly:true,
                
            },message:{
                required:true,
                minlength:10,

            },sub:{
                required:true,
                minlength:10,
                maxlength:25,
            }
            
        }
    })
})
