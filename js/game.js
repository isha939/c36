class Game{
    constructor(){

    }
    getstate(){
        var gamestateRef =database.ref('gamestate');
        gamestateRef.on("value",function(data){
            gamestate=dat.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        });
    }
    start(){
        if(gamestate===0){
            //player= new player();
            //player.getcount();
            form=new Form();
            form.display();
        }
    }
}