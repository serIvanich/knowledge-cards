(this["webpackJsonpknowledge-cards"]=this["webpackJsonpknowledge-cards"]||[]).push([[0],{11:function(e,t,a){e.exports={registerBlock:"ForgotPass_registerBlock__2xZs4",registerCard:"ForgotPass_registerCard__3sMa8",error:"ForgotPass_error__2rjVD",formContainer:"ForgotPass_formContainer__2mj6t",emailText:"ForgotPass_emailText__1kK0u",passwordText:"ForgotPass_passwordText__3By3-",formBlock:"ForgotPass_formBlock__wReKQ",inputItem:"ForgotPass_inputItem__1LO5j",labelTitle:"ForgotPass_labelTitle__1s9MG",loginLink:"ForgotPass_loginLink__1Jm3m"}},12:function(e,t,a){e.exports={loginBlock:"Login_loginBlock__3Q7_i",loginCard:"Login_loginCard__uchU6",formBlock:"Login_formBlock__2jk5w",inputItem:"Login_inputItem__ix-P5",buttonsBlock:"Login_buttonsBlock__f241W",button:"Login_button__3435L"}},2:function(e,t,a){e.exports={container:"Error404_container__UA34i",rail:"Error404_rail__1WwBm",stamp:"Error404_stamp__38a1y",stampSlide:"Error404_stampSlide__2wdSh",world:"Error404_world__-iEHt",forward:"Error404_forward__2_bPU",slide:"Error404_slide__2OM-G",box:"Error404_box__1uX-b",roll:"Error404_roll__2T2lU",wall:"Error404_wall__Sv9h5",zeroFour:"Error404_zeroFour__1gDxz"}},20:function(e,t,a){e.exports={registerBlock:"Register_registerBlock__3FEC6",registerCard:"Register_registerCard__1Cv0K",formBlock:"Register_formBlock__1tyLH",inputItem:"Register_inputItem__2xMMZ",buttonsBlock:"Register_buttonsBlock__1FhdT"}},26:function(e,t,a){e.exports={pagesContainer:"Profile_pagesContainer__3W-Ni",sideBar:"Profile_sideBar__3CY90",mainPart:"Profile_mainPart__2w5Gk",profileSidebar:"Profile_profileSidebar__2SkDC"}},27:function(e,t,a){e.exports={setNewPasswordBlock:"setPass_setNewPasswordBlock__3gPuf",setNewPasswordCard:"setPass_setNewPasswordCard__3OgS9",formBlock:"setPass_formBlock__3JwRv",inputItem:"setPass_inputItem__2bIVN",innerText:"setPass_innerText__2RvYm",buttonsBlock:"setPass_buttonsBlock__3QIgQ"}},28:function(e,t,a){e.exports={checkEmailPage:"CheckEmail_checkEmailPage__2_y1U",checkEmailContainer:"CheckEmail_checkEmailContainer__GEsUm",wrapper:"CheckEmail_wrapper__1mAPG",chekEmailImg:"CheckEmail_chekEmailImg__1o3g0",checkEmail:"CheckEmail_checkEmail__1AkTB",instructions:"CheckEmail_instructions__ZEKPC"}},30:function(e,t,a){e.exports={navLoginContainer:"Navbar_navLoginContainer__2vxCJ",navLogotype:"Navbar_navLogotype__17q_U",navLinksBox:"Navbar_navLinksBox__XkYpe",navLink:"Navbar_navLink__2WlFq"}},52:function(e,t,a){e.exports={preloaderContainer:"Preloader_preloaderContainer__3egDl"}},59:function(e,t,a){},60:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),c=a(32),i=a.n(c),n=(a(59),a(60),a(7)),o=a(4),l=a(3),d=a(20),j=a.n(d),u=a(23),b=a(15),m=a.n(b),h=a(25),p=a(51),O=a.n(p).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),x=function(){return O.post("auth/me",{}).then((function(e){return e.data}))},v=function(e){return O.post("/auth/register",e).then((function(e){return e.data}))},f=function(e){return O.post("auth/login",e).then((function(e){return e.data}))},_=function(){return O.delete("auth/me")},g=function(e){return O.post("auth/forgot",e)},w=function(e,t){var a=e.response?e.response.data.error:e.message+", more details in the console";console.log(a),t(P(a)),t(k("failed"))},N={status:"succeeded",error:null,isInitialized:!1},k=function(e){return{type:"APP/SET-STATUS",status:e}},P=function(e){return{type:"APP/SET-ERROR",error:e}},E={isUserRegistered:!1,error:""},C=function(e){return{type:"register/SET-ERROR",value:e}},I=a(0),L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.register})),a=Object(u.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<4&&(t.password="Invalid password - Must be 4 characters or more"):t.password="Required",e.confirmPassword?e.password!==e.confirmPassword&&(t.confirmPassword="Mismatch passwords"):t.confirmPassword="Required",t},onSubmit:function(t){var r,s=t.email,c=t.password;e((r={email:s,password:c},function(){var e=Object(h.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k("loading")),e.prev=1,e.next=4,v(r);case 4:a=e.sent,console.log(a),t({type:"register/NEW-USER-CREATED",value:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("this error is ".concat(e.t0)),t(C(e.t0.response.data.error));case 13:return e.prev=13,t(k("succeeded")),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(t){return e.apply(this,arguments)}}())),a.resetForm()}});return t.isUserRegistered?Object(I.jsx)(n.a,{to:"/login"}):(t.error&&(alert(t.error),e(C(""))),Object(I.jsx)("div",{className:j.a.registerBlock,children:Object(I.jsxs)("div",{className:j.a.registerCard,children:[Object(I.jsx)("h1",{className:j.a.title,children:"It-incubator"}),Object(I.jsx)("h2",{children:"Sign Up"}),Object(I.jsx)("form",{onSubmit:a.handleSubmit,children:Object(I.jsxs)("div",{className:j.a.formBlock,children:[Object(I.jsxs)("div",{className:j.a.inputItem,children:[Object(I.jsx)("label",{htmlFor:"email",className:j.a.labelTitle,children:"Email"}),Object(I.jsx)("input",Object(l.a)({},a.getFieldProps("email"))),Object(I.jsx)("div",{style:{color:"red",height:"10px"},children:a.touched.email&&a.errors.email&&a.errors.email})]}),Object(I.jsxs)("div",{className:j.a.inputItem,children:[Object(I.jsx)("label",{htmlFor:"password",className:j.a.labelTitle,children:"Password"}),Object(I.jsx)("input",Object(l.a)({type:"password"},a.getFieldProps("password"))),Object(I.jsx)("div",{style:{color:"red",height:"10px"},children:a.touched.password&&a.errors.password&&a.errors.password})]}),Object(I.jsxs)("div",{className:j.a.inputItem,children:[Object(I.jsx)("label",{htmlFor:"confirmPassword",className:j.a.labelTitle,children:"Confirm Password"}),Object(I.jsx)("input",Object(l.a)({type:"password"},a.getFieldProps("confirmPassword"))),Object(I.jsx)("div",{style:{color:"red",height:"10px"},children:a.touched.confirmPassword&&a.errors.confirmPassword&&a.errors.confirmPassword})]}),Object(I.jsxs)("div",{className:j.a.buttonsBlock,children:[Object(I.jsx)("button",{type:"button",onClick:function(){a.resetForm()},children:" Cancel "}),Object(I.jsx)("button",{type:"submit",children:" Register "})]})]})})]})}))},S=a(6),y="/main",T="/login",R="/register",B="/restore-pass",F="/set-new-password",A="/404",z="/profile",U=a(9),D=a.n(U),M=function(){return Object(I.jsx)("nav",{children:Object(I.jsxs)("div",{className:D.a.nav,children:[Object(I.jsxs)("div",{className:D.a.item,children:[Object(I.jsx)(S.b,{to:y,activeClassName:D.a.activeLink,children:"main "}),"|"]}),Object(I.jsxs)("div",{className:D.a.item,children:[Object(I.jsx)(S.b,{to:T,activeClassName:D.a.activeLink,children:"login "}),"|"]}),Object(I.jsxs)("div",{className:D.a.item,children:[Object(I.jsx)(S.b,{to:R,activeClassName:D.a.activeLink,children:"register "}),"|"]}),Object(I.jsxs)("div",{className:D.a.item,children:[Object(I.jsx)(S.b,{to:A,activeClassName:D.a.activeLink,children:"err404 "}),"|"]}),Object(I.jsxs)("div",{className:D.a.item,children:[Object(I.jsx)(S.b,{to:B,activeClassName:D.a.activeLink,children:"forgot password "}),"|"]}),Object(I.jsxs)("div",{className:D.a.item,children:[Object(I.jsx)(S.b,{to:F,activeClassName:D.a.activeLink,children:"set password "}),"|"]}),Object(I.jsx)("div",{className:D.a.item,children:Object(I.jsx)(S.b,{to:z,activeClassName:D.a.activeLink,children:"profile "})})]})})},Z=a(30),W=a.n(Z),G=function(){return Object(I.jsxs)("div",{className:W.a.navLoginContainer,children:[Object(I.jsx)("div",{className:W.a.navLogotype,children:"IT-incubator"}),Object(I.jsxs)("nav",{className:W.a.navLinksBox,children:[Object(I.jsx)("div",{className:W.a.navLink,children:Object(I.jsx)(S.b,{to:y,children:"Packs list"})}),"|",Object(I.jsx)("div",{className:W.a.navLink,children:Object(I.jsx)(S.b,{to:z,children:"Profile"})})]})]})},q=function(){var e=Object(o.c)((function(e){return e.auth.isLogged}));return Object(I.jsx)("div",{children:e?Object(I.jsx)(G,{}):Object(I.jsx)(M,{})})},V=a(27),H=a.n(V),$={_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:new Date(2013,2,1,0,70),updated:new Date(2015,2,1,0,70),isAdmin:!1,verified:!1,rememberMe:!1,error:""},J=function(e){return{type:"profile/SET-USER-PROFILE-DATA",data:e}},K=function(e,t){return O.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},Q={isLogged:!1,message:"",checkMailPage:!1},Y=function(e){return{type:"auth/IS-LOGGED",isLogged:e}},X=function(e){return{type:"auth/SET-NEW_PASSWORD",message:e}},ee=function(){var e=Object(o.c)((function(e){return e.auth.message})),t=Object(n.g)().id,a=Object(o.b)(),r=Object(u.a)({initialValues:{password:""},validate:function(e){var t={};e.password?e.password.length<4&&(t.password="Invalid password - Must be 4 characters or more"):t.password="Required"},onSubmit:function(e){var s,c;a((s=e.password,c=t,function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k("loading")),e.next=4,K(s,c);case 4:e.sent,t(X("success")),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.error),w(e.t0,t),t(X("error"));case 13:return e.prev=13,t(k("succeeded")),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,8,13,16]])})));return function(t){return e.apply(this,arguments)}}())),r.resetForm()}});return"success"===e?Object(I.jsx)(n.a,{to:T}):Object(I.jsx)("div",{className:H.a.setNewPasswordBlock,children:Object(I.jsxs)("div",{className:H.a.setNewPasswordCard,children:[Object(I.jsx)("h1",{className:H.a.title,children:"It-incubator"}),Object(I.jsx)("h2",{children:"Set password"}),Object(I.jsx)("form",{onSubmit:r.handleSubmit,children:Object(I.jsxs)("div",{className:H.a.formBlock,children:[Object(I.jsxs)("div",{className:H.a.inputItem,children:[Object(I.jsx)("input",Object(l.a)({type:"password",placeholder:"Password"},r.getFieldProps("password"))),Object(I.jsxs)("div",{style:{color:"red",height:"10px"},children:[r.touched.password&&r.errors.password&&r.errors.password,"error"===e&&"SOME ERROR. TRY AGAIN"]})]}),Object(I.jsx)("div",{className:H.a.innerText,children:"Create new password and we will send you further instructions to email"}),Object(I.jsx)("div",{className:H.a.buttonsBlock,children:Object(I.jsx)("button",{type:"submit",children:" Create new password "})})]})})]})})},te=a(2),ae=a.n(te),re=function(){return Object(I.jsxs)("div",{className:ae.a.container,children:[Object(I.jsxs)("div",{className:ae.a.rail,children:[Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.four,children:"4"}),Object(I.jsx)("div",{className:ae.a.stamp+" "+ae.a.zero,children:"0"})]}),Object(I.jsx)("div",{className:ae.a.world,children:Object(I.jsx)("div",{className:ae.a.forward,children:Object(I.jsxs)("div",{className:ae.a.box,children:[Object(I.jsx)("div",{className:ae.a.wall}),Object(I.jsx)("div",{className:ae.a.wall}),Object(I.jsx)("div",{className:ae.a.wall}),Object(I.jsx)("div",{className:ae.a.wall}),Object(I.jsx)("div",{className:ae.a.wall}),Object(I.jsx)("div",{className:ae.a.wall})]})})})]})},se=a(12),ce=a.n(se),ie=function(e){var t=e.formik;e.cancelHandler,Object(o.b)();return Object(I.jsx)("div",{className:ce.a.loginBlock,children:Object(I.jsxs)("div",{className:ce.a.loginCard,children:[Object(I.jsx)("h1",{className:ce.a.title,children:"It-incubator"}),Object(I.jsx)("h2",{children:"Sign In"}),Object(I.jsx)("form",{onSubmit:t.handleSubmit,children:Object(I.jsxs)("div",{className:ce.a.formBlock,children:[Object(I.jsxs)("div",{className:ce.a.inputItem,children:[Object(I.jsx)("label",{htmlFor:"email",className:ce.a.labelTitle,children:"Email"}),Object(I.jsx)("input",Object(l.a)({defaultValue:"nya-admin@nya.nya"},t.getFieldProps("email"))),Object(I.jsx)("div",{style:{color:"red",height:"10px"},children:t.touched.email&&t.errors.email&&t.errors.email})]}),Object(I.jsxs)("div",{className:ce.a.inputItem,children:[Object(I.jsx)("label",{htmlFor:"password",className:ce.a.labelTitle,children:"Password"}),Object(I.jsx)("input",Object(l.a)({defaultValue:"1qazxcvBG",type:"password"},t.getFieldProps("password"))),Object(I.jsx)("div",{style:{color:"red",height:"10px"},children:t.touched.password&&t.errors.password&&t.errors.password})]}),Object(I.jsx)("div",{className:ce.a.navLinkBlock,children:Object(I.jsx)(S.b,{to:B,className:ce.a.navLink,children:"Forgot password"})}),Object(I.jsxs)("div",{className:ce.a.inputItem,children:["Remember me",Object(I.jsx)("input",Object(l.a)(Object(l.a)({type:"checkbox"},t.getFieldProps("rememberMe")),{},{checked:t.values.rememberMe}))]}),Object(I.jsx)("div",{className:ce.a.buttonsBlock,children:Object(I.jsx)("button",{type:"submit",className:ce.a.button,children:" login"})}),Object(I.jsxs)("div",{children:["Don`t have an account?",Object(I.jsx)(S.b,{to:R,children:"Sing Up"})]})]})})]})})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth.isLogged})),a=Object(u.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?/^[A-Za-z0-9._%+-]{4,10}$/i.test(e.password)&&e.password.length<4&&(t.password="Invalid password - Must be 4 characters or more"):t.password="Required",t},onSubmit:function(t){var r,s=t.email,c=t.password,i=t.rememberMe;e((r={email:s,password:c,rememberMe:i},function(){var e=Object(h.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k("loading")),e.next=4,f(r);case 4:a=e.sent,t(Y(!0)),t(J(a)),t(k("succeeded")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),w(e.t0,t);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),a.resetForm()}});return t?Object(I.jsx)(n.a,{to:z}):Object(I.jsx)("div",{children:Object(I.jsx)(ie,{formik:a})})},oe=a.p+"static/media/1486.279ed7ee.gif",le=a(52),de=a.n(le),je=function(){return Object(I.jsx)("div",{className:de.a.preloaderContainer,children:Object(I.jsx)("img",{src:oe})})},ue=a(53),be=a(11),me=a.n(be),he=s.a.memo((function(e){e.error;var t=e.formik;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("form",{onSubmit:t.handleSubmit,children:Object(I.jsxs)("div",{className:me.a.formContainer,children:[Object(I.jsx)("div",{className:me.a.formBlock,children:Object(I.jsxs)("div",{className:me.a.inputItem,children:[Object(I.jsx)("label",{htmlFor:"email",className:me.a.labelTitle,children:"Email"}),Object(I.jsx)("input",Object(l.a)({value:t.values.email},t.getFieldProps("email"))),Object(I.jsx)("div",{style:{color:"red",height:"10px"},children:t.touched.email&&t.errors.email&&t.errors.email})]})}),Object(I.jsx)("div",{className:me.a.emailText,children:Object(I.jsx)("span",{children:"Enter your email address and we will send you further instruction"})}),Object(I.jsx)("div",{className:me.a.buttonItem,children:Object(I.jsx)("button",{type:"submit",children:" Send Instructions"})}),Object(I.jsx)("div",{className:me.a.passwordText,children:Object(I.jsx)("span",{children:"Did you remember your password?"})}),Object(I.jsx)("div",{className:me.a.loginLink,children:Object(I.jsx)(S.b,{to:T,children:"Try logging in"})})]})})})})),pe=a(28),Oe=a.n(pe),xe=a.p+"static/media/checkEmail.7adff45f.svg",ve=function(e){var t=e.email,a=e.setRedirectToCheckEmail;return Object(I.jsx)("div",{className:Oe.a.checkEmailPage,children:Object(I.jsxs)("div",{className:Oe.a.checkEmailContainer,children:[Object(I.jsx)("h1",{className:Oe.a.h1,children:"It-incubator"}),Object(I.jsxs)("div",{className:Oe.a.wrapper,children:[Object(I.jsx)("a",{className:Oe.a.chekEmailImg,href:"mailto:".concat(t),children:Object(I.jsx)("img",{onClick:function(){a(!1)},src:xe})}),Object(I.jsx)("span",{className:Oe.a.checkEmail,children:"Check Email"}),Object(I.jsxs)("span",{className:Oe.a.instructions,children:["We\u2019ve sent an Email with instructions to ",t]})]})]})})},fe=s.a.memo((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app.error})),a=Object(o.c)((function(e){return e.app.status})),s=Object(r.useState)(!1),c=Object(ue.a)(s,2),i=c[0],n=c[1],l=Object(u.a)({initialValues:{email:"",from:"test-front-admin <mail-tanja@mail.ru>",message:"<div style=\"background-color: lime; padding: 15px\">\n                    password recovery link: \n                        <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>\n                    </div>"},validate:function(e){var t={};e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required"},onSubmit:function(t){var a;e((a=t,function(e){e(k("loading")),g(a).then((function(t){200===t.status&&e(k("succeeded"))})).catch((function(t){w(t,e)}))})),n(!0)}});return i?Object(I.jsx)(ve,{email:l.values.email,setRedirectToCheckEmail:n}):Object(I.jsxs)("div",{children:["loading"===a&&Object(I.jsx)(je,{}),Object(I.jsx)("div",{className:me.a.registerBlock,children:Object(I.jsxs)("div",{className:me.a.registerCard,children:[Object(I.jsx)("h1",{className:me.a.title,children:"It-incubator"}),Object(I.jsx)("h2",{children:"Forgot your password?"}),Object(I.jsx)("div",{className:me.a.recoveryPasswordContainer,children:Object(I.jsx)(he,{error:t,formik:l})})]})})]})})),_e=a(26),ge=a.n(_e),we=function(e){e.isLogged;var t=e.profile,a=e.isLogout,r=t.email,s=t.name,c=t.publicCardPacksCount,i=t.avatar;return Object(I.jsxs)("div",{className:ge.a.profileSidebar,children:[Object(I.jsx)("h1",{children:"PROFILE"}),Object(I.jsxs)("div",{className:ge.a.infoBlock,children:[Object(I.jsxs)("div",{children:["my name: ",s]}),Object(I.jsx)("div",{children:Object(I.jsx)("img",{width:"91%",src:i})}),Object(I.jsxs)("div",{children:["my email: ",r]}),Object(I.jsxs)("div",{children:["publicCardPacksCount: ",c]})]}),Object(I.jsx)("div",{className:ge.a.buttonLogout,children:Object(I.jsx)("button",{onClick:a,children:"logout"})})]})},Ne=function(){return Object(I.jsx)("div",{children:"PacksListTable"})},ke=function(){return Object(I.jsx)("div",{children:"Search"})},Pe=function(){return Object(I.jsx)("div",{children:"Paginator"})},Ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth.isLogged})),a=Object(o.c)((function(e){return e.profile})),r=a.name;return t?Object(I.jsxs)("div",{className:ge.a.pagesContainer,children:[Object(I.jsx)("div",{className:ge.a.sideBar,children:Object(I.jsx)(we,{isLogged:t,profile:a,isLogout:function(){e(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k("loading")),e.next=4,_();case 4:e.sent,t(Y(!1)),t(k("succeeded")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0,t);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}})}),Object(I.jsxs)("div",{className:ge.a.mainPart,children:[Object(I.jsx)("h2",{children:r}),Object(I.jsx)(ke,{}),Object(I.jsx)(Ne,{}),Object(I.jsx)(Pe,{})]})]}):Object(I.jsx)(n.a,{to:T})},Ce=function(){Object(o.b)();return Object(I.jsx)("div",{children:Object(I.jsx)("h1",{children:"MAIN"})})};var Ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app.isInitialized})),a=Object(o.c)((function(e){return e.app.status}));Object(r.useEffect)((function(){t||e(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k("loading")),e.prev=1,e.next=4,x();case 4:e.sent,t({type:"APP/SET-IS-INITIALIZED",isInitialized:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(e.t0,t);case 11:return e.prev=11,t(k("succeeded")),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var s="appContainer";return"loading"===a&&(s="appPreloader"),Object(I.jsxs)("div",{className:"app",children:["loading"===a&&Object(I.jsx)(je,{}),Object(I.jsxs)("div",{className:s,children:[Object(I.jsx)(q,{}),Object(I.jsxs)(n.d,{children:[Object(I.jsx)(n.b,{exact:!0,path:"/",render:function(){return Object(I.jsx)(n.a,{to:y})}}),Object(I.jsx)(n.b,{exact:!0,path:y,render:function(){return Object(I.jsx)(Ce,{})}}),Object(I.jsx)(n.b,{path:T,render:function(){return Object(I.jsx)(ne,{})}}),Object(I.jsx)(n.b,{path:R,render:function(){return Object(I.jsx)(L,{})}}),Object(I.jsx)(n.b,{path:"".concat(F,"/:id?"),render:function(){return Object(I.jsx)(ee,{})}}),Object(I.jsx)(n.b,{path:B,render:function(){return Object(I.jsx)(fe,{})}}),Object(I.jsx)(n.b,{path:z,render:function(){return Object(I.jsx)(Ee,{})}}),Object(I.jsx)(n.b,{path:A,render:function(){return Object(I.jsx)(re,{})}}),Object(I.jsx)(n.b,{path:"*",render:function(){return Object(I.jsx)(n.a,{to:A})}})]})]})]})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),s(e),c(e),i(e)}))},Se=a(18),ye=a(31),Te={},Re={},Be=a(54),Fe={redirectToCheckEmail:!1},Ae=Object(Se.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.error});case"APP/SET-IS-INITIALIZED":return Object(l.a)(Object(l.a)({},e),{},{isInitialized:t.isInitialized});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/IS-LOGGED":return Object(l.a)(Object(l.a)({},e),{},{isLogged:t.isLogged});case"auth/SET-NEW_PASSWORD":return Object(l.a)(Object(l.a)({},e),{},{message:t.message});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register/NEW-USER-CREATED":return Object(l.a)(Object(l.a)({},e),{},{isUserRegistered:t.value});case"register/SET-ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.value});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET-USER-PROFILE-DATA":return Object(l.a)({},t.data);default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;return e},redirect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e}}),ze=Object(Be.a)({reducer:Ae,middleware:function(e){return e().prepend(ye.a)}});window.__store__=ze,i.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(o.a,{store:ze,children:Object(I.jsx)(Ie,{})})})}),document.getElementById("root")),Le()},9:function(e,t,a){e.exports={nav:"Header_nav__3Wug3",item:"Header_item__5NHAR",activeLink:"Header_activeLink__1tLNU"}}},[[85,1,2]]]);
//# sourceMappingURL=main.c7275135.chunk.js.map