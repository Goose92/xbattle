// Hex math defined here: http://blog.ruslans.com/2011/02/hexagonal-grid-math.html

// Fonction de création de l'objet HexagonGrid
function HexagonGrid(canvasId, radius) {
    this.radius = radius;

    this.height = Math.sqrt(3) * radius;
    this.width = 2 * radius;
    this.side = (3 / 2) * radius;

    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');

    this.canvasOriginX = 0;
    this.canvasOriginY = 0;

    this.canvas.addEventListener("mousedown", this.clickEvent.bind(this), false);
};

// Fonction de dessin de la grille complète
HexagonGrid.prototype.affichageCasesGrille = function ( rows,cols, originX, originY) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;

    var currentHexX;
    var currentHexY;
    var debugText = "";

    var offsetColumn = false;

    for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {

            if (!offsetColumn) {
                currentHexX = (col * this.side) + originX;
                currentHexY = (row * this.height) + originY;
            } else {
                currentHexX = col * this.side + originX;
                currentHexY = (row * this.height) + originY + (this.height * 0.5);
            }
            this.drawHex(currentHexX, currentHexY, "#ddd", debugText);
        }
        offsetColumn = !offsetColumn;
    }
};


HexagonGrid.prototype.affichageCase = function ( i,j, originX, originY) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;

    var currentHexX;
    var currentHexY;
    var debugText = "";

    var offsetColumn = false;
    //console.log(TailleGrilleCols,TailleGrilleRows);
    for (var col = 0; col<TailleGrilleCols ; col++) {
        for (var row = 0; row<TailleGrilleRows ; row++) {
            //console.log("toto :",col,row);
            if (!offsetColumn) {
                currentHexX = (col * this.side) + originX;
                currentHexY = (row * this.height) + originY;
            } else {
                currentHexX = col * this.side + originX;
                currentHexY = (row * this.height) + originY + (this.height * 0.5);
            }
            if (row==j && col==i){
                this.drawHex(currentHexX, currentHexY, "#ddd", debugText);

            }

        }
        offsetColumn = !offsetColumn;
    }
};

HexagonGrid.prototype.affichageNiveauCase = function ( i,j, originX, originY) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;

    var currentHexX;
    var currentHexY;
    var debugText = "";

    var offsetColumn = false;

    for (var col = 0; col<TailleGrilleCols ; col++) {
        for (var row = 0; row<TailleGrilleRows ; row++) {

            if (!offsetColumn) {
                currentHexX = (col * this.side) + originX;
                currentHexY = (row * this.height) + originY;
            } else {
                currentHexX = col * this.side + originX;
                currentHexY = (row * this.height) + originY + (this.height * 0.5);
            }
            if (row==j && col==i){
                this.drawCercle(currentHexX+this.width/2,currentHexY+this.height/2,NiveauMax*TableauGrille[col][row].Niveau/100,"rgba(150,150,150,0.3)","");

            }
        }
        offsetColumn = !offsetColumn;
    }
};

HexagonGrid.prototype.affichageValveCase = function ( i,j, originX, originY) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;

    var currentHexX;
    var currentHexY;
    var debugText = "";
    var offsetColumn = false;

    for (var col = 0; col<TailleGrilleCols ; col++) {
        for (var row = 0; row<TailleGrilleRows ; row++) {
            //console.log("goose!!!****",j,i);
            if (!offsetColumn) {
                currentHexX = (col * this.side) + originX;
                currentHexY = (row * this.height) + originY;
            } else {
                currentHexX = col * this.side + originX;
                currentHexY = (row * this.height) + originY + (this.height * 0.5);
            }
            if (row==j && col==i){
                for (var nb=0;nb<=6;nb++){
                    if (TableauGrille[col][row].BD==true){
                        this.drawValve(currentHexX+this.width/2,currentHexY+this.height/2, "#000", "BD", false);
                    }
                    if (TableauGrille[col][row].B==true){
                        this.drawValve(currentHexX+this.width/2,currentHexY+this.height/2, "#000", "B", false);
                    }
                    if (TableauGrille[col][row].BG==true){
                        this.drawValve(currentHexX+this.width/2,currentHexY+this.height/2, "#000", "BG", false);
                    }
                    if (TableauGrille[col][row].HD==true){
                        this.drawValve(currentHexX+this.width/2,currentHexY+this.height/2, "#000", "HD", false);
                    }
                    if (TableauGrille[col][row].H==true){
                        this.drawValve(currentHexX+this.width/2,currentHexY+this.height/2, "#000", "H", false);
                    }
                    if (TableauGrille[col][row].HG==true){
                        this.drawValve(currentHexX+this.width/2,currentHexY+this.height/2, "#000", "HG", false);
                    }
                }

            }
        }
        offsetColumn = !offsetColumn;
    }
};

