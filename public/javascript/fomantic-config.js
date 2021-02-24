$( document ).ready(function() {
  $('table').tablesort();
  $('#standard_calendar').calendar();
  $('#newMeeting').click(function(){
    $('.ui.modal').modal('show');
  })
});