demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ="#ff00ff";
        console.log('state9');
        addChangeStateEventListeners();
    },
    update: function(){}
};
