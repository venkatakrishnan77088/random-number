/*btn=document.createElement("Button")
btn.setAttribute("onclick","getRandomNumber(30)")
btn.innerHTML="button"
document.body.appendChild(btn);







function getRandomNumber(max){
	
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	document.write(randomNumber+"<br>")

}*/
a=parseInt(prompt("enter the number"))
for(i=0;i<a;i++){
	for(j=0;j<i;j++){
		document.write("*")
	}
	document.write("<br>")
}
