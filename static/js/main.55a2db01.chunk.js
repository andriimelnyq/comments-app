(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{123:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(28),o=n.n(a),i=n(109),s=n(276),u=(n(123),n(57)),d=n(45),m=n(20),j=n(17),l=function(e){return e.LOAD_COMMENTS="Unable to load data. Try again later!",e.ADD_COMMENT="Unable to add new comment. Try again later!",e.DELETE_COMMENT="Unable to delete comment. Try again later!",e.NONE="",e}({}),b=n(35),O=n(49),f=n(272),p="https://dummyjson.com";function h(e){return new Promise((function(t){setTimeout(t,e)}))}var x=function(){var e=Object(O.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(500);case 2:return t="".concat(p,"/comments"),e.abrupt("return",f.a.get(t).then((function(e){return e.data})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(500);case 2:return n="".concat(p,"/comments/").concat(t),e.abrupt("return",fetch(n).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(500);case 2:return n="".concat(p,"/comments/add"),r={body:t,postId:3,userId:5},e.abrupt("return",f.a.post(n,r).then((function(e){return e.data})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={comments:[],loading:!1,error:l.NONE},C=Object(d.b)("comments/fetch",(function(){return x()})),E=Object(d.b)("comments/fetchDelete",(function(e){return y(e)})),N=Object(d.b)("comments/fetchAdd",(function(e){return g(e)})),w=Object(d.c)({name:"comments",initialState:v,reducers:{set:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{comments:t.payload})},setError:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{error:t.payload})}},extraReducers:function(e){e.addCase(C.pending,(function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})})),e.addCase(C.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{comments:t.payload.comments,loading:!1})})),e.addCase(C.rejected,(function(e){return Object(j.a)(Object(j.a)({},e),{},{error:l.LOAD_COMMENTS,loading:!1})})),e.addCase(E.pending,(function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})})),e.addCase(E.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{loading:!1,comments:e.comments.filter((function(e){return t.payload.id?e.id!==t.payload.id:e.id!==+t.payload.message.match(/\d+/)[0]}))})})),e.addCase(E.rejected,(function(e){return Object(j.a)(Object(j.a)({},e),{},{error:l.DELETE_COMMENT,loading:!1})})),e.addCase(N.pending,(function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})})),e.addCase(N.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{loading:!1,comments:[].concat(Object(m.a)(e.comments),[t.payload])})})),e.addCase(N.rejected,(function(e){return Object(j.a)(Object(j.a)({},e),{},{error:l.ADD_COMMENT,loading:!1})}))}}),D=w.reducer,M=w.actions,T=Object(d.a)({reducer:{comments:D}}),_=(n(134),n(278)),S=n(275),k=n(274),A=u.b,F=u.c,I=n(281),L=(n(135),n(2)),U=function(){return Object(L.jsx)("div",{className:"loader",children:Object(L.jsx)(I.a,{sx:{margin:"auto"}})})},q=n(282),B=n(267),J=(n(137),function(e){var t=e.comment,n=t.id,r=t.user,c=t.body,a=A();return Object(L.jsxs)("div",{className:"comment",children:[Object(L.jsxs)("div",{className:"comment__header",children:[Object(L.jsx)(_.a,{className:"comment__username",color:"text.secondary",children:r.username}),Object(L.jsx)("div",{className:"comment__button",children:Object(L.jsx)(q.a,{onClick:function(){return a(E(n))},children:Object(L.jsx)(B.a,{titleAccess:"delete"})})})]}),Object(L.jsx)(_.a,{variant:"body2",children:c})]})}),z=(n(138),function(){var e=F((function(e){return e.comments})).comments;return Object(L.jsx)("div",{className:"comments-list",children:e.map((function(e){return Object(L.jsx)(J,{comment:e},e.body)}))})}),H=n(13),P=n(271),R=n(280),W=n(106),G=n.n(W),K=(n(139),function(){var e=A(),t=Object(r.useState)(""),n=Object(H.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(!1),i=Object(H.a)(o,2),s=i[0],u=i[1],d=function(){return c?c&&c.length<10?"Comment body must be at least 10 characters long":c&&!G.a.isAscii(c)?"Comment body can only contain ASCII characters":" ":"Body is required"},m=" "===d(),j=function(){var t=Object(O.a)(Object(b.a)().mark((function t(n){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e(N(c));case 3:t.sent.payload&&a("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=localStorage.getItem("comment");e&&a(e)}),[]),Object(r.useEffect)((function(){localStorage.setItem("comment",c)}),[c]),Object(L.jsxs)("form",{className:"text-area",onSubmit:function(e){return j(e)},children:[Object(L.jsx)(P.a,{required:!0,error:!m&&s,id:"outlined-error-helper-text",placeholder:"Write your comment",multiline:!0,rows:5,helperText:s?d():" ",value:c,onChange:function(e){a(e.target.value)},onFocus:function(){return u(!0)}}),Object(L.jsx)(R.a,{type:"submit",disabled:!m,variant:"contained",children:"Add comment"})]})}),Q=function(){var e=F((function(e){return e.comments})),t=e.loading,n=e.error,c=e.comments,a=A();return Object(r.useEffect)((function(){a(C())}),[]),Object(L.jsxs)(L.Fragment,{children:[t&&Object(L.jsx)(U,{}),Object(L.jsxs)("div",{className:"app",children:[Object(L.jsx)(_.a,{variant:"h2",align:"center",color:"primary",children:0===c.length?"No comments yet":"Comments"}),Object(L.jsx)(z,{}),Object(L.jsx)(K,{})]}),Object(L.jsx)(S.a,{open:n!==l.NONE,autoHideDuration:5e3,onClose:function(){return a(M.setError(l.NONE))},anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(L.jsx)(k.a,{severity:"error",children:n})})]})},V=Object(i.a)({palette:{primary:{main:"#FCDCE2"},secondary:{main:"#FFFCFD"}}});o.a.render(Object(L.jsx)(u.a,{store:T,children:Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(s.a,{theme:V,children:Object(L.jsx)(Q,{})})})}),document.getElementById("root"))}},[[221,1,2]]]);
//# sourceMappingURL=main.55a2db01.chunk.js.map