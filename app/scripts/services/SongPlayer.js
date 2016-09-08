(function() {
  function SongPlayer($rootScope, Fixtures) {
    var SongPlayer = {};
    var currentAlbum = Fixtures.getAlbum();
    var currentBuzzObject = null;
    var setSong = function(song) {

      if (currentBuzzObject) {
        currentBuzzObject.stop();

      if (SongPlayer.currentSong)
      {
        SongPlayer.currentSong.playing = null;
      }

    }

    currentBuzzObject = new buzz.sound(song.audioUrl, {
      formats: ['mp3','acc', 'wav'],
      preload: true
    });

    currentBuzzObject.setVolume(SongPlayer.volume);
    
    currentBuzzObject.bind('timeupdate', function() {
      $rootScope.$apply(function() {
        SongPlayer.currentTime = currentBuzzObject.getTime();
      });
    });

    currentBuzzObject.bind('volumechange', function() {
      $rootScope.$apply(function() {
        SongPlayer.volume = currentBuzzObject.getVolume();
      });
    });

    SongPlayer.currentSong = song;

    };
    
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
      SongPlayer.currentAlbum = currentAlbum;
    };

    var stopSong = function(song) {
      currentBuzzObject.pause();
      song.playing = null;
      SongPlayer.currentAlbum = null;
      SongPlayer.currentSong = null;
    };

  
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };

    SongPlayer.currentSong = null;
    SongPlayer.currentAlbum = null;
    SongPlayer.currentTime = null;
    SongPlayer.volume = null;
  
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      }
      else if (SongPlayer.currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
        }
      }

    };
   
    SongPlayer.setCurrentTime = function(time) {
      if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    };

    SongPlayer.setVolume = function(volume) {
      if (currentBuzzObject) {
        currentBuzzObject.setVolume(volume)
      }
    };

    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause(); 
      song.playing = false;
    };

    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
        stopSong(SongPlayer.currentSong);
      }
      else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }

    };

    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex >= currentAlbum.songs.duration) {
        stopSong(SongPlayer.currentSong);
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }

    };

    return SongPlayer;
  }

    angular
      .module('blocJams')
      .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
