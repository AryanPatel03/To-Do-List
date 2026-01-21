function add() {
    let txt = document.getElementById('text').value;
    // const unid = Date.now();
    const btn = document.getElementById('btn');
    const new_tsk = document.getElementById('new');
    const rLine = document.getElementById('rline'); 
    // btn.id = `${unid}`;

    // This one is for validation like if nothing text in input then it will print the error line.
    if(txt === "") rLine.innerHTML = `<p class="cr">Please Write description for add the task.</p>`;
    
    else {
        const tsk_d = document.createElement('div');
        // tsk_d.style.paddingBottom = "6px";
        tsk_d.className = 'cbn';
        tsk_d.innerHTML = `<input type="checkbox" id="cbx" class="cb">
                    <input type="text" size="32" class="txt" id="text" value="${txt}" readonly>
                    <button type="submit" class="spbt" id="ebt">Edit</button>
                    <button type="submit" class="spbt" id="dbt">Delete</button>`;
        // new_tsk.innerHTML += tsk_d;            
        new_tsk.appendChild(tsk_d);
        console.log('Welcome into the pending tasklist.');
        // txt = document.getElementById('text').value = '';
        
        const ebtbut = tsk_d.querySelector('#ebt');
        const dbtbut = tsk_d.querySelector('#dbt');
        const textInp = tsk_d.querySelector('#text');
        const cbc = tsk_d.querySelector('#cbx');

        // const ebtbut = tsk_d.querySelector('.edt-btn');
        // const dbtbut = tsk_d.querySelector('.dlt-btn');
        // const textInp = tsk_d.querySelector('.txt');
        // const cbc = tsk_d.querySelector('.cb');
        
        // This code is for edit the data into pending task list.
        ebtbut.addEventListener("click", () => {
            if(textInp.hasAttribute("readonly")){    
                textInp.removeAttribute("readonly");
                textInp.focus();
                console.log('Readmode Disabled.');
                ebtbut.innerHTML = "Save";                
                console.log('Edit Mode Activated.');
            } else{
                textInp.setAttribute("readonly", "");
                ebtbut.innerHTML = "Edit";
                // if(ebtbut.innerHTML == "Save" && !textInp.hasAttribute("readonly")){    // }
                console.log('Readmode Enabled.');
            } 
            // textInp.setAttribute("readonly"); 
        });

        // This one code is for the delete data.
        dbtbut.addEventListener("click", () => {
            const dlt = document.getElementById('dlt');
            dlt.appendChild(tsk_d);            
            textInp.setAttribute("readonly", "");
            textInp.style.width = "22rem";
            cbc.remove();
            dbtbut.remove();
            ebtbut.remove();
            // tsk_d.remove();
            console.log("Task Deleted.");
        });

        // This code is for check and uncheck logic.
        const cpts = document.getElementById('cpt');
        cbc.addEventListener("click", () => {
            // cpts.className = 'cbn';
            if(cbc.checked){
                cpts.appendChild(tsk_d);
                // cpts.innerHTML += tsk_d.innerHTML;
                tsk_d.style.textDecoration = 'line-through';                
                dbtbut.remove();
                ebtbut.remove();
                // tsk_d.removeChild(dbtbut);
                // tsk_d.removeChild(ebtbut);
                console.log('Task Completed.');
            } else{
                new_tsk.appendChild(tsk_d);
                tsk_d.style.textDecoration = 'none';
                tsk_d.appendChild(ebtbut);
                tsk_d.appendChild(dbtbut);
                console.log('Task Goes back into pending tasklist.');
            }
            // cpts.addEventListener("click", () => {  //  });
        });
    }
    // This line is for when we add the task after goes the text into pending tasklist then where we are passing the text textbox will clear the value which we passed.
    document.getElementById('text').value = '';
}    
        

    
    
    
    
    
    


    
    // if(ebtbut){
    //     console.log("Working");
    //     let text = document.getElementById('text');
    //     text.removeAttribute('readonly');
    //     text.focus();
    // }
    // if(dbtbut){
    //     console.log("Can u delete that one");
    //     new_tsk.innerHTML = "";
    // }