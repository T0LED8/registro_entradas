let html5QrCode;

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'adm' && password === '123') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert('Usuario o Contraseña Incorrectos');
    }
}

function showMenu() {
    document.getElementById('registerUserForm').style.display = 'none';
    document.getElementById('registerStudentForm').style.display = 'none';
    document.getElementById('registerEntryForm').style.display = 'none';
    document.getElementById('historyForm').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function showRegisterUserForm() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('registerUserForm').style.display = 'block';
}

function showRegisterStudentForm() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('registerStudentForm').style.display = 'block';
    startCamera();
}

function showRegisterEntryForm() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('registerEntryForm').style.display = 'block';
}

function showHistoryForm() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('historyForm').style.display = 'block';
}

function registerUser() {
    // Implementar el registro del usuario
    alert('Registro de usuario exitoso');
    showMenu();
}
function registerUser() {
    var form = document.getElementById('userForm');
    var formData = new FormData(form);

    fetch('registro_usuario.php', { // URL del script PHP que maneja la base de datos
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Puedes manejar la respuesta aquí
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function registerStudent() {
    // Implementar el registro del alumno
    alert('Registro de alumno exitoso');
    showMenu();
}

function scanQRCode() {
    // Implementar la acción de escanear QR
    alert('QR escaneado');
    showMenu();
}

function viewHistory() {
    // Implementar la visualización del historial
}

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.getElementById('video');
            video.srcObject = stream;
            video.play();
        })
        .catch(function(error) {
            console.error('Error al acceder a la cámara:', error);
        });

    document.getElementById('captureButton').addEventListener('click', function() {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        console.log('Imagen capturada:', dataURL);
    });
}

function startQRCodeScanner() {
    html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start({ facingMode: "environment" }, {
        fps: 10,
        qrbox: { width: 250, height: 250 }
    }, onScanSuccess, onScanFailure)
    .catch(err => {
        console.error('Error iniciando el escáner:', err);
    });
}

function onScanSuccess(decodedText, decodedResult) {
    document.getElementById("result").innerText = `Resultado del QR: ${decodedText}`;
    html5QrCode.stop().then((ignore) => {
        // Código para manejar el éxito del paro
    }).catch((err) => {
        console.error('Error deteniendo el escáner:', err);
    });
}

function onScanFailure(error) {
    console.warn(`Error QR: ${error}`);
}
function showRegisterUserForm() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('registerUserForm').style.display = 'block';
}
