const isWord = require('is-word');
const englishWords = isWord('british-english');

//services
const calcWordFreq=(s:string)=> {
    // Normalize
    s = s.toLowerCase();
    // Strip quotes and brackets
    s = s.replace(/["“”[{}\])]|\B['‘]([^'’]+)['’]/g, '$1');
    // Strip dashes and ellipses
    s = s.replace(/[‒–—―…]|--|\.\.\./g, ' ');
    // Strip punctuation marks
    s = s.replace(/[!?;:.,&-]\B/g, '');
    //Strip digits
    s=s.replace(/\d+/g, '');
    return s.match(/\S+/g)!.reduce((oFreq:any, sWord:any)=>{
        if (oFreq.hasOwnProperty(sWord)) ++oFreq[sWord];
        else oFreq[sWord] = 1;
        return oFreq;
      },{});
  }

 export const getText=(text:string)=>{
     const obj=calcWordFreq(text);
     const keys=Object.keys(obj);
     const values:number[]=Object.values(obj);
     const object={
        id:0,
        word:'',
        count:0,
        isEnglish:''
    }
     const newData:object[]=[]
     
     for (let i = 0; i < keys.length; i++) { 
         object.id=i+1
         object.word=keys[i]
         object.count=values[i]
         object.isEnglish=getDictionary(keys[i])
        newData.push({...object}) 
      }
      return newData;
  }
const getDictionary=(word:string)=>{
    return String(englishWords.check(word))  
}
  