HexagonGrid.prototype.affichageNiveauGrille = function (rows, cols, originX, originY) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;

    var currentHexX;
    var currentHexY;
    var debugText = "";

    var offsetColumn = false;

    for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {

            if (!offsetColumn) {
                currentHexX = (col * this.side) + originX;
                currentHexY = (row * this.height) + originY;
            } else {
                currentHexX = col * this.side + originX;
                currentHexY = (row * this.height) + originY + (this.height * 0.5);
            }
            this.drawCercle(currentHexX+this.width/2,currentHexY+this.height/2,NiveauMax*TableauGrille[row][col].Niveau/100,"rgba(150,150,150,0.3)","");
        }
        offsetColumn = !offsetColumn;
    }
};

// Fonction de dessin d'une hexagone seul
HexagonGrid.prototype.drawHexAtColRow = function(column, row, color) {
    var drawy = column % 2 == 0 ? (row * this.height) + this.canvasOriginY : (row * this.height) + this.canvasOriginY + (this.height / 2);
    var drawx = (column * this.side) + this.canvasOriginX;

    this.drawHex(drawx, drawy, color, "");
};

// Fonction de dessin
HexagonGrid.prototype.drawHex = function(x0, y0, fillColor, debugText) {
    this.context.strokeStyle = "#000";
    this.context.beginPath();
    this.context.moveTo(x0 + this.width - this.side, y0);
    this.context.lineTo(x0 + this.side, y0);
    this.context.lineTo(x0 + this.width, y0 + (this.height / 2));
    this.context.lineTo(x0 + this.side, y0 + this.height);
    this.context.lineTo(x0 + this.width - this.side, y0 + this.height);
    this.context.lineTo(x0, y0 + (this.height / 2));

    if (fillColor) {
        this.context.fillStyle = fillColor;
        this.context.fill();
    }

    this.context.closePath();
    this.context.stroke();

    if (debugText) {
        this.context.font = "8px";
        this.context.fillStyle = "#000";
        this.context.fillText(debugText, x0 + (this.width / 2) - (this.width/4), y0 + (this.height - 5));
    }
};

//Recusivly step up to the body to calculate canvas offset.
HexagonGrid.prototype.getRelativeCanvasOffset = function() {
    var x = 0, y = 0;
    var layoutElement = this.canvas;
    if (layoutElement.offsetParent) {
        do {
            x += layoutElement.offsetLeft;
            y += layoutElement.offsetTop;
        } while (layoutElement = layoutElement.offsetParent);

        return { x: x, y: y };
    }
}

//Uses a grid overlay algorithm to determine hexagon location
//Left edge of grid has a test to acuratly determin correct hex
HexagonGrid.prototype.getSelectedTile = function(mouseX, mouseY) {

    var offSet = this.getRelativeCanvasOffset();

    mouseX -= offSet.x;
    mouseY -= offSet.y;

    var column = Math.floor((mouseX) / this.side);
    var row = Math.floor(
        column % 2 == 0
            ? Math.floor((mouseY) / this.height)
            : Math.floor(((mouseY + (this.height * 0.5)) / this.height)) - 1);


    //Test if on left side of frame            
    if (mouseX > (column * this.side) && mouseX < (column * this.side) + this.width - this.side) {


        //Now test which of the two triangles we are in 
        //Top left triangle points
        var p1 = new Object();
        p1.x = column * this.side;
        p1.y = column % 2 == 0
            ? row * this.height
            : (row * this.height) + (this.height / 2);

        var p2 = new Object();
        p2.x = p1.x;
        p2.y = p1.y + (this.height / 2);

        var p3 = new Object();
        p3.x = p1.x + this.width - this.side;
        p3.y = p1.y;

        var mousePoint = new Object();
        mousePoint.x = mouseX;
        mousePoint.y = mouseY;

        if (this.isPointInTriangle(mousePoint, p1, p2, p3)) {
            column--;

            if (column % 2 != 0) {
                row--;
            }
        }

        //Bottom left triangle points
        var p4 = new Object();
        p4 = p2;

        var p5 = new Object();
        p5.x = p4.x;
        p5.y = p4.y + (this.height / 2);

        var p6 = new Object();
        p6.x = p5.x + (this.width - this.side);
        p6.y = p5.y;

        if (this.isPointInTriangle(mousePoint, p4, p5, p6)) {
            column--;

            if (column % 2 == 0) {
                row++;
            }
        }
    }

    return  { row: row, column: column };
};


HexagonGrid.prototype.sign = function(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
};


