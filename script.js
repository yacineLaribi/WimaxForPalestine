/*embed chatbot*/
(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '654494110033f800073a004c' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');

/*menu script*/
const menuButton=document.querySelector('.menu-btn');
const menuItems=document.querySelector('.menu-items');
console.log(menuButton);
menuButton.onclick=()=>{
  if(menuItems.classList.contains('hidden')){
    
    menuItems.classList.remove('hidden');
    menuButton.innerHTML='X';
    const body =document.body;
    for (var c = 1; c < body.children.length-1; c++) {

            body.children[c].onclick=()=>{
            menuItems.classList.add("hidden");
            menuButton.innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>';

            }
        }
    } 
    else{
        menuItems.classList.add('hidden');
        menuButton.innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>';
        }
}

/*download file function*/
function downloadFile(filename) {
  const anchor = document.createElement('a');
  anchor.href = filename;
  anchor.download = filename.split('/').pop();
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
/**/ 
const form = document.querySelector("form");
let i;
i=0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("sub").value='submitting...'
  if(i==0){
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbzzVorhMK5POCnZdXgFYzvPb5hbZgZ0xHxOO5yhaXVKe0dFNb6Cari_TnwAzYqnISTexg/exec',
    {
      method: "POST",
      body: data,
    }
  )
    .then(res => res.text())
    .then(data => {
        i=i+1;
        console.log(data);
        document.getElementById("sub").value='Done';
        console.log(i);
      });
    }
      else{
        document.getElementById("sub").value='Done';

      }
});




