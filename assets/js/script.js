$(document).ready(function(){
    page.init();
});
var page = {
  init:function(){
    $(document).ajaxStart(function() {
      page.loader();
    });
    $(document).ajaxComplete(function() {
      page.loader('hide');
    });
    $(document).ajaxError(function(){
      alert("An error occurred!");
    });
    page.fetchGitHubInfo();
    page.fetchPersonalInfo();
  },
  loader:function(option){
    let loader = $(".loader-overlay");
    switch (option) {
      case "show":
        loader.show();
        break;
      case "hide":
      // debugger;
        loader.hide();
        break;
      default:
        loader.show();
    }
  },
  fetchGitHubInfo:function(){
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
  },
  fetchPersonalInfo:function(){
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
  }
}
//https://api.linkedin.com/v2/people/(id:{person ID})
