//<![CDATA[
$(document).ready(function () {
  new jPlayerPlaylist(
    {
      jPlayer: "#jquery_jplayer_1",
      cssSelectorAncestor: "#jp_container_1"
    },
    [
      {
        title: "PWLR",
        artist: "SHIVA",
        mp3: "https://www.dropbox.com/s/9eagad9y624yk16/SHIVA%202.mp3?raw=1",
        oga: "https://www.dropbox.com/s/9eagad9y624yk16/SHIVA%202.mp3?raw=1",
        poster: "https://www.dropbox.com/s/rpd5fkiw7xruet1/backpic.png?raw=1"
      }
    ],
    {
      swfPath: "../dist/jplayer",
      supplied: "webmv, ogv, m4v, oga, mp3",
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      audioFullScreen: true
    }
  );

  // autoplay the playlist

  $(document).ready(function () {
    var player = $("#player")[0];
    player.setAttribute("autoplay", "autoplay");
    player.play();
  });

  $("#jplayer_inspector_1").jPlayerInspector({
    jPlayer: $("#jquery_jplayer_1")
  });
});
//]]>