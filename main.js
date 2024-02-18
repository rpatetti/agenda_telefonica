function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    if (name.trim() === "" || phone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = phone;

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}