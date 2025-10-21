import"./footerValidate-FGrSHV9H.js";const o="https://ceramic-api.onrender.com";function n(t){return`
    <article class="catalog__item">
      <img src="${new URL(t.image,o)}" alt="${t.title}" loading="lazy">
      <div class="catalog__item-info">
        <h3 class="catalog__item-title">${t.title}</h3>
        <p class="catalog__item-price">${t.price} €</p>
      </div>
    </article>`}async function r(){const t=await fetch(`${o}/api/products`);if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()}async function i(t="tea"){const e=document.querySelector(".catalog__container");if(!e)return console.warn("No .catalog__container found");e.innerHTML='<div class="loading">Loading…</div>';try{const a=await r();let c=[];t==="tea"&&(c=a.slice(0,5)),t==="kitchen"&&(c=a.slice(0,3)),t==="plants"&&(c=a.slice(0,2)),e.innerHTML=c.map(n).join("")}catch(a){console.error(a),e.innerHTML='<div class="error">Failed to load</div>'}}function s(){const t=document.querySelectorAll(".catalog__types");t.length&&t.forEach(e=>e.addEventListener("click",async()=>{t.forEach(c=>c.classList.remove("active")),e.classList.add("active");const a=e.dataset.category||e.textContent.toLowerCase().split(" ")[1];await i(a)}))}document.addEventListener("DOMContentLoaded",()=>{s(),i("tea")});
