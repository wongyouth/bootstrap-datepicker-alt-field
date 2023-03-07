$(function () {
  $("input.datepicker").each((_, item) => {
    var el = $(item);

    // add alt field for datepicker input

    var name = el.attr("name");
    // var dateEl = $(`<input type="hidden" name="${name}">`);
    var dateEl = $(`<input type="text" name="${name}">`);

    el.datepicker({
      format: "yyyy年mm月dd日",
      language: "zh-CN",
    }).on("changeDate", (e) => {
      dateEl.val(e.format("yyyy-mm-dd"));
    });

    el.datepicker("setDate", el.val());

    el.parent().append(dateEl);
  });
});
