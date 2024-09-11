<?php
// Incluir el archivo de conexión a la base de datos
include 'db_connection.php';

// Obtener los datos del formulario
$cedula_identidad = $_POST['userCI'];
$nombre = $_POST['userFirstName'];
$apellido = $_POST['userLastName'];
$contraseña = password_hash($_POST['userPassword'], PASSWORD_DEFAULT);
$correo = $_POST['userEmail'];
$rol = $_POST['userRole'];

// Opcional: Puedes obtener cod_gest y cod_carrera de alguna otra lógica o entrada de formulario

// Insertar los datos en la base de datos
$sql = "INSERT INTO `USUARIO` (`cedula_identidad`, `correo`, `nombre`, `apellido`, `contrasena`, `rol`) 
        VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssssss', $cedula_identidad, $correo, $nombre, $apellido, $contraseña, $rol);

if ($stmt->execute()) {
    echo "Usuario registrado con éxito.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
