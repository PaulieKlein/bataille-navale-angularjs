angular.module("todo").filter("username",function(){
			return function(input){
				if (input && input.name) return input.name
				if (input && input.email) return input.email
					return "John Doe"
		}
	}
			)