(function (global) {
    'use strict';

    var Slider;

    Slider = function (id, images) {
        var element = document.getElementById(id),
            start,
            stop,
            instance,
            current = 0,
            slideNext,
            slidePrev,
            getNext,
            getPrev,
            nextSlide,
            prevSlide,
            locked = false;

        getNext = function () {
            var tot = images.length - 1;

            current = (current == tot)
                    ? 0
                    : current + 1;

            return images[current];
        }

        getPrev = function () {
            var tot = images.length - 1;

            current = (current == 0)
                    ? tot
                    : current - 1;

            return images[current];
        }

        slideNext = function () {
            if (locked == false) {
                locked = true;
            } else {
                return false;
            }

            var img = element.querySelector('.container-inner > img');
            img.style.webkitAnimationName = 'slide';
            img.style.webkitAnimationDuration = '3s';
            img.style.webkitAnimationCount = '1';

            setTimeout(function () {
                img.src = getNext();
            }, 1500);

            setTimeout(function () {
                img.style.webkitAnimationName = '';
                img.style.webkitAnimationDuration = '';
                img.style.webkitAnimationCount = '';
                locked = false;
            }, 3000);
        }

        slidePrev = function () {
            if (locked == false) {
                locked = true;
            } else {
                return false;
            }

            var img = element.querySelector('.container-inner > img');
            img.style.webkitAnimationName = 'slide';
            img.style.webkitAnimationDuration = '3s';
            img.style.webkitAnimationCount = '1';

            setTimeout(function () {
                img.src = getPrev();
            }, 1500);

            setTimeout(function () {
                img.style.webkitAnimationName = '';
                img.style.webkitAnimationDuration = '';
                img.style.webkitAnimationCount = '';
                locked = false;
            }, 3000);
        }

        start = function () {
            instance = setInterval(function () {
                slideNext();
            }, 8000);
        }

        stop = function () {
            try {
                clearInterval(instance);
            } catch (e) {}
        }

        nextSlide = function () {
            stop();
            slideNext();
        }

        prevSlide = function () {
            stop();
            slidePrev();
        }

        return {
            start: start,
            nextSlide: nextSlide,
            prevSlide: prevSlide
        }
    }

    global.Slider = Slider;
}(window));
