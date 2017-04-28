'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:EtudiantCtrl
 * @description
 * # EtudiantCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('EtudiantCtrl', function ($scope,$http,SERVER_URL,API_URL) {
  	$scope.affichageGraphe=false;
  	$scope.barre=true;
  	$scope.GrapheAafficher="Diagramme en barre";
  	$scope.alldataEtudiant = null;

  	//declaration des tableaux
    $scope.listeNationalite = [];
    $scope.niveauAnnee = [];
    $scope.listeEtudiant = [];
    $scope.listeStatut = [];
    $scope.listeMention = [];


    //declaration des variables critere de selection
    $scope.stat = {};
    $scope.stat.genre = true;
    $scope.stat.resultat = true;
    $scope.stat.nationalite = true;
    $scope.stat.statut = true;
    $scope.stat.niveau = true;
    $scope.stat.mention = true;

    //declaration des variables critere d'affichage
    $scope.critere = {};
    $scope.critere.nom = true;
    $scope.critere.prenom = true;
    $scope.critere.adresse = true;
    $scope.critere.profile = false;
    $scope.critere.genre = true;
    $scope.critere.telephone = true;
    $scope.critere.email = false;
    $scope.critere.matricule = false;
    $scope.critere.datedenaissance = false;
    $scope.critere.lieudenaissance = false;
    $scope.critere.compte = false;
    $scope.critere.niveauannee = false;
    $scope.critere.datedebut = false;
    $scope.critere.statut = false;
    $scope.critere.nomutilisateur = false;
    $scope.critere.appellation = false;

    //recuperation de tous les donnees etudiant
    $http.get(SERVER_URL + '/alldataEtudiant').then(function (data) {
      $scope.setAllDataEtudiant(data.data);
      console.log($scope.alldataEtudiant);
      $scope.getStatut(data.data , 0);
      console.log($scope.listeStatut);
      $scope.getMention(data.data , 0);
      console.log($scope.listeMention);
      $scope.getNiveau(data.data , 0);
      console.log($scope.niveauAnnee);
    },function (err) {
      console.log(err);
    });

    /* les fonctions  */
    $scope.setAllDataEtudiant = function (data) {
        $scope.listeEtudiant = data;
        $scope.alldataEtudiant = data;
    };

    $http.get(API_URL + 'personnes').then(function (data) {
      var i;
      for(i = 0 ; i < data.data.length ; i++){
        if(data.data[i] != null){
          if(data.data[i].nationalite != null && data.data[i].nationalite != ""){
            if(!$scope.listeNationalite.includes(data.data[i].nationalite)){
              $scope.listeNationalite.push(data.data[i].nationalite);
            }
          }
        }
      }
      console.log($scope.listeNationalite);
    });


    $scope.getStatut = function (data, i) {
      for(i=0 ; i < data.length ; i++){
        if(data[i].id != null){
          if(data[i].statut != "" && data[i].statut != null){
            if(!$scope.listeStatut.includes(data[i].etudiant.statut)){
              $scope.listeStatut.push(data[i].etudiant.statut);
            }
          }
        }
      }
    };

    $scope.getMention = function (data, i) {
      for(i=0 ; i < data.length ; i++){
        if(data[i].id != null){
          if(data[i].mention != "" && data[i].mention != null){
            if(!$scope.listeMention.includes(data[i].mention)){
              $scope.listeMention.push(data[i].mention);
            }
          }
        }
      }
    };

    $scope.getNiveau = function (data, i) {
      for(i=0 ; i < data.length ; i++){
        if(data[i].id != null){
          if(data[i].etudiant.niveauannee != "" && data[i].etudiant.niveauannee != null){
            if(!$scope.niveauAnnee.includes(data[i].etudiant.niveauannee)){
              $scope.niveauAnnee.push(data[i].etudiant.niveauannee);
            }
          }
        }
      }
    };

    /*$http.get('../../json/nationalities_fr.json').then(function(data){
		  $scope.listeNationalite = data.data;
		  console.log($scope.listeNationalite);
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
