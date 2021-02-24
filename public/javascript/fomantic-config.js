$( document ).ready(function() {
  $('table').tablesort();
  $('#newMeeting').click(function(){
    $('.ui.modal').modal('show');
    $('#standard_calendar').calendar();
    $('.ui.checkbox').checkbox();
    $('.selection.dropdown').dropdown();
  })
});