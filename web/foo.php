<?php
$page_title = "Facebook page posts";
echo "<h1 class='page-header'>{$page_title}</h1>";

$fb_page_id = "1689564677988112";
$profile_photo_src = "https://graph.facebook.com/{$fb_page_id}/picture?type=square";
$access_token = "EAAEBY2R3PwcBAJzRZCfYbWi3RmZCpakLycEKf2I7gUJbaLuw9cCPLqGCZBlUXLJhKI4YfU5yQKHnpMHV1WSpcwPhzLv5E9fwgaePiN1Yi6HKMMX8yMLR3CKz7QRfa0P0gaf5TIsfJSOcFusCkQu9Qmc8aKLOdYZBpZBVZA1vySIAZDZD";
// dieser token ist 2 monate gültig :-/

$fields = "id,message,picture,link,name,description,type,icon,created_time,from,object_id";
$limit = 8;

$json_link = "https://graph.facebook.com/{$fb_page_id}/feed?access_token={$access_token}&fields={$fields}&limit={$limit}";
$json = file_get_contents($json_link);
/* var_dump(json_decode($json)); */


$obj = json_decode($json, true);
$feed_item_count = count($obj['data']);

for ( $x = 0; $x < $feed_item_count; $x++ ) {

  // to get the post id
  $id = $obj['data'][$x]['id'];
  $post_id_arr = explode('_', $id);
  $post_id = $post_id_arr[1];

  // user's custom message
  $message = isset($obj['data'][$x]['message']) ? $obj['data'][$x]['message'] : "keine Message";

  // picture from the link
  $picture = isset($obj['data'][$x]['picture']) ? $obj['data'][$x]['picture'] : "kein Bild";
  $picture_url_arr = explode('&url=', $picture);
  $picture_url = urldecode($picture_url_arr[1]);

  // link posted
  $link = $obj['data'][$x]['link'];

  // name or title of the link posted
  $name = $obj['data'][$x]['name'];

  $description = isset($obj['data'][$x]['description']) ? $obj['data'][$x]['description'] : "fubar";
  $type = $obj['data'][$x]['type'];

  // when it was posted
  $created_time = $obj['data'][$x]['created_time'];
  $converted_date_time = date( 'Y-m-d H:i:s', strtotime($created_time));
  $ago_value = time_elapsed_string($converted_date_time);

  // from
  $page_name = $obj['data'][$x]['from']['name'];

  // useful for photo
  $object_id = $obj['data'][$x]['object_id'];

  echo "<div class='profile-message'>{$message}</div>";
  echo "<hr />";
  echo "<div class='col-md-8'>";
  echo "<a href='{$link}' target='_blank' class='post-link'>";

  echo "<div class='post-content'>";

  if($type=="status"){
    echo "<div class='post-status'>";
    echo "View on Facebook";
    echo "</div>";
  }

  else if($type=="photo"){
    echo "<img src='https://graph.facebook.com/{$object_id}/picture' />";
  }

  else{
    if($picture_url){
      echo "<div class='post-picture'>";
      echo "<img src='{$picture_url}' />";
      echo "</div>";
    }

    echo "<div class='post-info'>";
    echo "<div class='post-info-name'>{$name}</div>";
    echo "<div class='post-info-description'>{$description}</div>";
    echo "</div>";
  }

  echo "</div>";
  echo "</a>";
}

// to get 'time ago' text
function time_elapsed_string($datetime, $full = false) {

  $now = new DateTime;
  $ago = new DateTime($datetime);
  $diff = $now->diff($ago);

  $diff->w = floor($diff->d / 7);
  $diff->d -= $diff->w * 7;

  $string = array(
    'y' => 'year',
    'm' => 'month',
    'w' => 'week',
    'd' => 'day',
    'h' => 'hour',
    'i' => 'minute',
    's' => 'second',
  );
  foreach ($string as $k => &$v) {
    if ($diff->$k) {
      $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
    } else {
      unset($string[$k]);
    }
  }

  if (!$full) $string = array_slice($string, 0, 1);
  return $string ? implode(', ', $string) . ' ago' : 'just now';
}

?>
