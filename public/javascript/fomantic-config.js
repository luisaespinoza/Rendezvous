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
  $('#userMeetings').children('div').each(function () {
    let isUnique = true
    let indexOfMatch = null
    let date = new Date(this.dataset.date)
    let tempDate2 = date
    let time = this.dataset.date.substring(this.dataset.date.length - 8)

    tempDate2.setHours(0, 0, 0, 0)

    meetings.forEach(meeting => {
      let tempDate = new Date(meeting.date)
      tempDate.setHours(0, 0, 0, 0)
      if (tempDate.valueOf() === tempDate2.valueOf()) {
        indexOfMatch = meetings.indexOf(meeting)
        isUnique = false
      }
    })

    if (isUnique) {
      meetings.push({ date: date, message: this.dataset.title + " @ " + time })
    } else {
      meetings[indexOfMatch].message += "|" + this.dataset.title + " @ " + time
    }
  });



  $('#inline_calendar').calendar({
    eventClass: "green",
    eventDates: meetings,
    onSelect: function (date, mode) {
      if (mode === 'day') return false;
    }
  });
});