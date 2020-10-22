function GetAllItems() {
  $.post("/page_resources/php/marketplace.remote.php", {type:"yang", action:"get_items", category_id:"9"}, function(d){$("#newcontainer").html(d);}, "html");
}
