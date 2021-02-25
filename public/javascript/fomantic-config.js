$( document ).ready(function() {
  $('.mini.modal').modal('show');
  $('table').tablesort();
  // $( `.modal-toggle`).click(function(){
  //   $('.ui.modal').modal('show');
  //   $('#standard_calendar').calendar();
  //   $('.ui.checkbox').checkbox();
  //   $('.selection.dropdown').dropdown();
  // })
  $( `.modal-toggle`).click(function(event){
    let id = event.target.attributes.value.value
    console.log(event)
    console.log(id)
    $(id).modal('show');
    $('#standard_calendar').calendar();
    $('.ui.checkbox').checkbox();
    $('.selection.dropdown').dropdown();
  })
});