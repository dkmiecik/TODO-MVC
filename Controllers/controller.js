/**
 * Created by dkmiecik on 2015-11-14.
 */
var Controller = (function () {
    "use strict";

    var addItem = function() {
        var item = document.getElementById('add-input').value;
        if (item === '')
            View.tooltip.className = 'show';
        else {
            View.tooltip.className = '';
            model.items.push(item);
            Observer.addObserver(model.items[model.items.indexOf(item)]);
            View.render(item);
            View.clear();
        }
    };

    var removeItem = function(obj) {
        var index = model.items.indexOf(obj.parentNode.firstChild.textContent);
        Observer.removeObserver(model.items[index]);
        model.items.splice(index, 1);
        View.remove(obj.parentNode);
    };

    return {
        add: function() {
            addItem();
        },

        remove: function() {
            removeItem(this);
        }
    };
}());
