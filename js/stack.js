$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'red'],
        anchors:['firstSlide', 'secondSlide'],
        scrollBar: true,
        afterLoad: function(anchorLink, index){
            $(this).find('.animated').each(function() {
              $(this).addClass('in')
            });
            $('.section:not(".active")').find('.animated').each(function() {
              $(this).removeClass('in');
            });
        },
        afterRender: function(){
        
        },
    });
});