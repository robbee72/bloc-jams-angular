(function() {
     function Fixtures() {
         var Fixtures = {};
         var albumPicasso = {
             title: 'The Colors',
             artist: 'Pablo Picasso',
             label: 'Cubism',
             year: '1881',
             albumArtUrl: '/assets/images/album_covers/01.png',
             songs: [
                 { title: 'Blue', duration: '4:26' },
                 { title: 'Green', duration: '3:14' },
                 { title: 'Red', duration: '5:01' },
                 { title: 'Pink', duration: '3:21' },
                 { title: 'Magenta', duration: '2:15' }
     ]
 };
 
         var albumMarconi = {
             title: 'The Telephone',
             artist: 'Guglielmo Marconi',
             label: 'EM',
             year: '1909',
             albumArtUrl: '/assets/images/album_covers/20.png',
             songs: [
                 { title: 'Hello, Operator?', duration: '1:01' },
                 { title: 'Ring, ring, ring', duration: '5:01' },
                 { title: 'Fits in your pocket', duration: '3:21' },
                 { title: 'Can you hear me now?', duration: '3:14' },
                 { title: 'Wrong phone number', duration: '2:15' }
     ]
 };
// Third Example Album
        var albumDeadmau5 = {
           title: 'Deadmau5',
           artist: 'Joel Zimmerman',
           label: 'Deadmau5 Records',
           year: '2016',
           albumArtUrl: '/assets/images/album_covers/cheeseHead.png',
           songs: [
                { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue' },
                 { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green' },
                 { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red' },
                 { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink' },
                 { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta' }

   ]
};
        Fixtures.getAlbum = function() {
            return albumPicasso;
     };
         Fixtures.getCollection = function(numberOfAlbums) {
            var albums = [];
      
                for (var i = 0; i < numberOfAlbums; i++)
      {
            albums.push(albumPicasso);  
      }
        return albums;
    };
        return Fixtures;
     }
 
        angular
            .module('blocJams')
            .factory('Fixtures', Fixtures);
 })();