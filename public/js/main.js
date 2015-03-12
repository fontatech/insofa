(function (global) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('open-fulltext').addEventListener('click', function () {
            this.addClass('hidden');
            this.parentNode.parentNode.addClass('go-animation');
            (new TypingText(this.parentNode.querySelector('.show-animation'), 5)).run();
        });

        document.getElementById('close-fulltext').addEventListener('click', function () {
            this.parentNode.querySelector('#open-fulltext').removeClass('hidden');
            this.parentNode.removeClass('go-animation');
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
