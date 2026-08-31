function copyCA(){
  var full = "GBmDUvGVq7JcpgJS7KGrWCasjC9JWp2PnKHVxw8Vpump";
  var label = document.getElementById("copyLabel");
  var icon = document.getElementById("copyIcon");

  function done(ok){
    label.textContent = ok ? "Copied!" : "Failed";
    icon.textContent = ok ? "✓" : "!";
    setTimeout(function(){
      label.textContent = "Copy";
      icon.textContent = "⧉";
    }, 1800);
  }

  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){ done(true); }).catch(function(){ done(false); });
  } else {
    var tmp = document.createElement("textarea");
    tmp.value = full;
    document.body.appendChild(tmp);
    tmp.select();
    try{
      document.execCommand("copy");
      done(true);
    }catch(e){
      done(false);
    }
    document.body.removeChild(tmp);
  }
}

function toggleMenu(){
  var menu = document.getElementById("mobileMenu");
  var nav = document.querySelector(".nav");
  if(nav){
    menu.style.top = nav.offsetHeight + "px";
    menu.style.maxHeight = "calc(100vh - " + nav.offsetHeight + "px)";
  }
  menu.classList.toggle("open");
}
