(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5900:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return t(515)}])},515:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return c}});var r=t(5893),i=t(1708),o=t(1489),s=t(4609),l=t(35);t(1664);var d=t(1163),u=t(7294);t(8235);let a=e=>{let{data1:n}=e,[t,a]=(0,u.useState)([]),c=(0,d.useRouter)();console.log(n);let{id:p}=c.query,g=e=>{fetch("https://movies-database-gold.vercel.app/movies?imdbID=".concat(e)).then(e=>e.json()).then(e=>console.log(a(e)))};(0,u.useEffect)(()=>{g(p)},[p]);let m=e=>{fetch("http://localhost:8080/wishlist",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>console.log(e))};return(0,r.jsx)("div",{children:(0,r.jsx)(i.r,{textAlign:"center",alignContent:"center",children:t.map(e=>(0,r.jsxs)(o.P,{border:"1px solid black",marginTop:"50px",children:[(0,r.jsx)(s.E,{src:e.Images[2],width:"800px",height:"500px",marginLeft:"280px"}),(0,r.jsx)("h4",{children:e.Title}),(0,r.jsx)("p",{children:e.Genre}),(0,r.jsx)("p",{children:e.imdbRating}),(0,r.jsx)("p",{children:e.imdbVotes}),(0,r.jsx)(l.z,{onClick:()=>m(e),children:"ADD TO WATCHLIST"})]},e.imdbID))})})};var c=!0;n.default=a},1163:function(e,n,t){e.exports=t(880)},1708:function(e,n,t){"use strict";t.d(n,{r:function(){return s}});var r=t(5059),i=t(6660),o=t(5893),s=(0,r.G)(function(e,n){let{templateAreas:t,gap:r,rowGap:s,columnGap:l,column:d,row:u,autoFlow:a,autoRows:c,templateRows:p,autoColumns:g,templateColumns:m,...h}=e;return(0,o.jsx)(i.m.div,{ref:n,__css:{display:"grid",gridTemplateAreas:t,gridGap:r,gridRowGap:s,gridColumnGap:l,gridAutoColumns:g,gridColumn:d,gridRow:u,gridAutoFlow:a,gridAutoRows:c,gridTemplateRows:p,gridTemplateColumns:m},...h})});s.displayName="Grid"},1489:function(e,n,t){"use strict";t.d(n,{P:function(){return d}});var r=t(5059),i=t(6660),o=t(5432);Object.freeze(["base","sm","md","lg","xl","2xl"]);var s=t(5893);function l(e){var n;return n=e=>"auto"===e?"auto":`span ${e}/span ${e}`,Array.isArray(e)?e.map(e=>null===e?null:n(e)):(0,o.Kn)(e)?Object.keys(e).reduce((t,r)=>(t[r]=n(e[r]),t),{}):null!=e?n(e):null}var d=(0,r.G)(function(e,n){let{area:t,colSpan:r,colStart:o,colEnd:d,rowEnd:u,rowSpan:a,rowStart:c,...p}=e,g=function(e){let n=Object.assign({},e);for(let t in n)void 0===n[t]&&delete n[t];return n}({gridArea:t,gridColumn:l(r),gridRow:l(a),gridColumnStart:o,gridColumnEnd:d,gridRowStart:c,gridRowEnd:u});return(0,s.jsx)(i.m.div,{ref:n,__css:g,...p})});d.displayName="GridItem"}},function(e){e.O(0,[302,774,888,179],function(){return e(e.s=5900)}),_N_E=e.O()}]);