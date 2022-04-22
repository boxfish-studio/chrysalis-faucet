var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){t.value=null==e?"":e}function h(t,e,n){t.classList[n?"add":"remove"](e)}let g;function $(t){g=t}const v=[],y=[],b=[],w=[],x=Promise.resolve();let _=!1;function k(t){b.push(t)}let O=!1;const T=new Set;function A(){if(!O){O=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];$(e),C(e.$$)}for($(null),v.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];T.has(e)||(T.add(e),e())}b.length=0}while(v.length);for(;w.length;)w.pop()();_=!1,O=!1,T.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const E=new Set;function q(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(c,s,u,i,a,d,f,m=[-1]){const p=g;$(c);const h=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:s.context||[]),callbacks:n(),dirty:m,skip_bound:!1,root:s.target||p.$$.root};f&&f(h.root);let v=!1;if(h.ctx=u?u(c,s.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),v&&q(c,t)),e})):[],h.update(),v=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();s.intro&&((y=c.$$.fragment)&&y.i&&(E.delete(y),y.i(b))),function(t,n,c,s){const{fragment:u,on_mount:l,on_destroy:i,after_update:a}=t.$$;u&&u.m(n,c),s||k((()=>{const n=l.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(k)}(c,s.target,s.anchor,s.customElement),A()}var y,b;$(p)}function I(t){let e;function n(t,e){return t[0]?L:t[1]?P:N}let r=n(t),o=r(t);return{c(){e=i("div"),o.c(),m(e,"class","warning svelte-1cmr8w3")},m(t,n){u(t,e,n),o.m(e,null)},p(t,c){r!==(r=n(t))&&(o.d(1),o=r(t),o&&(o.c(),o.m(e,null)))},d(t){t&&l(e),o.d()}}}function S(t){let e;function n(t,e){return t[4]?F:B}let r=n(t),o=r(t);return{c(){e=i("div"),o.c(),m(e,"class","warning svelte-1cmr8w3")},m(t,n){u(t,e,n),o.m(e,null)},p(t,c){r===(r=n(t))&&o?o.p(t,c):(o.d(1),o=r(t),o&&(o.c(),o.m(e,null)))},d(t){t&&l(e),o.d()}}}function N(t){let e;return{c(){e=a("Please enter a valid IOTA address (atoi1...)")},m(t,n){u(t,e,n)},d(t){t&&l(e)}}}function P(t){let e;return{c(){e=a("Click the request button to receive your coins")},m(t,n){u(t,e,n)},d(t){t&&l(e)}}}function L(t){let e;return{c(){e=a("Please wait...")},m(t,n){u(t,e,n)},d(t){t&&l(e)}}}function B(t){let e,n;return{c(){e=i("div"),n=a(t[5])},m(t,r){u(t,e,r),s(e,n)},p(t,e){32&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,t[5])},d(t){t&&l(e)}}}function F(e){let n;return{c(){n=i("div"),n.textContent="IOTA will be sent to your address!"},m(t,e){u(t,n,e)},p:t,d(t){t&&l(n)}}}function J(e){let n,o,c,a,g,$,v,y,b,w,x,_,k,O,T,A,C;function E(t,e){return t[2]?S:I}let q=E(e),j=q(e);return{c(){n=i("main"),o=i("p"),o.textContent="Welcome to",c=d(),a=i("h1"),a.textContent="IOTA Faucet",g=d(),$=i("p"),$.textContent="This service distributes tokens to the requested IOTA address.",v=d(),j.c(),y=d(),b=i("div"),w=i("label"),w.textContent="IOTA Address",x=d(),_=i("input"),k=d(),O=i("div"),T=i("button"),T.textContent="Request",m(o,"class","welcome svelte-1cmr8w3"),m(a,"class","svelte-1cmr8w3"),m($,"class","help svelte-1cmr8w3"),m(w,"for","address"),m(w,"class","svelte-1cmr8w3"),m(_,"type","text"),_.disabled=e[0],m(_,"class","svelte-1cmr8w3"),m(b,"class","iota-input svelte-1cmr8w3"),m(T,"type","button"),m(T,"class","svelte-1cmr8w3"),h(T,"disabled",e[0]||!e[1]),m(O,"class","right svelte-1cmr8w3"),m(n,"class","svelte-1cmr8w3")},m(t,r){u(t,n,r),s(n,o),s(n,c),s(n,a),s(n,g),s(n,$),s(n,v),j.m(n,null),s(n,y),s(n,b),s(b,w),s(b,x),s(b,_),p(_,e[3]),s(n,k),s(n,O),s(O,T),A||(C=[f(_,"input",e[8]),f(_,"keyup",e[6]),f(T,"click",e[7])],A=!0)},p(t,[e]){q===(q=E(t))&&j?j.p(t,e):(j.d(1),j=q(t),j&&(j.c(),j.m(n,y))),1&e&&(_.disabled=t[0]),8&e&&_.value!==t[3]&&p(_,t[3]),3&e&&h(T,"disabled",t[0]||!t[1])},i:t,o:t,d(t){t&&l(n),j.d(),A=!1,r(C)}}}function K(t,e,n){let r=!1,o=!1,c=!1,s="",u=!1,l=null,i=null;return[r,o,c,s,u,i,function(t){n(2,c=!1),64==s.length&&0===s.indexOf("atoi1")?n(1,o=!0):n(1,o=!1)},async function(t){if(r)return!1;n(0,r=!0);let e=null;l=null,n(5,i="Sending request...");try{e=await fetch("/api/enqueue",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({address:s})}),202===e.status?n(5,i="OK"):429===e.status?n(5,i="Too many requests. Try again later!"):(l=await e.json(),n(5,i=l.error.message))}catch(t){t.name,n(5,i=t)}n(4,u=e&&202===e.status),n(2,c=!0),n(0,r=!1),n(3,s="")},function(){s=this.value,n(3,s)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,K,J,c,{})}}({target:document.getElementById("app")})}();
//# sourceMappingURL=bundle.js.map
