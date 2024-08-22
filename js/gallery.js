(function con_p() {
    const img_wrap = document.getElementsByClassName("cp-img-wrap");
    const ctrls = document.getElementsByClassName("ctrls");
    setTimeout(() => {
        autoSlide(img_wrap, ctrls, 10000);
    }, 10000);
    for(let ctrl of ctrls) {
        ctrl.addEventListener("click", () => {
        manualSlide(event, img_wrap, ctrls);
        }, false);
    } 
    const slide_duration = {
        duration: 10000,
        reset_duration() {
            this.duration = 0;
        },
        increment(intvl) {
            this.set_inter = setInterval(() => {
                this.duration += 1000;
                console.log(this.duration)
                if(this.duration >= intvl) clearInterval(this.set_inter);
            }, 1000);
        },
        clear_intvl() {
           clearInterval(this.set_inter);
        }
    };
    function manualSlide(e, img_nodes, ctrl_nodes) {
        slide_duration.reset_duration();
        slide_duration.clear_intvl();
        slide_duration.increment(10000);
        const target = e.target;
        const target_id_data = target.getAttribute("data-wrap");
        const target_node = document.getElementById(target_id_data);
        for(let ctrl of ctrl_nodes) {
            ctrl.classList.remove("active");
        }
        for(let single_node of img_nodes) {
            single_node.classList.remove("active");
        }
        target.classList.add("active");
        target_node.classList.add("active");
    }
    function autoSlide(img_nodes, ctrl_nodes, a_s_duration) {
        let current;
        if(slide_duration.duration < a_s_duration){
            setTimeout(() => {
                autoSlide(img_wrap, ctrls, 10000);
            }, 1000);
            return;
        } else {
            for(let i = 0; i < img_nodes.length; i++) {
                if(img_nodes[i].classList.contains("active")) {
                    current = i;
                    break;
                }
            }
            img_nodes[current].classList.remove("active");
            ctrl_nodes[current].classList.remove("active");
            if(current == img_nodes.length - 1) {
                img_nodes[0].classList.add("active");
                ctrl_nodes[0].classList.add("active");
            } else {
                img_nodes[current + 1].classList.add("active");
                ctrl_nodes[current + 1].classList.add("active");
            }
            setTimeout(() => {
                autoSlide(img_wrap, ctrls, 10000);
            }, 10000);
        }   
    }   
 })();
