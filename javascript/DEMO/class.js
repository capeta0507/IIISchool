//json物件陣列
var classArray = [{
        "img": "nodejs.jpg",
        "name": "Node.js 與 Firebase 全端工程實務",
        "p1": "開課日期：2018.05.13",
        "p2": "上課時段：(六)(日)",
        "p3": "講師：彭兆蔚(彭彭)"
    },
    {
        "img": "PC.jpg",
        "name": "台大電腦組裝教學課程(PC DIY)",
        "p1": "開課日期：2018.06.02",
        "p2": "上課時段：(六)(日)",
        "p3": "講師：吳承宇"
    },
    {
        "img": "HTML.jpg",
        "name": "網頁設計基礎班",
        "p1": "開課日期：2018.06.02",
        "p2": "上課時段：(六)(日)",
        "p3": "講師：張元鴻"
    },
    {
        "img": "ADB.jpg",
        "name": "Arduino專題實作班",
        "p1": "開課日期：2018.05.13",
        "p2": "上課時段：(六)(日)",
        "p3": "講師：張傑帆"
    }
];
//預設一個空值
var classStr = " ";
// console.log(classArray)
for (var x = 0; x < classArray.length; x++) {
    // classStr = classArray[x].img
    console.log(classArray[x].img)
    //加入classArray至mycard
    classStr += '<div class="card"><figure class="box"><img src="img/' + classArray[x].img + '">'
    classStr += '</figure><h2>' + classArray[x].name + '</h2>'
    classStr += '<p>' + classArray[x].p1 + '</p><p>' + classArray[x].p2 + '</p><p>' + classArray[x].p3 + '</p>'
    classStr += '<div class="href"><a href="" class="btnBlue">立即報名 </a><a href="">詳細資訊</a></div></div>';
}
console.log(classStr)
document.getElementById("mycard").innerHTML = classStr;