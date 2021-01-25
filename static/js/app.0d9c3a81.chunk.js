(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return ke}));var a=n(0),r=n.n(a),o=n(57),i=n(194),l=n(21),c=n.n(l),s=n(7),m=n.n(s),d=n(19),p=n.n(d),u=n(230),g=n(397),f=n(193);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=n(6),S=n(2),w=n(3),v=n(97),E=n(128),x={navBackground:"lightgray",background:"whitesmoke",snipItemBackground:"gainsboro",snipBorder:"lightgray",primary:"dimgrey",text:"dimgrey",textGuide:"whitesmoke",textSnipTitle:"grey",textSnipContent:"dimgrey",error:"slategrey"},O={navBackground:"lightgray",background:"#101111",snipItemBackground:"dimgrey",snipBorder:"grey",primary:"dimgrey",text:"gainsboro",textGuide:"whitesmoke",textSnipTitle:"darkgray",textSnipContent:"silver",error:"slategrey"},k=a.createContext({isDark:!1,colors:x,setScheme:function(e){}}),D=function(e){var t;"web"===h.a.OS&&(t=t?localStorage.getItem("colorScheme"):"light");var n=t?"web"===h.a.OS&&t:Object(E.useColorScheme)(),r=a.useState("dark"===n),o=p()(r,2),i=o[0],l=o[1];a.useEffect((function(){l(t?"dark"===t:"dark"===n)}),[n]);var c={isDark:i,colors:i?O:x,setScheme:function(e){l("dark"===e),"web"===h.a.OS&&localStorage.setItem("colorScheme",e)}};return a.createElement(k.Provider,{value:c},e.children)},C=function(){return a.useContext(k)},j=n(48);function z(){var e=C(),t=e.setScheme,n=e.colors,r=e.isDark,o=S.a.create({container:{width:"100%",height:45,flexDirection:"row",alignContent:"center",justifyContent:"flex-end",flexWrap:"wrap",backgroundColor:"web"===h.a.OS?n.navBackground:n.background,padding:15,paddingTop:"ios"===h.a.OS?70:10,paddingBottom:"ios"===h.a.OS?30:10}});n.text,n.error;return a.createElement(w.a,{style:o.container},a.createElement(j.a,{name:"cloud-moon",size:20,color:n.primary,style:{marginRight:7},solid:!0}),a.createElement(v.a,{value:r,onValueChange:function(){t(r?"light":"dark")},thumbColor:n.error}))}var P=n(14),T=n.n(P),I=n(228),A=n(395),L=n(394),B=n(24),R=n(41);function G(e){var t=e.navigation,n=C().colors;return a.createElement(w.a,{style:H.container},a.createElement(j.a,{name:"hard-hat",size:30,color:n.text,style:{marginTop:50}}),a.createElement(R.b,{h4:!0},"Nothing is here."),a.createElement(B.a,{onPress:function(){return t.replace("Root")},style:H.link},a.createElement(R.b,{style:{fontSize:14,color:"#2e78b7"}},"Let's go home.")))}var H=S.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:20},link:{marginTop:15,paddingVertical:15}}),M=n(89),W=n(293),V=n(294),F=n(295),N=n(396),U=n(26),J=n(62),Y=n(50),K=n(34),q=n(29),Q=q.a.get("window").width,X={window:{width:Q,height:q.a.get("window").height},isSmallerDevice:Q<=280,isSmallDevice:Q<=768},_=n(142),Z=n(23),$=n(120);function ee(e){var t=e.url,n=e.text,o=(e.color,e.confirmText),i=e.cancelText,l=C().colors,s=S.a.create({btnLink:{flex:1,alignItems:"center",justifyContent:"center",width:170,height:37,backgroundColor:l.error,marginTop:17,elevation:8,borderRadius:3,paddingVertical:7,paddingHorizontal:13},btnLinkText:{color:l.background,fontSize:13,fontWeight:"web"===h.a.OS?"300":"700"}}),m=Object(a.useCallback)((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap($.a.canOpenURL(t));case 2:if(!e.sent){e.next=12;break}if("web"!=h.a.OS){e.next=8;break}window.open(t,"_blank"),e.next=10;break;case 8:return e.next=10,c.a.awrap($.a.openURL(t));case 10:e.next=13;break;case 12:_.a.alert("Invalid URL: "+t);case 13:case"end":return e.stop()}}),null,null,null,Promise)}),[t]);return r.a.createElement(B.a,{onPress:function(){o&&i?confirm(o)?m():alert(i):m()},style:s.btnLink},r.a.createElement(Z.a,{style:s.btnLinkText},n))}function te(e){var t=e.navigation,o=C().colors,i=Object(a.useState)(!0),l=p()(i,2),c=l[0],s=l[1];return r.a.createElement(w.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}},r.a.createElement(B.a,{onPress:function(){t.openDrawer()},style:{position:"absolute",top:"web"===h.a.OS?15:13,left:"web"===h.a.OS?15:13}},r.a.createElement(j.a,{name:"bars",size:21,color:o.primary,style:{paddingLeft:7},solid:!0})),r.a.createElement(Y.a,{style:{top:50}},r.a.createElement(w.a,{style:{paddingBottom:117,justifyContent:"center",alignItems:"center",backgroundColor:o.background}},r.a.createElement(J.a,{style:{display:"none",top:140},size:21,color:o.primary,animating:c}),r.a.createElement(K.a,{source:n(361),onLoadEnd:function(){s(!1)},style:{width:192,height:192,marginTop:30,marginBottom:50}}),"web"===h.a.OS&&r.a.createElement(R.b,{h4:!0,style:{color:o.text,fontWeight:"700"}},"Adrian Del Rosario"),"web"!==h.a.OS&&r.a.createElement(R.b,{h3:!0,style:{color:o.text,fontWeight:"300"}},"Adrian Del Rosario"),r.a.createElement(R.b,{style:{color:o.error,fontSize:17,fontWeight:"300"}},"Cross-Platform Digital Portfolio"),r.a.createElement(R.b,{style:{color:o.text,fontSize:14,marginTop:40,paddingHorizontal:"web"===h.a.OS?X.isSmallDevice?"7%":"27%":"13%"}},"Adrian is a Web Developer focused on developing Web Applications using Front-end Web Technologies.","\n","\n","He has been delivering various applications ranging from UI and Animation to communication, computation, and manipulation of queries and content for the last seven (7) years.","\n","\n","He handled projects before as a UI Hybrid Mobile Developer for US based Toll Agency and supported Accenture\u2019s Business Development for a Hong Kong based Housing Agency with the same role.","\n","\n","Recently, he worked on a project for a Global Law Firm based in the US using Angular2 in maintaining their records, and continued developing Mobile Applications for a Global Loyalty Solutions Provider catering big 5* Star Hotel Clients such as Hilton, MarcoPolo, ClubHotel, and more."),"web"===h.a.OS&&r.a.createElement(R.b,{style:{color:o.text,fontSize:14,marginTop:40,paddingHorizontal:"web"===h.a.OS?X.isSmallDevice?"7%":"27%":"13%"}},"You are viewing on the web. For a more native experience, download the Expo app.",r.a.createElement(j.a,{name:"app-store",size:21,color:o.primary,style:{paddingLeft:7},solid:!0}),r.a.createElement(j.a,{name:"google-play",size:21,color:o.primary,style:{paddingLeft:7},solid:!0})),"web"===h.a.OS&&r.a.createElement(ee,{url:"https://apps.apple.com/ph/app/expo-client/id982107779",text:"Apple Store",color:"#D3D3D3"}),"web"===h.a.OS&&r.a.createElement(ee,{url:"https://play.google.com/store/apps/details?id=host.exp.exponent",text:"Play Store",color:"#D3D3D3"}),"web"===h.a.OS&&r.a.createElement(R.b,{style:{color:o.text,fontSize:14,marginTop:30,paddingHorizontal:"web"===h.a.OS?X.isSmallDevice?"7%":"27%":"13%"}},"If you have the Expo client already, you may open my app through this link."),"web"===h.a.OS&&r.a.createElement(ee,{url:"exp://exp.host/@adriandelr/Portfolio",text:"Portfolio App",color:"#D3D3D3",confirmText:"Are you sure you have installed the Expo client?",cancelText:"Please download the Expo client."}))))}function ne(){var e=C().colors,t=Object(U.useNavigation)(),n=Object(U.useIsFocused)();function r(r){return a.createElement(W.a,r,a.createElement(V.a,r),a.createElement(F.a,{label:function(){return a.createElement(R.b,{style:{color:e.text}},"Projects")},onPress:function(){t.navigate("TabProjects"),t.dispatch(U.DrawerActions.closeDrawer())},icon:function(){return a.createElement(M.a,{color:e.text,size:24,name:n?"briefcase-sharp":"briefcase-outline"})}}),a.createElement(F.a,{label:function(){return a.createElement(R.b,{style:{color:e.text}},"Snippets")},onPress:function(){t.navigate("TabSnippets"),t.dispatch(U.DrawerActions.closeDrawer())},icon:function(){return a.createElement(M.a,{color:e.text,size:24,name:n?"list-circle-sharp":"list-circle-outline"})}}))}var o=Object(N.a)();return a.createElement(o.Navigator,{initialRouteName:"Dev",drawerContent:function(e){return a.createElement(r,e)},drawerType:"slide",drawerStyle:{backgroundColor:e.background,width:200},edgeWidth:200,minSwipeDistance:10,sceneContainerStyle:{backgroundColor:"transparent"}},a.createElement(o.Screen,{name:"Dev",component:te,options:{drawerIcon:function(){return a.createElement(M.a,{color:e.text,size:24,name:n?"person-circle-sharp":"person-circle-outline"})}}}))}var ae=n(83);function re(){var e=C().colors,t=[{year:"2021",data:[{title:"Portfolio",description:"New year, new app! \n\nMy very own Digital Portfolio, made using React Native by Facebook.",time:"1 month",date:"Jan 2021",image:n(370)}]},{year:"2017",data:[{title:"Hospitality Marketing Concepts LLC",description:"In a remote setup, I was mainly in charge of the mobile app\u2019s front end maintenance, bug fixes, and testing of the company\u2019s existing platform. \n\nRegular discussion of improvement with the President / Chief Marketing Officer, and IT Manager to make sure we are always intact with our client\u2019s requirements. \n\nConstant team communication via email, and skype in an Agile setting. Lately, adding Scrum to it. Additionally, I have recruited, and trained two developers that helped us in our development. \n\nFor more details, please see Resume, and Store Links.",time:"2 years 7 months",date:"Sept 2017 - Mar 2020",image:n(371),showResume:!0,storeLink:"https://play.google.com/store/apps/developer?id=Hospitality+Marketing+Concepts"}]},{year:"2014",data:[{title:"Accenture Philippines Inc.",description:"\u2023 Large Restaurant Chain and International Franchise in US \n\u2023 Toll Highway Administrative Agency in US \n\u2023 Public Housing Agency Provider in Hong Kong \n\u2023 British Multinational Telecommunications Company in UK \n\u2023 Work Schedule Management Application in Internal Business Development \n\u2023 Presentation Management Application in Internal Business Development \n\u2023 Facilitation of AngularJS training \n\u2023 Estimation on Agile Sprint Complexity \n\u2023 Brown Bag Compilation \n\u2023 Global Law Firm in US \n\nFor more details, please see Resume link.",time:"2 years 5 months",date:"Dec 2014 - April 2017",image:n(372),showResume:!0}]},{year:"2013",data:[{title:"WideOut (WF) Inc.",description:"R&D on various website features using Agile Method and Frameworks such as: CodeIgniter and Wordpress while observing proper responsive web design. \n\nWorked on a location-based mobile marketing service, an advanced, complete Anti-Theft Technology for mobile phones, and a social media website that utilizes Youtube and social media login APIs.",time:"1 year",date:"Sep 2013 - Aug 2014",image:n(373)}]},{year:"2012",data:[{title:"IBM Philippines Inc.",description:"Designed and organized banners, posters, slogans, prints, and documents for formal events. \n\nProduced video slides and presentations for company news and events updates.",time:"6 months",date:" Jun - Dec 2012",image:n(374)}]},{year:"2012",data:[{title:"Avolution Inc.",description:"Redesigned and redeveloped the old flash site to the modern web standard with SEO Optimization. Designed the header of the logo and tagline.",time:"2 months",date:"Apr - May 2012",image:n(375)}]},{year:"2011",data:[{title:"CATA Construction Philippines Corp.",description:"Constructed the old website\u2019s sitemap and enhanced images for web presentation.",time:"2 months",date:"Apr - May 2011",image:n(376)}]}],a=function(t){var n=t.projItem;return r.a.createElement(w.a,{style:o.item},r.a.createElement(Z.a,{style:o.title},n.title),r.a.createElement(Z.a,{style:o.time},n.time),r.a.createElement(K.a,{source:n.image,style:{width:"100%",height:"web"===h.a.OS?370:190,marginVertical:7,backgroundColor:e.error},resizeMode:"contain"}),r.a.createElement(Z.a,{style:o.desc},n.description),n.showResume&&r.a.createElement(ee,{url:"https://drive.google.com/file/d/1MX6I97C9fx8CTzV5YQhRPwYdyAEjsyhm/view?usp=sharing",text:"Open Resume",color:"#D3D3D3"}),n.storeLink&&r.a.createElement(ee,{url:n.storeLink,text:"Store Link",color:"#D3D3D3"}),r.a.createElement(Z.a,{style:o.date},n.date))},o=S.a.create({container:{flex:1,paddingHorizontal:3},section:{paddingTop:7,paddingHorizontal:"web"===h.a.OS?X.isSmallDevice?"0%":"21%":0},item:{padding:21,marginVertical:17},header:{display:"none",fontSize:13,color:e.error,textAlign:"right",paddingRight:17},title:{fontSize:"web"===h.a.OS?27:19,color:e.text,fontWeight:"web"===h.a.OS?"normal":"300"},desc:{fontSize:"web"===h.a.OS?14:17,color:e.text},time:{fontSize:13,color:e.error},date:{fontSize:13,color:e.error,marginTop:13}});return r.a.createElement(w.a,{style:o.container},r.a.createElement(ae.a,{sections:t,keyExtractor:function(e,t){return e},renderItem:function(e){var t=e.item;return r.a.createElement(a,{projItem:t})},renderSectionHeader:function(e){var t=e.section.year;return r.a.createElement(Z.a,{style:o.header},t)},style:o.section}))}var oe=n(76),ie=n(37);function le(){var e=C().colors;function t(e){var t=e.snipItem,o=Object(a.useState)(!1),i=p()(o,2),l=i[0],c=i[1];return r.a.createElement(B.a,{style:[n.item,!l&&{height:40}],onPress:function(){oe.a.configureNext(oe.a.Presets.easeInEaseOut),c(!l)},activeOpacity:1},r.a.createElement(Z.a,{style:[n.title,{paddingVertical:l?3:0}],numberOfLines:l?0:1},t.title),l&&r.a.createElement(w.a,null,r.a.createElement(Z.a,{style:n.content},t.content)))}var n=S.a.create({container:{flex:1,paddingHorizontal:50},section:{},header:{fontSize:17,color:e.error,marginTop:40},item:{width:"100%",alignItems:"flex-start",justifyContent:"center",paddingLeft:7,paddingRight:37,borderWidth:1,borderColor:e.snipBorder,marginTop:17,overflow:"hidden",backgroundColor:e.snipItemBackground},title:{fontSize:(h.a.OS,15),color:e.textSnipTitle,fontWeight:"web"===h.a.OS?"normal":"300"},content:{fontSize:14,color:e.textSnipContent,paddingBottom:3}});return r.a.createElement(w.a,{style:n.container},r.a.createElement(ae.a,{sections:[{title:"General",data:[{title:"Agile and Scrum",content:"Agile is a general approach to project management, whereas scrum is just one of the different ways to practice agile. Agile is a set of guiding principles and ideals, but it doesn't say how exactly those values should be implemented. Scrum is a framework that provides specific rules for getting things done."}]},{title:"HTML",data:[{title:"HTML5 Basics For Everyone Tired Of Reading About Deprecated Code",content:"Content..."}]},{title:"JavaScript",data:[{title:"Variable Shadowing",content:"Content..."}]},{title:"CSS",data:[{title:"Common Screen Resolution",content:"Content...",link:"https://www.designrush.com/trends/website-dimensions"}]}],keyExtractor:function(e,t){return String(t)},renderItem:function(e){var n=e.item;return r.a.createElement(t,{snipItem:n})},renderSectionHeader:function(e){var t=e.section.title;return r.a.createElement(Z.a,{style:n.header},t)},style:n.section}))}"android"===h.a.OS&&ie.a.setLayoutAnimationEnabledExperimental&&ie.a.setLayoutAnimationEnabledExperimental(!0);var ce=Object(L.a)();function se(e){e.colorScheme;var t=C().colors;return a.createElement(I.a,null,a.createElement(ce.Navigator,{initialRouteName:"TabDev",tabBarPosition:"web"===h.a.OS?"top":"bottom",lazy:!0,lazyPreloadDistance:.3,swipeVelocityImpact:.3,tabBarOptions:{activeTintColor:t.primary,style:{backgroundColor:"web"===h.a.OS?t.navBackground:t.background},showIcon:!0,indicatorStyle:{backgroundColor:t.primary},iconStyle:{flexWrap:"wrap"},pressColor:"whitesmoke",allowFontScaling:!1},style:{backgroundColor:t.background},sceneContainerStyle:{backgroundColor:"transparent"}},a.createElement(ce.Screen,{name:"TabDev",component:ue,options:{tabBarLabel:"Dev",tabBarIcon:function(e){var t=e.color;return a.createElement(me,{name:"person-circle-sharp",color:t})}}}),a.createElement(ce.Screen,{name:"TabProjects",component:fe,options:{tabBarLabel:"Projects",tabBarIcon:function(e){var t=e.color;return a.createElement(me,{name:"briefcase-sharp",color:t})}}}),a.createElement(ce.Screen,{name:"TabSnippets",component:ye,options:{tabBarLabel:"Snippets",tabBarIcon:function(e){var t=e.color;return a.createElement(me,{name:"list-circle-sharp",color:t})}}})))}function me(e){return a.createElement(M.a,T()({size:30,style:{marginBottom:-3}},e))}var de="Adrian del Rosario - ",pe=Object(A.a)();function ue(){return a.createElement(pe.Navigator,null,a.createElement(pe.Screen,{name:"TabMainScreen",component:ne,options:{title:de+"Dev",headerShown:!1,cardStyle:{backgroundColor:"transparent"}}}),a.createElement(pe.Screen,{name:"NotFound",component:G,options:{title:"Oops!"}}))}var ge=Object(A.a)();function fe(){return a.createElement(ge.Navigator,null,a.createElement(ge.Screen,{name:"TabProjectsScreen",component:re,options:{title:de+"Projects",headerShown:!1,cardStyle:{backgroundColor:"transparent"}}}))}var be=Object(A.a)();function ye(){return a.createElement(be.Navigator,null,a.createElement(be.Screen,{name:"TabSnippetsScreen",component:le,options:{title:de+"Snippets",headerShown:!1,cardStyle:{backgroundColor:"transparent"}}}))}var he=n(15),Se=n(46),we=n(192),ve=n.n(we);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Oe(){var e=C(),t=(e.setScheme,e.colors),n=(e.isDark,Object(a.useState)(!1)),o=p()(n,2),i=o[0],l=o[1],c=function(){l(!i)},s=function(e){var t=Object(a.useRef)(new he.a.Value(1)).current,n=Object(a.useRef)(new he.a.Value(0)).current,o="left"==e.direction?-173:173;return Object(a.useEffect)((function(){!function e(a){setTimeout((function(){i&&(he.a.timing(t,{useNativeDriver:!0,isInteraction:!1,toValue:0,duration:900,easing:Se.a.linear}).start((function(){setTimeout((function(){t.setValue(1)}),900)})),he.a.timing(n,{useNativeDriver:!0,isInteraction:!1,toValue:o,duration:700,easing:Se.a.linear}).start((function(){setTimeout((function(){n.setValue(0)}),700)}))),--a&&e(a)}),3e3)}(1e3)}),[t,0,900,n,o,700]),r.a.createElement(he.a.View,{style:xe(xe({},e.style),{},{opacity:t,transform:[{translateX:n}]})},e.children)};return ve.a.setAppElement("body"),r.a.createElement(w.a,{style:{position:"absolute",top:0,left:0,padding:11,width:i?"100%":void 0,height:i?"100%":void 0,zIndex:1,elevation:1,flexDirection:"row"}},r.a.createElement(B.a,{onPress:c,style:{flexDirection:"row",top:"ios"===h.a.OS?50:0}},r.a.createElement(j.a,{name:"info-circle",size:21,color:t.primary,style:{paddingLeft:9},solid:!0}),r.a.createElement(R.b,{style:{color:t.primary,fontSize:13,alignSelf:"center",fontWeight:"700",marginLeft:7}},"User Guide")),r.a.createElement(R.a,{ModalComponent:"web"===h.a.OS?ve.a:void 0,isVisible:i,overlayStyle:{backgroundColor:"transparent",opacity:1,elevation:0,shadowOpacity:0,width:"100%",height:"100%"}},r.a.createElement(B.a,{onPress:c,style:{flex:1}},r.a.createElement(w.a,{style:{alignItems:"flex-start",flex:1,justifyContent:"center"}},r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:23,position:"absolute",top:X.isSmallDevice?"37%":"27%",flex:1,alignSelf:"center",fontWeight:"700"}},"Quick User Guide"),r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13,position:"absolute",top:X.isSmallDevice?"39%":"23%",flex:1,alignSelf:"center",fontWeight:"300",padding:"7%",textAlign:"center"}},"Tap anywhere to dismiss."),r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13,position:"absolute",top:X.isSmallDevice?"43%":"29%",flex:1,alignSelf:"center",fontWeight:"300",padding:"7%",textAlign:"center"}},"Have a look on the features, navigations, and gestures."),r.a.createElement(w.a,{style:{position:"absolute",top:"web"===h.a.OS?20:10,left:"web"===h.a.OS?20:40,flex:1,alignItems:"flex-start"}},r.a.createElement(j.a,{name:"long-arrow-alt-up",size:37,color:t.textGuide,style:{marginLeft:7,transform:[{rotate:"-37deg"}]},solid:!0}),r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13}},"Toggle Guide")),r.a.createElement(w.a,{style:{position:"absolute",top:"web"===h.a.OS?123:48,left:"web"===h.a.OS?5:3,flex:1,alignItems:"flex-start"}},r.a.createElement(j.a,{name:"bars",size:21,color:t.primary,style:{paddingLeft:7},solid:!0}),r.a.createElement(j.a,{name:"long-arrow-alt-up",size:37,color:t.textGuide,style:{marginLeft:7,transform:[{rotate:"-7deg"}]},solid:!0}),r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13,width:X.isSmallerDevice?"73%":"30%"}},"Toggle Side Menu on the first page")),r.a.createElement(w.a,{style:{position:"absolute",top:10,right:60,flex:1,alignItems:"center"}},r.a.createElement(j.a,{name:"long-arrow-alt-up",size:37,color:t.textGuide,style:{marginLeft:7,transform:[{rotate:"73deg"}]},solid:!0}),r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13}},"Toggle Dark Mode")),"web"!==h.a.OS&&r.a.createElement(w.a,{style:{marginTop:"37%",marginLeft:"3%"}},r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13,marginLeft:15}},"Swipe to open drawer on the first page"),r.a.createElement(s,null,r.a.createElement(j.a,{name:"hand-point-up",size:37,color:t.textGuide,style:{marginLeft:7},solid:!0}))),r.a.createElement(w.a,{style:{position:"absolute",top:"70%",right:"7%",flex:1,alignItems:"flex-end"}},r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13}},"Swipe to move between pages"),r.a.createElement(s,{direction:"left"},r.a.createElement(j.a,{name:"hand-point-up",size:37,color:t.textGuide,style:{marginLeft:7},solid:!0}))),"web"===h.a.OS&&r.a.createElement(w.a,{style:{position:"absolute",top:90,marginLeft:X.isSmallDevice?X.isSmallerDevice?210:300:370,flex:1,alignItems:"flex-start",alignSelf:"center"}},r.a.createElement(j.a,{name:"long-arrow-alt-up",size:37,color:t.textGuide,style:{marginLeft:7,transform:[{rotate:"-37deg"}]},solid:!0}),r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13}},"Tabs to navigate between pages")),"web"!==h.a.OS&&r.a.createElement(w.a,{style:{position:"absolute",bottom:50,flex:1,alignSelf:"center",justifyContent:"center"}},r.a.createElement(R.b,{style:{color:t.textGuide,fontSize:13}},"Tabs to navigate between pages"),r.a.createElement(j.a,{name:"long-arrow-alt-down",size:37,color:t.textGuide,style:{marginLeft:7},solid:!0}))))),i&&r.a.createElement(w.a,{style:{backgroundColor:t.background,opacity:.97,position:"absolute",top:"web"===h.a.OS?120:95,left:0,width:X.window.width,height:X.window.height-203}}))}function ke(){return function(){var e=a.useState(!1),t=p()(e,2),r=t[0],o=t[1];return a.useEffect((function(){c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.b(),e.next=4,c.a.awrap(g.b(y(y({},u.a.font),{},{"space-mono":n(324)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,o(!0),f.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}()?r.a.createElement(i.b,null,r.a.createElement(E.AppearanceProvider,null,r.a.createElement(D,null,r.a.createElement(Oe,null),r.a.createElement(z,null),r.a.createElement(se,{colorScheme:"dark"===E.Appearance.getColorScheme()?"dark":"light"}),r.a.createElement(o.a,null)))):null}},304:function(e,t,n){e.exports=n(383)},324:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},361:function(e,t,n){e.exports=n.p+"static/media/az-logo.1a07737f.png"},370:function(e,t,n){e.exports=n.p+"static/media/az-proj.3966a7c7.png"},371:function(e,t,n){e.exports=n.p+"static/media/proj-hmc.9fc7a164.png"},372:function(e,t,n){e.exports=n.p+"static/media/proj-acn.ce1a887d.png"},373:function(e,t,n){e.exports=n.p+"static/media/proj-wo.c45f277a.png"},374:function(e,t,n){e.exports=n.p+"static/media/proj-ibm.ffd5f01f.png"},375:function(e,t,n){e.exports=n.p+"static/media/proj-avo.56d3b876.png"},376:function(e,t,n){e.exports=n.p+"static/media/proj-cata.706fbbe0.png"}},[[304,1,2]]]);
//# sourceMappingURL=app.0d9c3a81.chunk.js.map