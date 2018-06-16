var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#ffffff",
  physics: {
    default: 'arcade'
  },
  scene: [Boot, Preload, MainMenu, Game]
}

var game = new Phaser.Game(config);

// SpacePhase.game.scene.add('Boot', SpacePhase.Boot);
// debugger
// //uncomment these as we create them through the tutorial
// SpacePhase.game.scene.add('Preload', SpacePhase.Preload);
// SpacePhase.game.scene.add('MainMenu', SpacePhase.MainMenu);
// //SpacePhase.game.scene.add('Game', SpacePhase.Game);
// SpacePhase.game.scene.start('Boot');
