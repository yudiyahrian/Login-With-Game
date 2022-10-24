var myGamePiece;
var myObstacles = [];
var myScore;


function coba(){
    document.getElementById("username2").classList.remove("d-none");
    document.getElementById("kotak1").classList.add("d-none");
    startGame();
}

function restart(){
    document.getElementById("coba").remove();
    document.getElementById("exit").remove();

    myGameArea.stop();
    myGameArea.clear();
    startGame();
}

function startGame() {
    var warna = document.getElementById('color').value;
    myGamePiece = new component(30, 30, warna, 10, 120);
    myObstacles = [];
    myScore = new component("30px", "Consolas", "black", 500, 30, "text");
    myGameArea.start();
    document.getElementById("username2").style.color = warna;
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.hitBottom();
        this.hitRight();
        this.hitTop();
        this.hitLeft();
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

    this.hitBottom = function() {
        var bottom = myGameArea.canvas.height - this.height;
        if (this.y > bottom){
            this.y = bottom;
        }
    }
    this.hitRight = function() {
        var right = myGameArea.canvas.width - this.width;
        if(this.x > right){
            this.x = right;
        }
    }
    this.hitTop = function() {
        if(this.y < 0){
            this.y = 0;
        }
    } 
    this.hitLeft = function() {
        if(this.x < 0){
            this.x = 0;
        }
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            var coba = document.createElement("button");
            coba.setAttribute("id", "coba");
            coba.setAttribute("class", "btn btn-primary");
            coba.setAttribute("onclick", "restart()");
            coba.textContent = "Try Again"

            var exit = document.createElement("button");
            exit.setAttribute("id", "exit");
            exit.setAttribute("class", "btn btn-danger");
            exit.setAttribute("onclick", "window.location.reload()");
            exit.textContent = "Exit"

            document.body.append(coba, exit)
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 100;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 80;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    if (myGameArea.keys && myGameArea.keys [37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys [39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys [38]) {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys [40]) {myGamePiece.speedY = 1; }
    myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}