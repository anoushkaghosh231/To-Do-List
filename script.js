const list=document.getElementById('list')
        const input= document.querySelector('input')
        const button= document.querySelector('button')
        
        button.addEventListener('click', () => {
        const myItem = input.value;
        if(myItem!=""){
        const dv=document.createElement('li')
        input.value = '';

        dv.innerHTML= `
        <span>${myItem}</span>
        <button class='btn'>Delete</button>
        `
        list.append(dv)

        const btn=dv.querySelector('.btn')
        btn.addEventListener('click',() => {
            dv.remove()
        })
        //body.append(list)
        }
      
        
        input.focus();
        });
