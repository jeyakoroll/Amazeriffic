const main = () => {
  "use strict";
// Variables
let toDos = [
  'Закончить читать эту книгу',
  'Вывести Барбоса на прогулку в парк',
  'Ответить на почту',
  'Подготовится к тринировке в понедельник',
  'Обновить несколько новых задач',
  'Купить продукты'
],
  toDosNew = [
  'Сделать несколько макетов по верстке',
  'Научится писать приложения на React',
  'Выучить азы по NodeJS',
  'Помочь другу с ремонтом'
];

// Function
  // Make all tabs inactive
  // Make the first tab active
  // Clear the main content to redefine it
  // Returns false since we do not follow the link

$(".tabs a span").toArray().forEach((elem) => {
  // Create a click handler for this item
  $(elem).on("click", () => {
    let $elem = $(elem),
        $content = $("<ul>"),
        $input = $("<input>").addClass("input"),
        $button = $("<button type='submit' name='addTask'>").
                  addClass("button").
                  text("Добавить");


    $(".tabs span").removeClass("active");
    $elem.addClass("active");
    $("main .content").empty();
    // content for first tab
      if ($elem.parent().is(":nth-child(1)")) {
        $content;
        toDosNew.forEach((todo) => {
          $content.append($("<li>").text(todo));
        });
        $("main .content").append($content);
        // content for second tab
      } else if ($elem.parent().is(":nth-child(2)")) {
        $content;
        toDos.forEach((todo) => {
          $content.append($('<li>').text(todo));
        });
        $("main .content").append($content);
        // content for third tab
      } else if ($elem.parent().is(":nth-child(3)")) {
        $input, $button;
        const sendNewTask = () => {
          toDosNew.push($input.val());
          $input.val("");
        };
        $button.on("click", () => {
          sendNewTask();
        });
        $input.on("keypress", (e) => {
          if (e.keyCode === 13 && $input.val() !== "") {
            sendNewTask();
          }
        });

        $("main .content").append($input, $button);
      }
    return false;
  });
});



$(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);
