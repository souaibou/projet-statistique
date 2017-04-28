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
    $scope.listeNationalite=[];
    $scope.niveauAnnee = [];
    $scope.listeEtudiant = [];


    $http.get("http://localhost:3000/alldataEtudiant").then(function (data) {
      $scope.listeEtudiant = data;
      console.log($scope.listeEtudiant);
    },function (err) {
      console.log(err);
    });

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
