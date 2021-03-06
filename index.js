function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training


  // veto() {
  //   return 'No, I must disagree'
  // }
  // this.approve = function(){
  //   return 'You can do that!'
  // }
  // this.doCharity = function(){
  //   return "I like to help people."
  // }
  //
  // this.releasePressStatement = function(){
  //   return "You will see great things from Scuber."
  // }
  //
  // this.sayHi = function(){
  //   return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  // }
}

BoardMember.prototype.veto = function() {
  return 'No, I must disagree'
}

BoardMember.prototype.approve = function(){
  return 'You can do that!'
}

BoardMember.prototype.doCharity = function() {
  return 'I like to help people.'
}

BoardMember.prototype.releasePressStatement = function() {
  return 'You will see great things from Scuber.'
}

BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}


// In `index.js`, `BoardMember` constructor function with the following properties set by the constructor: `name`, `training`, and `homeState`.
//
// Add following methods to the prototype of the constructor:
// + `veto` — returns `No, I must disagree`
//
// + `approve` — returns `You can do that!`
//
// + `doCharity` — returns `I like to help people.`
//
// + `releasePressStatement` — returns `You will see great things from Scuber.`
//
// + `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`
