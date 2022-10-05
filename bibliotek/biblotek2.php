
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "biblotek";

// kopplar till databas
$conn = new mysqli($servername, $username, $password, $dbname);
// kollar om den blir fel när du kopplar
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);

}

if (isset($_POST['Bok'])) {
    $Titel = $_POST["Titel"];
    $ISBN = $_POST["ISBN"];
    echo $Titel;
    echo $ISBN;
    $sql = "INSERT INTO bok(Titel, ISBN) VALUES ('$Titel', '$ISBN')"; 
    if ($conn->query($sql)){
        
    }
}

// if (isset($_POST['Titel'])) {
//     if(!empty($_POST)){
//         $lana = $_POST["lana"];                    
//     }
//     $sql = "insert into bok(lana) value('$lana')"; 
// }

// if (isset($_POST['Titel'])) {
//     if(!empty($_POST)){
//         $lana = $_POST["lana"];                    
//     }
//     $sql = "insert into bok(lana) value('$lana')"; 
// }



?>