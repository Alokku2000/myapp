(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(15),s=a.n(o),l=(a(22),a(9)),i=(a(23),a(8)),r=a(0);function d(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.Title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:e.homedena})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",children:e.Linkdena})})]}),Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.clickSwitch}),Object(r.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:e.changeText})]})]})]})})})}function h(e){var t=Object(c.useState)("This is defualt text"),a=Object(l.a)(t,2),n=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"mb-3 my-3",children:[Object(r.jsx)("label",{htmlFor:"area",className:"form-label",style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(r.jsx)("textarea",{className:"form-control",id:"area",rows:"8",value:n,onChange:function(e){o(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#b3b184",color:"light"===e.mode?"black":"white"}})]}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-1 my-1"),onClick:function(){0===n.length?alert("Write something in text box to see changes"):(o(n.toLowerCase()),e.functionToggle("converted to Lowercase","success"))},children:"Convert to lower case"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-1 my-1"),onClick:function(){0===n.length?alert("Write something in text box to see changes"):(o(""),e.functionToggle("Text cleared","success"))},children:"Clear"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-1 my-1"),onClick:function(){if(0===n.length)alert("Are you mad text is empty");else{var e=prompt("Enter the word you want to search");if(null===e)alert("No problem for cancelations");else-1!==n.search(e)?alert("Word found"):alert("Not found")}},children:"search any word"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-1 my-1"),onClick:function(){0===n.length?alert("Write something in text box to see changes"):(o(n.toUpperCase()),e.functionToggle("converted to uppercase","success"))},children:"Convert to upper case"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("light"===e.mode?"primary":"warning"," mx-1 my-1"),onClick:function(){if(0===n.length)alert("Write something in text box to see changes");else{var t=document.getElementById("area");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.functionToggle("Text copied","success")}},children:"Copy text"}),Object(r.jsxs)("div",{className:"conatiner my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:["Total words are ",n.split(" ").filter((function(e){return 0!==e.length})).length]}),Object(r.jsxs)("p",{children:["Total characters are ",n.length]}),Object(r.jsxs)("p",{children:["Time taken to read the document is ",.008*n.split(" ").filter((function(e){return 0!==e.length})).length," Minutes"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:n.length>0?n:"Nothing to preview"})]})]})}d.defaultProps={Title:"Set title here",homedena:"write home here",Linkdena:"Link dai n yaar"};var b=function(e){var t;return Object(r.jsx)("div",{className:"alertClass",children:e.alertShow&&Object(r.jsx)("div",{className:"alert alert-".concat(e.alertShow.typ," alert-dismissible fade show"),role:"alert",children:Object(r.jsxs)("strong",{children:[(t=e.alertShow.typ,t.charAt(0).toUpperCase()+t.slice(1)),":",e.alertShow.msg]})})})};function m(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(76 118 195)":"white"};return Object(r.jsx)("div",{className:"container my-5 myClass",children:Object(r.jsxs)("div",{className:"accordion my-3",id:"accordionExample",style:t,children:[Object(r.jsxs)("div",{className:"accordion-item my-class",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t,children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item ",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t,children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item ",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t,children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})})}var j=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)("Enable dark mode"),s=Object(l.a)(o,2),u=s[0],g=s[1],p=Object(c.useState)(null),x=Object(l.a)(p,2),O=x[0],v=x[1],y=function(e,t){v({msg:e,typ:t})};return setTimeout((function(){v(null)}),2e3),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{Title:"Textutlis",homedena:"Home",Linkdena:"About",mode:a,changeText:u,clickSwitch:function(){"dark"===a?(n("light"),g("Enable dark mode"),document.body.style.backgroundColor="white",y("You have disabled dark mode","danger")):(n("dark"),g("Disable dark mode"),document.body.style.backgroundColor="#21236c",y("You have enabled dark mode","success"))}}),Object(r.jsx)(b,{alertShow:O}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/about",children:Object(r.jsx)(m,{mode:a})}),Object(r.jsx)(j.a,{path:"/",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(h,{heading:"Enter your text here ",mode:a,functionToggle:y})})})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.72a9cb6f.chunk.js.map