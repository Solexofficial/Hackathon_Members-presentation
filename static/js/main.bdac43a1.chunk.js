(this.webpackJsonphackathon_02=this.webpackJsonphackathon_02||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},24:function(e,t,a){e.exports={navbar:"NavBar_navbar__3r32i",navbarWrapper:"NavBar_navbarWrapper__c8O3n",navbarLink:"NavBar_navbarLink__2CNsn",logo:"NavBar_logo__3wrpa",logoTitle:"NavBar_logoTitle__1Y5vP"}},443:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a(87),n=a.n(c),r=(a(98),a(14)),i=a(9),o=a(93);function l(e){var t=e%10;return 1===t?"\u0433\u043e\u0434":t<5&&t>1?"\u0433\u043e\u0434\u0430":"\u043b\u0435\u0442"}var b=a(2),m=function(e){var t=e.color,a=e.functBtn,s=e.name;return Object(b.jsx)("button",{type:"button",className:"btn btn-"+t+" m-1",onClick:a,children:s})},d=function(e){var t=e.member;return Object(b.jsxs)("div",{className:"card d-flex justify-content-between m-1 bg-dark bg-gradient bg-opacity-50",style:{width:"14rem"},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"p-2",children:Object(b.jsx)("img",{src:t.photoUrl,className:"card-img-top rounded mx-auto",alt:"photo"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.name}),Object(b.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[t.age," ",l(t.age)]}),Object(b.jsx)("p",{className:"card-text",children:t.about})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(r.b,{to:"members/".concat(t.id),children:Object(b.jsx)(m,{color:"primary",name:"Open"})}),Object(b.jsx)(m,{color:"primary",name:"fav",functBtn:function(){return function(e){null===localStorage.getItem(e.id)?localStorage.setItem(e.id,JSON.stringify(e)):localStorage.removeItem(e.id)}(t)}})]})]})},j=function(e){var t=e.members,a=function(e){localStorage.getItem("id".concat(e.id))?localStorage.removeItem("id".concat(e.id)):localStorage.setItem("id".concat(e.id),JSON.stringify(e))};return Object(b.jsx)("div",{className:"d-flex",children:t.map((function(e){return Object(b.jsx)(d,{member:e,onAddFavorite:a},e.id)}))})},h=function(){var e=Object.keys(localStorage).map((function(e){return JSON.parse(localStorage.getItem(e))})),t=Object(s.useState)(e),a=Object(o.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){var e=Object.keys(localStorage).map((function(e){return JSON.parse(localStorage.getItem(e))}));return console.log(e),n(e)}),[c]),Object(b.jsx)(j,{members:c})},u=function(){var e=Object(i.g)();console.log("history",e);var t=e.location.pathname;console.log("pathname",t);var a=t.split("/");console.log("pathNames",a);return Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsx)("ol",{className:"breadcrumb",children:a.slice(1).map((function(e){return function(e){return console.log("path",e),a.indexOf(e)+1===a.length?Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:e},e):Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(r.b,{to:"/".concat(e),children:e})},e)}(e)}))})})},p=a(90),x=a.n(p),g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:Object(b.jsx)("p",{align:"center",className:"d-flex justify-content-between m-1 bg-dark bg-gradient bg-opacity-50 fs-4",children:"\u0412 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 \u0420\u0435\u0430\u043a\u0442-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0433\u0434\u0435 \u0432\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c, \u0432\u0445\u043e\u0434\u0438\u0442 5 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u041a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043d\u0430\u0441 \u043e\u0447\u0435\u043d\u044c \u043b\u044e\u0431\u0438\u0442 \u0420\u0435\u0430\u043a\u0442, JavaScript \u0438 \u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0432 \u0446\u0435\u043b\u043e\u043c. \u041c\u044b \u043e\u0447\u0435\u043d\u044c \u0441\u0442\u0430\u0440\u0430\u043b\u0438\u0441\u044c, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b\u0438 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0434\u0435\u0435\u043c\u0441\u044f \u043e\u043d\u043e \u0432\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f!"})}),Object(b.jsxs)(r.b,{className:x.a.main,to:"/members",children:[Object(b.jsx)("h1",{children:"Meet our team"})," "]})]})]})},f=(a(104),a(105),function(e){var t,a,s=e.percent,c=e.name,n=e.color;return"circle"===e.type?(s<=50?t={borderColor:n||"#0d6efd",transform:"rotate(".concat(s/100*360,"deg)")}:(t={transform:"rotate(180deg)",borderColor:n||"#0d6efd"},a={transform:"rotate(".concat((s-50)/100*360,"deg)"),borderColor:n||"#0d6efd"}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"title",children:c}),Object(b.jsxs)("div",{className:"progressC mx-auto",children:[Object(b.jsx)("span",{className:"progress-left",children:Object(b.jsx)("span",{className:"progress-bar",style:a})}),Object(b.jsx)("span",{className:"progress-right",children:Object(b.jsx)("span",{className:"progress-bar",style:t})}),Object(b.jsx)("div",{className:"progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center",children:Object(b.jsxs)("div",{className:"h2 font-weight-bold",children:[s,Object(b.jsx)("sup",{className:"small",children:"%"})]})})]})]})):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"title",children:c}),Object(b.jsx)("div",{className:"progress",children:Object(b.jsxs)("div",{className:"progress-bar",role:"progressbar",style:{width:s+"%",background:n||"#0d6efd"},"aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100",children:[s,"%"]})})]})}),O=function(e){var t=e.color,a=e.content;return Object(b.jsx)("span",{className:"badge m-1 bg-"+t,children:a})},v=function(e){var t=e.id,a=e.members.find((function(e){return e.id===t}));return console.log(Object.entries(a.skills)),Object(b.jsxs)("div",{className:"m-5",children:[Object(b.jsx)("h1",{children:a.name}),Object(b.jsxs)("p",{children:[a.age," ",l(a.age)]}),Object(b.jsx)("p",{children:a.about}),Object(b.jsxs)("div",{className:"d-flex justify-content-between pt-3",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:a.photoUrl,className:"rounded",alt:"photo",style:{width:"14rem"}})}),Object(b.jsxs)("div",{className:"m-3",style:{width:"20rem"},children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"bi bi-telegram",children:Object(b.jsx)("a",{href:a.socialNetworks.telegram,className:"link-light",children:"Telegram"})})}),Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"bi bi-people-fill",children:Object(b.jsx)("a",{href:a.socialNetworks.vk?a.socialNetworks.vk:a.socialNetworks.fb,className:"link-light",children:"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435/Facebook"})})}),Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"bi bi-instagram",children:Object(b.jsx)("a",{href:a.socialNetworks.inst,className:"link-light",children:"Instagram"})})}),Object(b.jsxs)("div",{className:"p-4",children:[a.isTeamLeader&&Object(b.jsx)(O,{color:"danger",content:"TeamLead"}),"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b(\u0430):"]}),a.contribution.split(", ").map((function(e){return Object(b.jsx)(O,{color:"success",content:e},e)}))]}),Object(b.jsxs)("div",{className:"d-flex align-items-center m-3",children:[Object(b.jsx)("div",{className:"fs-4",children:"\u0421\u043a\u0438\u043b\u043b\u044b:"}),Object(b.jsx)("div",{className:"mx-4",children:Object.entries(a.skills).map((function(e){return Object(b.jsx)("div",{className:"m-3",children:Object(b.jsx)(f,{percent:e[1],name:e[0],color:"#011f4b",type:"react"===e[0]?"circle":""})},e[0])}))})]})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(b.jsx)(m,{color:"outline-info",functBtn:function(){console.log("added to favorites")},name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(b.jsx)(r.b,{to:"/members",className:"btn btn-outline-info ms-3",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})]})},N=function(e){var t=e.members,a=Object(i.h)().memberId;return Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)(v,{id:a,members:t}):Object(b.jsx)(j,{members:t})})},k=[{id:"1",name:"\u041c\u0430\u0440\u043a",age:26,about:"Front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u0412\u043b\u044e\u0431\u0438\u043b\u0441\u044f \u0432 React \u0441 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430, \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0435\u0433\u043e \u0438\u0437\u0443\u0447\u0430\u044e + \u0441\u0442\u0435\u0439\u0442 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 Redux. \u0424\u043e\u043a\u0443\u0441\u0438\u0440\u0443\u044e\u0441\u044c \u043d\u0430 MERN \u0441\u0442\u0430\u043a\u0435. \u0422\u0430\u043a\u0436\u0435 \u0438\u0437\u0443\u0447\u0430\u044e Typescript ",photoUrl:"http://ipic.su/img/img7/fs/ava.1633896682.jpg",socialNetworks:{telegram:"https://t.me/thesolex",vk:"https://vk.com/thesolex",inst:"https://www.instagram.com/solexofficial_/"},contribution:"navBar, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e, \u0441\u0442\u0438\u043b\u0438, particles",isTeamLeader:!1,skills:{html:100,css:90,js:80,react:50}},{id:"2",name:"\u0414\u0435\u043d\u0438\u0441",age:28,about:"\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u0437\u0443\u0447\u0430\u044e JavaScript \u0438 React. \u0414\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u043b\u0435\u0433\u043a\u043e, \u043d\u043e \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0441\u0442\u0430\u0432\u043b\u044e \u0446\u0435\u043b\u044c \u0441\u0442\u0430\u0442\u044c Junior frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c.",photoUrl:"https://ic.wampi.ru/2021/10/10/photo_2019-08-06_10-03-35.jpg",socialNetworks:{telegram:"https://t.me/Denis_Abrams",inst:"https://www.instagram.com/tony_kotoriy_fontana/"},contribution:"\u043a\u043d\u043e\u043f\u043a\u0430, \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",isTeamLeader:!1,skills:{html:25,css:25,js:40,react:30}},{id:"3",name:"\u0421\u0435\u0440\u0433\u0435\u0439",age:30,about:"\u041d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 JS \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0447\u0442\u043e \u0442\u043e \u043d\u043e\u0432\u043e\u0435. \u041b\u0438\u0447\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430: \u0447\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c, \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u0434\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u043e\u0441\u0442\u044c.",photoUrl:"https://scontent-iev1-1.xx.fbcdn.net/v/t31.18172-8/13693021_1128811510526748_8431415011526321586_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=zTQOJPAbVTsAX-DVs7i&_nc_ht=scontent-iev1-1.xx&oh=3c77b125c76cecfff689256be6e2c767&oe=618712CF",socialNetworks:{telegram:"https://t.me/bevzobrazie",fb:"https://www.facebook.com/bevzobrazie",inst:"https://www.instagram.com/bevzobrazie"},contribution:"\u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441-\u0431\u0430\u0440",isTeamLeader:!1,skills:{html:90,css:90,js:70,react:40}},{id:"4",name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",age:26,about:"\u041d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u0432 \u0441\u0444\u0435\u0440\u0435 IT.\n    \u0411\u044b\u0441\u0442\u0440\u043e \u043e\u0431\u0443\u0447\u0430\u044e\u0441\u044c, \u0443\u0432\u0435\u0440\u0435\u043d, \u0447\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430 \u0432 \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432 \u0434\u0430\u0435\u0442 \u0435\u0449\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430 \u0438 \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.\n    \u0416\u0435\u043b\u0430\u044e \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0446\u0438\u0438, \u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c\u0441\u044f.",photoUrl:"https://sun9-82.userapi.com/impg/8btGXh8DvdhKQKmgxJI8rXg-f3bmQB4KszxBsQ/5BMz-Bkh0SE.jpg?size=960x1280&quality=96&sign=2762097f6206c635e1055958658c360b&type=album",socialNetworks:{telegram:"https://t.me/BallDeuj",vk:"https://vk.com/id142787489",inst:"https://www.instagram.com/nutyablin/"},contribution:"breadcrumbs, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",isTeamLeader:!1,skills:{html:40,css:40,js:70,react:60}},{id:"5",name:"\u0410\u043d\u043d\u0430 \u041d\u043e\u0441\u043a\u043e\u0432\u0430",age:30,about:"\u0421\u0442\u0430\u0432\u043b\u044e \u0441\u0432\u043e\u0435\u0439 \u0446\u0435\u043b\u044c\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430, \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435, \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u043d\u043e\u0439 \u0441\u0432\u043e\u0438\u043c \u0434\u0435\u043b\u043e\u043c \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043c \u0432 \u043d\u0435\u043c. \n\u041c\u043e\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432 \u0440\u0430\u0431\u043e\u0442\u0435 - \u044d\u0442\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430, \u043f\u043e\u0440\u044f\u0434\u043e\u043a, \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0438 \u043b\u043e\u0433\u0438\u043a\u0430.",photoUrl:"https://sun9-68.userapi.com/impf/c851224/v851224060/d5197/jcauyJpynkc.jpg?size=720x1080&quality=96&sign=34a232248b64baec6e0139fd32b5cc56&type=album",socialNetworks:{telegram:"https://t.me/anni_nanni",vk:"https://vk.com/anninanni",inst:"https://www.instagram.com/annockka/"},contribution:"\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430, badge, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",isTeamLeader:!0,skills:{html:100,css:70,js:90,react:65}}],_=[{path:"/",component:g,exact:!0},{path:"/favorites",component:h,exact:!0},{path:"/members/:memberId?",component:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(N,{members:k})]})},exact:!0}],y=function(){return console.log(_),Object(b.jsxs)(i.d,{children:[_.map((function(e){return Object(b.jsx)(i.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(b.jsx)(i.a,{to:"/"})]})},w=function(e){var t=e.children;return Object(b.jsx)("div",{className:"container",children:t})},S=a(24),z=a.n(S),B=a.p+"static/media/react-logo.7098e271.svg",I=function(){return console.log("render Nav"),Object(b.jsxs)("nav",{className:z.a.navbar,children:[Object(b.jsxs)("div",{className:z.a.logo,children:[Object(b.jsx)("img",{src:B,alt:"logo"}),Object(b.jsx)("div",{className:z.a.logoTitle,children:"React Hackathon"})]}),Object(b.jsxs)("ul",{className:z.a.navbarWrapper,children:[Object(b.jsx)(r.b,{className:z.a.navbarLink,to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(b.jsx)(r.b,{className:z.a.navbarLink,to:"/members",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"}),Object(b.jsx)(r.b,{className:z.a.navbarLink,to:"/favorites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})]})},T=(a(106),a(91)),J=a.n(T),L=a(92);var F=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(J.a,{style:{position:"absolute",top:"0",left:"0",zIndex:"-1"},params:L}),Object(b.jsxs)(w,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(y,{})]})]})};n.a.render(Object(b.jsx)(F,{}),document.getElementById("root"))},90:function(e,t,a){e.exports={main:"main_main__39z0X"}},92:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":50,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')}},[[443,1,2]]]);
//# sourceMappingURL=main.bdac43a1.chunk.js.map