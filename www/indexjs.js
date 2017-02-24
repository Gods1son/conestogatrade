function validateEmail() {
    var email = document.getElementById("email").value;
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf('@conestogac.on.ca', email.length - '@conestogac.on.ca'.length) !== -1) {
            alert('Submission was successful.');
        } else {
            alert('Email must be a conestoga e-mail address (your.name@conestoga.on.ca).');
		return false;
        }
    } else {
        alert('Not a valid e-mail address.');
		return false;
    }
}

//validate post
function validate(){
    var title = document.getElementById("title");
    var price = document.getElementById("price");
    var contact = document.getElementById("contact");
    var description = document.getElementById("description");
    var form = document.getElementById("postform");
    var qrcode = document.getElementById("code");

    if (title.value == ""){
        document.getElementById("title_error").innerHTML = "Please enter post title";
        return false;
    }else if(title.value !== ""){document.getElementById("title_error").innerHTML=""}
    if (price.value == ""){
        document.getElementById("price_error").innerHTML = "Please enter desired selling price";
        return false;
    }else if(price.value == !""){document.getElementById("price_error").innerHTML=""}
    if (contact.value == ""){
        document.getElementById("contact_error").innerHTML = "Please enter your contact";
        return false;
    }else if(contact.value !== ""){document.getElementById("contact_error").innerHTML=""}
    if (description.value == ""){
        document.getElementById("description_error").innerHTML = "Please describe your item a lil bit";
        return false;
    }else if(description.value !== ""){document.getElementById("description_error").innerHTML=""}
    else{ }
}
//end of post

var signup = document.getElementById("signup");
var signin = document.getElementById("signin");
var post = document.getElementById("post");

function showsignup(){
    document.getElementById("signinpage").style.display = "none";
    document.getElementById("postpage").style.display = "none";
    document.getElementById("signuppage").style.display = "block";
}

function showsignin(){
    document.getElementById("postpage").style.display = "none";
    document.getElementById("signuppage").style.display = "none";
    document.getElementById("signinpage").style.display = "block";
}

function showpost(){
    document.getElementById("signuppage").style.display = "none";
    document.getElementById("signinpage").style.display = "none";
    document.getElementById("postpage").style.display = "block";
}
//open homepage on app
function homepagehere(){
    window.location = "homepage.html";
}

//open search on app
function searchhere(){
    window.location = "search.html";
}

//sending to the server for sign up
 $(document).ready(function() {
          //handling sign-in
     /*  function submitted(){
$("#signin").submit(function(e)
{
    var uname=$("#email").val();
    var pwd=$("#password").val();
    var postData = $("#signin").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/signintest.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
            alert(data);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
            alert(textStatus);
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
//$("#signin").submit(); //Submit  the FORM
}*/
     //handling registration
            $("#registernew").submit(function() {
                    var email = document.getElementById("email").value;
                var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                if (re.test(email)) {
                if (email.indexOf('@conestogac.on.ca', email.length - '@conestogac.on.ca'.length) !== -1) {
                alert('Submission was successful.');
                document.getElementById("signuppage").style.display = "none";
                document.getElementById("signinpage").style.display = "none";
                document.getElementById("postpage").style.display = "none";
                //Send the serialized data to mailer.php.
                $.post("http://ec2-34-198-155-79.compute-1.amazonaws.com/signuptest.php", $("#registernew").serialize(),
                    //Take our repsonse, and replace whatever is in the "formResponse"
                    //div with it.

                    function(data) {
                    $("#registernew").html( $("#registerresponse").html() );
                    }
                );
                return false;} else {
                alert('Email must be a conestoga e-mail address (your.name@conestoga.on.ca).');
		          return false;
                }
                    } else {
                    alert('Not a valid e-mail address.');
		          return false;
                }
            });
     //handling post
                 $("#postman").submit(function() {
                    var title = document.getElementById("title");
                    var price = document.getElementById("price");
                    var contact = document.getElementById("contact");
                    var description = document.getElementById("description");
                    var form = document.getElementById("postform");
                    var qrcode = document.getElementById("code");

                    if (title.value == ""){
                    document.getElementById("title_error").innerHTML = "Please enter post title";
                    return false;
                    }else if(title.value !== ""){document.getElementById("title_error").innerHTML=""}
                    if (price.value == ""){
                    document.getElementById("price_error").innerHTML = "Please enter desired selling price";
                    return false;
                    }else if(price.value == !""){document.getElementById("price_error").innerHTML=""}
                    if (contact.value == ""){
                    document.getElementById("contact_error").innerHTML = "Please enter your contact";
                    return false;
                    }else if(contact.value !== ""){document.getElementById("contact_error").innerHTML=""}
                    if (description.value == ""){
                    document.getElementById("description_error").innerHTML = "Please describe your item a lil bit";
                    return false;
                    }else if(description.value !== ""){document.getElementById("description_error").innerHTML=""}
                    else{
                        document.getElementById("signuppage").style.display = "none";
                        document.getElementById("signinpage").style.display = "none";
                        document.getElementById("postpage").style.display = "none";
                      //  alert("Succesful");
                    //Send the serialized data to mailer.php.
                        $.post("http://ec2-34-198-155-79.compute-1.amazonaws.com/savepost.php", $("#postman").serialize(),
                    //Take our repsonse, and replace whatever is in the "formResponse"
                    //div with it.
                        function(data) {
                        $("#postman").html( $("#registerresponse").html() );
                            }
                        );
                        return false;
                        }
                    });
                });

