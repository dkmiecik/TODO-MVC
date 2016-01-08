/**
 * Created by dkmiecik on 2015-11-14.
 */

var Observer = (function () {
    "use strict";

    var subject = new Subject();

    function addObserver( newObserver ) {
        subject.observe( newObserver );
    };

    function removeObserver( deleteObserver ) {
        subject.unobserve( deleteObserver );
    };

    return {
        addObserver: function(newObserver) {
            addObserver(newObserver);
        },

        removeObserver: function(deleteObserver) {
            removeObserver(deleteObserver);
        }
    };
}());