"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{39580:function(A,e,t){function decode_arithmetic(A){let e=0;function u16(){return A[e++]<<8|A[e++]}let t=u16(),r=1,o=[0,1];for(let A=1;A<t;A++)o.push(r+=u16());let C=u16(),g=e;e+=C;let n=0,c=0;function read_bit(){return 0==n&&(c=c<<8|A[e++],n=8),c>>--n&1}let l=2147483648-1,a=0;for(let A=0;A<31;A++)a=a<<1|read_bit();let s=[],i=0,B=2147483648;for(;;){let A=Math.floor(((a-i+1)*r-1)/B),e=0,C=t;for(;C-e>1;){let t=e+C>>>1;A<o[t]?C=t:e=t}if(0==e)break;s.push(e);let g=i+Math.floor(B*o[e]/r),n=i+Math.floor(B*o[e+1]/r)-1;for(;((g^n)&1073741824)==0;)a=a<<1&l|read_bit(),g=g<<1&l,n=n<<1&l|1;for(;g&~n&536870912;)a=1073741824&a|a<<1&l>>>1|read_bit(),g=g<<1^1073741824,n=(1073741824^n)<<1|1073741825;i=g,B=1+n-g}let f=t-4;return s.map(e=>{switch(e-f){case 3:return f+65792+(A[g++]<<16|A[g++]<<8|A[g++]);case 2:return f+256+(A[g++]<<8|A[g++]);case 1:return f+A[g++];default:return e-1}})}function read_payload(A){let e=0;return()=>A[e++]}function unsafe_atob(A){let e=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((A,t)=>e[A.charCodeAt(0)]=t);let t=A.length,r=new Uint8Array(6*t>>3);for(let o=0,C=0,g=0,n=0;o<t;o++)n=n<<6|e[A.charCodeAt(o)],(g+=6)>=8&&(r[C++]=n>>(g-=8));return r}function signed(A){return 1&A?~A>>1:A>>1}function read_deltas(A,e){let t=Array(A);for(let r=0,o=0;r<A;r++)t[r]=o+=signed(e());return t}function read_sorted(A,e=0){let t=[];for(;;){let r=A(),o=A();if(!o)break;e+=r;for(let A=0;A<o;A++)t.push(e+A);e+=o+1}return t}function read_sorted_arrays(A){return read_array_while(()=>{let e=read_sorted(A);if(e.length)return e})}function read_mapped(A){let e=[];for(;;){let t=A();if(0==t)break;e.push(read_linear_table(t,A))}for(;;){let t=A()-1;if(t<0)break;e.push(read_replacement_table(t,A))}return e.flat()}function read_array_while(A){let e=[];for(;;){let t=A(e.length);if(!t)break;e.push(t)}return e}function read_transposed(A,e,t){let r=Array(A).fill().map(()=>[]);for(let o=0;o<e;o++)read_deltas(A,t).forEach((A,e)=>r[e].push(A));return r}function read_linear_table(A,e){let t=1+e(),r=e(),o=read_array_while(e);return read_transposed(o.length,1+A,e).flatMap((A,e)=>{let[C,...g]=A;return Array(o[e]).fill().map((A,e)=>{let o=e*r;return[C+e*t,g.map(A=>A+o)]})})}function read_replacement_table(A,e){return read_transposed(1+e(),1+A,e).map(A=>[A[0],A.slice(1)])}function read_trie(A){let e=[],t=read_sorted(A);return expand(decode([]),[]),e;function decode(e){return{S:A(),B:read_array_while(()=>{let e=read_sorted(A).map(A=>t[A]);if(e.length)return decode(e)}),Q:e}}function expand({S:A,B:t},r,o){if(!(4&A)||o!==r[r.length-1])for(let C of(2&A&&(o=r[r.length-1]),1&A&&e.push(r),t))for(let A of C.Q)expand(C,[...r,A],o)}}t.d(e,{normalize:function(){return normalize}});var r=read_payload(decode_arithmetic(unsafe_atob("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")));let o=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function hex_cp(A){return A.toString(16).toUpperCase().padStart(2,"0")}function quote_cp(A){return`{${hex_cp(A)}}`}function explode_cp(A){let e=[];for(let t=0,r=A.length;t<r;){let r=A.codePointAt(t);t+=r<65536?1:2,e.push(r)}return e}function str_from_cps(A){let e=A.length;if(e<4096)return String.fromCodePoint(...A);let t=[];for(let r=0;r<e;)t.push(String.fromCodePoint(...A.slice(r,r+=4096)));return t.join("")}function compare_arrays(A,e){let t=A.length,r=t-e.length;for(let o=0;0==r&&o<t;o++)r=A[o]-e[o];return r}var C=read_payload(decode_arithmetic(unsafe_atob("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")));function unpack_cc(A){return A>>24&255}function unpack_cp(A){return 16777215&A}let g=new Map(read_sorted_arrays(C).flatMap((A,e)=>A.map(A=>[A,e+1<<24]))),n=new Set(read_sorted(C)),c=new Map,l=new Map;for(let[A,e]of read_mapped(C)){if(!n.has(A)&&2==e.length){let[t,r]=e,o=l.get(t);o||(o=new Map,l.set(t,o)),o.set(r,A)}c.set(A,e.reverse())}function is_hangul(A){return A>=44032&&A<55204}function compose_pair(A,e){if(A>=4352&&A<4371&&e>=4449&&e<4470)return 44032+(A-4352)*588+(e-4449)*28;if(is_hangul(A)&&e>4519&&e<4547&&(A-44032)%28==0)return A+(e-4519);{let t=l.get(A);return t&&(t=t.get(e))?t:-1}}function decomposed(A){let e=[],t=[],r=!1;function add(A){let t=g.get(A);t&&(r=!0,A|=t),e.push(A)}for(let r of A)for(;;){if(r<128)e.push(r);else if(is_hangul(r)){let A=r-44032,e=A/588|0,t=A%588/28|0,o=A%28;add(4352+e),add(4449+t),o>0&&add(4519+o)}else{let A=c.get(r);A?t.push(...A):add(r)}if(!t.length)break;r=t.pop()}if(r&&e.length>1){let A=unpack_cc(e[0]);for(let t=1;t<e.length;t++){let r=unpack_cc(e[t]);if(0==r||A<=r){A=r;continue}let o=t-1;for(;;){let t=e[o+1];if(e[o+1]=e[o],e[o]=t,!o||(A=unpack_cc(e[--o]))<=r)break}A=unpack_cc(e[t])}}return e}function composed_from_decomposed(A){let e=[],t=[],r=-1,o=0;for(let C of A){let A=unpack_cc(C),g=unpack_cp(C);if(-1==r)0==A?r=g:e.push(g);else if(o>0&&o>=A)0==A?(e.push(r,...t),t.length=0,r=g):t.push(g),o=A;else{let C=compose_pair(r,g);C>=0?r=C:0==o&&0==A?(e.push(r),r=g):(t.push(g),o=A)}}return r>=0&&e.push(r,...t),e}function nfc(A){return composed_from_decomposed(decomposed(A))}function read_set(){return new Set(read_sorted(r))}let a=new Map(read_mapped(r)),s=read_set(),i=read_set(),B=new Set(read_sorted(r).map(function(A){return this[A]},[...i])),f=read_set();read_set();let w=read_sorted_arrays(r);function read_chunked(){return new Set([read_sorted(r).map(A=>w[A]),read_sorted(r)].flat(2))}let Q=r(),E=read_array_while(A=>{let e=read_array_while(r).map(A=>A+96);if(e.length){let t=A>=Q;e[0]-=32,e=str_from_cps(e),t&&(e=`Restricted[${e}]`);let o=read_chunked(),C=[...o,...read_chunked()].sort((A,e)=>A-e);return{N:e,P:o,M:!r(),R:t,V:new Set(C)}}}),h=read_set(),u=new Map;for(let{V:A,M:e}of([...h,...read_set()].sort((A,e)=>A-e).map((A,e,t)=>{let o=r(),C=t[e]=o?t[e-o]:{V:[],M:new Map};C.V.push(A),h.has(A)||u.set(A,C)}),new Set(u.values()))){let t=[];for(let e of A){let A=E.filter(A=>A.V.has(e)),r=t.find(({G:e})=>A.some(A=>e.has(A)));r||(r={G:new Set,V:[]},t.push(r)),r.V.push(e),A.forEach(A=>r.G.add(A))}let r=t.flatMap(({G:A})=>[...A]);for(let{G:A,V:o}of t){let t=new Set(r.filter(e=>!A.has(e)));for(let A of o)e.set(A,t)}}let p=new Set,d=new Set;for(let A of E)for(let e of A.V)(p.has(e)?d:p).add(e);for(let A of p)u.has(A)||d.has(A)||u.set(A,1);let M=new Set([...p,...decomposed(p).map(unpack_cp)]);let Emoji=class Emoji extends Array{get is_emoji(){return!0}};let I=read_trie(r).map(A=>Emoji.from(A)).sort(compare_arrays),D=new Map;for(let A of I){let e=[D];for(let t of A){let A=e.map(A=>{let e=A.get(t);return e||(e=new Map,A.set(t,e)),e});65039===t?e.push(...A):e=A}for(let t of e)t.V=A}function safe_str_from_cps(A,e=quote_cp){let t=[];is_combining_mark(A[0])&&t.push("◌");let r=0,o=A.length;for(let C=0;C<o;C++){let o=A[C];f.has(o)&&(t.push(str_from_cps(A.slice(r,C))),t.push(e(o)),r=C+1)}return t.push(str_from_cps(A.slice(r,o))),t.join("")}function quoted_cp(A){return(f.has(A)?"":`${bidi_qq(safe_str_from_cps([A]))} `)+quote_cp(A)}function bidi_qq(A){return`"${A}"\u200E`}function check_label_extension(A){if(A.length>=4&&45==A[2]&&45==A[3])throw Error(`invalid label extension: "${str_from_cps(A.slice(0,4))}"`)}function check_leading_underscore(A){for(let e=A.lastIndexOf(95);e>0;)if(95!==A[--e])throw Error("underscore allowed only at start")}function check_fenced(A){let e=A[0],t=o.get(e);if(t)throw error_placement(`leading ${t}`);let r=A.length,C=-1;for(let g=1;g<r;g++){e=A[g];let r=o.get(e);if(r){if(C==g)throw error_placement(`${t} + ${r}`);C=g+1,t=r}}if(C==r)throw error_placement(`trailing ${t}`)}function is_combining_mark(A){return i.has(A)}function ens_normalize(A){return flatten(split(A,nfc,filter_fe0f))}function split(A,e,t){if(!A)return[];let r=0;return A.split(".").map(A=>{let o,C=explode_cp(A),g={input:C,offset:r};r+=C.length+1;try{let A,r=g.tokens=process(C,e,t),n=r.length;if(n){if(o=r.flat(),check_leading_underscore(o),!(g.emoji=n>1||r[0].is_emoji)&&o.every(A=>A<128))check_label_extension(o),A="ASCII";else{let e=r.flatMap(A=>A.is_emoji?[]:A);if(e.length){if(i.has(o[0]))throw error_placement("leading combining mark");for(let A=1;A<n;A++){let e=r[A];if(!e.is_emoji&&i.has(e[0]))throw error_placement(`emoji + combining mark: "${str_from_cps(r[A-1])} + ${safe_str_from_cps([e[0]])}"`)}check_fenced(o);let t=[...new Set(e)],[C]=determine_group(t);check_group(C,e),check_whole(C,t),A=C.N}else A="Emoji"}}else throw Error("empty label");g.type=A}catch(A){g.error=A}return g.output=o,g})}function check_whole(A,e){let t;let r=[];for(let A of e){let e=u.get(A);if(1===e)return;if(e){let r=e.M.get(A);if(!(t=t?t.filter(A=>r.has(A)):[...r]).length)return}else r.push(A)}if(t){for(let e of t)if(r.every(A=>e.V.has(A)))throw Error(`whole-script confusable: ${A.N}/${e.N}`)}}function determine_group(A){let e=E;for(let t of A){let A=e.filter(A=>A.V.has(t));if(!A.length){if(E.some(A=>A.V.has(t)))throw error_group_member(e[0],t);throw error_disallowed(t)}if(e=A,1==A.length)break}return e}function flatten(A){return A.map(({input:e,error:t,output:r})=>{if(t){let r=t.message;throw Error(1==A.length?r:`Invalid label ${bidi_qq(safe_str_from_cps(e))}: ${r}`)}return str_from_cps(r)}).join(".")}function error_disallowed(A){return Error(`disallowed character: ${quoted_cp(A)}`)}function error_group_member(A,e){let t=quoted_cp(e),r=E.find(A=>A.P.has(e));return r&&(t=`${r.N} ${t}`),Error(`illegal mixture: ${A.N} + ${t}`)}function error_placement(A){return Error(`illegal placement: ${A}`)}function check_group(A,e){let{V:t,M:r}=A;for(let r of e)if(!t.has(r))throw error_group_member(A,r);if(r){let A=decomposed(e).map(unpack_cp);for(let e=1,t=A.length;e<t;e++)if(B.has(A[e])){let r=e+1;for(let o;r<t&&B.has(o=A[r]);r++)for(let t=e;t<r;t++)if(A[t]==o)throw Error(`duplicate non-spacing marks: ${quoted_cp(o)}`);if(r-e>4)throw Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(A.slice(e-1,r)))} (${r-e}/4)`);e=r}}}function process(A,e,t){let r=[],o=[];for(A=A.slice().reverse();A.length;){let C=consume_emoji_reversed(A);if(C)o.length&&(r.push(e(o)),o=[]),r.push(t(C));else{let e=A.pop();if(M.has(e))o.push(e);else{let A=a.get(e);if(A)o.push(...A);else if(!s.has(e))throw error_disallowed(e)}}}return o.length&&r.push(e(o)),r}function filter_fe0f(A){return A.filter(A=>65039!=A)}function consume_emoji_reversed(A,e){let t,r=D,o=A.length;for(;o&&(r=r.get(A[--o]));){let{V:C}=r;C&&(t=C,e&&e.push(...A.slice(o).reverse()),A.length=o)}return t}function normalize(A){return ens_normalize(A)}}}]);