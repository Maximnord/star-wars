(this["webpackJsonpstar-app"]=this["webpackJsonpstar-app"]||[]).push([[0],[,,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return _})),n.d(t,"j",(function(){return j}));var a="https://",c="http://",r="swapi.dev/api/",s="people",i="/?page=",o=a+r+s+i,l=a+r+s,u=a+r+s+"/?search=",_=".jpg",j="https://starwars-visualguide.com/assets/img/characters"},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(8),c=n.n(a),r=n(15),s=n(6),i=function(e){return e?e.replace(s.e,s.f):e},o=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetch.",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Could not fetch.",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){e.exports={container:"ChooseSide_container__ubdtl",item:"ChooseSide_item__1_efY",item__header:"ChooseSide_item__header__2P2Eh",item__img:"ChooseSide_item__img__2HDgF",item__light:"ChooseSide_item__light__1e2Ei",item__dark:"ChooseSide_item__dark__1zbSR",item__neutral:"ChooseSide_item__neutral__2OR6J"}},,,function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__23xOC",list__item:"SearchPageInfo_list__item__rx6Z0",person__photo:"SearchPageInfo_person__photo__H-N6X",person__name:"SearchPageInfo_person__name__ykfhY",person__comment:"SearchPageInfo_person__comment__OZI9k"}},,function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__8sCXd",list__container:"PersonInfo_list__container__3lMRz",list__item:"PersonInfo_list__item__2EuiR",item__title:"PersonInfo_item__title__2PlM3"}},function(e,t,n){e.exports={wrapper__input:"UiInput_wrapper__input__1KVB2",input:"UiInput_input__1r7Xc",clear:"UiInput_clear__9bnOz",clear__disabled:"UiInput_clear__disabled__1T0F9"}},,,,function(e,t,n){e.exports={container:"PeopleNavigation_container__24OTa",buttons:"PeopleNavigation_buttons__sfYbp"}},function(e,t,n){e.exports={list__container:"PeopleList_list__container__3IvnA",list__item:"PeopleList_list__item__2M3tC",person__photo:"PeopleList_person__photo__1d0lz"}},function(e,t,n){e.exports={container:"PersonPhoto_container__1eOqk",photo:"PersonPhoto_photo__3PJBK",favorite:"PersonPhoto_favorite__16WEv"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__JoXYi",person__name:"PersonPage_person__name__13353",container:"PersonPage_container__HZiLA"}},function(e,t,n){e.exports={container:"Favorite_container__qHO3L",icon:"Favorite_icon__TRNNf",counter:"Favorite_counter__3aRtZ"}},function(e,t,n){e.exports={container:"Header_container__3QOjh",logo:"Header_logo__2AsOm",list__container:"Header_list__container__2J66V"}},,,function(e,t,n){e.exports={text:"ErrorMessage_text__2yo5_",video:"ErrorMessage_video__1Xc3s"}},function(e,t,n){e.exports={button:"UiButton_button__1Fs-d",dark:"UiButton_dark__KBKbi",light:"UiButton_light__gQpDV"}},,,function(e,t,n){e.exports={link:"PersonLinkBack_link__V0VL0",link__img:"PersonLinkBack_link__img__J-LTx"}},function(e,t,n){e.exports={loader:"UiLoading_loader__zQkbR",shadow:"UiLoading_shadow__2mzpp"}},function(e,t,n){e.exports={img:"NotFoundPage_img__1y7yp",text:"NotFoundPage_text__2IdlJ"}},,function(e,t,n){},,,,,function(e,t,n){e.exports={video:"UiVideo_video__XiBM9"}},function(e,t,n){e.exports={comment:"FavoritesPage_comment__1gBq_"}},function(e,t,n){e.exports={input__search:"SearchPage_input__search__3T2xK"}},function(e,t,n){e.exports={wrapper:"App_wrapper__3VyYE"}},,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(24),s=n.n(r),i=n(19),o=n(44),l=n(45),u=n(9),_=n(26),j="REMOVE_PERSON_FROM_FAVORITE",p="ADD_PERSON_TO_FAVORITE",d=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),t.payload);case j:return Object(_.omit)(e,[t.payload]);default:return e}},m=Object(i.combineReducers)({favoriteReducer:b}),h=Object(i.createStore)(m,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));h.subscribe((function(){var e,t;e="store",t=h.getState().favoriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var f=h,O=n(14),x=n(3),g=n(47),v=n(0),N="light",k="dark",P="neutral",S=c.a.createContext(),w=function(e){var t=e.children,n=Object(g.a)(e,["children"]),c=Object(a.useState)(null),r=Object(x.a)(c,2),s=r[0],i=r[1];return Object(v.jsx)(S.Provider,Object(u.a)(Object(u.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector(":root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n,")"))}))}(e)}}},n),{},{children:t}))},F=function(){return Object(a.useContext)(S)},y=n(5),C=n(4),I=n(13),E=n.n(I),R=n.p+"static/media/light.35ccdb32.jpg",B=n.p+"static/media/dark.97da47e4.jpg",L=n.p+"static/media/falcon.39a79338.jpg",A=n(17),T=n.n(A),H=function(e){var t=e.classes,n=e.theme,a=e.text,c=e.img,r=F();return Object(v.jsxs)("div",{className:E()(T.a.item,t),onClick:function(){return r.change(n)},children:[Object(v.jsx)("div",{className:T.a.item__header,children:a}),Object(v.jsx)("img",{className:T.a.item__img,src:c,alt:a})]})},M=function(){var e=[{theme:N,text:"Light Side",img:R,classes:T.a.item__light},{theme:k,text:"Dark Side",img:B,classes:T.a.item__dark},{theme:P,text:"Neutral Side",img:L,classes:T.a.item__neutral}];return Object(v.jsx)("div",{className:T.a.container,children:e.map((function(e,t){var n=e.theme,a=e.text,c=e.img,r=e.classes;return Object(v.jsx)(H,{theme:n,text:a,img:c,classes:r},t)}))})},U=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Home Page"}),Object(v.jsx)(M,{})]})},J=n(8),V=n.n(J),D=n(15),z=n(48),X=n.n(z),K=function(e){var t=e.src,n=e.classes,c=e.playbackRate,r=void 0===c?1:c,s=Object(a.useRef)(null);return Object(a.useEffect)((function(){s.current.playbackRate=r}),[]),Object(v.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,className:E()(X.a.video,n),playbackRate:r,ref:s,children:Object(v.jsx)("source",{src:t})})},Y=n.p+"static/media/error.db435084.mp4",q=n(35),W=n.n(q),Z=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{className:W.a.text,children:[Object(v.jsx)("h2",{children:"OOPS - 404!"}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"The page doesn't Exixs."}),Object(v.jsx)("h3",{children:"Sorry! We cannot display data..."})]}),Object(v.jsx)(K,{src:Y,classes:W.a.video,playbackRate:1})]})},G=function(e){return function(t){var n=Object(a.useState)(!1),c=Object(x.a)(n,2),r=c[0],s=c[1];return Object(v.jsx)(v.Fragment,{children:r?Object(v.jsx)(Z,{}):Object(v.jsx)(e,Object(u.a)({setErrorApi:s},t))})}},Q=n(36),$=n.n(Q),ee=(n(43),function(e){var t=e.text,n=e.onClick,a=e.disabled,c=e.theme,r=void 0===c?"dark":c,s=e.classes;return Object(v.jsx)("button",{onClick:n,disabled:a,className:E()($.a.button,$.a[r],s),children:t})}),te=n(27),ne=n.n(te),ae=function(e){var t=e.getResource,n=e.prevPage,a=e.nextPage,c=e.counterPage;return Object(v.jsxs)("div",{className:ne.a.container,children:[Object(v.jsx)(y.b,{to:"/people/?page=".concat(c-1),className:ne.a.buttons,children:Object(v.jsx)(ee,{text:"Previous",onClick:function(){return t(n)},disabled:!n})}),Object(v.jsx)(y.b,{to:"/people/?page=".concat(c+1),className:ne.a.buttons,children:Object(v.jsx)(ee,{text:"Next",onClick:function(){return t(a)},disabled:!a})})]})},ce=n(28),re=n.n(ce),se=function(e){var t=e.people;return Object(v.jsx)("ul",{className:re.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(v.jsx)("li",{className:re.a.list__item,children:Object(v.jsxs)(y.b,{to:"/people/".concat(t),children:[Object(v.jsx)("img",{className:re.a.person__photo,src:a,alt:n}),Object(v.jsx)("p",{children:n})]})},t)}))})},ie=n(16),oe=n(6),le=function(e){var t=e.lastIndexOf(oe.g),n=e.slice(t+oe.g.length,e.length);return Number(n)},ue=function(e){return function(e,t){return e.replace(oe.e+oe.i+t,"").replace(/\//g,"")}(e,oe.h)},_e=function(e){return"".concat(oe.j,"/").concat(e+oe.d)},je=G((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),c=Object(x.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(null),o=Object(x.a)(i,2),l=o[0],u=o[1],_=Object(a.useState)(null),j=Object(x.a)(_,2),p=j[0],d=j[1],b=Object(a.useState)(1),m=Object(x.a)(b,2),h=m[0],f=m[1],O=new URLSearchParams(Object(C.g)().search).get("page"),g=function(){var e=Object(D.a)(V.a.mark((function e(n){var a,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.b)(n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ue(n);return{id:a,name:t,img:_e(a)}})),s(c),u(Object(ie.a)(a.previous)),d(Object(ie.a)(a.next)),f(le(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(oe.a+O)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ae,{getResource:g,prevPage:l,nextPage:p,counterPage:h}),r&&Object(v.jsx)(se,{people:r})]})})),pe=n(22),de=n.n(pe),be=function(e){var t=e.personInfo;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:de.a.wrapper,children:Object(v.jsx)("ul",{className:de.a.list__container,children:t.map((function(e){var t=e.title,n=e.data;return n&&Object(v.jsxs)("li",{className:de.a.list__item,children:[Object(v.jsx)("span",{className:de.a.item__title,children:t}),": ",n]},t)}))})})})},me=n(25),he=n.p+"static/media/favorite.dc1b2dde.svg",fe=n.p+"static/media/favorite-fill.1f73e5fa.svg",Oe=n(29),xe=n.n(Oe),ge=function(e){var t=e.personId,n=e.personPhoto,a=e.personName,c=e.personFavorite,r=e.setPersonFavorite,s=Object(O.b)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:xe.a.container,children:[Object(v.jsx)("img",{className:xe.a.photo,src:n,alt:a}),Object(v.jsx)("img",{src:c?fe:he,onClick:function(){var e;c?(s(function(e){return{type:j,payload:e}}(t)),r(!1)):(s((e=Object(me.a)({},t,{name:a,img:n}),{type:p,payload:e})),r(!0))},className:xe.a.favorite,alt:"Add to Favorite"})]})})},ve=n.p+"static/media/back.9332ffb9.svg",Ne=n(39),ke=n.n(Ne),Pe=function(){var e=Object(C.f)();return Object(v.jsxs)("a",{href:"#",onClick:function(t){t.preventDefault(),e.goBack()},className:ke.a.link,children:[Object(v.jsx)("img",{className:ke.a.link__img,src:ve,alt:"Go Back"}),Object(v.jsx)("span",{children:"Go Back"})]})},Se=n.p+"static/media/loader-black.d8b26e7f.svg",we=n.p+"static/media/loader-white.39ba74ef.svg",Fe=n.p+"static/media/loader-blue.f8fe62e9.svg",ye=n(40),Ce=n.n(ye),Ie=function(e){var t=e.theme,n=void 0===t?"white":t,c=e.isShadow,r=void 0===c||c,s=e.classes,i=Object(a.useState)(null),o=Object(x.a)(i,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){switch(n){case"black":u(Se);break;case"white":u(we);break;case"blue":u(Fe);break;default:u(Se)}}),[]),Object(v.jsx)("img",{className:E()(Ce.a.loader,r&&Ce.a.shadow,s),src:l,alt:"Loader"})},Ee=n(30),Re=n.n(Ee),Be=c.a.lazy((function(){return n.e(3).then(n.bind(null,71))})),Le=G((function(e){var t=e.match,n=e.setErrorApi,c=Object(a.useState)(null),r=Object(x.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(null),l=Object(x.a)(o,2),u=l[0],_=l[1],j=Object(a.useState)(null),p=Object(x.a)(j,2),d=p[0],b=p[1],m=Object(a.useState)(null),h=Object(x.a)(m,2),f=h[0],g=h[1],N=Object(a.useState)(null),k=Object(x.a)(N,2),P=k[0],S=k[1],w=Object(a.useState)(!1),F=Object(x.a)(w,2),y=F[0],C=F[1],I=Object(O.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){Object(D.a)(V.a.mark((function e(){var a,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.id,e.next=3,Object(ie.b)("".concat(oe.b,"/").concat(a,"/"));case 3:c=e.sent,I[a]?C(!0):C(!1),i(a),c?(_([{title:"Height",data:c.height},{title:"Mass",data:c.mass},{title:"Hair color",data:c.hair_color},{title:"Eye color",data:c.eye_color},{title:"Skin color",data:c.skin_color},{title:"Birth year",data:c.birth_year},{title:"Gender",data:c.gender}]),b(c.name),g(_e(a)),c.films.length&&S(c.films),n(!1)):n(!0);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Pe,{}),Object(v.jsxs)("div",{className:Re.a.wrapper,children:[Object(v.jsx)("span",{className:Re.a.person__name,children:d}),Object(v.jsxs)("div",{className:Re.a.container,children:[Object(v.jsx)(ge,{personId:s,personPhoto:f,personName:d,personFavorite:y,setPersonFavorite:C}),u&&Object(v.jsx)(be,{personInfo:u}),P&&Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)(Ie,{}),children:Object(v.jsx)(Be,{personFilms:P})})]})]})]})})),Ae=n(41),Te=n.n(Ae),He=n.p+"static/media/not-found.69c88f33.jpg",Me=function(){var e=Object(C.g)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{className:Te.a.img,src:He,alt:"Nt Found"}),Object(v.jsxs)("p",{className:Te.a.text,children:["No match for ",Object(v.jsx)("u",{children:e.pathname})]})]})},Ue=n(49),Je=n.n(Ue),Ve=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(O.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.entries(r);if(e.length){var t=e.map((function(e){return Object(u.a)({id:e[0]},e[1])}));c(t)}}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Favorite Page"}),n.length?Object(v.jsx)(se,{people:n}):Object(v.jsx)("h2",{className:Je.a.comment,children:"No Data"})]})},De=n.p+"static/media/cancel.b69cec75.svg",ze=n(23),Xe=n.n(ze),Ke=function(e){var t=e.handleInputChange,n=e.value,a=e.placeholder,c=e.classes;return Object(v.jsxs)("div",{className:E()(Xe.a.wrapper__input,c),children:[Object(v.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:a,className:Xe.a.input}),Object(v.jsx)("img",{onClick:function(){return n&&t("")},src:De,alt:"Clear",className:E()(Xe.a.clear,!n&&Xe.a.clear__disabled)})]})},Ye=n(20),qe=n.n(Ye),We=function(e){var t=e.people;return Object(v.jsx)(v.Fragment,{children:t.length?Object(v.jsx)("ul",{className:qe.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(v.jsx)("li",{className:qe.a.list__item,children:Object(v.jsxs)(y.b,{to:"/people/".concat(t),children:[Object(v.jsx)("img",{className:qe.a.person__photo,src:a,alt:n}),Object(v.jsx)("p",{className:qe.a.person__name,children:n})]})},t)}))}):Object(v.jsx)("h2",{className:qe.a.person__comment,children:"No results"})})},Ze=n(50),Ge=n.n(Ze),Qe=[{path:"/",exact:!0,component:U},{path:"/people",exact:!0,component:je},{path:"/people/:id",exact:!0,component:Le},{path:"/favorites",exact:!0,component:Ve},{path:"/search",exact:!0,component:G((function(e){var t=e.setErrorApi,n=Object(a.useState)(""),c=Object(x.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(x.a)(i,2),l=o[0],u=o[1],j=function(){var e=Object(D.a)(V.a.mark((function e(n){var a,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.b)(oe.c+n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ue(n);return{id:a,name:t,img:_e(a)}})),u(c),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j("")}),[]);var p=Object(a.useCallback)(Object(_.debounce)((function(e){return j(e)}),300),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"header__text",children:"Search"}),Object(v.jsx)(Ke,{value:r,handleInputChange:function(e){s(e),p(e)},placeholder:"Input characters's name",classes:Ge.a.input__search}),Object(v.jsx)(We,{people:l})]})}))},{path:"/fail",exact:!0,component:Z},{path:"/not-found",exact:!0,component:Me},{path:"*",exact:!1,component:Me}],$e=n.p+"static/media/bookmark.b0632141.svg",et=n(31),tt=n.n(et),nt=function(){var e=Object(a.useState)(),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(O.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.keys(r).length;e.toString().length>2?c("..."):c(e)})),Object(v.jsx)("div",{className:tt.a.container,children:Object(v.jsxs)(y.b,{to:"/favorites",children:[Object(v.jsx)("span",{className:tt.a.counter,children:n}),Object(v.jsx)("img",{className:tt.a.icon,src:$e,alt:"Favorites"})]})})},at=n.p+"static/media/droid.de165dd8.svg",ct=n.p+"static/media/lightsaber.078d717f.svg",rt=n.p+"static/media/space.7a027c6e.svg",st=n(32),it=n.n(st),ot=function(){var e=Object(a.useState)(rt),t=Object(x.a)(e,2),n=t[0],c=t[1],r=F();return Object(a.useEffect)((function(){switch(r.theme){case N:c(ct);break;case k:c(rt);break;case P:c(at);break;default:c(rt)}}),[r]),Object(v.jsxs)("div",{className:it.a.container,children:[Object(v.jsx)("img",{className:it.a.logo,src:n,alt:"Star Wars"}),Object(v.jsxs)("ul",{className:it.a.list__container,children:[Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/",exact:!0,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/people/?page=1",children:"People"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/search",children:"Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)(y.c,{to:"/fail",children:"Fail Page"})})]}),Object(v.jsx)(nt,{})]})},lt=n(51),ut=n.n(lt),_t=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y.a,{children:Object(v.jsxs)("div",{className:ut.a.wrapper,children:[Object(v.jsx)(ot,{}),Object(v.jsx)(C.c,{children:Qe.map((function(e,t){return Object(v.jsx)(C.a,{path:e.path,exact:e.exact,component:e.component},t)}))})]})})})},jt=(n(67),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))});s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(O.a,{store:f,children:Object(v.jsx)(w,{children:Object(v.jsx)(_t,{})})})}),document.getElementById("root")),jt()}],[[68,1,2]]]);
//# sourceMappingURL=main.e8969ac9.chunk.js.map