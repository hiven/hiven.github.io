<?php
   
$url_components = parse_url($url);
 
parse_str($url_components['query'], $params);
     
echo $params['bounding-box'];
echo $params['geojson'];
echo $params['key'];

?>
