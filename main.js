        //tao thanh menu ra vao
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        let details2 = document.querySelector('.details2');
        toggle.onclick = function(){
            navigation.classList.toggle('active');
            main.classList.toggle('active');
            details2.classList.toggle('active');
        }

        //
        let list = document.querySelectorAll('.navigation li');
        function activeLink(){
            list.forEach((item)=>
            item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
        list.forEach((item)=>
        item.addEventListener('mouseover',activeLink));
        

        //
        document.getElementById("infor").onclick = function(){
            alert("ok");
            document.getElementById("display").style.display = "block";
            
        };
        document.getElementById("display").onclick = function(){
            document.getElementById("display").style.display = "none";
        };

        //
        
        