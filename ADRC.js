

var w= document.getElementById("input_w");
var b= document.getElementById("input_b");
var c= document.getElementById("input_c");
var ts= document.getElementById("input_Ts");
var Ro= document.getElementById("input_Ro");

var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");

var b0=0.0;
var r=document.getElementById("resultado");
var wc=0.0;
var w0=0.0;
var B1=0.0;
var B2=0.0;
var B3=0.0;
var kd=0.0;
var kp=0.0;


function calcular(){
    w.value=parseFloat(w.value);
    b.value=parseFloat(b.value);
    c.value=parseFloat(c.value);
    ts.value=parseFloat(ts.value);
    Ro.value=parseFloat(Ro.value);

    if (w.value > 0 && b.value > 0 && c.value >= 0 && ts.value > 0 && Ro.value > 0)
    {
        console.log(w.value);
        b0= parseFloat(w.value)+parseFloat(w.value*0.2);
        console.log(b0);
        wc=10/ts.value;
        w0=4*wc;
        B1=3*w0;
        B2=3*w0*w0;
        B3=w0*w0*w0;
        kd=2*Ro.value*wc;
        kp=wc*wc;
        r.innerHTML="Los parametros calculados del controlador LADRC son:"+"<br/>"+"b0= "+b0.toFixed(2)+"<br/>" +"wc= "+ wc.toFixed(2)+"<br/>" +"w0= "+ w0.toFixed(2)+"<br/>" +"B1= "+ B1.toFixed(2)+"<br/>" +"B2= "+ B2.toFixed(2)+"<br/>" +"B3= "+ B3.toFixed(2)+"<br/>" +"Kp= "+ kp.toFixed(2)+"<br/>" +"Kd= "+ kd.toFixed(2);
    }
    else
    {   
        r.innerHTML="Error de parametros";
    }

}


boton.addEventListener("click",calcular);