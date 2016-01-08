/**
 * Created by dkmiecik on 2015-11-14.
 */

var View = (function () {
    "use strict";


    var setup = function () {
        View.addInput = document.getElementById('add-input');
        View.addButton = document.getElementById('add-button');
        View.itemsList = document.getElementById('items-list');
        View.counter = document.getElementById('counter');
        View.tooltip = document.getElementById('tooltip');
        View.counter.innerText = 'Items: ' + model.items.length;
    };

    var renderItem = function (item) {
        var node = createNode(item);
        View.itemsList.appendChild(node);
        View.counter.innerText = 'Items: ' + model.items.length;
    };

    var removeItem = function (node) {
        View.itemsList.removeChild(node);
        View.counter.innerText = 'Items: ' + model.items.length;
    };

    var clearInput = function () {
        View.addInput.value = '';
    };

    var createNode = function (item) {
        var node = document.createElement('div');
        node.className = 'row';
        var paragraph = document.createElement('p');
        paragraph.innerText = item;
        var button = document.createElement('button');
        button.id = model.items.length.toString();
        button.className = 'remove-button'
        button.addEventListener('click', Controller.remove, true);
        node.appendChild(paragraph);
        node.appendChild(button);
        return node;
    };

    return {

        setup: function () {
            setup();
        },

        render: function (item) {
            renderItem(item);
        },

        remove: function (node) {
            removeItem(node);
        },

        clear: function () {
            clearInput();
        }
    };
}());