//TODO: Replace with optimized barycentric coordinate method
HexagonGrid.prototype.isPointInTriangle = function isPointInTriangle(pt, v1, v2, v3) {
    var b1, b2, b3;

    b1 = this.sign(pt, v1, v2) < 0.0;
    b2 = this.sign(pt, v2, v3) < 0.0;
    b3 = this.sign(pt, v3, v1) < 0.0;

    return ((b1 == b2) && (b2 == b3));
};

HexagonGrid.prototype.clickEvent = function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    var localX = mouseX - this.canvasOriginX;
    var localY = mouseY - this.canvasOriginY;

    var tile = this.getSelectedTile(localX, localY);
    if (tile.column >= 0 && tile.row >= 0) {
        var drawy = tile.column % 2 == 0 ? (tile.row * this.height) + this.canvasOriginY + 6 : (tile.row * this.height) + this.canvasOriginY + 6 + (this.height / 2);
        var drawx = (tile.column * this.side) + this.canvasOriginX;
        //this.drawHex(drawx, drawy - 6, "rgba(110,110,230,0.3)", ""); // Pour accroitre la couleur de la case choisie
    }

    Angle=angle(drawx+this.width/2,drawy+this.height/2-6,mouseX-10,mouseY-10);
    //this.drawCercle(drawx+this.width/2,drawy+this.height/2-6,NiveauMax,"rgba(150,150,150,0.3)","");
    console.log("tile:",tile.column,tile.row);

    switch (true) {
        case (Angle>=0 && Angle<60) : console.log("en bas à droite");
            TableauGrille[tile.column][tile.row].BD=!TableauGrille[tile.column][tile.row].BD;
            if (tile.column+1<TailleGrilleCols && tile.row+1<TailleGrilleRows){
                TableauGrille[tile.column+1][tile.row+1].HG=TableauGrille[tile.column][tile.row].BD;
            }
            break;
        case (Angle>=60 && Angle<120) : console.log("en bas ",tile.column,tile.row);
            TableauGrille[tile.column][tile.row].B=!TableauGrille[tile.column][tile.row].B;
            if (tile.row+1<TailleGrilleRows){
                TableauGrille[tile.column][tile.row+1].H=TableauGrille[tile.column][tile.row].B;
            }
            break;
        case (Angle>=120 ) : console.log("en bas à gauche");
            TableauGrille[tile.column][tile.row].BG=!TableauGrille[tile.column][tile.row].BG;
            if (tile.column-1>=0 && tile.row+1<TailleGrilleRows){
                TableauGrille[tile.column-1][tile.row+1].HD=TableauGrille[tile.column][tile.row].BG;
            }
            break;
        case (Angle<0 && Angle>=-60) : console.log("en haut à droite");
            TableauGrille[tile.column][tile.row].HD=!TableauGrille[tile.column][tile.row].HD;
            if (tile.column+1<TailleGrilleRows){
                TableauGrille[tile.column+1][tile.row].BG=TableauGrille[tile.column][tile.row].HD;
            }
            break;
        case (Angle<-60 && Angle>=-120) : console.log("en haut ");
            TableauGrille[tile.column][tile.row].H=!TableauGrille[tile.column][tile.row].H;
            if (tile.row-1>=0){
                TableauGrille[tile.column][tile.row-1].B=TableauGrille[tile.column][tile.row].H;
            }
            break;
        case (Angle<-120 ) : console.log("en haut à gauche");
            TableauGrille[tile.column][tile.row].HG=!TableauGrille[tile.column][tile.row].HG;
            if (tile.row-1>=0 && tile.column-1>=0){
                TableauGrille[tile.column-1][tile.row].BD=TableauGrille[tile.column][tile.row].HG;
            }

            break;
        default : break;
    };

};

function angle(centerx,centery, mousex,mousey) {
    var angleDeg = Math.atan2(mousey - centery, mousex - centerx) * 180 / Math.PI;

    return angleDeg;
};

