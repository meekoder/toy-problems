const TrieNode = function(val) {
    this.val = val;
    this.children = {};
    this.end = false;
};

const Trie = function() {
    this.root = new TrieNode(null);
};

// Inserts a word into the trie. 
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

// Returns if the word is in the trie. 
Trie.prototype.search = function(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
            node = node.children[word[i]];
        } else {
            return false;
        }
    }
    return node.end;
};

// Returns if there is any word in the trie that starts with the given prefix. 
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
        if (node.children[prefix[i]]) {
            node = node.children[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
