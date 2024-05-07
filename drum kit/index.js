var n=document.querySelectorAll("button").length;

for (var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clicked)
      function clicked(){
        var m = this.innerHTML;
        switch(m){
            case("w"):
                var sing= new Audio("sounds/tom-1.mp3");
                sing.play();
            break;
            case("a"):
            var sing= new Audio("sounds/tom-2.mp3");
                sing.play();
            break;
            case("s"):
            var sing= new Audio("sounds/tom-3.mp3");
                sing.play();
                break;
            case("d"):
            var sing= new Audio("sounds/tom-4.mp3");
                sing.play();
                break;
            case("j"):
            var sing= new Audio("sounds/snare.mp3");
                sing.play();
                break;
            case("k"):
            var sing= new Audio("sounds/kick-bass.mp3");
                sing.play();
                break;
            case("l"):
            var sing= new Audio("sounds/crash.mp3");
                sing.play();
                break;
    }
      }  
    }
    document.addEventListener("keypress",touched);
    function touched(event){
        

        
            switch(event.key){
                case("w"):
                    var sing= new Audio("sounds/tom-1.mp3");
                    sing.play();
                break;
                case("a"):
                var sing= new Audio("sounds/tom-2.mp3");
                    sing.play();
                break;
                case("s"):
                var sing= new Audio("sounds/tom-3.mp3");
                    sing.play();
                    break;
                case("d"):
                var sing= new Audio("sounds/tom-4.mp3");
                    sing.play();
                    break;
                case("j"):
                var sing= new Audio("sounds/snare.mp3");
                    sing.play();
                    break;
                case("k"):
                var sing= new Audio("sounds/kick-bass.mp3");
                    sing.play();
                    break;
                case("l"):
                var sing= new Audio("sounds/crash.mp3");
                    sing.play();
                    break;
        }
        }

    