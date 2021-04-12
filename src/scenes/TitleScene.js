import Phaser from 'phaser';
import Button from '../components/Button';


const width = 640;
const height = 640;

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Game
    this.gameButton = new Button(this, width / 2, height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'WorldScene');
    this.leaderboardButton = new Button(this, width / 2, height / 2, 'blueButton1', 'blueButton2', 'Leaderboard', 'Leaderboard', 24);
    // Credits
    this.creditsButton = new Button(this, width / 2, height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(width / 2, height / 2 - offset * 100, width, height),
    );
  }

  // eslint-disable-next-line class-methods-use-this
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}