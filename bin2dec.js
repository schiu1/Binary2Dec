function Bin2Dec(bin){
    var power = 0;
    var result = 0;
    for(var i = bin.length-1; i >= 0; i--){
        var current = bin.charAt(i);
        if(current == "0" || current == "1"){
            result += Math.pow(2, power)*current;
            power += 1;
        }
        else{
            alert("Incorrect format");
            result = "???";
            break;
        }
    }
    document.getElementById('output').innerHTML = "Decimal: " + result;
}