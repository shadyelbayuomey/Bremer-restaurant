$(function() {
    // Adjust intro image height based on width.
    $(window).resize(function() {
      var img = $("#tm-intro-img");
      var imgWidth = img.width();

      // 640x425 ratio
      var imgHeight = (imgWidth * 425) / 640;

      if (imgHeight < 300) {
        imgHeight = 300;
      }

      img.css("min-height", imgHeight + "px");
    });
  });