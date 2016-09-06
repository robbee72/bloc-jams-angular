(function() {
  function SongPlayer(Fixtures) {
      var SongPlayer = {};

      var currentAlbum = Fixtures.getAlbum();
      
      /** above
    *@function SongPlayer
    *@desc Injects Fixtures default album service into SongPlayer
    *@param {Fixtures}
    */
    
    /**  below
     * @desc Buzz object audio file
     * @type {Object}
     */
      var currentBuzzObject = null;

    /**
     * @function setSong
     * @desc Stops currently song and loads new currentBuzzObject
     * @param {Object} song
     */
      var setSong = function(song) {
        if(currentBuzzObject) {
            currentBuzzObject.stop();
        
        if (SongPlayer.currentSong) {
            SongPlayer.currentSong.playing = null;
    }
}
        currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

        SongPlayer.currentSong = song;
    };
        /**
    *@function getSongIndex
    *@desc Sets album songs in an index
    *@param song
   */
    
      var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
        SongPlayer.currentAlbum = currentAlbum;
    };

      var stopSong = function(song) {
        currentBuzzObject.stop();
        song.playing = null;
        SongPlayer.currentAlbum = null;
        SongPlayer.currentSong = null;
    };

      var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
    };
           
      SongPlayer.play = function(song) {
        song = song || SongPlayer.currentSong;
        if(SongPlayer.currentSong !== song) {
          
        setSong(song);
        playSong(song);

      } else if (SongPlayer.currentSong === song) {
          if(currentBuzzObject.isPaused()) {
            playSong(song);
            //currentBuzzObject.play(); by playSong(song);
          }
        }
    };
    /**
     * @function pause
     * @desc Pauses current song
     * @param {Object} song
     */

      SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
    };

    /**
    * @function SongPlayer.previous 
    * @desc Get array of songs index of the song preceding the currentSong
    */
    
      SongPlayer.previous = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

        if (currentSongIndex < 0) {
            stopSong(SongPlayer.currentSong);
            /*currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
            */
        } else {
        var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
      }
    };
        /**
        *@function SongPlayer.previous
        *@desc  previous songs by clicking
        */

      SongPlayer.next = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

        if(currentSongIndex >= currentAlbum.songs.length) {
            stopSong(SongPlayer.currentSong);
        } else {
        var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
        }
    };

        return SongPlayer;
  }
        /* This does not effect player_bar functionality. 
         *  Will address that with services 3 checkpoint.
        */
  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
    
})();