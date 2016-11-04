angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: 'Enero 2016 - hoy', description: 'Desarrollo web' },      
	{ date: '2011 - Hoy', description: 'Fotografa' },      
	{ date: '2008 - Hoy', description: 'Reparacion de equipo de computo' } 
]; 
})