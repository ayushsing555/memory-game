let set1,set2;
const icon=["fas "]
setTimeout(() => {
    for(var i=0;i<=11;i++){
    document.getElementsByClassName("fas")[i].style.display="none";
    document.getElementsByClassName("row")[i].style.backgroundColor="red";
    }
},5000);
var row=[],fas=[];
for(var i=0;i<=11;i++)
    {
        fas[i]=document.getElementsByClassName("fas")[i];
        row[i]=document.getElementsByClassName("row")[i];
    }
     let sum=0;
     const simplegame=(i)=>{
     if(sum==0)
        {
            firstarray=[];
            var firstimage=document.getElementsByClassName("fas")[i];
            var firstset=document.getElementsByClassName("row")[i].innerHTML;
            document.getElementsByClassName("row")[i].style.backgroundColor="white";   
            document.getElementsByClassName("fas")[i].style.display="block";
            sum++;
            firstarray[0]=i;
            firstarray[1]=firstset;
            return firstarray;   
        }
}
const simplegame2=(set1,j)=>{
    var secondimage=document.getElementsByClassName("fas")[j];
    var secondset=document.getElementsByClassName("row")[j].innerHTML;
    document.getElementsByClassName("row")[j].style.backgroundColor="white";   
    document.getElementsByClassName("fas")[j].style.display="block";
    sum=0;
    if(set1[1].slice(10,-29)==secondset.slice(10,-29)){
      console.log("matched");
      // document.getElementsByClassName("fas")[j].style.display="none";
      // document.getElementsByClassName("fas")[set1[0]].style.display="none";
      setTimeout(()=>{
          document.getElementsByClassName("row")[j].style.display="none";
      document.getElementsByClassName("row")[set1[0]].style.display="none";
      document.getElementsByClassName("fas")[j].style.display="none";
      document.getElementsByClassName("fas")[set1[0]].style.display="none";
      
      },500);
    }
    else{ 
     console.log("mismatched");
     setTimeout(()=>{
         document.getElementsByClassName("fas")[j].style.display="none";
     document.getElementsByClassName("fas")[set1[0]].style.display="none";
     document.getElementsByClassName("row")[j].style.backgroundColor="red";
     document.getElementsByClassName("row")[set1[0]].style.backgroundColor="red";
     },500)
    }
      console.log(set1[1].slice(10,-29) +  secondset.slice(10,-29));
    //    alert(secondset);
    return secondset;
}
row[0].addEventListener("click",()=>{
    if(sum==0){
    set1= simplegame(0);
    }
    else if(sum==1){
      set2=simplegame2(set1,0);
   }
});
row[1].addEventListener("click",()=>{
   if(sum==0)
   set1=simplegame(1);
  else if(sum==1)
    set2=simplegame2(set1,1);
}); 
row[2].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(2);
    else if(sum==1){
      set2=simplegame2(set1,2);
   }
});
row[3].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(3);
    else if(sum==1){
      set2=simplegame2(set1,3);
   }
});
row[4].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(4);
    else if(sum==1){
      set2=simplegame2(set1,4);
   }
});
row[5].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(5);
    else if(sum==1){
      set2=simplegame2(set1,5);
   }
});
row[6].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(6);
    else if(sum==1){
      set2=simplegame2(set1,6);
   }
});
row[7].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(7);
    else if(sum==1){
      set2=simplegame2(set1,7);
   }
});
row[8].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(8);
    else if(sum==1){
      set2=simplegame2(set1,8);
   }
});
row[9].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(9);
    else if(sum==1){
      set2=simplegame2(set1,9);
   }
});
row[10].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(10);
    else if(sum==1){
      set2=simplegame2(set1,10);
   }
});
row[11].addEventListener("click",()=>{
    if(sum==0)
    set1= simplegame(11);
    else if(sum==1){
      set2=simplegame2(set1,11);
   }
});
