var toDictionary = function (items, keySelector, itemSelector, skipMissingKeys) {
  if(!keySelector)
    throw "Missin keySelector";
  
  var res = {};
  if(!items || !items.length){
    return res;
  }
  for(var i = 0; i < items.length; i++)
  {
    var key = keySelector(items[i]);
    if(key === undefined)
	{
		if(skipMissingKeys){
			continue;
		}
		throw "Missing key at" + items[i];
	}
    var value = itemSelector ? itemSelector(items[i]) : items[i];
    res[key] = value;
  }
  
  return res;
}

var toLookup = function(items, keySelector, itemSelector, skipMissingKeys) {
    if(!keySelector)
       throw "Missin keySelector";
    
  var res = {};
    if(!items || !items.length){
      return res;
    }
  
   for(var i = 0; i < items.length; i++)
   {
    var key = keySelector(items[i]);
    if(key === undefined)
	{
	   if(skipMissingKeys){
			continue;
	  }
      throw "Missing key at" + items[i];
	}
    var value = itemSelector ? itemSelector(items[i]) : items[i];
    if(!res[key])
      {
        res[key] = [];
      }
     res[key].push(value);
  }
  return res;
}

var applyPrototype = function(name, func){
	if(!Array.prototype[name]){
		Object.defineProperty(Array.prototype, name, {
			enumerable: false,
			value: func
			}
		);
	}
}

var applyAsArrayPrototypes = function(){
	applyPrototype("toDictionary", function(keySelector, itemSelector, skipMissingKeys){
		return toDictionary(this, keySelector, itemSelector, skipMissingKeys);
	});
	applyPrototype("toLookup", function(keySelector, itemSelector, skipMissingKeys){
		return toLookup(this, keySelector, itemSelector, skipMissingKeys);
	});
}

module.exports = exports = {
	toDictionary : toDictionary,
	toLookup : toLookup,
	applyAsArrayPrototypes: applyAsArrayPrototypes
}