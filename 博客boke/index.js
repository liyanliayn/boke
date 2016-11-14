/**
 * Created by Administrator on 2014/8/25.
 */

//注册界面条件判断
var center=document.getElementById("center");
var inputs=center.getElementsByTagName("input");
var sels=center.getElementsByTagName("select");
var iis=center.getElementsByTagName("i");

var i1=document.getElementById("i1");
var i2=document.getElementById("i2");
var i3=document.getElementById("i3");
var i5=document.getElementById("i5");
var strongs=i5.getElementsByTagName("strong");
console.log(strongs[0]);

var user=document.getElementById("user");
var pwd1=document.getElementById("pwd1");
var pwd2=document.getElementById("pwd2");
var answer=document.getElementById("answer");
var addr=document.getElementById("addr");



//        strongs[0].style.background="red";

sels[0].onchange=function(){
    chanGe(sels[0].value,5);
}

for(var m=1;m<sels.length;m++){
    sels[m].onchange=function(){

        if(sels[1].value!=0&&sels[2].value!=0&&sels[3].value!=0){
            iis[8].className="i3";
            iI(iis[8],i3);
        }else{
            iis[8].className="i2";
            iI(iis[8],i2);
        }
    }

}
function chanGe(obj,num){
    if(obj!=0){
        iis[num].className="i3";
        iI(iis[num],i3);
    }
    else{
        iis[num].className="i2";
        iI(iis[num],i2);
    }
}


for(var i=0;i<inputs.length;i++){
    if(i==0){
        user.onfocus=function(){
            iis[0].className="i1";
            iis[0].style.display="block";

        }
        user.onkeyup=function(){

            if(textUser(inputs[0].value)){
                iis[0].className="i3";
                iI(iis[0],i3);
            }
            else{
                iis[0].className="i2";
                iI(iis[0],i2);
            }
        }
    }
    else if(i==1){
        pwd1.onfocus=function(){
            iis[3].className="i5";
            iis[3].style.display="block";
        }
        pwd1.onkeyup=function(){
            if(testPwd(inputs[1].value)){
                iis[3].className="i5";
                iis[3].style.display="block";

            }else{
                iis[3].className="i2";
                iI(iis[3],i2);
            }
        }
        pwd1.onblur=function(){
            if(testPwd(inputs[1].value)){
                iis[3].className="i3";
                iI(iis[3],i3);
            }else{
                iis[3].className="i2";
                iI(iis[3],i2);
            }
        }
    }else if(i==2){
        pwd2.onfocus=function(){
            iis[4].className="i4";
            iis[4].style.display="block";
            iis[4].innerHTML="请再输入一遍密码！";
        }
        pwd2.onkeyup=function(){
            if(checkPwd(inputs[1].value,inputs[2].value)){
                iis[4].className="i3";
                iI(iis[4],i3);
            }else{
                iis[4].className="i2";
                iis[4].style.display="block";
                iis[4].innerHTML="密码错误，请重新输入！";
            }
        }
    }else if(i==3){
        answer.onfocus=function(){
            iis[6].className="i2";
            iI(iis[6],i2);
        }
        answer.onkeyup=function(){
            if(answR(inputs[3].value)){
                iis[6].className="i3";
                iI(iis[6],i3);
            }else{
                iis[6].className="i2";
                iI(iis[6],i2);
            }
        }
    }else if(i==4){
        addr.onfocus=function(){
            iis[7].className="i2";
            iI(iis[7],i2);
        }
        addr.onkeyup=function(){
            if(addR(inputs[4].value)){
                iis[7].className="i3";
                iI(iis[7],i3);
            }else{
                iis[7].className="i2";
                iI(iis[7],i2);
            }
        }
    }
}


function iI(obj,cn){
    obj.style.display="block";
    obj.innerHTML=cn.innerHTML;
}

function textUser(num){
    var reg1=/^[0-9a-zA-Z_]{1,19}$/;
    if(reg1.test(num)==true){
        return true;
    }else{
        return false;
    }
}

