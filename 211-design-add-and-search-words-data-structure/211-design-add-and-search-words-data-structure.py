class WordDictionary:
    def __init__(self):
        self.root = {}
        self.ans = {}
        self.addCounter = 0
        
    def addWord(self, word):
        self.addCounter += 1
        node = self.root
        for letter in word:
            node = node.setdefault(letter, {})
        node['end'] = True

    def search(self, word): 
        if self.ans.get(word) and self.ans[word][1] == self.addCounter:
            return self.ans[word][0]
        else: 
            self.ans.update({word: [self.searchNode(self.root,word), self.addCounter]})
            return self.ans[word][0]


    def searchNode(self, node, word):
        for index, letter in enumerate(word):
            if letter == '.':
                return any(self.searchNode(node[letter], word[index+1:]) for letter in node if letter != 'end')
            if letter not in node: return False
            node = node[letter]
        return 'end' in node