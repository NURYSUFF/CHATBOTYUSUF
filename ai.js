alert("Selamat datang di kalkulator pintar");

function sayHello(){
    alert("Hello!");
}
function getResponse() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    // Aturan-aturan sederhana berdasarkan input pengguna
    if (input.toLowerCase().indexOf("1*1") !== -1) {
      output.innerHTML = "1";
    } else if (input.toLowerCase().indexOf("1*2") !== -1) {
      output.innerHTML = "2";
    } else if (input.toLowerCase().indexOf("1*3") !== -1) {
      output.innerHTML ="3";
    } else if ( input.toLowerCase().indexOf("1*4") !== -1) {
      output.innerHTML = "4";
    } else if (input.toLowerCase().indexOf("1*5") !== -1) {
      output.innerHTML = "5";
    } else if (input.toLowerCase().indexOf("1*6") !== -1) {
      output.innerHTML = "6";
    }else if (input.toLowerCase().indexOf("1*7") !== -1) {
      output.innerHTML = "7";
    }else if (input.toLowerCase().indexOf("1*8") !== -1) {
      output.innerHTML = "8";
    }else if (input.toLowerCase().indexOf("1*9") !== -1) {
      output.innerHTML = "9";
    }else if (input.toLowerCase().indexOf("1*10") !== -1) {
      output.innerHTML = "10";
    }else if (input.toLowerCase().indexOf("2*1") !== -1) {
      output.innerHTML = "2";
    }else if (input.toLowerCase().indexOf("2*2") !== -1) {
      output.innerHTML = "4";
    }else if (input.toLowerCase().indexOf("2*3") !== -1) {
      output.innerHTML = "6";
    }else if (input.toLowerCase().indexOf("2*4") !== -1) {
      output.innerHTML = "8";
    }else if (input.toLowerCase().indexOf("2*5") !== -1) {
      output.innerHTML = "10";
    }else if (input.toLowerCase().indexOf("2*6") !== -1) {
      output.innerHTML = "12";
    }else if (input.toLowerCase().indexOf("2*7") !== -1) {
      output.innerHTML = "14";
    }else if (input.toLowerCase().indexOf("2*8") !== -1) {
      output.innerHTML = "16";
    }else if (input.toLowerCase().indexOf("2*9") !== -1) {
      output.innerHTML = "18";
    }else if (input.toLowerCase().indexOf("2*10") !== -1) {
      output.innerHTML = "20";
    }else if (input.toLowerCase().indexOf("3*1") !== -1) {
      output.innerHTML = "3";
    }else if (input.toLowerCase().indexOf("3*2") !== -1) {
      output.innerHTML = "6";
    }else if (input.toLowerCase().indexOf("3*3") !== -1) {
      output.innerHTML = "9";
    }else if (input.toLowerCase().indexOf("3*4") !== -1) {
      output.innerHTML = "12";
    }else if (input.toLowerCase().indexOf("3*5") !== -1) {
      output.innerHTML = "15";
    }else if (input.toLowerCase().indexOf("3*6") !== -1) {
      output.innerHTML = "18";
    }else if (input.toLowerCase().indexOf("3*7") !== -1) {
      output.innerHTML = "21";
    }else if (input.toLowerCase().indexOf("3*8") !== -1) {
      output.innerHTML = "24";
    }else if (input.toLowerCase().indexOf("3*9") !== -1) {
      output.innerHTML = "27";
    }else if (input.toLowerCase().indexOf("3*10") !== -1) {
      output.innerHTML = "30";
    }else if (input.toLowerCase().indexOf("4*1") !== -1) {
      output.innerHTML = "4";
    }else if (input.toLowerCase().indexOf("4*2") !== -1) {
      output.innerHTML = "8";
    }else if (input.toLowerCase().indexOf("4*3") !== -1) {
      output.innerHTML = "12";
    }else if (input.toLowerCase().indexOf("4*4") !== -1) {
      output.innerHTML = "16";
    }else if (input.toLowerCase().indexOf("4*5") !== -1) {
      output.innerHTML = "20";
    }else if (input.toLowerCase().indexOf("4*6") !== -1) {
      output.innerHTML = "24";
    }else if (input.toLowerCase().indexOf("4*7") !== -1) {
      output.innerHTML = "28";
    }else if (input.toLowerCase().indexOf("4*8") !== -1) {
      output.innerHTML = "32";
    }else if (input.toLowerCase().indexOf("4*9") !== -1) {
      output.innerHTML = "36";
    }else if (input.toLowerCase().indexOf("4*10") !== -1) {
      output.innerHTML = "40";
    }else if (input.toLowerCase().indexOf("5*1") !== -1) {
      output.innerHTML = "5";
    }else if (input.toLowerCase().indexOf("5*2") !== -1) {
      output.innerHTML = "10";
    }else if (input.toLowerCase().indexOf("5*3") !== -1) {
      output.innerHTML = "15";
    }else if (input.toLowerCase().indexOf("5*4") !== -1) {
      output.innerHTML = "20";
    }else if (input.toLowerCase().indexOf("5*5") !== -1) {
      output.innerHTML = "25";
    }else if (input.toLowerCase().indexOf("5*6") !== -1) {
      output.innerHTML = "30";
    }else if (input.toLowerCase().indexOf("5*7") !== -1) {
      output.innerHTML = "35";
    }else if (input.toLowerCase().indexOf("5*8") !== -1) {
      output.innerHTML = "40";
    }else if (input.toLowerCase().indexOf("5*9") !== -1) {
      output.innerHTML = "45";
    }else if (input.toLowerCase().indexOf("5*10") !== -1) {
      output.innerHTML = "50";
    }else if (input.toLowerCase().indexOf("6*1") !== -1) {
      output.innerHTML = "6";
    }else if (input.toLowerCase().indexOf("6*2") !== -1) {
      output.innerHTML = "12";
    }else if (input.toLowerCase().indexOf("6*3") !== -1) {
      output.innerHTML = "18";
    }else if (input.toLowerCase().indexOf("6*4") !== -1) {
      output.innerHTML = "24";
    }else if (input.toLowerCase().indexOf("6*5") !== -1) {
      output.innerHTML = "30";
    }else if (input.toLowerCase().indexOf("6*6") !== -1) {
      output.innerHTML = "36";
    }else if (input.toLowerCase().indexOf("6*7") !== -1) {
      output.innerHTML = "42";
    }else if (input.toLowerCase().indexOf("6*8") !== -1) {
      output.innerHTML = "48";
    }else if (input.toLowerCase().indexOf("6*9") !== -1) {
      output.innerHTML = "54";
    }else if (input.toLowerCase().indexOf("6*10") !== -1) {
      output.innerHTML = "60";
    }else if (input.toLowerCase().indexOf("7*0") !== -1) {
      output.innerHTML = "0";
    }else if (input.toLowerCase().indexOf("7*1") !== -1) {
      output.innerHTML = "7";
    }else if (input.toLowerCase().indexOf("7*2") !== -1) {
      output.innerHTML = "14";
    }else if (input.toLowerCase().indexOf("7*3") !== -1) {
      output.innerHTML = "21";
    }else if (input.toLowerCase().indexOf("7*4") !== -1) {
      output.innerHTML = "28";
    }else if (input.toLowerCase().indexOf("7*5") !== -1) {
      output.innerHTML = "35";
    }else if (input.toLowerCase().indexOf("7*6") !== -1) {
      output.innerHTML = "42";
    }else if (input.toLowerCase().indexOf("7*7") !== -1) {
      output.innerHTML = "49";
    }else if (input.toLowerCase().indexOf("7*8") !== -1) {
      output.innerHTML = "56";
    }else if (input.toLowerCase().indexOf("7*9") !== -1) {
      output.innerHTML = "63";
    }else if (input.toLowerCase().indexOf("7*10") !== -1) {
      output.innerHTML = "70";
    }else if (input.toLowerCase().indexOf("8*1") !== -1) {
      output.innerHTML = "8";
    }else if (input.toLowerCase().indexOf("8*2") !== -1) {
      output.innerHTML = "16";
    }else if (input.toLowerCase().indexOf("8*3") !== -1) {
      output.innerHTML = "24";
    }else if (input.toLowerCase().indexOf("8*4") !== -1) {
      output.innerHTML = "32";
    }else if (input.toLowerCase().indexOf("8*5") !== -1) {
      output.innerHTML = "40";
    }else if (input.toLowerCase().indexOf("8*6") !== -1) {
      output.innerHTML = "48";
    }else if (input.toLowerCase().indexOf("8*7") !== -1) {
      output.innerHTML = "56";
    }else if (input.toLowerCase().indexOf("8*8") !== -1) {
      output.innerHTML = "64";
    }else if (input.toLowerCase().indexOf("8*9") !== -1) {
      output.innerHTML = "72";
    }else if (input.toLowerCase().indexOf("8*10") !== -1) {
      output.innerHTML = "80";
    }else if (input.toLowerCase().indexOf("9*1") !== -1) {
      output.innerHTML = "9";
    }else if (input.toLowerCase().indexOf("9*2") !== -1) {
      output.innerHTML = "18";
    }else if (input.toLowerCase().indexOf("9*3") !== -1) {
      output.innerHTML = "27";
    }else if (input.toLowerCase().indexOf("9*4") !== -1) {
      output.innerHTML = "36";
    }else if (input.toLowerCase().indexOf("9*5") !== -1) {
      output.innerHTML = "45";
    }else if (input.toLowerCase().indexOf("9*6") !== -1) {
      output.innerHTML = "54";
    }else if (input.toLowerCase().indexOf("9*7") !== -1) {
      output.innerHTML = "63";
    }else if (input.toLowerCase().indexOf("9*8") !== -1) {
      output.innerHTML = "72";
    }else if (input.toLowerCase().indexOf("9*9") !== -1) {
      output.innerHTML = "81";
    }else if (input.toLowerCase().indexOf("9*10") !== -1) {
      output.innerHTML = "90";
    }else if (input.toLowerCase().indexOf("10*1") !== -1) {
      output.innerHTML = "10";
    }else if (input.toLowerCase().indexOf("10*2") !== -1) {
      output.innerHTML = "20";
    }else if (input.toLowerCase().indexOf("10*3") !== -1) {
      output.innerHTML = "30";
    }else if (input.toLowerCase().indexOf("10*4") !== -1) {
      output.innerHTML = "40";
    }else if (input.toLowerCase().indexOf("10*5") !== -1) {
      output.innerHTML = "50";
    }else if (input.toLowerCase().indexOf("10*6") !== -1) {
      output.innerHTML = "60";
    }else if (input.toLowerCase().indexOf("10*7") !== -1) {
      output.innerHTML = "70";
    }else if (input.toLowerCase().indexOf("10*8") !== -1) {
      output.innerHTML = "80";
    }else if (input.toLowerCase().indexOf("10*9") !== -1) {
      output.innerHTML = "90";
    }else if (input.toLowerCase().indexOf("10*10") !== -1) {
      output.innerHTML = "seratus";
    }else if (input.toLowerCase().indexOf("hai") !== -1) {
      output.innerHTML = "hai juga,silakan masukan input";
    }else if (input.toLowerCase().indexOf("apa yang bisa kamu lakukan") !== -1) {
      output.innerHTML = "Saya bisa menjawab soal perkaliam";
    }else if (input.toLowerCase().indexOf("Siapa kamu") !== -1) {
      output.innerHTML = "Saya adalah otak buatan yang dibuat oleh Mr.Yusuf";
    }else if (input.toLowerCase().indexOf("apakah kamu mempunyai pacar") !== -1) {
      output.innerHTML = "Maaf saya cuman otak buatan";
    }

    
    else {
      output.innerHTML = "Maaf ya cuman bisa perkalian 1 sampai 10";
    }
  }
  