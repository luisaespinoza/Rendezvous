$( document ).ready(function() {
  $('table').tablesort();
  
  // $( `.modal-toggle`).click(function(event){
    //   let id = event.target.attributes.value.value
    //   console.log(event)
    //   console.log(id)
    //   $(id).modal('show');
    //   $('#standard_calendar').calendar();
    //   $('.ui.checkbox').checkbox();
    //   $('.selection.dropdown').dropdown();
    // })
    
    $( `.modal-toggle`).click(function(event){
      let id = "#meeting" + event.target.attributes.value.value
      let caldendarId = "#calendar" + event.target.attributes.value.value
      $(id).modal('show');
      $(caldendarId).calendar();
      $('.ui.checkbox').checkbox();
      $('.selection.dropdown').dropdown();
    })
    $(".delete-toggle").click(function(event){
      let id = "#delete" + event.target.attributes.value.value
      $(id).modal('show');
    })
    
});