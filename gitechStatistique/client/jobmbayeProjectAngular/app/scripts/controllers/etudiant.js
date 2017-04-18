'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:EtudiantCtrl
 * @description
 * # EtudiantCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('EtudiantCtrl', function ($scope,$http,API_URL) {
  	$scope.affichageGraphe=false;
  	$scope.barre=true;
  	$scope.ufrs;
  	$scope.departements;
  	$scope.filieres;
  	$scope.unitens;
  	$scope.programmes;
  	$scope.matieres;
  	$scope.niveaux;
  	$scope.GrapheAafficher="Diagramme en barre";
	$scope.listeNationalite=[];
	$scope.niveauAnnee = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
	$http.get('../../json/nationalities_fr.json').then(function(data){
		$scope.listeNationalite = data.data;
		console.log($scope.listeNationalite);
	},function(err){
		console.log(err);
	});


  	//Initialisation des données
  	$http.get(API_URL + 'ufrs').then(function(data){
		$scope.ufrs=data.data;
	},function(err){
		console.log(err);
	});

	$http.get(API_URL + 'departements').then(function(data){
		$scope.departements=data.data;
	},function(err){
		console.log(err);
	});

	$http.get(API_URL + 'filieres').then(function(data){
		$scope.filieres=data.data;
	},function(err){
		console.log(err);
	});

	$http.get(API_URL + 'unitens').then(function(data){
		$scope.unitens=data.data;
	},function(err){
		console.log(err);
	});

	$http.get(API_URL + 'programmes').then(function(data){
		$scope.programmes=data.data;
	},function(err){
		console.log(err);
	});

	$http.get(API_URL + 'matieres').then(function(data){
		$scope.matieres=data.data;
	},function(err){
		console.log(err);
	});
	/*$http.get(API_URL + 'niveaus').then(function(data){
		$scope.niveaux=data.data;
	},function(err){
		console.log(err);
	});*/

  	// Fin initialisation des données
    $scope.collapsed = function () {
      this.fermer=!this.fermer;
    }
    $scope.changeGrapheTableau = function()
    {
    	$scope.affichageGraphe = !$scope.affichageGraphe;
    }
    
    
    $scope.changeTypeGraphe = function()
    {
    	if($scope.GrapheAafficher=="Diagramme en barre")
    	{
    		$scope.barre=true;
    		$scope.circulaire=false;
    		$scope.courbe=false;
    		$scope.ligne=false;
    		$scope.surface=false;
    	}
    	else if($scope.GrapheAafficher=="Diagramme circulaire")
    	{
    		$scope.circulaire=true;
    		$scope.barre=false;
    		$scope.courbe=false;
    		$scope.ligne=false;
    		$scope.surface=false;
    	}
    	else if($scope.GrapheAafficher=="Diagramme en courbe")
    	{
    		$scope.courbe=true;
    		$scope.circulaire=false;
    		$scope.barre=false;
    		$scope.ligne=false;
    		$scope.surface=false;
    	}
    	else if($scope.GrapheAafficher=="Diagramme en pyramide")
    	{
    		$scope.courbe=true;
    		$scope.circulaire=false;
    		$scope.barre=false;
    		$scope.pyramid=false;
    		$scope.surface=false;
    	}
    	else if($scope.GrapheAafficher=="Diagramme en surface")
    	{
    		$scope.surface=true;
    		$scope.circulaire=false;
    		$scope.courbe=false;
    		$scope.ligne=false;
    		$scope.barre=false;
    	}
    }

    Highcharts.chart('container', {
    chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Chart rotation demo'
    },
    subtitle: {
        text: 'Test options by dragging the sliders below'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});


Highcharts.chart('pieChar', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Browser market shares at a specific website, 2014'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ]
    }]
});
  });
