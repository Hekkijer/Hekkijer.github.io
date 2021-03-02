function Change(source, color1, border, color2){
	background.style.backgroundImage= source;
	background.style.transition = ".4s";
	title.style.backgroundColor= color1;
	title.style.borderLeft="4px solid" + border;
	subtitle.style.backgroundColor= color1;
	subtitle.style.borderRight="4px solid" + border;
	contacts.style.backgroundColor= color2;
	contacts.style.borderLeft="4px solid" + border;
	contacts.style.borderRight="4px solid" + border;
	works.style.backgroundColor= color2;
	works.style.borderTop="4px solid" + border;
	works.style.borderBottom="4px solid" + border;
};

waxom.addEventListener("mouseover", function(){
	Change("url('img/waxom_bg.jpg')","#988574","#726257","#a49587");
});

creatives.addEventListener("mouseover", function(){
	Change("url('img/creatives_bg.jpg')","#222","#202020","#3d3d3d");
});

tourism.addEventListener("mouseover", function(){
	Change("url('img/tourism_bg.jpg')","transparent","","transparent");
	title.style.borderLeft="none";
	subtitle.style.borderRight="none";
	contacts.style.borderLeft="none";
	contacts.style.borderRight="none";
	works.style.borderTop="none";
	works.style.borderBottom="none";
});