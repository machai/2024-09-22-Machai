
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var n={root:null,threshold:.01},a=new IntersectionObserver((function(e,n){var a=e.map((function(e){return e.isIntersecting})),i=a.includes(!0);t(i)}),n);a.observe(e)};
        ; znReady((function(){document.getElementById("znid-782497089887"),document.querySelector(".zn-container.editing"),document.getElementById("znid-000886292215"),document.querySelector(".zn-container.editing"),document.getElementById("znid-963802107156"),document.querySelector(".zn-container.editing"),document.getElementById("znid-856175203314"),document.querySelector(".zn-container.editing"),function(){var t=document.getElementById("znid-398559668155"),e="https://online.sukiya.biz/collections/jillstuart-floranotis/products/flora-notis-jill-stuart-chocolate-cosmos-eau-de-parfum-and-hand-cream";function n(t,e){try{var n=new URL(t),o=new URL(e);if(n.hostname!=o.hostname)return!1}catch(t){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(e,o)&&!n(e,i))t.querySelector("a").setAttribute("target","_blank")}}(),function(){var t=document.getElementById("znid-143206056247"),e="https://online.sukiya.biz/collections/jillstuart-floranotis/products/flora-notis-jill-stuart-chocolate-cosmos-hand-cream";function n(t,e){try{var n=new URL(t),o=new URL(e);if(n.hostname!=o.hostname)return!1}catch(t){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(e,o)&&!n(e,i))t.querySelector("a").setAttribute("target","_blank")}}(),function(){var t=document.getElementById("znid-755912245963"),e="https://online.sukiya.biz/collections/jillstuart-floranotis/products/flora-notis-jill-stuart-chocolate-cosmos-repair-hair-oil";function n(t,e){try{var n=new URL(t),o=new URL(e);if(n.hostname!=o.hostname)return!1}catch(t){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(e,o)&&!n(e,i))t.querySelector("a").setAttribute("target","_blank")}}(),function(){var t=document.getElementById("znid-415701232210"),e="https://online.sukiya.biz/collections/jillstuart-floranotis/products/flora-notis-jill-stuart-flower-treats-eau-de-parfum-selection";function n(t,e){try{var n=new URL(t),o=new URL(e);if(n.hostname!=o.hostname)return!1}catch(t){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(e,o)&&!n(e,i))t.querySelector("a").setAttribute("target","_blank")}}(),function(){var t=document.getElementById("znid-742608005109"),e="https://online.sukiya.biz/collections/jillstuart-floranotis";function n(t,e){try{var n=new URL(t),o=new URL(e);if(n.hostname!=o.hostname)return!1}catch(t){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(e,o)&&!n(e,i))t.querySelector("a").setAttribute("target","_blank")}}(),function(){var t=document.getElementById("znid-622915259195");function e(t,e,n){var o=t+encodeURIComponent(e);this.setAttribute("href",o),this.addEventListener("click",(function(t){t.preventDefault(),function(t,e){var n=(screen.width-640)/2,o="menubar=no,toolbar=no,status=no,width=640,height=640,top="+(screen.height-640)/2+",left="+n;"_blank"==e?window.open(t):"_self"==e?window.location=t:window.open(t,e,o)}(o,n)}))}null!=document.querySelector(".zn-container.editing")||t.querySelectorAll(".zn-social-share-item").forEach((function(t){var n,o="Check out my awesome shop!",i=document.URL,r=!0;switch(t.getAttribute("ref-name")){case"facebook":n="https://www.facebook.com/sharer.php?quote="+o+"&u=";break;case"twitter":n="https://twitter.com/intent/tweet?text="+o+"&url=";break;case"pinterest":n="http://pinterest.com/pin/create/button/?description="+o+"&url=";break;case"linkedin":n="https://www.linkedin.com/shareArticle?mini=true&url=";break;case"email":var c="mailto:?body="+o+" "+i;t.setAttribute("href",c),r=!1}r&&t&&e.call(t,n,i,"Share")}))}(),document.body.style.removeProperty("background-color"),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var t=document.body;e();function e(){var e=t.querySelector(".zn-announcement-bar");e&&e.parentNode.removeChild(e)}}()}));