
function articles(){
this.author = 'Author one';
this.title = 'EL TITULO AQUI!';
this.content = 'MUCHO CONTENT HERE';
this.category = 'Technology';
}

var articulos = new Array(3);
articulos[0]=new articles();
articulos[1]=new articles();
articulos[2]=new articles();

//Load articles in
for(i=0;i<3;i++){
    var forme = document.createElement('div');
    forme.setAttribute("class","forma");
    //forme.innerText="XKXK";

    var wrapperDive = document.createElement('div');
    wrapperDive.setAttribute("class","wrapperDiv");

    var leftte = document.createElement('div');
    leftte.innerText="This is author";
    leftte.setAttribute("class","leftt");

    var rightte = document.createElement('div');
    rightte.setAttribute("class","rightt");
    rightte.innerText="Category";
    wrapperDive.appendChild(leftte);
    wrapperDive.appendChild(rightte);

    var hdos = document.createElement('h2');
    hdos.innerText=articulos[i].title;

    var conte = document.createElement('p');
    conte.innerText="his is all content for example i can have soo many things in here and i would not care aout the meaning cuz at the end this is a test";

    var brea = document.createElement('br');
    
    forme.appendChild(wrapperDive);
    forme.appendChild(hdos);
    forme.appendChild(conte);
    document.getElementById('cuerpo').appendChild(forme);
    document.getElementById('cuerpo').appendChild(brea);
}
