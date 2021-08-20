class Formatter {
  static capitalize(word){
    return word.slice(1) + word[0].toUpperCase() 
  }
  static sanitize(word){
    return word.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(phrase){
    const except = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    const res = []
    const wordArray = phrase.split( " " )
    for (let n = 0; n < wordArray.length; n++){
      if( n == 0 ){
        //capitalize  first word
        res.push( this.capitalize( wordArray[ n ] ) )
      }else{
         // except array includes this word (not the first word)
        if ( except.includes( wordArray[ n ])){
          // push that un-capitalized word into the result
          res.push( wordArray[ n ] )
        }else{
          // otherwise capitalize this word and add it to result
          res.push( this.capitalize( wordArray[ n ] ) )
        }
      }
    }  
    return res.join(" ")
  }
}