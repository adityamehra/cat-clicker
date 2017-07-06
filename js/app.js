var catArray = [
 {
  name: 'Tabby',
  clickCount: 0,
  imgSrc: 'img/22252709_010df3379e_z.jpg',
  imgAttribution: 'Flickr'
 },
 {
  name: 'Abby',
  clickCount: 0,
  imgSrc: 'img/434164568_fea0ad4013_z.jpg',
  imgAttribution: 'Flickr'
 },
 {
  name: 'Sabby',
  clickCount: 0,
  imgSrc: 'img/1413379559_412a540d29_z.jpg',
  imgAttribution: 'Flickr'
 },
 {
  name: 'Labby',
  clickCount: 0,
  imgSrc: 'img/4154543904_6e2428c421_z.jpg',
  imgAttribution: 'Flickr'
 },
 {
  name: 'Dabby',
  clickCount: 0,
  imgSrc: 'img/9648464288_2516b35537_z.jpg',
  imgAttribution: 'Flickr'
 }
]

var Cat = function(data){

 console.log(data.name);

 this.name = ko.observable(data.name);
 this.clickCount = ko.observable(data.clickCount);
 this.imgSrc = ko.observable(data.imgSrc);
 this.imgAttribution = ko.observable(data.imgAttribution);

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

 var that = this;

 this.listOfCats = ko.observableArray([]);

 catArray.forEach(function(eachCat){
  that.listOfCats.push(new Cat(eachCat));
 });

 console.log(that.listOfCats());
 console.log(that.listOfCats);
 console.log(that.listOfCats()[0].name);

 this.currentCat = ko.observable(this.listOfCats()[0]);

 console.log(this.currentCat());

 this.incrementCounter = function() {
  that.currentCat().clickCount(that.currentCat().clickCount() + 1);
 };

 this.displayCat = function(clickedCat){
  that.currentCat(clickedCat);
 }

}

ko.applyBindings(new ViewModel());
