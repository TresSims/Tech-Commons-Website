
$(function () {
  $('#sandbox-container input').datepicker({
  });
});

$(document).ready(function(){




  function hideAll() {
      $('#blog-gen').css("display", "none");
      $('#item-gen').css("display", "none");
      $('#filter-gen').css("display", "none");
  }

  hideAll();

  $("#gen-select").change(function(){
    hideAll();

    switch($("#gen-select :selected").text()){
      case "New Blog Post":
        $("#blog-gen").css("display", "block");
        break;
      case "New SSD Item":
        $("#item-gen").css("display", "block");
        break;
      case "New Filter Element":
      $("#filter-gen").css("display", "block");
        break;
      default:
        break;
    }
  });

  $("#submit-blog").click(function(){
    var d = new Date();

    var title = $("#blog-title").val();
    var date = $('#sandbox-container .input-group.date').datepicker( 'getFormattedDate' );
    var content = $("#content").val();

    $("#blog-title").removeClass("incorrect-field");
    $('#date-field').removeClass("caution-field");
    $("#content").removeClass("incorrect-field");
    $("#add-to-blog .copyable").empty();
    $(".error").remove();
    $(".caution").remove();

    $("#add-to-blog").addClass("invisible");

    var greenToGo = true;

    if(title == "Sample Blog Title" || title === ""){
      console.log("Overwrite the defualt");
      greenToGo = false;
      $("#blog-title").addClass("incorrect-field");
      $("#add-to-index").addClass("invisible");
    }else{
      console.log(title);
    }

    if(date === ""){
      console.log("I guess we're using today.");
      var month = d.getMonth()+1;
      var day = d.getDate();
      date = (month<10 ? '0' : '') + month + '/' +    (day<10 ? '0' : '') + day + '/' + d.getFullYear();
      console.log(date);
      $('#date-field').addClass("caution-field");
      $("<span class=\"caution\">If left blank the computer will assume a default value</span>").insertAfter(".caution-field");
    }else{
      console.log(date);
    }

    if(content === ""){
      console.log("Overwrite the default");
      $("#content").addClass("incorrect-field");
      greenToGo = false;
    }else{
      content = cleanHTML(content);
      console.log(content);
    }

    if(greenToGo){
      console.log("here we go!");
      //generate stuff
      $("#add-to-blog").removeClass("invisible");
      $("#add-to-index").removeClass("invisible");

      $("#add-to-blog .copyable").append("&lt;div class=\"col-sm-6 move\"&gt;<br />");
      $("#add-to-blog .copyable").append("   &lt;div class=\"panel panel-primary\"&gt;<br />");
      $("#add-to-blog .copyable").append("    &lt;div class=\"panel-heading\"&gt;<br />");
      $("#add-to-blog .copyable").append("      &lt;h3&gt;" + title + "&lt;/h3&gt;<br />");
      $("#add-to-blog .copyable").append("      &lt;small&gt;" + date + "&lt;/small&gt;<br />");
      $("#add-to-blog .copyable").append("    &lt;/div&gt;<br />");
      $("#add-to-blog .copyable").append("    &lt;div class=\"panel-body\"&gt;<br />");
      $("#add-to-blog .copyable").append("      " + content + "<br />");
      $("#add-to-blog .copyable").append("    &lt;/div&gt;<br />");
      $("#add-to-blog .copyable").append("  &lt;/div&gt;<br />");
      $("#add-to-blog .copyable").append("&lt;/div&gt;<br />");



    }else{
      $("<span class=\"error\">Please overwrite the default value</span>").insertBefore(".incorrect-field");
    }



  });

});



function cleanHTML(str){
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  return str;
}
