angular.module("todo")
.filter("bang", function (){ //Création de filtre
			return function (input,nb){
               return input +''+'!'.repeat(nb)
			}
		})