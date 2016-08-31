(function() {
     function CollectionCtrl() {
         thsi.album =[];
         for (var i=0; i <12; i++) {
             this.album.push(angular.copy(albumPicasso));
         }
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();