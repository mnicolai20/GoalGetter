(this.webpackJsonpgoalgetter=this.webpackJsonpgoalgetter||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},44:function(e,t,a){},65:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),o=a.n(r),c=(a(44),a(25),a(21)),s=a(5),i=a(9),m=a(10),u=a(12),p=a(11),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title of new goal"),l.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"New Goal"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"categories"),l.a.createElement("select",{multiple:!0,className:"form-control",id:"exampleFormControlSelect2"},l.a.createElement("optgroup",{label:"health"},l.a.createElement("option",null,"Sleep"),l.a.createElement("option",null,"Nutrition"),l.a.createElement("option",null,"Stress Relief")),l.a.createElement("optgroup",{label:"travel"},l.a.createElement("option",null,"The U.S"),l.a.createElement("option",null,"Europe"),l.a.createElement("option",null,"Asia")),l.a.createElement("optgroup",{label:"fitness"},l.a.createElement("option",null,"Running"),l.a.createElement("option",null,"Weight Training"),l.a.createElement("option",null,"Special Events")),l.a.createElement("optgroup",{label:"personal finance"},l.a.createElement("option",null,"Investments"),l.a.createElement("option",null,"Saving"),l.a.createElement("option",null,"Spending")),l.a.createElement("optgroup",{label:"business"},l.a.createElement("option",null,"Networking Events"),l.a.createElement("option",null,"Ideas"),l.a.createElement("option",null,"Mentoring")),l.a.createElement("optgroup",{label:"Recreational Activities"},l.a.createElement("option",null,"Softball"),l.a.createElement("option",null,"Happy Hour"),l.a.createElement("option",null," Kickball")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create new goal"))}}]),a}(l.a.Component),g=a(17),d=a(15),h=a(74),b=a(75),f=a(18),v=a.n(f),w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:"",confirmPassword:""},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.post("/api/auth/signup",{username:this.state.username,password:this.state.password}).then((function(e){console.log(e),e.data.errmsg?console.log("username already taken"):(console.log("successful signup"),t.getSnapshotBeforeUpdate({redirectTo:"/homepage"}))})).catch((function(e){console.log("signup error"),console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"page"},l.a.createElement("h4",{className:"title"},"Sign up"),l.a.createElement(h.a,{className:"signupSheet"},l.a.createElement(h.a.Group,{controlId:"formBasicEmail",className:"usernameLine"},l.a.createElement(h.a.Label,null,"Create Username"),l.a.createElement(h.a.Control,{type:"input",name:"username",placeholder:"Enter username"})),l.a.createElement(h.a.Group,{controlId:"formBasicPassword",className:"usernameLine"},l.a.createElement(h.a.Label,null,"Password"),l.a.createElement(h.a.Control,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),l.a.createElement(b.a,{variant:"primary",type:"submit",onClick:this.handleSubmit},"Submit")))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(w,null)}}]),a}(n.Component),y=(a(65),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.post("/user/login",{username:this.state.username,password:this.state.password}).then((function(e){console.log(e),200===e.status&&(t.props.updateUser({loggedIn:!0,username:e.data.username}),t.setState({redirectTo:"/"}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(s.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement("div",{className:"page"},l.a.createElement("h4",{className:"title"},"Log In"),l.a.createElement(h.a,null,l.a.createElement(h.a.Group,{controlId:"formBasicEmail",className:"usernameLine"},l.a.createElement(h.a.Label,null,"Username"),l.a.createElement(h.a.Control,{type:"input",name:"username",placeholder:"Enter username",value:this.state.username,onChange:this.handleChange})),l.a.createElement(h.a.Group,{controlId:"formBasicPassword",className:"usernameLine"},l.a.createElement(h.a.Label,null,"Password"),l.a.createElement(h.a.Control,{type:"input",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("hr",null),l.a.createElement(b.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,className:"submit sub1"},"Submit"),l.a.createElement(b.a,{variant:"danger",type:"submit",href:"/signup",className:"submit sub2"},"Sign Up!"))))}}]),a}(n.Component)),S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(y,null)}}]),a}(n.Component);a(69);var C=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title of new goal"),l.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"New Goal"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"categories"),l.a.createElement("select",{multiple:!0,className:"form-control",id:"exampleFormControlSelect2"},l.a.createElement("optgroup",{label:"health"},l.a.createElement("option",null,"Sleep"),l.a.createElement("option",null,"Nutrition"),l.a.createElement("option",null,"Stress Relief")),l.a.createElement("optgroup",{label:"travel"},l.a.createElement("option",null,"The U.S"),l.a.createElement("option",null,"Europe"),l.a.createElement("option",null,"Asia")),l.a.createElement("optgroup",{label:"fitness"},l.a.createElement("option",null,"Running"),l.a.createElement("option",null,"Weight Training"),l.a.createElement("option",null,"Special Events")),l.a.createElement("optgroup",{label:"personal finance"},l.a.createElement("option",null,"Investments"),l.a.createElement("option",null,"Saving"),l.a.createElement("option",null,"Spending")),l.a.createElement("optgroup",{label:"business"},l.a.createElement("option",null,"Networking Events"),l.a.createElement("option",null,"Ideas"),l.a.createElement("option",null,"Mentoring")),l.a.createElement("optgroup",{label:"Recreational Activities"},l.a.createElement("option",null,"Softball"),l.a.createElement("option",null,"Happy Hour"),l.a.createElement("option",null," Kickball")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create new goal"),l.a.createElement(C,null))}}]),a}(l.a.Component);a(70);var O=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}}),l.a.createElement("div",{className:"logo text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children))},k=a(72),x=a(73),I=a(37);var T=function(){return l.a.createElement("div",null,l.a.createElement(O,{backgroundImage:"./images/createGs1.jpg"}),l.a.createElement(k.a,{style:{marginTop:30}},l.a.createElement(x.a,null,l.a.createElement(I.a,{size:"md-12"},l.a.createElement("img",{src:"../images/logo5.png",alt:"Goal Getter Logo",className:"logo"})),l.a.createElement(b.a,{variant:"light",size:"lg",block:!0,className:"createBtn"},"Create New Goals"),l.a.createElement(b.a,{variant:"dark",size:"lg",block:!0,className:"updateBtn"},"View/Update Goals"),l.a.createElement(b.a,{variant:"dark",size:"lg",block:!0,className:"connectBtn"},"Connect with Other Users")),l.a.createElement(x.a,null)))};var G=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(s.b,{exact:!0,path:"/",component:S}),l.a.createElement(s.b,{exact:!0,path:"/signup",component:N}),l.a.createElement(s.b,{exact:!0,path:"/newgoals",component:E}),l.a.createElement(s.b,{exact:!0,path:"/updategoal",component:j}),l.a.createElement(s.b,{exact:!0,path:"/homepage",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e0eb18ea.chunk.js.map