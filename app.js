$(function () {
  var el = $('input[data-provide="datepicker"]');

  el.datepicker({
    format: "yyyy年mm月dd日",
    todayHighlight: true,
    language: "zh-CN",
    todayBtn: true
  }).on("changeDate", (e) => {
    dateEl.val(e.format("yyyy-mm-dd"));
  });

  var name = el.attr("name");
  var dateEl = $(`<input type="text" name="${name}">`);
  el.parent().append(dateEl);
  el.data("datepicker").setDate(el.val());
});
