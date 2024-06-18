$(".transition").click(function (event) {
  event.preventDefault(); // Prevent the default link behavior
  var href = $(this).attr("href"); // Get the href attribute

  // Animate content
  $(".container").addClass("animate_content");
  $(".sidenav").fadeOut(100).delay(2800).fadeIn();
  print("Animated content")
  
  setTimeout(function () {
    $(".container").removeClass("animate_content");
  }, 3200);

  // Remove fadeIn class after 1500ms
  setTimeout(function () {
    $(".container").removeClass("fadeIn");
  }, 1500);

  // On click, show page after 1500ms
  setTimeout(function () {
    window.location.href = href; // Redirect to the clicked link's href value
  }, 1500);
});
  
  /*
  $(".projects_link").click(function () {
    setTimeout(function () {
      $(".projects").addClass("fadeIn");
    }, 1500);
  });
  
  $(".skills_link").click(function () {
    setTimeout(function () {
      $(".skills").addClass("fadeIn");
    }, 1500);
  });
  
  $(".about_link").click(function () {
    setTimeout(function () {
      $(".about").addClass("fadeIn");
    }, 1500);
  });
  
  $(".contact_link").click(function () {
    setTimeout(function () {
      $(".contact").addClass("fadeIn");
    }, 1500);
  });*/