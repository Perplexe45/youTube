window.onload = ()=> { /*La page entièrement chargé*/ 
  let collapse = document.getElementById("collapse");
  let menu=document.getElementById("menu")//icone sandwich

  if (collapse) { //
    collapse.addEventListener("click", ()=>{
      console.log("collapse");
      if(menu.style.display === "block"){
        menu.style.display = "none"
      }else{
        menu.style.display = "block"
      }
    })

    if (menu){
        menu.addEventListener("mouseleave", ()=>{ //si on quitte le menu
          menu.style.display="none"
        })
    }
    
  }
}