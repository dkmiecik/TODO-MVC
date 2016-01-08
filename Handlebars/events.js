/**
 * Created by dkmiecik on 2015-11-14.
 */
function bindEvents() {
    if (window.addEventListener) {
        View.addButton.addEventListener('click', Controller.add, true);
        View.addInput.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) {
                Controller.add();
            }
        });
    }
    else if (window.attachEvent) {
        View.addButton.attachEvent('onclick', Controller.add, true);
        View.addInput.attachEvent('keypress', function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) {
                Controller.add();
            }
        });
    }
}