var app = angular.module('dice',[]);
		app.controller("diceCtrl",['$scope',function($scope){
			$scope.regex1 = /^[1-9]{1}[0-9]{0,2}$/;
			$scope.regex2 = /^[0-9]{1,3}$/;
			$scope.resultado = 0;
			$scope.dados = [
				{nome:"d4",num:4,numDados:1,incremento:0},
				{nome:"d6",num:6,numDados:1,incremento:0},
				{nome:"d10",num:10,numDados:1,incremento:0},
				{nome:"d12",num:12,numDados:1,incremento:0},
				{nome:"d20",num:20,numDados:1,incremento:0}
			]
			$scope.rolaDado = function(dado){
				$scope.resultadosIndividuais = new Array();
				let soma=0;
				for(i=0;i<dado.numDados;i++){
					$scope.resultadosIndividuais[i] = Math.ceil(Math.random()*dado.num);
					soma += $scope.resultadosIndividuais[i];
				}
				
				$scope.resultado = soma+parseInt(dado.incremento)
			}
			$scope.adicionaDado = function(num){
				let dado = {
					nome:'d'+num,
					num: num,
					numDados:1,
					incremento:0
				}
				if($scope.dados.length < 20){
					$scope.dados.push(dado);
				}
				else{
					alert("Max dice number exceeded! Remove any dice to add another one.")
				}
			}
			$scope.removeDado = function(numero){
				for(i=0; i < $scope.dados.length ; i++){
					if($scope.dados[i].num == numero){
						$scope.dados.splice(i,1)
					}
				}
				
			}
}])

