angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: '1993 - Hoy', description: 'Una leyenda' },      
	{ date: '2012 - Hoy', description: 'Actualmente cursando Ingeniería en Sistemas, Tecnológico II de Chihuahua' },      
	{ date: '2009 - 2012', description: 'Cursó estudio en  CBTis 122, técnico en informática' } 
]; 
})