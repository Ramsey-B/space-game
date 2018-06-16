class Game extends Phaser.Scene {

  constructor() {
    super({key: "Game"});
  }
  create() {
    debugger
    this.cameras.add(0, 0, 1600, 1200);

    this.background = this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.player = this.add.sprite(800, 600, 'playership');
    this.player.scaleX = 2;
    this.player.sclaeY = 2;

    this.player.anims.add('fly', [0, 1, 2, 3], 5, true);
    this.player.anims.play('fly');
    this.playerScore = 0;
    this.physics.arcade.enable(this.player);
    this.playerSpeed = 120;
    this.player.body.collideWorldBounds = true;
    
  }
  update() {
    if (this.input.activePointer.justPressed()) {
      this.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    }
  }
}





// var SpaceHipster = SpaceHipster || {};

// //title screen
// SpaceHipster.Game = () => { };

// SpaceHipster.Game.prototype = {
//   create: function () {
//     this.game.world.setBounds(0, 0, 1920, 1920);
//     this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');
//     this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');
//     this.player.scale.setTo(2);
//     this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
//     this.player.animations.play('fly');
//     this.playerScore = 0;
//     this.game.physics.arcade.enable(this.player);
//     debugger
//     this.playerSpeed = 120;
//     this.player.body.collideWorldBounds = true;

//   },
//   update: function () {
//     if (this.game.input.activePointer.justPressed()) {
//       this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
//     }
//   }
// }