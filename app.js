$(function () {
  var el = $('input[data-provide="datepicker"]');

  el.datepicker({
    format: "yyyy年mm月dd日",
    language: "zh-CN",
    todayHighlight: true,
    todayBtn: true,
  });

  // add alt field for datepicker input

  // var realEl = $(`<input type="hidden">`);
  var realEl = $(`<input type="text">`);
  realEl.attr("id", el.attr("id")).attr("name", el.attr("name"));

  el.attr("id", "").attr("name", "");
  el.on("changeDate", (e) => {
    realEl.val(e.format("yyyy-mm-dd"));
  });
  el.before(realEl);
  el.datepicker("setDate", el.val());
});
