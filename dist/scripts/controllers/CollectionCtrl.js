(function() {
     function CollectionCtrl() {
         this.albums =[];
         for (var i=0; i <8; i++) {
             this.albums.push(angular.copy(albumPicasso));
         }
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();