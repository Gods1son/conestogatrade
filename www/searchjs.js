       $(document).ready(function() {


       });
    function searchman(){
       // alert("submit");
$("#searching").submit(function(e)
{
    var postData = $("#searching").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/searchresult.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
             document.getElementById("whatever").innerHTML = data;
           // document.getElementById("title").value = "";
        //    document.getElementById("price").value = "";
          //  document.getElementById("contact").value = "";
        //    document.getElementById("description").value = "";
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
            alert("error");
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
//$("#searching").submit(); //Submit  the FORM
}
