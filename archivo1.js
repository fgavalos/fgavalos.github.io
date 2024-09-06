$(document).ready(function () {
    // Manejador de envío del formulario
    $("#censoForm").submit(function (event) {
        event.preventDefault();  // Evita el envío del formulario por defecto

        // Capturamos los valores del formulario
        let nombre = $("#nombre").val();
        let edad = $("#edad").val();
        let departamento = $("#departamento").val();
        let genero = $("input[name='genero']:checked").val();

        // Validamos los datos
        if (nombre === "" || edad === "" || !genero) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Agregamos una nueva fila a la tabla
        let nuevaFila = `
            <tr>
                <td>${nombre}</td>
                <td>${edad}</td>
                <td>${departamento}</td>
                <td>${genero}</td>
            </tr>
        `;

        // Agregar la fila a la tabla
        $("#censoTable tbody").append(nuevaFila);

        // Limpiar el formulario después de agregar los datos
        $("#censoForm")[0].reset();
    });
});



