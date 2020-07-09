$(document).ready(function(){
    $.ajax({
        url:"https://api.github.com/users/supdpk",
        method:"GET",
        success:function(response){
            console.log(response);
            $(".profile-img img").prop("src",response.avatar_url);
            $(".profile-name").html(response.name);
        },
        error:function(response){
            console.log(response);
        }
    })
    $.ajax({
        url:"/assets/json/details.json",
        method:"GET",
        success:function(response){
            console.log(response);
            $(".profile-email").html(response.email);
            $(".profle-designation").html(response.headline);
            $(".profile-dob").html(response.dob);
            $(".profile-phone").html(response.phone);

            //profile-phone
        },
        error:function(response){
            console.log(response);
        }
    })
});
//https://api.linkedin.com/v2/people/(id:{person ID})