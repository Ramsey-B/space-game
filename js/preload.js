class Preload extends Phaser.Scene {
  constructor() {
    super({key: "Preload"});
  }
  preload() {
    this.preloadBar = this.add.sprite(400, 400 + 50, 'preloadbar').setOrigin(0.5, 0.5);
        
    this.load.image('space', 'assests/images/space.png');
    this.load.image('rock', 'assests/images/rock.png');
    //this.load.spritesheet('playership', 'assests/images/player.png', 12, 12, 5);
    //this.load.spritesheet('power', 'assests/images/power.png', 12, 12, 12, 12);
  	this.load.image('playerParticle', 'assests/images/player-particle.png');
  }
  create() {
    this.scene.start('MainMenu');
  }

}



// var SpacePhase = SpacePhase || {};

// SpacePhase.Preload = ()=> {}

// SpacePhase.Preload.prototype = {
//   preload: () => {
//     this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
//     this.preloadBar.anchor.setTo(0.5);
 
//     this.load.setPreloadSprite(this.preloadBar);
    
//     this.load.image('space', 'assets/images/space.png');
//   	this.load.image('rock', 'assets/images/rock.png');
//     this.load.spritesheet('playership', 'assets/images/player.png', 12, 12);
//     this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
//   	this.load.image('playerParticle', 'assets/images/player-particle.png');
//   },
//   create: () => {
//   	this.scene.start('MainMenu');
//   }
// }