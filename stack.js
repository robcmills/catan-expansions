/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function save(game) {
	console.log('save', game)
	localStorage.setItem('game', JSON.stringify(game))
}

function load() {
	console.log('load')
	return JSON.parse(localStorage.getItem('game'))
}

function generate() {
	console.log('generate')
	var resources = [
		2,
		3,3,
		4,4,4,
		5,5,5,5,
		6,6,6,6,6,
		7,7,7,7,7,7,
		8,8,8,8,8,
		9,9,9,9,
		10,10,10,
		11,11,
		12,
	]
	shuffle(resources)
	return {
		areResourcesVisible: false,
		round: 0,
		resources: resources,
	}
}

function regenerate() {
	save(generate())
	updateDOM()
}

function updateDOM() {
	var game = load()
	document.querySelector('#round').innerHTML = game.round
	document.querySelector('#resource').innerHTML = game.resources[game.round]
	if (game.areResourcesVisible) {
		game.resources[game.round] = '--' + game.resources[game.round] + '--'
		document.querySelector('#resources').innerHTML = game.resources.join(' ')
	} else {
		document.querySelector('#resources').innerHTML = ''
	}
}

function previous() {
	var game = load()
	game.round -= 1
	save(game)
	updateDOM()
}

function next() {
	var game = load()
	game.round += 1
	save(game)
	updateDOM()
}

function set(key, value) {
	var game = load()
	game[key] = value
	save(game)
	updateDOM()
}

function showResources() {
	set('areResourcesVisible', true)
}
function hideResources() {
	set('areResourcesVisible', false)
}

if (!load()) {
	save(generate())
}

updateDOM()
