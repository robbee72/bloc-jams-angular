(function() {
  function SongPlayer(Fixtures) {
    var SongPlayer = {};

   
      /**
    *@function SongPlayer
    *@desc Injects Fixtures default album service into SongPlayer
    *@param {Fixtures}
    */
    var currentSong = null;

    /**
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
        currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };
    /**
    *@function getSongIndex
    *@desc Sets album songs in an index
    *@param song
    */

    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };

    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    var stopSong = function(song) {
      currentBuzzObject.stop();
      song.playing = null;
    };

    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if(SongPlayer.currentSong!== song) {
          
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

    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if(currentSongIndex < 0) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;

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