function testPwd(num){
//        var reg2=/^[0-9]{6,20}$/;
    var reg3=/^[0-9a-zA-Z]{5,19}$/;
    if(reg3.test(num)==true){

        return true;
    }else{
        return false;
    }
}

function checkPwd(num1,num2){
    if(num1==num2){
        return true;
    }else{
        return false;
    }
}

function answR(num){
    if(num!=""){
        return true;
    }else{
        return false;
    }
}

function addR(num){
    if(num.indexOf("@")!=-1){
        return true;
    }else{
        return false;
    }
}







var txt_num=document.getElementById("txt_num");
var number=document.getElementById("number");
txt_num.onkeyup=function(){
        var num=200-txt_num.value.length;
        number.innerHTML=num;
        if(num<=0){
            number.innerHTML=0;
            alert("字数已满！请停止输入！");
        }
    }


//延迟加载
var photo=document.getElementById("photo");
var imgs2=photo.getElementsByTagName("img");
window.onscroll=function(){
    var scrol=myScroll();

    for(var i=0;i<imgs2.length;i++){

        if(scrol.top+window.screen.height>imgs2[i].offsetTop+100){

            if(imgs2[i].getAttribute("flag")!="true"){

                console.log(imgs2[i].getAttribute("xsrc"));
                imgs2[i].setAttribute("src",imgs2[i].getAttribute("xsrc"));
                imgs2[i].setAttribute("flag","true");

            }
        }
    }
}

//预加载
var add=document.getElementById("add");
var box00img=document.getElementById("box00img");
var close2=document.getElementById("close2");
for(var i=0;i<imgs2.length;i++){
    imgs2[i].index=i;
    imgs2[i].onclick=function(){
        add.style.display="block";
        box00img.src=imgs2[this.index].getAttribute("bigsrc");
        document.getElementById("hidd").style.display="block";
        document.getElementById("hidd").style.height=document.body.scrollHeight+'px';
    }
}

close2.onclick=function(){
    add.style.display="none";
    document.getElementById("hidd").style.display="none";
}





//登录弹窗
var login=document.getElementById("login");
var bla=document.getElementById("bla");
var tit=document.getElementById("tit");
var close=document.getElementById("close");



document.getElementById("dlz").onclick=function(){
    document.body.style.overflow="hidden";
    login.style.display="block";
    bla.style.display="block";
}
tit.onmousedown=function(evt){
    var e=evt||window.event;
    var sx=e.offsetX;
    var sy=e.offsetY;
    e.preventDefault();

    document.onmousemove= function (evt) {
        var ee=evt||window.event;
        login.style.left=ee.clientX-sx+"px";
        login.style.top=ee.clientY-sy+"px";
        if(ee.clientY-sy<=0){
            login.style.top=0;
        }
        if(ee.clientY-sy>=document.documentElement.clientHeight-login.offsetHeight){
            login.style.top=document.documentElement.clientHeight-login.offsetHeight+"px";
        }
        if(ee.clientX-sx<=0){
            login.style.left=0;
        }
        if(ee.clientX-sx>=document.documentElement.clientWidth-login.offsetWidth){
            login.style.left=document.documentElement.clientWidth-login.offsetWidth+"px";
        }
    }
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}



close.onclick=function(){
        document.body.style.overflow="auto";
        login.style.display="none";
        bla.style.display="none";

    }



//注册弹窗
var zhuce=document.getElementById("zhuce");
var ce=document.getElementById("ce");
var tit1=document.getElementById("tit1");
var close1=document.getElementById("close1");
document.getElementById("zhuce").onclick=function(){
    document.body.style.overflow="hidden";
    ce.style.display="block";
    bla.style.display="block";
}
tit1.onmousedown=function(evt){
    var e=evt||window.event;
    var sx=e.offsetX;
    var sy=e.offsetY;
    e.preventDefault();
    document.onmousemove= function (evt) {
        var ee=evt||window.event;

        ce.style.left=ee.clientX-sx+"px";
        ce.style.top=ee.clientY-sy+"px";
        if(ee.clientY-sy<=0){
            ce.style.top=0;
        }
        if(ee.clientY-sy>=document.documentElement.clientHeight-ce.offsetHeight){
            ce.style.top=document.documentElement.clientHeight-ce.offsetHeight+"px";
        }
        if(ee.clientX-sx<=0){
            ce.style.left=0;
        }
        if(ee.clientX-sx>=document.documentElement.clientWidth-ce.offsetWidth){
            ce.style.left=document.documentElement.clientWidth-ce.offsetWidth+"px";
        }
    }
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}

