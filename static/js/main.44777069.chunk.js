(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),n=a(15),s=a.n(n),l=(a(22),a(7)),i=(a(23),a(9)),r=a(0);function d(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.Title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:e.homedena})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",children:e.Linkdena})})]}),Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.clickSwitch}),Object(r.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:e.changeText})]})]})]})})})}function h(e){var t=Object(c.useState)("Copy text"),a=Object(l.a)(t,2),o=a[0],n=a[1],s=Object(c.useState)("This is defualt text"),i=Object(l.a)(s,2),d=i[0],h=i[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"mb-3 my-3",children:[Object(r.jsx)("label",{htmlFor:"area",className:"form-label",style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(r.jsx)("textarea",{className:"form-control",id:"area",rows:"8",value:d,onChange:function(e){h(e.target.value),console.log(d)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"}})]}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-2"),onClick:function(){0===d.length?alert("Write something in text box to see changes"):(h(d.toUpperCase()),e.functionToggle("converted to uppercase","success"))},children:"Convert to upper case"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-3"),onClick:function(){0===d.length?alert("Write something in text box to see changes"):(h(d.toLowerCase()),e.functionToggle("converted to Lowercase","success"))},children:"Convert to lower case"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-2"),onClick:function(){0===d.length?alert("Write something in text box to see changes"):(h(""),e.functionToggle("Text cleared","success"))},children:"Clear"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-3"),onClick:function(){if(0===d.length)alert("Are you mad text is empty");else{var e=prompt("Enter the word you want to search");if(null===e)alert("No problem for cancelations");else-1!==d.search(e)?alert("Word found"):alert("Not found")}},children:"search any word"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-3"),onClick:function(){if(0===d.length)alert("Write something in text box to see changes");else{n("Text copied");var t=document.getElementById("area");t.select(),console.log(navigator.clipboard.writeText(t.value)),e.functionToggle("Text copied","success")}},children:o}),Object(r.jsxs)("div",{className:"conatiner my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:["Total words are ",d.split(" ").filter((function(e){return 0!=e.length}))]}),Object(r.jsxs)("p",{children:["Total characters are ",d.length]}),Object(r.jsxs)("p",{children:["Time taken to read the document is ",.008*d.split(" ").length," Minutes"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:d.length>0?d:"Enter the text to preview"})]})]})}d.defaultProps={Title:"Set title here",homedena:"write home here",Linkdena:"Link dai n yaar"};var b=function(e){var t;return e.alertShow&&Object(r.jsx)("div",{className:"alert alert-".concat(e.alertShow.typ," alert-dismissible fade show"),role:"alert",children:Object(r.jsxs)("strong",{children:[(t=e.alertShow.typ,t.charAt(0).toUpperCase()+t.slice(1)),":",e.alertShow.msg]})})};function j(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)("Enable dark mode"),s=Object(l.a)(n,2),i=s[0],d=s[1];return Object(r.jsxs)("div",{className:"container my-5",style:a,children:[Object(r.jsxs)("div",{className:"accordion my-3",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item ",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a,children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a,children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a,children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("button",{className:"btn btn-primary my-4",onClick:function(){"black"===a.color?(o({color:"white",backgroundColor:"black"}),d("Enable white mode")):(o({color:"black",backgroundColor:"white"}),d("Enable black mode"))},children:i})})]})}var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)("Enable dark mode"),s=Object(l.a)(n,2),u=s[0],g=s[1],p=Object(c.useState)(null),x=Object(l.a)(p,2),O=x[0],v=x[1],y=function(e,t){v({msg:e,typ:t})};return setTimeout((function(){v(null)}),2e3),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{Title:"Textutlis",homedena:"Home",Linkdena:"About",mode:a,changeText:u,clickSwitch:function(){"dark"===a?(o("light"),g("Enable dark mode"),document.body.style.backgroundColor="white",y("You have disabled dark mode","danger")):(o("dark"),g("Disable dark mode"),document.body.style.backgroundColor="#21236c",y("You have enabled dark mode","success"))}}),Object(r.jsx)(b,{alertShow:O}),Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/about",children:Object(r.jsx)(j,{})}),Object(r.jsx)(m.a,{path:"/",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(h,{heading:"Enter your text here ",mode:a,functionToggle:y})})})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),n(e),s(e)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.44777069.chunk.js.map