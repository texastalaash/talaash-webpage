(this["webpackJsonptalaash-homepage"]=this["webpackJsonptalaash-homepage"]||[]).push([[0],{107:function(e,a,s){},111:function(e,a,s){},112:function(e,a,s){},113:function(e,a,s){},114:function(e,a,s){},115:function(e,a,s){},120:function(e,a,s){},121:function(e,a,s){},122:function(e,a,s){},123:function(e,a,s){},124:function(e,a,s){},125:function(e,a,s){},126:function(e,a,s){},127:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),n=s(17),i=s.n(n),r=(s(56),s(2)),l=s(6),o=s.p+"static/media/logo.50363529.svg",d=(s(57),s(25)),j=s(0),m=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),s=a[0],c=a[1];return window.addEventListener("scroll",(function(){window.scrollY>=20?c(!0):c(!1)})),Object(j.jsxs)("header",{className:s?"navbar active":"navbar",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("img",{className:"logo",src:o,alt:"talaash logo"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.a,{smooth:!0,to:"/#about",children:"About"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)(r.b,{to:"/team",children:"Team"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/team/3",children:"3.0"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/team/2",children:"2.0"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/team/1",children:"1.0"})})]})]}),Object(j.jsx)("li",{children:Object(j.jsx)(d.a,{smooth:!0,to:"/#contact",children:"Contact"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{smooth:!0,to:"/sponsorship",children:"Sponsor"})}),Object(j.jsx)("li",{className:"close",children:"X"})]}),Object(j.jsx)("div",{className:"menu",children:"Menu"})]})]})},h=(s(63),s(11)),b=s.n(h),u=(s(65),function(){return Object(j.jsxs)("ul",{className:"circles",children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{})]})}),p=(s(66),function(e){var a=e.images;return Object(t.useEffect)((function(){document.getElementById("radio1").checked=!0;var e=1,s=setInterval((function(){for(var s=document.getElementsByName("radio-btn"),t=1;t<=s.length;t++)s[t-1].checked&&(e=t%a.length+1);document.getElementById("radio"+e).checked=!0}),5e3);return function(){return clearInterval(s)}}),[]),Object(j.jsx)("div",{className:"slider-border",children:Object(j.jsx)("div",{className:"slider",children:Object(j.jsxs)("div",{className:"slides",children:[a.map((function(e,a){return Object(j.jsx)("input",{type:"radio",name:"radio-btn",id:"radio".concat(a+1)},a)})),a.map((function(e,a){return Object(j.jsx)("div",{className:0===a?"slide first":"slide",children:Object(j.jsx)("img",{src:e,alt:""})},a)})),Object(j.jsx)("div",{className:"navigation-auto",children:a.map((function(e,a){return Object(j.jsx)("div",{className:"auto-btn".concat(a+1)},a)}))}),Object(j.jsx)("div",{className:"navigation-manual",children:a.map((function(e,a){return Object(j.jsx)("label",{htmlFor:"radio".concat(a+1),className:"manual-btn"},a)}))})]})})})}),O=(s(67),s(44)),x=s.n(O),f=function(e){var a=e.videos;return Object(j.jsxs)("div",{className:"performances-wrapper",children:[Object(j.jsx)("h1",{children:"Performances"}),Object(j.jsx)("div",{className:"videos-container",children:a.map((function(e,a){return Object(j.jsx)("div",{className:"video-wrapper",children:Object(j.jsx)(x.a,{className:"react-player",url:e,controls:!0,width:"100%",height:"100%"})},a)}))})]})},g=(s(86),s(87),s(45),s(46),s(107),s(111),function(e){var a=e.name,s=e.isCap,t=(e.info,e.year),c=a.split(" "),n=c[0],i=c[1],l=n[0]+i[0];return Object(j.jsx)("div",{className:s?"cap-border":"no-border-bubble-container",children:Object(j.jsxs)("div",{className:"bubble-container",children:[Object(j.jsx)("img",{className:"bubble-image",src:"/assets/team-pics/".concat(t,"/headshots/").concat(a,".jpg"),alt:l,onError:function(){return Object(j.jsx)("h1",{children:"hey"})}}),Object(j.jsx)(r.b,{to:"/profile/".concat(n.toLowerCase(),"-").concat(i.toLowerCase()),className:"image-overlay",children:Object(j.jsx)("p",{className:"hover-name",children:a})})]})})}),v=(s(112),function(e){var a=e.label,s=e.list,t=e.year;return Object(j.jsxs)("div",{className:"bubble-section-container",children:[Object(j.jsx)("h1",{children:a}),Object(j.jsx)("div",{className:"bubbles-wrapper",children:s.map((function(e,a){return Object(j.jsx)(g,{name:e.name,isCap:"captain"===e.role,year:t},a)}))})]})}),N=function(e){var a=e.team,s=e.year;return Object(t.useEffect)((function(){}),[]),console.log(a),Object(j.jsxs)("div",{className:"team-bubble-container",children:[Object(j.jsx)(v,{label:"Captains",list:a.filter((function(e){return"captain"===e.role})),year:s}),Object(j.jsx)(v,{label:"Board",list:a.filter((function(e){return"captain"!==e.role&&"dancer"!==e.role})),year:s}),Object(j.jsx)(v,{label:"Dancers",list:a.filter((function(e){return"dancer"===e.role})),year:s})]})},w=(s(113),s(4)),y={1:{team:[],performances:[]},2:{team:[{id:1,name:"Abhisaradev Murmu",role:"dancer",email:"email@email.com",insta:"instauser"},{id:2,name:"Adithya Harihara",role:"captain",email:"email@email.com",insta:"instauser"},{id:3,name:"Afzal Jakir",role:"dancer",email:"email@email.com",insta:"instauser"},{id:4,name:"Akash Shah",role:"dancer",email:"email@email.com",insta:"instauser"},{id:5,name:"Amit Yeleswarapu",role:"dancer",email:"email@email.com",insta:"instauser"},{id:6,name:"Anubhav Kamath",role:"dancer",email:"email@email.com",insta:"instauser"},{id:7,name:"Arham Kothari",role:"dancer",email:"email@email.com",insta:"instauser"},{id:8,name:"Arnav Karandikar",role:"dancer",email:"email@email.com",insta:"instauser"},{id:9,name:"Athulya Rajakumar",role:"manager",email:"email@email.com",insta:"instauser"},{id:10,name:"Ayush Singh",role:"dancer",email:"email@email.com",insta:"instauser"},{id:11,name:"Chinmay Pingale",role:"dancer",email:"email@email.com",insta:"instauser"},{id:12,name:"Kabir Bhakta",role:"dancer",email:"email@email.com",insta:"instauser"},{id:13,name:"Manas Agarwal",role:"social",email:"email@email.com",insta:"instauser"},{id:14,name:"Manish Bhandari",role:"dancer",email:"email@email.com",insta:"instauser"},{id:15,name:"Nikhil Erabelli",role:"dancer",email:"email@email.com",insta:"instauser"},{id:16,name:"Rohan Singeetham",role:"production",email:"email@email.com",insta:"instauser"},{id:17,name:"Sanchith Shanmuga",role:"dancer",email:"email@email.com",insta:"instauser"},{id:18,name:"Shikhar Gupta",role:"dancer",email:"email@email.com",insta:"instauser"},{id:19,name:"Sid Singh",role:"production",email:"email@email.com",insta:"instauser"},{id:20,name:"Sunhith Mundla",role:"dancer",email:"email@email.com",insta:"instauser"},{id:21,name:"Swayam Barik",role:"captain",email:"email@email.com",insta:"instauser"},{id:22,name:"Twinkle Khanna",role:"choreo",email:"email@email.com",insta:"instauser"},{id:23,name:"Vansh Jain",role:"finance",email:"email@email.com",insta:"instauser"},{id:24,name:"Vasu Mahapatra",role:"graphics",email:"email@email.com",insta:"instauser"},{id:25,name:"Vyshnav Nair",role:"dancer",email:"email@email.com",insta:"instauser"},{id:26,name:"Yash Aggarwal",role:"dancer",email:"email@email.com",insta:"instauser"}],sliderTotal:4,performances:["https://www.youtube.com/watch?v=vr5QwTXh5t8","https://www.youtube.com/watch?v=OPRumImYUPU","https://www.youtube.com/watch?v=8ztoXsv9hKc"]},3:{team:[{id:1,name:"Aayush Singh",role:"dancer",email:"aayushsingh0318@gmail.com",insta:"instauser"},{id:2,name:"Abhisaradev Murmu",role:"captain",email:"abhisaradev@gmail.com",insta:"instauser"},{id:3,name:"Abhijit Harihara",role:"dancer",email:"abhiharihara@gmail.com",insta:"instauser"},{id:4,name:"Adithya Harihara",role:"captain",email:"adithyaharihara@gmail.com",insta:"instauser"},{id:5,name:"Akash Shah",role:"dancer",email:"",insta:""},{id:5,name:"Amitesh Yeleswarapu",role:"board",email:"",insta:""},{id:5,name:"I'm Vengeance",role:"dancer",email:"",insta:""},{id:5,name:"Anubhav Kamath",role:"dancer",email:"",insta:""},{id:5,name:"Arham Kothari",role:"dancer",email:"",insta:""},{id:5,name:"Arnav Karandikar",role:"Social",email:"",insta:""},{id:5,name:"Ashwin Desai",role:"dancer",email:"",insta:""},{id:5,name:"Kabir Bhakta",role:"DJ",email:"",insta:""},{id:5,name:"Mahek Bhargava",role:"Manager",email:"",insta:""},{id:5,name:"Manas Agarwal",role:"dancer",email:"",insta:""},{id:5,name:"Manish Bhandari",role:"Tech",email:"",insta:""},{id:5,name:"Mithila Harirama",role:"Manager",email:"",insta:""},{id:5,name:"Nick Otwani",role:"dancer",email:"",insta:""},{id:5,name:"Nikhil Erabelli",role:"Logistics",email:"",insta:""},{id:5,name:"Rohan Singeetham",role:"Production",email:"",insta:""},{id:5,name:"Rohit Shetty",role:"dancer",email:"",insta:""},{id:5,name:"Sanchith Shanmuga",role:"Social",email:"",insta:""},{id:5,name:"Sathya Balakumar",role:"dancer",email:"",insta:""},{id:5,name:"Shikhar Gupta",role:"Production",email:"",insta:""},{id:5,name:"Siddarth Rayapur",role:"dancer",email:"",insta:""},{id:5,name:"Simki Palicha",role:"Choreographer",email:"",insta:""},{id:5,name:"Sunhith Mundla",role:"Social",email:"",insta:""},{id:5,name:"Tejas Bansal",role:"dancer",email:"",insta:""},{id:5,name:"Twinkle Khanna",role:"Choreographer",email:"",insta:""},{id:5,name:"Vansh Jain",role:"Finance",email:"",insta:""},{id:5,name:"Vyshnav Nair",role:"dancer",email:"",insta:""},{id:5,name:"Yash Aggarwal",role:"dancer",email:"",insta:""},{id:5,name:"Yash Agarwal",role:"dancer",email:"",insta:""}],sliderTotal:5,performances:["https://www.youtube.com/watch?v=pio6rOe31ag","https://www.youtube.com/watch?v=cML5p3-Lotc","https://www.youtube.com/watch?v=NrIFmcSifHM","https://www.youtube.com/watch?v=LCnV47xrN4I"]}},k=[{theme:"Iron Man",year:"2019-2020",src:"/assets/team-pics/1/slider/1.jpg"},{theme:"COVID",year:"2020-2021",src:"/assets/team-pics/2/slider/2.jpg"},{theme:"Cosmos",size:33,year:"2021-2022",about:"3..2..1.. Liftoff. Our central theme this year was Cosmos. From Mercury to Pluto, Talaash uses a rocket they found to explore the depths of the solar system while facing challenges along the way. ",src:"/assets/team-pics/3/team.jpg",competitions:[{name:"Tamasha",location:"Atlanta, Georgia",date:"October 16th, 2021",placement:"1st place",src:"/assets/competitions/tamasha.png"},{name:"Aaja Nachle",location:"Dallas, Texas",date:"February 13th, 2022",placement:"2nd place",src:"/assets/competitions/aajanachle.png"},{name:"Nasha",location:"Houston, Texas",date:"February 26th, 2022",placement:"1st place",src:"/assets/competitions/nasha.jpeg"},{name:"Buckeye Mela",location:"Columbus, Ohio",date:"Mar 5th, 2022",placement:"2nd place",src:"/assets/competitions/buckeyemela.png"},{name:"Sitara",location:"San Antonio, Texas",date:"Mar 12th, 2022",placement:"1st place",src:"/assets/competitions/sitara.jpeg"},{name:"Legends",location:"Chicago",date:"April 9th, 2022",placement:"",src:"/assets/competitions/legends.png"}]}],S=function(){return Object(j.jsxs)("div",{className:"soundcloud-container",children:[Object(j.jsx)("iframe",{width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/780108895&color=%2352847c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}),Object(j.jsxs)("div",{className:"soundcloud-player",children:[Object(j.jsx)("a",{href:"https://soundcloud.com/akhilesh-yeleswarapu",title:"DJ Khila",target:"_blank",style:{color:"#ccccc"},children:"DJ Khila"})," ","\xb7"," ",Object(j.jsx)("a",{href:"https://soundcloud.com/akhilesh-yeleswarapu/texas-talaash-1",title:"Texas Talaash 1.0 ft. DJ Law, Aka$h, DJ RB  [EXPLICIT] (no voiceovers)",target:"_blank",style:"color: #cccccc; text-decoration: none;",children:"Texas Talaash 1.0 ft. DJ Law, Aka$h, DJ RB [EXPLICIT] (no voiceovers)"})]})]})},A=function(){return Object(j.jsxs)("div",{className:"soundcloud-container",children:[Object(j.jsx)("iframe",{width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1248566905&color=%2352847c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}),Object(j.jsxs)("div",{className:"soundcloud-player",children:[Object(j.jsx)("a",{href:"https://soundcloud.com/abhishek-arnipalli",title:"DJ ABHZ",target:"_blank",style:{color:"#ccccc"},children:"DJ ABHZ"}),Object(j.jsx)("a",{href:"https://soundcloud.com/abhishek-arnipalli/texas-talaash-2020-2021-team-mix-ft-bunny",title:"Texas Talaash 2020 - 2021 Team Mix (ft. BUNNY)",target:"_blank",children:"Texas Talaash 2020 - 2021 Team Mix (ft. BUNNY)"})]})]})},T=function(){return Object(j.jsxs)("div",{className:"soundcloud-container",children:[Object(j.jsx)("iframe",{width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1254518806&color=%233ec891&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}),Object(j.jsxs)("div",{className:"soundcloud-player",children:[Object(j.jsx)("a",{href:"https://soundcloud.com/kabir_bhakta",title:"BUNNY",target:"_blank",style:{color:"#ccccc"},children:"BUNNY"}),Object(j.jsx)("a",{href:"https://soundcloud.com/kabir_bhakta/texas-talaash-legends-2022",title:"Texas Talaash @ Legends 2022 (ft. Bassdoctor, DJ Subsonic, cHAoS, D-ASH)",target:"_blank",children:"Texas Talaash @ Legends 2022 (ft. Bassdoctor, DJ Subsonic, cHAoS, D-ASH)"})]})]})},B=function(e){var a=e.current,s=Object(w.g)().year;a&&(s=3);for(var t=[Object(j.jsx)(S,{}),Object(j.jsx)(A,{}),Object(j.jsx)(T,{})],c=y[s].team,n=y[s].performances,i="../../../assets/team-pics/".concat(s,"/slider/"),r=[],l=1;l<=y[s].sliderTotal;l++)r.push(i+l+".jpg");return Object(j.jsx)(b.a,{children:Object(j.jsx)("div",{className:"team-background",children:Object(j.jsxs)("div",{className:"team-container",children:[Object(j.jsxs)("div",{className:"top-slides-display",children:[Object(j.jsxs)("h1",{className:"team-title",children:["Talaash ",s,".0"]}),Object(j.jsx)(p,{images:r}),Object(j.jsx)("img",{className:"floating-left",src:"/assets/team-pics/".concat(s,"/floating/left.png"),alt:"floating-left"}),Object(j.jsx)("img",{className:"floating-right",src:"/assets/team-pics/".concat(s,"/floating/right.png"),alt:"floating-right"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(N,{team:c,year:s}),Object(j.jsx)("hr",{}),k[s-1].competitions?Object(j.jsxs)("div",{className:"season-content",children:[Object(j.jsxs)("div",{className:"season-about",children:[Object(j.jsx)("h1",{children:"Our ".concat(k[s-1].year," season")}),Object(j.jsx)("p",{className:"year-about",children:k[s-1].about})]}),Object(j.jsx)("div",{className:"competitions",children:k[s-1].competitions.map((function(e,a){return Object(j.jsxs)("div",{className:"competition",children:[Object(j.jsx)("img",{src:e.src,alt:""}),Object(j.jsxs)("div",{className:"competition-details",children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsx)("p",{className:"location",children:e.location}),Object(j.jsx)("p",{className:"date",children:e.date}),Object(j.jsx)("p",{className:"placement",children:e.placement})]})]},a)}))})]}):"",Object(j.jsx)(f,{videos:n}),t[s-1]]})})})},M=[{name:"Bollywood",src:"/assets/dance-styles/bollywood.jpeg"},{name:"Bhangra",src:"/assets/dance-styles/bhangra.jpeg"},{name:"Hip-Hop",src:"/assets/dance-styles/hip-hop.jpeg"},{name:"Contemporary",src:"/assets/dance-styles/contemporary.jpeg"},{name:"Koothu",src:"/assets/dance-styles/si.jpg"}],C=(s(114),function(){return Object(j.jsxs)("div",{className:"dance-styles-wrapper",children:[Object(j.jsxs)("div",{className:"dance-styles-title",children:[Object(j.jsx)("h1",{children:"Dance Styles"}),Object(j.jsx)("p",{children:"Bollywood Fusion teams blend various aspects of Indian styles and Western influences to showcase a cohesive performance guided by a strong storyline"})]}),Object(j.jsx)("section",{className:"dance-styles",children:M.map((function(e,a){return Object(j.jsxs)("div",{className:"style-card hvr-float",children:[Object(j.jsx)("img",{src:e.src,alt:e.name}),Object(j.jsx)("p",{children:e.name})]},a)}))})]})}),L=(s(115),s(49)),D=function(){var e=Object(t.useState)(""),a=Object(l.a)(e,2),s=(a[0],a[1]),c=Object(t.useState)(""),n=Object(l.a)(c,2),i=(n[0],n[1]),r=Object(t.useState)(""),o=Object(l.a)(r,2),d=(o[0],o[1]),m=Object(t.useState)(""),h=Object(l.a)(m,2),b=(h[0],h[1]),u=Object(t.useState)([]),p=Object(l.a)(u,2),O=p[0],x=(p[1],Object(t.useState)(!1)),f=Object(l.a)(x,2),g=f[0];f[1];return Object(j.jsxs)("section",{id:"contact",children:[Object(j.jsx)("h1",{className:"section-header",children:"Contact Us"}),Object(j.jsxs)("form",{id:"contact-form",className:"form-horizontal",role:"form",onSubmit:function(e){e.preventDefault(),console.log(e.target),L.a.sendForm("service_si1sz48","template_39fd6q9",e.target,"lN_QS0T5yTwnbnrAR").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},children:[Object(j.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"NAME",name:"name",required:!0,onChange:function(e){return i({name:e.target.value})}}),Object(j.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"EMAIL",name:"email",required:!0,onChange:function(e){return s({name:e.target.value})}}),Object(j.jsx)("input",{type:"subject",className:"form-control",id:"subject",placeholder:"SUBJECT",name:"subject",onChange:function(e){return d({name:e.target.value})}}),Object(j.jsx)("textarea",{className:"form-control",rows:"10",placeholder:"MESSAGE",name:"message",onChange:function(e){return b({name:e.target.value})}}),g?O.map((function(e,a){return Object(j.jsx)("ul",{className:"contact-errors",children:e},a)})):null,Object(j.jsx)("button",{className:"btn btn-primary send-button",id:"submit",type:"submit",value:"SEND",children:"SEND"})]})]})},_=s.p+"static/media/cover.3b35280e.jpg",E=s.p+"static/media/cover2.a6e07054.jpg",I=s.p+"static/media/cover3.4451137b.jpg",F=s(47),H=s.n(F),U=(s(120),function(){var e=window.innerWidth<1500,a=Object(t.useState)(!1),s=Object(l.a)(a,2),c=s[0],n=s[1],i=Object(t.useState)([]),r=Object(l.a)(i,2),o=r[0],d=r[1];Object(t.useEffect)((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return d(e.links)}))}),[]),console.log(e),console.log(window.innerWidth);return Object(j.jsx)(H.a,{handle:c?"":"button",disabled:window.innerWidth<700?"true":"",children:Object(j.jsxs)("div",{className:"linktree-container",children:[Object(j.jsx)("button",{className:"linktree-button",onClick:function(){n(!c)},children:Object(j.jsx)("i",{class:"fa-solid ".concat(c?"fa-xmark":"fa-link")})}),Object(j.jsxs)("div",{className:c?"linktree-box active":"linktree-box",children:[Object(j.jsx)("h1",{children:"Useful Links"}),Object(j.jsx)(b.a,{children:Object(j.jsx)("ul",{children:o.map((function(e,a){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:e.url,children:e.title})},a)}))})})]})]})})}),J=[_,E,I],Y=function(){var e=Object(t.useState)(J[0]),a=Object(l.a)(e,2),s=a[0],c=(a[1],Object(t.useState)(0)),n=Object(l.a)(c,2),i=(n[0],n[1],{backgroundImage:"url(".concat(s,")")});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"banner",style:i,children:[Object(j.jsxs)("div",{className:"cover",children:[Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{className:"cover-text",children:[Object(j.jsx)("h1",{children:"TEXAS TALAASH"}),Object(j.jsx)("p",{children:"UT Austin's Premier Male Fusion Dance Team"})]})}),Object(j.jsx)("div",{className:"social-container",children:Object(j.jsxs)("div",{className:"social-medias",children:[Object(j.jsx)("a",{className:"instagram",href:"https://instagram.com/texastalaash",children:Object(j.jsx)("i",{className:"fab fa-instagram"})}),Object(j.jsx)("a",{className:"facebook ",href:"https://www.facebook.com/txtalaash",children:Object(j.jsx)("i",{className:"fab fa-facebook"})}),Object(j.jsx)("a",{className:"youtube",href:"https://www.youtube.com/channel/UCEqHo5E7qQQmawb3c14Zl-w",children:Object(j.jsx)("i",{className:"fab fa-youtube"})})]})})]}),Object(j.jsx)(U,{})]}),Object(j.jsxs)("div",{className:"home-content",children:[Object(j.jsx)("div",{id:"about",className:"home-about",children:Object(j.jsxs)("div",{className:"about-content",children:[Object(j.jsx)("h1",{children:"About Talaash"}),Object(j.jsx)("p",{children:"Texas Talaash, established in 2019, is a non-profit all male competetive Bollywood Fusion dance team at the University of Texas at Austin. We choreograph and perform across the nation and events on campus in dance styles such as bollywood, hiphop, bhangra, kuthu, and contemporary. We also strive to inspire students to build self-esteem, discipline, and self-confidence through dance arts education."})]})}),Object(j.jsx)(C,{}),Object(j.jsx)(D,{})]})]})},P=s(18),K=s(48),q=s(51),$=s(50),R=(t.Component,s(121),function(e){var a=new Date,s=a.getFullYear()-e.getFullYear(),t=a.getMonth()-e.getMonth();return(t<0||0===t&&a.getDate()<e.getDate())&&s--,s}),V=function(){var e=Object(w.g)().name.split("-"),a=e[0],s=e[1],t=(a=a.charAt(0).toUpperCase()+a.slice(1))+" "+(s=s.charAt(0).toUpperCase()+s.slice(1)),c=R(new Date("12/06/2001"));return Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{className:"profile-wrapper",children:[Object(j.jsx)("h1",{className:"profile-name-title",children:t}),Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsxs)("div",{className:"profile-left-container",children:[Object(j.jsx)("img",{className:"profile-image",src:"/assets/team-pics/".concat(2,"/photoshoot/individual/").concat(t,".jpg"),alt:"".concat(t)}),Object(j.jsxs)("div",{className:"info-container",children:[Object(j.jsxs)("div",{className:"details-container",children:[Object(j.jsxs)("p",{children:["Age: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("p",{children:["Nickname: ",Object(j.jsx)("span",{children:"alcoholic"})]}),Object(j.jsxs)("p",{children:["Quote: ",Object(j.jsx)("span",{children:'"I\'m not an alcoholic"'})]}),Object(j.jsxs)("p",{children:["Favorite Dance: ",Object(j.jsx)("span",{children:"Bhangra"})]}),Object(j.jsxs)("p",{children:["Years: ",Object(j.jsx)("span",{children:"1.0,2.0,3.0"})]})]}),Object(j.jsxs)("div",{className:"socials-container",children:[Object(j.jsx)("i",{className:"fab fa-instagram"}),Object(j.jsx)("i",{className:"fab fa-snapchat-ghost"}),Object(j.jsx)("i",{className:"far fa-envelope"})]})]})]}),Object(j.jsxs)("div",{className:"profile-right-container",children:[Object(j.jsx)("h2",{children:"About"}),Object(j.jsx)("p",{className:"about-text",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum saepe incidunt ullam eos nemo nostrum cumque explicabo, autem sequi dolorem maxime excepturi blanditiis veritatis. Quam, magni blanditiis? Ducimus incidunt deserunt, atque dolorem adipisci eveniet ratione animi cumque cupiditate quas consequatur iusto modi! Deserunt aspernatur, dolor repellat beatae vel magnam voluptas."})]})]})]})})},z=(s(122),function(){return Object(j.jsxs)("section",{className:"timeline-section",children:[Object(j.jsx)("h1",{children:"Team History"}),Object(j.jsxs)("div",{className:"timeline",children:[Object(j.jsx)("ul",{children:k.map((function(e,a){return Object(j.jsx)("li",{children:Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{className:"timeline-content hvr-float",children:[Object(j.jsxs)("p",{children:[e.year,": ",e.theme]}),Object(j.jsx)("div",{className:"card-border",children:Object(j.jsx)(r.b,{to:"/team/".concat(a+1),children:Object(j.jsx)("img",{src:e.src,alt:"team image"})})})]})})},a)})).reverse()})," "]})]})}),Q=(s(123),s(124),function(){return Object(j.jsx)(b.a,{children:Object(j.jsxs)("section",{className:"sponsorship-container",children:[Object(j.jsx)("h1",{children:"Sponsorship Package"}),Object(j.jsxs)("div",{className:"sponsorship-content",children:[Object(j.jsxs)("div",{className:"why-help-container sponsor-section",children:[Object(j.jsxs)("div",{className:"why-help-content",children:[Object(j.jsx)("h1",{children:"Why Help?"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Social Media",Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Talaash\u2019s Instagram has ",Object(j.jsx)("span",{children:"1300+ followers"})]}),Object(j.jsxs)("li",{children:["Team members collectively have"," ",Object(j.jsx)("span",{children:"over 10k+ followers"})," on Instagram/Facebook/Snapchat"]}),Object(j.jsxs)("li",{children:["Dances in the DDN circuit are seen by"," ",Object(j.jsx)("span",{children:"1000+ live audience members and 4000+ nationwide livestream viewers"})]}),Object(j.jsxs)("li",{children:["An end of year dance is performed at UT Austin, with potential to reach up to ",Object(j.jsx)("span",{children:"50,000"})," students on campus"]})]})]}),Object(j.jsx)("li",{children:"Giving Back to the Community"}),Object(j.jsxs)("li",{children:["South Asian culture awareness",Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:"Indo-Americans represent one of the fastest growing ethnic groups in North America, with the latest census data showing a 69.4% increase in their numbers in the United States between 2000 and 2010"})})]})]})]}),Object(j.jsx)("div",{className:"phone-image",children:Object(j.jsx)("img",{src:"/assets/sponsorship/insta-phone.png",alt:""})})]}),Object(j.jsxs)("div",{className:"benefits-container sponsor-section",children:[Object(j.jsx)("div",{className:"sponsor-shirt",children:Object(j.jsx)("img",{src:"/assets/sponsorship/sponsorship-shirt.png",alt:""})}),Object(j.jsxs)("div",{className:"benefits-content",children:[Object(j.jsx)("h1",{children:"Benefits"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"YOUR"})," Logo on our team shirts (100+ sold/worn by UT Austin students/friends/family)"]}),Object(j.jsxs)("li",{children:["Social Media Advertising",Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Access to ",Object(j.jsx)("span",{children:"1.3 K (and growing)"})," Austin individuals through our Instagram, Facebook, and YouTube"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"YOUR"})," Logo on the Facebook Cover on Texas Talaash\u2019s Facebook page"]}),Object(j.jsxs)("li",{children:["Instagram Posts/Stories (Social Media Blasts i.e"," ",Object(j.jsx)("span",{children:"shoutouts, direct links, etc."}),")"]})]})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Prominent recognition in backdrop video"})," during performances (seen on competition livestream by"," ",Object(j.jsx)("span",{children:"thousands"}),")"]}),Object(j.jsx)("li",{children:"Logo on Talaash Banner (used for recruitment/fundraising/other Talaash associated events on campus)"})]})]})]}),Object(j.jsxs)("div",{className:"finances-container sponsor-section",children:[Object(j.jsx)("h1",{children:"2022-2023 Finances"}),Object(j.jsxs)("table",{className:"finances-table",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Competition Fees: (50/person)"}),Object(j.jsx)("th",{children:"$6,000 (4 Competitions for 30 Dancers)"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Flight Ticket: (200/person)"}),Object(j.jsx)("th",{children:"$12,000 (2 out of state competitions)"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"In State Travel: (30/person)"}),Object(j.jsx)("th",{children:"$1,800 (2 in state competitions)"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Production/Equipment:"}),Object(j.jsx)("th",{children:"$1,500 (Costumes, lighting, props)"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Total Estimated Costs:"}),Object(j.jsx)("th",{children:"$21,300!!"})]})]}),Object(j.jsxs)("p",{children:["Competing is very expensive as referenced by the chart above. However, we still want to put on a great performance for everyone, improve as a team, and promote a positive message in our community.",Object(j.jsx)("span",{children:" This is where you come in!"})]})]}),Object(j.jsxs)("div",{className:"packages-container sponsor-section",children:[Object(j.jsx)("h1",{children:"Packages"}),Object(j.jsxs)("div",{className:"packages-content",children:[Object(j.jsxs)("div",{className:"package bronze",children:[Object(j.jsx)("h2",{children:"Bronze"}),Object(j.jsx)("h3",{children:"$300 - $400"}),Object(j.jsx)("div",{className:"package-details",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Small Logo on shirt and FB cover"}),Object(j.jsx)("li",{children:"Small Logo on Backdrop"}),Object(j.jsx)("li",{children:"Small Logo on Banner"}),Object(j.jsx)("li",{children:"Semesterly Social Media Blasts"})]})})]}),Object(j.jsxs)("div",{className:"package silver",children:[Object(j.jsx)("h2",{children:"Silver"}),Object(j.jsx)("h3",{children:"$600 - $700"}),Object(j.jsx)("div",{className:"package-details",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Medium Logo on shirt and FB cover"}),Object(j.jsx)("li",{children:"Medium Logo Backdrop"}),Object(j.jsx)("li",{children:"Medium Logo on Banner"}),Object(j.jsx)("li",{children:"Quarterly Social Media Blasts"}),Object(j.jsx)("li",{children:"Member Volunteer (12 man hours)"})]})})]}),Object(j.jsxs)("div",{className:"package gold",children:[Object(j.jsx)("h2",{children:"Gold"}),Object(j.jsx)("h3",{children:"$1,000"}),Object(j.jsx)("div",{className:"package-details",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Large Logo on shirt and FB cover"}),Object(j.jsx)("li",{children:"Large Logo on Backdrop"}),Object(j.jsx)("li",{children:"Large Logo on Banner"}),Object(j.jsx)("li",{children:"Monthly Social Media Blasts"}),Object(j.jsx)("li",{children:"Member Volunteer (24 man hours)"})]})})]})]})]})]})]})})}),W=function(){var e=Object(w.f)().pathname;return Object(t.useEffect)((function(){window.scrollTo(0,0)}),[e]),Object(j.jsx)("section",{children:Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"/",component:Y,exact:!0}),Object(j.jsx)(w.a,{exact:!0,path:"/team",component:z}),Object(j.jsx)(w.a,{path:"/team/:year",component:function(e){return Object(j.jsx)(B,{},e.match.params.id)}}),Object(j.jsx)(w.a,{path:"/sponsorship",component:Q}),Object(j.jsx)(w.a,{path:"/profile/:name",component:V})]})})},G=(s(125),s(126),function(){return Object(j.jsxs)("section",{className:"footer",children:[Object(j.jsx)("div",{className:"hr-container",children:Object(j.jsx)("hr",{})}),Object(j.jsxs)("div",{className:"footer-content",children:[Object(j.jsx)("p",{className:"copyright",children:"\xa9 2022 Texas Talaash"}),Object(j.jsxs)("p",{children:["Created with ",Object(j.jsx)("i",{className:"fa-solid fa-heart"})," by"," ",Object(j.jsx)("a",{href:"https://manishbh.com",children:"Manish Bhandari"})]}),Object(j.jsx)("p",{})]})]})});var X=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsx)(W,{}),Object(j.jsx)(G,{}),Object(j.jsx)(u,{})]})})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))},56:function(e,a,s){},57:function(e,a,s){},63:function(e,a,s){},65:function(e,a,s){},66:function(e,a,s){},67:function(e,a,s){},86:function(e,a,s){}},[[127,1,2]]]);
//# sourceMappingURL=main.9a64b2ee.chunk.js.map