close1.onclick=function(){
        document.body.style.overflow="auto";
        ce.style.display="none";
        bla.style.display="none";
    }

//个人中心
var per=document.getElementById("per");
var ul2=document.getElementById("ul2");
var li2=ul2.getElementsByTagName("li");
var icon=document.getElementById("icon");
per.onmouseover=function(){
    icon.style.background="url('images/arrow2.png')no-repeat";
    ul2.style.opacity=1;
    animate(ul2,{height:120});
}
per.onmouseout=function(){
        icon.style.background="url('images/arrow.png')no-repeat";
        ul2.style.opacity=0;
        animate(ul2,{height:0});

    }

//轮播器
var lunbo=document.getElementById("lunbo");
var imgs=lunbo.getElementsByTagName("img");
var lis=lunbo.getElementsByTagName("li");
var sptxt=document.getElementById("sptxt");

index=0;
var timer=null;

timer=setInterval(function(){
    for(var j=0;j<imgs.length;j++){
        imgs[j].className="";
        lis[j].className="";
    }
    this.className="current";
    imgs[index].className="current";
    sptxt.innerHTML=imgs[index].alt;

    index++;

    if(index>=imgs.length){
        index=0;
    }
},1000);


for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
            imgs[j].className="";
        }
        this.className="current";
        imgs[this.index].className="current";
        sptxt.innerHTML=imgs[this.index].alt;
        clearInterval(timer);

        index=this.index;
    }
    lis[i].onmouseout=function(){
        timer=setInterval(function(){
            for(var j=0;j<imgs.length;j++){
                imgs[j].className="";
                lis[j].className="";
            }
            this.className="current";
            imgs[index].className="current";
            sptxt.innerHTML=imgs[index].alt;

            index++;

            if(index>=imgs.length){
                index=0;
            }
        },1000);
    }
}

//分享

var share=document.getElementById("share");
var fx=document.getElementById("fx");
share.onmouseover=function(){
    animate(share,{left:0});
}
share.onmouseout=function(){
    animate(share,{left:-210});
}


document.onscroll=function(){
    var obj=Scroll();
    console.log(obj.top);
    animate(share,{top:obj.top+200});
}
function Scroll(){
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    var left=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft;
    return{
        top:top,
        left:left
    }
}


//博文
var con_left=document.getElementById("con_left");
var uls=con_left.getElementsByTagName("ul");
var h2=con_left.getElementsByTagName("h2");

for(var i=0;i<h2.length;i++){
    h2[i].index=i;
    h2[i].onclick=function(){
        animate(uls[this.index], {height:0});
        if(uls[this.index].style.height==158+"px"){
            animate(uls[this.index], {height:0});
        }else if(uls[this.index].style.height==0+"px"){
            animate(uls[this.index],{height:158});
        }
    }
}

//导航条


var nav=document.getElementById("nav");
var black=nav.getElementsByTagName("ul")[0];
var fudong=document.getElementById("fudong");
var li_b=black.getElementsByTagName("li");
var blank=document.getElementById("blank");
var li_k=blank.getElementsByTagName("li");
var white=document.getElementById("white");

var temp=20;
var fh=0;
for(var i=0;i<li_k.length;i++){
    li_k[i].index=i;
    li_k[i].onmouseover=function(){
        var sum=85*this.index;
        animate(fudong,{left:sum+20},function(){
            animate(white,{left:-sum});
        });
    }

    li_k[i].onmouseout=function(){
        animate(fudong,{left:temp},function(){
            animate(white,{left:fh});

        })
    }

    li_k[i].onclick=function(){
        temp=85*this.index+20;
        fh=-85*this.index;
        animate(fudong,{left:temp},function(){
            animate(white,{left:fh});
        });
    }

}


