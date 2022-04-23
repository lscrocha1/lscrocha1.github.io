var __awaiter=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o["throw"](e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,l)}c((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(e){return function(t){return c([e,t])}}function c(a){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];r=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-b67281d0.system.js","./translation-service-040794dd.system.js"],(function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.r;n=e.h},function(e){o=e.a;r=e.t}],execute:function(){var i=".about-me-body{font-family:var(--bodyFont);white-space:pre-line;font-weight:500;text-align:justify}.about-me{margin-bottom:92px !important}.button-follow{margin-top:48px !important}";var a=e("app_about_me",function(){function e(e){t(this,e)}e.prototype.getBody=function(){var e=o("aboutMeBody");return e.replace("{age}",((new Date).getFullYear()-2016).toString())};e.prototype.render=function(){return n("div",{class:"container about-me",id:"aboutMe"},n("h1",{class:"text-center"},o("aboutMeTitle")),n("h3",{class:"about-me-body"},this.getBody()),n("div",{class:"button-float-right button-follow"},n("a",{target:"_blank",href:"https://twitch.tv/lecas",rel:"nofollow noreferrer noopener external",class:"primary-button"},o("followMeTwitch"))))};return e}());a.style=i;var l=".input{margin-top:8px;height:30px;width:100%}.textarea{resize:none;min-height:200px}.form-full{width:100%}.form-group{margin-bottom:16px}.contact-component{margin-top:32px !important}.form-submited-show{display:block !important}.form-submited{display:none}.form-hidden{display:none}";var c=e("app_contact",function(){function e(e){t(this,e);this.formSubmited=false}e.prototype.formSubmitEventHandler=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.formSubmited=true;return[2,true]}))}))};e.prototype.renderForm=function(){return[n("form",{class:"form-full "+(this.formSubmited&&"form-hidden"),name:"gform",id:"gform",target:"hidden_iframe",enctype:"application/x-www-form-urlencoded",action:"https://docs.google.com/forms/d/e/1FAIpQLSdoaqYbc5OWaoazuZyEzHEwZXN4oWJXd-n7emmFAhBB5_1CIw/formResponse?"},n("div",{class:"form-group"},n("label",{htmlFor:"entry.1563949243"},o("contactName")),n("div",null,n("input",{class:"input",required:true,id:"entry.1563949243",name:"entry.1563949243"}))),n("div",{class:"form-group"},n("label",{htmlFor:"entry.1707085558"},o("contactEmail")),n("div",null,n("input",{class:"input",required:true,id:"entry.1707085558",type:"email",name:"entry.1707085558"}))),n("div",{class:"form-group"},n("label",{htmlFor:"entry.148212086"},o("contactMessage")),n("div",null,n("textarea",{required:true,class:"input textarea",id:"entry.148212086",name:"entry.148212086"}))),n("div",{class:"form-group"},n("input",{required:true,type:"checkbox",id:"check"}),n("label",{htmlFor:"check"},o("contactAccept"))),n("div",{class:"button-float-right"},n("button",{type:"submit",class:"primary-button"},o("contactSend")))),n("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}})]};e.prototype.renderFormSubmited=function(){return n("div",{class:"text-center form-submited "+(this.formSubmited&&"form-submited-show")},n("h4",null,o("contactSubmited")))};e.prototype.render=function(){return n("div",{class:"container contact-component",id:"contact"},n("h1",{class:"text-center"},o("contactGetInTouch")),this.renderForm(),this.renderFormSubmited())};return e}());c.style=l;var s=".job-description{font-family:var(--bodyFont);font-weight:500;text-align:justify}.job{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:24px}.job:last-child{margin-bottom:0}.job h6,h5,h4,h3{margin:8px}.iconify-calendar{margin-bottom:-2px;margin-right:8px}.job-link{color:var(--primaryColor)}.job-link:visited{color:var(--primaryColor)}";var u=e("app_experiences",function(){function e(e){t(this,e);this.jobs=[];this.currentLanguage=r.getCurrentLanguage()}e.prototype.componentWillLoad=function(){this.loadJobs()};e.prototype.loadJobs=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:e=this;return[4,fetch("/assets/translation/"+this.currentLanguage+".json").then((function(e){return e.json()})).then((function(e){return e.jobs}))];case 1:e.jobs=t.sent();return[2]}}))}))};e.prototype.getDownloadLink=function(){return"/assets/cv/cv-"+this.currentLanguage+".pdf"};e.prototype.renderJob=function(e){return n("div",{class:"job"},n("div",null,n("h3",null,e.title)),n("div",null,n("a",{class:"job-link",rel:"nofollow noreferrer noopener external",href:e.companyLink},n("h4",null,e.company))),n("div",null,n("h5",null,n("span",{class:"iconify iconify-calendar","data-icon":"mdi:calendar-text"}),e.period)),n("div",null,n("h3",{class:"job-description"},e.description)))};e.prototype.render=function(){var e=this;return n("div",{class:"container",id:"experiences"},n("h1",{class:"text-center"},o("experiencesTitle")),this.jobs&&this.jobs.map((function(t){return e.renderJob(t)})),n("div",{class:"text-center"},n("a",{href:this.getDownloadLink(),download:"Lucas Rocha - lscrocha.com.br- CV.pdf",class:"primary-button text-center"},o("downloadCv"))))};return e}());u.style=s;var p=".copyright-bar{background-color:var(--primaryColor);color:white;padding:32px;text-align:center}.footer-block{margin-top:128px}";var d=e("app_footer",function(){function e(e){t(this,e);this.currentYear=(new Date).getFullYear()}e.prototype.render=function(){return n("div",{class:"footer-block"},n("div",null),n("div",{class:"copyright-bar"},"Copyright © ",this.currentYear," - Lucas Rocha."))};return e}());d.style=p;var f=".image-profile{width:200px;border-radius:50%;height:200px;-o-object-fit:cover;object-fit:cover}.profile-links{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.hello{padding-top:64px;color:white;text-align:center;padding-left:16px;padding-right:16px}.profile-links a{text-decoration:none;color:white;margin-bottom:16px;font-weight:500;font-size:20px}.profile-links a:hover{text-decoration:underline;-webkit-text-decoration-color:var(--secondaryColor);text-decoration-color:var(--secondaryColor)}.profile-links{text-align:center}.passionate-developer{font-weight:100;color:white;text-align:center;padding-left:24px;padding-right:24px}.profile-component{background-color:var(--primaryColor);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;max-width:320px;min-width:320px;height:100%;position:fixed;min-height:100vh}.icon-white{color:white}.bottom-links a{font-size:30px;margin-left:16px}.bottom-links a:first-child{margin-left:0}.bottom-links a:hover{zoom:1.1}.language-changer{color:white;padding:8px;border:1px solid #e8e8e8;margin-bottom:64px;cursor:pointer}.language-changer:hover{border-color:var(--secondaryColor);color:var(--secondaryColor)}.iconify-globe{margin-right:8px;margin-bottom:-3px}@media (max-width: 768px){.profile-component{background-color:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-width:100vw;position:unset}.hello{color:black;padding-top:32px}.language-changer{color:black;border-color:black}.icon-white{color:black}.passionate-developer{color:black;margin-bottom:32px}.profile-links a{color:black}.profile-links{margin-top:32px;margin-bottom:32px}.bottom-links{margin-bottom:32px}}";var m=e("app_profile",function(){function e(e){t(this,e);this.currentLanguage=r.getCurrentLanguage()}e.prototype.getLanguageName=function(){return this.currentLanguage=="en"?"PT":"EN"};e.prototype.changeLanguage=function(){r.setLanguage(this.currentLanguage=="en"?"pt-BR":"en");location.reload()};e.prototype.render=function(){var e=this;return n("div",{class:"profile-component"},n("h1",{class:"hello"},o("helloIamLucas")),n("h3",{class:"passionate-developer"},o("passionateDeveloper")),n("div",null,n("img",{class:"image-profile",width:200,height:200,src:"/assets/images/foto-perfil.png",alt:"selfie"})),n("div",{class:"profile-links"},n("a",{href:"#aboutMe"},o("aboutMeLink")),n("a",{href:"#experiences"},o("experiencesLink")),n("a",{href:"#contact"},o("contactLink"))),n("div",{class:"bottom-links"},n("a",{"aria-label":"email",href:"mailto:contato@lscrocha.com.br",rel:"nofollow noreferrer noopener external"},n("span",{class:"iconify icon-white","data-icon":"mdi:email"})),n("a",{"aria-label":"instagram",target:"_blank",href:"https://www.instagram.com/lscrocha1/",rel:"nofollow noreferrer noopener external"},n("span",{class:"iconify icon-white","data-icon":"mdi:instagram"})),n("a",{"aria-label":"lucascrocha",target:"_blank",href:"https://www.linkedin.com/in/lucascrocha/",rel:"nofollow noreferrer noopener external"},n("span",{class:"iconify icon-white","data-icon":"mdi:linkedin"})),n("a",{"aria-label":"lecas",target:"_blank",href:"https://twitch.tv/lecas",rel:"nofollow noreferrer noopener external"},n("span",{class:"iconify icon-white","data-icon":"mdi:twitch"})),n("a",{"aria-label":"youtube",target:"_blank",href:"https://www.youtube.com/channel/UCmBKSMYDh8T6aKJi88taw7w",rel:"nofollow noreferrer noopener external"},n("span",{class:"iconify icon-white","data-icon":"mdi:youtube"}))),n("div",{class:"language-changer",onClick:function(){return e.changeLanguage()}},n("span",{class:"iconify iconify-globe","data-icon":"bi:globe"}),this.getLanguageName()))};return e}());m.style=f}}}));