const emojis = ["😁","😁","😍","😍","😮","😮","😎","😎","😡","😡","🤢","🤢","😇","😇","😑","😑"]
        var shuffle_emojis = emojis.sort(()=> (Math.random()> .5) ? 2 : -1 )
        var clock = document.querySelector('.clockDiv')
        var val = 1;
        var timerId = setInterval(function(){
        clock.innerHTML = val;
        ++val;
        }, 1000)
                clock.innerHTML = val;
        for(var i = 0; i < emojis.length ; i++){
            var box = document.createElement('div')
            box.className = 'item';
            box.onclick = function(){
                clock.style.display = 'block';
                
                this.classList.add('boxOpen')
                setTimeout(function(){
                    var boxes = document.querySelectorAll('.boxOpen');
                    if(boxes.length > 1){
                        if(boxes[0].innerHTML === boxes[1].innerHTML){
                            // alert('matched')
                            boxes[0].classList.add('boxMatch')
                            boxes[1].classList.add('boxMatch')

                            boxes[1].classList.remove('boxOpen')
                            boxes[0].classList.remove('boxOpen')
                            var boxmatchs = document.querySelectorAll('.boxMatch')
                            if(boxmatchs.length == emojis.length){
                                if(val <= 30){
                                    alert('YOUR RANK IS EXPERT🚀 \n You won in '+val + "Seconds")
                                }else if(val > 30){
                                    alert("YOUR RANK IS GOOD👏 \n You won in "+val + "Seconds")
                                }
                                clearTimeout(timerId)
                                return 
                            }
                        }else{
                                boxes[1].classList.remove('boxOpen')
                                boxes[0].classList.remove('boxOpen')
                        }
                    }
                },500)
            }

            box.innerHTML = shuffle_emojis[i]
            document.querySelector('.game').appendChild(box)
        }