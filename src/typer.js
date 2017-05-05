/**
 * ----------------------------------------------------------------------
 * Typer (v0.0.0): typer.js
 * Licensed under MIT
 * ----------------------------------------------------------------------
 */

const Typer = (($) => {
  $.fn.type = function (content, time, callback) {
    let i = 0;
    let el = this;

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

    let clear = function () {
      el.text('');
      i = 0;
    };

    let typeLetter = function () {
      if (i < content.length) {
        el.text(content.substr(0, i + 1));
        i += 1;
      }

      if (i === content.length) {
        console.log('It has been already typed.');
      }
    };

    let animate = function () {
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
})(jQuery);

export default Typer;
