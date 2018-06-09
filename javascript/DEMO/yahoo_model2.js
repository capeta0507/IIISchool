document.getElementById("myButNews").classList.add("active");
document.getElementById("myNews").classList.add("active");

var f1Driver = ["L.Hamilton", "S.Vettel", "V.Bottas", "K.Raikkonen", "D.Ricciardo", "M.Verstappen"];
var f1Score = [348, 295, 281, 215, 195, 155];
var f1Team = ["Mercedes", "Ferrari", "Red Bull", "Force India", "Williams"];
var f1TeamScore = [650, 561, 451, 352, 250];

var f1Large = document.getElementsByClassName("large");
var f1Pt = document.getElementsByClassName("largeP");
var f1H3 = "";
var f1Bar = "";
for (var x = 0; x < f1Driver.length; x++) {
    f1H3 += '<h3>' + f1Driver[x] + '</h3>';
    f1Bar += '<div class="large" style="width:' + f1Score[x] + 'px;">';
    f1Bar += '<p class="largeP">' + f1Score[x] + '</p>';
    f1Bar += '</div>';
}
// console.log(f1H3);
document.getElementById("myF1LMain").innerHTML = f1H3;
document.getElementById("myF1BarChart").innerHTML = f1Bar;

function showpage(mythis, pagename) {
    var tabs = document.getElementsByClassName("tablinks");
    var conts = document.getElementsByClassName("myContent");
    for (x = 0; x < tabs.length; x++) {
        tabs[x].classList.remove("active");
        conts[x].classList.remove("active");
    }
    mythis.classList.add("active");
    document.getElementById(pagename).classList.add("active");
}

function btnSearch() {
    // alert("btnSearch...");
    var myF1DriverArray = document.getElementById("myF1LMain").getElementsByTagName("h3");
    var mySearchStr = "";
    var myBarArray = document.getElementsByClassName("largeP");
    for (var x = 0; x < myF1DriverArray.length; x++) {
        // alert(myF1DriverArray[x].innerText);
        mySearchStr += myF1DriverArray[x].innerText + ":" + myBarArray[x].innerText + 'pt <br > '
    }
    document.getElementById('mySearchText').innerHTML = mySearchStr;


}

function btnSearchMenu() {
    // alert("btnSearchMenu");
    var myBtn = document.getElementById("myMenu").getElementsByTagName("button");
    // alert(myBtn.length);
    for (var x = 0; x < myBtn.length; x++) {
        alert(myBtn[x].id);
        // alert(myBtn[x].innerText);
        // alert(myBtn[x].onclick);
    }
}

function showF1Team() {
    // alert(f1Team.length);
    f1H3 = "";
    f1Bar = "";
    for (var y = 0; y < f1Team.length; y++) {
        f1H3 += '<h3>' + f1Team[y] + '</h3>';
        f1Bar += '<div class="largeTeam" style="width:' + f1TeamScore[y] + 'px;">';
        f1Bar += '<p class="largeP">' + f1TeamScore[y] + '</p>';
        f1Bar += '</div>';
    }
    // console.log(f1H3);
    document.getElementById("myF1LMain").innerHTML = f1H3;
    document.getElementById("myF1BarChart").innerHTML = f1Bar;
}