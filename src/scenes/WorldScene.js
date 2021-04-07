import Phaser from 'phaser';
import genRandomNum from '../helpers/randomNum';

export default class WWorldScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WorldScene' });
  }

  create() {
    this.map = this.make.tilemap({
      tileHeight: 16,
      tileWidth: 16,
      width: 80,
      height: 64,
    });

    this.physics.world.bounds.width = this.map.widthInPixels;
    this.physics.world.bounds.height = this.map.heightInPixels;


    const bg = this.map.addTilesetImage('mapSprite');
    const bgLayer = this.map.createBlankLayer('bglayer', bg);
    bgLayer.fill(1);

    const rocksLayer = this.map.createBlankLayer('rocksLayer', bg);
    this.grassMap = this.make.tilemap({
      tileHeight: 17,
      tileWidth: 17.6,
      width: 88,
      height: 17,
    });
    const grass = this.grassMap.addTilesetImage('grassSprite');
    const grassLayer = this.map.createBlankLayer('grassLayer', grass);
    for (let i = 0; i < 64; i += 1) {
      const x = Math.floor(Phaser.Math.RND.between(0, this.physics.world.bounds.width) / 16);
      const y = Math.floor(Phaser.Math.RND.between(0, this.physics.world.bounds.height) / 16);
      // parameters are x, y, width, height
      rocksLayer.fill(17, x, y, 1, 1);
      grassLayer.fill(3, x + genRandomNum(21), y + genRandomNum(28), 1, 1);
      grassLayer.fill(4, x + genRandomNum(21), y + genRandomNum(28), 1, 1);
      grassLayer.fill(1, x + genRandomNum(21), y + genRandomNum(28), 1, 1);
    }
    rocksLayer.setCollisionByExclusion([-1]);
    grassLayer.setCollisionByExclusion([-1]);

    this.player = this.physics.add.sprite(50, 100, 'hero-idle-front', 2);
    this.player.setCollideWorldBounds(true);


    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
    this.physics.add.collider(this.player, rocksLayer);
    this.physics.add.collider(this.player, grassLayer);

    // -------------animations start--------- //
    const defaultAnimationFrames = [1, 2, 3, 4, 5, 6];
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero-walk-side', { frames: defaultAnimationFrames }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero-walk-side', { frames: defaultAnimationFrames }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('hero-walk-back', { frames: defaultAnimationFrames }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('hero-walk-front', { frames: defaultAnimationFrames }),
      frameRate: 10,
      repeat: -1,
    });
    // --------------animations end--------------- //
  }

  update() {
    this.player.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-80);
      this.player.flipX = true;
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(80);
      this.player.flipX = false;
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
    }


    if (this.cursors.left.isDown) {
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }
  }
}