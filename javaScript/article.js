
function articles(){
this.author = 'Author one';
this.title = 'EL TITULO AQUI!';
this.content = 'His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery. Fact are size cold why had part. If believing or sweetness otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or. Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened. Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. ';
this.category = 'Technology';
}

var dBTexto= new FileReader();
//dBTexto.readAsText("../database.txt");
//console.log("TEST XD");
var articulos = new Array(3);
articulos[0]=new articles();
articulos[0].author="Carlos Degollado";articulos[0].title="The Company Reaches 1M Views In Social Media";
articulos[0].category="Social";
articulos[1]=new articles();
articulos[1].author="Kiana Billingslea";articulos[1].title="The Best Project Milestone: Growing Into The Future.";
articulos[1].category="Inovation";
articulos[2]=new articles();
articulos[2].author="Daniel Barrera";articulos[2].title="5G Is Here! The Company (TM) Prepares For Inovation.";
articulos[0].category="Technology";

//Load articles in
for(i=0;i<articulos.length;i++){
    var forme = document.createElement('div');
    forme.setAttribute("class","forma");
    //forme.innerText="XKXK";

    var wrapperDive = document.createElement('div');
    wrapperDive.setAttribute("class","wrapperDiv");

    var leftte = document.createElement('div');
    leftte.innerText="By: "+articulos[i].author;
    leftte.setAttribute("class","leftt");

    var rightte = document.createElement('div');
    rightte.setAttribute("class","rightt");
    rightte.innerText="Category: "+articulos[i].category;
    wrapperDive.appendChild(leftte);
    wrapperDive.appendChild(rightte);

    var hdos = document.createElement('h2');
    hdos.innerText=articulos[i].title;

    var conte = document.createElement('p');
    conte.innerText=articulos[i].content.substr(0,348)+"...";
    var brea = document.createElement('br');
    
    forme.appendChild(wrapperDive);
    forme.appendChild(hdos);
    forme.appendChild(conte);
    document.getElementById('cuerpo').appendChild(forme);
    document.getElementById('cuerpo').appendChild(brea);
}
