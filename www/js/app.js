angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'La chica del tren', year: '2015', author: 'Paula Hawkins', isbn: '843992688X', editorial: 'Planeta', cover: 'img/chicatren.jpg' }, 
      { title: 'Destroza este Diario', year: '2016', author: 'Keri Smith', isbn: '0936388110', editorial: 'Paidos', cover: "img/diario.jpg" },       
      { title: 'Don Quijote de la Mancha', year: '1605',  author: 'Miguel de Cervantes Saavedra', isbn: '0844273619', editorial: 'Anaya', cover: "img/ingenioso.jpg" },       
      { title: 'El silencio de la ciudad blanca', year: '2014', author: 'Eva García Saénz de Urturi', isbn: '847039360X', editorial: 'actions', cover: "img/ciudadblanca.jpg" },       
      { title: 'La viuda', year: '2015', author: 'Fiona Barton', isbn: '8437624045', editorial: 'Planeta', cover: "img/viuda.jpg" }     
      ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

