(function ($) {
  var originDatepicker = $.fn.datepicker;

  $.fn.datepicker = function (options) {
    this.each(function () {
      var el = $(this);

      var uniformFormat =
        options.uniformFormat || el.data("date-uniform-format") || "yyyy-mm-dd";

      // add alt field for datepicker input

      var name = el.attr("name");
      var dateEl = $(`<input type="hidden">`).attr("name", name);

      el.attr("name", null);

      originDatepicker.call(el, options).on("changeDate", (e) => {
        dateEl.val(e.format(uniformFormat));
      });

      originDatepicker.call(el, "setDate", el.val());

      el.parent().append(dateEl);
    });
  };
})(jQuery);
