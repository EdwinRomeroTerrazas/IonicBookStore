angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'La Odisea', year: '2015', author: 'Paula Hawkins', isbn: '843992688X', editorial: 'Planeta', cover: 'https://http2.mlstatic.com/la-odisea-canto-epico-homero-comcosur-D_NQ_NP_15038-MCO20095600963_052014-F.jpg' }, 
      { title: 'La ileada', year: '2016', author: 'Keri Smith', isbn: '0936388110', editorial: 'Paidos', cover: "http://wwwimgs.eoslibros.cl/_repositorio/ORI0308-fuente-300-400.jpg" },       
      { title: 'Divina Comedia', year: '1605',  author: 'Dante Alligheri', isbn: '0844273619', editorial: 'Anaya', cover: "http://3.bp.blogspot.com/-Kp4F-SR1St8/VOwWcP5m8qI/AAAAAAAAAMQ/di8ZhOJ9e_w/s1600/la-divina-comedia-dante-alighieri-sopena-6212-MLA96874618_1467-O.jpg" },       
      { title: 'Viaje al centro de la tierra', year: '2014', author: 'Julio Verne', isbn: '847039360X', editorial: 'actions', cover: "https://www.ecured.cu/images/a/a1/Viaje_al_centro_de_la_tierra.jpg" },       
      { title: '20000 Leguas de viaje submarino', year: '2015', author: 'Julio Verne', isbn: '8437624045', editorial: 'Planeta', cover: "http://kindleton.com/wp-content/uploads/2016/01/Julio-Verne.20000-leguas-de-viaje-submarino.Portada.jpg" }     
      ];  