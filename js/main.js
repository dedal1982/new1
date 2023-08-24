var slider1 = new Swiper(".header__banners", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var slider2 = new Swiper(".services__items", {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    730: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    810: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1395: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var slider3 = new Swiper(".trends__slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: -10,
  centeredSlides: true,
  coverflowEffect: {
    stretch: 0,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: -125,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: -70,
    },
    1010: {
      slidesPerView: 5,
      spaceBetween: -10,
    },
  },
});

var slider4 = new Swiper(".office__slider", {
  loop: true,
  slidesPerView: 9,
  spaceBetween: -15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: -15,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: -15,
    },
    700: {
      slidesPerView: 5,
      spaceBetween: -15,
    },
    900: {
      slidesPerView: 6,
      spaceBetween: -15,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: -15,
    },
    1570: {
      slidesPerView: 9,
      spaceBetween: -15,
    },
  },
});

var slider5 = new Swiper(".license__slider", {
  loop: true,
  slidesPerView: 7,
  spaceBetween: -15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.2,
      spaceBetween: -15,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: -15,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: -15,
    },
    900: {
      slidesPerView: 5,
      spaceBetween: -15,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: -15,
    },
    1570: {
      slidesPerView: 7,
      spaceBetween: -15,
    },
  },
});

var slider6 = new Swiper(".news__slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3.4,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});

var slider7 = new Swiper(".feedback__slider", {
  loop: false,
  slidesPerView: 2.8,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 1.4,
    },
    1000: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 2.4,
    },
    1450: {
      slidesPerView: 2.8,
    },
  },
});

var slider8 = new Swiper(".team__slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 80,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    710: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 4,
    },
  },
});

var slider9 = new Swiper(".before-after__items", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    730: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1395: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var slider10 = new Swiper(".ourworks__items", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    730: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1395: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

$(function () {
  $(".menu__burger").on("click", function () {
    $(".menu__burger").toggleClass("menu__open");
    $(".menu").toggleClass("menu__open");
  });
});

$(".tab-link").click(function () {
  var tabID = $(this).attr("data-tab");

  $(this).addClass("active").siblings().removeClass("active");

  $("#tab-" + tabID)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

// select
$(".select").each(function () {
  const _this = $(this),
    selectOption = _this.find("option"),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(":selected"),
    duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $("<div>", {
    class: "new-select",
    text: _this.children("option:disabled").text(),
  }).insertAfter(_this);

  const selectHead = _this.next(".new-select");
  $("<div>", {
    class: "new-select__list",
  }).insertAfter(selectHead);

  const selectList = selectHead.next(".new-select__list");
  for (let i = 1; i < selectOptionLength; i++) {
    $("<div>", {
      class: "new-select__item",
      html: $("<span>", {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr("data-value", selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find(".new-select__item");
  selectList.slideUp(0);
  selectHead.on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      selectList.slideDown(duration);

      selectItem.on("click", function () {
        let chooseItem = $(this).data("value");

        $("select").val(chooseItem).attr("selected", "selected");
        selectHead.text($(this).find("span").text());

        selectList.slideUp(duration);
        selectHead.removeClass("on");
      });
    } else {
      $(this).removeClass("on");
      selectList.slideUp(duration);
    }
  });
});
