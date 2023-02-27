$(function () {
  var el = $('input[data-provide="datepicker"]');

  el.datepicker({
    format: "yyyy年mm月dd日",
    language: "zh-CN",
    todayHighlight: true,
    todayBtn: true
  });

  // add alt field for datepicker input

  var name = el.attr("name");
  // var dateEl = $(`<input type="hidden" name="${name}">`);
  var dateEl = $(`<input type="text" name="${name}">`);
  el.on("changeDate", (e) => {
    dateEl.val(e.format("yyyy-mm-dd"));
  });
  el.parent().append(dateEl);
  el.datepicker("setDate", el.val());
});
