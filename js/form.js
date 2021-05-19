class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Games");
        title.position(100,0);

        var input =createInput("Name");
        var button =createButton('Submit');

        input.position(150,200);
        button.position(150,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            var greeting =createElement('h3');
            greeting.html("Hello!" +name);
            greeting.position(130,160);
        });
    }
}