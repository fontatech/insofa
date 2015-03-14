(function (global) {
    'use strict';

    var openPopup,
        closePopup,
        openForm,
        closeForm,
        callTelefono;

    callTelefono = function (evt) {
        console.log('clicked');

        if (this.hasClass('called')) {
            return true;
        }

        if (this.hasClass('visible')) {
            this.addClass('called');
        } else {
            evt.preventDefault();
            this.setAttribute('href', 'tel: +390438995611');
            this.querySelector('span').innerText = '+39 0438 995611';
            this.addClass('visible');
        }
    }

    openPopup = function () {
        document.getElementById('popup-img').querySelector('.inner > img').src = document.getElementById('prodotto').querySelector('.container-inner > img').src;
        document.getElementById('popup-shadow').addClass('open');
        document.getElementById('popup-img').addClass('open');
    }

    closePopup = function () {
        document.getElementById('popup-shadow').removeClass('open');
        document.getElementById('popup-img').removeClass('open');
    }

    openForm = function () {
        document.getElementById('popup-shadow').addClass('open');
        document.getElementById('popup-form').addClass('open');
    }

    closeForm = function () {
        document.getElementById('popup-shadow').removeClass('open');
        document.getElementById('popup-form').removeClass('open');
    }

    document.addEventListener('DOMContentLoaded', function () {
        try {
            document.getElementById('open-fulltext').addEventListener('click', function () {
                this.addClass('hidden');
                this.parentNode.parentNode.addClass('go-animation');
                (new TypingText(this.parentNode.querySelector('.show-animation'), 5)).run();
            });

            document.getElementById('close-fulltext').addEventListener('click', function () {
                this.parentNode.querySelector('#open-fulltext').removeClass('hidden');
                this.parentNode.removeClass('go-animation');
            });
        } catch (e) {
            console.log('not in home');
        }

        try {
            document.getElementById('open-img').addEventListener('click', openPopup);
            document.getElementById('close-img').addEventListener('click', closePopup);
            document.getElementById('informazioni').addEventListener('click', openForm);
            document.getElementById('close-form').addEventListener('click', closeForm);

            var slider = new Slider('prodotto', ['img/topimg.png', 'img/prodotti1.png', 'img/prodotti2.png', 'img/profiletop.png']);
            slider.start();

            document.getElementById('goleft').addEventListener('click', slider.prevSlide);
            document.getElementById('goright').addEventListener('click', slider.nextSlide);
        } catch (e) {}

        document.getElementById('telefono').addEventListener('click', callTelefono);

        /**
         * Zoom desktop
         */
        document.querySelector('#popup-img .inner').addEventListener('mousemove', function (evt) {
            var img = this.querySelector('.zoomable');

            var containerPos = {
                x: this.offsetTop,
                width: this.offsetWidth
            };

            var mousePos = {
                x: evt.x - containerPos.x
            }

            var imgWidth = img.offsetWidth

            var maxTranslate = imgWidth - containerPos.width;

            var rapporto = maxTranslate / containerPos.width;

            if (maxTranslate < 0) {
                img.style.transform = 'translateX(' + (Math.abs(maxTranslate) / 2) + 'px)';
                img.style.webkitTransform = 'translateX(' + (Math.abs(maxTranslate) / 2) + 'px)';
                img.style.mozTransform = 'translateX(' + (Math.abs(maxTranslate) / 2) + 'px)';
            } else {
                img.style.transform = 'translateX(' + -(mousePos.x * rapporto) + 'px)';
                img.style.webkitTransform = 'translateX(' + -(mousePos.x * rapporto) + 'px)';
                img.style.mozTransform = 'translateX(' + (mousePos.x * rapporto) + 'px)';
            }
        });
    });

    window.addEventListener('load', function () {
        var last;

        document.querySelectorAll('#grid .container').each(function () {
            this.style.top = (this.offsetTop) + 'px';
            this.style.left = (this.offsetLeft) + 'px';
            last = this;
        });

        document.querySelector('#grid').style.height = (parseInt(last.style.top) + last.clientHeight) + 'px';

        document.querySelectorAll('#grid .container').each(function () {
            this.style.position = 'absolute';
        });
    });

    window.addEventListener('resize', function () {
        setTimeout(function () {
            var last;

            document.querySelectorAll('#grid .container').each(function () {
                this.style.position = '';
            });

            document.querySelectorAll('#grid .container').each(function () {
                this.style.top = (this.offsetTop) + 'px';
                this.style.left = (this.offsetLeft) + 'px';
                last = this;
            });

            document.querySelector('#grid').style.height = (parseInt(last.style.top) + last.clientHeight) + 'px';

            document.querySelectorAll('#grid .container').each(function () {
                this.style.position = 'absolute';
            });
        }, 250);
    });
    
}(window));
