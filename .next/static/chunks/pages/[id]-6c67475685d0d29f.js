(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5900:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return t(515)}])},515:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return c}});var r=t(5893),i=t(1708),a=t(1489),l=t(4609),s=t(35);t(1664),t(1163),t(7294),t(8235);let o=n=>{let{data:e}=n;console.log(e);let t=n=>{fetch("http://localhost:8080/wishlist",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then(n=>n.json()).then(n=>console.log(n))};return(0,r.jsx)("div",{children:(0,r.jsx)(i.r,{textAlign:"center",alignContent:"center",children:e.map(n=>(0,r.jsxs)(a.P,{border:"1px solid black",marginTop:"50px",children:[(0,r.jsx)(l.E,{src:n.Images[2],width:"800px",height:"500px",marginLeft:"280px"}),(0,r.jsx)("h4",{children:n.Title}),(0,r.jsx)("p",{children:n.Genre}),(0,r.jsx)("p",{children:n.imdbRating}),(0,r.jsx)("p",{children:n.imdbVotes}),(0,r.jsx)(s.z,{onClick:()=>t(n),children:"ADD TO WATCHLIST"})]},n.imdbID))})})};var c=!0;e.default=o},1163:function(n,e,t){t(880)},35:function(n,e,t){"use strict";t.d(e,{z:function(){return g}});var r=t(7294),[i,a]=(0,t(5227).k)({strict:!1,name:"ButtonGroupContext"}),l=t(6660),s=t(5432),o=t(5893);function c(n){let{children:e,className:t,...i}=n,a=(0,r.isValidElement)(e)?(0,r.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,c=(0,s.cx)("chakra-button__icon",t);return(0,o.jsx)(l.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:c,children:a})}c.displayName="ButtonIcon";var u=t(295);function d(n){let{label:e,placement:t,spacing:i="0.5rem",children:a=(0,o.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:d,...m}=n,p=(0,s.cx)("chakra-button__spinner",c),f="start"===t?"marginEnd":"marginStart",g=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[f]:e?i:0,fontSize:"1em",lineHeight:"normal",...d}),[d,e,f,i]);return(0,o.jsx)(l.m.div,{className:p,...m,__css:g,children:a})}d.displayName="ButtonSpinner";var m=t(5059),p=t(1628),f=t(3179),g=(0,m.G)((n,e)=>{let t=a(),i=(0,p.mq)("Button",{...t,...n}),{isDisabled:c=null==t?void 0:t.isDisabled,isLoading:u,isActive:m,children:g,leftIcon:x,rightIcon:_,loadingText:j,iconSpacing:b="0.5rem",type:v,spinner:y,spinnerPlacement:w="start",className:N,as:C,...S}=(0,f.Lr)(n),k=(0,r.useMemo)(()=>{let n={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!t&&{_focus:n}}},[i,t]),{ref:E,type:T}=function(n){let[e,t]=(0,r.useState)(!n),i=(0,r.useCallback)(n=>{n&&t("BUTTON"===n.tagName)},[]);return{ref:i,type:e?"button":void 0}}(C),A={rightIcon:_,leftIcon:x,iconSpacing:b,children:g};return(0,o.jsxs)(l.m.button,{disabled:c||u,ref:function(...n){return(0,r.useMemo)(()=>(function(...n){return e=>{n.forEach(n=>{!function(n,e){if(null!=n){if("function"==typeof n){n(e);return}try{n.current=e}catch(t){throw Error(`Cannot assign value '${e}' to ref '${n}'`)}}}(n,e)})}})(...n),n)}(e,E),as:C,type:null!=v?v:T,"data-active":(0,s.PB)(m),"data-loading":(0,s.PB)(u),__css:k,className:(0,s.cx)("chakra-button",N),...S,children:[u&&"start"===w&&(0,o.jsx)(d,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:b,children:y}),u?j||(0,o.jsx)(l.m.span,{opacity:0,children:(0,o.jsx)(h,{...A})}):(0,o.jsx)(h,{...A}),u&&"end"===w&&(0,o.jsx)(d,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:b,children:y})]})});function h(n){let{leftIcon:e,rightIcon:t,children:r,iconSpacing:i}=n;return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)(c,{marginEnd:i,children:e}),r,t&&(0,o.jsx)(c,{marginStart:i,children:t})]})}g.displayName="Button"},1708:function(n,e,t){"use strict";t.d(e,{r:function(){return l}});var r=t(5059),i=t(6660),a=t(5893),l=(0,r.G)(function(n,e){let{templateAreas:t,gap:r,rowGap:l,columnGap:s,column:o,row:c,autoFlow:u,autoRows:d,templateRows:m,autoColumns:p,templateColumns:f,...g}=n;return(0,a.jsx)(i.m.div,{ref:e,__css:{display:"grid",gridTemplateAreas:t,gridGap:r,gridRowGap:l,gridColumnGap:s,gridAutoColumns:p,gridColumn:o,gridRow:c,gridAutoFlow:u,gridAutoRows:d,gridTemplateRows:m,gridTemplateColumns:f},...g})});l.displayName="Grid"},1489:function(n,e,t){"use strict";t.d(e,{P:function(){return o}});var r=t(5059),i=t(6660),a=t(5432);Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=t(5893);function s(n){var e;return e=n=>"auto"===n?"auto":`span ${n}/span ${n}`,Array.isArray(n)?n.map(n=>null===n?null:e(n)):(0,a.Kn)(n)?Object.keys(n).reduce((t,r)=>(t[r]=e(n[r]),t),{}):null!=n?e(n):null}var o=(0,r.G)(function(n,e){let{area:t,colSpan:r,colStart:a,colEnd:o,rowEnd:c,rowSpan:u,rowStart:d,...m}=n,p=function(n){let e=Object.assign({},n);for(let t in e)void 0===e[t]&&delete e[t];return e}({gridArea:t,gridColumn:s(r),gridRow:s(u),gridColumnStart:a,gridColumnEnd:o,gridRowStart:d,gridRowEnd:c});return(0,l.jsx)(i.m.div,{ref:e,__css:p,...m})});o.displayName="GridItem"}},function(n){n.O(0,[406,774,888,179],function(){return n(n.s=5900)}),_N_E=n.O()}]);