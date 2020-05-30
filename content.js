frames = document.getElementsByTagName("iframe");
for(i=0; i<frames.length;i++){
    frame = frames[i];
    frame.style.display = 'none';
}
document.getElementById('gateway-content').style.display = "none";
document.getElementById('app').children[0].children[0].children[2].style.display="none";
document.getElementById('app').children[0].children[0].removeAttribute('class');

