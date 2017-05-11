'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:CourCtrl
 * @description
 * # CourCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('CourCtrl', function ($scope , $http , SERVER_URL) {
    $scope.affichageGraphe=false;
    $scope.barre=true;
    $scope.GrapheAafficher="Diagramme en barre";
    
    //declaration des variables 
    $scope.critere = {};
    $scope.critere.cour = true;
    $scope.critere.moyenneClasse = true;
    $scope.critere.statutCour = true;
    $scope.critere.nomMatiere = false;
    $scope.critere.numSession = false;
    $scope.critere.statutSession = false;
    $scope.critere.coeffSessionCour = false;
    $scope.critere.profil = false;
    $scope.critere.nbrCreditMatiere = false;
    $scope.critere.anneeScolaireSession = false;

    $scope.stat = {};
    $scope.stat.statut = true;
    $scope.stat.moyenne = true;
    $scope.stat.nomMatiere = true;
    $scope.stat.anneeScolaire = true;
    $scope.stat.statutSession = true;
    $scope.stat.numeroSession = true;
    $scope.stat.coeffSessionCour = true;

    //declaration des tableaux 
    $scope.listeCour = [];
    $scope.alldataCour = []; 
    $scope.listeMoyenneClasse = [];
    $scope.listeStatut = [];
    $scope.listeNomMatiere = [];
    $scope.listeNombreCredit = [];
    $scope.listeAnneeScolaire = [];
    $scope.listeStatutSession = [];
    $scope.listeNumeroSession = [];
    $scope.listeCoefficient = [];
     

    //getalldataCour
    $http.get(SERVER_URL + '/alldataCour').then(function(data){
      $scope.setAllDataCour(data.data);
      console.log($scope.listeCour);
      $scope.getStatut(data.data,0);
      console.log($scope.listeStatut);
      $scope.getMoyenneClasse(data.data,0);
      console.log($scope.listeMoyenneClasse);
      $scope.getNomMatiere(data.data , 0);
      console.log($scope.listeNomMatiere);
      $scope.getAnneeScolaire(data.data , 0);
      console.log($scope.listeAnneeScolaire);
      $scope.getStatutSession(data.data , 0);
      console.log($scope.listeStatutSession);
      $scope.getNumeroSession(data.data , 0);
      console.log($scope.listeNumeroSession);
      $scope.getCoefficient(data.data , 0);
      console.log($scope.listeCoefficient);
    });

    $scope.getCoefficient = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].session.coefficient != "" && data[i].session.coefficient != null){
            if(!$scope.listeCoefficient.includes(data[i].session.coefficient)){
              $scope.listeCoefficient.push(data[i].session.coefficient);
            }
          }
        }
      }
    }

    $scope.getNumeroSession = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].session.numero != "" && data[i].session.numero != null){
            if(!$scope.listeNumeroSession.includes(data[i].session.numero)){
              $scope.listeNumeroSession.push(data[i].session.numero);
            }
          }
        }
      }
    }

    $scope.getStatutSession = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].session.statut != "" && data[i].session.statut != null){
            if(!$scope.listeStatutSession.includes(data[i].session.statut)){
              $scope.listeStatutSession.push(data[i].session.statut);
            }
          }
        }
      }
    }

    $scope.getStatut = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].statut != "" && data[i].statut != null){
            if(!$scope.listeStatut.includes(data[i].statut)){
              $scope.listeStatut.push(data[i].statut);
            }
          }
        }
      }
    }

    $scope.getMoyenneClasse = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].moyenneclasse != "" && data[i].moyenneclasse != null){
            if(!$scope.listeMoyenneClasse.includes(data[i].moyenneclasse)){
              $scope.listeMoyenneClasse.push(data[i].moyenneclasse);
            }
          }
        }
      }
    }

    $scope.getNombreCredit = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].matiere.nbcredits != 0 && data[i].matiere.nbcredits != null){
            if(!$scope.listeNombreCredit.includes(data[i].matiere.nbcredits)){
              $scope.listeNombreCredit.push(data[i].matiere.nbcredits);
            }
          }
        }
      }
    }

    $scope.getAnneeScolaire = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].session.idanneescolaire != 0 && data[i].session.idanneescolaire != null){
            if(!$scope.listeAnneeScolaire.includes(data[i].session.idanneescolaire)){
              $scope.listeAnneeScolaire.push(data[i].session.idanneescolaire);
            }
          }
        }
      }
    }

    $scope.getNomMatiere = function(data , i){
      for(i = 0 ; i< data.length ; i++){
        if(data[i].id != null){
          if(data[i].matiere.label != "" && data[i].matiere.label != null){
            if(!$scope.listeNomMatiere.includes(data[i].matiere.label)){
              $scope.listeNomMatiere.push(data[i].matiere.label);
            }
          }
        }
      }
    }

    /* les fonctions  */
    $scope.setAllDataCour = function (data) {
        $scope.listeCour = data;
        $scope.alldataCour = data;
    };

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
