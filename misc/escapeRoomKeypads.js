const escape = (wordlist, keypads) => {
    const validWords = new Trie();
    wordlist.forEach(word => validWords.insert(word));
    return keypads.map(k => validWords.search(k));
};

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

Trie.prototype.search = function(keypad) {
    let node = this.root;
    let count = 0;
    for (let i = 0; i < keypad.length; i++) {
        if (node.children[keypad[i]]) {
            count = count + checkWord(node.children[keypad[i]], keypad, 0, false);
        } 
    }
    return count;
};

const checkWord = (node, keypad, count, keyLetterSeen) => {
    const keyLetter = keypad[0];
    if (node.val === keyLetter) {
        keyLetterSeen = true;
    }

    if (node.end && keyLetterSeen) {
        count++;
    }

    for (let child in node.children) {
        if (!keypad.includes(child)) {
            return 0;
        }
        return checkWord(node.children[child], keypad, count, keyLetterSeen);
    }
    return count;
};

console.log(escape(['APPLE', 'PLEAS', 'PLEASE'], ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']));
