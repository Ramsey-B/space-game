class MainMenu extends Phaser.Scene {
  constructor() {
    super({key: "MainMenu"});
  }
  create() {
    this.background = this.add.tileSprite(0, 0, 1600, 1200, 'space');
    var text = "Press Enter!";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    
    var t = this.add.text(300, 500 / 2, text, style);
    text = "Highest score: ";
    style = { font: "15px Arial", fill: "#ffffff", align: "center" };
    
    var h = this.add.text(50, 50, text, style);
    this.input.keyboard.on('keydown', (e) => {
      if(e.key == "Enter") {
        this.scene.start("Game")
      }
    })
  }
  update () {
    this.background.tilePositionX +=2
  }
}



// SpacePhase.MainMenu = () => { }

// SpacePhase.MainMenu.prototype = {
//   create: () => {
//     this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

//     this.background.autoScroll(-20, 0);
//     debugger
//     var text = "Tap to begin";
//     var style = { font: "30px Arial", fill: "#fff", align: "center" };
//     var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
//     t.anchor.set(0.5);

//     text = "Highest score: " + this.highestScore;
//     style = { font: "15px Arial", fill: "#fff", align: "center" };

//     var h = this.game.add.text(this.game.width / 2, this.game.height / 2 + 50, text, style);
//     h.anchor.set(0.5);
//   },
//   update: function () {
//     if (this.game.input.activePointer.justPressed()) {
//       this.game.scene.start('Game');
//     }
//   }
// }

