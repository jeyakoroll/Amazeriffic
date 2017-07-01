const main = function() {
  "use strict";
  $(".comment-input button").on("click", function (e){
    // const
    //       $new_comment = $('<p>'), // create parent node
    //       comment_text = $(".comment-input input").val(); // save text from the input
    //
    // $new_comment.text(comment_text); // append text in the node
    // $('.comments').append($new_comment); // view node in comments

  let $new_comment = '';
  if($('.comment-input input').val() !== '') {
    $new_comment = $('<p>').text($('.comment-input input').val());
    $('.comments').append($new_comment);
  }

  });
};
$(document).ready(main);
