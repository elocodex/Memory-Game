const emojis = ["😁","😁","😍","😍","😮","😮","😎","😎","😡","😡","🤢","🤢","😇","😇","😑","😑"];
let shuffle_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
let clock = document.querySelector('.clockDiv');
let val = 1;
let timerId;

clock.innerHTML = val;

for (let i = 0; i < shuffle_emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.onclick = function() {
        clock.style.display = 'block';

        if (!timerId) {
            timerId = setInterval(function() {
                clock.innerHTML = val;
                ++val;
            }, 1000);
        }

        this.classList.add('boxOpen');

        setTimeout(function() {
            let boxes = document.querySelectorAll('.boxOpen');
            if (boxes.length > 1) {
                if (boxes[0].innerHTML === boxes[1].innerHTML) {
                    boxes[0].classList.add('boxMatch');
                    boxes[1].classList.add('boxMatch');

                    boxes[1].classList.remove('boxOpen');
                    boxes[0].classList.remove('boxOpen');

                    let boxmatchs = document.querySelectorAll('.boxMatch');
                    if (boxmatchs.length === emojis.length) {
                        clearInterval(timerId);
                        if (val <= 30) {
                            alert('YOUR RANK IS EXPERT🚀 \n You won in ' + val + " Seconds");
                        } else if (val > 30) {
                            alert("YOUR RANK IS GOOD👏 \n You won in " + val + " Seconds");
                        }
                    }
                } else {
                    boxes[1].classList.remove('boxOpen');
                    boxes[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    }

    box.innerHTML = shuffle_emojis[i];
    document.querySelector('.game').appendChild(box);
}
