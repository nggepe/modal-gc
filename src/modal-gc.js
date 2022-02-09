var gcmodal = {
  el: null,
  show() {
    $(this.el).addClass("show").find(".gc-modal-content").addClass("slide-in-right");
  },
  hide() {
    $(this.el).find(".gc-modal-content").removeClass("slide-in-right").addClass("slide-out-right")
    setTimeout(() => {
      $(this.el).removeClass("show").find(".gc-modal-content").removeClass("slide-out-right");
    }, 500);

  },
  init(el) {
    this.el = el
    const gcm = this
    $(this.el).find(".gc-modal-close").on("click", function (e) {
      gcm.hide()
    });
    $(this.el).on("click", function (e) {
      if (!$(e.target).hasClass('gc-modal-content') && !$(e.target).parents('.gc-modal-content').length) {
        gcm.hide()
      }
    })
  }
};

(function ($) {
  $.fn.gcModal = function (showMethod) {
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