var holidays = ['11/24/2016', '11/25/2016', '12/25/2016'];
 $(function () {
     $('#datetimepicker0').datetimepicker({
         inline: true,
         sideBySide: true,
         daysOfWeekDisabled: ["0", "6"],
         disabledDates: holidays,
         enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
     });
 });
 $(function () {
     $('#datetimepicker1').datetimepicker({
       inline: true,
       sideBySide: true,
       daysOfWeekDisabled: ["0", "6"],
       disabledDates: holidays,
       enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
     });
 });
 $(function () {
     $('#datetimepicker2').datetimepicker({
       inline: true,
       sideBySide: true,
       daysOfWeekDisabled: ["0", "6"],
       disabledDates: holidays,
       enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
     });
 });
 $(function () {
     $('#datetimepicker3').datetimepicker({
       inline: true,
       sideBySide: true,
       daysOfWeekDisabled: ["0", "6"],
       disabledDates: holidays,
       enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
     });
 });

 $(document).ready(function() {

     function hideAll() {
         $('#green').css("display", "none");
         $('#magenta').css("display", "none");
         $('#yellow').css("display", "none");
         $('#blue').css("display", "none");
     }

     hideAll();

     $("#roomSelect").change(function() {
         switch ($('#roomSelect :selected').text()) {
             case "117A Green Room":
                 hideAll();
                 $('#green').css("display", "block");
                 console.log("green room");
                 break;
             case "117C Magenta Room":
                 hideAll();
                 $('#magenta').css("display", "block");
                 console.log("magenta room");
                 break;
             case "117D Blue Room":
                 hideAll();
                 $('#blue').css("display", "block");
                 console.log("blue room");
                 break;
             case "117E Yellow Room":
                 hideAll();
                 $('#yellow').css("display", "block");
                 console.log("yellow room");
                 break;
             default:
                 hideAll();
                 console.log('default');
                 break;
         }
     });
 });

 $(".form_datetime").datetimepicker({
     format: "dd MM yyyy - HH:ii P",
     showMeridian: true,
     autoclose: true,
     todayBtn: true
 });
