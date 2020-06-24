// JAVASCRIPT
$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});
<SCRIPT LANGUAGE=JavaScript>
<!--
function popup (a,b,x,y) {
//    vPosicao_Y = ((screen.availWidth/2)-160);
//    vPosicao_X = ((screen.availHeight/2)-145);
    vPosicao_Y = 175;
    vPosicao_X = 247;
	popwindow=window.open(a,b,'width=' + x + ',height=' + y + ',resizable=0,status=0,menubar=0,scrollbars=0,top=' + vPosicao_X + ',left=' + vPosicao_Y);
	popwindow.focus();

}

//popup('pop.jsp?titulo="Site da Vez"&link=" + thePopup[1]  + "&img=" + thePopup[2] + "','promorel'," +  thePopup[3]  + "," +  thePopup[4]  + ");");
//popup('popsitedavez.html','promorel',250,250);

popup('index.htm','promorel',298,200);

//-->
</SCRIPT>
