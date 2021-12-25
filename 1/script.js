function Add(form) {
    //let text = input.value.innerHTML;
    if(form.input.value){
        let newElement = document.createElement("li");
        newElement.innerHTML = form.input.value;
        document.getElementById("my-list").appendChild(newElement);
    }
};

function Remove(form) {
    //let text = input.value.innerHTML;
    if(form.input.value){
        let last = document.getElementById("my-list").lastChild;
        //console.log(last);
        document.getElementById("my-list").removeChild(last);
        
    }
};

function Restore() {
    let mainObj = document.getElementById("my-list");
    while (mainObj.childNodes.length > 2) {
        let oneChild = mainObj.lastChild;
        mainObj.removeChild(oneChild);
    }
};

function AddFirst(form) {
    //let text = input.value.innerHTML;
    if(form.input.value){
        let first = document.getElementById("my-list").firstChild;
        let newElement = document.createElement("li");
        newElement.innerHTML = form.input.value;
        document.getElementById("my-list").insertBefore(newElement, first);
    }
};

function selectFirst(form) {
    //let text = input.value.innerHTML;
    
        
        let first = document.getElementById('my-list').firstChild;
        console.log(first);
        first.style.fontWeight = 'bold';

        let list = document.getElementsByTagName("li");
        for(let i=1;i<list.length;i++){
            list[i].style.fontWeight = 'normal';
        }
    
};

function selectLast(form) {
    //let text = input.value.innerHTML;
    
        
        let last = document.getElementById('my-list').lastChild;
        console.log(last);
        last.style.fontWeight = 'bold';

        let list = document.getElementsByTagName("li");
        for(let i=0;i<list.length-1;i++){
            list[i].style.fontWeight = 'normal';
        }
    
};


let index = 0;

function selectNext(form) {
    
    let last =  document.getElementsByTagName("li");
   

    if(index===0){
        last[index].setAttribute('id','selected');
        index++;
    }
    else if(index!==0 && index<last.length ){
        last[index].previousSibling.removeAttribute('id');
        last[index].setAttribute('id','selected');
        index++;
    }
    else {
        last[index-1].removeAttribute('id');
        index=0;
        last[index].setAttribute('id','selected');
    }
    

    
};


function selectPrevious(form) {
    
    let last =  document.getElementsByTagName("li");
    
    //console.log(index);
    if(index===0){
        last[index].removeAttribute('id');
        index = last.length-1;
        last[index].setAttribute('id','selected');
    } else if(index<last.length) {
        last[index].removeAttribute('id');
        index--;
        last[index].setAttribute('id','selected');
    } else if (index == last.length-1){
        
        last[index].removeAttribute('id');
        index--;
        last[index].setAttribute('id','selected');
    }

    
    

    
};