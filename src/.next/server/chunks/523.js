"use strict";exports.id=523,exports.ids=[523],exports.modules={87523:(e,t,s)=>{s.d(t,{f:()=>parseEther});var i=s(73214);function parseUnits(e,t){let[s,i="0"]=e.split("."),r=s.startsWith("-");if(r&&(s=s.slice(1)),i=i.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${i}`))&&(s=`${BigInt(s)+1n}`),i="";else if(i.length>t){let[e,r,n]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],l=Math.round(Number(`${r}.${n}`));(i=l>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${l}`).length>t&&(i=i.slice(1),s=`${BigInt(s)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${r?"-":""}${s}${i}`)}function parseEther(e,t="wei"){return parseUnits(e,i.ez[t])}}};