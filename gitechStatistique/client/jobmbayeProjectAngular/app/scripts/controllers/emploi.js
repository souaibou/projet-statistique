'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('EmploiCtrl', function ($scope,$http,API_URL) {
  	$scope.affichageGraphe=false;
  	$scope.barre=true;
    $scope.alldata;
    $scope.emplois;
  	$scope.ufrs;
  	$scope.departements;
  	$scope.filieres;
  	$scope.unitens;
  	$scope.programmes;
    $scope.stat={};
    $scope.statReq={};
    $scope.resultats=[];
    var tabaff=[];
    var tabDonnee=[];
    //initialisation de l'affichage
        $scope.stat.etatcompte=true;
        $scope.stat.etatdemande=true;
        $scope.stat.sexe=true;
        $scope.stat.etape=true;
        $scope.stat.ufr=true;
        $scope.stat.departement=true;
        $scope.stat.filiere=true;
        $scope.stat.programme=true;
        $scope.stat.uniten=true;
        $scope.stat.matiere=true;
        $scope.stat.niveauetude=true;
        $scope.stat.discipline=true;
        $scope.stat.specialite=true;
        $scope.stat.nationalite=true;
        $scope.stat.indicatif=true;
        $scope.critere={};
        $scope.critere.nom=true;
        $scope.critere.prenom=true;
        $scope.critere.indicatif=true;
        $scope.critere.telephone=true;
        $scope.critere.compte=true;
        $scope.critere.dossier=true;
        $scope.critere.demande=true;
    //initialisation des views
        $scope.niveauetudes=[];
        $scope.disciplines=[];
        $scope.specialites=[];
        $scope.nationalites=[];
        $scope.residences=[];
        $scope.indicatifs=[];
        $scope.resultats=[];
        $scope.etatcomptes=[];
	  	$scope.etapes=[];
	  	$scope.etatdemandes=[];
	  	$scope.sexes=[];
	  	$scope.matieres;
  	$scope.niveaux;
  	$scope.GrapheAafficher="Diagramme en barre";

    $scope.indicatifPays = [
            {
            "name": "Afghanistan",
            "dial_code": "+93",
            "code": "AF"
            },
            {
            "name": "Aland Islands",
            "dial_code": "+358",
            "code": "AX"
            },
            {
            "name": "Albania",
            "dial_code": "+355",
            "code": "AL"
            },
            {
            "name": "Algeria",
            "dial_code": "+213",
            "code": "DZ"
            },
            {
            "name": "AmericanSamoa",
            "dial_code": "+1684",
            "code": "AS"
            },
            {
            "name": "Andorra",
            "dial_code": "+376",
            "code": "AD"
            },
            {
            "name": "Angola",
            "dial_code": "+244",
            "code": "AO"
            },
            {
            "name": "Anguilla",
            "dial_code": "+1264",
            "code": "AI"
            },
            {
            "name": "Antarctica",
            "dial_code": "+672",
            "code": "AQ"
            },
            {
            "name": "Antigua and Barbuda",
            "dial_code": "+1268",
            "code": "AG"
            },
            {
            "name": "Argentina",
            "dial_code": "+54",
            "code": "AR"
            },
            {
            "name": "Armenia",
            "dial_code": "+374",
            "code": "AM"
            },
            {
            "name": "Aruba",
            "dial_code": "+297",
            "code": "AW"
            },
            {
            "name": "Australia",
            "dial_code": "+61",
            "code": "AU"
            },
            {
            "name": "Austria",
            "dial_code": "+43",
            "code": "AT"
            },
            {
            "name": "Azerbaijan",
            "dial_code": "+994",
            "code": "AZ"
            },
            {
            "name": "Bahamas",
            "dial_code": "+1242",
            "code": "BS"
            },
            {
            "name": "Bahrain",
            "dial_code": "+973",
            "code": "BH"
            },
            {
            "name": "Bangladesh",
            "dial_code": "+880",
            "code": "BD"
            },
            {
            "name": "Barbados",
            "dial_code": "+1246",
            "code": "BB"
            },
            {
            "name": "Belarus",
            "dial_code": "+375",
			"code": "BY"
            },
            {
            "name": "Belgium",
            "dial_code": "+32",
            "code": "BE"
            },
            {
            "name": "Belize",
            "dial_code": "+501",
            "code": "BZ"
            },
            {
            "name": "Benin",
            "dial_code": "+229",
            "code": "BJ"
            },
            {
            "name": "Bermuda",
            "dial_code": "+1441",
            "code": "BM"
            },
            {
            "name": "Bhutan",
            "dial_code": "+975",
            "code": "BT"
            },
            {
            "name": "Bolivia, Plurinational State of",
            "dial_code": "+591",
            "code": "BO"
            },
            {
            "name": "Bosnia and Herzegovina",
            "dial_code": "+387",
            "code": "BA"
            },
            {
            "name": "Botswana",
            "dial_code": "+267",
            "code": "BW"
            },
            {
            "name": "Brazil",
            "dial_code": "+55",
            "code": "BR"
            },
            {
            "name": "British Indian Ocean Territory",
            "dial_code": "+246",
            "code": "IO"
            },
            {
            "name": "Brunei Darussalam",
            "dial_code": "+673",
            "code": "BN"
            },
            {
            "name": "Bulgaria",
            "dial_code": "+359",
            "code": "BG"
            },
            {
            "name": "Burkina Faso",
            "dial_code": "+226",
            "code": "BF"
            },
            {
            "name": "Burundi",
            "dial_code": "+257",
            "code": "BI"
            },
            {
            "name": "Cambodia",
            "dial_code": "+855",
            "code": "KH"
            },
            {
            "name": "Cameroon",
            "dial_code": "+237",
            "code": "CM"
            },
            {
            "name": "Canada",
            "dial_code": "+1",
            "code": "CA"
            },
            {
            "name": "Cape Verde",
            "dial_code": "+238",
            "code": "CV"
            },
            {
            "name": "Cayman Islands",
            "dial_code": "+ 345",
            "code": "KY"
            },
            {
            "name": "Central African Republic",
            "dial_code": "+236",
            "code": "CF"
            },
            {
            "name": "Chad",
            "dial_code": "+235",
            "code": "TD"
            },
            {
            "name": "Chile",
            "dial_code": "+56",
            "code": "CL"
            },
            {
            "name": "China",
            "dial_code": "+86",
            "code": "CN"
            },
            {
            "name": "Christmas Island",
            "dial_code": "+61",
            "code": "CX"
            },
            {
            "name": "Cocos (Keeling) Islands",
            "dial_code": "+61",
            "code": "CC"
            },
            {
            "name": "Colombia",
            "dial_code": "+57",
            "code": "CO"
            },
            {
            "name": "Comoros",
            "dial_code": "+269",
            "code": "KM"
            },
            {
            "name": "Congo",
            "dial_code": "+242",
            "code": "CG"
            },
            {
            "name": "Congo, The Democratic Republic of the Congo",
            "dial_code": "+243",
            "code": "CD"
            },
            {
            "name": "Cook Islands",
            "dial_code": "+682",
            "code": "CK"
            },
            {
            "name": "Costa Rica",
            "dial_code": "+506",
            "code": "CR"
            },
            {
            "name": "Cote d'Ivoire",
            "dial_code": "+225",
            "code": "CI"
            },
            {
            "name": "Croatia",
            "dial_code": "+385",
            "code": "HR"
            },
            {
            "name": "Cuba",
            "dial_code": "+53",
            "code": "CU"
            },
            {
            "name": "Cyprus",
            "dial_code": "+357",
            "code": "CY"
            },
            {
            "name": "Czech Republic",
            "dial_code": "+420",
            "code": "CZ"
            },
            {
            "name": "Denmark",
            "dial_code": "+45",
            "code": "DK"
            },
            {
            "name": "Djibouti",
            "dial_code": "+253",
            "code": "DJ"
            },
            {
            "name": "Dominica",
            "dial_code": "+1767",
            "code": "DM"
            },
            {
            "name": "Dominican Republic",
            "dial_code": "+1849",
            "code": "DO"
            },
            {
            "name": "Ecuador",
            "dial_code": "+593",
            "code": "EC"
            },
            {
            "name": "Egypt",
            "dial_code": "+20",
            "code": "EG"
            },
            {
            "name": "El Salvador",
            "dial_code": "+503",
            "code": "SV"
            },
            {
            "name": "Equatorial Guinea",
            "dial_code": "+240",
            "code": "GQ"
            },
            {
            "name": "Eritrea",
            "dial_code": "+291",
            "code": "ER"
            },
            {
            "name": "Estonia",
            "dial_code": "+372",
            "code": "EE"
            },
            {
            "name": "Ethiopia",
            "dial_code": "+251",
            "code": "ET"
            },
            {
            "name": "Falkland Islands (Malvinas)",
            "dial_code": "+500",
            "code": "FK"
            },
            {
            "name": "Faroe Islands",
            "dial_code": "+298",
            "code": "FO"
            },
            {
            "name": "Fiji",
            "dial_code": "+679",
            "code": "FJ"
            },
            {
            "name": "Finland",
            "dial_code": "+358",
            "code": "FI"
            },
            {
            "name": "France",
            "dial_code": "+33",
            "code": "FR"
            },
            {
            "name": "French Guiana",
            "dial_code": "+594",
            "code": "GF"
            },
            {
            "name": "French Polynesia",
            "dial_code": "+689",
            "code": "PF"
            },
            {
            "name": "Gabon",
            "dial_code": "+241",
            "code": "GA"
            },
            {
            "name": "Gambia",
            "dial_code": "+220",
            "code": "GM"
            },
            {
            "name": "Georgia",
            "dial_code": "+995",
            "code": "GE"
            },
            {
            "name": "Germany",
            "dial_code": "+49",
            "code": "DE"
            },
            {
            "name": "Ghana",
            "dial_code": "+233",
            "code": "GH"
            },
            {
            "name": "Gibraltar",
            "dial_code": "+350",
            "code": "GI"
            },
            {
            "name": "Greece",
            "dial_code": "+30",
            "code": "GR"
            },
            {
            "name": "Greenland",
            "dial_code": "+299",
            "code": "GL"
            },
            {
            "name": "Grenada",
            "dial_code": "+1473",
            "code": "GD"
            },
            {
            "name": "Guadeloupe",
            "dial_code": "+590",
            "code": "GP"
            },
            {
            "name": "Guam",
            "dial_code": "+1671",
            "code": "GU"
            },
            {
            "name": "Guatemala",
            "dial_code": "+502",
            "code": "GT"
            },
            {
            "name": "Guernsey",
            "dial_code": "+44",
            "code": "GG"
            },
            {
            "name": "Guinea",
            "dial_code": "+224",
            "code": "GN"
            },
            {
            "name": "Guinea-Bissau",
            "dial_code": "+245",
            "code": "GW"
            },
            {
            "name": "Guyana",
            "dial_code": "+595",
            "code": "GY"
            },
            {
            "name": "Haiti",
            "dial_code": "+509",
            "code": "HT"
            },
            {
            "name": "Holy See (Vatican City State)",
            "dial_code": "+379",
            "code": "VA"
            },
            {
            "name": "Honduras",
            "dial_code": "+504",
            "code": "HN"
            },
            {
            "name": "Hong Kong",
            "dial_code": "+852",
            "code": "HK"
            },
            {
            "name": "Hungary",
            "dial_code": "+36",
            "code": "HU"
            },
            {
            "name": "Iceland",
            "dial_code": "+354",
            "code": "IS"
            },
            {
            "name": "India",
            "dial_code": "+91",
            "code": "IN"
            },
            {
            "name": "Indonesia",
            "dial_code": "+62",
            "code": "ID"
            },
            {
            "name": "Iran, Islamic Republic of Persian Gulf",
            "dial_code": "+98",
            "code": "IR"
            },
            {
            "name": "Iraq",
            "dial_code": "+964",
            "code": "IQ"
            },
            {
            "name": "Ireland",
            "dial_code": "+353",
            "code": "IE"
            },
            {
            "name": "Isle of Man",
            "dial_code": "+44",
            "code": "IM"
            },
            {
            "name": "Israel",
            "dial_code": "+972",
            "code": "IL"
            },
            {
            "name": "Italy",
            "dial_code": "+39",
            "code": "IT"
            },
            {
            "name": "Jamaica",
            "dial_code": "+1876",
            "code": "JM"
            },
            {
            "name": "Japan",
            "dial_code": "+81",
            "code": "JP"
            },
            {
            "name": "Jersey",
            "dial_code": "+44",
            "code": "JE"
            },
            {
            "name": "Jordan",
            "dial_code": "+962",
            "code": "JO"
            },
            {
            "name": "Kazakhstan",
            "dial_code": "+77",
            "code": "KZ"
            },
            {
            "name": "Kenya",
            "dial_code": "+254",
            "code": "KE"
            },
            {
            "name": "Kiribati",
            "dial_code": "+686",
            "code": "KI"
            },
            {
            "name": "Korea, Democratic People's Republic of Korea",
            "dial_code": "+850",
            "code": "KP"
            },
            {
            "name": "Korea, Republic of South Korea",
            "dial_code": "+82",
            "code": "KR"
            },
            {
            "name": "Kuwait",
            "dial_code": "+965",
            "code": "KW"
            },
            {
            "name": "Kyrgyzstan",
            "dial_code": "+996",
            "code": "KG"
            },
            {
            "name": "Laos",
            "dial_code": "+856",
            "code": "LA"
            },
            {
            "name": "Latvia",
            "dial_code": "+371",
            "code": "LV"
            },
            {
            "name": "Lebanon",
            "dial_code": "+961",
            "code": "LB"
            },
            {
            "name": "Lesotho",
            "dial_code": "+266",
            "code": "LS"
            },
            {
            "name": "Liberia",
            "dial_code": "+231",
            "code": "LR"
            },
            {
            "name": "Libyan Arab Jamahiriya",
            "dial_code": "+218",
            "code": "LY"
            },
            {
            "name": "Liechtenstein",
            "dial_code": "+423",
            "code": "LI"
            },
            {
            "name": "Lithuania",
            "dial_code": "+370",
            "code": "LT"
            },
            {
            "name": "Luxembourg",
            "dial_code": "+352",
            "code": "LU"
            },
            {
            "name": "Macao",
            "dial_code": "+853",
            "code": "MO"
            },
            {
            "name": "Macedonia",
            "dial_code": "+389",
            "code": "MK"
            },
            {
            "name": "Madagascar",
            "dial_code": "+261",
            "code": "MG"
            },
            {
            "name": "Malawi",
            "dial_code": "+265",
            "code": "MW"
            },
            {
            "name": "Malaysia",
            "dial_code": "+60",
            "code": "MY"
            },
            {
            "name": "Maldives",
            "dial_code": "+960",
            "code": "MV"
            },
            {
            "name": "Mali",
            "dial_code": "+223",
            "code": "ML"
            },
            {
            "name": "Malta",
            "dial_code": "+356",
            "code": "MT"
            },
            {
            "name": "Marshall Islands",
            "dial_code": "+692",
            "code": "MH"
            },
            {
            "name": "Martinique",
            "dial_code": "+596",
            "code": "MQ"
            },
            {
            "name": "Mauritania",
            "dial_code": "+222",
            "code": "MR"
            },
            {
            "name": "Mauritius",
            "dial_code": "+230",
            "code": "MU"
            },
            {
            "name": "Mayotte",
            "dial_code": "+262",
            "code": "YT"
            },
            {
            "name": "Mexico",
            "dial_code": "+52",
            "code": "MX"
            },
            {
            "name": "Micronesia, Federated States of Micronesia",
            "dial_code": "+691",
            "code": "FM"
            },
            {
            "name": "Moldova",
            "dial_code": "+373",
            "code": "MD"
            },
            {
            "name": "Monaco",
            "dial_code": "+377",
            "code": "MC"
            },
            {
            "name": "Mongolia",
            "dial_code": "+976",
            "code": "MN"
            },
            {
            "name": "Montenegro",
            "dial_code": "+382",
            "code": "ME"
            },
            {
            "name": "Montserrat",
            "dial_code": "+1664",
            "code": "MS"
            },
            {
            "name": "Morocco",
            "dial_code": "+212",
            "code": "MA"
            },
            {
            "name": "Mozambique",
            "dial_code": "+258",
            "code": "MZ"
            },
            {
            "name": "Myanmar",
            "dial_code": "+95",
            "code": "MM"
            },
            {
            "name": "Namibia",
            "dial_code": "+264",
            "code": "NA"
            },
            {
            "name": "Nauru",
            "dial_code": "+674",
            "code": "NR"
            },
            {
            "name": "Nepal",
            "dial_code": "+977",
            "code": "NP"
            },
            {
            "name": "Netherlands",
            "dial_code": "+31",
            "code": "NL"
            },
            {
            "name": "Netherlands Antilles",
            "dial_code": "+599",
            "code": "AN"
            },
            {
            "name": "New Caledonia",
            "dial_code": "+687",
            "code": "NC"
            },
            {
            "name": "New Zealand",
            "dial_code": "+64",
            "code": "NZ"
            },
            {
            "name": "Nicaragua",
            "dial_code": "+505",
            "code": "NI"
            },
            {
            "name": "Niger",
            "dial_code": "+227",
            "code": "NE"
            },
            {
            "name": "Nigeria",
            "dial_code": "+234",
            "code": "NG"
            },
            {
            "name": "Niue",
            "dial_code": "+683",
            "code": "NU"
            },
            {
            "name": "Norfolk Island",
            "dial_code": "+672",
            "code": "NF"
            },
            {
            "name": "Northern Mariana Islands",
            "dial_code": "+1670",
            "code": "MP"
            },
            {
            "name": "Norway",
            "dial_code": "+47",
            "code": "NO"
            },
            {
            "name": "Oman",
            "dial_code": "+968",
            "code": "OM"
            },
            {
            "name": "Pakistan",
            "dial_code": "+92",
            "code": "PK"
            },
            {
            "name": "Palau",
            "dial_code": "+680",
            "code": "PW"
            },
            {
            "name": "Palestinian Territory, Occupied",
            "dial_code": "+970",
            "code": "PS"
            },
            {
            "name": "Panama",
            "dial_code": "+507",
            "code": "PA"
            },
            {
            "name": "Papua New Guinea",
            "dial_code": "+675",
            "code": "PG"
            },
            {
            "name": "Paraguay",
            "dial_code": "+595",
            "code": "PY"
            },
            {
            "name": "Peru",
            "dial_code": "+51",
            "code": "PE"
            },
            {
            "name": "Philippines",
            "dial_code": "+63",
            "code": "PH"
            },
            {
            "name": "Pitcairn",
            "dial_code": "+872",
            "code": "PN"
            },
            {
            "name": "Poland",
            "dial_code": "+48",
            "code": "PL"
            },
            {
            "name": "Portugal",
            "dial_code": "+351",
            "code": "PT"
            },
            {
            "name": "Puerto Rico",
            "dial_code": "+1939",
            "code": "PR"
            },
            {
            "name": "Qatar",
            "dial_code": "+974",
            "code": "QA"
            },
            {
            "name": "Romania",
            "dial_code": "+40",
            "code": "RO"
            },
            {
            "name": "Russia",
            "dial_code": "+7",
            "code": "RU"
            },
            {
            "name": "Rwanda",
            "dial_code": "+250",
            "code": "RW"
            },
            {
            "name": "Reunion",
            "dial_code": "+262",
            "code": "RE"
            },
            {
            "name": "Saint Barthelemy",
            "dial_code": "+590",
            "code": "BL"
            },
            {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dial_code": "+290",
            "code": "SH"
            },
            {
            "name": "Saint Kitts and Nevis",
            "dial_code": "+1869",
            "code": "KN"
            },
            {
            "name": "Saint Lucia",
            "dial_code": "+1758",
            "code": "LC"
            },
            {
            "name": "Saint Martin",
            "dial_code": "+590",
            "code": "MF"
            },
            {
            "name": "Saint Pierre and Miquelon",
            "dial_code": "+508",
            "code": "PM"
            },
            {
            "name": "Saint Vincent and the Grenadines",
            "dial_code": "+1784",
            "code": "VC"
            },
            {
            "name": "Samoa",
            "dial_code": "+685",
            "code": "WS"
            },
            {
            "name": "San Marino",
            "dial_code": "+378",
            "code": "SM"
            },
            {
            "name": "Sao Tome and Principe",
            "dial_code": "+239",
            "code": "ST"
            },
            {
            "name": "Saudi Arabia",
            "dial_code": "+966",
            "code": "SA"
            },
            {
            "name": "Senegal",
            "dial_code": "+221",
            "code": "SN"
            },
            {
            "name": "Serbia",
            "dial_code": "+381",
            "code": "RS"
            },
            {
            "name": "Seychelles",
            "dial_code": "+248",
            "code": "SC"
            },
            {
            "name": "Sierra Leone",
            "dial_code": "+232",
            "code": "SL"
            },
            {
            "name": "Singapore",
            "dial_code": "+65",
            "code": "SG"
            },
            {
            "name": "Slovakia",
            "dial_code": "+421",
            "code": "SK"
            },
            {
            "name": "Slovenia",
            "dial_code": "+386",
            "code": "SI"
            },
            {
            "name": "Solomon Islands",
            "dial_code": "+677",
            "code": "SB"
            },
            {
            "name": "Somalia",
            "dial_code": "+252",
            "code": "SO"
            },
            {
            "name": "South Africa",
            "dial_code": "+27",
            "code": "ZA"
            },
            {
            "name": "South Sudan",
            "dial_code": "+211",
            "code": "SS"
            },
            {
            "name": "South Georgia and the South Sandwich Islands",
            "dial_code": "+500",
            "code": "GS"
            },
            {
            "name": "Spain",
            "dial_code": "+34",
            "code": "ES"
            },
            {
            "name": "Sri Lanka",
            "dial_code": "+94",
            "code": "LK"
            },
            {
            "name": "Sudan",
            "dial_code": "+249",
            "code": "SD"
            },
            {
            "name": "Suriname",
            "dial_code": "+597",
            "code": "SR"
            },
            {
            "name": "Svalbard and Jan Mayen",
            "dial_code": "+47",
            "code": "SJ"
            },
            {
            "name": "Swaziland",
            "dial_code": "+268",
            "code": "SZ"
            },
            {
            "name": "Sweden",
            "dial_code": "+46",
            "code": "SE"
            },
            {
            "name": "Switzerland",
            "dial_code": "+41",
            "code": "CH"
            },
            {
            "name": "Syrian Arab Republic",
            "dial_code": "+963",
            "code": "SY"
            },
            {
            "name": "Taiwan",
            "dial_code": "+886",
            "code": "TW"
            },
            {
            "name": "Tajikistan",
            "dial_code": "+992",
            "code": "TJ"
            },
            {
            "name": "Tanzania, United Republic of Tanzania",
            "dial_code": "+255",
            "code": "TZ"
            },
            {
            "name": "Thailand",
            "dial_code": "+66",
            "code": "TH"
            },
            {
            "name": "Timor-Leste",
            "dial_code": "+670",
            "code": "TL"
            },
            {
            "name": "Togo",
            "dial_code": "+228",
            "code": "TG"
            },
            {
            "name": "Tokelau",
            "dial_code": "+690",
            "code": "TK"
            },
            {
            "name": "Tonga",
            "dial_code": "+676",
            "code": "TO"
            },
            {
            "name": "Trinidad and Tobago",
            "dial_code": "+1868",
            "code": "TT"
            },
            {
            "name": "Tunisia",
            "dial_code": "+216",
            "code": "TN"
            },
            {
            "name": "Turkey",
            "dial_code": "+90",
            "code": "TR"
            },
            {
            "name": "Turkmenistan",
            "dial_code": "+993",
            "code": "TM"
            },
            {
            "name": "Turks and Caicos Islands",
            "dial_code": "+1649",
            "code": "TC"
            },
            {
            "name": "Tuvalu",
            "dial_code": "+688",
            "code": "TV"
            },
            {
            "name": "Uganda",
            "dial_code": "+256",
            "code": "UG"
            },
            {
            "name": "Ukraine",
            "dial_code": "+380",
            "code": "UA"
            },
            {
            "name": "United Arab Emirates",
            "dial_code": "+971",
            "code": "AE"
            },
            {
            "name": "United Kingdom",
            "dial_code": "+44",
            "code": "GB"
            },
            {
            "name": "United States",
            "dial_code": "+1",
            "code": "US"
            },
            {
            "name": "Uruguay",
            "dial_code": "+598",
            "code": "UY"
            },
            {
            "name": "Uzbekistan",
            "dial_code": "+998",
            "code": "UZ"
            },
            {
            "name": "Vanuatu",
            "dial_code": "+678",
            "code": "VU"
            },
            {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dial_code": "+58",
            "code": "VE"
            },
            {
            "name": "Vietnam",
            "dial_code": "+84",
            "code": "VN"
            },
            {
            "name": "Virgin Islands, British",
            "dial_code": "+1284",
            "code": "VG"
            },
            {
            "name": "Virgin Islands, U.S.",
            "dial_code": "+1340",
            "code": "VI"
            },
            {
            "name": "Wallis and Futuna",
            "dial_code": "+681",
            "code": "WF"
            },
            {
            "name": "Yemen",
            "dial_code": "+967",
            "code": "YE"
            },
            {
            "name": "Zambia",
            "dial_code": "+260",
            "code": "ZM"
            },
            {
            "name": "Zimbabwe",
            "dial_code": "+263",
            "code": "ZW"
            }
    ];

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

    /*$http.get('scripts/jsressource/indicatifPays.json').then(function(data){
        $scope.getIndicatif(data);
        console.log("$scope.getIndicatif",data)
    }, function(err){
        console.log(err)
    });*/

    $http.get("http://localhost:3000/alldata").then(function(data){
        $scope.setAllData(data.data);
        $scope.getNiveauEtude(data.data,0);
        $scope.getDiscipline(data.data,0);
        $scope.getSpecialite(data.data,0);
        $scope.getNationalite(data.data,0);
        $scope.getResidence(data.data,0);
        $scope.getEtatCompte(data.data,0);
        $scope.getEatDossier(data.data,0);
        $scope.getEtatDemande(data.data,0);
        $scope.getGenre(data.data,0);

    },function(err){
        console.log(err);
    });

    $scope.setIndicatif=function(data)
    {
        $scope.indicatifPays=data;
    }

    $scope.setAllData=function(data)
    {
        $scope.alldata=data;
        $scope.emplois=data;
    }

    $scope.getNiveauEtude = function(data,i)
    {   
    	for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.niveauetudes.includes(data[i].compteemploi.niveauetude))
                {
                    $scope.niveauetudes.push(data[i].compteemploi.niveauetude)
                }
            }
        }
    }

    $scope.getEtatCompte = function(data,i)
    {   
    	for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.etatcomptes.includes(data[i].compteemploi.etatcompte))
                {
                    $scope.etatcomptes.push(data[i].compteemploi.etatcompte)
                }
            }
        }
    }

    $scope.getEatDossier = function(data,i)
    {   
    	for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.etapes.includes(data[i].compteemploi.etape))
                {
                    $scope.etapes.push(data[i].compteemploi.etape)
                }
            }
        }
    }

    $scope.getEtatDemande = function(data,i)
    {   
    	for(i=0; i<data.length;i++)
        {
            if(!$scope.etatdemandes.includes(data[i].etatdemande))
            {
                $scope.etatdemandes.push(data[i].etatdemande)
            }
        }
    }

    $scope.getGenre = function(data,i)
    {  
     for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.sexes.includes(data[i].compteemploi.sexe))
                {
                    $scope.sexes.push(data[i].compteemploi.sexe)
                }
            }
        }
    }

    $scope.getNationalite = function(data,i)
    {   
    	for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.nationalites.includes(data[i].compteemploi.nationalite))
                {
                    $scope.nationalites.push(data[i].compteemploi.nationalite)
                }
            }
        }
    }

    $scope.getResidence = function(data,i)
    {   
    	var j;
        var pays = {};
        for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.residences.includes(data[i].compteemploi.indicatif))
                {
                    $scope.residences.push(data[i].compteemploi.indicatif)
                }
            }
        }

        for(i=0; i<$scope.residences.length;i++)
        {
            for(j=0; j<$scope.indicatifPays.length;j++)
            {
                if("+" + $scope.residences[i]==$scope.indicatifPays[j].dial_code)
                {
                    $scope.indicatifs.push($scope.indicatifPays[j]);
                }
            }
        }

        for(i=0; i<$scope.indicatifs.length;i++)
        {
            for(j=0; j<i+1;j++)
            {
                if($scope.indicatifs[i].dial_code==$scope.indicatifs[j].dial_code)
                {
                    $scope.indicatifs[i].name += "/" + $scope.indicatifs[j].name;
                    $scope.indicatifs.splice(j,1);
                }
            }
        }
    }

    $scope.getDiscipline = function(data,i)
    {   for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.disciplines.includes(data[i].compteemploi.discipline))
                {
                    $scope.disciplines.push(data[i].compteemploi.discipline)
                }
            }
        }
    }

    $scope.getSpecialite = function(data,i)
    {   for(i=0; i<data.length;i++)
        {
            if(data[i].idcompteemploi!=null)
            {
                if(!$scope.specialites.includes(data[i].compteemploi.specialite))
                {
                    $scope.specialites.push(data[i].compteemploi.specialite)
                }
            }
        }
    }

  	// Fin initialisation des données

    //Gestion des statistiques

    $scope.faireRequete = function()
    {
    	var resultats=[];
        $scope.resultats=$scope.alldata;
        for(var l=0;l<Object.keys($scope.stat).length;l++)
	    {
	     	resultats=[];
        	var statTous = $scope.stat[Object.keys($scope.stat)[l]];
			console.log(statTous);
        	if(statTous==false || statTous== undefined)
			{
		        for(var i=0;i<Object.keys($scope.statReq).length;i++)
		        {	
	        		var statAttribut = Object.keys($scope.statReq[Object.keys($scope.statReq)[i]])
	        		if(Object.keys($scope.statReq)[i].substr(0,Object.keys($scope.statReq)[i].length-1)==Object.keys($scope.stat)[l])
	        		{	
				    	var keysVals=Object.keys(statAttribut);//statAttribut
				        //console.log($scope.stat.natures);
				        //$scope.affiche.nature=false;
				        for(var j=0;j<$scope.resultats.length;j++)
			            {
			              for(var k=0;k<keysVals.length;k++) //[Object.keys($scope.stat)[l]]
			                {
			                  if($scope.resultats[j][Object.keys($scope.stat)[l]]!=undefined)
			                  {	//console.log($scope.statReq["etatdemandes"])
			              		//console.log($scope.statReq[Object.keys($scope.statReq)[i]][statAttribut[k]])
			                  	//console.log(statAttribut[keysVals[k]])   
			                  	if($scope.resultats[j][Object.keys($scope.stat)[l]]== statAttribut[k] && $scope.statReq[Object.keys($scope.statReq)[i]][statAttribut[k]]==true)
			                  	{
			                  		resultats.push($scope.resultats[j]);
			                  	}
			                  }
			                  else
			                  {
			                  	if($scope.resultats[j].idcompteemploi!=null)
				                  {
				                  	if($scope.resultats[j].compteemploi[Object.keys($scope.stat)[l]]== statAttribut[k] && $scope.statReq[Object.keys($scope.statReq)[i]][statAttribut[k]]==true)
					                  {
					                    resultats.push($scope.resultats[j]);
					                  }
				                  }
			                  }
			                }
			            }
	        		}
	        	}
	     		$scope.resultats=resultats;
	        }
        }
		//console.log($scope.resultats)
        $scope.emplois=$scope.resultats;
       	// Graphe stat view
        var statpart={};
        $scope.eff={};
        var tabresult=[];
        var trouve;
        var choix={};
        //console.log($scope.choix.libelle);
        //console.log($scope.resultats[0]["etatdemande"]);
        for(var j=0;j<$scope.resultats.length;j++)
        {
          trouve=false;
          for(var i=0;i<tabresult.length;i++)
          {
            if($scope.resultats[j].idcompteemploi==undefined)
            {
              if($scope.resultats[j][$scope.choix.libelle]==tabresult[i]['nomEff'])
              {
                trouve=true;
                tabresult[i].eff+=1;
              }
            }
            else
            {
              if($scope.resultats[j].compteemploi[$scope.choix.libelle]==tabresult[i]['nomEff'])
              {
                trouve=true;
                tabresult[i].eff+=1;
              }
            }
          }
          if(trouve==false)
	        {
	            statpart={};
	            if ($scope.resultats[j].idcompteemploi==undefined) 
	            {
	              statpart.nomEff=$scope.resultats[j][$scope.choix.libelle];
	            }
                else
                {
                  statpart.nomEff=$scope.resultats[j].compteemploi[$scope.choix.libelle];
                }
	            statpart.eff=1;
                tabresult.push(statpart);
	        }
        }
        var nomGraph=[];
        var effGraph=[];
        tabaff=[];
        for(var i=0;i<tabresult.length;i++)
        {
          tabDonnee=[];
          tabDonnee[0]=tabresult[i].nomEff;
          tabDonnee[1]=tabresult[i].eff;
          tabaff.push(tabDonnee);
          nomGraph.push(tabresult[i].nomEff);
          effGraph.push(tabresult[i].eff);
        };





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
            xAxis: {
            categories: nomGraph
             },
            title: {
                text: 'Chart rotation demo'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: effGraph
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
         xAxis: {
            categories: nomGraph
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
                name: 'Effectif total',
                data: tabaff
            }]
        });

        



    	$scope.$apply();
    }

    $scope.filter=function(statAttribut,statTous) 
    { 
    	var resultats=[];
    	var keysVals=Object.keys($scope.statReq.genres);//statAttribut
        //console.log($scope.stat.natures);
        if(statTous==false || statTous== undefined)
        {     
          //$scope.affiche.nature=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              for(var k=0;k<keysVals.length;k++)
                { 
                  if($scope.resultats[j].idcompteemploi!=null)
                  {
                  	if($scope.resultats[j].compteemploi.sexe == keysVals[k] && statAttribut[keysVals[k]]==true)
	                  {
	                    resultats.push($scope.resultats[j]);
	                  }
                  }
                }
            }
          $scope.resultats=resultats;
        }
        else
        {
          //$scope.affiche.nature=true;
        }
    }

    // Fin gestion des statistiques
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

    /*$scope.genererGraph=function(nomGraph,nomEff)
    {
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
    }*/



window.addEventListener("change", function(){
    $scope.faireRequete();
});

});
