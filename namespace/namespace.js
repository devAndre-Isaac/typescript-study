var Areas;
(function (Areas) {
    var PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
var PI = 2.99;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);
