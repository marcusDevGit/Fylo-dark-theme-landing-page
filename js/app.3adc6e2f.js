(function(){"use strict";var a={2013:function(a,e,t){var o=t(9242),s=t(3396);const c={id:"app"};function i(a,e,t,o,i,n){const r=(0,s.up)("HeaderSection"),l=(0,s.up)("IntroSection"),d=(0,s.up)("FeatureSection"),A=(0,s.up)("TeamSection"),f=(0,s.up)("TestimonSection"),u=(0,s.up)("AcessSection"),p=(0,s.up)("FooterSection"),m=(0,s.up)("ion-icon");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(r),(0,s.Wm)(l),(0,s.Wm)(d),(0,s.Wm)(A),(0,s.Wm)(f),(0,s.Wm)(u),(0,s.Wm)(p),i.showBackToTop?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"back-to-top",onClick:e[0]||(e[0]=(...a)=>n.scrollToTop&&n.scrollToTop(...a))},[(0,s.Wm)(m,{name:"arrow-up-outline"})])):(0,s.kq)("",!0)])}const n=a=>((0,s.dD)("data-v-a47980e0"),a=a(),(0,s.Cn)(),a),r={id:"access",class:"access"},l={class:"hold"},d=n((()=>(0,s._)("h1",{class:"access_title"},"Get early access today",-1))),A=n((()=>(0,s._)("p",{class:"access_description"}," It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you ",-1))),f={class:"form_field"},u={class:"form_info"},p=n((()=>(0,s._)("button",{class:"form_btn",type:"submit"},"Get Started For Free",-1)));function m(a,e,t,c,i,n){return(0,s.wg)(),(0,s.iD)("section",r,[(0,s._)("div",l,[d,A,(0,s._)("form",{class:"form",onSubmit:e[1]||(e[1]=(0,o.iM)(((...a)=>n.submitForm&&n.submitForm(...a)),["prevent"]))},[(0,s._)("div",f,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.email=a),class:"form_input",type:"text",placeholder:"email@example.com"},null,512),[[o.nr,i.email]]),(0,s.wy)((0,s._)("p",u,"Please enter a valid email address",512),[[o.F8,!i.isEmailValid]])]),p],32)])])}var h={name:"AccessSection",data(){return{email:"",isEmailValid:!0}},methods:{submitForm(){this.isValidEmail(this.email)?(this.isEmailValid=!0,console.log("Form submitted with email:",this.email)):this.isEmailValid=!1},isValidEmail(a){return a.includes("@")}}},v=t(89);const y=(0,v.Z)(h,[["render",m],["__scopeId","data-v-a47980e0"]]);var g=y,b=t.p+"img/icon-access-anywhere.9f759af9.svg",I=t.p+"img/icon-security.0745a656.svg",w=t.p+"img/icon-collaboration.9d4c2991.svg",S=t.p+"img/icon-any-file.019e597d.svg";const j={id:"features",class:"feature"},k=(0,s.uE)('<div class="hold" data-v-5851977f><article class="feature_card" data-v-5851977f><img class="feature_img" src="'+b+'" alt="" data-v-5851977f><h2 class="feature_title" data-v-5851977f>Access your files, anywhere</h2><p class="feature_tescription" data-v-5851977f> The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere. </p></article><article class="feature_card" data-v-5851977f><img class="feature_img" src="'+I+'" alt="" data-v-5851977f><h2 class="feature_title" data-v-5851977f>Security you can trust</h2><p class="feature_description" data-v-5851977f> 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. </p></article><article class="feature_card" data-v-5851977f><img class="feature_img" src="'+w+'" alt="" data-v-5851977f><h2 class="feature_title" data-v-5851977f>Real-time collaboration</h2><p class="feature_description" data-v-5851977f> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </p></article><article class="featureCard" data-v-5851977f><img class="feature_img" src="'+S+'" alt="" data-v-5851977f><h2 class="feature_title" data-v-5851977f>Store any type of file</h2><p class="feature_description" data-v-5851977f> Whether you&#39;re sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared. </p></article></div>',1),D=[k];function Q(a,e,t,o,c,i){return(0,s.wg)(),(0,s.iD)("section",j,D)}var B={name:"FeatureSection"};const E=(0,v.Z)(B,[["render",Q],["__scopeId","data-v-5851977f"]]);var x=E,U=t.p+"img/logo.22dc8aa0.svg",H=t.p+"img/icon-location.f34cd358.svg",M=t.p+"img/icon-phone.e9bb02d8.svg",V=t.p+"img/icon-email.59c492a4.svg";const O=a=>((0,s.dD)("data-v-4d8f596e"),a=a(),(0,s.Cn)(),a),K={class:"hold"},G=O((()=>(0,s._)("div",{class:"foot_top"},[(0,s._)("a",{class:"footer_logo",href:"/"},[(0,s._)("img",{class:"footer_icon",src:U,alt:""})])],-1))),q={class:"footer_btn"},R=(0,s.uE)('<div class="footer_location" data-v-4d8f596e><img class="footer_icon" src="'+H+'" alt="" data-v-4d8f596e><p class="footer_description" data-v-4d8f596e> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod temport inciddunt ut labore et dolore magna alique </p></div><div class="footer_contact" data-v-4d8f596e><div class="footer_contactItem" data-v-4d8f596e><img class="footer_icon" src="'+M+'" alt="" data-v-4d8f596e><p class="footer_description" data-v-4d8f596e>+1-543-124-4567</p></div><div class="footer_contactItem" data-v-4d8f596e><img class="footer_icon" src="'+V+'" alt="" data-v-4d8f596e><p class="footer_description" data-v-4d8f596e>example@fylo.com</p></div></div><div class="footer_links" data-v-4d8f596e><a class="footer_link" href="/" data-v-4d8f596e>About Us</a><a class="footer_link" href="/" data-v-4d8f596e>Jobs</a><a class="footer_link" href="/" data-v-4d8f596e>Press</a><a class="footer_link" href="/" data-v-4d8f596e>Blog</a></div><div class="footer_links" data-v-4d8f596e><a class="footer_link" href="/" data-v-4d8f596e>Contact Us</a><a class="footer_link" href="#team" data-v-4d8f596e>Terms</a><a class="footer_link" href="/" data-v-4d8f596e>Privacy</a></div>',4),P={class:"footer_medias"},W={href:""},T={href:""},N={href:""};function C(a,e,t,o,c,i){const n=(0,s.up)("ion-icon");return(0,s.wg)(),(0,s.iD)("footer",null,[(0,s._)("div",K,[G,(0,s._)("div",q,[R,(0,s._)("div",P,[(0,s._)("a",W,[(0,s.Wm)(n,{class:"footer_icon",name:"logo-facebook"})]),(0,s._)("a",T,[(0,s.Wm)(n,{class:"footer_icon",name:"logo-instagram"})]),(0,s._)("a",N,[(0,s.Wm)(n,{class:"footer_icon",name:"logo-twitter"})])])])])])}var F={name:"FooterSection"};const J=(0,v.Z)(F,[["render",C],["__scopeId","data-v-4d8f596e"]]);var L=J;const Z=(0,s.uE)('<div class="hold" data-v-541d0aaa><a class="head_logo" href="/" data-v-541d0aaa><img src="'+U+'" alt="" data-v-541d0aaa></a><ul class="head_nav" data-v-541d0aaa><li class="head_item" data-v-541d0aaa><a class="head_link" href="#features" data-v-541d0aaa>Features</a></li><li class="head_item" data-v-541d0aaa><a class="head_link" href="#team" data-v-541d0aaa>Team</a></li><li class="head_item" data-v-541d0aaa><a class="head_link" href="#access" data-v-541d0aaa>Sign In</a></li></ul></div>',1),Y=[Z];function z(a,e,t,o,c,i){return(0,s.wg)(),(0,s.iD)("header",null,Y)}var X={name:"HeaderSection"};const _=(0,v.Z)(X,[["render",z],["__scopeId","data-v-541d0aaa"]]);var $=_,aa=t.p+"img/illustration-intro.7eff9ea0.png";const ea={class:"intro"},ta=(0,s.uE)('<div class="hold" data-v-408aa9bb><img class="intro_img" src="'+aa+'" alt="" data-v-408aa9bb><div class="intro_txt" data-v-408aa9bb><h1 class="intro_title" data-v-408aa9bb>All your files in one secure location, accessible anywhere.</h1><p class="intro_description" data-v-408aa9bb> Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers. </p><button class="intro_btn" data-v-408aa9bb>Get Started</button></div></div>',1),oa=[ta];function sa(a,e,t,o,c,i){return(0,s.wg)(),(0,s.iD)("section",ea,oa)}var ca={name:"IntroSection"};const ia=(0,v.Z)(ca,[["render",sa],["__scopeId","data-v-408aa9bb"]]);var na=ia,ra=t.p+"img/illustration-stay-productive.d5ef95f0.png",la=t.p+"img/icon-arrow.67382af9.svg";const da={id:"team",class:"team"},Aa=(0,s.uE)('<div class="hold" data-v-4b971526><img class="team_img" src="'+ra+'" alt="" data-v-4b971526><div class="team_txt" data-v-4b971526><h1 class="team_title" data-v-4b971526>Stay productive, wherever you are</h1><p class="team_description" data-v-4b971526> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p><p class="team_description" data-v-4b971526> Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required. </p><a class="team_btn" href="/" data-v-4b971526>See how Fylo works <img src="'+la+'" alt="" data-v-4b971526></a></div></div>',1),fa=[Aa];function ua(a,e,t,o,c,i){return(0,s.wg)(),(0,s.iD)("section",da,fa)}var pa={name:"TeamSection"};const ma=(0,v.Z)(pa,[["render",ua],["__scopeId","data-v-4b971526"]]);var ha=ma,va="data:image/jpeg;base64,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",ya="data:image/jpeg;base64,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",ga="data:image/jpeg;base64,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";const ba={class:"testimon"},Ia=(0,s.uE)('<div class="hold" data-v-7f810fd9><article class="testimon_card" data-v-7f810fd9><p class="testimon_msg" data-v-7f810fd9> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p><div class="testimon_user" data-v-7f810fd9><img class="testimon_img" src="'+va+'" alt="" data-v-7f810fd9><div class="testimon_info" data-v-7f810fd9><h3 class="testimon_name" data-v-7f810fd9>Satish Patel</h3><p class="testimon_description" data-v-7f810fd9>Founder &amp; CEO, Huddle</p></div></div></article><article class="testimon_card" data-v-7f810fd9><p class="testimon_msg" data-v-7f810fd9> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p><div class="testimon_user" data-v-7f810fd9><img class="testimon_img" src="'+ya+'" alt="" data-v-7f810fd9><div class="testimon_info" data-v-7f810fd9><h3 class="testimon_name" data-v-7f810fd9>Bruce McKenzle</h3><p class="testimon_description" data-v-7f810fd9>Founder &amp; CEO, Huddle</p></div></div></article><article class="testimon_card" data-v-7f810fd9><p class="testimon_msg" data-v-7f810fd9> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p><div class="testimon_user" data-v-7f810fd9><img class="testimon_img" src="'+ga+'" alt="" data-v-7f810fd9><div class="testimon_info" data-v-7f810fd9><h3 class="testimon_name" data-v-7f810fd9>Iva Boyd</h3><p class="testimon_description" data-v-7f810fd9>Founder &amp; CEO, Huddle</p></div></div></article></div>',1),wa=[Ia];function Sa(a,e,t,o,c,i){return(0,s.wg)(),(0,s.iD)("section",ba,wa)}var ja={name:"TestimonialSection"};const ka=(0,v.Z)(ja,[["render",Sa],["__scopeId","data-v-7f810fd9"]]);var Da=ka,Qa={name:"App",components:{HeaderSection:$,IntroSection:na,FeatureSection:x,TeamSection:ha,TestimonSection:Da,AcessSection:g,FooterSection:L},data(){return{showBackToTop:!1}},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){this.showBackToTop=window.scrollY>100}},created(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const Ba=(0,v.Z)(Qa,[["render",i]]);var Ea=Ba;const xa=(0,o.ri)(Ea);xa.component("HeaderSection",$),xa.component("IntroSection",na),xa.component("FeatureSection",x),xa.component("TeamSection",ha),xa.component("TestimonSection",Da),xa.component("AcessSection",g),xa.component("FooterSection",L),(0,o.ri)(Ea).mount("#app")}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var c=e[o]={exports:{}};return a[o].call(c.exports,c,c.exports,t),c.exports}t.m=a,function(){var a=[];t.O=function(e,o,s,c){if(!o){var i=1/0;for(d=0;d<a.length;d++){o=a[d][0],s=a[d][1],c=a[d][2];for(var n=!0,r=0;r<o.length;r++)(!1&c||i>=c)&&Object.keys(t.O).every((function(a){return t.O[a](o[r])}))?o.splice(r--,1):(n=!1,c<i&&(i=c));if(n){a.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}c=c||0;for(var d=a.length;d>0&&a[d-1][2]>c;d--)a[d]=a[d-1];a[d]=[o,s,c]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/Fylo-dark-theme-landing-page/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var s,c,i=o[0],n=o[1],r=o[2],l=0;if(i.some((function(e){return 0!==a[e]}))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(r)var d=r(t)}for(e&&e(o);l<i.length;l++)c=i[l],t.o(a,c)&&a[c]&&a[c][0](),a[c]=0;return t.O(d)},o=self["webpackChunkfylo_dark_theme_vue"]=self["webpackChunkfylo_dark_theme_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2013)}));o=t.O(o)})();
//# sourceMappingURL=app.3adc6e2f.js.map