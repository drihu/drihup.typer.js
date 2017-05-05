'use strict';

/**
 * ----------------------------------------------------------------------
 * Typer (v0.0.0): typer.js
 * Licensed under MIT
 * ----------------------------------------------------------------------
 */

var Typer = function ($) {
  $.fn.type = function (content, time, callback) {
    var i = 0;
    var el = this;

    if (typeof content === 'string') {
      content = content || this.text();
      time = time || 200;
      callback = callback || null;

      if (typeof time !== 'number') {
        time = 200;
      }
    } else {
      throw new Error('You need to specify a content value.');
    }

    var clear = function clear() {
      el.text('');
      i = 0;
    };

    var typeLetter = function typeLetter() {
      if (i < content.length) {
        el.text(content.substr(0, i + 1));
        i += 1;
      }

      if (i === content.length) {
        console.log('It has been already typed.');
      }
    };

    var animate = function animate() {
      if (i === content.length) {
        clear();
      }

      typeLetter();

      if (i < content.length) {
        setTimeout(animate, time);
      } else if (typeof callback === 'function') {
        callback();
      }
    };

    animate();

    return this;
  };
}(jQuery);
