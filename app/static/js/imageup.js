var imageUrl = new Array();

        imageUrl[0] = 'https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg';

        imageUrl[1] = 'https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg';

        imageUrl[2] = 'http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg';

        imageUrl[3] = 'https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg';

        imageUrl[4] = 'https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg';

        imageUrl[5] = 'http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg';
       
$(document).on('input change', '#slider', function() {//listen to slider changes
    var v=$(this).val();//getting slider val
   $('#sliderStatus').html( $(this).val() );
  $("#img").prop("src", imageUrl[v]);
});