//opening homepage
function openhomepage(){
    window.open("http://ec2-34-198-155-79.compute-1.amazonaws.com/homepage.php", '_blank', 'location=yes')
}

//opening app scanner
function openscanner(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          var link = result.text;
           window.open(link, '_blank', 'location=yes')
      },
      function (error) {
          alert("Scanning failed: " + error);
      });
}
       /*   $("#signin").submit(function(event) {
                        document.getElementById("post").style.display = "block";
                        event.preventDefault();
            //url: "http://ec2-34-198-155-79.compute-1.amazonaws.com/signintest.php",
              var xhr = new XMLHttpRequest();
xhr.open("POST", "http://ec2-34-198-155-79.compute-1.amazonaws.com/signintest.php", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("resp").innerText = xhr.responseText;
  }
}
xhr.send();
            }); */

function posted(){
$("#postman").submit(function(e)
{
    var postData = $("#postman").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/savepost.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
            $("#resp").html(data);
            document.getElementById("title").value = "";
            document.getElementById("price").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("description").value = "";
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
//$("#postman").submit(); //Submit  the FORM
}

function registerman(){
        var email = document.getElementById("email").value;
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf('@conestogac.on.ca', email.length - '@conestogac.on.ca'.length) !== -1) {
            $("#registernew").submit(function(e)
                                     {
    var postData = $("#registernew").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/signuptest.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
            alert(data);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
//$("#postman").submit(); //Submit  the FORM
        } else {
            alert('Email must be a conestoga e-mail address (your.name@conestoga.on.ca).');
		return false;
        }
    } else {
        alert('Not a valid e-mail address.');
		return false;
    }
}

function submitted(){
$("#signin").submit(function(e)
{
    var postData = $("#signin").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/signintest.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
            alert(data);

        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
}

/*//function to load upload
function chooseimage(){
        navigator.camera.getPicture(uploadPhoto,
                                    function(message) { alert(message); },
                                    { quality: 50,
                                    destinationType: navigator.camera.DestinationType.FILE_URI,
                                    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                    );
}*/
    //trying to post image to bucket cloud



    /*    function win(r) {
            alert(r.response);
       // console.log("Code = " + r.responseCode);
        //console.log("Response = " + r.response);
        //console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
        alert("An error has occurred: Code = " = error.code);
        //alert("An error has occurred: Code = " + error.code);
        //console.log("upload error source " + error.source);
        //console.log("upload error target " + error.target);
    }
    //end of upload image*/

    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    function onPhotoURISuccess(imageURI) {
        // Show the selected image
        var smallImage = document.getElementById('smallImage');
        smallImage.src = imageURI;
    }

    function uploadPhoto() {
        var imageURI = document.getElementById('smallImage').getAttribute("src");
 var options = new FileUploadOptions();
 options.fileKey = "file";
 options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 options.mimeType = "image/jpeg";
 //console.log(options.fileName);
        var params = {};
        params.title = document.getElementById("title").value;
        params.price = document.getElementById("price").value;
        params.contact = document.getElementById("contact").value;
        params.description = document.getElementById("description").value;



var ft = new FileTransfer();
 ft.upload(imageURI, "http://ec2-34-198-155-79.compute-1.amazonaws.com/savepost.php", function(result){
    alert("Post Submitted");
         document.getElementById("title").value = "";
         document.getElementById("price").value = "";
         document.getElementById("contact").value = "";
         document.getElementById("description").value = "";
 }, function(error){
// console.log(JSON.stringify(error));
 }, options);
 }
