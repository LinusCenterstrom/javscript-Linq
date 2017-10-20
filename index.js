var toDictionary = function(items, keySelector, itemSelector, skipMissingKeys) {
	if (!keySelector) throw "Missin keySelector";

	var res = {};
	if (!items || !items.length) {
		return res;
	}
	for (var i = 0; i < items.length; i++) {
		var key = keySelector(items[i]);
		if (key === undefined) {
			if (skipMissingKeys) {
				continue;
			}
			throw "Missing key at" + items[i];
		}
		var value = itemSelector ? itemSelector(items[i]) : items[i];
		res[key] = value;
	}

	return res;
};

var toLookup = function(items, keySelector, itemSelector, skipMissingKeys) {
	if (!keySelector) throw "Missin keySelector";

	var res = {};
	if (!items || !items.length) {
		return res;
	}

	for (var i = 0; i < items.length; i++) {
		var key = keySelector(items[i]);
		if (key === undefined) {
			if (skipMissingKeys) {
				continue;
			}
			throw "Missing key at" + items[i];
		}
		var value = itemSelector ? itemSelector(items[i]) : items[i];
		if (!res[key]) {
			res[key] = [];
		}
		res[key].push(value);
	}
	return res;
};

var distinctBy = function(items, keySelector) {
	if (!keySelector) {
		throw "Missin keySelector";
	}

	var added = {};
	var result = [];

	for (var i = 0; i < items.length; i++) {
		var key = keySelector(items[i]);
		if (!added[key]) {
			added[key] = true;
			result.push(items[i]);
		}
	}

	return result;
};

module.exports = exports = {
	toDictionary: toDictionary,
	toLookup: toLookup,
	distinctBy: distinctBy
};
