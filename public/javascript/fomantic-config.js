$(document).ready(function () {
  $('table').tablesort();

  $('.modal-toggle').click(function (event) {
    let id = "#meeting" + event.target.attributes.value.value
    let calendarId = "#calendar" + event.target.attributes.value.value
    let preSelectedDate = $(calendarId).attr("value")

    $(id).modal('show');
    $(calendarId).calendar(
      {
        eventClass: "green",
        eventDates: [
          {
            date: new Date(preSelectedDate),
            message: preSelectedDate
          }
        ],
        formatter: {
          date: function (date, settings) {
            if (!date) return '';
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return month + '/' + day + '/' + year;
          }
        }
      }
    );
    $('.ui.checkbox').checkbox();
    $('.selection.dropdown').dropdown();
  })

  $(".delete-toggle").click(function (event) {
    let id = "#delete" + event.target.attributes.value.value
    $(id).modal('show');
  })

  let meetings = []
  let meets = []
  let meetsTemp = []
  $('#userMeetings').children('div').each(function () {
    let isUnique = true
    let indexOfMatch = null
    let date = new Date(this.dataset.date)
    let tempDate2 = date
    let time = this.dataset.date.substring(this.dataset.date.length - 8)
    
    tempDate2.setHours(0, 0, 0, 0)

    console.log(date)
    console.log("---------------", tempDate2)
    
    meets.forEach(dateObj => {
      let tempDate = dateObj
      tempDate.setHours(0, 0, 0, 0)
      console.log("++++++++++++", tempDate)

      if (tempDate.valueOf() === tempDate2.valueOf()) {
        indexOfMatch = meets.indexOf(dateObj)
        isUnique = false
      }

    });



    if (isUnique) {
      meets.push(date)
      meetings.push({ date: new Date(date), message: this.dataset.title + " : " + time })
    } else {
      meetings[indexOfMatch].message += " | " + this.dataset.title + " : " + time
    }



    // let time = this.dataset.date.substring(this.dataset.date.length - 8)
    // meetings.push({ date: new Date(this.dataset.date), message: this.dataset.title + " |\n" + time })
  });

  meetings.sort(function(date1,date2){
    return date1.date.getTime() - date2.date.getTime()
  })


  $('#inline_calendar').calendar({
    eventClass: "green",
    eventDates: meetings,
    onSelect: function (date, mode) {
      if (mode === 'day') return false;
    }
  });
});