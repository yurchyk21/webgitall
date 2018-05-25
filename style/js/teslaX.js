$(function()
{

 $("#teslaXimg1").hover(
        function() {
            $( "#car_bagage" ).fadeTo( "slow" , 0, function() {});
            // $( "#car_bagage1" ).fadeTo( "slow" , 1, function() {});

            // $( this ).attr('srcset','https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/modelx/utility/storage-2@2.jpg');
            // $( this ).attr('opacity','0.5');
            // $( this ).fadeTo("slow" , 1, function(){});
            }, 
            
            function() {
                $( "#car_bagage" ).fadeTo( "slow" , 1, function() {

                // $( this ).fadeTo( "slow" , 0.5, function() {
                //     $( this ).attr('srcset','https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/modelx/utility/storage-1@2.jpg');
                //     $( this ).attr('opacity','0.5');
                //     $( this ).fadeTo("slow" , 1, function(){});
                  });
                });
});