<?php
/**
 * Created by PhpStorm.
 * User: Sherlock
 * Date: 5/21/2017
 * Time: 10:39 AM
 */

if(isset($_GET["suggestion"])){
    $suggestion = $_GET["suggestion"];
    file_put_contents("suggestion.txt","$suggestion;|;0\n",FILE_APPEND);
}

if(isset($_GET["getSuggestion"])){
    $lines =  explode("\n",file_get_contents("suggestion.txt"));
    $array = [];
    foreach($lines as $line){
        $values = explode(";|;",$line);
        $array[] = array(
            "suggestion"=> $values[0],
            "vote"=> $values[1]
        );
    }
    echo json_encode($array);
}

if(isset($_GET["like"])){
    $like = $_GET["like"];
    $lines =  explode("\n",file_get_contents("suggestion.txt"));
    $array = [];
    foreach($lines as &$line){
        $values = explode(";|;",$line);
        if($like==$values[0]){
            $values[1] = $values[1]+1;
            $line = $values[0] . ";|;". $values[1];
            echo $line;
        }
    }
    file_put_contents("suggestion.txt",implode("\n",$lines));
}