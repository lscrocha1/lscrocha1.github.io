import{r as e,h as t}from"./index-cbe9aba6.js";import{a as o,t as i}from"./translation-service-d2b3c7b2.js";let n=class{constructor(t){e(this,t)}getBody(){return o("aboutMeBody").replace("{age}",((new Date).getFullYear()-2016).toString())}render(){return t("div",{class:"container about-me",id:"aboutMe"},t("h1",{class:"text-center"},o("aboutMeTitle")),t("h3",{class:"about-me-body"},this.getBody()),t("div",{class:"button-float-right button-follow"},t("a",{target:"_blank",href:"https://twitch.tv/lecas",rel:"nofollow noreferrer noopener external",class:"primary-button"},o("followMeTwitch"))))}};n.style=".about-me-body{font-family:var(--bodyFont);white-space:pre-line;font-weight:500;text-align:justify}.about-me{margin-bottom:92px !important}.button-follow{margin-top:48px !important}";let r=class{constructor(t){e(this,t),this.formSubmited=!1}async formSubmitEventHandler(){return this.formSubmited=!0,!0}renderForm(){return[t("form",{class:`form-full ${this.formSubmited&&"form-hidden"}`,name:"gform",id:"gform",target:"hidden_iframe",enctype:"application/x-www-form-urlencoded",action:"https://docs.google.com/forms/d/e/1FAIpQLSdoaqYbc5OWaoazuZyEzHEwZXN4oWJXd-n7emmFAhBB5_1CIw/formResponse?"},t("div",{class:"form-group"},t("label",{htmlFor:"entry.1563949243"},o("contactName")),t("div",null,t("input",{class:"input",required:!0,id:"entry.1563949243",name:"entry.1563949243"}))),t("div",{class:"form-group"},t("label",{htmlFor:"entry.1707085558"},o("contactEmail")),t("div",null,t("input",{class:"input",required:!0,id:"entry.1707085558",type:"email",name:"entry.1707085558"}))),t("div",{class:"form-group"},t("label",{htmlFor:"entry.148212086"},o("contactMessage")),t("div",null,t("textarea",{required:!0,class:"input textarea",id:"entry.148212086",name:"entry.148212086"}))),t("div",{class:"form-group"},t("input",{required:!0,type:"checkbox",id:"check"}),t("label",{htmlFor:"check"},o("contactAccept"))),t("div",{class:"button-float-right"},t("button",{type:"submit",class:"primary-button"},o("contactSend")))),t("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}})]}renderFormSubmited(){return t("div",{class:`text-center form-submited ${this.formSubmited&&"form-submited-show"}`},t("h4",null,o("contactSubmited")))}render(){return t("div",{class:"container contact-component",id:"contact"},t("h1",{class:"text-center"},o("contactGetInTouch")),this.renderForm(),this.renderFormSubmited())}};r.style=".input{margin-top:8px;height:30px;width:100%}.textarea{resize:none;min-height:200px}.form-full{width:100%}.form-group{margin-bottom:16px}.contact-component{margin-top:32px !important}.form-submited-show{display:block !important}.form-submited{display:none}.form-hidden{display:none}";let a=class{constructor(t){e(this,t),this.jobs=[],this.currentLanguage=i.getCurrentLanguage()}componentWillLoad(){this.loadJobs()}async loadJobs(){this.jobs=await fetch(`/assets/translation/${this.currentLanguage}.json`).then((e=>e.json())).then((e=>e.jobs))}getDownloadLink(){return`/assets/cv/cv-${this.currentLanguage}.pdf`}renderJob(e){return t("div",{class:"job"},t("div",null,t("h3",null,e.title)),t("div",null,t("a",{class:"job-link",rel:"nofollow noreferrer noopener external",href:e.companyLink},t("h4",null,e.company))),t("div",null,t("h5",null,t("span",{class:"iconify iconify-calendar","data-icon":"mdi:calendar-text"}),e.period)),t("div",null,t("h3",{class:"job-description"},e.description)))}render(){return t("div",{class:"container",id:"experiences"},t("h1",{class:"text-center"},o("experiencesTitle")),this.jobs&&this.jobs.map((e=>this.renderJob(e))),t("div",{class:"text-center"},t("a",{href:this.getDownloadLink(),download:"Lucas Rocha - lscrocha.com.br- CV.pdf",class:"primary-button text-center"},o("downloadCv"))))}};a.style=".job-description{font-family:var(--bodyFont);font-weight:500;text-align:justify}.job{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:24px}.job:last-child{margin-bottom:0}.job h6,h5,h4,h3{margin:8px}.iconify-calendar{margin-bottom:-2px;margin-right:8px}.job-link{color:var(--primaryColor)}.job-link:visited{color:var(--primaryColor)}";let l=class{constructor(t){e(this,t),this.currentYear=(new Date).getFullYear()}render(){return t("div",{class:"footer-block"},t("div",null),t("div",{class:"copyright-bar"},"Copyright © ",this.currentYear," - Lucas Rocha."))}};l.style=".copyright-bar{background-color:var(--primaryColor);color:white;padding:32px;text-align:center}.footer-block{margin-top:128px}";let c=class{constructor(t){e(this,t),this.currentLanguage=i.getCurrentLanguage()}getLanguageName(){return"en"==this.currentLanguage?"PT":"EN"}changeLanguage(){i.setLanguage("en"==this.currentLanguage?"pt-BR":"en"),location.reload()}render(){return t("div",{class:"profile-component"},t("h1",{class:"hello"},o("helloIamLucas")),t("h3",{class:"passionate-developer"},o("passionateDeveloper")),t("div",null,t("img",{class:"image-profile",width:200,height:200,src:"/assets/images/foto-perfil.png",alt:"selfie"})),t("div",{class:"profile-links"},t("a",{href:"#aboutMe"},o("aboutMeLink")),t("a",{href:"#experiences"},o("experiencesLink")),t("a",{href:"#contact"},o("contactLink"))),t("div",{class:"bottom-links"},t("a",{"aria-label":"email",href:"mailto:contato@lscrocha.com.br",rel:"nofollow noreferrer noopener external"},t("span",{class:"iconify icon-white","data-icon":"mdi:email"})),t("a",{"aria-label":"instagram",target:"_blank",href:"https://www.instagram.com/lscrocha1/",rel:"nofollow noreferrer noopener external"},t("span",{class:"iconify icon-white","data-icon":"mdi:instagram"})),t("a",{"aria-label":"lucascrocha",target:"_blank",href:"https://www.linkedin.com/in/lucascrocha/",rel:"nofollow noreferrer noopener external"},t("span",{class:"iconify icon-white","data-icon":"mdi:linkedin"})),t("a",{"aria-label":"lecas",target:"_blank",href:"https://twitch.tv/lecas",rel:"nofollow noreferrer noopener external"},t("span",{class:"iconify icon-white","data-icon":"mdi:twitch"})),t("a",{"aria-label":"youtube",target:"_blank",href:"https://www.youtube.com/channel/UCmBKSMYDh8T6aKJi88taw7w",rel:"nofollow noreferrer noopener external"},t("span",{class:"iconify icon-white","data-icon":"mdi:youtube"}))),t("div",{class:"language-changer",onClick:()=>this.changeLanguage()},t("span",{class:"iconify iconify-globe","data-icon":"bi:globe"}),this.getLanguageName()))}};c.style=".image-profile{width:200px;border-radius:50%;height:200px;-o-object-fit:cover;object-fit:cover}.profile-links{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.hello{padding-top:64px;color:white;text-align:center;padding-left:16px;padding-right:16px}.profile-links a{text-decoration:none;color:white;margin-bottom:16px;font-weight:500;font-size:20px}.profile-links a:hover{text-decoration:underline;-webkit-text-decoration-color:var(--secondaryColor);text-decoration-color:var(--secondaryColor)}.profile-links{text-align:center}.passionate-developer{font-weight:100;color:white;text-align:center;padding-left:24px;padding-right:24px}.profile-component{background-color:var(--primaryColor);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;max-width:320px;min-width:320px;height:100%;position:fixed;min-height:100vh}.icon-white{color:white}.bottom-links a{font-size:30px;margin-left:16px}.bottom-links a:first-child{margin-left:0}.bottom-links a:hover{zoom:1.1}.language-changer{color:white;padding:8px;border:1px solid #e8e8e8;margin-bottom:64px;cursor:pointer}.language-changer:hover{border-color:var(--secondaryColor);color:var(--secondaryColor)}.iconify-globe{margin-right:8px;margin-bottom:-3px}@media (max-width: 768px){.profile-component{background-color:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-width:100vw;position:unset}.hello{color:black;padding-top:32px}.language-changer{color:black;border-color:black}.icon-white{color:black}.passionate-developer{color:black;margin-bottom:32px}.profile-links a{color:black}.profile-links{margin-top:32px;margin-bottom:32px}.bottom-links{margin-bottom:32px}}";export{n as app_about_me,r as app_contact,a as app_experiences,l as app_footer,c as app_profile}