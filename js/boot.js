class Boot extends Phaser.Scene {
  constructor() {
    super({key: "Boot"});

  }
  
  preload() {
    this.load.image('logo', 'assests/images/logo.png');
    this.load.image('preloadbar', 'assests/images/preloader-bar.png');
  }

  create() {
    var logo = this.add.sprite(400, 300, 'logo');
    var loadBar = this.add.sprite(400, 300 + 50, 'preloadbar');
      
    loadBar.setScale(2)
    this.pageAlignHorizontally = true;
          
    this.scene.start('Preload');
  }

}

// var SpacePhase = SpacePhase || {};

// SpacePhase.Boot = ()=> {}
// debugger
//   SpacePhase.Boot.prototype = {
//     preload: function () {
//       this.load.image('logo', 'assets/images/logo.png');
//       this.load.image('preloadbar', 'assets/images/preloader-bar.png');
//     },
//     create: () => {
//       this.game.stage.backgroundColor = '#ffffff';
  
//       this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//       this.scale.minWidth = 240;
//       this.scale.minHeight = 170;
//       this.scale.maxWidth = 2880;
//       this.scale.maxHeight = 1920;
  
//       this.scale.pageAlignHorizontally = true;
  
//       this.scale.setScreenSize(true);
  
//       this.game.physics.startSystem(Phaser.Physics.ARCADE);
      
//       this.scene.start('Preload');
//     }
//   }
