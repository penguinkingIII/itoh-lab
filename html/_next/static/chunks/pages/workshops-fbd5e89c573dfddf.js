(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{8943:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops",function(){return l(7047)}])},7834:function(e,s,l){"use strict";l.d(s,{Z:function(){return c}});var n=l(5893);let c=e=>{let{children:s,className:l}=e;return(0,n.jsx)("div",{className:"bg-white md:w-11/12 flex flex-col items-center md:min-h-screen py-14 mb-20 ".concat(l),children:s})}},7047:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return t}});var n=l(5893),c=l(7834),d=l(7294);function t(){let[e,s]=(0,d.useState)([]);return(0,d.useEffect)(()=>{fetch("/workshops.csv").then(e=>e.text()).then(e=>e.split("\n")).then(e=>s(e.map(e=>{let s=e.split(","),l=[];var n=!1;for(let e=0;e<s.length;e++)n?(l[l.length-1]=l[l.length-1]+s[e].replace('"',""),s[e].includes('"')?n=!1:l[l.length-1]=l[l.length-1]+","):(l.push(s[e].replace('"',"")),s[e].includes('"')&&(n=!0,l[l.length-1]=l[l.length-1]+","));return{heading:l[0],date:l[1],place:l[2],reporter:l[3],title:l[4],abstract:l[5]}})))},[]),(0,n.jsxs)("div",{className:"md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ",children:[(0,n.jsx)("div",{className:"h-40 md:h-[500px] lg:h-[100vh] overflow-hidden md:w-screen",children:(0,n.jsx)("img",{src:"/workshops.jpg",alt:"univ",width:9999,height:9999})}),(0,n.jsxs)(c.Z,{className:"md:-mt-72 px-0 pr-10 pl-10",children:[(0,n.jsxs)("div",{className:"flex flex-col md:pr-5 pr-2 md:pl-5 pl-2 py-5 border-black border-2 md:mb-24 mb-5 items-center md:text-base text-xs",children:[(0,n.jsx)("div",{className:"JR",children:"地域科学WSは、応用地域学会会員もしくはWS運営メンバーの紹介で参加可能です。"}),(0,n.jsx)("div",{className:"JR",children:"参加希望の方は，WS運営メンバー曽、河野、伊藤、藤原にご連絡ください。"})]}),e.map((e,s)=>(console.log(e),(0,n.jsxs)("div",{className:"w-full my-10 md:pl-10 md:pr-10",children:[(0,n.jsx)("div",{className:"md:text-3xl text-xl mb-5 JR font-black",children:e.heading}),(0,n.jsxs)("div",{className:"mb-1 flex",children:[(0,n.jsx)("div",{className:"font-bold",children:" DATE:　"}),(0,n.jsx)("div",{className:"JR",children:e.date})]}),(0,n.jsxs)("div",{className:"mb-1 flex",children:[(0,n.jsx)("div",{className:" font-bold ",children:" PLACE:　"}),(0,n.jsx)("div",{className:"JR",children:e.place})]}),(0,n.jsxs)("div",{className:"mb-1 flex",children:[(0,n.jsx)("div",{className:" font-bold ",children:" TITLE:　"}),(0,n.jsx)("div",{className:"JR",children:e.title})]}),(0,n.jsxs)("div",{className:"mb-1 flex",children:[(0,n.jsx)("div",{className:" font-bold ",children:" REPORTER:　"}),(0,n.jsx)("div",{className:"JR",children:e.reporter})]}),(0,n.jsxs)("div",{className:"mb-1 md:flex",children:[(0,n.jsx)("div",{className:"font-bold inline",children:" ABSTRACT:　"}),(0,n.jsx)("div",{className:"JR inline md:block",children:e.abstract})]})]},s)))]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8943)}),_N_E=e.O()}]);