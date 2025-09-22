const products=[
  {id:1,title:'Acc Game A',desc:'Rank cao, skin đẹp',price:120},
  {id:2,title:'Acc Game B',desc:'Acc VIP, email kèm theo',price:250},
  {id:3,title:'Acc Mobile C',desc:'Level 80, nhiều đồ',price:90},
];
let cart=JSON.parse(localStorage.getItem('cart')||'[]');

function renderProducts(){
  const list=document.getElementById('product-list');
  list.innerHTML='';
  products.forEach(p=>{
    const c=document.createElement('div');
    c.className='card';
    c.innerHTML=`<h3>${p.title} — $${p.price}</h3><p>${p.desc}</p>
    <a href="#" class="btn" data-id="${p.id}">Thêm vào giỏ</a>`;
    list.appendChild(c);
  });
  document.querySelectorAll('.btn[data-id]').forEach(b=>b.onclick=e=>{
    e.preventDefault();
    cart.push(parseInt(b.dataset.id));
    localStorage.setItem('cart',JSON.stringify(cart));
    renderCart();
  });
}

function renderCart(){
  const list=document.getElementById('cart-list');
  list.innerHTML='';
  if(!cart.length){list.innerHTML='<p>Giỏ hàng trống</p>';return;}
  cart.forEach(id=>{
    const p=products.find(x=>x.id===id);
    if(p) list.innerHTML+=`<div>${p.title} — $${p.price}</div>`;
  });
}

document.getElementById('checkout').onclick=()=>{
  if(!cart.length){alert('Giỏ hàng trống');return;}
  showModal('<h3>Thanh toán demo</h3><p>Giả lập thanh toán qua Momo/PayPal. Sau khi xác nhận, admin sẽ liên hệ.</p>');
  cart=[];localStorage.setItem('cart','[]');renderCart();
};

function showModal(html){document.getElementById('modal-body').innerHTML=html;document.getElementById('modal').classList.remove('hidden');}
document.getElementById('close').onclick=()=>document.getElementById('modal').classList.add('hidden');

document.getElementById('btn-login').onclick=e=>{e.preventDefault();showModal(`<h3>Đăng nhập demo</h3><input placeholder="Email"/><input type="password" placeholder="Mật khẩu"/><button class="btn">OK</button>`);};
document.getElementById('btn-register').onclick=e=>{e.preventDefault();showModal(`<h3>Đăng ký demo</h3><input placeholder="Email"/><input type="password" placeholder="Mật khẩu"/><button class="btn">OK</button>`);};

renderProducts();renderCart();
