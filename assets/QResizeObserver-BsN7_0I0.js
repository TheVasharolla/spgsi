import{r as g,I as y,a as c,i as z,b as f,v as w,n as v,h as O,g as x,p as b}from"./index-CTlL0kFM.js";function E(){const r=g(!y.value);return r.value===!1&&c(()=>{r.value=!0}),{isHydrated:r}}const m=typeof ResizeObserver<"u",h=m===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},L=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(r,{emit:p}){let i=null,t,s={width:-1,height:-1};function u(e){e===!0||r.debounce===0||r.debounce==="0"?l():i===null&&(i=setTimeout(l,r.debounce))}function l(){if(i!==null&&(clearTimeout(i),i=null),t){const{offsetWidth:e,offsetHeight:n}=t;(e!==s.width||n!==s.height)&&(s={width:e,height:n},p("resize",s))}}const{proxy:a}=x();if(a.trigger=u,m===!0){let e;const n=d=>{t=a.$el.parentNode,t?(e=new ResizeObserver(u),e.observe(t),l()):d!==!0&&v(()=>{n(!0)})};return c(()=>{n()}),f(()=>{i!==null&&clearTimeout(i),e!==void 0&&(e.disconnect!==void 0?e.disconnect():t&&e.unobserve(t))}),w}else{let e=function(){i!==null&&(clearTimeout(i),i=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",u,b.passive),o=void 0)},n=function(){e(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",u,b.passive),l())};const{isHydrated:d}=E();let o;return c(()=>{v(()=>{t=a.$el,t&&n()})}),f(e),()=>{if(d.value===!0)return O("object",{class:"q--avoid-card-border",style:h.style,tabindex:-1,type:"text/html",data:h.url,"aria-hidden":"true",onLoad:n})}}}});export{L as Q};
