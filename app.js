var ad = "Alaattin" ;
var resitYas = 18;
var evlenecegiYas = parseInt(prompt("Lütfen Evlendiğiniz Yaşı Giriniz :"));
var a;

for(a=0; a<=35; a++)
{
    if(a===0)
    {
        console.log(ad + " Doğdu :)");
    }
    

    else if(a===18)
    {
        console.log(ad + " Reşit Oldun :)");
    }
    

    else if(a===evlenecegiYas)
    {
        console.log(ad+ " " + evlenecegiYas + " Yaşında Evlendin :)");
    }
    
     else if(a===35)
    {
        console.log(ad + " " + a + " Yaşındasın Yolun Yarısı :)");
    }
    
    else
    {
        console.log(ad + " " + a + " Yaşındasın ");
    }
    
}