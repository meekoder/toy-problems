// Prefix String - 
// given two string arrays A & B, find if all strings in B are prefixes of a 
// concatenation of strings in A. 
// For example if 
// A = {"one", "two", "three"} B = {"onetwo", "one"}, return True

function prefixString(a, b) {
	// make trie
	const aRoot = new Trie();
	a.forEach(w => aRoot.insert(w));
	// iterate through b
		// take first letter of b
		// check children of trie
	let currNode = aRoot.root.children;
	for (let i = 0; i < b.length; i++) {
		for (let j = 0; j < b[i].length; j++) {
			const letter = b[i][j];
			console.log(currNode, letter)
			while (currNode[letter]) {
				if (currNode[letter].end) {
					if (i == b.length - 1 && j == b[i].length - 1) return true;
					currNode = aRoot.root.children;
				} else {
					currNode = currNode[letter].children;
				}
			}
		}
	}
	return false;
}

const TrieNode = function(val) {
	this.val = val;
	this.children = {};
	this.end = false;
};

const Trie = function() {
	this.root = new TrieNode(null);
};

Trie.prototype.insert = function(word) {
	let node = this.root;
	
	for (let i = 0; i < word.length; i++) {
		if (!node.children[word[i]]) {
				node.children[word[i]] = new TrieNode(word[i]);
		}
		node = node.children[word[i]];
		if (i === word.length - 1) {
				node.end = true;
		}
	}
};

const a = ['one', 'two', 'three'];
const b = ['onetwo', 'one'];

const c = ['two', 'four'];
console.log(prefixString(a, b)); // true
console.log('==============================')
console.log(prefixString(a, c)); // false
