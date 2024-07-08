let startBtn=document.querySelector('.start');
        let stopBtn=document.querySelector('.stop');
        
        const switchC=()=>{
            let color="#";
            const hex="0123456789ABCDEF";
            for (let i = 0; i < 6; i++) {
                color+=hex[Math.floor(Math.random()*16)];
            }
            return color;
        }

        let colorInterval;
        const startSwitch=()=>{
            if(!colorInterval){
                colorInterval=setInterval(()=>(
                    document.body.style.backgroundColor=switchC()
                ),100)
            }
        }

        const stopSwitch=()=>{
            clearInterval(colorInterval);
            colorInterval=null;
        }

        startBtn.addEventListener('click',startSwitch)
        stopBtn.addEventListener('click', stopSwitch);
