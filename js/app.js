var Cat = function(){

 this.name = ko.observable('Tabby');
 this.clickCount = ko.observable(0);
 this.imgSrc = ko.observable('./img/22252709_010df3379e_z.jpg');
 this.imgAttribution = ko.observable('Flickr');

 this.level = ko.computed(function() {
  if(this.clickCount() == 0){
   return 'Newborn';
  }else if(this.clickCount() > 0 && this.clickCount() <= 10) {
   return 'Infant';
  }else if(this.clickCount() > 10 && this.clickCount() <= 19) {
   return 'Teen';
  }else{
   return 'Adult';
  }
 }, this);

}

var ViewModel = function() {

 this.currentCat = ko.observable(new Cat());

 this.incrementCounter = function() {
  this.currentCat().clickCount(this.currentCat().clickCount() + 1);
 };

}

ko.applyBindings(new ViewModel());
