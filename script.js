// Add your answer here

var $lesson = $('.lesson');
$('.text-contents').hide();

$lesson.hover(function() {
    $(this).children('p').show();

}, function() {
    $(this).children('p').hide();

}); 