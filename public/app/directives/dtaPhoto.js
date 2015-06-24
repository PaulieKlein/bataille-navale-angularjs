angular.module("todo")
	.directive("dtaPhoto",function(){
		return{
			restrict :"E",
			template :"ici bientôt une photo",
			scope : {     
				borderWidth:"="   //scope isolé bidirectionnel
			},
			//controller : "DtaPhotoController",

			link: function(scope,element,attrs){
				element.css("borderStyle","solid")
				element.css("display","block")
				element.css("color",attrs.couleur||'blue')//par défaut couleur bleu
				scope.$watch("borderWidth",function(){
				element.css("borderWidth",scope.borderWidth + "px")
				})
			}
		}
	})

	//.controller ("DtaPhotoController",function(DtaPhotoService){})
	//.factory ("DtaPhotoService",function{})


//Scope isolé
/*scope : {
    str:"@", (création de str="toto" dans index.html) str.scope,str.element,str.attrs
    e:"&", (création de e="yes" dans index.html)
    }

    element.on('click',{
        scope.$apply(function){
            scope.e()
        }
    })
*/

		