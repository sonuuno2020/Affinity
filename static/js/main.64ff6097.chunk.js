(this["webpackJsonpAffinity-Map"]=this["webpackJsonpAffinity-Map"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),r=(a(26),a(9)),l=a(7),d=a(3),o=a(2),j=[{id:1,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 1"},{id:2,type:"Risk",feedback:"Usually takes 3 hours to respond",name:"Sara"},{id:3,type:"Risk",feedback:"Usually takes 3 hours to respond",name:"User 3"},{id:4,type:"Risk",feedback:"Usually takes 3 hours to respond",name:"User 4"},{id:5,type:"Risk",feedback:"Usually takes 3 hours to respond",name:"User 5"},{id:6,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 6"},{id:7,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 7"},{id:8,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 8"},{id:9,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 9"},{id:10,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 10"},{id:11,type:"Services",feedback:"Usually takes 3 hours to respond",name:"User 11"}],u=(a(27),a(8)),b=a(6),h=a(21),m=(a(28),a(0)),f=function(e){var t=e.handleChange,a=e.label,c=Object(h.a)(e,["handleChange","label"]);return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("input",Object(b.a)({className:"form-input",onChange:t},c)),a?Object(m.jsx)("label",{className:"label",children:a}):null]})},O=(a(30),function(e){var t=e.id,a=e.items,s=e.update,n=e.setIsWrt,i=Object(c.useState)({name:"",type:"",feedback:""}),r=Object(d.a)(i,2),l=r[0],o=r[1],j=l.name,h=l.type,O=l.feedback,p=(a[t],function(e){var t=e.target,a=t.name,c=t.value;o(Object(b.a)(Object(b.a)({},l),{},Object(u.a)({},a,c)))});return Object(m.jsxs)("div",{className:"New-item",children:[Object(m.jsx)("h2",{children:"Edit Details"}),Object(m.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault(),console.log(j,h,O),s({id:t,type:h,feedback:O,name:j}),n(null)},children:[Object(m.jsx)(f,{name:"name",label:"Name",type:"text",handleChange:p,required:!0}),Object(m.jsx)(f,{name:"type",label:"Type",type:"text",handleChange:p,required:!0}),Object(m.jsx)(f,{name:"feedback",label:"Feedback",type:"text",handleChange:p,required:!0}),Object(m.jsx)("div",{className:"button",children:Object(m.jsx)("button",{type:"submit",children:"Done"})})]})]})}),p=(a(31),function(e){var t=e.users,a=e.update,s=e.setFlag,n=Object(c.useState)({name:"",type:"",feedback:""}),i=Object(d.a)(n,2),r=i[0],o=i[1],j=r.name,h=r.type,O=r.feedback,p=t,x=function(e){var t=e.target,a=t.name,c=t.value;o(Object(b.a)(Object(b.a)({},r),{},Object(u.a)({},a,c)))};return Object(m.jsxs)("div",{className:"New-item",children:[Object(m.jsx)("h2",{children:"Enter Details"}),Object(m.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault(),console.log(j,h,O);var t={id:p.length+1,type:h,feedback:O,name:j};console.log(t);var c=[].concat(Object(l.a)(p),[t]);console.log(c),a(t),s(!1)},children:[Object(m.jsx)(f,{name:"name",label:"Name",type:"text",handleChange:x,required:!0}),Object(m.jsx)(f,{name:"type",label:"Type",type:"text",handleChange:x,required:!0}),Object(m.jsx)(f,{name:"feedback",label:"Feedback",type:"text",handleChange:x,required:!0}),Object(m.jsx)("div",{className:"button",children:Object(m.jsx)("button",{type:"submit",children:"Add this highlight"})})]})]})}),x=a.p+"static/media/pinceau.b61c0090.svg",g=(a(32),function(e){var t=e.item,a=t.id,c=t.type,s=t.feedback,n=t.name,i=e.remove,r=e.setIsWrt,l=e.flag;return Object(m.jsxs)("div",{className:"highlight-item",children:[Object(m.jsxs)("div",{className:"item-details",children:[a<5?Object(m.jsx)("label",{className:"type",children:c}):null,Object(m.jsx)("span",{className:"feedback",children:s}),Object(m.jsx)("span",{className:"name",children:n})]},a),l?null:Object(m.jsxs)("div",{className:"icon",children:[Object(m.jsx)("div",{className:"remove",onClick:function(){i(a)},children:" \u2715"}),Object(m.jsx)("div",{className:"write",onClick:function(){r(a)},children:Object(m.jsx)("img",{src:x,height:"25px",width:"20px"})})]})]})}),v=function(e){var t=e.bucket,a=(e.setBucket,e.data),s=e.setData,n=e.update,i=e.remove,r=e.editUpdate,l=Object(c.useState)(!1),o=Object(d.a)(l,2),j=o[0],u=o[1],b=Object(c.useState)("N/A"),h=Object(d.a)(b,2),f=h[0],x=h[1],v=Object(c.useState)(null),k=Object(d.a)(v,2),N=k[0],y=k[1],C=["#4fde4f","#4fdec3","#d54fde","#d54ffe","#e54fde","#f52b5b","#ff9800","#1becd9","#dbef1f"];return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsxs)("div",{className:"upper",children:[Object(m.jsxs)("div",{className:"search",children:[Object(m.jsx)("label",{className:"filter",children:"Filter By:"}),Object(m.jsxs)("select",{className:"dropdown",onClick:function(e){var t=e.target,a=(t.name,t.value);x(a)},children:[Object(m.jsx)("option",{default:!0,value:"N/A",children:"select"}),t.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})]}),Object(m.jsx)("div",{className:"image-container",onClick:function(){u(!j),console.log(j)},children:Object(m.jsx)("img",{height:"50px",width:"50px",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAACSkpLNzc0gICBXV1elpaXs7Ozc3NwEBATx8fELCwtzc3OioqLi4uItLS2cnJz39/coKCjX19dSUlKsrKw5OTlHR0eBgYG9vb0cHByGhoZsbGyVlZUPDw95eXkwMDBNkWukAAAC10lEQVR4nO3di27aQBBGYRPTmktDINwLafL+T1maRhUBW2XFzPxT95wXsD8WIXttdquKiIiIiIiIiP7jmmVt10StuWy/exqY9r1Rk86bPNjq3hsmIj46+DIRm60PMA2x9vJlIXoCT8SZ2leNXIEJRnGxcRbKR/HgDRwMnqXEpT9QPIrHCKGSOAsBKr+oL0FCHXFlbxmnIk7sgYPhOhPR45d02nUZLyF2fNx3Cqt5HmLHqdwrTDSKHre9v4R5iG7CNEQ/YRaiozAJ0VOYg+gq7CI+RRJ9hRmIzsIERG+hnugulBP9hWpigFBMjBBqiSFCKTFGqCQGCYXEKKGOGCaUEeOEKmKgUESMFGqIoUIJMVaoIAYLBcRoYTwxXBhOjBdGEwXCYKJCGEuUCEOJGmEkUSQMJKqEcUSZMOyxjU4YRRQKg4hKYQxRKgwhaoVdxIf+CDuIfRK2E3slbCX2S9hG7Jmwhdg34TWxd8IrYnbhj/LTuHjNNbtw8PqttNfnf0t4dwgRItSHECFCfQgRItSHECFCfQgRItSHECFCfQgRlgvnX626bR2OcOF4YXa8RcfyPGqh3TqkE4QIi0OIsDSECMtDiLA0hAjLQ4iwtKTCqaFwmlI4WH2x6rZFfZmJQohQH0KECPUhRIhQH0KECPUhtBcO7copHM8aq2Y5Z6L6P9eGsCCECMtDiLA0hAjLQ4iwNIQIy0P4W9j/d/XrkVV1TmF4CBEi1IcQIUJ9CBEi1IcQIUJ9CBGed9s6FdHNDYXrvx9O0NpQuFRjWlsaCidqTGt2M9CnbvurVWwrS2D1oua09GIqnKk5LRnvS3ZUe6462gKrkRp01chYWB3UoosO1sBqsVGbPrWxe5T3p9veao3KZUPZWq06q/YAJrp2G1ter32q2apt720bL2DVuRNhaI+OvlMT9c3wg+cAfrTfvYl0b7u9P++jZllHtwwYPCIiIiIiIiLK209iSXmAAJdI0QAAAABJRU5ErkJggg=="})}),j?Object(m.jsx)(p,{users:a,update:n,setFlag:u}):null]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"highlights",children:"N/A"===f?a.map((function(e){return Object(m.jsx)("div",{className:"item zoomIn",style:{backgroundColor:C[Math.floor(Math.random()*C.length)]},children:Object(m.jsx)(g,{item:e,remove:i,setIsWrt:y,flag:!1},e.id)})})):a.filter((function(e){return e.type===f})).map((function(e){return Object(m.jsx)("div",{className:"item zoomIn",style:{backgroundColor:C[Math.floor(Math.random()*C.length)]},children:Object(m.jsx)(g,{item:e,remove:i,setIsWrt:y,setItems:s,flag:!1},e.id)})}))})}),N?Object(m.jsx)(O,{id:N,items:a,setIsWrt:y,update:r,setItems:s,remove:i}):null]})},k=(a(33),function(e){var t=e.bucket,a=e.data,c=(e.setData,["#4fde4f","#4fdec3","#d54fde","#d54ffe","#e54fde","#f52b5b","#ff9800","#1becd9","#dbef1f"]);return Object(m.jsx)("div",{className:"group",children:t.map((function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("h2",{children:e})}),Object(m.jsx)("div",{className:"highlights",children:a.filter((function(t){return t.type===e})).map((function(e){return Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("div",{className:"item zoomIn",style:{backgroundColor:c[Math.floor(Math.random()*c.length)]},children:Object(m.jsx)(g,{item:e,flag:!0},e.id)})})}))})]})}))})}),N=(a(34),function(e){var t=e.update,a=Object(c.useState)(""),s=Object(d.a)(a,2),n=s[0],i=s[1];return Object(m.jsx)("div",{className:"addbucket",children:Object(m.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault(),t(n)},children:[Object(m.jsx)("h2",{children:"Enter Bucket name"}),Object(m.jsx)(f,{name:"name",label:"Name",type:"text",handleChange:function(e){var t=e.target,a=(t.name,t.value);i(a)},required:!0}),Object(m.jsx)("div",{className:"button",children:Object(m.jsx)("button",{type:"submit",children:"Add to Buckets"})})]})})}),y=(a(35),function(e){var t=e.bucket,a=e.setBucket,s=Object(c.useState)(!1),n=Object(d.a)(s,2),i=n[0],o=n[1];return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(r.b,{to:"/Affinity",className:"Message",children:Object(m.jsx)("h1",{children:"Message/Affinity Map"})}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsx)("div",{className:"option",onClick:function(e){o(!0)},children:"New Bucket"}),i?Object(m.jsx)(N,{update:function(e){console.log(e),a([].concat(Object(l.a)(t),[e])),o(!1)}}):null,Object(m.jsx)("div",{className:"option",children:Object(m.jsx)(r.b,{to:"/group",className:"link",children:"Group Highligts"})})]})]})});var C=Object(o.f)((function(e){var t=Object(c.useState)(["Services","Risk"]),a=Object(d.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(j),r=Object(d.a)(i,2),u=r[0],b=r[1];function h(e){var t=u.filter((function(t){return t.id!==e.id}));b([].concat(Object(l.a)(t),[e]))}function f(e){b([].concat(Object(l.a)(u),[e]))}function O(e){alert("This highlight will be deleted");var t=u,a=u.filter((function(t){return t.id!==e}));console.log(t),b(a)}Object(c.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("bucket")),t=JSON.parse(localStorage.getItem("users_data"));console.log(e,t),n(e||["Services","Risk"]),b(t||j)}()}),[]),Object(c.useEffect)((function(){localStorage.setItem("bucket",JSON.stringify(s))}),[s]),Object(c.useEffect)((function(){localStorage.setItem("users_data",JSON.stringify(u))}),[u]);var p=e.match;return console.log(p),Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{bucket:s,setBucket:n}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/group",render:function(){return Object(m.jsx)(k,{bucket:s,setBucket:n,data:u,setData:b})}}),Object(m.jsx)(o.a,{path:"/Affinity",render:function(){return Object(m.jsx)(v,{bucket:s,setBucket:n,data:u,setData:b,update:f,editUpdate:h,remove:O})}})]})]})})),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(C,{})})}),document.getElementById("root")),I()}},[[41,1,2]]]);
//# sourceMappingURL=main.64ff6097.chunk.js.map