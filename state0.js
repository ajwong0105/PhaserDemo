var demo = {}, centerX = 1500/2, centerY = 1000/2, adam, speed = 30;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('adam', 'assets/spritesheets/adamSheet.png', 320, 320);
        game.load.image('road', 'assets/backgrounds/roadBG.png')
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor ="#80FF80";
        addChangeStateEventListeners();
        game.world.setBounds(0,0,2813, 1000)
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var roadBG = game.add.sprite(0, 0, 'road');
        adam = game.add.sprite(centerX, centerY, 'adam');
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(1,1);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        adam.animations.add('walk', [0, 1, 2, 3, 4]);

        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300, 0, 600, 1000);

    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
            adam.scale.setTo(1,1);
            adam.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
            adam.scale.setTo(-1,1);
            adam.animations.play('walk', 14, true);
        }
        else{
            adam.animations.stop('walk');
            adam.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
            if(adam.y < 180){
                adam.y = 180;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};

function changeState(i, stateNum){
    console.log('state'+ stateNum);
    game.state.start('state'+ stateNum);
}

function addKeyCallBack(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0)
    addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1)
    addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2)
    addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3)
    addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4)
    addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5)
    addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6)
    addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7)
    addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8)
    addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9)
}