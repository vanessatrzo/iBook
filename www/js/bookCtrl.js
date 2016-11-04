angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'La chica del tren', year: '2015', author: 'Paula Hawkins', isbn: '843992688X', editorial: 'Planeta', cover: 'http://www.alianzaeditorial.es/jpg_g/alianza/LB00331701.jpg' }, 
      { title: 'Destroza este Diario', year: '2016', author: 'Keri Smith', isbn: '0936388110', editorial: 'Paidos', cover: "http://www.catedra.com/jpg_g/catedra/CA00004603.jpg" },       
      { title: 'Don Quijote de la Mancha', year: '1605',  author: 'Miguel de Cervantes Saavedra', isbn: '0844273619', editorial: 'Anaya', cover: "http://www.algaida.es/jpg_g/algaida/AG00160001.jpg" },       
      { title: 'El silencio de la ciudad blanca', year: '2014', author: 'Eva García Saénz de Urturi', isbn: '847039360X', editorial: 'actions', cover: "http://www.catedra.com/jpg_g/catedra/CA00095802.jpg" },       
      { title: 'La viuda', year: '2015', author: 'Fiona Barton', isbn: '8437624045', editorial: 'Planeta', cover: "http://www.catedra.com/jpg_g/catedra/CA00156001.jpg" }     
      ];  