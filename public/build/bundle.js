var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function g(t,e,n){t.classList[n?"add":"remove"](e)}let v;function $(t){v=t}const b=[],y=[],x=[],_=[],w=Promise.resolve();let O=!1;function k(t){x.push(t)}let A=!1;const T=new Set;function C(){if(!A){A=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),E(e.$$)}for($(null),b.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];T.has(e)||(T.add(e),e())}x.length=0}while(b.length);for(;_.length;)_.pop()();O=!1,A=!1,T.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const I=new Set;function j(t,e){-1===t.$$.dirty[0]&&(b.push(t),O||(O=!0,w.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(u,c,i,l,a,f,d,p=[-1]){const h=v;$(u);const m=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:c.context||[]),callbacks:n(),dirty:p,skip_bound:!1,root:c.target||h.$$.root};d&&d(m.root);let g=!1;if(m.ctx=i?i(u,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&j(u,t)),e})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(r)}else m.fragment&&m.fragment.c();c.intro&&((b=u.$$.fragment)&&b.i&&(I.delete(b),b.i(y))),function(t,n,u,c){const{fragment:i,on_mount:r,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,u),c||k((()=>{const n=r.map(e).filter(s);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(k)}(u,c.target,c.anchor,c.customElement),C()}var b,y;$(h)}function q(t){let e,n,o,s,u,d,m,g,v,$=t[4].address+"",b=t[4].balance+"";return{c(){e=l("div"),e.textContent="Faucet info:",n=f(),o=l("div"),s=a("Address: "),u=a($),d=f(),m=l("div"),g=a("Balance: "),v=a(b),p(e,"class","faucetInfo svelte-i8suhf"),p(o,"class","faucetInfo svelte-i8suhf"),p(m,"class","faucetInfo svelte-i8suhf")},m(t,r){i(t,e,r),i(t,n,r),i(t,o,r),c(o,s),c(o,u),i(t,d,r),i(t,m,r),c(m,g),c(m,v)},p(t,e){16&e&&$!==($=t[4].address+"")&&h(u,$),16&e&&b!==(b=t[4].balance+"")&&h(v,b)},d(t){t&&r(e),t&&r(n),t&&r(o),t&&r(d),t&&r(m)}}}function N(t){let e;function n(t,e){return t[0]?L:t[1]?J:B}let o=n(t),s=o(t);return{c(){e=l("div"),s.c(),p(e,"class","warning svelte-i8suhf")},m(t,n){i(t,e,n),s.m(e,null)},p(t,u){o!==(o=n(t))&&(s.d(1),s=o(t),s&&(s.c(),s.m(e,null)))},d(t){t&&r(e),s.d()}}}function P(t){let e;function n(t,e){return t[5]?M:F}let o=n(t),s=o(t);return{c(){e=l("div"),s.c(),p(e,"class","warning svelte-i8suhf")},m(t,n){i(t,e,n),s.m(e,null)},p(t,u){o===(o=n(t))&&s?s.p(t,u):(s.d(1),s=o(t),s&&(s.c(),s.m(e,null)))},d(t){t&&r(e),s.d()}}}function B(t){let e;return{c(){e=a("Please enter a valid IOTA address (atoi1...)")},m(t,n){i(t,e,n)},d(t){t&&r(e)}}}function J(t){let e;return{c(){e=a("Click the request button to receive your coins")},m(t,n){i(t,e,n)},d(t){t&&r(e)}}}function L(t){let e;return{c(){e=a("Please wait...")},m(t,n){i(t,e,n)},d(t){t&&r(e)}}}function F(t){let e,n,o,s="Eror:"+JSON.stringify(t[6]),u=setTimeout(t[9],5e3)+"";return{c(){e=a(s),n=f(),o=a(u)},m(t,s){i(t,e,s),i(t,n,s),i(t,o,s)},p(t,n){64&n&&s!==(s="Eror:"+JSON.stringify(t[6]))&&h(e,s),4&n&&u!==(u=setTimeout(t[9],5e3)+"")&&h(o,u)},d(t){t&&r(e),t&&r(n),t&&r(o)}}}function M(e){let n;return{c(){n=l("div"),n.textContent="IOTA will be sent"},m(t,e){i(t,n,e)},p:t,d(t){t&&r(n)}}}function R(e){let n,s,u,a,h,v,$,b,y,x,_,w,O,k,A,T,C,E,I=void 0!==e[4]&&q(e);function j(t,e){return t[2]?P:N}let S=j(e),B=S(e);return{c(){n=l("main"),s=l("p"),s.textContent="Welcome to",u=f(),a=l("h1"),a.textContent="IOTA Faucet",h=f(),v=l("p"),v.textContent="This service distributes tokens to the requested IOTA address.",$=f(),I&&I.c(),b=f(),B.c(),y=f(),x=l("div"),_=l("label"),_.textContent="IOTA Address",w=f(),O=l("input"),k=f(),A=l("div"),T=l("button"),T.textContent="Request",p(s,"class","welcome svelte-i8suhf"),p(a,"class","svelte-i8suhf"),p(v,"class","help svelte-i8suhf"),p(_,"for","address"),p(_,"class","svelte-i8suhf"),p(O,"type","text"),O.disabled=e[0],p(O,"class","svelte-i8suhf"),p(x,"class","iota-input svelte-i8suhf"),p(T,"type","button"),p(T,"class","svelte-i8suhf"),g(T,"disabled",e[0]||!e[1]),p(A,"class","right svelte-i8suhf"),p(n,"class","svelte-i8suhf")},m(t,o){i(t,n,o),c(n,s),c(n,u),c(n,a),c(n,h),c(n,v),c(n,$),I&&I.m(n,null),c(n,b),B.m(n,null),c(n,y),c(n,x),c(x,_),c(x,w),c(x,O),m(O,e[3]),c(n,k),c(n,A),c(A,T),C||(E=[d(O,"input",e[10]),d(O,"keyup",e[7]),d(T,"click",e[8])],C=!0)},p(t,[e]){void 0!==t[4]?I?I.p(t,e):(I=q(t),I.c(),I.m(n,b)):I&&(I.d(1),I=null),S===(S=j(t))&&B?B.p(t,e):(B.d(1),B=S(t),B&&(B.c(),B.m(n,y))),1&e&&(O.disabled=t[0]),8&e&&O.value!==t[3]&&m(O,t[3]),3&e&&g(T,"disabled",t[0]||!t[1])},i:t,o:t,d(t){t&&r(n),I&&I.d(),B.d(),C=!1,o(E)}}}function W(t,e,n){let o,s=!1,u=!1,c=!1,i="",r=!1,l=null;setInterval((function(){!async function(){let t=null;try{t=await fetch("/api/plugins/faucet/info");let e=await t.json();n(4,o=e.data)}catch(t){t.name}}()}),1e4);return[s,u,c,i,o,r,l,function(t){n(2,c=!1),64==i.length&&0===i.indexOf("atoi1")?n(1,u=!0):n(1,u=!1)},async function(t){if(s)return!1;n(0,s=!0);let e="Sending request...";try{e=await fetch("/api/plugins/faucet/enqueue",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({address:i})}),n(6,l=await e.json())}catch(t){t.name}n(5,r=e&&202===e.status),n(2,c=!0),n(0,s=!1),n(3,i="")},()=>{n(2,c=!1)},function(){i=this.value,n(3,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,W,R,u,{})}}({target:document.getElementById("app")})}();
//# sourceMappingURL=bundle.js.map