HexagonGrid.prototype.drawTriangle = function(x0, y0, fillColor, orientation, debugText) {
    switch (orientation){
        case "HD" :
            this.context.strokeStyle = "#000";
            this.context.beginPath();
            this.context.moveTo(x0 + this.width/2 , y0+ (this.height / 2)); // Point du centre
            this.context.lineTo(x0 + this.width , y0+ (this.height / 2)); // Point de droite
            this.context.lineTo(x0 + this.side, y0);
            break;
        case "H" :
            this.context.strokeStyle = "#000";
            this.context.beginPath();
            this.context.moveTo(x0 + this.width/2 , y0+ (this.height / 2)); // Point du centre
            this.context.lineTo(x0 + this.side, y0);
            this.context.lineTo(x0 + this.width - this.side, y0 );
            break;
        case "HG" :
            this.context.strokeStyle = "#000";
            this.context.beginPath();
            this.context.moveTo(x0 + this.width/2 , y0+ (this.height / 2)); // Point du centre
            this.context.lineTo(x0 + this.width - this.side, y0 );
            this.context.lineTo(x0 , y0 + (this.height / 2));
            break;

        case "BD" :
            this.context.strokeStyle = "#000";
            this.context.beginPath();
            this.context.moveTo(x0 + this.width/2 , y0+ (this.height / 2)); // Point du centre
            this.context.lineTo(x0 + this.width , y0+ (this.height / 2)); // Point de droite
            this.context.lineTo(x0 + this.side, y0 + this.height);
            break;
        case "B" :
            this.context.strokeStyle = "#000";
            this.context.beginPath();
            this.context.moveTo(x0 + this.width/2 , y0+ (this.height / 2)); // Point du centre
            this.context.lineTo(x0 + this.side, y0+this.height);
            this.context.lineTo(x0 + this.width - this.side, y0+this.height );
            break;
        case "BG" :
            this.context.strokeStyle = "#000";
            this.context.beginPath();
            this.context.moveTo(x0 + this.width/2 , y0+ (this.height / 2)); // Point du centre
            this.context.lineTo(x0 + this.width - this.side, y0 +this.height );
            this.context.lineTo(x0 , y0 + (this.height / 2));
            break;
        default :
            console.log("pas prevu");
            break;
    }

    if (fillColor) {
        this.context.fillStyle = fillColor;
        this.context.fill();
    }

    this.context.closePath();
    this.context.stroke();

    if (debugText) {
        this.context.font = "8px";
        this.context.fillStyle = "#000";
        this.context.fillText(debugText, x0 + (this.width / 2) - (this.width/4), y0 + (this.height - 5));
    }
};

HexagonGrid.prototype.drawValve = function(x0, y0, fillColor, orientation, debugText) {
    switch (orientation){
        case "HD" :
            this.context.beginPath();
            this.context.arc(x0+3/4*this.width/2, y0-this.height/4, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'blue';
            this.context.fill();
            this.context.strokeStyle = '#003300';
            this.context.closePath();
            this.context.stroke();
            break;
        case "H" :
            this.context.beginPath();
            this.context.arc(x0, y0-this.height/2, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'blue';
            this.context.fill();
            this.context.strokeStyle = '#003300';
            this.context.closePath();
            this.context.stroke();
            break;
        case "HG" :
            this.context.beginPath();
            this.context.arc(x0-3/4*this.width/2, y0-this.height/4, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'blue';
            this.context.fill();
            this.context.strokeStyle = '#003300';
            this.context.closePath();
            this.context.stroke();
            break;

        case "BD" :
            this.context.beginPath();
            this.context.arc(x0+3/4*this.width/2, y0+this.height/4, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'blue';
            this.context.fill();
            this.context.strokeStyle = '#003300';
            this.context.closePath();
            this.context.stroke();
            break;
        case "B" :
            this.context.beginPath();
            this.context.arc(x0, y0+this.height/2, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'blue';
            this.context.fill();
            this.context.strokeStyle = '#003300';
            this.context.closePath();
            this.context.stroke();
            break;
        case "BG" :
            this.context.beginPath();
            this.context.arc(x0-3/4*this.width/2, y0+this.height/4, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'blue';
            this.context.fill();
            this.context.strokeStyle = '#003300';
            this.context.closePath();
            this.context.stroke();
            break;
        default :
            console.log("pas prevu");
            break;
    }

    if (fillColor) {
        this.context.fillStyle = fillColor;
        this.context.fill();
    }

    this.context.closePath();
    this.context.stroke();

    if (debugText) {
        this.context.font = "8px";
        this.context.fillStyle = "#000";
        this.context.fillText(debugText, x0 + (this.width / 2) - (this.width/4), y0 + (this.height - 5));
    }
};

HexagonGrid.prototype.drawCercle = function(x0, y0,rayon ,fillColor, debugText) {
    this.context.beginPath();
    this.context.arc(x0, y0, rayon, 0, 2 * Math.PI, false);


    this.context.fillStyle = 'blue';
    this.context.fill();
    this.context.strokeStyle = '#003300';
    this.context.closePath();
    this.context.stroke();

    if (debugText) {
        this.context.font = "8px";
        this.context.fillStyle = "#000";
        this.context.fillText(debugText, x0 + (this.width / 2) - (this.width/4), y0 + (this.height - 5));
    }
};

