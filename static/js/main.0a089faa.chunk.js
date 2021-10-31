(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{113:function(e,t,n){e.exports={header:"AppBar_header__39TUB"}},114:function(e,t,n){e.exports={listContacts:"ContactList_listContacts__1bJ8C",button:"ContactList_button__28csi",item:"ContactList_item__1ZBKs"}},153:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(38),i=n.n(c),s=n(19),u=n(20),o=n(42),l=n(106),b=n.n(l),j=n(16),d=n.n(j),p=n(32),f=n(83),h=n(34),m=n.n(h);function O(){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/contacts",{name:t.name,number:t.number});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("/contacts/".concat(t.id));case 2:return e.abrupt("return",t.id);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.defaults.baseURL="https://connections-api.herokuapp.com";var k,C,N,y=Object(u.c)("app/fetchContacts",function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),L=Object(u.c)("app/add",function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O();case 4:return a=e.sent,e.next=7,a.find((function(e){return e.name===t.name}));case 7:if(void 0===e.sent){e.next=11;break}return f.Notify.failure("".concat(t.name," is already in contacts.")),e.abrupt("return",[]);case 11:return e.next=13,g(t);case 13:return c=e.sent,e.abrupt("return",[c]);case 17:return e.prev=17,e.t0=e.catch(1),f.Notify.failure("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u043e\u043b\u0435 Name \u0438 Number"),e.abrupt("return",r(e.t0));case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n){return e.apply(this,arguments)}}()),I=Object(u.c)("app/delete",function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,_(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(u.b)("app/filter"),U=n(3),V=n(28),S=Object(u.d)([],(k={},Object(U.a)(k,y.fulfilled,(function(e,t){return t.payload})),Object(U.a)(k,L.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(s.a)(n),Object(s.a)(e))})),Object(U.a)(k,I.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),k)),q=Object(u.d)(!1,(C={},Object(U.a)(C,y.pending,(function(){return!0})),Object(U.a)(C,y.fulfilled,(function(){return!1})),Object(U.a)(C,y.rejected,(function(){return!1})),Object(U.a)(C,L.pending,(function(){return!0})),Object(U.a)(C,L.fulfilled,(function(){return!1})),Object(U.a)(C,L.rejected,(function(){return!1})),Object(U.a)(C,I.pending,(function(){return!0})),Object(U.a)(C,I.fulfilled,(function(){return!1})),Object(U.a)(C,I.rejected,(function(){return!1})),C)),R=Object(u.d)(null,(N={},Object(U.a)(N,y.rejected,(function(e,t){return t.payload})),Object(U.a)(N,y.pending,(function(){return null})),Object(U.a)(N,L.rejected,(function(e,t){return t.payload})),Object(U.a)(N,L.pending,(function(){return null})),Object(U.a)(N,I.rejected,(function(e,t){return t.payload})),Object(U.a)(N,I.pending,(function(){return null})),N)),D=Object(u.d)("",Object(U.a)({},F,(function(e,t){return t.payload}))),B=Object(V.b)({items:S,isLoading:q,error:R,filter:D}),E=n(49),A=Object(E.a)([function(e){return e.contacts.items},function(e){return e.contacts.filter}],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}));m.a.defaults.baseURL="https://connections-api.herokuapp.com";var P,T=function(e){m.a.defaults.headers.common.Authorization="Bearer ".concat(e)},M=function(){m.a.defaults.headers.common.Authorization=""},W=Object(u.c)("auth/register",function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,T(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.response.status);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),J=Object(u.c)("auth/login",function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,T(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.response.status);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),z={register:W,logOut:Object(u.c)("auth/logout",Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/logout");case 3:M(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0.response.status);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),logIn:J,fetchCurrentUser:Object(u.c)("auth/refresh",function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return T(a),e.prev=5,e.next=8,m.a.get("/users/current");case 8:return c=e.sent,i=c.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",e.t0.response.status);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},H={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},Z=Object(u.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(P={},Object(U.a)(P,z.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,400===t.payload?e.isLoggedIn=!1:e.isLoggedIn=!0})),Object(U.a)(P,z.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,400===t.payload?e.isLoggedIn=!1:e.isLoggedIn=!0})),Object(U.a)(P,z.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(U.a)(P,z.fetchCurrentUser.pending,(function(e,t){e.isFetchingCurrentUser=!0})),Object(U.a)(P,z.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,401===t.payload?e.isLoggedIn=!1:e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(U.a)(P,z.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),P)}).reducer,Y=Object(s.a)(Object(u.f)({serializableCheck:{ignoredActions:[o.a,o.f,o.b,o.c,o.d,o.e]}})),G={key:"auth",storage:b.a,whitelist:["token"]},K=Object(u.a)({reducer:{auth:Object(o.g)(G,Z),contacts:B},middleware:Y,devTools:!1}),X=Object(o.h)(K),Q=n(35),$=n(107),ee=(n(153),n(14)),te=n(84),ne=n.n(te),re=n(17),ae=n(205),ce=n(204),ie=n(85),se=n.n(ie),ue=n(206),oe=n(1),le=function(){return Object(oe.jsx)(ce.a,{className:se.a.container,children:Object(oe.jsx)(ue.a,{variant:"h2",component:"div",className:se.a.title,children:"Hello, this is Phonebook app"})})},be=n(207),je=n(61),de=n.n(je),pe=function(){var e=Object(ee.c)(H.getIsLoggedIn);return Object(oe.jsxs)("nav",{children:[Object(oe.jsx)(Q.b,{to:"/",exact:!0,className:de.a.link,activeClassName:de.a.activeLink,children:"Main"}),e&&Object(oe.jsx)(Q.b,{to:"/contacts",exact:!0,className:de.a.link,activeClassName:de.a.activeLink,children:"Phonebook"})]})},fe=n(87),he=n.n(fe),me=n(202);function Oe(){var e=Object(ee.b)(),t=Object(ee.c)(H.getUsername);return Object(oe.jsxs)("div",{className:he.a.container,children:[Object(oe.jsxs)(ue.a,{variant:"p",className:he.a.name,sx:{m:"15px"},children:["Hello, ",t]}),Object(oe.jsx)(me.a,{type:"button",sx:{backgroundColor:"#ffffff","&:hover":{backgroundColor:"#f2f2f2"}},onClick:function(){return e(z.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var xe=n(62),ge=n.n(xe);function ve(){return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(Q.b,{to:"/register",exact:!0,className:ge.a.link,activeClassName:ge.a.activeLink,children:"Registration"}),Object(oe.jsx)(Q.b,{to:"/login",exact:!0,className:ge.a.link,activeClassName:ge.a.activeLink,children:"Login"})]})}var _e=n(113),we=n.n(_e);function ke(){var e=Object(ee.c)(H.getIsLoggedIn);return Object(oe.jsxs)(be.a,{position:"static",className:we.a.header,sx:{flexDirection:"row"},children:[Object(oe.jsx)(pe,{}),e?Object(oe.jsx)(Oe,{}):Object(oe.jsx)(ve,{})]})}var Ce=n(13),Ne=n(201),ye=n(48),Le=n.n(ye);function Ie(){var e=Object(ee.b)(),t=Object(r.useState)(""),n=Object(Ce.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),s=Object(Ce.a)(i,2),u=s[0],o=s[1],l=Object(r.useState)(""),b=Object(Ce.a)(l,2),j=b[0],d=b[1],p=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return c(r);case"email":return o(r);case"password":return d(r);default:return}};return Object(oe.jsxs)(ce.a,{className:Le.a.container,children:[Object(oe.jsx)(ue.a,{variant:"h4",className:Le.a.title,children:"Registration"}),Object(oe.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(z.register({name:a,email:u,password:j})),c(""),o(""),d("")},className:Le.a.form,autoComplete:"off",children:[Object(oe.jsx)(Ne.a,{className:Le.a.input,required:!0,id:"outlined-required-name",label:"Name",type:"text",name:"name",value:a,onChange:p,margin:"normal"}),Object(oe.jsx)(Ne.a,{className:Le.a.input,required:!0,id:"outlined-required-mail",label:"Email",type:"email",name:"email",value:u,onChange:p,margin:"normal"}),Object(oe.jsx)(Ne.a,{className:Le.a.input,required:!0,id:"outlined-password-input",label:"Password",type:"password",name:"password",autoComplete:"current-password",value:j,onChange:p,margin:"normal"}),Object(oe.jsx)(me.a,{type:"submit",variant:"contained",children:"Register"})]})]})}var Fe=n(53),Ue=n.n(Fe);function Ve(){var e=Object(ee.b)(),t=Object(r.useState)(""),n=Object(Ce.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),s=Object(Ce.a)(i,2),u=s[0],o=s[1],l=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return c(r);case"password":return o(r);default:return}};return Object(oe.jsxs)(ce.a,{className:Ue.a.container,children:[Object(oe.jsx)(ue.a,{variant:"h4",className:Ue.a.title,children:"Login"}),Object(oe.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(z.logIn({email:a,password:u})),c(""),o("")},className:Ue.a.form,autoComplete:"off",children:[Object(oe.jsx)(Ne.a,{className:Ue.a.input,required:!0,id:"outlined-required",label:"Email",type:"email",name:"email",value:a,onChange:l,margin:"normal"}),Object(oe.jsx)(Ne.a,{className:Ue.a.input,required:!0,id:"outlined-password-input",label:"Password",type:"password",name:"password",autoComplete:"current-password",value:u,onChange:l,margin:"normal"}),Object(oe.jsx)(me.a,{type:"submit",variant:"contained",children:"Enter"})]})]})}var Se=n(71),qe=n.n(Se);function Re(){var e=Object(r.useState)(""),t=Object(Ce.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(Ce.a)(c,2),s=i[0],u=i[1],o=Object(ee.b)(),l=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":u(r)}},b=function(){a(""),u("")};return Object(oe.jsxs)("form",{className:qe.a.form,onSubmit:function(e){e.preventDefault(),o(L({name:n,number:s})),b()},children:[Object(oe.jsx)(Ne.a,{className:qe.a.input,required:!0,id:"standard-required",variant:"standard",label:"Name",type:"text",name:"name",value:n,onChange:l,margin:"normal"}),Object(oe.jsx)(Ne.a,{className:qe.a.input,required:!0,id:"outlined-basic",variant:"outlined",label:"Number",type:"text",name:"number",value:s,onChange:l,margin:"normal"}),Object(oe.jsx)(me.a,{type:"submit",variant:"contained",children:"Add contact"})]})}var De=n(72),Be=n.n(De);function Ee(){var e=Object(ee.b)();return Object(oe.jsxs)(ce.a,{className:Be.a.wrapper,children:[Object(oe.jsx)(ue.a,{variant:"div",className:Be.a.title,children:"Find contacts by name"}),Object(oe.jsx)(Ne.a,{className:Be.a.input,id:"standard-search",label:"Search field",type:"search",name:"filter",variant:"standard",onChange:function(t){var n;n=t.target.value,e(F(n))},margin:"normal"})]})}var Ae=n(211),Pe=n(213),Te=n(210),Me=n(212),We=n(209),Je=n(208),ze=n(4),He=n(200),Ze=n(89),Ye=Object(ze.a)(He.a)((function(e){var t,n=e.theme;return t={},Object(U.a)(t,"&.".concat(Ze.a.head),{backgroundColor:"#1976d2",color:n.palette.common.white}),Object(U.a)(t,"&.".concat(Ze.a.body),{fontSize:14}),t})),Ge=Object(ze.a)(We.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),Ke=n(114),Xe=n.n(Ke);function Qe(){var e=Object(ee.c)(A),t=Object(ee.b)();Object(r.useEffect)((function(){return t(y())}),[t]);return Object(oe.jsx)(Te.a,{component:Je.a,children:Object(oe.jsxs)(Ae.a,{"aria-label":"simple table",children:[Object(oe.jsx)(Me.a,{children:Object(oe.jsxs)(We.a,{children:[Object(oe.jsx)(Ye,{children:"Name"}),Object(oe.jsx)(Ye,{align:"right",children:"Phone"}),Object(oe.jsx)(Ye,{align:"right",children:"Delete"})]})}),Object(oe.jsx)(Pe.a,{children:e.map((function(e){return Object(oe.jsxs)(Ge,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(oe.jsx)(Ye,{component:"th",scope:"row",children:e.name}),Object(oe.jsx)(Ye,{align:"right",children:e.number}),Object(oe.jsx)(Ye,{align:"right",children:Object(oe.jsx)(me.a,{type:"submit",className:Xe.a.button,variant:"outlined",color:"error",onClick:function(){return t(I(e))},children:"Delete"})})]},e.id)}))})]})})}var $e=n(73),et=n.n($e);function tt(){var e=Object(ee.b)();return Object(r.useEffect)((function(){return e(y())}),[e]),Object(oe.jsxs)(ce.a,{className:et.a.container,children:[Object(oe.jsx)(ue.a,{variant:"h3",className:et.a.title,children:"Phonebook"}),Object(oe.jsx)(Re,{}),Object(oe.jsx)(ue.a,{variant:"h3",className:et.a.title,children:"Contacts"}),Object(oe.jsx)(Ee,{}),Object(oe.jsx)(Qe,{})]})}var nt=n(51),rt=n(69),at=["children","redirectTo"];function ct(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/login":n,a=Object(rt.a)(e,at),c=Object(ee.c)(H.getIsLoggedIn);return Object(oe.jsx)(re.b,Object(nt.a)(Object(nt.a)({},a),{},{children:c?t:Object(oe.jsx)(re.a,{to:r})}))}var it=["children","restricted","redirectTo"];function st(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=e.redirectTo,c=void 0===a?"/":a,i=Object(rt.a)(e,it),s=Object(ee.c)(H.getIsLoggedIn)&&r;return Object(oe.jsx)(re.b,Object(nt.a)(Object(nt.a)({},i),{},{children:s?Object(oe.jsx)(re.a,{to:c}):t}))}function ut(){var e=Object(ee.b)(),t=Object(ee.c)(H.getIsFetchingCurrent);return Object(r.useEffect)((function(){e(z.fetchCurrentUser())}),[e]),Object(oe.jsx)(ce.a,{className:ne.a.wrapperBox,children:t?Object(oe.jsx)(ce.a,{className:ne.a.wrapperProgress,children:Object(oe.jsx)(ae.a,{})}):Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(ke,{}),Object(oe.jsxs)(re.d,{children:[Object(oe.jsx)(st,{exact:!0,path:"/",children:Object(oe.jsx)(le,{})}),Object(oe.jsx)(st,{path:"/register",restricted:!0,children:Object(oe.jsx)(Ie,{})}),Object(oe.jsx)(st,{path:"/login",restricted:!0,children:Object(oe.jsx)(Ve,{})}),Object(oe.jsx)(ct,{path:"/contacts",children:Object(oe.jsx)(tt,{})})]})]})})}i.a.render(Object(oe.jsx)(a.a.StrictMode,{children:Object(oe.jsx)(ee.a,{store:K,children:Object(oe.jsx)($.a,{loading:null,persistor:X,children:Object(oe.jsx)(Q.a,{children:Object(oe.jsx)(ut,{})})})})}),document.getElementById("root"))},48:function(e,t,n){e.exports={container:"RegisterView_container__3nx3V",form:"RegisterView_form__3ceE4",input:"RegisterView_input__j1DrN",title:"RegisterView_title__2ynRf"}},53:function(e,t,n){e.exports={container:"LoginView_container__3ZItf",form:"LoginView_form__p1YDq",input:"LoginView_input__1-bDK",title:"LoginView_title__2B0qR"}},61:function(e,t,n){e.exports={link:"Navigation_link__2ZOwe",activeLink:"Navigation_activeLink__C7DXw"}},62:function(e,t,n){e.exports={link:"AuthNav_link__30CqJ",activeLink:"AuthNav_activeLink__2ucYu"}},71:function(e,t,n){e.exports={form:"ContactForm_form__2Jy3k",name:"ContactForm_name__30R5k",inputName:"ContactForm_inputName__1gxwC",inputTel:"ContactForm_inputTel__1iflX",submitName:"ContactForm_submitName__Y_mF5"}},72:function(e,t,n){e.exports={wrapper:"Filter_wrapper__3ZuBp",inputFilter:"Filter_inputFilter__LzJ74"}},73:function(e,t,n){e.exports={container:"ContactsView_container__1Q9LG",title:"ContactsView_title__2J9VH"}},84:function(e,t,n){e.exports={wrapperBox:"App_wrapperBox__1W9RN",wrapperProgress:"App_wrapperProgress__3xx1M"}},85:function(e,t,n){e.exports={container:"HomeView_container__3GMZD",title:"HomeView_title__1WM0p"}},87:function(e,t,n){e.exports={container:"UserMenu_container__19EWs",avatar:"UserMenu_avatar__1drh1",name:"UserMenu_name__2WcfE"}}},[[161,1,2]]]);
//# sourceMappingURL=main.0a089faa.chunk.js.map