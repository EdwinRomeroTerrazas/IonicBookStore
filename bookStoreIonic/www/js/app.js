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
      { title: 'La odisea', year: '1877', author: 'Homer', isbn: '843992688X', editorial: 'Emperor', cover: 'https://http2.mlstatic.com/la-odisea-canto-epico-homero-comcosur-D_NQ_NP_15038-MCO20095600963_052014-F.jpg' }, 
      { title: 'La ileada', year: '1877', author: 'Homero', isbn: '0936388110', editorial: 'Emperer', cover: "http://wwwimgs.eoslibros.cl/_repositorio/ORI0308-fuente-300-400.jpg" },       
      { title: 'La divina comedia', year: '1705',  author: 'Dante Alligheri', isbn: '0844273619', editorial: 'HillGrow', cover: "http://3.bp.blogspot.com/-Kp4F-SR1St8/VOwWcP5m8qI/AAAAAAAAAMQ/di8ZhOJ9e_w/s1600/la-divina-comedia-dante-alighieri-sopena-6212-MLA96874618_1467-O.jpg" },       
      { title: 'Viaje al centro de la tierra', year: '2013', author: 'Juoio Verne', isbn: '847039360X', editorial: 'Porrua', cover: "img/ciudadblanca.jpg" },       
      { title: '20000 Leguas de viaje subrmarino', year: '2000', author: 'Julio Verne', isbn: '8437624045', editorial: 'Porrua', cover: "http://kindleton.com/wp-content/uploads/2016/01/Julio-Verne.20000-leguas-de-viaje-submarino.Portada.jpg" }     
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

