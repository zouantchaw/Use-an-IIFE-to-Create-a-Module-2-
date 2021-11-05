// funModule should wrap the two mixims isCuteMixin and singMixin.
// funModule should return an object

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

// function funModule() {
//   return {
//     isCuteMixin: function(obj) {
//       obj.isCute = function() {
//         return true
//       }
//     },
//     singMixin: function(obj) {
//       obj.sing = function() {
//         console.log("Singing to an awesome tune")
//       }
//     }
//   }
// }

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune")
      }
    }
  }
})()

let myObject = new Object
console.log(myObject)

funModule.isCuteMixin(myObject)
myObject.isCute()