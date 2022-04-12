function convertfractiontodecimal(odd) {
    odds = odd.split("/");
    decimal = parseFloat(odds[0] / odds[1] + 1);
    return decimal;
}



function comm(odd, com) {
    com = 1 - (parseFloat(com) / 100);
    odd = (parseFloat(odd) - 1) * com + 1;
    odd = Math.round(odd * 1000) / 1000;
    return odd;
}



function converttous(odd) {
    if (parseFloat(odd) >= 2) {
        line = "+" + Math.round((parseFloat(odd) - 1) * 100);
        return line;
    }
    if (parseFloat(odd) < 2 && parseFloat(odd) > 1) {
        line = "-" + Math.round(100 / (parseFloat(odd) - 1));
        return line;
    } else {
        return "";
    }
}


function converttofraction(odd) {

    odd = Math.round((odd - 1) * 1000) / 1000;

    var line = odd.toString();

    if (line.search(".") == -1 || line.search(".") === 0) {
        line = line + ".0";

    }

    var odds = line.split(".");
    whole = odds[0];
    numerator = odds[1];
    denominator = "1";
    for (i = 0; i < numerator.length; i++) {
        denominator = denominator + "0";
    }
    numerator = parseFloat(whole) * parseFloat(denominator) + parseFloat(numerator);
    // alert(numerator);
    GCDVALUE = gcd(numerator, denominator);

    numerator = parseFloat(numerator) / parseFloat(GCDVALUE);
    denominator = parseFloat(denominator) / parseFloat(GCDVALUE);
    line = numerator + "/" + denominator;
    return line;

}



function gcd(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return (b !== 0 ? gcd(b, a % b) : a);
}



function convertodds() {
    var euodd = "";
    var usodd = "";
    var fractionodd = "";
    odd = document.getElementById('oddvalue').value;
    com = document.getElementById('com').value;
    if (odd != "") {

        if (odd.charAt(0) == "+" || odd.charAt(0) == "-") {
            if (odd.length > 2) {
                if (isNaN(com) === false && com > 1) {
                    euodd = convertustodecimal(odd);
                    euodd = comm(euodd, com);
                    usodd = converttous(euodd);
                    fractionodd = converttofraction(parseFloat(euodd));
                } else {
                    euodd = convertustodecimal(odd);
                    fractionodd = converttofraction(parseFloat(odd));
                    usodd = odd;
                }
            }

        } else if (odd.search("/") != -1) {

            if (isNaN(com) === false && com > 1) {
                euodd = convertfractiontodecimal(odd);
                euodd = comm(euodd, com);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(euodd));
            } else {
                euodd = convertfractiontodecimal(odd);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(odd));
            }
        } else if (isNaN(odd) === false) {
            if (isNaN(com) === false && com > 1) {
                euodd = odd;
                euodd = comm(euodd, com);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(euodd));
            } else {
                euodd = odd;
                fractionodd = converttofraction(parseFloat(euodd));
                usodd = converttous(euodd);
            }

        }

        euodd = Math.round(euodd * 100) / 100;
        document.getElementById('euodd').innerHTML = "<FONT COLOR=green><B>" + euodd + "</b></font>";
        document.getElementById('usodd').innerHTML = "<FONT COLOR=green><B>" + usodd + "</b></font>";
        document.getElementById('ukodd').innerHTML = "<FONT COLOR=green><B>" + fractionodd + "</b></font>";
    }
}



function convertoddstohidden(odd, linevalue) {
    var euodd = "";
    var usodd = "";
    var fractionodd = "";
    com = 0;
    if (odd != "") {

        if (odd.charAt(0) == "+" || odd.charAt(0) == "-") {
            if (isNaN(com) === false && com > 1) {
                euodd = convertustodecimal(odd);
                euodd = comm(euodd, com);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(euodd));
            } else {
                euodd = convertustodecimal(odd);
                fractionodd = converttofraction(parseFloat(odd));
                usodd = odd;
            }

        } else if (odd.search("/") != -1) {

            if (isNaN(com) === false && com > 1) {
                euodd = convertfractiontodecimal(odd);
                euodd = comm(euodd, com);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(euodd));
            } else {
                euodd = convertfractiontodecimal(odd);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(odd));
            }
        } else if (isNaN(odd) === false) {
            if (isNaN(com) === false && com > 1) {
                euodd = odd;
                euodd = comm(euodd, com);
                usodd = converttous(euodd);
                fractionodd = converttofraction(parseFloat(euodd));
            } else {
                euodd = odd;
                fractionodd = converttofraction(parseFloat(euodd));
                usodd = converttous(euodd);
            }

        }
        return euodd;

    } // end if
} // end function
function convertustodecimal(str) {
    if (str == "") {
        return 0;
    } else {
        if (str.charAt(0) == "-") {
            newodd = -100 / parseFloat(str) + 1;
        } else {
            newodd = parseFloat(str) / 100 + 1;
        }
        return newodd;
    }
    newodd = "";
    return newodd;
}