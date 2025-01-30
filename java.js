function peringatan(){
    let pertama = document.getElementById("angkapertama").value;
    let kedua = document.getElementById("angkake2").value;
    
    let hasil =parseInt (pertama) + parseInt(kedua);
    document.write('hasilnya adalah ' + hasil)
        // console.log(namaDepan + " " + namaBelakang);
    }