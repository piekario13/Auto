var Auto = function (x, y) {
    this.x = x;
    this.y = y;
};

// var rysujAuto = function (auto) {
//     var autoHtml = '<img src="http://nostarch.com/images/car.png">';

//     var autoElement = $(autoHtml);

//     autoElement.css({
//         position: "absolute",
//         left: auto.x,
//         top: auto.y
//     });
//     $("body").append(autoElement);
// };

// var tesla = new Auto(20, 20);
// var nissan = new Auto(100, 200);
// rysujAuto(tesla);
// rysujAuto(nissan);

Auto.prototype.rysuj = function () {
    var autoHtml = '<img src="http://nostarch.com/images/car.png">';

    this.autoElement = $(autoHtml);

    this.autoElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $("body").append(this.autoElement);
};

Auto.prototype.wPrawo = function () {
    this.x += 5;

    this.autoElement.css({
        left: this.x,
        top: this.y
    });
};
Auto.prototype.wLewo = function () {
    this.x -= 5;

    this.autoElement.css({
        left: this.x,
        top: this.y
    });
};
Auto.prototype.wGore = function () {
    this.y -= 5;

    this.autoElement.css({
        left: this.x,
        top: this.y
    });
};
Auto.prototype.wDol = function () {
    this.y += 5;

    this.autoElement.css({
        left: this.x,
        top: this.y
    });
};


var tesla = new Auto(20, 20);
var nissan = new Auto(100, 200);

tesla.rysuj();
nissan.rysuj();

var jedz = function () {
    tesla.wDol() * 100;
}
jedz();