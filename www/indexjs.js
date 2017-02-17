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

//sending to the server for sign up
 $(document).ready(function() {
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
                        alert("Succesful");
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
