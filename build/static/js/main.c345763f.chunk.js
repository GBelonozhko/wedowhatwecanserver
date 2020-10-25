(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,a){e.exports=a(165)},139:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),l=a.n(o),c=(a(139),a(197)),i=a(199),s=a(201),u=a(90),m=a(168),d=a(107),p=a.n(d),E=a(53),f=a(108),h=a(109),b=a(43),g=a(11),v=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,a(15)),O=a.n(v),S=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},T=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},C=function(e){return function(t){setTimeout((function(){t(T())}),1e3*e)}},w=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function j(){var e=w(),t=Object(g.c)((function(e){return e.Auth.userId}));return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(p.a,null)),r.a.createElement(u.a,{variant:"h6",className:e.title},"We Do What We Can"),t&&r.a.createElement(m.a,{color:"inherit",href:"/dashboard"},r.a.createElement(E.b,null)),t&&r.a.createElement(m.a,{color:"inherit",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return T()},href:"/"},r.a.createElement(f.a,null)),!t&&r.a.createElement("div",null,r.a.createElement(m.a,{color:"inherit",href:"/signup"},r.a.createElement(b.b,null)," ",r.a.createElement(E.b,null)),"/"),!t&&r.a.createElement(m.a,{color:"secondary",href:"/signin",className:"mr-3"}," ",r.a.createElement(h.a,null)))))}var y=a(21),I=a(12),k=a(20),x=a(221),_=a(208),A=a(204),N=a(214),D=a(207),L=a(217),R=a(202),U=a(205),W=a(215),P=a(72),H=a.n(P),B=a(203);function F(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(R.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var V=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function M(){var e=V(),t=Object(n.useState)({firstname:"",lastname:"",email:"",password:"",password2:"",error:!1,success:!1}),a=Object(k.a)(t,2),o=a[0],l=a[1],c=o.firstname,i=o.lastname,s=o.email,m=o.password,d=o.password2,p=(o.success,o.error,function(e){return function(t){l(Object(I.a)(Object(I.a)({},o),{},Object(y.a)({error:!1},e,t.target.value)))}});return r.a.createElement(B.a,{component:"main",maxWidth:"xs"},r.a.createElement(A.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(x.a,{className:e.avatar},r.a.createElement(H.a,null)),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){var t;e.preventDefault(),m==d?(l(Object(I.a)(Object(I.a)({},o),{},{error:!1})),(t={firstname:c,lastname:i,email:s,password:m,password2:d},fetch("http://localhost:5000/api/signup",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?l(Object(I.a)(Object(I.a)({},o),{},{error:e.error,success:!1})):l(Object(I.a)(Object(I.a)({},o),{},{firstname:"",lastname:"",email:"",password:"",password2:"",error:"",success:!0}))}))):alert("Passwords Do Not Match")}},r.a.createElement(U.a,{container:!0,spacing:2},r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:p("firstname"),value:c})),r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:p("lastname"),value:i})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:s,onChange:p("email")})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:p("password"),value:m})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password",onChange:p("password2"),value:d})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(D.a,{control:r.a.createElement(L.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(U.a,{container:!0,justify:"flex-end"},r.a.createElement(U.a,{item:!0},r.a.createElement(R.a,{href:"./SignIn",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(W.a,{mt:5},r.a.createElement(F,null)))}var q=a(14);function K(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(R.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var G=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(){var e=G(),t=Object(g.b)(),a=Object(g.c)((function(e){return e.Auth})),o=Object(n.useState)({email:"",password:"",error:"",loading:!1,redirectToReferrer:!1}),l=Object(k.a)(o,2),c=l[0],i=l[1],s=c.email,m=c.password,d=(c.loading,c.error,c.redirectToReferrer,function(e){return function(t){i(Object(I.a)(Object(I.a)({},c),{},Object(y.a)({error:!1},e,t.target.value)))}});return r.a.createElement(B.a,{component:"main",maxWidth:"xs"},r.a.createElement(A.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(x.a,{className:e.avatar},r.a.createElement(H.a,null)),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:d("email"),value:s}),r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:m,onChange:d("password")}),r.a.createElement(D.a,{control:r.a.createElement(L.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),i(Object(I.a)(Object(I.a)({},c),{},{error:!1,loading:!0})),t(function(e,t,a){return function(n){n({type:"AUTH_START"});var r={email:e,password:t},o="https://wedowhatwecan.herokuapp.com/api/login";a||(o="https://wedowhatwecan.herokuapp.com/api/login"),O.a.post(o,r).then((function(e){var t=new Date((new Date).getTime()+1e8*e.data.expiresIn);localStorage.setItem("token",e.data.token),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.userId),n(S(e.data.token,e.data.userId)),n(C(e.data.expiresIn))})).catch((function(e){n({type:"AUTH_FAIL",error:e.response.data.error})}))}}(s,m,!0))}},"Sign In"),r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{item:!0,xs:!0},r.a.createElement(R.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(U.a,{item:!0},r.a.createElement(R.a,{href:"./SignUp",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(W.a,{mt:8},r.a.createElement(K,null)),function(){if(null!==a.userId)return r.a.createElement(q.a,{to:"/dashboard"})}())}a(163);var Y=a(85),z=a.n(Y),$=function(e){return{type:"SET_TODO_LISTS",todoLists:e}},Q=function(e){return{type:"SET_COMPLETE_COUNT",totalCompletes:e}},X=function(e){return function(t){O.a.get("api/todolisttasksCreated/".concat(e)).then((function(e){t(Z(e.data.totalTasks))}))}},Z=function(e){return{type:"SET_TOTAL_TASKS",totalTasks:e}},ee=function(){return{type:"FETCH_TODOS_FAILED"}},te=a(210),ae=a(206),ne=a(211),re=function(e,t){return Object(I.a)(Object(I.a)({},e),t)},oe=a(216),le=a(110),ce=a(75);function ie(){var e=Object(ce.useStopwatch)({autoStart:!0}),t=e.seconds,a=e.minutes,n=e.hours,o=e.days,l=e.isRunning,c=e.start,i=e.pause,s=e.reset;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Stop Watch"),r.a.createElement("p",null,"Stopwatch Demo"),r.a.createElement("div",{style:{fontSize:"100px"}},r.a.createElement("span",null,o),":",r.a.createElement("span",null,n),":",r.a.createElement("span",null,a),":",r.a.createElement("span",null,t)),r.a.createElement("p",null,l?"Running":"Not running"),r.a.createElement("button",{onClick:c},"Start"),r.a.createElement("button",{onClick:i},"Pause"),r.a.createElement("button",{onClick:s},"Reset"))}function se(e){var t=e.expiryTimestamp,a=Object(ce.useTimer)({expiryTimestamp:t,onExpire:function(){return console.warn("onExpire called")}}),n=a.seconds,o=a.minutes,l=a.hours,c=a.days,i=a.isRunning,s=a.start,u=a.pause,m=a.resume,d=a.restart;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"10min Timer "),r.a.createElement("p",null,"Timer Demo"),r.a.createElement("div",{style:{fontSize:"100px"}},r.a.createElement("span",null,c),":",r.a.createElement("span",null,l),":",r.a.createElement("span",null,o),":",r.a.createElement("span",null,n)),r.a.createElement("p",null,i?"Running":"Not running"),r.a.createElement("button",{onClick:s},"Start"),r.a.createElement("button",{onClick:u},"Pause"),r.a.createElement("button",{onClick:m},"Resume"),r.a.createElement("button",{onClick:function(){var e=new Date;e.setSeconds(e.getSeconds()+300),d(e)}},"Restart"))}function ue(){return Math.round(20*Math.random())-10}function me(){var e=50+ue(),t=50+ue();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var de=Object(c.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),pe=new Date;function Ee(){var e=de(),t=r.a.useState(me),a=Object(k.a)(t,1)[0],n=r.a.useState(!1),o=Object(k.a)(n,2),l=o[0],c=o[1],i=r.a.createElement("div",{style:a,className:e.paper},r.a.createElement(se,{expiryTimestamp:pe}),r.a.createElement(ie,null));return r.a.createElement("div",null,r.a.createElement(m.a,{type:"button",onClick:function(){c(!0)}},r.a.createElement(le.a,null)),r.a.createElement(oe.a,{open:l,onClose:function(){c(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},i))}pe.setSeconds(pe.getSeconds()+600);var fe=a(76),he=a(209);function be(e){var t=Object(g.c)((function(e){return e.Auth.userId})),a=Object(g.b)(),o=Object(n.useState)([]),l=Object(k.a)(o,2),c=l[0],i=l[1],s=Object(n.useState)(!1),d=Object(k.a)(s,2),p=(d[0],d[1]);Object(n.useEffect)((function(){O.a.get("/api/todolist/".concat(t,"/").concat(e.todoListName)).then((function(e){return i(e.data.todoData)}))}),[]);var f=function(a){var n=a;O.a.patch("api/archiveTodo/".concat(e.todoListName),{isVisibleData:n}).then(O.a.get("/api/todolist/".concat(t,"/").concat(e.todoListName)).then((function(e){return i(e.data.todoData)})))},h=function(e){var n=!0;n=e.isComplete!=n,O.a.patch("api/CompleteTodo/".concat(e._id),{isCompleteData:n}).then((function(e){O.a.get("api/todolistCompletes/".concat(t)).then((function(e){a(Q(e.data.Completes))}))}));var r=c.map((function(t,a){return t._id==e._id?Object(I.a)(Object(I.a)({},e),{},{isComplete:n}):c[a]}));i(r)},v=Object(n.useState)({title:e.todoListName,task:"",isComplete:!1,isVisible:!0,creator:t}),S=Object(k.a)(v,2),T=S[0],C=S[1],w=function(n){p(!0),O.a.post("/api/addTodo",{newtask:T}).then((function(n){console.log(n.data);var r=c;r.push(n.data),console.log(r),i(r),a(X(t)),p(!1),C({title:e.todoListName,task:"",isComplete:!1,isVisible:!0,creator:t})}))};return r.a.createElement("div",{className:"TDLbackground"},r.a.createElement(B.a,{maxWidth:"sm"},1==e.controlers&&r.a.createElement("div",null,r.a.createElement(N.a,{fullWidth:!0,variant:"outlined",label:"Add New Todo",type:"text",name:"task",value:T.task,onChange:function(e){return t=e,void C(Object(I.a)(Object(I.a)({},T),{},Object(y.a)({},t.target.name,t.target.value)));var t},onKeyDown:function(e){13==e.keyCode&&w()},InputProps:{endAdornment:r.a.createElement(he.a,{position:"start"},r.a.createElement(m.a,{color:"primary",onClick:w}," ",r.a.createElement(fe.a,null)," "))}}),r.a.createElement(m.a,{onClick:function(){return f(!1)}}," ",r.a.createElement(b.a,null)," ")," ",r.a.createElement(m.a,{className:"float-right",onClick:function(){return f(!0)}}," ",r.a.createElement(b.c,null)," "),r.a.createElement(te.a,null)),r.a.createElement(ae.a,null,c.map((function(e,n){return r.a.createElement("div",null,r.a.createElement(U.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},1==e.isVisible?r.a.createElement(ne.a,{key:n},r.a.createElement(U.a,{xs:2},r.a.createElement(m.a,{size:"small",onClick:function(){return function(e,n){O.a.delete("/api/deletetodo/".concat(e)).then(i((function(t){return t.filter((function(t){return t._id!==e}))}))).then(a(X(t)))}(e._id)}},r.a.createElement(E.a,null))),r.a.createElement(U.a,{xs:9},r.a.createElement(u.a,{className:e.isComplete?"complete":null,align:"center",onClick:function(){return h(e)}},e.task," ",r.a.createElement("br",null)," ",z()(e.createdAt).fromNow(!0)," ago")),0==e.isComplete?r.a.createElement(U.a,{xs:1,className:"mr-2"},r.a.createElement(Ee,null)):r.a.createElement(U.a,{xs:1}),r.a.createElement(U.a,{xs:1,className:"mr-2"},r.a.createElement(L.a,{onChange:function(){return h(e)},checked:e.isComplete}))):null))})))))}var ge=a(218),ve=a(212),Oe=a(89),Se=a.n(Oe);function Te(e){var t=Object(g.c)((function(e){return e.Auth.userId})),a=Object(n.useState)(!1),o=Object(k.a)(a,2),l=(o[0],o[1]),c=Object(n.useState)({title:"",creator:t,task:"create a list",isComplete:!1,isVisible:!0}),i=Object(k.a)(c,2),s=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(N.a,{fullWidth:!0,variant:"standard",label:"Add New Todo List",type:"text",name:"title",value:s.title,onChange:function(e){return function(e){var a;l(!0),u((a={},Object(y.a)(a,e.target.name,e.target.value),Object(y.a)(a,"task","create a list"),Object(y.a)(a,"creator",t),a)),l(!1)}(e)},InputProps:{endAdornment:r.a.createElement(he.a,{position:"start"},r.a.createElement(m.a,{color:"primary",onClick:function(){return O.a.post("/api/addTodo/",{newtask:s}),void u({title:"",creator:t,task:"create a list",isComplete:!1,isVisible:!0})}}," ",r.a.createElement(fe.a,null)," "))}})))}function Ce(e){var t=Object(g.b)(),a=Object(g.c)((function(e){return e.Auth.userId})),o=Object(g.c)((function(e){return e.Todos.todoLists})),l=Object(g.c)((function(e){return e.Todos.totalCompletes})),c=Object(g.c)((function(e){return e.Todos.totalTasks}));return Object(n.useEffect)((function(){t(function(e){return function(t){O.a.get("api/todolistCompletes/".concat(e)).then((function(e){t(Q(e.data.Completes))}))}}(a)),t(function(e){return function(t){O.a.get("api/todolists/".concat(e),{params:{userId:e}}).then((function(e){console.log(e.data.todos),t($(e.data.todos))})).catch((function(e){t(ee())}))}}(a)),t(X(a))}),[]),r.a.createElement("div",null,r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-start"},r.a.createElement(U.a,{xs:12,md:6},r.a.createElement(ge.a,null,r.a.createElement(ve.a,{expandIcon:r.a.createElement(Se.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},"Todays Agenda"),r.a.createElement(be,{todoListName:"TodaysAgenda",controlers:!1}))),r.a.createElement(U.a,{xs:12,md:4},r.a.createElement("h1",null,l," / ",c),r.a.createElement(Te,null),console.log(o),o.map((function(e){return r.a.createElement(ge.a,null,r.a.createElement(ve.a,{expandIcon:r.a.createElement(Se.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},e),r.a.createElement(be,{todoListName:e,controlers:!0}))})))))}var we=a(114),je=a(78),ye=a.n(je),Ie=a(79),ke=a.n(Ie),xe=a(34),_e=a(111),Ae=a(112),Ne=a(113),De=a.n(Ne),Le={email:""};var Re={token:localStorage.getItem("token"),userId:localStorage.getItem("userId"),error:null,loading:!1,authRedirectPath:"/"},Ue=function(e,t){return re(e,{error:null,loading:!0})},We=function(e,t){return re(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Pe=function(e,t){return re(e,{error:t.error,loading:!1})},He=function(e,t){return re(e,{token:null,userId:null})},Be=function(e,t){return re(e,{authRedirectPath:t.path})},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Ue(e);case"AUTH_SUCCESS":return We(e,t);case"AUTH_FAIL":return Pe(e,t);case"AUTH_LOGOUT":return He(e);case"SET_AUTH_REDIRECT_PATH":return Be(e,t);default:return e}},Ve=a(115),Me={articles:[]};var qe={todoLists:[],totalCompletes:0,totalTasks:0},Ke=function(e,t){return re(e,{todoLists:t.todoLists})},Ge=function(e,t){return re(e,{todos:t.todoListData})},Je=function(e,t){return re(e,{totalCompletes:t.totalCompletes})},Ye=function(e,t){return re(e,{totalTasks:t.totalTasks})},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODO_LISTS":return Ke(e,t);case"SET_TODOS":return Ge(e,t);case"SET_COMPLETE_COUNT":return Je(e,t);case"SET_TOTAL_TASKS":return Ye(e,t);default:return e}},$e=Object(xe.combineReducers)({Subscribe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(t.payload,a){case"SUBSCRIBE_FAIL":case"SUBSCRIBE_NL":return t.subscriber;case"GET_SUBSCRIBERS":return t.email;case"REMOVE_SUBSCRIBER":return e.filter((function(e){return e._id!==t._id}));default:return e}},Auth:Fe,articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES":return t.articles;case"ADD_ARTICLE":return[t.article].concat(Object(Ve.a)(e));case"REMOVE_ARTICLE":return e.filter((function(e){return e._id!==t._id}));case"REPLACE_ARTICLE":return e.map((function(e){return e._id===t.article._id?Object(I.a)(Object(I.a)({},e),{},{title:t.article.title,content:t.article.content}):e}));default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLE":return t.article;default:return e}},Todos:ze});var Qe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Xe=Object(_e.composeWithDevTools)({name:"Redux",realtime:!0,trace:!0,traceLimit:25}),Ze=Object(xe.createStore)($e,Qe,Xe(Object(xe.applyMiddleware)(Ae.a,De.a))),et=a(60);function tt(){return r.a.createElement("h1",null,"HelloWorldfromHome")}function at(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HelloWorld"),r.a.createElement(Ce,null))}var nt=a(213),rt=function(){var e=Object(g.b)();Object(n.useEffect)((function(){e((function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(T());else{var n=localStorage.getItem("userId");e(S(t,n)),e(C((a.getTime()-(new Date).getTime())/1e3))}}else e(T())}))}),[]);Object(g.c)((function(e){return e.Auth}));var t=Object(we.a)({palette:{primary:ye.a,secondary:ke.a},status:{danger:"orange"}});return r.a.createElement(nt.a,{theme:t},r.a.createElement(et.a,null,r.a.createElement(j,null),r.a.createElement(q.d,null,r.a.createElement(q.b,{exact:!0,path:"/",component:tt}),r.a.createElement(q.b,{path:"/SignUp",exact:!0,component:M}),r.a.createElement(q.b,{path:"/SignIn",exact:!0,component:J}),r.a.createElement(q.b,{path:"/todolist",exact:!0,component:Ce}),r.a.createElement(q.b,{path:"/dashboard",exact:!0,component:at}))))},ot=function(){Object(we.a)({palette:{primary:ye.a,secondary:ke.a},status:{danger:"orange"}});return r.a.createElement(g.a,{store:Ze},r.a.createElement(rt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.c345763f.chunk.js.map