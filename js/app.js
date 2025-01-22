(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function main() {
        initSwiper();
        initLangBox();
        initMobileMenu();
        initMessage();
        initPhoneBoxes();
        hideFixedHeader();
        function initSwiper() {
            new Swiper(".slider-water-care", {
                slidesPerView: "auto",
                spaceBetween: 24,
                loop: false,
                speed: 600,
                navigation: {
                    nextEl: ".slider-water-care__nav .swiper-button-next",
                    prevEl: ".slider-water-care__nav .swiper-button-prev"
                },
                pagination: {
                    el: ".slider-water-care__nav .swiper-pagination",
                    clickable: true
                }
            });
            new Swiper(".slider-hero", {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: false
                },
                effect: "fade",
                speed: 600,
                navigation: {
                    nextEl: ".slider-hero__nav .swiper-button-next",
                    prevEl: ".slider-hero__nav .swiper-button-prev"
                },
                pagination: {
                    el: ".slider-hero__nav .swiper-pagination",
                    clickable: true
                }
            });
        }
        function initLangBox() {
            let langCurrentElements = document.querySelectorAll(".lang__current");
            langCurrentElements.forEach(((langCurrent, index) => {
                let langBox = document.querySelectorAll(".lang__text-holder")[index];
                langCurrent.addEventListener("click", (() => {
                    langCurrent.classList.toggle("active");
                    langBox.classList.toggle("active");
                }));
            }));
        }
        function updateMenuPosition() {
            let menu = document.querySelector(".header__menu");
            let fixHeader = document.querySelector(".fixed-header");
            if (menu && fixHeader && menu.classList.contains("active")) {
                let heightFixHeader = fixHeader.offsetHeight;
                menu.style.top = `${heightFixHeader}px`;
            } else if (menu) menu.style.top = "";
        }
        function initMobileMenu() {
            let menuButton = document.querySelector(".header__menu-button");
            let menu = document.querySelector(".header__menu");
            menuButton.addEventListener("click", (() => {
                document.body.classList.toggle("lock");
                if (menuButton.classList.contains("_icon-List")) {
                    menuButton.classList.remove("_icon-List");
                    menuButton.classList.add("_icon-X");
                } else {
                    menuButton.classList.add("_icon-List");
                    menuButton.classList.remove("_icon-X");
                }
                menu.classList.toggle("active");
                updateMenuPosition();
            }));
            window.addEventListener("resize", updateMenuPosition);
        }
        function initMessage() {
            let messageBlock = document.querySelector(".message");
            let messageClose = document.querySelector(".message__close");
            messageClose.addEventListener("click", (() => {
                if (messageBlock) {
                    messageBlock.classList.add("hide");
                    updateMenuPosition();
                }
            }));
        }
        function initPhoneBoxes() {
            let phoneBoxes = document.querySelectorAll(".contacts__phone.phone-box");
            phoneBoxes.forEach((phoneBox => {
                let phoneItem = phoneBox.querySelector(".phone-box__phone.contacts-link._icon-CaretDown");
                let phoneList = phoneBox.querySelector(".phone-box__list");
                if (phoneItem && phoneList) {
                    phoneItem.addEventListener("mouseenter", (() => {
                        phoneList.classList.add("show");
                    }));
                    phoneList.addEventListener("mouseleave", (() => {
                        phoneList.classList.remove("show");
                    }));
                }
            }));
        }
        function hideFixedHeader() {
            if (window.matchMedia("(min-width: 1280px)").matches) {
                let fixedHeader = document.querySelector(".fixed-header");
                let lastScrollTop = 0;
                window.addEventListener("scroll", (function() {
                    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                    if (currentScroll > lastScrollTop) fixedHeader.style.top = "-100%"; else fixedHeader.style.top = "0";
                    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
                }), false);
            }
        }
    }
    function additional() {
        reviewsSwiper();
        Seo();
        Accordion();
        HoverTelefone();
        Popup();
        function reviewsSwiper() {
            new Swiper(".reviews__swiper", {
                slidesPerView: "auto",
                spaceBetween: 24,
                loop: false,
                speed: 600,
                navigation: {
                    nextEl: ".reviews__navigation .reviews-button-next",
                    prevEl: ".reviews__navigation .reviews-button-prev"
                },
                pagination: {
                    el: ".reviews__navigation .reviews-pagination",
                    clickable: true
                }
            });
        }
        function Seo() {
            var container = document.getElementById("seo__container");
            var button = document.getElementById("seo__btn");
            button.addEventListener("click", (function() {
                if (container.style.maxHeight) {
                    container.style.maxHeight = null;
                    button.innerHTML = "Розгорнути текст";
                    button.classList.add("collapsed");
                } else {
                    container.style.maxHeight = container.scrollHeight + "px";
                    button.innerHTML = "Згорнути текст";
                    button.classList.remove("collapsed");
                }
            }));
        }
        function Accordion() {
            $(".accordion-header").click((function() {
                if ($(this).closest(".header").length) {
                    var isAlreadyOpen = $(this).hasClass("active");
                    $(".header .accordion-header").not(this).removeClass("active").next(".accordion-content").slideUp();
                    if (!isAlreadyOpen) $(this).addClass("active").next(".accordion-content").slideDown(); else $(this).removeClass("active").next(".accordion-content").slideUp();
                } else {
                    var content = $(this).next(".accordion-content");
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                        content.slideUp();
                    } else {
                        content = $(this).next(".accordion-content");
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                            content.slideUp();
                        } else {
                            $(this).addClass("active");
                            content.slideDown();
                        }
                    }
                }
            }));
        }
        function HoverTelefone() {
            if (window.innerWidth > 1280) $(".click__address-container").hover((function() {
                $(this).toggleClass("expanded");
            }));
            $(window).resize((function() {
                if (window.innerWidth > 1280) $(".click__address-container").hover((function() {
                    $(this).toggleClass("expanded");
                })); else $(".click__address-container").off("mouseenter mouseleave");
            }));
        }
        function Popup() {
            $("#popup").fadeIn();
            $(".popup__btn, #popup").click((function(e) {
                if ($(e.target).hasClass("popup__btn")) closePopup(); else if ($(e.target).attr("id") === "popup") closePopup();
            }));
            function closePopup() {
                $("#popup").css("right", "-1000%");
                $(".body").removeClass("popup-open");
                $("body").removeClass("popup-open");
            }
            setTimeout((function() {
                $("#popup").css("right", "0");
                $(".body").addClass("popup-open");
                $("body").addClass("popup-open");
            }), 2e3);
        }
    }
    document.addEventListener("DOMContentLoaded", (function() {
        main();
        additional();
    }));
    window["FLS"] = true;
    isWebp();
})();