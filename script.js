$(document).ready(function () {
 $('#selectable-list a').on('click', function (e) {
 e.preventDefault();
$(this).toggleClass('active');
 });

});
   