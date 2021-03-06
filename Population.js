var selectionCutOff = 0.15// 15%

function Population(maxpop){
	this.population = [];

	for(var i = 0; i < maxpop; i++){
		this.population[i] = new Polygon();
	}

	this.calculateFitness = function(){
		for(var i = 0; i < this.population.length; i++)
			this.population[i].calculateFitness();
	}

	this.sortFitness = function(){
		this.population.sort(compare);
	}

	/*this.selection = function(){
		//truncation selection
		var newPopulation = [];
		for(var i = 0; i < (maxpop * selectionCutOff); i++){
			var partnerA = this.population[i];
			for(var j = 0; j < ceil(1 / selectionCutOff); j++){
				var randInd = i;
				while(partnerB == i)
					randInd = (random(maxpop) * selectionCutOff) >> 0;
				var partnerB = this.population[randInd];
				var child = partnerA.breed(partnerB);
				newPopulation.push(child);	
			}
		}
		this.population = newPopulation;
	}*/
	this.selection = function(){
		this.population[0] = this.population[0].breed();
	}
}

function compare(a,b) {
  if (a.fitness < b.fitness)
    return 1;
  if (a.fitness > b.fitness)
    return -1;
  return 0;
}