
function articles(){
this.author = 'Author one';
this.title = 'EL TITULO AQUI!';
this.content = 'His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery. Fact are size cold why had part. If believing or sweetness otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or. Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened. Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. ';
this.category = 'Technology';
}

var dBTexto= new FileReader();
//dBTexto.readAsText("../database.txt");
//console.log("TEST XD");
var articulos = new Array(12);
articulos[0]=new articles();
articulos[0].author="Carlos Degollado";articulos[0].title="The Company Reaches 1M Views In Social Media";
articulos[0].category="Social";
articulos[1]=new articles();
articulos[1].author="Kiana Billingslea";articulos[1].title="The Best Project Milestone: Growing Into The Future.";
articulos[1].category="Inovation";
articulos[2]=new articles();
articulos[2].author="Daniel Barrera";articulos[2].title="5G Is Here! The Company (TM) Prepares For Inovation.";
articulos[2].category="Technology";
articulos[3]=new articles();
articulos[3].author="Zakariyah Johnston";articulos[3].title="California Prop 22 Vote Heralds Judgment Day for Uber, DoorDash.";
articulos[3].category="Politics";
articulos[4]=new articles();
articulos[4].author="Cathy Rowland";articulos[4].title="Apple stock pulled down by weak iPhone sales, China.";
articulos[4].category="Business";
articulos[5]=new articles();
articulos[5].author="Raya Harwood";articulos[5].title="Amazon Earnings, Revenue Beat in Q3 on North America Sales.";
articulos[5].category="Business";
articulos[6]=new articles();
articulos[6].author="Luqman Esparza";articulos[6].title="Big Tech Profits Climb as Ad Sales Pick Up: Live Updates.";
articulos[6].category="Social";
articulos[7]=new articles();
articulos[7].author="Aj Silva";articulos[7].title="Here are the highest-paying computer tech jobs in Milwaukee.";
articulos[7].category="Inovation";
articulos[8]=new articles();
articulos[8].author="onathon Hardin";articulos[8].title="The Memo: Texas could deliver political earthquake.";
articulos[8].category="Politics";
articulos[9]=new articles();
articulos[9].author="Fraser Benitez";articulos[9].title="US vetted stars’ politics to showcase Trump virus response.";
articulos[9].category="Politics";
articulos[10]=new articles();
articulos[10].author="Morgan Hamer";articulos[10].title="What the Tech? How to Use Technology This Halloween.";
articulos[10].category="Technology";
articulos[11]=new articles();
articulos[11].author="Marnie Reid";articulos[11].title="What the Tech? How Google and Apple track you too.";
articulos[11].category="Business";
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
function addElem(elem){

        var forme = document.createElement('div');
        forme.setAttribute("class","forma");
        //forme.innerText="XKXK";
    
        var wrapperDive = document.createElement('div');
        wrapperDive.setAttribute("class","wrapperDiv");
    
        var leftte = document.createElement('div');
        leftte.innerText="By: "+elem.author;
        leftte.setAttribute("class","leftt");
    
        var rightte = document.createElement('div');
        rightte.setAttribute("class","rightt");
        rightte.innerText="Category: "+elem.category;
        wrapperDive.appendChild(leftte);
        wrapperDive.appendChild(rightte);
    
        var hdos = document.createElement('h2');
        hdos.innerText=elem.title;
    
        var conte = document.createElement('p');
        conte.innerText=elem.content.substr(0,348)+"...";
        var brea = document.createElement('br');
        
        forme.appendChild(wrapperDive);
        forme.appendChild(hdos);
        forme.appendChild(conte);
        document.getElementById('cuerpo').appendChild(forme);
        document.getElementById('cuerpo').appendChild(brea);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//const container = document.querySelector('#container');
//removeAllChildNodes(container);

function categories(type){
   var contenedores=document.getElementById("contenedores");
   var children = contenedores.children;
for (var i = 0; i < children.length; i++) {
  var Child = children[i];
    Child.setAttribute("class","list-group-item list-group-item-action");
  // Do stuff
  console.log(Child);
}

    if(type=="all"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
        for(i=0;i<articulos.length;i++){
                addElem(articulos[i]);}
        var cate=document.getElementById("all");
        cate.setAttribute("class","list-group-item list-group-item-action active");
    }
    else if (type=="busi"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
        for(i=0;i<articulos.length;i++){
            if (articulos[i].category=="Business")
            { addElem(articulos[i]);}
        }
        var cate=document.getElementById("bus");
        cate.setAttribute("class","list-group-item list-group-item-action active");
    }
    else if (type=="ino"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
        for(i=0;i<articulos.length;i++){
            if (articulos[i].category=="Inovation")
            { addElem(articulos[i]);}
        }
        var cate=document.getElementById("ino");
        cate.setAttribute("class","list-group-item list-group-item-action active");
    }
    else if (type=="pol"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
        for(i=0;i<articulos.length;i++){
            if (articulos[i].category=="Politics")
            { addElem(articulos[i]);}
        }
        var cate=document.getElementById("pol");
        cate.setAttribute("class","list-group-item list-group-item-action active");
    }
    else if (type=="soc"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
        for(i=0;i<articulos.length;i++){
            if (articulos[i].category=="Social")
            { addElem(articulos[i]);}
        }
        var cate=document.getElementById("soc");
        cate.setAttribute("class","list-group-item list-group-item-action active");
    }
    else if (type=="tec"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
        for(i=0;i<articulos.length;i++){
            if (articulos[i].category=="Technology")
            { addElem(articulos[i]);}
        }
        var cate=document.getElementById("tec");
        cate.setAttribute("class","list-group-item list-group-item-action active");
    }
    else if (type=="busi"){
        var parent = document.getElementById("cuerpo");
        removeAllChildNodes(parent);
    }
    else{alert("no pos wow");}
}