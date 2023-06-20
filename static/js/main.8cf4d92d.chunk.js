(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{123:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},137:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(28),i=n.n(o),s=n(109),u=n(275),d=(n(123),n(56)),m=n(44),l=n(20),j=n(14);!function(e){e.LOAD_COMMENTs="Unable to load data. Try again later!",e.ADD_COMMENT="Unable to add new comment. Try again later!",e.DELETE_COMMENT="Unable to delete comment. Try again later!",e.NONE=""}(r||(r={}));var b=n(34),f=n.n(b),O=n(49),p="https://dummyjson.com";function h(e){return new Promise((function(t){setTimeout(t,e)}))}var x=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(500);case 2:return t="".concat(p,"/comments"),e.abrupt("return",fetch(t).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(500);case 2:return n="".concat(p,"/comments/").concat(t),e.abrupt("return",fetch(n).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(500);case 2:return n="".concat(p,"/comments/add"),e.abrupt("return",fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:t,postId:3,userId:5})}).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={comments:[],loading:!1,error:r.NONE},C=Object(m.b)("comments/fetch",(function(){return x()})),N=Object(m.b)("comments/fetchDelete",(function(e){return y(e)})),E=Object(m.b)("comments/fetchAdd",(function(e){return g(e)})),T=Object(m.c)({name:"comments",initialState:v,reducers:{set:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{comments:t.payload})},setError:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{error:t.payload})}},extraReducers:function(e){e.addCase(C.pending,(function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})})),e.addCase(C.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{comments:t.payload.comments,loading:!1})})),e.addCase(C.rejected,(function(e){return Object(j.a)(Object(j.a)({},e),{},{error:r.LOAD_COMMENTs,loading:!1})})),e.addCase(N.pending,(function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})})),e.addCase(N.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{loading:!1,comments:e.comments.filter((function(e){return t.payload.id?e.id!==t.payload.id:e.id!==+t.payload.message.match(/\d+/)[0]}))})})),e.addCase(N.rejected,(function(e){return Object(j.a)(Object(j.a)({},e),{},{error:r.DELETE_COMMENT,loading:!1})})),e.addCase(E.pending,(function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})})),e.addCase(E.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{loading:!1,comments:[].concat(Object(l.a)(e.comments),[t.payload])})})),e.addCase(E.rejected,(function(e){return Object(j.a)(Object(j.a)({},e),{},{error:r.ADD_COMMENT,loading:!1})}))}}),w=T.reducer,D=T.actions,M=Object(m.a)({reducer:{comments:w}}),_=(n(132),n(277)),A=n(274),S=n(273),k=d.b,F=d.c,I=n(280),L=(n(133),n(1)),J=function(){return Object(L.jsx)("div",{className:"loader",children:Object(L.jsx)(I.a,{sx:{margin:"auto"}})})},U=n(281),q=n(268),B=(n(137),function(e){var t=e.comment,n=t.id,r=t.user,c=t.body,a=k();return Object(L.jsxs)("div",{className:"comment",children:[Object(L.jsxs)("div",{className:"comment__header",children:[Object(L.jsx)(_.a,{className:"comment__username",color:"text.secondary",children:r.username}),Object(L.jsx)("div",{className:"comment__button",children:Object(L.jsx)(U.a,{onClick:function(){return a(N(n))},children:Object(L.jsx)(q.a,{titleAccess:"delete"})})})]}),Object(L.jsx)(_.a,{variant:"body2",children:c})]})}),P=(n(140),function(){var e=F((function(e){return e.comments})).comments;return Object(L.jsx)("div",{className:"comments-list",children:e.map((function(e){return Object(L.jsx)(B,{comment:e},e.body)}))})}),z=n(12),H=n(271),R=n(279),W=n(105),G=n.n(W),K=(n(141),function(){var e=k(),t=Object(c.useState)(""),n=Object(z.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(!1),i=Object(z.a)(o,2),s=i[0],u=i[1],d=function(){return r?r&&r.length<10?"Comment body must be at least 10 characters long":r&&!G.a.isAscii(r)?"Comment body can only contain ASCII characters":" ":"Body is required"},m=" "===d(),l=function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e(E(r));case 3:t.sent.payload&&a("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=localStorage.getItem("comment");e&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("comment",r)}),[r]),Object(L.jsxs)("form",{className:"text-area",onSubmit:function(e){return l(e)},children:[Object(L.jsx)(H.a,{required:!0,error:!m&&s,id:"outlined-error-helper-text",placeholder:"Write your comment",multiline:!0,rows:5,helperText:s?d():" ",value:r,onChange:function(e){a(e.target.value)},onFocus:function(){return u(!0)}}),Object(L.jsx)(R.a,{type:"submit",disabled:!m,variant:"contained",children:"Add comment"})]})}),Q=function(){var e=F((function(e){return e.comments})),t=e.loading,n=e.error,a=e.comments,o=k();return Object(c.useEffect)((function(){o(C())}),[]),Object(L.jsxs)(L.Fragment,{children:[t&&Object(L.jsx)(J,{}),Object(L.jsxs)("div",{className:"app",children:[Object(L.jsx)(_.a,{variant:"h2",align:"center",color:"primary",children:0===a.length?"No comments yet":"All comments"}),Object(L.jsx)(P,{}),Object(L.jsx)(K,{})]}),Object(L.jsx)(A.a,{open:n!==r.NONE,autoHideDuration:5e3,onClose:function(){return o(D.setError(r.NONE))},anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(L.jsx)(S.a,{severity:"error",children:n})})]})},V=Object(s.a)({palette:{primary:{main:"#FCDCE2"},secondary:{main:"#FFFCFD"}}});i.a.render(Object(L.jsx)(d.a,{store:M,children:Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(u.a,{theme:V,children:Object(L.jsx)(Q,{})})})}),document.getElementById("root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.8cf4d92d.chunk.js.map