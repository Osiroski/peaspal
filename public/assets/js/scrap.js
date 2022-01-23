
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
const isWord = require('is-word');
const englishWords = isWord('british-english');
//services
const calcWordFreq = (s) => {
    // Normalize
    s = s.toLowerCase();
    // Strip quotes and brackets
    s = s.replace(/["“”[{}\])]|\B['‘]([^'’]+)['’]/g, '$1');
    // Strip dashes and ellipses
    s = s.replace(/[‒–—―…]|--|\.\.\./g, ' ');
    // Strip punctuation marks
    s = s.replace(/[!?;:.,&-]\B/g, '');
    //Strip digits
    s = s.replace(/\d+/g, '');
    return s.match(/\S+/g).reduce((oFreq, sWord) => {
        if (oFreq.hasOwnProperty(sWord))
            ++oFreq[sWord];
        else
            oFreq[sWord] = 1;
        return oFreq;
    }, {});
};
const getText = (text) => {
    const obj = calcWordFreq(text);
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const newData = [];
    const object = {
        id: 0,
        word: '',
        count: 0,
        isEnglish: ''
    };
    for (let i = 0; i < keys.length; i++) {
        object.id = i + 1;
        object.word = keys[i];
        object.count = values[i];
        object.isEnglish = getDictionary(keys[i]);
        newData.push(Object.assign({}, object));
    }
    return newData;
};
exports.getText = getText;
const getDictionary = (word) => {
    return String(englishWords.check(word));
};
