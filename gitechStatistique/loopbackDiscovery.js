// Start loopback discovery
var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  'host': 'localhost',
  'port': 8889,
  'database': 'gitech1',
  'username': 'souaibou',
  'password': 'passer',
});

const fs = require('fs');
var tableString = 'anneescolaires,applications,attestationdiplomes,attestationinscriptions,attestationreussites,baremementions,baremes,bulletinannees,bulletinsessions,classeannees,classes,classesessions,cleenregistrements,clients,commentaireforums,compteadmissions,compteemplois,cours,coursetudiants,cycles,dapclasses,dapdepartements,dapfilieres,daps,dapufrs,demandeadmissions,demandeemplois,demandeenregistrements,departements,effectiveseanceetudiants,effectiveseances,elementcomptables,emetteurs,etudiantclasseannees,etudiantclassesessions,etudiants,etudiantueclasseannees,etudiantueclassesessions,evaluationetudiants,evaluations,faps,filieres,forums,groupes,historiqueetudiants,historiquepositionemetteurs,inforecuperationmdps,maquettes,matieremaquettes,matieres,modelebulletins,noteclients,operationfinancieres,periodecomptables,personnels,personnes,photos,portails,portailsectionelements,portailsections,postes,preferenceadmissions,preferenceemplois,preferenceenregistrements,preferences,profilcomptabilites,programmes,programmeunitens,psedocuments,pseevaluations,pselienexternes,pselieninternes,psetexts,salles,seances,sessions,sujetforums,templates,templatetableaucolonnes,templatetableaux,transactions,typeopeltcomptables,typeoperations,ueclasseannees,ueclassesessions,ufrs,unitens,unitensmatieres,upgradesequences,versions';
const tables = tableString.split(',');

fs.readFile(
 `${__dirname}/server/model-config.json`, 'utf8',
 function(err, contenu) {
   var modelConf = JSON.parse(contenu);
   tables.forEach(table => {
     modelConf[table.substring(0, table.length - 1)] = {public: true, dataSource: 'gitech1'};
   });
   fs.writeFile(`${__dirname}/server/model-config.json`, JSON.stringify(modelConf, null, 2));
 });

const transformModel = m => m.toLowerCase().substring(0, m.length - 1);

tables.forEach(table => {
  ds.discoverSchema(table, {associations: true},
  function(err, schema) {
    schema.name = schema.name.substring(0, schema.name.length - 1).toLowerCase();
    Object.keys(schema.options.relations).forEach(relationKey => {
      schema.options.relations[transformModel(relationKey)] = schema.options.relations[relationKey];
      delete schema.options.relations[relationKey];
      const relation = schema.options.relations[transformModel(relationKey)];
      relation.model = transformModel(relation.model);
    });
    const modelDefinition = JSON.stringify(schema, null, 2);
    fs.writeFile(
      `${__dirname}/common/models/${schema.name}.json`,
      modelDefinition);
    fs.writeFile(
      `${__dirname}/common/models/${schema.name}.js`,
      '');
    return;
    // Now we have a list of models keyed by the model name
    // Find the first record from the inventory
    models.Etudiants.findOne({}, function(err, inv) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('\nInventory: ', inv);
      // Navigate to the product model
      // Assumes inventory table has a foreign key relationship to product table
      inv.product(function(err, prod) {
        console.log('\nProduct: ', prod);
        console.log('\n ------------- ');
      });
    });
  });
});

// End loopback
