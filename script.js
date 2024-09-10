$(document).ready(function () {
  $("#top-priority").change(function () {
    let input = $(this).val();
    if (input !== "") {
      $(".tp-list").append(
        "<li>" +
          input +
          "<i class='fas fa-check'></i><i class='fas fa-trash-can'></i></li>"
      );
      $(this).val("");
    } else {
      console.log("Do nothing!");
    }
  });
  $("#common-priority").change(function () {
    let input = $(this).val();
    if (input !== "") {
      $(".cp-list").append(
        "<li>" +
          input +
          "<i class='fas fa-check'></i><i class='fas fa-trash-can'></i></li>"
      );
      $(this).val("");
    } else {
      console.log("Do nothing!");
    }
  });
  $("ul").on("click", ".fa-trash-can", function () {
    $(this).parent("li").fadeOut();
  });
  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked");
  });

  let today = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = today.toLocaleDateString(undefined, options);
  $("#date-input").text(formattedDate);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  $("#today-is").text(`${daysOfWeek[today.getDay()]}`);
});
