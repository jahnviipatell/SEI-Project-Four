/*! For license information please see main.673b5db7.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,s,t){},230:function(e,s,t){"use strict";t.r(s);var i=t(0),l=t(19),a=t.n(l),n=(t(109),t(10)),c=t.n(n),o=t(20),r=t(7),j=t(21),b=t.n(j),d=t(101),u=t(102),h=t(15),O=t(59),m=t(44),p=function(){var e=window.localStorage.getItem("token");if(!e)return!1;var s=e.split(".");return!(s.length<3)&&JSON.parse(atob(s[1]))},x=function(){var e=p();return!!e&&Math.round(Date.now()/1e3)<e.exp},g=t(103),N=t(42),I=t(31),f="data:image/png;base64,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",w=t(1);N.defaults.global.legend.position="bottom";var v=function(){var e=Object(i.useState)(""),s=Object(r.a)(e,2),t=s[0],l=s[1];Object(i.useEffect)((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){var s,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/questions/");case 2:s=e.sent,t=s.data,l(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var a=Object(i.useState)(0),n=Object(r.a)(a,2),j=n[0],p=n[1],v=Object(i.useState)(0),k=Object(r.a)(v,2),y=k[0],C=k[1],A=Object(i.useState)({one:!1,two:!1,three:!1,four:!1,five:!1,question:0}),S=Object(r.a)(A,2),E=S[0],q=S[1],T=Object(i.useState)({one:"",two:"",three:"",four:"",five:"",question:""}),D=Object(r.a)(T,2),G=D[0],F=D[1],H=[1,6,11,16,21,26,31,36,41,46],B=[2,7,12,17,22,27,32,37,42,47],M=[3,8,13,18,23,28,33,38,43,48],L=[4,9,14,19,24,29,34,39,44,49],R=[5,10,15,20,25,30,35,40,45,50],Q=Object(i.useState)(0),Z=Object(r.a)(Q,2),P=Z[0],V=Z[1],Y=Object(i.useState)(0),z=Object(r.a)(Y,2),U=z[0],J=z[1],W=Object(i.useState)(0),K=Object(r.a)(W,2),X=K[0],_=K[1],$=Object(i.useState)(0),ee=Object(r.a)($,2),se=ee[0],te=ee[1],ie=Object(i.useState)(0),le=Object(r.a)(ie,2),ae=le[0],ne=le[1],ce=Object(i.useState)(0),oe=Object(r.a)(ce,2),re=oe[0],je=oe[1],be=Object(i.useState)(0),de=Object(r.a)(be,2),ue=de[0],he=de[1],Oe=Object(i.useState)(0),me=Object(r.a)(Oe,2),pe=me[0],xe=me[1],ge=Object(i.useState)(0),Ne=Object(r.a)(ge,2),Ie=Ne[0],fe=Ne[1],we=Object(i.useState)(0),ve=Object(r.a)(we,2),ke=ve[0],ye=ve[1],Ce=0,Ae=0,Se=0,Ee=0,qe=0,Te=Object(i.useState)(0),De=Object(r.a)(Te,2),Ge=De[0],Fe=De[1],He=function(e){if(console.log("VALUE",e.target.innerHTML),console.log("CurrentQuestion",j),"1"===e.target.innerHTML){var s={one:!0,two:!1,three:!1,four:!1,five:!1,question:t[j].question_number};H.includes(j+1)?(console.log("e includes this question"),Ce=1,console.log("ScoreE",Ce)):B.includes(j+1)?(console.log("a includes this questions"),Ae=1,console.log("ScoreA",Ae)):M.includes(j+1)?(console.log("c includes this questions"),Se=1,console.log("ScoreC",Se)):L.includes(j+1)?(console.log("n includes this questions"),Ee=1,console.log("ScoreN",Ee)):R.includes(j+1)&&(console.log("o includes this questions"),qe=1,console.log("ScoreO",qe)),q(s),console.log(E),je(Ce),he(Ae),xe(Se),fe(Ee),ye(qe)}else if("2"===e.target.innerHTML){var i={one:!1,two:!0,three:!1,four:!1,five:!1,question:t[j].question_number};H.includes(j+1)?(console.log("e includes this question"),Ce=2,console.log("ScoreE",Ce)):B.includes(j+1)?(console.log("a includes this questions"),Ae=2):M.includes(j+1)?(console.log("c includes this questions"),Se=2):L.includes(j+1)?(console.log("n includes this questions"),Ee=2):R.includes(j+1)&&(console.log("o includes this questions"),qe=2),q(i),console.log(E),je(Ce),he(Ae),xe(Se),fe(Ee),ye(qe)}else if("3"===e.target.innerHTML){var l={one:!1,two:!1,three:!0,four:!1,five:!1,question:t[j].question_number};H.includes(j+1)?(console.log("e includes this question"),Ce=3,console.log("ScoreE",Ce)):B.includes(j+1)?(console.log("a includes this questions"),Ae=3):M.includes(j+1)?(console.log("c includes this questions"),Se=3):L.includes(j+1)?(console.log("n includes this questions"),Ee=3):R.includes(j+1)&&(console.log("o includes this questions"),qe=3),q(l),console.log(E),je(Ce),he(Ae),xe(Se),fe(Ee),ye(qe)}else if("4"===e.target.innerHTML){var a={one:!1,two:!1,three:!1,four:!0,five:!1,question:t[j].question_number};H.includes(j+1)?(console.log("e includes this question"),Ce=4,console.log("ScoreE",Ce)):B.includes(j+1)?(console.log("a includes this questions"),Ae=4):M.includes(j+1)?(console.log("c includes this questions"),Se=4):L.includes(j+1)?(console.log("n includes this questions"),Ee=4):R.includes(j+1)&&(console.log("o includes this questions"),qe=4),q(a),console.log(E),je(Ce),he(Ae),xe(Se),fe(Ee),ye(qe)}else if("5"===e.target.innerHTML){var n={one:!1,two:!1,three:!1,four:!1,five:!0,question:t[j].question_number};H.includes(j+1)?(console.log("e includes this question"),Ce=5,console.log("ScoreE",Ce)):B.includes(j+1)?(console.log("a includes this questions"),Ae=5):M.includes(j+1)?(console.log("c includes this questions"),Se=5):L.includes(j+1)?(console.log("n includes this questions"),Ee=5):R.includes(j+1)&&(console.log("o includes this questions"),qe=5),q(n),console.log(E),je(Ce),he(Ae),xe(Se),fe(Ee),ye(qe)}else console.log("SetAnswer Error")},Be=function(){var e=Object(o.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(j+1),C(y+2),V(P+re),console.log("Extroversion",P),J(U+ue),_(X+pe),te(se+Ie),ne(ae+ke),e.prev=8,s=window.localStorage.getItem("token"),e.next=12,b.a.post("/api/answers/",E,{headers:{Authorization:"Bearer ".concat(s)}});case 12:console.log("POSTED ANSWER TO DB"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),F(e.t0.response.data),console.log(G);case 19:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(o.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("set results here"),Fe(Ge+1),console.log(Ge),C(y+2),V(P+re),console.log("Extroversion",P),J(U+ue),_(X+pe),te(se+Ie),ne(ae+ke),e.prev=10,s=window.localStorage.getItem("token"),e.next=14,b.a.post("/api/answers/",E,{headers:{Authorization:"Bearer ".concat(s)}});case 14:console.log("POSTED ANSWER TO DB"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(10),F(e.t0.response.data),console.log(G);case 21:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(){return e.apply(this,arguments)}}(),Le=Object(i.useState)(!1),Re=Object(r.a)(Le,2),Qe=Re[0],Ze=Re[1];return t?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"app-description",children:[Object(w.jsx)("img",{className:"large-logo",src:f}),Object(w.jsx)("p",{className:"description",children:"\ufe52The Big 5 Personality Test\ufe52"})]}),Object(w.jsxs)("div",{className:"steps",children:[Object(w.jsxs)("div",{className:"step-container one",children:[Object(w.jsx)("h4",{className:"step-header",children:"\ufe52Complete the Test\ufe52"}),Object(w.jsxs)("p",{className:"step-paragraph",children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Be yourself and answer honestly to find out your personality type."]})]}),Object(w.jsxs)("div",{className:"step-container two",children:[Object(w.jsx)("h4",{className:"step-header",children:"\ufe52Submit your Answers\ufe52"}),Object(w.jsxs)("p",{className:"step-paragraph",children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Your results will be calculated and stored on your profile"]})]}),Object(w.jsxs)("div",{className:"step-container three",children:[Object(w.jsx)("h4",{className:"step-header",children:"\ufe52View your Results\ufe52"}),Object(w.jsxs)("p",{className:"step-paragraph",children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Click on the results button to view your personalised report."]})]})]}),Object(w.jsx)("div",{className:"second-page",children:Object(w.jsx)(O.a,{children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(m.a.Header,{children:Object(w.jsx)(O.a.Toggle,{onClick:function(){window.scrollTo(0,600)},as:h.a,className:"take-test",variant:"outline-light",eventKey:"0",children:"Click to Take Test!"})}),Object(w.jsx)(O.a.Collapse,{eventKey:"0",children:x()?Object(w.jsxs)(m.a.Body,{children:[Object(w.jsx)("ul",{children:Object(w.jsx)("h3",{className:"question",children:t[j].question})}),Object(w.jsx)(d.a,{"aria-label":"Toolbar with button groups",children:Object(w.jsxs)(u.a,{className:"mr-2","aria-label":"First group",children:[Object(w.jsx)("h6",{children:"Strongly Disagree"}),Object(w.jsx)(h.a,{variant:"dark",className:"test-button",onClick:He,children:"1"})," ",Object(w.jsx)(h.a,{variant:"dark",className:"test-button",onClick:He,children:"2"})," ",Object(w.jsx)(h.a,{variant:"dark",className:"test-button",onClick:He,children:"3"})," ",Object(w.jsx)(h.a,{variant:"dark",className:"test-button",onClick:He,children:"4"})," ",Object(w.jsx)(h.a,{variant:"dark",className:"test-button",onClick:He,children:"5"}),Object(w.jsx)("h6",{children:"Strongly Agree"})]})}),j<49?Object(w.jsx)(h.a,{variant:"dark",className:"test-button next-button",onClick:Be,children:"\u2192"}):Object(w.jsx)(h.a,{className:"test-button next-button",onClick:Me,children:"Submit"}),Object(w.jsx)(g.a,{variant:"warning",now:y,label:"".concat(y,"%")})]}):Object(w.jsx)(m.a.Body,{children:Object(w.jsx)("h3",{children:"Oops...Please login first!"})})})]})})}),Object(w.jsxs)("div",{className:"third-page",children:[Ge>=1?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(h.a,{className:"test-button next-button results-button",onClick:function(){window.scrollTo(0,1250),console.log("Handle Results here"),Ze(!0)},children:"View Results"})}):null,Qe?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"doughnut",children:Object(w.jsx)(N.Doughnut,{data:{labels:["Extroversion","Agreeableness","Conscientiousness","Neuroticism","Openness to Experience"],datasets:[{label:"Your Personality Trait Scores",data:[P,U,X,se,ae],backgroundColor:["rgba(0, 230, 184, 0.9)","rgba(255, 51, 119, 0.9)","rgba(0, 184, 230, 0.9)","rgba(255, 117, 26, 0.9)","rgba(196, 77, 255, 0.9)"],hoverBorderWidth:5,borderColor:["rgba(0, 230, 184, 1)","rgba(255, 51, 119, 1)","rgba(0, 184, 230, 1)","rgba(255, 117, 26, 1)","rgba(196, 77, 255, 1)"],borderWidth:1}]},height:350,width:350,options:{maintainAspectRatio:!1,scales:{yAxes:{ticks:{beginAtZero:!0}}}}})}),Object(w.jsx)("ul",{className:"result-data",children:Object(w.jsxs)(I.a,{children:[Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("li",{className:"E all-li",children:[Object(w.jsx)("h5",{className:"E-title all-titles",children:"Extroversion"}),Object(w.jsxs)("div",{className:"info-container",children:[Object(w.jsxs)("p",{className:"p-one",children:["Extroversion reflects the tendency and intensity to which someone seeks interaction with their environment, particularly socially. It encompasses the comfort and assertiveness levels of people in social situations.",Object(w.jsx)("br",{}),"Additionally, it also reflects the sources from which someone draws energy."]}),Object(w.jsxs)("p",{className:"p-two",children:[Object(w.jsx)("h5",{className:"title-two",children:"You are the type of person who..."}),P>20?Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet",children:"Thrives on socialising with others."}),Object(w.jsx)("li",{className:"bullet",children:"Prefers being with others and meeting new people."}),Object(w.jsx)("li",{className:"bullet",children:"Likes to start conversations and talking to others."}),Object(w.jsx)("li",{className:"bullet",children:"Has a wide social circle of friends and acquaintances."}),Object(w.jsx)("li",{className:"bullet",children:"Finds it easy to make new friends."}),Object(w.jsx)("li",{className:"bullet",children:"Sometimes says things before thinking about them."}),Object(w.jsx)("li",{className:"bullet",children:"Enjoys being the center of attention."})]}):Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet",children:"Feels exhausted after socializing."}),Object(w.jsx)("li",{className:"bullet",children:"Prefers being alone or by themselves."}),Object(w.jsx)("li",{className:"bullet",children:"Dislikes making small talk or starting conversations."}),Object(w.jsx)("li",{className:"bullet",children:"Generally thinks things through before speaking."}),Object(w.jsx)("li",{className:"bullet",children:"Dislikes being the center of attention."})]})]})]})]})]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("li",{className:"A",children:[Object(w.jsx)("h5",{className:"A-title all-titles",children:"Agreeableness"}),Object(w.jsxs)("div",{className:"info-container",children:[Object(w.jsx)("p",{className:"p-one",children:"Agreeableness refers to how people tend to treat relationships with others. Unlike extroversion which consists of the pursuit of relationships, agreeableness focuses on people\u2019s orientation and interactions with others."}),Object(w.jsxs)("p",{className:"p-two",children:[Object(w.jsx)("h5",{className:"title-two",children:"You are the type of person who..."}),U>20?Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-A",children:"Kind and compassionate toward others."}),Object(w.jsx)("li",{className:"bullet-A",children:"Has a great deal of interest in and wants to help others."}),Object(w.jsx)("li",{className:"bullet-A",children:"Feels empathy and concern for other people."}),Object(w.jsx)("li",{className:"bullet-A",children:"Prefers to cooperate and be helpful."})]}):Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-A",children:"Doesn\u2019t care about other people\u2019s feelings or problems."}),Object(w.jsx)("li",{className:"bullet-A",children:"Takes little interest in others."}),Object(w.jsx)("li",{className:"bullet-A",children:"Can be seen as insulting or dismissive of others."}),Object(w.jsx)("li",{className:"bullet-A",children:"Can be manipulative."}),Object(w.jsx)("li",{className:"bullet-A",children:"Prefers to be competitive and stubborn."})]})]})]})]})]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("li",{className:"C",children:[Object(w.jsx)("h5",{className:"C-title all-titles",children:"Conscientiousness"}),Object(w.jsxs)("div",{className:"info-container",children:[Object(w.jsx)("p",{className:"p-one",children:"Conscientiousness describes a person\u2019s ability to regulate their impulse control in order to engage in goal-directed behaviors. It measures elements such as control, inhibition, and persistency of behavior."}),Object(w.jsxs)("p",{className:"p-two",children:[Object(w.jsx)("h5",{className:"title-two",children:"You are the type of person who..."}),X>20?Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-C",children:"Goal- and detail-oriented and are well organized."}),Object(w.jsx)("li",{className:"bullet-C",children:"Doesn\u2019t give in to impulses."}),Object(w.jsx)("li",{className:"bullet-C",children:"Finishes important tasks on time."}),Object(w.jsx)("li",{className:"bullet-C",children:"Enjoys adhering to a schedule."}),Object(w.jsx)("li",{className:"bullet-C",children:"Is on time when meeting others."})]}):Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-C",children:"Dislikes structure and schedules."}),Object(w.jsx)("li",{className:"bullet-C",children:"Messy and less detail-oriented."}),Object(w.jsx)("li",{className:"bullet-C",children:"Fails to return things or put them back where they belong."}),Object(w.jsx)("li",{className:"bullet-C",children:"Procrastinates about important tasks and rarely finishes them on time."}),Object(w.jsx)("li",{className:"bullet-C",children:"Fails to stick to a schedule."}),Object(w.jsx)("li",{className:"bullet-C",children:"Is always late when meeting others."})]})]})]})]})]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("li",{className:"N",children:[Object(w.jsx)("h5",{className:"N-title all-titles",children:"Neuroticism"}),Object(w.jsxs)("div",{className:"info-container",children:[Object(w.jsx)("p",{className:"p-one",children:"Neuroticism describes the overall emotional stability of an individual through how they perceive the world. It takes into account how likely a person is to interpret events as threatening or difficult. It also includes one\u2019s propensity to experience negative emotions."}),Object(w.jsxs)("p",{className:"p-two",children:[Object(w.jsx)("h5",{className:"title-two",children:"You are the type of person who..."}),se>20?Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-N",children:"Gets upset more easily."}),Object(w.jsx)("li",{className:"bullet-N",children:"Appears anxious, irritable, or moody."}),Object(w.jsx)("li",{className:"bullet-N",children:"Appears to always be stressed."}),Object(w.jsx)("li",{className:"bullet-N",children:"Worries constantly."}),Object(w.jsx)("li",{className:"bullet-N",children:"Experiences visible mood swings."}),Object(w.jsx)("li",{className:"bullet-N",children:"Struggles to bounce back after troubles in life."})]}):Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-N",children:"Emotionally stable and resilient."}),Object(w.jsx)("li",{className:"bullet-N",children:"Deals well with stress."}),Object(w.jsx)("li",{className:"bullet-N",children:"Rarely feels sad, moody, or depressed."}),Object(w.jsx)("li",{className:"bullet-N",children:"Relaxed and doesn\u2019t worry much."})]})]})]})]})]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("li",{className:"O",children:[Object(w.jsx)("h5",{className:"O-title all-titles",children:"Openness to Experience"}),Object(w.jsxs)("div",{className:"info-container",children:[Object(w.jsx)("p",{className:"p-one",children:"Openness to experience refers to one\u2019s willingness to try new things as well as engage in imaginative and intellectual activities. It includes the ability to \u201cthink outside of the box.\u201d"}),Object(w.jsxs)("p",{className:"p-two",children:[Object(w.jsx)("h5",{className:"title-two",children:"You are the type of person who..."}),ae>20?Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-O",children:"More creative or intellectual in focus."}),Object(w.jsx)("li",{className:"bullet-O",children:"Embraces trying new things or visiting new places."}),Object(w.jsx)("li",{className:"bullet-O",children:"Enjoys taking on new challenges."}),Object(w.jsx)("li",{className:"bullet-O",children:"Abstract ideas come more easily."})]}):Object(w.jsxs)("ul",{className:"bullet-points",children:[Object(w.jsx)("li",{className:"bullet-O",children:"More traditional in thinking and less creative."}),Object(w.jsx)("li",{className:"bullet-O",children:"Avoids change or new ideas."}),Object(w.jsx)("li",{className:"bullet-O",children:"Does not enjoy new things or visiting new places."}),Object(w.jsx)("li",{className:"bullet-O",children:"Has trouble with abstract or theoretical concepts."})]})]})]})]})]})]})}),Object(w.jsxs)("ul",{className:"circles",children:[Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{})]})]}):null]})]}):null},k=function(){return Object(w.jsx)(v,{})},y=t(41),C=t(8),A=t(43),S=t(58),E=t(32),q=t(74),T=t(35),D=t(38),G=function(){var e=Object(i.useState)({email:"",password:""}),s=Object(r.a)(e,2),t=s[0],l=s[1],a=function(e){var s=Object(D.a)(Object(D.a)({},t),{},Object(T.a)({},e.target.name,e.target.value));l(s),console.log(t)},n=function(){var e=Object(o.a)(c.a.mark((function e(s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),console.log("TOKEN>>>>"),e.next=4,b.a.post("api/auth/login/",t);case 4:i=e.sent,window.localStorage.setItem("token",i.data.token),console.log(i),window.location.reload();case 8:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(w.jsxs)("form",{children:[Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"Email:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input",placeholder:"Email",name:"email",value:t.email,onChange:function(e){return a(e)}})})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"Password:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input",type:"password",placeholder:"Password",name:"password",value:t.password,onChange:function(e){return a(e)}})})]}),Object(w.jsx)("div",{className:"field",children:Object(w.jsx)("button",{onClick:n,type:"submit",className:"button register-button",children:"Log Me In!"})})]})},F=function(){var e=Object(i.useState)({username:"",first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),s=Object(r.a)(e,2),t=s[0],l=s[1],a=Object(i.useState)({username:"",first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),n=Object(r.a)(a,2),j=n[0],d=n[1],u=function(e){var s=Object(D.a)(Object(D.a)({},t),{},Object(T.a)({},e.target.name,e.target.value));l(s)},h=function(){var e=Object(o.a)(c.a.mark((function e(s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,b.a.post("/api/auth/register/",t);case 4:i=e.sent,console.log(i),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),d(e.t0);case 12:window.location.reload();case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s){return e.apply(this,arguments)}}();return Object(w.jsxs)("form",{className:"column is-half is-offset-one-quarter box",children:[Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"Username:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input ".concat(j.username?"is-danger":""),placeholder:"e.g. Jahnvi123",name:"username",value:t.username,onChange:u})}),j.username&&Object(w.jsx)("p",{className:"help is-danger",children:j.username})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"First Name:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input ".concat(j.first_name?"is-danger":""),placeholder:"e.g. Jahnvi",name:"first_name",value:t.first_name,onChange:u})}),j.first_name&&Object(w.jsx)("p",{className:"help is-danger",children:j.first_name})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"Last Name:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input ".concat(j.last_name?"is-danger":""),placeholder:"e.g. Patel",name:"last_name",value:t.last_name,onChange:u})}),j.last_name&&Object(w.jsx)("p",{className:"help is-danger",children:j.last_name})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"Email:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input ".concat(j.email?"is-danger":""),placeholder:"e.g. jahnvi@email.com",name:"email",value:t.email,onChange:u})}),j.email&&Object(w.jsx)("p",{className:"help is-danger",children:j.email})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",children:"Password:"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input ".concat(j.password?"is-danger":""),type:"password",placeholder:"Password",name:"password",value:t.password,onChange:u})}),j.password&&Object(w.jsx)("p",{className:"help is-danger",children:j.password})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("input",{className:"input ".concat(j.password_confirmation?"is-danger":""),type:"password",placeholder:"Password Confirmation",name:"password_confirmation",value:t.password_confirmation,onChange:u})}),j.password_confirmation&&Object(w.jsx)("p",{className:"help is-danger",children:j.password_confirmation})]}),Object(w.jsx)(y.b,{to:"/".concat(t.username),children:Object(w.jsx)("button",{onClick:h,type:"submit",className:"button register-button",children:"Register Me!"})})]})},H=function(){var e=Object(C.f)(),s=Object(C.g)();return Object(i.useEffect)((function(){}),[s.pathname]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(A.a,{expand:"lg",className:"bring-to-front",children:[Object(w.jsx)(A.a.Brand,{href:"/",children:Object(w.jsx)("img",{className:"logo",src:f})}),Object(w.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsxs)(A.a.Collapse,{id:"basic-navbar-nav",children:[Object(w.jsx)(S.a,{className:"mr-auto"}),Object(w.jsxs)(w.Fragment,{children:[!x()&&Object(w.jsxs)(w.Fragment,{children:[["bottom"].map((function(e){return Object(w.jsx)(q.a,{trigger:"click",placement:e,overlay:Object(w.jsxs)(E.a,{id:"popover-positioned-".concat(e),children:[Object(w.jsx)(E.a.Title,{className:"enter-details",as:"h3",children:"Enter Your Details"}),Object(w.jsx)(E.a.Content,{children:Object(w.jsx)(G,{})})]}),children:Object(w.jsx)(h.a,{className:"nav-button",variant:"outline-light",children:"Login"})},e)})),["bottom"].map((function(e){return Object(w.jsx)(q.a,{trigger:"click",placement:e,overlay:Object(w.jsxs)(E.a,{id:"popover-positioned-".concat(e),children:[Object(w.jsx)(E.a.Title,{className:"enter-details",as:"h3",children:"Enter Your Details"}),Object(w.jsx)(E.a.Content,{children:Object(w.jsx)(F,{})})]}),children:Object(w.jsx)(h.a,{className:"nav-button",variant:"outline-light",children:"Sign Up"})},e)}))]}),x()&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S.a.Link,{href:"/profile",children:"Profile"}),Object(w.jsx)(S.a.Link,{onClick:function(){window.localStorage.removeItem("token"),e.push("/"),window.location.reload()},children:"Log Out"})]})]})]})]})})},B=function(){var e=window.localStorage.getItem("token"),s=function(){if(!e)return!1;var s=e.split(".");return!(s.length<3)&&JSON.parse(atob(s[1]))}().sub,t=Object(i.useState)([]),l=Object(r.a)(t,2),a=l[0],n=l[1];return Object(i.useEffect)((function(){(function(){var t=Object(o.a)(c.a.mark((function t(){var i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("/api/auth/".concat(s,"/"),{headers:{Authorization:"Bearer ".concat(e)}});case 2:i=t.sent,l=i.data,n(l);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),a?(console.log(a),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{children:Object(w.jsx)(N.Doughnut,{data:{labels:["Extroversion","Agreeableness","Conscientiousness","Neuroticism","Openness to Experience"],datasets:[{label:"Your Personality Trait Scores",data:[12,22,33,44,44],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],hoverOffset:40,borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},height:400,width:400,options:{maintainAspectRatio:!1,scales:{yAxes:{ticks:{beginAtZero:!0}}}}})})})):null},M=function(){return Object(w.jsx)(y.a,{children:Object(w.jsxs)(C.c,{children:[Object(w.jsxs)(C.a,{exact:!0,path:"/",children:[Object(w.jsx)(H,{}),Object(w.jsx)(k,{})]}),Object(w.jsx)(C.a,{path:"/profile",children:Object(w.jsx)(B,{})})]})})};a.a.render(Object(w.jsx)(M,{}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.673b5db7.chunk.js.map