<?php
require_once 'dataBase.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (empty($_POST['name']) || empty($_POST['age'])  || empty($_POST['country'])   ) {
        echo json_encode(['success' => false, 'message' => 'Remplissez tous les champs!']);
        exit();
    }
    
    $name = $_POST['name'];
    $age = $_POST['age'];
    $country = $_POST['country'];
    
    try {
        $stmt = $pdo->prepare("INSERT INTO etudiant (name, age, country, ) VALUES (?, ?, ?,)");
        $stmt->execute([$name, $age, $country]);
        echo json_encode(['success' => true, 'message' => 'Inscription réussie']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erreur : ' . $e->getMessage()]);
    }
}
?>