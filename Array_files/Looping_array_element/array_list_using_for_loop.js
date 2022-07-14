const fruits=["Apple","Banana","Orange","Jack fruit"];
let count=fruits.length;
var text="<ul>";
for(i=0;i<count;i++)
{
    text+="<li>"+fruits[i]+"</li>";
}
text+="</ul>";
document.getElementById(demo).innerHTML=text;