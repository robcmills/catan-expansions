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
	var stack = [
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
	shuffle(stack)
	return {
		isStackVisible: false,
		round: 0,
		stack: stack,
	}
}

function regenerate() {
	save(generate())
	updateDOM()
}

function updateDOM() {
	var game = load()
	document.querySelector('#round').innerHTML = game.round
	document.querySelector('#roll').innerHTML = game.stack[game.round]
	if (game.isStackVisible) {
		game.stack[game.round] = '--' + game.stack[game.round] + '--'
		document.querySelector('#stack').innerHTML = game.stack.join(' ')
	} else {
		document.querySelector('#stack').innerHTML = ''
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

function showStack() {
	set('isStackVisible', true)
}
function hideStack() {
	set('isStackVisible', false)
}

if (!load()) {
	save(generate())
}

updateDOM()
