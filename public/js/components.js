(function (global) {
    'use strict';

    HTMLElement.prototype.addClass = function (cls) {
        var classes = this.className.split(' ');

        if (classes.indexOf(cls) != -1) {
            return false;
        }

        if (classes[0] == '') {
            classes[0] = cls;
        } else {
            classes.push(cls);
        }

        this.className = classes.join(' ');
    }

    HTMLElement.prototype.removeClass = function (cls) {
        var classes = this.className.split(' ');

        if (classes.indexOf(cls) != -1) {
            classes.splice(classes.indexOf(cls), 1);
        }

        this.className = classes.join(' ');
    }

    HTMLElement.prototype.hasClass = function (cls) {
        var classes = this.className.split(' ');
        return classes.indexOf(cls) != -1;
    }

    HTMLElement.prototype.toggleClass = function (cls) {
        var classes = this.className.split(' ');
        if (classes.indexOf(cls) != -1) {
            this.removeClass(cls);
        } else {
            this.addClass(cls);
        }
    }

    NodeList.prototype.each = function (clbk) {
        for (var index in this) {
            if (this[index] instanceof HTMLElement) {
                clbk.call(this[index]);
            }
        }
    }
}(window));
