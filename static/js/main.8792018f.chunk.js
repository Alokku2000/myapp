(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),o=a.n(r),l=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.Title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:e.homedena})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#",children:e.Linkdena})})]}),Object(s.jsxs)("div",{className:"form-check form-switch",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.clickSwitch}),Object(s.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:e.changeText})]})]})]})})})}function d(e){var t=Object(n.useState)("Copy text"),a=Object(l.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)("This is defualt text"),i=Object(l.a)(o,2),d=i[0],h=i[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"mb-3 my-3",children:[Object(s.jsx)("label",{htmlFor:"area",className:"form-label",style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(s.jsx)("textarea",{className:"form-control",id:"area",rows:"8",value:d,onChange:function(e){h(e.target.value),console.log(d)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"}})]}),Object(s.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-2"),onClick:function(){0===d.length?alert("Write something in text box to see changes"):(h(d.toUpperCase()),e.functionToggle("converted to uppercase","success"))},children:"Convert to upper case"}),Object(s.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-3"),onClick:function(){0===d.length?alert("Write something in text box to see changes"):(h(d.toLowerCase()),e.functionToggle("converted to Lowercase","success"))},children:"Convert to lower case"}),Object(s.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-2"),onClick:function(){0===d.length?alert("Write something in text box to see changes"):(h(""),e.functionToggle("Text cleared","success"))},children:"Clear"}),Object(s.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-3"),onClick:function(){if(0===d.length)alert("Are you mad text is empty");else{var e=prompt("Enter the word you want to search");if(null===e)alert("No problem for cancelations");else-1!==d.search(e)?alert("Word found"):alert("Not found")}},children:"search any word"}),Object(s.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-3"),onClick:function(){if(0===d.length)alert("Write something in text box to see changes");else{r("Text copied");var t=document.getElementById("area");t.select(),console.log(navigator.clipboard.writeText(t.value)),e.functionToggle("Text copied","success")}},children:c}),Object(s.jsxs)("div",{className:"conatiner my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsx)("h2",{children:"Your text summary"}),Object(s.jsxs)("p",{children:["Total words are ",d.split(" ").length]}),Object(s.jsxs)("p",{children:["Total characters are ",d.length]}),Object(s.jsxs)("p",{children:["Time taken to read the document is ",.008*d.split(" ").length," Minutes"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:d.length>0?d:"Enter the text to preview"})]})]})}i.defaultProps={Title:"Set title here",homedena:"write home here",Linkdena:"Link dai n yaar"};var h=function(e){var t;return e.alertShow&&Object(s.jsx)("div",{className:"alert alert-".concat(e.alertShow.typ," alert-dismissible fade show"),role:"alert",children:Object(s.jsxs)("strong",{children:[(t=e.alertShow.typ,t.charAt(0).toUpperCase()+t.slice(1)),":",e.alertShow.msg]})})};var b=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("Enable dark mode"),o=Object(l.a)(r,2),b=o[0],m=o[1],j=Object(n.useState)(null),u=Object(l.a)(j,2),g=u[0],x=u[1],p=function(e,t){x({msg:e,typ:t})};return setTimeout((function(){x(null)}),2e3),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{Title:"Textutlis",homedena:"Home",Linkdena:"About",mode:a,changeText:b,clickSwitch:function(){"dark"===a?(c("light"),m("Enable dark mode"),document.body.style.backgroundColor="white",p("You have disabled dark mode","danger")):(c("dark"),m("Disable dark mode"),document.body.style.backgroundColor="#21236c",p("You have enabled dark mode","success"))}}),Object(s.jsx)(h,{alertShow:g}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(d,{heading:"Enter your text here ",mode:a,functionToggle:p})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.8792018f.chunk.js.map