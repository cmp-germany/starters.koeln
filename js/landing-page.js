var innerDivElementsToBeCreated = {
  "slide--with-background": "slide--with-background__inner-div",
};


$(document).ready(function (){

  for (var key in innerDivElementsToBeCreated) {
    if (innerDivElementsToBeCreated.hasOwnProperty(key)) {
      $('.' + key).wrapInner( '<div class="' + innerDivElementsToBeCreated[key] + '"></div>' );
    }
  }


  // Background: resize the innerDivElement to fit be as big as the container
  $('.slide--with-background__inner-div').css('min-height', function () {
    if ($(this).parent().hasClass('slide--title')) {
      return 'none';
    }
    return $(this).parent().css('height');
  });
});
