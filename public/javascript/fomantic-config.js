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
            var month = settings.text.months[date.getMonth()];
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
    let time = this.dataset.date.substring(16,34)
    meetings.push({date: new Date(this.dataset.date), message: this.dataset.title + " |\n" + time})
  });

  $('#inline_calendar').calendar({
    eventClass: "green",
    eventDates: meetings,
    onSelect: function(date, mode) {
      if (mode === 'day') return false;
    }
  });
});