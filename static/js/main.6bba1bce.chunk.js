(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{23:function(e,t,s){},26:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(13),n=s.n(c),r=(s(23),s(6)),i=s(7),l=s(9),o=s(8),j=s(14),d=s(16),h=s.n(d),b=(s(26),s(17)),m=s(5),u=s.n(m),O=s(1),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,a=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"polygon",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:s})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{className:"scrambletext",children:[a,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"button btn project-btn",children:[Object(O.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn"]}),Object(O.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),x=p,f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsx)("ul",{className:"copyright",children:Object(O.jsx)("li",{children:"Website made by Sidharth Rao. Last updated December 20th, 2022."})})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),v=f,N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,t=this.props.data.resumedownload,s=this.props.data.bio,a=(this.props.data.address.street,this.props.data.address.city),c=this.props.data.address.state,n=this.props.data.address.zip,r=(this.props.data.phone,this.props.data.email);this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"five columns",children:Object(O.jsx)("img",{className:"profile-pic",src:e,alt:"Sidharth Rao Profile Pic"})}),Object(O.jsxs)("div",{className:"seven columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:"Sidharth Rao"}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[a," ",c,", ",n]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:r})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"button",children:[Object(O.jsx)("i",{className:"fa fa-save"}),"Resume"]})})})]})]})]})})})}}]),s}(a.Component),g=N,w=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:t})]})})]})}}]),s}(a.Component),y=w,k=(a.Component,s(18)),D=s.n(k),C=0,R=(a.Component,function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("G-LR22JT9XBC"),j.a.pageview(window.location.pathname),a}return Object(i.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{data:this.state.resumeData.main}),Object(O.jsx)(g,{data:this.state.resumeData.main}),Object(O.jsx)(y,{data:this.state.resumeData.resume}),Object(O.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(a.Component)),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};n.a.render(Object(O.jsx)(R,{}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.6bba1bce.chunk.js.map