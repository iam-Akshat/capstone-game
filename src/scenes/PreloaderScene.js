import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
    this.readyCount = 0;
  }

  preload() {
    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    this.add.image(width / 2, height / 2 - 200, 'logo');
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      // eslint-disable-next-line radix
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    // eslint-disable-next-line prefer-arrow-callback
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);
    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    this.load.image('mapSprite', 'assets/ForrestTiles.png');
    this.load.image('grassSprite', 'assets/Bushes.png');
    this.load.spritesheet('items', 'assets/items.png', { frameHeight: 21, frameWidth: 16.25 });
    this.load.setPath('assets/hero');
    this.load.spritesheet('hero-idle-front', 'idle/hero-idle-front.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-idle-back', 'idle/hero-idle-back.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-idle-side', 'idle/hero-idle-side.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-walk-front', 'walk/hero-walk-front.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-walk-back', 'walk/hero-walk-back.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-walk-side', 'walk/hero-walk-side.png', { frameHeight: 32, frameWidth: 32 });
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}