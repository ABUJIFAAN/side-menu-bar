window.onload = function(){
    document.getElementById("print").addEventListener("click",()=>{
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
        console.log(window)
        html2pdf().from(invoice).save();
    })
}