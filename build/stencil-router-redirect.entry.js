import{r as t,g as r}from"./index-cbe9aba6.js";import{A as s}from"./active-router-974b1b33.js";let i=class{constructor(r){t(this,r)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace((r=this.root,"/"==(t=this.url).charAt(0)&&"/"==r.charAt(r.length-1)?r.slice(0,r.length-1)+t:r+t));var t,r}get el(){return r(this)}};s.injectProps(i,["history","root"]);export{i as stencil_router_redirect}