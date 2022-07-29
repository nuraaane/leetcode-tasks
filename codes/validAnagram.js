var isAnagram=function(s, t) {
    let str1 = s.split('').sort().join('');
    let str2 = t.split('').sort().join('');
    if(str1 === str2){
       console.log("true");
    } else { 
       console.log("false");
    }
 }
 
