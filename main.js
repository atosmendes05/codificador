(function(){

    const cal_2 = document.querySelector('.cal-2__content')   
    const inpuText = document.getElementById('input__text')
    const btnC = document.querySelector('.btn__c')
    const btnD = document.querySelector('.btn__d')


    btnC.addEventListener('click',criptografar)

    btnD.addEventListener('click',descriptografar)


    function criptografar(){

        if(inpuText.value){

            const valorText = createText()
            const btnCopia = createButtom()

            cal_2.innerHTML = ''
            cal_2.append(valorText,btnCopia)
        
            let result = inpuText.value
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');

            valorText.innerHTML = `<p>${result}</p>`
            inpuText.value = ''
            
            copiaText(valorText)
        }

    }


    function descriptografar(){

        if(inpuText.value){
           const valorText = createText()
           const btncopia = createButtom()
           
           cal_2.innerHTML = ''
           cal_2.append(valorText,btncopia)

            let result = inpuText.value
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');

            valorText.innerHTML = `<p>${result}</p>`
            inpuText.value = ''

            copiaText(valorText)

        }

    }


    function createText(){
        const valorText = document.createElement('div')
        valorText.className = 'texto'
        return valorText
    }

    function createButtom() {
        const btnCopia = document.createElement('div')
        btnCopia.className = 'btn__copia'
        btnCopia.innerHTML = `<button class="btn btn__cop" type="button">Copia</button>`
        return btnCopia
    }


    function copiaText(valorText){
        const btnCop = document.querySelector('.btn__cop')

        btnCop.addEventListener('click',function(){
            navigator.clipboard.writeText(valorText.textContent)

            cal_2.innerHTML = ''

        })
    }

})()



