module.exports=function(grunt){
	/*grunt.registerTask('hello','Hello Nantes',function(){
		console.log('Hello Grunt, depuis Nantes!')
	});

	grunt.registerTask('etape1','Etape 1 visite Nantes',function(){
		console.log('Etape 1 de la visite de Nantes!')
	});

	grunt.registerTask('etape2','Etape 2 visite Nantes',function(){
		console.log('Etape 2 de la visite de Nantes!')
	});

	grunt.registerTask('etape3','Etape 3 visite Nantes',function(){
		console.log('Etape 3 de la visite de Nantes!')
	});

	grunt.registerTask('visite',['etape1','etape2','etape3']);

	grunt.registerTask('default','hello');//la tâche hello devient celle par defaut pour grunt : création d'un alias

//MultiTask
	grunt.initConfig({
		hello:{
			configNantes : 'Nantes',
			configRennes : 'Rennes'
		}
	});

	grunt.registerMultiTask('hello','Hello',function(){
		console.log('Hello Grunt,depuis %s ! avec la config %s',this.data,this.target);//grunt helo (lance les 2 config) //grunt hello:configNantes
	});*/

//Mode Compact - copie des fichier dans le dossier créé tmp

//grunt.initConfig({
//	copy:{
//		main :{

//			src:['public/**/*.js','public/**/*.css','public/**/*.html'],
//			dest:'tmp/',
//			expand:true
//		}
//	}
//});
//grunt.loadNpmTasks('grunt-contrib-copy');


//Mode Object

//grunt.initConfig({
//	copy:{
//		main :{

//			files :{'tmp/':['public/**/*.js','public/**/*.css','public/**/*.html']},

/*			expand:true
		}
	}
});
grunt.loadNpmTasks('grunt-contrib-copy');*/

// Créer un server
grunt.initConfig({


	clean: {
		dev: ['tmp']
	},
	copy: {
		dev :{
			files:[{
				expand:true,
				src:['public/**/*.*'],
				dest:'tmp/'

			},
			{
				expand :true,
				flatten :true,
				src:['bower_components/**/angular.min.js',
				'bower_components/**/bootstrap.css',
				'bower_components/**/angular-route.min.js'],
				dest:'tmp/public/lib'


			}]
		}
	},
	connect: {
		dev: {
			options: {
				base :'tmp/public',
				hostname:'localhost',
				port: 3000,
				open :true,
				livereload:true
			}
		}
	},
	watch : {
		dev : {
			files :['public/**/*.*'],
			tasks:['copy'],
			options:{
				livereload :true
			},
		}
	},
	karma : {
		dev : {
			configFile:'karma.conf.js'
		},

	}

});
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-karma');
grunt.registerTask('server',['clean','copy','connect','watch','karma']);
}
