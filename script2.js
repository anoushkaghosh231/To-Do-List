let myLeads=[]
let ml=myLeads
const body= document.body
const list = document.getElementById('list')
        const input = document.querySelector('input')
        const button = document.querySelector('button')



button.addEventListener('click', () => {
        const myItem = input.value;
        if(myItem!=""){
        myLeads.push(input.value)
        ml.push(input.value)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(ml)
        ml=[]

       /*  input.value='' */
        }
      
        //input.focus();
        });

function render(l){
    for (let i=0; i<l.length; i++)
    {
        const dv=document.createElement('li')
        dv.innerHTML= `
        <span>${l[i]}</span>
        <button class='btn'>Delete</button>
        `
    list.append(dv)
    const btn=dv.querySelector('.btn')
    btn.addEventListener('click',() => {
        removeItemOnce(myLeads, myLeads[i])
        dv.remove()
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        console.log(myLeads)
        
    })
    }
     //body.append(list)
}

//tabBtn.addEventListener("click", function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // })
    
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //myLeads.push(tabs[0].url)
       // localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        //render(myLeads)
    //})

    
//})
let leadsfromlocalstorage= JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromlocalstorage)
if (leadsfromlocalstorage){
    //body.remove(list)
    myLeads=leadsfromlocalstorage
    render(myLeads)
    console.log(myLeads,"asdfg")
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
