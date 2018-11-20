// Initialize Accordion
$( function() {
  $( ".accordion" ).accordion({
    header: ".visible",
    heightStyle: "content",
    icons: false,
    // animate: 0,
    disabled: true,
    collapsible: true, // panels can be closed
    active: false // collapses all
  });
  mendAnchors();
} );

// Problem: Accordion alters height of Page and thus Position
// of Anchor-Links: It breaks Jump-Targets for Anchor-Links.
// However, this can be mended.
function mendAnchors() {
  if (window.location.hash.substr(1)) {
    var hash = "#" + (window.location.hash.substr(1)); // test for hash-link in url
    console.log("jumping to " + hash); 
    $(document).scrollTop( $(hash).offset().top );  
    console.log("jumped");
    // there is a problem with the top anchor-linked element getting overlapped by the header
    // let’s try to collapse the header after each jump.
    if (!header.classList.contains('shrink')) {
      header.classList.add('shrink');
      console.log('and header shrunk');
    }
  }
}

$(".accordion-trigger").click(function() {
    var index = $(this).parent().index() / 2;
    $(this).parent().parent().accordion("option", "active", index);
    //if (!$(this).parent().hasClass("ui-accordion-header-active")) {
      /* var index = $(this).parent().index() / 2;
      $(this).parent().parent().accordion("option", "active", index); */
      // $(this).children().first().text('Weniger Informationen');
    /*} else {
      console.log("schluss!");
      $(this).parent().parent().accordion({
        active: false
      });*/

      //$(this).children().first().text('Weitere Informationen');
    //}
    $(this).hide(300);
    $(this).parent().find('.upper-mail-link').hide(300);
});

$(".accordion-collapse").click(function() {
    console.log("schluss!");
    $(this).parent().parent().accordion({
      active: false
    });
      // $(this).children().first().text('Weitere Informationen');
    $(this).parent().parent().find('.accordion-trigger').show(300);
    $(this).parent().parent().find('.upper-mail-link').show(300);
});
