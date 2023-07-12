// Write your solution here!

    let cats = ["Milo", "Otis", "Garfield"];
  
    beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
     function destructivelyAppendCat(name){
        cats.push(name);
     }
     function destructivelyPrependCat(name){
        cats.unshift(name);
     }
     function destructivelyRemoveLastCat(){
        cats.pop();
     }
     function destructivelyRemoveFirstCat(){
        cats.shift();
     }
     function  appendCat(name){
        var name1= [...cats,name];
        return name1;
      }
      function prependCat(name){
        var name2=[name, ...cats];
        return name2
      }
      function removeLastCat(){
        var name3= cats.slice(0,cats.length-1);
        return name3;
      }
      function removeFirstCat(){
        var name4= cats.slice(1);
        return name4;
      }