$( document ).ready(function() {
  $('table').tablesort();

  // let meetingId = "newMeeting"
  // let meetingId = null
  // $(document).ready(function () {
  //   $('.modal-selection-helper').mouseenter(function () {
  //     // "this" now referrs to button you hovered
  //     meetingId = $(this).attr("id")
  //     // alert(meetingId);
  //   });
  // });
  $( `.modal-toggle`).click(function(){
    $('.ui.modal').modal('show');
    $('#standard_calendar').calendar();
    $('.ui.checkbox').checkbox();
    $('.selection.dropdown').dropdown();
  })
});