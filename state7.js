demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ="#009933";
        console.log('state7');
        addChangeStateEventListeners();
    },
    update: function(){}
};
