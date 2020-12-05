/*---- erster Aufruf HOME ------*/
sectionAJAXview('html-sites/home.html')
/*------------------------------*/

$("#navbar .nav-item").on('click',function(){
    $("#menue .bg-primary").removeClass("bg-primary");
    $("#sidebar .bg-primary").removeClass("bg-primary");
    $(this).addClass("bg-primary");
    let site = "html-sites/" + ($(this).children().attr("href")).substr(1)+ ".html";
    sectionAJAXview(site);
})
$(".dropdown").on('click', function () {
    if (!$(this).hasClass("show")) return;
    $("#menue li>.bg-primary").removeClass("bg-primary");
    $(this).addClass("bg-primary");
})

$("#sidebar li").on('click',function(){
    $("#menue .bg-primary").removeClass("bg-primary");
    $("#sidebar .bg-primary").removeClass("bg-primary");
    $(this).addClass("bg-primary");
    let site = "html-sites/" + ($(this).children().attr("href")).substr(1)+ ".html";
    sectionAJAXview(site);
})

/*-------------Brand-Click----------------------*/
$("#brand").on('click', function(){ /*----bitte für <span>-Brand id="brand" einfügen */
    $("#triggerHome").trigger('click'); /*--- bitte für <li>-Home id="triggerHome" einfügen*/
})
/*-----------------siehe Index.html-----------------------------*/

function sectionAJAXview(sites){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        console.log(this.readyState);
        if(this.readyState==4 && this.status==200){
        document.getElementById("content").innerHTML = this.responseText;
        }

 }
 xmlhttp.open("GET",sites, true);
 xmlhttp.send();
}