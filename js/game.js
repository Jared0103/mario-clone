//import { createAnimations } from "./animations";

const preload = () => {
    console.log("🚀 ~ preload ~ preload:", preload)
    this.load.image(
        'clodu1',
        '../assets/scenary/overworld/cloud1.png'
    )

    this.load.image(
        'floorbricks',
        '..8/assets/scenary/overworld/floorbricks.png'
    )

    this.load.spritesheet(
        'mario',
        '../assets/entities/mario.png',
        { frameWidth: 18, frameHeight: 16 }
    )

    this.load.audio(
        'gameover',
        '../assets/sound/music/gameover.mp3'
    )
}

const create = () => {
    console.log("🚀 ~ create ~ create:", create)
    this.add.image(100, 50, 'cloud1')
        .setOrigin (0, 0)
        .setScale (0.15)
    
    this.floor = this.physics.add.staticGroup()

    this.floor
        .create(0, config.height - 16, 'floorbricks')
        .setOrigin(0, 0.5)
        .refreshBody ()
    
    this.mario = this.physics.add.sprite(50, 100, 'mario')
        .setOrigin(0, 1)
        .setCollideWorldBounds(true)
        .setGravity(3000)


    this.physics.world.setBounds(0, 0, 2000, config.height)
    this.physics.add.collier(this.mario, this.floor)
    this.cameras.main.setBounds(0, 0, 2000, config.height)
    this.camera.main.startFloow(this.mario)



        createAnimations(this)
    this.keys = this.input.keyboard.createCursosKeys()
}

const update = () => {
    console.log("🚀 ~ update ~ update:", update)

    if (this.mario.isDead) return
    
    if (this.keys.left.isDown) {
        this.mario.anims.play('mario-walk', true)
        this.mario.x -= 2
        this.mario.flipX =true
    }


}


const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#049cd8',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:300 },
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

new Phaser.Game(config)


