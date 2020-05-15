var left=document.getElementById("left")
var right=document.getElementById("right")
var change=document.getElementById("chng")
var act=document.getElementById("act")
var actdoingr=document.getElementById("doingr")
var actdoingl=document.getElementById("doingl")
var msg=document.getElementById("msg")
var next=document.getElementById("next")
var pl=document.getElementById("plsc")
var plsc=0;
var ai=document.getElementById("aisc")
var aisc=0;
var dirc=["left","right"]
var chosendirc;


left.addEventListener("click",function()
{
    var i=Math.floor(Math.random()*2);
    chosendirc=dirc[i];
    if(chosendirc==="left")
    {
        msg.textContent="Hit!";
        if(act.textContent==="shooting")
           { plsc++;
            pl.textContent=plsc;
            ai.textContent=aisc;
                if(pl.textContent==="5")
                { 
                    alert("YOU WON!!");
                    pl.textContent="0";
                    ai.textContent="0";
                    msg.textContent="";
                }    
                    console.log(plsc);
           }
        if(act.textContent=="shooting")
        {
            act.textContent="saving";
            actdoingr.textContent="Dive";
            actdoingl.textContent="Dive";
        }
        else
        {
            act.textContent="shooting";
            actdoingr.textContent="Shoot";
            actdoingl.textContent="Shoot";
        }
    }
    else
    {
        msg.textContent="Miss!";
        if(act.textContent==="saving")
           { aisc++;
            pl.textContent=plsc;
            ai.textContent=aisc;
                if(ai.textContent==="5")
                {   
                    alert("YOU LOST BETTER LUCK NEXT TIME");
                    pl.textContent="0";
                    ai.textContent="0";
                    msg.textContent="";
                }
                    console.log(aisc);
           }
        if(act.textContent=="shooting")
        {
            act.textContent="saving";
            actdoingr.textContent="Dive";
            actdoingl.textContent="Dive";
        }
        else
        {
            act.textContent="shooting";
            actdoingr.textContent="Shoot";
            actdoingl.textContent="Shoot";
        }
    }
});

right.addEventListener("click",function()
{
    var i=Math.floor(Math.random()*2);
    chosendirc=dirc[i];
    if(chosendirc==="right")
    {
        msg.textContent="Hit!";
        if(act.textContent==="shooting")
           { plsc++;
            pl.textContent=plsc;
            ai.textContent=aisc;
            if(pl.textContent==="5")
            {
                alert("YOU WON!!");
                pl.textContent="0";
                ai.textContent="0";
                msg.textContent="";
            }    
                console.log(plsc);
           }
        if(act.textContent=="shooting")
        {
            act.textContent="saving";
            actdoingr.textContent="Dive";
            actdoingl.textContent="Dive";
        }
        else
        {
            act.textContent="shooting";
            actdoingr.textContent="Shoot";
            actdoingl.textContent="Shoot";
        }
    }
    else
    {
        msg.textContent="Miss!";
        if(act.textContent==="saving")
          {  aisc++;
            pl.textContent=plsc;
            ai.textContent=aisc;
            if(ai.textContent==="5")
            {   
                alert("YOU LOST BETTER LUCK NEXT TIME");
                pl.textContent="0";
                ai.textContent="0";
                msg.textContent="";
            }    
                console.log(aisc);
          }
        if(act.textContent=="shooting")
        {
            act.textContent="saving";
            actdoingr.textContent="Dive";
            actdoingl.textContent="Dive";
        }
        else
        {
            act.textContent="shooting";
            actdoingr.textContent="Shoot";
            actdoingl.textContent="Shoot";
        }
    }
});

change.addEventListener("click",function()
{
    if(act.textContent=="shooting")
    {
        act.textContent="saving";
        actdoingr.textContent="Dive";
        actdoingl.textContent="Dive";
    }
    else
    {
        act.textContent="shooting";
        actdoingr.textContent="Shoot";
        actdoingl.textContent="Shoot";
    }
});
