// function TampilkanDataValue() {
//     document.getElementById("pastenama").value = document.getElementById("nama").innerHTML;
//     document.getElementById("pasterole").value = document.getElementById("jabatan").innerHTML;
//     document.getElementById("pasteavailability").value = document.getElementById("copyavailability").innerHTML;
//     document.getElementById("pasteusia").value = document.getElementById("copyusia").innerHTML;
//     document.getElementById("pastelokasi").value = document.getElementById("copylokasi").innerHTML;
//     document.getElementById("pasteyears").value = document.getElementById("copyyears").innerHTML;
//     document.getElementById("pasteemail").value = document.getElementById("copyemail").innerHTML;
// }
// TampilkanDataValue();

function TampilkanData() {
    document.getElementById("pastenama").placeholder = document.getElementById("nama").innerHTML;
    document.getElementById("pasterole").placeholder = document.getElementById("jabatan").innerHTML;
    document.getElementById("pasteavailability").placeholder = document.getElementById("copyavailability").innerHTML;
    document.getElementById("pasteusia").placeholder = document.getElementById("copyusia").innerHTML;
    document.getElementById("pastelokasi").placeholder = document.getElementById("copylokasi").innerHTML;
    document.getElementById("pasteyears").placeholder = document.getElementById("copyyears").innerHTML;
    document.getElementById("pasteemail").placeholder = document.getElementById("copyemail").innerHTML;
}
TampilkanData();

function preventLoad(event) {
    console.log(event);
    event.preventDefault()
}

function submitForm() {
    document.getElementById("nama").innerHTML = document.getElementById("pastenama").value;
    document.getElementById("jabatan").innerHTML = document.getElementById("pasterole").value;
    document.getElementById("copyavailability").innerHTML = document.getElementById("pasteavailability").value;
    document.getElementById("copyusia").innerHTML = document.getElementById("pasteusia").value;
    document.getElementById("copylokasi").innerHTML = document.getElementById("pastelokasi").value;
    document.getElementById("copyyears").innerHTML = document.getElementById("pasteyears").value;
    document.getElementById("copyemail").innerHTML = document.getElementById("pasteemail").value;
}
