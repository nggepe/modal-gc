var gcmodal = {
  el: null,
  show() {
    $(this.el).addClass("show").find(".modal-gc-content").addClass("slide-in-right");
  },
  hide() {
    $(this.el).find(".modal-gc-content").removeClass("slide-in-right").addClass("slide-out-right")
    setTimeout(() => {
      $(this.el).removeClass("show").find(".modal-gc-content").removeClass("slide-out-right");
    }, 500);

  },
  init(el) {
    this.el = el
    const gcm = this
    $(this.el).find(".modal-gc-close").on("click", function (e) {
      gcm.hide()
    });
    $(this.el).on("click", function (e) {
      if (!$(e.target).hasClass('modal-gc-content') && !$(e.target).parents('.modal-gc-content').length) {
        gcm.hide()
      }
    })
  }
};

(function ($) {
  $.fn.modalGC = function (showMethod) {
    gcmodal.init(this)
    if (showMethod == "show") {
      gcmodal.show();
    }
    if (showMethod == "hide") {
      gcmodal.hide();
    }
    return gcmodal;
  }
})(jQuery);