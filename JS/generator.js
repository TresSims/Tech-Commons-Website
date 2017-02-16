
$(function () {
  $('#sandbox-container .input-group.date').datepicker({
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
    console.log("OW BITCH");
    if($("#blog-title").val() == "Sample Blog Title"){
      console.log("Overwrite the defualt moron.");
    }else{
      console.log($("#blog-title").val());
    }
  });

});
