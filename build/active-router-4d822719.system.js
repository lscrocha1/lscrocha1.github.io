var __spreadArray=this&&this.__spreadArray||function(r,e){for(var t=0,n=e.length,a=r.length;t<n;t++,a++)r[a]=e[t];return r};System.register(["./index-b67281d0.system.js"],(function(r){"use strict";var e;return{setters:[function(r){e=r.h}],execute:function(){var t=function(r,e){var t=new Map;var n=r;var a=function(r,e){if(Array.isArray(r)){__spreadArray([],r).forEach((function(r){e[r]=n[r]}))}else{e[r]=Object.assign({},n)}};var i=function(r,e){if(!t.has(r)){t.set(r,e);a(e,r)}return function(){if(t.has(r)){t.delete(r)}}};var c=function(r,e){var i=r.state;n=i;t.forEach(a);return e};var o=function(r,t){return e(i,t[0])};var s=function(r,e){var n=r.prototype;var a=n.connectedCallback;var c=n.disconnectedCallback;n.connectedCallback=function(){i(this,e);if(a){return a.call(this)}};n.disconnectedCallback=function(){t.delete(this);if(c){c.call(this)}}};return{Provider:c,Consumer:o,injectProps:s}};var n=r("A",t({historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}},(function(r,t){return e("context-consumer",{subscribe:r,renderer:t})})))}}}));