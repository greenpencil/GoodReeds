/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Metro UI CSS v3.0.12 (http://metroui.org.ua)
 * Copyright 2012-2015 Sergey Pimenov
 * Licensed under MIT (http://metroui.org.ua/license.html)
 */

(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define([ 'jquery' ], factory );
    } else {
        factory( jQuery );
    }
}(function( jQuery ) { 
'use strict';

var $ = jQuery;

// Source: js/requirements.js
if (typeof jQuery === 'undefined') {
    throw new Error('Metro\'s JavaScript requires jQuery');
}

// Source: js/global.js
window.METRO_VERSION = '3.0.12';

if (window.METRO_AUTO_REINIT === undefined) window.METRO_AUTO_REINIT = true;
if (window.METRO_LANGUAGE === undefined) window.METRO_LANGUAGE = 'en';
if (window.METRO_LOCALE === undefined) window.METRO_LOCALE = 'EN_en';
if (window.METRO_CURRENT_LOCALE === undefined) window.METRO_CURRENT_LOCALE = 'en';
if (window.METRO_SHOW_TYPE === undefined) window.METRO_SHOW_TYPE = 'slide';
if (window.METRO_DEBUG === undefined) window.METRO_DEBUG = true;
if (window.METRO_CALENDAR_WEEK_START === undefined) window.METRO_CALENDAR_WEEK_START = 0;

window.canObserveMutation = 'MutationObserver' in window;

String.prototype.isUrl = function () {
var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(this);
};

String.prototype.isColor = function () {
return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this);
};

Array.prototype.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
};

Array.prototype.clone = function () {
    return this.slice(0);
};

Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

window.uniqueId = function (prefix) {
var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

window.isTouchDevice = function() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
};

window.METRO_LOCALES = {
    'en': {
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        days: [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
        ],
        buttons: [
            "Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'fr': {
        months: [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
            "Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
        ],
        days: [
            "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
            "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
        ],
        buttons: [
            "Aujourd'hui", "Effacer", "Annuler", "Aide", "Précedent", "Suivant", "Fin"
        ]
    },
    'nl': {
        months: [
            "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
            "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
        ],
        days: [
            "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
            "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
        ],
        buttons: [
            "Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
        ]
    },
    'ua': {
        months: [
            "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",
            "Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"
        ],
        days: [
            "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота",
            "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        buttons: [
            "Сьогодні", "Очистити", "Скасувати", "Допомога", "Назад", "Вперед", "Готово"
        ]
    },
    'ru': {
        months: [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
            "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        days: [
            "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
            "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        buttons: [
            "Сегодня", "Очистить", "Отменить", "Помощь", "Назад", "Вперед", "Готово"
        ]
    },
    /** By NoGrief (nogrief@gmail.com) */
    'zhCN': {
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月",
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        days: [
            "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
            "日", "一", "二", "三", "四", "五", "六"
        ],
        buttons: [
            "今日", "清除", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'it': {
        months: [
            'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
            'Gen', ' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
        ],
        days: [
            'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica',
            'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'
        ],
        buttons: [
            "Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'de': {
        months: [
            "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
            "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ],
        days: [
            "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
            "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
        ],
        buttons: [
            "Heute", "Zurücksetzen", "Abbrechen", "Hilfe", "Früher", "Später", "Fertig"
        ]
    },
    /** By Javier Rodríguez (javier.rodriguez at fjrodriguez.com) */
    'es': {
        months: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
            "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
        ],
        days: [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
            "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
        ],
        buttons: [
            "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'pt': {
        months: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ],
        days: [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado',
            'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
        ],
        buttons: [
            "Hoje", "Limpar", "Cancelar", "Ajuda", "Anterior", "Seguinte", "Terminar"
        ]
    },
    'pl': {
        months: [
            "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
            "Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"
        ],
        days: [
            "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",
            "Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"
        ],
        buttons: [
            "Dzisiaj", "Wyczyść", "Anuluj", "Pomoc", "Poprzedni", "Następny", "Koniec"
        ]
    },
    'cs': {
        months: [
            "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec",
            "Led", "Ún", "Bř", "Dub", "Kvě", "Če", "Čer", "Srp", "Zá", "Ří", "Li", "Pro"
        ],
        days: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota",
            "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
        ],
        buttons: [
            "Dnes", "Vyčistit", "Zrušit", "Pomoc", "Předešlý", "Další", "Dokončit"
        ]
    },
    /* By Satit Rianpit <rianpit@gmail.com> */
    'th': {
        months: [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
            "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
        ],
        days: [
            "อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์",
            "อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."
        ],
        buttons: [
            "วันนี้", "ล้าง", "ยกเลิก", "ช่วยเหลือ", "กลับ", "ต่อไป", "เสร็จ"
        ]
    }
};

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {

var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) {
                val = "0" + val;
            }
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        //console.log(arguments);

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        //if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) === "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        //console.log(locale);

        var locale = window.METRO_CURRENT_LOCALE || 'en';

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: window.METRO_LOCALES[locale].days[D],
                dddd: window.METRO_LOCALES[locale].days[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: window.METRO_LOCALES[locale].months[m],
                mmmm: window.METRO_LOCALES[locale].months[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// For convenience...
Date.prototype.format = function (mask, utc) {
return dateFormat(this, mask, utc);
};

// Source: js/widget.js
var widget_uuid = 0,
    widget_slice = Array.prototype.slice;

$.cleanData = (function (orig) {
    return function (elems) {
        var events, elem, i;
        for (i = 0; (elem = elems[i]) != null; i++) {
            try {

                // Only trigger remove when necessary to save time
                events = $._data(elem, "events");
                if (events && events.remove) {
                    $(elem).triggerHandler("remove");
                }

                // http://bugs.$.com/ticket/8235
            } catch (e) {
            }
        }
        orig(elems);
    };
})($.cleanData);

$.widget = function (name, base, prototype) {
    var fullName, existingConstructor, constructor, basePrototype,
    // proxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
        proxiedPrototype = {},
        namespace = name.split(".")[0];

    name = name.split(".")[1];
    fullName = namespace + "-" + name;

    if (!prototype) {
        prototype = base;
        base = $.Widget;
    }

    // create selector for plugin
    $.expr[":"][fullName.toLowerCase()] = function (elem) {
        return !!$.data(elem, fullName);
    };

    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];
    constructor = $[namespace][name] = function (options, element) {
        // allow instantiation without "new" keyword
        if (!this._createWidget) {
            return new constructor(options, element);
        }

        // allow instantiation without initializing for simple inheritance
        // must use "new" keyword (the code above always passes args)
        if (arguments.length) {
            this._createWidget(options, element);
        }
    };
    // extend with the existing constructor to carry over any static properties
    $.extend(constructor, existingConstructor, {
        version: prototype.version,
        // copy the object used to create the prototype in case we need to
        // redefine the widget later
        _proto: $.extend({}, prototype),
        // track widgets that inherit from this widget in case this widget is
        // redefined after a widget inherits from it
        _childConstructors: []
    });

    basePrototype = new base();
    // we need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function (prop, value) {
        if (!$.isFunction(value)) {
            proxiedPrototype[prop] = value;
            return;
        }
        proxiedPrototype[prop] = (function () {
            var _super = function () {
                    return base.prototype[prop].apply(this, arguments);
                },
                _superApply = function (args) {
                    return base.prototype[prop].apply(this, args);
                };
            return function () {
                var __super = this._super,
                    __superApply = this._superApply,
                    returnValue;

                this._super = _super;
                this._superApply = _superApply;

                returnValue = value.apply(this, arguments);

                this._super = __super;
                this._superApply = __superApply;

                return returnValue;
            };
        })();
    });
    constructor.prototype = $.widget.extend(basePrototype, {
        // TODO: remove support for widgetEventPrefix
        // always use the name + a colon as the prefix, e.g., draggable:start
        // don't prefix for widgets that aren't DOM-based
        widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
    }, proxiedPrototype, {
        constructor: constructor,
        namespace: namespace,
        widgetName: name,
        widgetFullName: fullName
    });

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if (existingConstructor) {
        $.each(existingConstructor._childConstructors, function (i, child) {
            var childPrototype = child.prototype;

            // redefine the child widget using the same prototype that was
            // originally used, but inherit from the new version of the base
            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
        });
        // remove the list of existing child constructors from the old constructor
        // so the old child constructors can be garbage collected
        delete existingConstructor._childConstructors;
    } else {
        base._childConstructors.push(constructor);
    }

    $.widget.bridge(name, constructor);

    return constructor;
};

$.widget.extend = function (target) {
    var input = widget_slice.call(arguments, 1),
        inputIndex = 0,
        inputLength = input.length,
        key,
        value;
    for (; inputIndex < inputLength; inputIndex++) {
        for (key in input[inputIndex]) {
            value = input[inputIndex][key];
            if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                // Clone objects
                if ($.isPlainObject(value)) {
                    target[key] = $.isPlainObject(target[key]) ?
                        $.widget.extend({}, target[key], value) :
                        // Don't extend strings, arrays, etc. with objects
                        $.widget.extend({}, value);
                    // Copy everything else by reference
                } else {
                    target[key] = value;
                }
            }
        }
    }
    return target;
};

$.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[name] = function (options) {
        var isMethodCall = typeof options === "string",
            args = widget_slice.call(arguments, 1),
            returnValue = this;

        if (isMethodCall) {
            this.each(function () {
                var methodValue,
                    instance = $.data(this, fullName);
                if (options === "instance") {
                    returnValue = instance;
                    return false;
                }
                if (!instance) {
                    return $.error("cannot call methods on " + name + " prior to initialization; " +
                        "attempted to call method '" + options + "'");
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    return $.error("no such method '" + options + "' for " + name + " widget instance");
                }
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && methodValue !== undefined) {
                    returnValue = methodValue && methodValue.jquery ?
                        returnValue.pushStack(methodValue.get()) :
                        methodValue;
                    return false;
                }
            });
        } else {

            // Allow multiple hashes to be passed on init
            if (args.length) {
                options = $.widget.extend.apply(null, [options].concat(args));
            }

            this.each(function () {
                var instance = $.data(this, fullName);
                if (instance) {
                    instance.option(options || {});
                    if (instance._init) {
                        instance._init();
                    }
                } else {
                    $.data(this, fullName, new object(options, this));
                }
            });
        }

        return returnValue;
    };
};

$.Widget = function (/* options, element */) {
};
$.Widget._childConstructors = [];

$.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
        disabled: false,

        // callbacks
        create: null
    },
    _createWidget: function (options, element) {
        element = $(element || this.defaultElement || this)[0];
        this.element = $(element);
        this.uuid = widget_uuid++;
        this.eventNamespace = "." + this.widgetName + this.uuid;

        this.bindings = $();
        this.hoverable = $();
        this.focusable = $();

        if (element !== this) {
            $.data(element, this.widgetFullName, this);
            this._on(true, this.element, {
                remove: function (event) {
                    if (event.target === element) {
                        this.destroy();
                    }
                }
            });
            this.document = $(element.style ?
                // element within the document
                element.ownerDocument :
                // element is window or document
            element.document || element);
            this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
        }

        this.options = $.widget.extend({},
            this.options,
            this._getCreateOptions(),
            options);

        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init();
    },
    _getCreateOptions: $.noop,
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,

    destroy: function () {
        this._destroy();
        // we can probably remove the unbind calls in 2.0
        // all event bindings should go through this._on()
        this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            // support: jquery <1.6.3
            // http://bugs.jquery.com/ticket/9413
            .removeData($.camelCase(this.widgetFullName));
        this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
            this.widgetFullName + "-disabled " +
            "ui-state-disabled");

        // clean up events and states
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus");
    },
    _destroy: $.noop,

    widget: function () {
        return this.element;
    },

    option: function (key, value) {
        var options = key,
            parts,
            curOption,
            i;

        if (arguments.length === 0) {
            // don't return a reference to the internal hash
            return $.widget.extend({}, this.options);
        }

        if (typeof key === "string") {
            // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
            options = {};
            parts = key.split(".");
            key = parts.shift();
            if (parts.length) {
                curOption = options[key] = $.widget.extend({}, this.options[key]);
                for (i = 0; i < parts.length - 1; i++) {
                    curOption[parts[i]] = curOption[parts[i]] || {};
                    curOption = curOption[parts[i]];
                }
                key = parts.pop();
                if (arguments.length === 1) {
                    return curOption[key] === undefined ? null : curOption[key];
                }
                curOption[key] = value;
            } else {
                if (arguments.length === 1) {
                    return this.options[key] === undefined ? null : this.options[key];
                }
                options[key] = value;
            }
        }

        this._setOptions(options);

        return this;
    },
    _setOptions: function (options) {
        var key;

        for (key in options) {
            this._setOption(key, options[key]);
        }

        return this;
    },
    _setOption: function (key, value) {
        this.options[key] = value;

        if (key === "disabled") {
            this.widget()
                .toggleClass(this.widgetFullName + "-disabled", !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus");
            }
        }

        return this;
    },

    enable: function () {
        return this._setOptions({disabled: false});
    },
    disable: function () {
        return this._setOptions({disabled: true});
    },

    _on: function (suppressDisabledCheck, element, handlers) {
        var delegateElement,
            instance = this;

        // no suppressDisabledCheck flag, shuffle arguments
        if (typeof suppressDisabledCheck !== "boolean") {
            handlers = element;
            element = suppressDisabledCheck;
            suppressDisabledCheck = false;
        }

        // no element argument, shuffle and use this.element
        if (!handlers) {
            handlers = element;
            element = this.element;
            delegateElement = this.widget();
        } else {
            element = delegateElement = $(element);
            this.bindings = this.bindings.add(element);
        }

        $.each(handlers, function (event, handler) {
            function handlerProxy() {
                // allow widgets to customize the disabled handling
                // - disabled as an array instead of boolean
                // - disabled class as method for disabling individual parts
                if (!suppressDisabledCheck &&
                    ( instance.options.disabled === true ||
                    $(this).hasClass("ui-state-disabled") )) {
                    return;
                }
                return ( typeof handler === "string" ? instance[handler] : handler )
                    .apply(instance, arguments);
            }

            // copy the guid so direct unbinding works
            if (typeof handler !== "string") {
                handlerProxy.guid = handler.guid =
                    handler.guid || handlerProxy.guid || $.guid++;
            }

            var match = event.match(/^([\w:-]*)\s*(.*)$/),
                eventName = match[1] + instance.eventNamespace,
                selector = match[2];
            if (selector) {
                delegateElement.delegate(selector, eventName, handlerProxy);
            } else {
                element.bind(eventName, handlerProxy);
            }
        });
    },

    _off: function (element, eventName) {
        eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace;
        element.unbind(eventName).undelegate(eventName);

        // Clear the stack to avoid memory leaks (#10056)
        this.bindings = $(this.bindings.not(element).get());
        this.focusable = $(this.focusable.not(element).get());
        this.hoverable = $(this.hoverable.not(element).get());
    },

    _delay: function (handler, delay) {
        function handlerProxy() {
            return ( typeof handler === "string" ? instance[handler] : handler )
                .apply(instance, arguments);
        }

        var instance = this;
        return setTimeout(handlerProxy, delay || 0);
    },

    _hoverable: function (element) {
        this.hoverable = this.hoverable.add(element);
        this._on(element, {
            mouseenter: function (event) {
                $(event.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (event) {
                $(event.currentTarget).removeClass("ui-state-hover");
            }
        });
    },

    _focusable: function (element) {
        this.focusable = this.focusable.add(element);
        this._on(element, {
            focusin: function (event) {
                $(event.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (event) {
                $(event.currentTarget).removeClass("ui-state-focus");
            }
        });
    },

    _trigger: function (type, event, data) {
        var prop, orig,
            callback = this.options[type];

        data = data || {};
        event = $.Event(event);
        event.type = ( type === this.widgetEventPrefix ?
            type :
        this.widgetEventPrefix + type ).toLowerCase();
        // the original event may come from any element
        // so we need to reset the target on the new event
        event.target = this.element[0];

        // copy original event properties over to the new event
        orig = event.originalEvent;
        if (orig) {
            for (prop in orig) {
                if (!( prop in event )) {
                    event[prop] = orig[prop];
                }
            }
        }

        this.element.trigger(event, data);
        return !( $.isFunction(callback) &&
        callback.apply(this.element[0], [event].concat(data)) === false ||
        event.isDefaultPrevented() );
    }
};

$.each({show: "fadeIn", hide: "fadeOut"}, function (method, defaultEffect) {
    $.Widget.prototype["_" + method] = function (element, options, callback) {
        if (typeof options === "string") {
            options = {effect: options};
        }
        var hasOptions,
            effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                    defaultEffect :
                options.effect || defaultEffect;
        options = options || {};
        if (typeof options === "number") {
            options = {duration: options};
        }
        hasOptions = !$.isEmptyObject(options);
        options.complete = callback;
        if (options.delay) {
            element.delay(options.delay);
        }
        if (hasOptions && $.effects && $.effects.effect[effectName]) {
            element[method](options);
        } else if (effectName !== method && element[effectName]) {
            element[effectName](options.duration, options.easing, callback);
        } else {
            element.queue(function (next) {
                $(this)[method]();
                if (callback) {
                    callback.call(element[0]);
                }
                next();
            });
        }
    };
});

var widget = $.widget;

// Source: js/initiator.js
$.fn.reverse = Array.prototype.reverse;

$.Metro = function(params){
    params = $.extend({
    }, params);
};

$.Metro.hotkeys = [];

$.Metro.initWidgets = function(){
    var widgets = $("[data-role]");

    var hotkeys = $("[data-hotkey]");
    $.each(hotkeys, function(){
        var element = $(this);
        var hotkey = element.data('hotkey').toLowerCase();

        //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
        //    return;
        //}
        if (element.data('hotKeyBonded') === true ) {
            return;
        }

        $.Metro.hotkeys.push(hotkey);

        $(document).on('keyup', null, hotkey, function(e){
            if (element === undefined) return;

            if (element[0].tagName === 'A' &&
                element.attr('href') !== undefined &&
                element.attr('href').trim() !== '' &&
                element.attr('href').trim() !== '#') {
                document.location.href = element.attr('href');
            } else {
                element.click();
            }
            return false;
        });

        element.data('hotKeyBonded', true);
    });

    $.each(widgets, function(){
        var $this = $(this), w = this;
        var roles = $this.data('role').split(/\s*,\s*/);
        roles.map(function(func){
            try {
                //$(w)[func]();
                if ($.fn[func] !== undefined && $this.data(func+'-initiated') !== true) {
                    $.fn[func].call($this);
                    $this.data(func+'-initiated', true);
                }
            } catch(e) {
                if (window.METRO_DEBUG) {
                    console.log(e.message, e.stack);
                }
            }
        });
    });
};

$.Metro.init = function(){
    $.Metro.initWidgets();

    if (window.METRO_AUTO_REINIT) {
        if (!window.canObserveMutation) {
            var originalDOM = $('body').html(),
                actualDOM;

            setInterval(function () {
                actualDOM = $('body').html();

                if (originalDOM !== actualDOM) {
                    originalDOM = actualDOM;

                    $.Metro.initWidgets();
                }
            }, 100);
        } else {
            var observer, observerOptions, observerCallback;
            observerOptions = {
                'childList': true,
                'subtree': true
            };
            observerCallback = function(mutations){

                //console.log(mutations);

                mutations.map(function(record){

                    if (record.addedNodes) {

                        /*jshint loopfunc: true */
                        var obj, widgets, plugins, hotkeys;

                        for(var i = 0, l = record.addedNodes.length; i < l; i++) {
                            obj = $(record.addedNodes[i]);

                            plugins = obj.find("[data-role]");

                            hotkeys = obj.find("[data-hotkey]");

                            $.each(hotkeys, function(){
                                var element = $(this);
                                var hotkey = element.data('hotkey').toLowerCase();

                                //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
                                //    return;
                                //}

                                if (element.data('hotKeyBonded') === true ) {
                                    return;
                                }

                                $.Metro.hotkeys.push(hotkey);

                                $(document).on('keyup', null, hotkey, function () {
                                    if (element === undefined) return;

                                    if (element[0].tagName === 'A' &&
                                        element.attr('href') !== undefined &&
                                        element.attr('href').trim() !== '' &&
                                        element.attr('href').trim() !== '#') {
                                        document.location.href = element.attr('href');
                                    } else {
                                        element.click();
                                    }
                                    return false;
                                });

                                element.data('hotKeyBonded', true);
                                //console.log($.Metro.hotkeys);
                            });

                            if (obj.data('role') !== undefined) {
                                widgets = $.merge(plugins, obj);
                            } else {
                                widgets = plugins;
                            }

                            if (widgets.length) {
                                $.each(widgets, function(){
                                    var _this = $(this);
                                    var roles = _this.data('role').split(/\s*,\s*/);
                                    roles.map(function(func){
                                        try {
                                            if ($.fn[func] !== undefined && _this.data(func+'-initiated') !== true) {
                                                $.fn[func].call(_this);
                                                _this.data(func+'-initiated', true);
                                            }
                                        } catch(e) {
                                            if (window.METRO_DEBUG) {
                                                console.log(e.message, e.stack);
                                            }
                                        }
                                    });
                                });
                            }
                        }
                    }
                });
            };

            //console.log($(document));
            observer = new MutationObserver(observerCallback);
            observer.observe(document, observerOptions);
        }
    }
};

// Source: js/utils/easing.js
	$.easing['jswing'] = $.easing['swing'];

	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert($.easing.default);
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d / 2) == 2) return b + c;
			if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

// Source: js/utils/hotkeys.js
$.hotkeys = {
    version: "0.8",

    specialKeys: {
        8: "backspace",
        9: "tab",
        10: "return",
        13: "return",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        59: ";",
        61: "=",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scroll",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    },

    shiftNums: {
        "`": "~",
        "1": "!",
        "2": "@",
        "3": "#",
        "4": "$",
        "5": "%",
        "6": "^",
        "7": "&",
        "8": "*",
        "9": "(",
        "0": ")",
        "-": "_",
        "=": "+",
        ";": ": ",
        "'": "\"",
        ",": "<",
        ".": ">",
        "/": "?",
        "\\": "|"
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: [
        "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
        "datetime-local", "search", "color", "tel"],

    // default input types not to bind to unless bound directly
    textInputTypes: /textarea|input|select/i,

    options: {
        filterInputAcceptingElements: true,
        filterTextInputs: true,
        filterContentEditable: true
    }
};

function keyHandler(handleObj) {
    if (typeof handleObj.data === "string") {
        handleObj.data = {
            keys: handleObj.data
        };
    }

    // Only care when a possible input has been specified
    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
        return;
    }

    var origHandler = handleObj.handler,
        keys = handleObj.data.keys.toLowerCase().split(" ");

    handleObj.handler = function(event) {
        //      Don't fire in text-accepting inputs that we didn't directly bind to
        if (this !== event.target &&
            ($.hotkeys.options.filterInputAcceptingElements &&
            $.hotkeys.textInputTypes.test(event.target.nodeName) ||
            ($.hotkeys.options.filterContentEditable && $(event.target).attr('contenteditable')) ||
            ($.hotkeys.options.filterTextInputs &&
            $.inArray(event.target.type, $.hotkeys.textAcceptingInputTypes) > -1))) {
            return;
        }

        var special = event.type !== "keypress" && $.hotkeys.specialKeys[event.which],
            character = String.fromCharCode(event.which).toLowerCase(),
            modif = "",
            possible = {};

        $.each(["alt", "ctrl", "shift"], function(index, specialKey) {

            if (event[specialKey + 'Key'] && special !== specialKey) {
                modif += specialKey + '+';
            }
        });

        // metaKey is triggered off ctrlKey erronously
        if (event.metaKey && !event.ctrlKey && special !== "meta") {
            modif += "meta+";
        }

        if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
            modif = modif.replace("alt+ctrl+shift+", "hyper+");
        }

        if (special) {
            possible[modif + special] = true;
        }
        else {
            possible[modif + character] = true;
            possible[modif + $.hotkeys.shiftNums[character]] = true;

            // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
            if (modif === "shift+") {
                possible[$.hotkeys.shiftNums[character]] = true;
            }
        }

        for (var i = 0, l = keys.length; i < l; i++) {
            if (possible[keys[i]]) {
                return origHandler.apply(this, arguments);
            }
        }
    };
}

$.each(["keydown", "keyup", "keypress"], function() {
    $.event.special[this] = {
        add: keyHandler
    };
});

// Source: js/utils/mousewheel.js
var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
var lowestDelta, lowestDeltaXY;

if ( $.event.fixHooks ) {
    for ( var i = toFix.length; i; ) {
        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i = toBind.length; i; ) {
                this.addEventListener( toBind[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },

    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i = toBind.length; i; ) {
                this.removeEventListener( toBind[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event,
        args = [].slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0,
        absDeltaXY = 0,
        fn;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
    if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

    // New school wheel delta (wheel event)
    if ( orgEvent.deltaY ) {
        deltaY = orgEvent.deltaY * -1;
        delta  = deltaY;
    }
    if ( orgEvent.deltaX ) {
        deltaX = orgEvent.deltaX;
        delta  = deltaX * -1;
    }

    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

    // Look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

    // Get a whole value for the deltas
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
}

// Source: js/utils/pre-code.js
function preCode(selector) {
	var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

	els.forEach(function(el, idx, arr){
		var txt = el.textContent
			.replace(/^[\r\n]+/, "")	// strip leading newline
			.replace(/\s+$/g, "");

		if (/^\S/gm.test(txt)) {
			el.textContent = txt;
			return;
		}

		var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

		while (mat = re.exec(txt)) {
			len = mat[0].length;

			if (len < min) {
				min = len;
				str = mat[0];
			}
		}

		if (min == 1e3)
			return;

		el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
	});
}

document.addEventListener("DOMContentLoaded", function() {
	preCode("pre code, textarea");
}, false);
// Source: js/utils/touch-handler.js
var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false;

var addTouchEvents = function(element) {
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
};

function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch (e.type) {
        case "touchstart":
            mouseEv = "mousedown";
            break;
        case "touchend":
            mouseEv = "mouseup";
            break;
        case "touchmove":
            mouseEv = "mousemove";
            break;
        default:
            return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}

// Source: js/widgets/accordion.js
$.widget("metro.accordion", {

    version: "3.0.0",

    options: {
        closeAny: false,
        speed: 'fast',
        onFrameOpen: function(frame){return true;},
        onFrameOpened: function(frame){},
        onFrameClose: function(frame){return true;},
        onFrameClosed: function(frame){}
    },

    init: function(){
        var that = this, element = this.element;

        element.on('click', '.heading', function(e){
            var frame = $(this).parent();

            if (frame.hasClass('disabled')) {return false;}

            if  (!frame.hasClass('active')) {
                that._openFrame(frame);
            } else {
                that._closeFrame(frame);
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _closeAllFrames: function(){
        var that = this;
        var frames = this.element.children('.frame.active');
        $.each(frames, function(){
            that._closeFrame($(this));
        });
    },

    _openFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameOpen === 'function') {
            if (!o.onFrameOpen(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameOpen] === 'function') {
                if (!window[o.onFrameOpen](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameOpen+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        if (o.closeAny) {this._closeAllFrames();}

        content.slideDown(o.speed);
        frame.addClass('active');

        if (typeof o.onFrameOpened === 'function') {
            o.onFrameOpened(frame);
        } else {
            if (typeof window[o.onFrameOpened] === 'function') {
                window[o.onFrameOpened](frame);
            } else {
                result = eval("(function(){"+o.onFrameOpened+"})");
                result.call(frame);
            }
        }
    },

    _closeFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameClose === 'function') {
            if (!o.onFrameClose(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameClose] === 'function') {
                if (!window[o.onFrameClose](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameClose+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        content.slideUp(o.speed,function(){
            frame.removeClass("active");
        });

        if (typeof o.onFrameClosed === 'function') {
            o.onFrameClosed(frame);
        } else {
            if (typeof window[o.onFrameClosed] === 'function') {
                window[o.onFrameClosed](frame);
            } else {
                result = eval("(function(){"+o.onFrameClosed+"})");
                result.call(frame);
            }
        }
    },

    _create: function(){
        var that = this, o = this.options, element = this.element;

        $.each(this.element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        that.init();
        element.data('accordion', this);

    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/appbar.js
    $.widget("metro.appbar", {
        version: "3.0.0",
        options: {
            flexstyle: "app-bar-menu", //app-bar-menu | YOUR_OWN class for the pull flexmenu, basic support for "sidebar2" are integrated in the appbar.less file
            flexclean: false,           //true | false. if set all entries except the no-flexible ones will removed
            flextolerance: 3               //in px. if set the freespace is runnig out a little bit earlier, so floats 
                                        //and not no-wrap elements have no chance to wrap. help for rounding errors also
        },
        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initBar();

            element.data('appbar', this);

        },
        _calculateFreeSpace: function () {
            var that = this, element = this.element, o = this.options;
            var menusParentWidth = 0, childrenWidth = 0, children;
            var freeSpace;

            //get the overall free space from the wrapping parent of the menus
            menusParentWidth = $(that.menusParent).width();

            //get the width of all visible children
            children = $(that.menusParent).children(":visible").not(".app-bar-pullmenu");


            //margin support: because there could be margins between elements, we do not summarize the width up with a one liner
            //but calculate width of all children in an intelligent way, we takte the left offsett of the first element and right offset of the right element
            //for that we have to support float left and right too:
            //float left and right support: we can not be sure that the first element in dom is on the left and the last is on the right
            //right floated
            //   - sort the children as the user see them

            //sort the children as the user see them according to the css float
            var childrenLeftFloated = [];
            var childrenRightFloated = [];
            var childrenAsUsual = [];
            var floatState;

            for (var i = 0, len = children.length; i < len; i++) {
                floatState = $(children[i]).css("float");
                switch (floatState) {
                    case "left":
                        childrenLeftFloated.push(children[i]);
                        break;
                    case "right":
                        childrenRightFloated.push(children[i]);
                        break;
                    default:
                        childrenAsUsual.push(children[i]);
                }
            }
            //right floats are from right to left
            childrenRightFloated.reverse();

            //=== build up the new children jquery object ===
            //join the left, right and normal children   
            children = new Array();
            children = childrenLeftFloated.concat(childrenAsUsual, childrenRightFloated);

            //convert the array to jquery object again
            children = $(children);

            //=== calculate the width of the elements with margin support ===

            //adds the left margin dedicated to the first child
            childrenWidth += parseInt($(children).first().css("margin-left"));

            //walk trough the children and add the size, 
            for (var i = 0, len = children.length - 1; i <= len; i++) {
                childrenWidth += $(children[i]).outerWidth();
                if (i !== len) {
                    //the highest margin between two elements counts
                    childrenWidth += Math.max(
                            parseInt($(children[i]).css("margin-right")),
                            parseInt($(children[i + 1]).css("margin-left"))

                            );
                }
            }
            //the right margin for the right child
            childrenWidth += parseInt($(children[len]).css("margin-right"));

            //now we have all data for calculation. Yippie-Ya-Yeah, Schweinebacke!! (much cooler German translation of B. W. Yippie-Ya-Yeah, Motherf***er)
            freeSpace = menusParentWidth - childrenWidth;

            //writing the data we found out to the element's data
            that.freeSpace = freeSpace;                     //not used space within the parent(mostly the appbar itself)
            that.childrenWidth = childrenWidth;             //the total width of the children
            that.menusParentWidth = menusParentWidth;       //the width without padding or something

            return freeSpace;
        },
        _originIndexMove: function(menu, child) {
                //find all children which are lower than we
                var flexChildren = $(menu).children().filter(function () {
                    return parseInt($(this).attr("data-flexorderorigin")) < parseInt($(child).attr("data-flexorderorigin"));
                });
                
                if (flexChildren.length > 0) {
                    //because we are greater, we set it after the childern which are lower
                    $(flexChildren).last().after(child);
                } else {
                    //find all children which are greater than we are
                    flexChildren = $(menu).children().filter(function () {
                        return parseInt($(this).attr("data-flexorderorigin")) > parseInt($(child).attr("data-flexorderorigin"));
                    });
                    if (flexChildren.length > 0) {
                        //because we are lower, we set us before the childern which are greater
                        $(flexChildren).first().before(child);
                    } else {
                        //we have no children, just append it
                        $(menu).append(child);
                    }
                }
        },
        _moveMenuEntry: function (direction) {
            var that = this, element = this.element, o = this.options;

            direction = direction || "toPullMenu"; // "fromPullMenu" is also an option

            if (direction === "toPullMenu") {
                //get next candidate which could be moved to the pullmenu, in fact the last which not have a mark as pullmenu-entry

                var nextToHide = $(that.allMenuEntries).not(".app-bar-pullmenu-entry").last();

                if (nextToHide.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }


                //find out in which menubar we are located in
                var topMenu = $(nextToHide).parent(); //this is only a appbar-menu not the appbar itself
                //find out where we have to go
                var topMenuIndex = $(that.flexVisibles).index($(nextToHide).parent());
                var pullMenuBar = $(that.pullMenu).find(".app-bar-pullmenubar").eq(topMenuIndex); //TODO: Make the class app-bar-menu configurable - perhaps sidebar

                that._originIndexMove(pullMenuBar, nextToHide);
                //move it to the pullmenu
//                if ($(topMenu).is("[data-flexdirection='reverse']")) {//data-flexdirection="reverse" support
//                    $(nextToHide).appendTo(pullMenuBar);
//                } else {                                             //normal way
//                    $(nextToHide).prependTo(pullMenuBar);
//                }

                //mark the entry as a entry of the pullmenu
                $(nextToHide).addClass("app-bar-pullmenu-entry");

                //the menubar is initiated with the hidden class, so we do not see empty pullmenubars, we must unhide them
                //it does not matter, if we see it already, we do it always:
                $(pullMenuBar).removeClass("hidden")
                        .show();

                //in case there are no more entries in the top menu bar we can hide it
                if ($(topMenu).children().length === 0) {
                    $(topMenu).addClass("hidden");
                }

                //we show the pullbutton now
                $(that.pullButton).show();

                return nextToHide;

            } else if (direction === "fromPullMenu") {
                //get next candidate which could be moved to the topbar menu, in fact the first which is still marked as pullmenu-entry
                var nextToShow = $(that.allMenuEntries).filter(".app-bar-pullmenu-entry").first();


                //find out in which pullmenu we are located in
                var pullMenuBar = $(nextToShow).parent(); //only one single menu, not the whole thing

                //find out where we have to go
                var topMenuIndex = $(pullMenuBar).index(); //it is the same structur as that.flexVisibles, so we can use the simple index
                var topMenu = $(that.flexVisibles).eq(topMenuIndex);

                $(topMenu).removeClass("hidden");
                //remove the mark as a entry of the pullmenu and move it to the normal top menu
                $(nextToShow).removeClass("app-bar-pullmenu-entry");

                //cosider the flexorder

                //walk trough the children in topMenu and find out what we must do

                //find all children which are lower than we
                that._originIndexMove(topMenu, nextToShow);

                //in case there are no more entries left, we can hide the pullbar menu from this entry
                if ($(pullMenuBar).children().length === 0) {
                    $(pullMenuBar).addClass("hidden")
                            .hide();
                }

                //in case we have no more menus in the pullbar area, we hide the pullbar thing
                if ($(that.pullMenu).children(".app-bar-pullmenubar").not(".hidden").length === 0) {
                    $(that.pullMenu).hide().addClass("hidden");
                    $(that.pullButton).hide();
                }

                if (nextToShow.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }
                return nextToShow;
            }
        },
        _checkMenuEntries: function () {
            var that = this, element = this.element, o = this.options;

            var forceEndLoop = false;

            for (var maxLoop = 0, maxLoopLen = that.allMenuEntries.length; maxLoop < maxLoopLen; maxLoop++) {  //we do nothing with this, we could use while(true) but there is a danger of infinite loops

                //calculate the empty space within the appbar we can use for hidden children
                that._calculateFreeSpace();
                var freeSpace = that.freeSpace;

                if (freeSpace < o.flextolerance || o.flexclean) { //3px is tolerance and to be faster than the wrapping. TODO: make this configurable
                    //no space left, we hide a menu entry now

                    //move the menu entry to the pullbar and check if there are more menuentries left
                    if (!(that._moveMenuEntry("toPullMenu"))) {
                        //nothing left to hide
                        break;
                    } else {
                        //we moved successfully, perhaps we can hide more entries, we recheck the appbar, 
                        //remember, we are in a endless loop, which checks this for us

                        if (!forceEndLoop) {
                            continue;
                        }
                    }

                } else {
                    //we have space here, we try to get more entries there

                    //check if there is something to do
                    if (!(that._moveMenuEntry("fromPullMenu"))) {
                        //nothing left to show
                        break;
                    } else {
                        forceEndLoop = true;
                        continue;
                    }

                }

                //we continue manually. if we reach the end of the loop we end this better so we do not produce infinite loop accidentally
                break;
            }
        },
        resize: function () {
            var that = this, element = this.element, o = this.options;

            if (that.initiatedAsFlex) {
                this._checkMenuEntries();
            }
        },
        _initBar: function () {
            var that = this, element = this.element, o = this.options;

            that.lastFlexAction = undefined;

            that.pullButton = $(element).find('.app-bar-pullbutton');
            var menus = $(element).find('.app-bar-menu');

            that.initiatedAsFlex = false;   //we change it later in the code - conditionally
            o.flexclean = $(element).is("[data-flexclean='true']") || o.flexclean;
            o.flexstyle = $(element).attr("data-flexstyle") || o.flexstyle;

            var flexVisible, menuEntries; //temporarly used vars

            that.flexVisibles = $();    //the menus which are directly in the appbar
            that.allMenuEntries = $();  //all menu entries in a sorted order
            that.menusParent = $();     //common parent from the menus, which can but do not need to be this.element. We get the max width from it
            that.pullMenu = $();

            if (menus.length > 0 && $(element).is(":not('.no-flexible')")) {
                //strip off all .no-flexible menus
                that.flexVisibles = $(menus).not(".no-flexible");

                if (that.flexVisibles.length > 0) {

                    that.initiatedAsFlex = true;

                    //sort the menus according to the data-flexorder attribute
                    that.flexVisibles.sort(function (a, b) {
                        var aValue = (parseInt($(a).data("flexorder")) || $(a).index() + 1);
                        var bValue = (parseInt($(b).data("flexorder")) || $(b).index() + 1);
                        return aValue - bValue;
                    });

                    //get all children in a sorted order according to the data-flexorder attribute
                    $(that.flexVisibles).each(function () {
                        flexVisible = this;

                        menuEntries = $(flexVisible).children();

                        //give  all menuEntries a flexorder which have not one and save the original order
                        $(menuEntries).each(function () {
                            $(this).attr("data-flexorderorigin", $(this).index());
                            
                            if(!($(this).is("[data-flexorder]"))) {
                                $(this).attr("data-flexorder", $(this).index() + 1);
                            }
                        });

                        menuEntries.sort(function (a, b) {
                            var aValue = parseInt($(a).data("flexorder"));
                            var bValue = parseInt($(b).data("flexorder"));
                            return aValue - bValue;
                        });

                        //data-flexdirection="reverse" support 
                        if ($(flexVisible).is("[data-flexdirection='reverse']")) {
                            menuEntries.reverse();
                        }

                        $.merge(that.allMenuEntries, $(menuEntries).not(".no-flexible")); //strip off all .no-flexible elements
                    });

                    //find the parent, which contains all menus
                    that.menusParent = $(element).find(".app-bar-menu").first().parent();

                    // === create a pull down button + pull menu ===
                    //check if a pulldown button already exists, if not we create one
                    if (!(that.pullButton.length > 0)) {
                        //DOC: We can create a display:none button, if we want to force to not show a pull button
                        that.pullButton = $('<div class="app-bar-pullbutton automatic"></div>');
                        $(that.menusParent).append(that.pullButton);
                    }

                    //create a pullmenu
                    that.pullMenu = $('<nav class="app-bar-pullmenu hidden" />');

                    //create menubars within the pullmenu
                    that.flexVisibles.each(function () {
                        $(that.pullMenu).append($('<ul class="app-bar-pullmenubar hidden ' + o.flexstyle + '" />'));
                    });
                    
                    
                    
                    // WORKAROUND: this is because a :after:before clearfix for the pullmenu do not work for some reason
                    //position: absolute does not work if we do not break the float. another pure css solution should be written in the appbar.less
                    //after that remove this line
                    $(that.menusParent).append($('<div class="clearfix" style="width: 0;">'));
                    //-----------
                    
                    
                    $(that.pullMenu).addClass("flexstyle-" + o.flexstyle);

                    $(that.menusParent).append(that.pullMenu);

                    //check for the first time the menu entries /hide them if needed, etc.
                    that._checkMenuEntries();



                    //===  EVENTS =================================================

                    //activate the click event for the pull button
                    $(that.pullButton).on("click", function () {

                        //who am i?
                        that = $(this).closest("[data-role=appbar]").data("appbar");

                        //we show /hide the pullmenu
                        if ($(that.pullMenu).is(":hidden")) {
                            $(that.pullMenu).show();
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .hide().not(".hidden").slideDown("fast");
                        } else {
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .not(".hidden").show().slideUp("fast", function () {
                                $(that.pullMenu).hide();
                            });
                        }

                    });


                    //we have to calculate everything new, if the user resizes or zooms the window
                    $(window).resize(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });


                    //because fonts(also icon-fonts) are often loaded async after the page has loaded and this script walked through already, 
                    //we have to check again after these elements loaded. Because there is no way to observe only specific elements, we do it for the window
                    $(window).load(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });

                    //pictures (or other outside stuff was loaded - pictures are also often loaded async or have a lazy load or are injected after a while. 
                    //a picture can change a size of the element from the appbar, so we must recheck it again.
                    $("[data-role=appbar]:not(.no-flexible) [src]").on("load", function () {
                        //who am i?
                        var appbar = $(this).closest("[data-role=appbar]").data("appbar");
                        appbar.resize();
                    });
                }
            }

        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

// Source: js/widgets/button-groups.js
$.widget( "metro.group" , {

    version: "3.0.0",

    options: {
        groupType: 'one-state', // 'multi-state'
        buttonStyle: false,
        onChange: function(index, btn){return true;},
        onChanged: function(index, btn){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var result;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('group-of-buttons')) {element.addClass('group-of-buttons');}

        var buttons = element.find('.button, .toolbar-button');

        for(var i = 0; i < buttons.length; i++) {
            $(buttons[i]).data('index', i);
        }

        if (o.buttonStyle !== false) {
            buttons.addClass(o.buttonStyle);
        }

        element.on('click', '.button, .toolbar-button', function(){

            var button = $(this), index = button.data('index');

            if (typeof o.onChange === 'function') {
                if (!o.onChange(index, button)) {return false;}
            } else {
                if (typeof window[o.onChange] === 'function') {
                    if (!window[o.onChange](index, button)) {return false;}
                } else {
                    result = eval("(function(){"+o.onChange+"})");
                    if (!result.call(index, button)) {return false;}
                }
            }

            if (o.groupType === 'one-state') {
                buttons.removeClass('active');
                $(this).addClass('active');
            } else  {
                $(this).toggleClass('active');
            }

            if (typeof o.onChanged === 'function') {
                o.onChanged(index, button);
            } else {
                if (typeof window[o.onChanged] === 'function') {
                    window[o.onChanged](index, button);
                } else {
                    result = eval("(function(){"+o.onChanged+"})");
                    result.call(index, button);
                }
            }
        });

        element.data('group', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/calendar.js
$.widget("metro.calendar", {

    version: "3.0.0",

    options: {
        format: "yyyy-mm-dd",
        multiSelect: false,
        startMode: 'day', //year, month, day
        weekStart: window.METRO_CALENDAR_WEEK_START, // 0 - Sunday, 1 - Monday
        otherDays: true,
        date: new Date(),
        minDate: false,
        maxDate: false,
        preset: false,
        exclude: false,
        stored: false,
        buttons: true,
        buttonToday: true,
        buttonClear: true,
        syncCalenderToDateField: true,
        locale: 'en',
        actions: true,
        condensedGrid: false,
        scheme: 'default',
        getDates: function (d) { },
        dayClick: function (d, d0) { }
    },

    //_storage: [],
    //_exclude: [],

    _year: 0,
    _month: 0,
    _day: 0,
    _today: new Date(),
    _event: '',

    _mode: 'day', // day, month, year
    _distance: 0,

    _events: [],

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function (key, value) {
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (typeof o.date === 'string') {
            o.date = new Date(o.date);
        }

        if (o.minDate !== false && typeof o.minDate === 'string') {
            o.minDate = new Date(o.minDate.replace(/\./g, "-") + 'T00:00:00Z');
            o.minDate.setTime(o.minDate.getTime() - 24 * 60 * 60 * 1000);
        }

        if (o.maxDate !== false && typeof o.maxDate === 'string') {
            o.maxDate = new Date(o.maxDate.replace(/\./g, "-") + 'T00:00:00Z');
        }

        //console.log(window.METRO_LOCALES);

        this.locales = window.METRO_LOCALES;

        this._year = o.date.getFullYear();
        this._distance = o.date.getFullYear() - 4;
        this._month = o.date.getMonth();
        this._day = o.date.getDate();
        this._mode = o.startMode;

        element.data("_storage", []);
        element.data("_exclude", []);
        element.data("_stored", []);
        if (!element.hasClass('calendar')) { element.addClass('calendar'); }

        var re, dates;

        if (o.preset) {
            re = /\s*,\s*/;
            dates = o.preset.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDate(this); }
            });
        }

        if (o.exclude) {
            re = /\s*,\s*/;
            dates = o.exclude.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDateExclude(this); }
            });
        }

        if (o.stored) {
            re = /\s*,\s*/;
            dates = o.stored.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDateStored(this); }
            });
        }

        if (o.scheme !== 'default') {
            element.addClass(o.scheme);
        }

        this._renderCalendar();

        element.data('calendar', this);

    },

    _renderButtons: function (table) {
        var tr, td, o = this.options;

        if (this.options.buttons) {

            var buttonToday = o.buttonToday ? "<button class='button calendar-btn-today small-button success'>" + this.locales[o.locale].buttons[0] + "</button>" : "";
            var buttonClear = o.buttonClear ? "<button class='button calendar-btn-clear small-button warning'>" + this.locales[o.locale].buttons[1] + "</button>" : "";

            tr = $("<div/>").addClass("calendar-row calendar-actions");
            td = $("<div/>").addClass("align-center").html(
                buttonToday + buttonClear
            );
            td.appendTo(tr);
            tr.appendTo(table);
        }
    },

    _renderMonth: function () {
        var that = this, o = this.options,
            year = this._year,
            month = this._month,
            day = this._day,
            event = this._event,
            feb = 28;

        if (month === 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                feb = 29;
            }
        }

        var totalDays = ["31", "" + feb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var daysInMonth = totalDays[month];
        
        var first_week_day = this._dateFromNumbers(year, month+1, 1).getDay();

        var table, tr, td, i, div;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (o.condensedGrid) {
            table.addClass('condensed no-border');
        }

        //console.log(this.locales);

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row no-margin');

        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(tr);

        $("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>" + this.locales[o.locale].months[month] + ' ' + year + "</a>").appendTo(tr);

        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        // Add day names
        var j;
        tr = $("<div/>").addClass('calendar-row week-days');
        for (i = 0; i < 7; i++) {
            if (!o.weekStart) {
                td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                div = $("<div/>").html(this.locales[o.locale].days[i + 7]).appendTo(td);
            } else {
                j = i + 1;
                if (j === 7) { j = 0; }
                td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                div = $("<div/>").html(this.locales[o.locale].days[j + 7]).appendTo(td);
            }
        }
        tr.addClass("calendar-subheader").appendTo(table);

        // Add empty days for previos month
        var prevMonth = this._month - 1; if (prevMonth < 0) { prevMonth = 11; } var daysInPrevMonth = totalDays[prevMonth];
        var _first_week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;
        var htmlPrevDay = "";
        tr = $("<div/>").addClass('calendar-row');
        for (i = 0; i < _first_week_day; i++) {
            if (o.otherDays) { htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1); }
            td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
            div = $("<div/>").addClass('other-day').html(htmlPrevDay).appendTo(td);
            if (!o.otherDays) {
                div.css('visibility', 'hidden');
            }
        }

        // Days for current month
        var week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;

        var d, a, d_html;

        for (i = 1; i <= daysInMonth; i++) {
            week_day %= 7;

            if (week_day === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }

            td = $("<div/>").addClass("calendar-cell align-center day");
            div = $("<div/>").appendTo(td);

            if (o.minDate !== false && (this._dateFromNumbers(year, month+1, i) < o.minDate) || o.maxDate !== false && (this._dateFromNumbers(year, month+1, i) > o.maxDate)) {
                td.removeClass("day");
                div.addClass("other-day");
                d_html = i;
            } else {
                d_html = "<a href='#'>" + i + "</a>";
            }

            div.html(d_html);

            //console.log(div);

            if (year === this._today.getFullYear() && month === this._today.getMonth() && this._today.getDate() === i) {
                td.addClass("today");
            }

            //console.log('xxx');
            d = this._dateNumberStringyFy(this._year, this._month + 1, i);

            if (this.element.data('_storage').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("selected");
            }

            if (this.element.data('_exclude').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("exclude");
            }

            if (this.element.data('_stored').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("stored");
            }

            td.appendTo(tr);
            week_day++;
        }


        // next month other days
        var htmlOtherDays = "";
        for (i = week_day + 1; i <= 7; i++) {
            if (o.otherDays) { htmlOtherDays = i - week_day; }
            td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
            div = $("<div/>").addClass('other-day').html(htmlOtherDays).appendTo(td);
            if (!o.otherDays) {
                div.css('visibility', 'hidden');
            }
        }

        tr.appendTo(table);
        this._renderButtons(table);
        table.appendTo(this.element);
    },

    _renderMonths: function () {
        var table, tr, td, i, j;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (this.options.condensedGrid) {
            table.addClass('condensed no-border');
        }

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row');

        $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        tr = $("<div/>").addClass('calendar-row');
        j = 0;
        for (i = 0; i < 12; i++) {

            //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
            td = $("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='" + i + "'>" + this.locales[this.options.locale].months[i + 12] + "</a>");

            if (this._month === i && (new Date()).getFullYear() === this._year) {
                td.addClass("today");
            }

            td.appendTo(tr);
            if ((j + 1) % 4 === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }
            j += 1;
        }

        this._renderButtons(table);

        table.appendTo(this.element);
    },

    _renderYears: function () {
        var table, tr, td, i, j;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (this.options.condensedGrid) {
            table.addClass('condensed no-border');
        }

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row cells4');

        $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>" + (this._distance) + "-" + (this._distance + 11) + "</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        tr = $("<div/>").addClass('calendar-row');

        j = 0;
        for (i = this._distance; i < this._distance + 12; i++) {
            td = $("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='" + i + "'>" + i + "</a>");
            if ((new Date()).getFullYear() === i) {
                td.addClass("today");
            }
            td.appendTo(tr);
            if ((j + 1) % 4 === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }
            j += 1;
        }

        this._renderButtons(table);

        table.appendTo(this.element);
    },

    _renderCalendar: function () {
        switch (this._mode) {
            case 'year': this._renderYears(); break;
            case 'month': this._renderMonths(); break;
            default: this._renderMonth();
        }
        this._initButtons();
    },

    _initButtons: function () {
        // Add actions
        var that = this, o = this.options,
            table = this.element.find('.calendar-grid');

        if (this._mode === 'day') {
            table.find('.btn-select-month').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                that._mode = 'month';
                that._renderCalendar();
            });
            table.find('.btn-previous-month').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._month -= 1;
                if (that._month < 0) {
                    that._year -= 1;
                    that._month = 11;
                }
                that._renderCalendar();
            });
            table.find('.btn-next-month').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._month += 1;
                if (that._month === 12) {
                    that._year += 1;
                    that._month = 0;
                }
                that._renderCalendar();
            });
            table.find('.btn-previous-year').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._year -= 1;
                that._renderCalendar();
            });
            table.find('.btn-next-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year += 1;
                that._renderCalendar();
            });
            table.find('.day a').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if ($(this).parent().parent().hasClass('exclude')) {
                    return false;
                }

                var d = (new Date(that._paddy(that._year, 4), that._paddy(that._month, 2), that._paddy(parseInt($(this).html()), 2)).format(that.options.format, null));
                var d0 = (new Date(that._paddy(that._year, 4), that._paddy(that._month, 2), that._paddy(parseInt($(this).html()), 2)));

                if (that.options.multiSelect) {
                    $(this).parent().parent().toggleClass("selected");

                    if ($(this).parent().parent().hasClass("selected")) {
                        that._addDate(that._dateStringyFy(d0));
                    } else {
                        that._removeDate(that._dateStringyFy(d0));
                    }
                } else {
                    table.find('.day a').parent().parent().removeClass('selected');
                    $(this).parent().parent().addClass("selected");
                    that.element.data('_storage', []);
                    that._addDate(that._dateStringyFy(d0));
                }


                if (typeof o.dayClick === 'function') {
                    o.dayClick(d, d0);
                } else {
                    if (typeof window[o.dayClick] === 'function') {
                        window[o.dayClick](d, d0);
                    } else {
                        var result = eval("(function(){" + o.dayClick + "})");
                        result.call(d, d0);
                    }
                }
            });
        } else if (this._mode === 'month') {
            table.find('.month a').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._month = parseInt($(this).data('month'));
                that._mode = 'day';
                that._renderCalendar();
            });
            table.find('.btn-previous-year').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._year -= 1;
                that._renderCalendar();
            });
            table.find('.btn-next-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year += 1;
                that._renderCalendar();
            });
            table.find('.btn-select-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._mode = 'year';
                that._renderCalendar();
            });
        } else {
            table.find('.year a').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year = parseInt($(this).data('year'));
                that._mode = 'month';
                that._renderCalendar();
            });
            table.find('.btn-previous-year').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._distance -= 10;
                that._renderCalendar();
            });
            table.find('.btn-next-year').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._distance += 10;
                that._renderCalendar();
            });
        }

        table.find('.calendar-btn-today').on('click', function (e) {
            //that._event = 'eventNext';
            e.preventDefault();
            e.stopPropagation();
            that._mode = that.options.startMode;
            that.options.date = new Date();
            that._year = that.options.date.getFullYear();
            that._month = that.options.date.getMonth();
            that._day = that.options.date.getDate();
            that._renderCalendar();
        });
        table.find('.calendar-btn-clear').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            that.options.date = new Date();
            that._year = that.options.date.getFullYear();
            that._month = that.options.date.getMonth();
            that._day = that.options.date.getDate();
            that.element.data('_storage', []);
            that._renderCalendar();
        });

    },

    _addDate: function (d) {
        var index = this.element.data('_storage').indexOf(d);
        if (index < 0) { this.element.data('_storage').push(d); }
    },

    _removeDate: function (d) {
        var index = this.element.data('_storage').indexOf(d);
        this.element.data('_storage').splice(index, 1);
    },

    _addDateExclude: function (d) {
        var index = this.element.data('_exclude').indexOf(d);
        if (index < 0) { this.element.data('_exclude').push(d); }
    },

    _addDateStored: function (d) {
        var index = this.element.data('_stored').indexOf(d);
        if (index < 0) { this.element.data('_stored').push(d); }
    },

    _removeDateExclude: function (d) {
        var index = this.element.data('_exclude').indexOf(d);
        this.element.data('_exclude').splice(index, 1);
    },

    _removeDateStored: function (d) {
        var index = this.element.data('_stored').indexOf(d);
        this.element.data('_stored').splice(index, 1);
    },

    _paddy: function paddy(n, p, c) {
        var pad_char = typeof c !== 'undefined' ? c : '0';
        var pad = new Array(1 + p).join(pad_char);
        return (pad + n).slice(-pad.length);
    },

    _dateFromNumbers: function dateFromNumbers(year, month, day){
        return new Date(this._paddy(year, 4) + "/" +  this._paddy(month, 2) + "/" + this._paddy(day, 2));
    },

    _dateNumberStringyFy: function dateNumberStringyFy(year, month, day) {
        return (this._dateFromNumbers(year, month, day)).format('yyyy-mm-dd')
    },

    _dateStringyFy: function dateStringyFy(d) {
        return this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
    },

    setDate: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        
        this._addDate(r);
        if (this.options.syncCalenderToDateField) {
            this._year = d.getFullYear();
            this._month = d.getMonth();
            this._day = d.getDate();
        }
        this._renderCalendar();
    },

    setDateExclude: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._addDateExclude(r);
        this._renderCalendar();
    },

    setDateStored: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._addDateStored(r);
        this._renderCalendar();
    },

    getDate: function (index) {
        return new Date(index !== undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
    },

    getDates: function () {
        var res;
        res = $.merge($.merge([], this.element.data('_storage')), this.element.data('_stored'));
        return res.unique();
    },

    unsetDate: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDate(r);
        this._renderCalendar();
    },

    unsetDateExclude: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDateExclude(r);
        this._renderCalendar();
    },

    unsetDateStored: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDateStored(r);
        this._renderCalendar();
    },

    _destroy: function () { },

    _setOption: function (key, value) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/carousel.js
$.widget("metro.carousel", {

    version: "3.0.0",

    options: {
        auto: true,
        period: 5000,
        duration: 1000,
        effect: 'slide', // slide, fade, switch, slowdown
        effectFunc: 'linear',
        direction: 'left',
        controls: true,
        controlNext: false,
        controlPrev: false,
        markers: true,
        stop: true,
        width: '100%',
        height: false,

        _slides: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _animating: false
    },


    _create: function(){
        var that = this, o = this.options,
            element = this.element;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        o._slides = element.find('.slide');

        var max_height = 0; //element.find('.slide:nth-child(1)').outerHeight();


        $.each(o._slides, function(){
            var oh, slide = $(this);

            oh = slide.outerHeight();

            if (oh > max_height) {max_height = oh;}
        });

        element.css({
            'width': o.width,
            'height': o.height ? o.height : max_height
        });

        if (o._slides.length <= 1) {return;}

        if (o.markers) {
            this._markers();
        }

        if (o.controls) {
            this._controls();
        }

        if (o.stop) {
            element
                .on('mouseenter', function(){
                    clearInterval(o._interval);
                })
                .on('mouseleave', function(){
                    if (that.options.auto) {that._autoStart();}// that.options.period;
                });
        }

        element.find('.slide').hide();
        element.find('.slide:nth-child(1)').show();

        //this._slideToSlide(0);
        if (o.auto) {
            this._autoStart();
        }

        element.data('carousel', this);

    },

    _autoStart: function(){
        var that = this, o = this.options;
        o._interval = setInterval(function(){
            if (o.direction === 'left') {
                that._slideTo('next');
            } else {
                that._slideTo('prior');
            }
        }, o.period);
    },

    _slideTo: function(direction){
        var carousel = this.element, that = this, o = this.options;
        var currentSlide = o._slides[o._currentIndex], nextSlide;

        if (direction === undefined) {direction = 'next';}

        if (direction === 'prior') {
            o._currentIndex -= 1;
            if (o._currentIndex < 0) {o._currentIndex = o._slides.length - 1;}

            o._outPosition = this.element.width();

        } else if (direction === 'next') {
            o._currentIndex += 1;
            if (o._currentIndex >= o._slides.length) {o._currentIndex = 0;}

            o._outPosition = -this.element.width();

        }

        nextSlide = o._slides[o._currentIndex];

        switch (this.options.effect) {
            case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
            case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
            case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
            default: this._effectSlide(currentSlide, nextSlide, this.options.duration);
        }

        carousel.find('.carousel-bullets a').each(function(){
            var index = $(this).data('num');
            if (index === o._currentIndex) {
                $(this).addClass('bullet-on');
            } else {
                $(this).removeClass('bullet-on');
            }
        });
    },

    _slideToSlide: function(slideIndex){
        var o = this.options,
            currentSlide = o._slides[o._currentIndex],
            nextSlide = o._slides[slideIndex];

        if (o._currentIndex === slideIndex) {
            return false;
        }

        if (slideIndex > o._currentIndex) {
            o._outPosition = -this.element.width();
        } else {
            o._outPosition = this.element.width();
        }

        switch (this.options.effect) {
            case 'switch' : this._effectSwitch(currentSlide, nextSlide); break;
            case 'slowdown': this._effectSlowdown(currentSlide, nextSlide); break;
            case 'fade': this._effectFade(currentSlide, nextSlide); break;
            default : this._effectSlide(currentSlide, nextSlide);
        }

        o._currentIndex = slideIndex;
    },

    _controls: function(){
        var next, prev, that = this, element = this.element, o = this.options;

        next = $('<span/>').addClass('carousel-switch-next').html("&gt;");
        prev = $('<span/>').addClass('carousel-switch-prev').html("&lt;");

        if (o.controlNext) {
            next.html(o.controlNext);
        }

        if (o.controlPrev) {
            prev.html(o.controlPrev);
        }

        next.appendTo(element);
        prev.appendTo(element);

        if (o._slides.length > 1) {
            prev.on('click', function(){
                if (o._animating === false) {
                    that._slideTo('prior');
                    o._animating = true;
                    setTimeout(function(){o._animating = false;}, o.duration);
                }
            });
            next.on('click', function(){
                if (o._animating === false) {
                    that._slideTo('next');
                    o._animating = true;
                    setTimeout(function(){o._animating = false;}, o.duration);
                }
            });
        } else {
            next.hide();
            prev.hide();
        }
    },

    _markers: function () {
        var div, a, i, that = this, o = this.options;

        div = $('<div class="carousel-bullets" />');

        for (i = 0; i < o._slides.length; i++) {
            a = $('<a class="carousel-bullet" href="javascript:void(0)" data-num="' + i + '"></a>');
            if (i === 0) {
                a.addClass('bullet-on');
            }
            a.appendTo(div);
        }


        div.find('a').on('click', function (e) {
            var _this = $(this),
                index = _this.data('num');



            div.find('a').removeClass('bullet-on');
            _this.addClass('bullet-on');

            if (index === o._currentIndex) {
                return false;
            }

            that._slideToSlide(index);

            e.preventDefault();
            e.stopPropagation();
        });

        div.appendTo(this.element);

    },


    _effectSwitch: function(currentSlide, nextSlide){
        $(currentSlide)
            .hide();
        $(nextSlide)
            .css({left: 0})
            .show();
        this.element.css({
            height: $(nextSlide).outerHeight()
        });
    },

    _effectSlide: function(currentSlide, nextSlide){
        var o = this.options;
        $(currentSlide)
            .animate({left: o._outPosition}, o.duration, o.effectFunc);
        $(nextSlide)
            .css('left', o._outPosition * -1)
            .show();

        this.element.css({
            height: $(nextSlide).outerHeight()
        });

        $(nextSlide).animate({left: 0}, o.duration, o.effectFunc);
    },

    _effectSlowdown: function(currentSlide, nextSlide){
        var o = this.options;
        var options = {
            'duration': o.duration,
            'easing': 'doubleSqrt'
        };
        $.easing.doubleSqrt = function(t) {
            return Math.sqrt(Math.sqrt(t));
        };

        $(currentSlide)
            .animate({left: o._outPosition}, options);


        $(nextSlide)
            .css('left', o._outPosition * -1)
            .show();

        this.element.css({
            height: $(nextSlide).outerHeight()
        });

        $(nextSlide).animate({left: 0}, options);
    },

    _effectFade: function(currentSlide, nextSlide){
        var o = this.options;

        $(currentSlide)
            .fadeOut(o.duration);
        $(nextSlide)
            .css({left: 0})
            .fadeIn(o.duration);
        this.element.css({
            height: $(nextSlide).outerHeight()
        });
    },

    slideTo: function(index){
        this._slideToSlide(index);
    },

    nextSlide: function(){
        this._slideTo('next');
    },

    priorSlide: function(){
        this._slideTo('prior');
    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/charm.js
$.widget( "metro.charm" , {

    version: "3.0.0",

    options: {
        position: "right",
        opacity: 1,
        outside: false,
        timeout: 0,
        duration: 400
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });


        this._createCharm();

        element.data('charm', this);
    },

    _createCharm: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass("charm").addClass(o.position+"-side").css({opacity: o.opacity}).hide();

        var closer = $("<span/>").addClass("charm-closer").appendTo(element);
        closer.on('click', function(){
            that.close();
        });

        if (o.outside === true) {
            element.on('mouseleave', function(e){
                that.close();
            });
        }
    },

    _showCharm: function(){
        var that = this, element = this.element, o = this.options;
        var size;

        if (o.position === "left" || o.position === "right") {
            size = element.outerWidth();
            if (o.position === "left") {
                element.css({
                    left: -size
                }).show().animate({
                    left: 0
                }, o.duration);
            } else {
                element.css({
                    right: -size
                }).show().animate({
                    right: 0
                }, o.duration);
            }
        } else {
            size = element.outerHeight();
            if (o.position === "top") {
                element.css({
                    top: -size
                }).show().animate({
                    top: 0
                }, o.duration);
            } else {
                element.css({
                    bottom: -size
                }).show().animate({
                    bottom: 0
                }, o.duration);
            }
        }

        if (o.timeout > 0) {
            this._timeout_interval = setInterval(function(){
                if (!element.is(":hover")) {
                    that.close();
                    clearInterval(this._timeout_interval);
                }
            }, o.timeout);
        }
    },

    _hideCharm: function(){
        var that = this, element = this.element, o = this.options;
        var size;

        if (o.position === "left" || o.position === "right") {
            size = element.outerWidth();
            if (o.position === "left") {
                element.animate({
                    left: -size
                }, o.duration, function(){
                    element.hide();
                });
            } else {
                element.animate({
                    right: -size
                }, o.duration, function(){
                    element.hide();
                });
            }
        } else {
            size = element.outerHeight();
            if (o.position === "top") {
                element.animate({
                    top: -size
                }, o.duration, function(){
                    element.hide();
                });
            } else {
                element.animate({
                    bottom: -size
                }, o.duration, function(){
                    element.hide();
                });
            }
        }

        clearInterval(this._timeout_interval);
    },

    open: function(){
        var that = this, element = this.element, o = this.options;

        if (element.data("opened") === true) {
            return;
        }

        element.data("opened", true);
        this._showCharm();
    },

    close: function(){
        var that = this, element = this.element, o = this.options;

        if (element.data("opened") === false) {
            return;
        }

        element.data("opened", false);

        this._hideCharm();
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/clock.js
$.widget( "metro.clock" , {

    version: "1.0.0",

    options: {
        format: '24',
        showSeconds: true,
        showDate: false,
        dateFormat: 'american'
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        this._createClock();

        element.data('clock', this);
    },

    _tick: function(){
        var that = this, element = this.element, o = this.options;
        var current_time = new Date();

        var h = current_time.getHours(),
            m = current_time.getMinutes(),
            s = current_time.getSeconds(),
            dy = current_time.getDay(),
            dt = current_time.getDate(),
            mo = current_time.getMonth() + 1,
            y = current_time.getFullYear(),
            ap = "";

        if (o.format == "12") {
            ap = " AM";
            if (h > 11) { ap = " PM"; }
            if (h > 12) { h = h - 12; }
            if (h == 0) { h = 12; }
        }

        h = this._leadZero(h);
        m = this._leadZero(m);
        s = this._leadZero(s);

        dy = this._leadZero(dt);
        mo = this._leadZero(mo);

        var ddd, result = "";

        if (o.dateFormat == 'american') {
            ddd = y+"-"+mo+"-"+dy;
        } else {
            ddd = dy+"-"+mo+"-"+y;
        }

        if (o.showDate) {
            result += ddd;
        }

        result += "<span></span> <span class='hour'>"+h+"</span>:<span class='minute'>"+m+"</span>";

        if (o.showSeconds) {
            result += ":<span class='second'>"+s+"</span>";
        }

        result += "<span class='ap'>"+ap+"</span>";

        element.html(result);
    },

    _leadZero: function(i){
        return i < 10 ? "0" + i : i;
    },

    _createClock: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass('clock');

        this._tick();

        this._clockInterval = setInterval(function(){
            that._tick();
        }, 1000);
    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
        clearInterval(this._clockInterval);
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/countdown.js
$.widget( "metro.countdown" , {

    version: "3.0.0",

    options: {
        stop: false,
        days: false,
        hours: false,
        minutes: false,
        seconds: false,
        backgroundColor: 'bg-cyan',
        digitColor: 'fg-white',
        dividerColor: 'fg-dark',
        labelColor: 'fg-grayLight',
        labels: {
            'days': 'days',
            'hours': 'hours',
            'minutes': 'mins',
            'seconds': 'secs'
        },
        onTick: function(d, h, m, s){},
        onStop: function(){}
    },

    _interval: 0,
    _interval2: 0,
    _alarmOn: undefined,

    _create: function () {
        //console.log('hi from countdown');

        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._alarmOn = new Date();

        if (o.stop !== false) {
            this._alarmOn = new Date(o.stop);
        }

        var dm = 24*60*60*1000, hm = 60*60*1000, mm = 60*1000, sm = 1000;

        if (o.days !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.days*dm;
        }

        if (o.hours !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.hours*hm;
        }

        if (o.minutes !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.minutes*mm;
        }

        if (o.seconds !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.seconds*sm;
        }

        this._createDigits();

        element.find('.digit').text('0');

        that._tick();

        element.data('countdown', this);

    },

    _createDigits: function(){
        var element = this.element, o = this.options;
        var parts = ['days', 'hours', 'minutes', 'seconds'];
        var p, d;

        parts.map(function(v){
            p = $("<div/>").addClass('part ' + v).attr('data-day-text', o.labels[v]).appendTo(element);
            $("<div/>").addClass('digit').appendTo(p);
            $("<div/>").addClass('digit').appendTo(p);
            if (o.labelColor.isColor()) {
                p.css({
                    color: o.labelColor
                });
            } else {
                p.addClass(o.labelColor);
            }

            if (o.backgroundColor.isColor()) {
                p.find('.digit').css({
                    background: o.backgroundColor
                });
            } else {
                p.find('.digit').addClass(o.backgroundColor);
            }

            if (o.digitColor.isColor()) {
                p.find('.digit').css({
                    color: o.digitColor
                });
            } else {
                p.find('.digit').addClass(o.digitColor);
            }

            if (v !== 'seconds') {
                d = $("<div/>").addClass("divider").text(':').appendTo(element);
                if (o.dividerColor.isColor()) {
                    d.css({'color': o.dividerColor});
                } else {
                    d.addClass(o.dividerColor);
                }
            }

        });

    },

    _blink: function(){
        this.element.toggleClass('tick');
    },

    _tick: function(){
        var that = this, o = this.options, element = this.element;
        var days = 24*60*60,
            hours = 60*60,
            minutes = 60;

        var left, d, h, m, s;

        this._interval2 = setInterval(function(){
            that._blink();
        }, 500);

        this._interval = setInterval(function(){
            var result;

            left = Math.floor((that._alarmOn - (new Date())) / 1000);
            if (left < 0) {left = 0;}

            d = Math.floor(left / days);
            left -= d*days;
            that._update('days', d);

            if (d === 0) {
                element.find('.part.days').addClass('disabled');
            }

            h = Math.floor(left / hours);
            left -= h*hours;
            that._update('hours', h);

            if (d === 0 && h === 0) {
                element.find('.part.hours').addClass('disabled');
            }

            m = Math.floor(left / minutes);
            left -= m*minutes;
            that._update('minutes', m);

            if (d === 0 && h === 0 && m === 0) {
                element.find('.part.minutes').addClass('disabled');
            }

            s = left;
            that._update('seconds', s);

            if (typeof o.onTick === 'function') {
                o.onTick(d, h, m, s);
            } else {
                if (typeof window[o.onTick] === 'function') {
                    window[o.onTick](d, h, m, s);
                } else {
                    result = eval("(function(){"+o.onTick+"})");
                    result.call(d, h, m, s);
                }
            }

            //that._blink();

            if (d === 0 && h === 0 && m === 0 && s === 0) {
                element.find('.part').addClass('disabled');

                if (typeof o.onStop === 'function') {
                    o.onStop();
                } else {
                    if (typeof window[o.onStop] === 'function') {
                        window[o.onStop]();
                    } else {
                        result = eval("(function(){"+o.onStop+"})");
                        result.call();
                    }
                }

                that._stop('all');
                that._trigger('alarm');
                clearInterval(that._interval);
            }

        }, 1000);
    },

    _update: function(part, value){
        var element = this.element;
        var major_value = Math.floor(value/10)%10;
        var minor_value = value%10;
        var major_digit, minor_digit;

        major_digit = element.find("."+part+" .digit:eq(0)");
        minor_digit = element.find("."+part+" .digit:eq(1)");

        if (minor_value !== parseInt(minor_digit.text())) {
            minor_digit.toggleClass('scaleIn');
            setTimeout(function(){
                minor_digit.text(minor_value).toggleClass('scaleIn');
            }, 500);
        }
        if (major_value !== parseInt(major_digit.text())) {
            major_digit.toggleClass('scaleIn');
            setTimeout(function(){
                major_digit.text(major_value).toggleClass('scaleIn');
            }, 500);
        }
    },

    _stop: function(){
        clearInterval(this._interval);
        clearInterval(this._interval2);
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/datatable.js
$.widget( "metro.datatable" , {

    version: "3.0.0",

    options: {
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            try {
                o[key] = $.parseJSON(value);
            } catch (e) {
                o[key] = value;
            }
        });

        if($().dataTable) {
            try {
                element.dataTable(o);
            } catch (e) {

            }
        } else {
            alert('dataTable plugin required');
        }

        element.data('datatable', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/datepicker.js
$.widget("metro.datepicker", {

    version: "3.0.0",

    options: {
        format: "yyyy.mm.dd",
        preset: false,
        minDate: false,
        maxDate: false,
        effect: 'fade',
        position: 'bottom',
        locale: window.METRO_CURRENT_LOCALE,
        weekStart: window.METRO_CALENDAR_WEEK_START,
        otherDays: false,
        exclude: false,
        stored: false,
        buttons: false,
        buttonToday: true,
        buttonClear: true,
        condensedGrid: false,
        scheme: 'default',
        onSelect: function(d, d0){}
    },

    _calendar: undefined,

    _create: function(){
        var that = this,
            element = this.element, o = this.options,
            input = element.children("input"),
            button = element.children("button");

        //console.log(o);

        $.each(element.data(), function(key, value){
            //console.log(typeof key, key, value);

            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createCalendar();

        input.attr('readonly', true);
        button.attr('type', 'button');

        button.on('click', function(e){
            e.stopPropagation();
            if (that._calendar.css('display') === 'none') {
                that._show();
            } else {
                that._hide();
            }
        });

        element.on('click', function(e){
            e.stopPropagation();
            if (that._calendar.css('display') === 'none') {
                that._show();
            } else {
                that._hide();
            }
        });

        $('html').on('click', function(){
            $(".calendar-dropdown").hide();
        });

        element.data('datepicker', this);

    },

    _createCalendar: function(){
        var _calendar, that = this, element = this.element, o = this.options;

        _calendar = $("<div/>").css({
            position: 'absolute',
            display: 'none',
            'max-width': 220,
            'z-index': 1000

        }).addClass('calendar calendar-dropdown').appendTo(element);

        //if (o.date != undefined) {
            //_calendar.data('date', o.date);
        //}


        _calendar.calendar({
            multiSelect: false,
            format: o.format,
            buttons: false,
            buttonToday: false,
            buttonClear: false,
            locale: o.locale,
            otherDays: o.otherDays,
            weekStart: o.weekStart,
            condensedGrid: o.condensedGrid,
            exclude: o.exclude,
            stored: o.stored,
            date: o.preset ? o.preset : new Date(),
            minDate: o.minDate,
            maxDate: o.maxDate,
            scheme: o.scheme,
            dayClick: function(d, d0){
                //console.log(d, d0);
                _calendar.calendar('setDate', d0);
                that.element.children("input[type=text]").val(d);
                that.element.children("input[type=text]").trigger('change', d0);
                that.element.children("input[type=text]").blur();
                that._hide();

                if (typeof o.onSelect === 'function') {
                    o.onSelect(d, d0);
                } else {
                    if (typeof window[o.onSelect] === 'function') {
                        window[o.onSelect](d, d0);
                    } else {
                        var result = eval("(function(){"+o.onSelect+"})");
                        result.call(d, d0);
                    }
                }
            }
        });

        if (o.preset !== false) {
            //console.log(o.preset);
            _calendar.calendar('setDate', o.preset);
            element.find("input, .datepicker-output").val(_calendar.calendar('getDate'));
        }

        // Set position
        switch (this.options.position) {
            case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
            default: _calendar.css({top: '100%', left: 0});
        }

        this._calendar = _calendar;
    },

    _show: function(){
        if (this.options.effect === 'slide') {
            $(".calendar-dropdown").slideUp('fast');
            this._calendar.slideDown('fast');
        } else if (this.options.effect === 'fade') {
            $(".calendar-dropdown").fadeOut('fast');
            this._calendar.fadeIn('fast');
        } else {
            $(".calendar-dropdown").hide();
            this._calendar.show();
        }
    },
    _hide: function(){
        if (this.options.effect === 'slide') {
            this._calendar.slideUp('fast');
        } else if (this.options.effect === 'fade') {
            this._calendar.fadeOut('fast');
        } else {
            this._calendar.hide();
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/dialog.js
$.widget( "metro.dialog" , {

    version: "3.0.0",

    options: {
        modal: false,
        overlay: false,
        overlayColor: 'default',
        type: 'default', // success, alert, warning, info
        place: 'center', // center, top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, bottom-right
        position: 'default',
        content: false,
        hide: false,
        width: 'auto',
        height: 'auto',
        background: 'default',
        color: 'default',
        closeButton: false,
        windowsStyle: false,
        show: false,
        _interval: undefined,
        _overlay: undefined,

        onDialogOpen: function(dialog){},
        onDialogClose: function(dialog){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.overlay) {
            this._createOverlay();
        }
        this._createDialog();

        element.data('dialog', this);

        if (o.show) {
            this.open();
        }
    },

    _createOverlay: function(){
        var that = this, element = this.element, o = this.options;
        var overlay = $('body').find('.dialog-overlay');

        if (overlay.length === 0) {
            overlay = $("<div/>").addClass('dialog-overlay');
        }

        if (o.overlayColor) {
            if (o.overlayColor.isColor()) {
                overlay.css({
                    background: o.overlayColor
                });
            } else {
                overlay.addClass(o.overlayColor);
            }
        }

        o._overlay = overlay;
    },

    _createDialog: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass('dialog');

        if (o.type !== 'default') {
            element.addClass(o.type);
        }

        if (o.windowsStyle) {
            o.width = 'auto';

            element.css({
                left: 0,
                right: 0
            });
        }

        if (o.background !== 'default') {
            if (o.background.isColor()) {
                element.css({
                    background: o.background
                });
            } else {
                element.addClass(o.background);
            }
        }

        if (o.color !== 'default') {
            if (o.color.isColor()) {
                element.css({
                    color: o.color
                });
            } else {
                element.addClass(o.color);
            }
        }

        element.css({
            width: o.width,
            height: o.height
        });

        if (o.closeButton) {
            $("<span/>").addClass('dialog-close-button').appendTo(element).on('click', function(){
                that.close();
            });
        }

        this._hide();
    },

    _hide: function(){
        var element = this.element;
        element.css({
           visibility: "hidden"
        });
    },

    _show: function(){
        var element = this.element;
        element.css({
           visibility: "visible"
        });
    },

    _setPosition: function(){
        var that = this, element = this.element, o = this.options;
        var width = element.width(),
            height = element.height();

        element.css({
            left: o.windowsStyle === false ? ( $(window).width() - width ) / 2 : 0,
            top: ( $(window).height() - height ) / 2
        });
    },

    toggle: function(){
        var element = this.element;
        if (element.data('opened')) {
            this.close();
        } else {
            this.open();
        }
    },

    open: function(){
        var that = this, element = this.element, o = this.options;
        var overlay;

        this._setPosition();

        element.data('opened', true);

        if (o.overlay) {
            overlay = o._overlay;
            overlay.appendTo('body').show();
        }

        //element.fadeIn();
        this._show();

        if (typeof o.onDialogOpen === 'function') {
            o.onDialogOpen(element);
        } else {
            if (typeof window[o.onDialogOpen] === 'function') {
                window[o.onDialogOpen](element);
            } else {
                var result = eval("(function(){"+o.onDialogOpen+"})");
                result.call(element);
            }
        }

        if (o.hide && parseInt(o.hide) > 0) {
            o._interval = setTimeout(function(){
                that.close();
            }, parseInt(o.hide));
        }
    },

    close: function(){
        var that = this, element = this.element, o = this.options;

        clearInterval(o._interval);

        if (o.overlay) {
            $('body').find('.dialog-overlay').remove();
        }

        element.data('opened', false);

        //element.fadeOut();
        this._hide();

        if (typeof o.onDialogClose === 'function') {
            o.onDialogClose(element);
        } else {
            if (typeof window[o.onDialogClose] === 'function') {
                window[o.onDialogClose](element);
            } else {
                var result = eval("(function(){"+o.onDialogClose+"})");
                result.call(element);
            }
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/draggable.js
$.widget( "metro.draggable" , {

    version: "3.0.0",

    options: {
        dragElement: null,
        dragArea: null,
        onDragStart: function(el){},
        onDragStop: function(el){},
        onDragMove: function(el, offset){}
    },

    drag: false,
    oldCursor: null,
    oldZindex: null,
    oldPosition: null,


    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();
        this._createDraggable();

        element.data('draggable', this);
    },

    _createDraggable: function(){
        var that = this, element = this.element, o = this.options;
        var dragElement  = o.dragElement ? element.find(o.dragElement) : element;

        addTouchEvents(element[0]);

        dragElement.on('mousedown', function(e){
            var result, el = $(this);

            that.drag = true;

            if (typeof o.onDragStart === 'function') {
                o.onDragStart(element);
            } else {
                if (typeof window[o.onDragStart] === 'function') {
                    window[o.onDragStart](element);
                } else {
                    result = eval("(function(){"+o.onDragStart+"})");
                    result.call(element);
                }
            }

            that.oldCursor = el.css('cursor') ? el.css('cursor') : 'default' ;
            that.oldZindex= element.css('z-index');
            dragElement.css({
                cursor: 'move'
            });

            element.css({
                'z-index': '2000'
            });

            var dragArea = o.dragArea ? $(o.dragArea) : $(window);
            var os = {
                left: o.dragArea ? dragArea.offset().left : 0,
                top: o.dragArea ? dragArea.offset().top : 0
            };

            var drg_h = element.outerHeight(),
                drg_w = element.outerWidth(),
                pos_y = element.offset().top + drg_h - e.pageY,
                pos_x = element.offset().left + drg_w - e.pageX;

            //console.log(pos_x, pos_y);

            dragArea.on('mousemove', function(e){
                var offset, pageX, pageY;

                if (!that.drag) return false;


                pageX = e.pageX - os.left;
                pageY = e.pageY - os.top;

                var t = (pageY > 0) ? (pageY + pos_y - drg_h) : (0);
                var l = (pageX > 0) ? (pageX + pos_x - drg_w) : (0);
                var t_delta = dragArea.innerHeight() + dragArea.scrollTop() - element.outerHeight();
                var l_delta = dragArea.innerWidth() + dragArea.scrollLeft() - element.outerWidth();

                if(t >= 0 && t <= t_delta) {
                    element.offset({top: t + os.top});
                }
                if(l >= 0 && l <= l_delta) {
                    element.offset({left: l + os.left});
                }

                offset = {
                    left: l,
                    top: t
                };

                if (typeof o.onDragMove === 'function') {
                    o.onDragMove(element, offset);
                } else {
                    if (typeof window[o.onDragMove] === 'function') {
                        window[o.onDragMove](element, offset);
                    } else {
                        result = eval("(function(){"+o.onDragMove+"})");
                        result.call(element, offset);
                    }
                }
            });

            e.preventDefault();
        });

        dragElement.on('mouseup', function(e){
            var result, el = $(this);

            that.drag = false;
            dragElement.css({
                cursor: that.oldCursor
            });
            element.css({
                'z-index': that.oldZindex,
                'position': that.oldPosition
            });

            if (typeof o.onDragStop === 'function') {
                o.onDragStop(element);
            } else {
                if (typeof window[o.onDragStop] === 'function') {
                    window[o.onDragStop](element);
                } else {
                    result = eval("(function(){"+o.onDragStop+"})");
                    result.call(element);
                }
            }

            e.preventDefault();
        });

    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/dropdown.js
$.widget("metro.dropdown", {

    version: "3.0.0",

    options: {
        effect: window.METRO_SHOW_TYPE,
        toggleElement: false,
        noClose: false,
        onDrop: function(object){},
        onUp: function(object){}
    },

    _create: function(){
        var  that = this, element = this.element, o = this.options,
             menu = this.element,
             name = this.name,
             parent = this.element.parent();

        var toggle;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        if (METRO_SHOW_TYPE !== undefined) {
            this.options.effect = METRO_SHOW_TYPE;
        }

        toggle.on('click.'+name, function(e){
            parent.siblings(parent[0].tagName).removeClass("active-container");
            $(".active-container").removeClass("active-container");

            if (menu.css('display') === 'block' && !menu.hasClass('keep-open')) {
                that._close(menu);
            } else {
                $('[data-role=dropdown]').each(function(i, el){
                    if (!menu.parents('[data-role=dropdown]').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') === 'block') {
                        that._close(el);
                    }
                });
                if (menu.hasClass('horizontal')) {
                    menu.css({
                        'visibility': 'hidden',
                        'display': 'block'
                    });
                    var item_length = $(menu.children('li')[0]).outerWidth();
                    //var item_length2 = $(menu.children('li')[0]).width();
                    menu.css({
                        'visibility': 'visible',
                        'display': 'none'
                    });
                    var menu_width = menu.children('li').length * item_length + (menu.children('li').length - 1);
                    menu.css('width', menu_width);
                }
                that._open(menu);
                parent.addClass("active-container");
            }
            e.preventDefault();
            e.stopPropagation();
        });

        if (o.noClose === true) {
            element.on('click', function (e) {
               // e.preventDefault();
                e.stopPropagation();
            });
        }

        $(menu).find('li.disabled a').on('click', function(e){
            e.preventDefault();
        });

        $(document).on('click', function(e){
            $('[data-role=dropdown]').each(function(i, el){
                if (!$(el).hasClass('keep-open') && $(el).css('display')==='block') {
                    that._close(el);
                }
            });
        });

        element.data('dropdown', this);
    },

    _open: function(el){
        var parent = this.element.parent(), o = this.options;
        var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        switch (this.options.effect) {
            case 'fade': $(el).fadeIn('fast'); break;
            case 'slide': $(el).slideDown('fast'); break;
            default: $(el).show();
        }
        this._trigger("onOpen", null, el);
        toggle.addClass('active-toggle');

        if (typeof o.onDrop === 'function') {
            o.onDrop(el);
        } else {
            if (typeof window[o.onDrop] === 'function') {
                window[o.onDrop](el);
            } else {
                var result = eval("(function(){"+o.onDrop+"})");
                result.call(el);
            }
        }
    },

    _close: function(el){
        var parent = $(el).parent(), o = this.options;
        var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        switch (this.options.effect) {
            case 'fade': $(el).fadeOut('fast'); break;
            case 'slide': $(el).slideUp('fast'); break;
            default: $(el).hide();
        }
        this._trigger("onClose", null, el);
        toggle.removeClass('active-toggle');

        if (typeof o.onUp === 'function') {
            o.onUp(el);
        } else {
            if (typeof window[o.onUp] === 'function') {
                window[o.onUp](el);
            } else {
                var result = eval("(function(){"+o.onUp+"})");
                result.call(el);
            }
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/fit-image.js
$.widget( "metro.fitImage" , {

    version: "3.0.0",

    options: {
        shadow: false,
        overlay: false,
        type: 'default',
        frameColor: 'default',
        format: 'hd' // 'sd'
    },

    _create: function () {
        var element = this.element, o = this.options;
        var parent = element.parent();
        var i_w, i_h, p_w, p_h;
        var div, src = element.attr('src');

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        $("<img/>")
            .attr('src', src)
            .load(function(){
                i_w = this.width;
                i_h = this.height;
            }).remove();

        var image_container = $("<div/>").addClass('image-container').css('width', '100%').appendTo(parent);
        var image_frame = $("<div/>").addClass('frame').appendTo(image_container);

        p_w = image_frame.innerWidth();
        p_h = image_frame.innerHeight();

        switch (o.format) {
            case 'sd': p_h = 3 * p_w / 4; break;
            case 'square': p_h = p_w; break;
            case 'cycle': p_h = p_w; break;
            case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
            case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
            default: p_h = 9 * p_w / 16;
        }

        div = $("<div/>").css({
            'width': '100%',
            'height': p_h,
            'background-image': 'url('+src+')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'border-radius': o.format === 'cycle' ? '50%' : '0'
        });

        $(window).on('resize', function(){
            var p_w = image_frame.innerWidth();
            var p_h = image_frame.innerHeight();

            switch (o.format) {
                case 'sd': p_h = 3 * p_w / 4; break;
                case 'square': p_h = p_w; break;
                case 'cycle': p_h = p_w; break;
                case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
                case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
                default: p_h = 9 * p_w / 16;
            }

            div.css({
                'height': p_h
            });
        });

        if (o.frameColor !== 'default') {
            if (o.frameColor.isUrl()) {
                image_frame.css('background-color', o.frameColor);
            } else {
                image_frame.addClass(o.frameColor);
            }
        }
        if (o.overlay !== false) {
            var overlay = $("<div/>").addClass('image-overlay').html(o.overlay).appendTo(image_container);
        }
        if (o.shadow !== false) {
            image_container.addClass('block-shadow');
        }
        div.appendTo(image_frame);

        switch (o.type) {
            case 'diamond': {
                image_container.addClass('diamond'); div.addClass('image-replacer'); break;
            }
            case 'bordered': {
                image_container.addClass('bordered'); break;
            }
            case 'polaroid': {
                image_container.addClass('polaroid'); break;
            }
            case 'handing': {
                image_container.addClass('handing'); break;
            }
            case 'handing-ani': {
                image_container.addClass('handing ani'); break;
            }
            case 'handing-ani-hover': {
                image_container.addClass('handing ani-hover'); break;
            }
        }

        image_container.addClass('image-format-'+ o.format);
        //element.css('display', 'none');
        element.remove();

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/fluentmenu.js
$.widget( "metro.fluentmenu" , {

    version: "3.0.0",

    options: {
        onSpecialClick: function(a, li){},
        onTabClick: function(a, li){},
        onTabChange: function(a, li){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createMenu();

        element.data('fluentmenu', this);

    },

    _createMenu: function(){
        var that = this, element = this.element, o = this.options;
        var active_tab = $(element.find(".tabs-holder > li.active")[0]);

        this.openTab(active_tab);

        element.on("click", ".tabs-holder > li > a", function(e){
            var a = $(this);
            var li = a.parent('li');
            var result;

            if (li.hasClass('special')) {
                if (typeof o.onSpecialClick === 'function') {
                    o.onSpecialClick(a, li);
                } else {
                    if (typeof window[o.onSpecialClick] === 'function') {
                        window[o.onSpecialClick](a, li);
                    } else {
                        result = eval("(function(){"+o.onSpecialClick+"})");
                        result.call(a, li);
                    }
                }
            } else {
                var panel = $(a.attr('href'));
                that._hidePanels();
                that._showPanel(panel);
                element.find('.tabs-holder > li').removeClass('active');
                a.parent('li').addClass('active');

                if (typeof o.onTabClick === 'function') {
                    o.onTabClick(a, li);
                } else {
                    if (typeof window[o.onTabClick] === 'function') {
                        window[o.onTabClick](a, li);
                    } else {
                        result = eval("(function(){"+o.onTabClick+"})");
                        result.call(a, li);
                    }
                }

                if (typeof o.onTabChange === 'function') {
                    o.onTabChange(a, li);
                } else {
                    if (typeof window[o.onTabChange] === 'function') {
                        window[o.onTabChange](a, li);
                    } else {
                        result = eval("(function(){"+o.onTabChange+"})");
                        result.call(a, li);
                    }
                }
            }
            e.preventDefault();
        });
    },

    _hidePanels: function(){
        this.element.find('.tab-panel').hide();
    },

    _showPanel: function(panel){
        if (panel == undefined) {
            panel = this.element.find('.tabs-holder li.active a').attr('href');
        }
        $(panel).show();
    },

    openTab: function(tab){
        var that = this, element = this.element, o = this.options;
        var target_panel = $(tab.children('a').attr('href'));
        if (target_panel.length === 0) {
            return false;
        }
        this._hidePanels();
        this._showPanel(target_panel);
        element.find('.tabs-holder > li').removeClass('active');
        tab.addClass('active');
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/grid.js
$.widget( "metro.grid" , {

    version: "3.0.0",

    options: {
        equalHeight: true
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.equalHeight) {
            setTimeout(function(){
                that._setEqualHeight();
            }, 50);

            $(window).on('resize', function(){
                that._setEqualHeight();
            });
        }

        element.data('grid', this);

    },

    _setEqualHeight: function(){
        var that = this, element = this.element, o = this.options;
        var rows = element.find('.row');

        $.each(rows, function(){
            var row = $(this);
            var cells = row.children('.cell');
            var maxHeight = 0;

            cells.css('min-height', '0');

            $.each(cells, function(){
                //console.log(this.tagName, $(this).outerHeight());
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });

            cells.css('min-height', maxHeight);
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/hint.js
$.widget("metro.hint", {

    version: "3.0.0",

    options: {
        hintPosition: "auto", // bottom, top, left, right, auto
        hintBackground: '#FFFCC0',
        hintColor: '#000000',
        hintMaxSize: 200,
        hintMode: 'default',
        hintShadow: false,
        hintBorder: true,
        hintTimeout: 0,
        hintTimeDelay: 0,

        _hint: undefined
    },

    _create: function(){
        var that = this, element = this.element;
        var o = this.options;


        this.element.on('mouseenter', function(e){
            $(".hint, .hint2").remove();
            if (o.hintTimeDelay > 0) {
                setTimeout(function(){
                    that.createHint();
                    o._hint.show();
                }, o.hintTimeDelay);
            } else {
                that.createHint();
                o._hint.show();
            }
            e.preventDefault();
        });

        this.element.on('mouseleave', function(e){
            if (o._hint.length) {
                o._hint.hide().remove();
            }
            e.preventDefault();
        });

        //element.data('hint', this);

    },

    createHint: function(){
        var that = this, element = this.element,
            hint = element.data('hint').split("|"),
            o = this.options;

        var _hint;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (element[0].tagName === 'TD' || element[0].tagName === 'TH') {
            var wrp = $("<div/>").css("display", "inline-block").html(element.html());
            element.html(wrp);
            element = wrp;
        }

        var hint_title = hint.length > 1 ? hint[0] : false;
        var hint_text = hint.length > 1 ? hint[1] : hint[0];


        _hint = $("<div/>").appendTo('body');
        if (o.hintMode === 2) {
            _hint.addClass('hint2');
        } else {
            _hint.addClass('hint');
        }

        if (!o.hintBorder) {
            _hint.addClass('no-border');
        }

        if (hint_title) {
            $("<div/>").addClass("hint-title").html(hint_title).appendTo(_hint);
        }
        $("<div/>").addClass("hint-text").html(hint_text).appendTo(_hint);

        _hint.addClass(o.position);

        if (o.hintShadow) {_hint.addClass("shadow");}
        if (o.hintBackground) {
            if (o.hintBackground.isColor()) {
                _hint.css("background-color", o.hintBackground);
            } else {
                _hint.addClass(o.hintBackground);
            }
        }
        if (o.hintColor) {
            if (o.hintColor.isColor()) {
                _hint.css("color", o.hintColor);
            } else {
                _hint.addClass(o.hintColor);
            }
        }

        if (o.hintMaxSize > 0) {
            _hint.css({
                'max-width': o.hintMaxSize
            });
        }

        //if (o.hintMode !== 'default') {
        //    _hint.addClass(o.hintMode);
        //}

        if (o.hintPosition === 'top') {
            _hint.addClass('top');
            _hint.css({
                top: element.offset().top - $(window).scrollTop() - _hint.outerHeight() - 20,
                left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
            });
        } else if (o.hintPosition === 'right') {
            _hint.addClass('right');
            _hint.css({
                top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                left: element.offset().left + element.outerWidth() + 15 - $(window).scrollLeft()
            });
        } else if (o.hintPosition === 'left') {
            _hint.addClass('left');
            _hint.css({
                top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                left: element.offset().left - _hint.outerWidth() - 10 - $(window).scrollLeft()
            });
        } else {
            _hint.addClass('bottom');
            _hint.css({
                top: element.offset().top - $(window).scrollTop() + element.outerHeight(),
                left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
            });
        }

        o._hint = _hint;

        if (o.hintTimeout > 0) {
            setTimeout(function(){
                if (o._hint.length) {
                    o._hint.hide().remove();
                }
            }, o.hintTimeout);
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/inputs.js
$.widget("metro.input", {

    version: "3.0.0",

    options: {
        showLabelOnValue: false
    },

    _create: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (element.hasClass('file')) {this._createInputFile();}
        if (element.hasClass('text')) {this._createInputText();}
        if (element.hasClass('password')) {this._createInputText();}
        if (element.hasClass('select')) {this._createInputSelect();}
        if (element.hasClass('textarea')) {this._createInputTextarea();}
        if (element.hasClass('modern')) {this._createInputModern();}

        element.data('input', this);

    },

    _createInputModern: function(){
        var element = this.element;
        var input = element.find("input");
        var placeholder = element.find(".placeholder");

        if (input.val() !== "") {
            placeholder.css({display: "none"});
        }

        input.on("blur", function(){
            if (input.val() !== "") {
                placeholder.css({display: "none"});
            } else {
                placeholder.css({display: "block"});
            }
        });
        input.on("focus", function(){
            if (input.val() !== "") {
                placeholder.css({display: "none"});
            } else {
                placeholder.css({display: "block"});
            }
        });
    },

    _createInputFile: function(){
        var element = this.element;
        var wrapper, button, input;
        wrapper = $("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>");
        button = element.children('.button');
        input = element.children('input[type="file"]');
        input.css('z-index', 0);
        wrapper.insertAfter(input);
        input.attr('tabindex', '-1');
        button.attr('type', 'button');
        wrapper.attr('placeholder', input.attr('placeholder'))

        input.on('change', function(){
            var val = $(this).val();
            if (val !== '') {
                wrapper.val(val.replace(/.+[\\\/]/, ""));
                wrapper.attr('title', val.replace(/.+[\\\/]/, ""));
            }
        });

        element.on('click', '.button, .input-file-wrapper', function(){
            input.trigger('click');
        });
    },

    _createInputText: function(){
        var element = this.element;
        var helper_clear = element.find('.helper-button.clear');
        var helper_reveal = element.find('.helper-button.reveal');
        var input = element.find('input');
        var helpers = element.find('.helper-button');
        var buttons = element.find('.button');
        var states = element.find('.input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required');
        var padding = 0;
        var rtl = element.attr('dir') === 'rtl' || element.parents("[dir='rtl']").length > 0;


        $.each(buttons, function(){
            var b = $(this);
            padding += b.outerWidth();
        });

        if (rtl) {
            input.css({
                'padding-left': padding + 5
            });

            states.css({
                'left': padding + 8
            });
        } else {
            input.css({
                'padding-right': padding + 5
            });

            states.css({
                'right': padding + 8
            });
        }

        helpers
            .attr('tabindex', -1)
            .attr('type', 'button');

        if (helper_clear) {
            helper_clear.on('click', function(){
                input.val('').trigger('change').focus();
            });
        }
        if (helper_reveal && element.hasClass('password')) {
            helper_reveal
                .on('mousedown', function(){input.attr('type', 'text');})
                .on('mouseup', function(){input.attr('type', 'password').focus();});
        }
    },

    _createInputSelect: function(){

    },

    _createInputTextarea: function(){

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/keypad.js
$.widget( "metro.keypad" , {

    version: "3.0.0",

    options: {
        target: false,
        shuffle: false,
        length: false,
        keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        onKey: function(key){},
        onChange: function(value){}
    },

    //_keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (typeof o.keys === 'string') {
            o.keys = o.keys.split(",");
        }

        if (o.target !== false) {
            o.target = $(o.target);
        }

        this._createKeypad();

        element.data('keypad', this);

    },

    _shuffleKeys: function(){
        var that = this, element = this.element, o = this.options;
        var keys = o.keys.slice(0);
        var keypad = this._keypad;
        var keys_length = keys.length + 2;

        if (o.shuffle) {
            keys = keys.shuffle();
        }

        keypad.html('').css({
            width: keys_length / 4 * 32 + (keys_length / 4 + 1) * 2 + 2
        });

        keys.map(function(i){
            $("<div/>").addClass('key').html(i).data('key', i).appendTo(keypad);
        });

        $("<div/>").addClass('key').html('&larr;').data('key', '&larr;').appendTo(keypad);
        $("<div/>").addClass('key').html('&times;').data('key', '&times;').appendTo(keypad);
    },

    _createKeypad: function(){
        var that = this, element = this.element, o = this.options;
        var keypad;

        if (element.hasClass('input-control')) {

            keypad = $("<div/>").addClass('keypad keypad-dropdown').css({
                position: 'absolute',
                'z-index': 1000,
                display: 'none'
            }).appendTo(element);

            o.target = element.find('input');

            element.on('click', function(e){
                if (keypad.css('display') === 'none') {
                    keypad.show();
                } else {
                    keypad.hide();
                }

                var opened_pads = $(".keypad.keypad-dropdown");
                $.each(opened_pads, function(){
                    if (!$(this).is(keypad)) {
                        $(this).hide();
                    }
                });

                e.stopPropagation();
            });

            $('html').on('click', function(){
                $(".keypad.keypad-dropdown").hide();
            });
        } else {
            keypad = element;
            keypad.addClass('keypad');
        }

        if (o.target !== false) {
            $(o.target).attr('readonly', true);
        }

        if (keypad.parent().data('role') === 'dropdown') {
            keypad.parent().css({
                top: '100%'
            });
        }

        this._keypad = keypad;

        this._shuffleKeys();

        keypad.on('click', '.key', function(e){
            var key = $(this);
            var result;

            if (o.target) {
                if (key.data('key') !== '&larr;' && key.data('key') !== '&times;') {
                    if (o.length && $(o.target).val().length === o.length) {
                        return false;
                    }
                    $(o.target).val($(o.target).val() + '' + key.data('key'));
                } else {
                    if (key.data('key') === '&times;') {
                        $(o.target).val('');
                    }
                    if (key.data('key') === '&larr;') {
                        var val = $(o.target).val();
                        $(o.target).val(val.substring(0, val.length - 1))
                    }
                }

                o.target.trigger('change');
            }

            if (typeof o.onKey === 'function') {
                o.onKey(key);
            } else {
                if (typeof window[o.onKey] === 'function') {
                    window[o.onKey](key);
                } else {
                    result = eval("(function(){"+o.onKey+"})");
                    result.call(key);
                }
            }

            if (typeof o.onChange === 'function') {
                o.onChange(o.target.val());
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](o.target.val());
                } else {
                    result = eval("(function(){"+o.onChange+"})");
                    result.call({value: o.target.val()});
                }
            }

            if (o.shuffle) {
                that._shuffleKeys();
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/listview.js
$.widget( "metro.listview" , {

    version: "3.0.0",

    options: {
        onExpand: function(group){},
        onCollapse: function(group){},
        onActivate: function(list){},
        onListClick: function(list){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._initList();
        this._createEvents();

        element.data('listview', this);

    },

    _initList: function(){
        var that = this, element = this.element, o = this.options;
        var groups = element.find('.list-group');

        $.each(groups, function(){
            var group = $(this);
            if (group.hasClass('collapsed')) {
                group.find('.list-group-content').hide();
            }
        });

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        element.on('click', '.list-group-toggle', function(e){
            var toggle = $(this), parent = toggle.parent();
            var result;

            if (toggle.parent().hasClass('keep-open')) {
                return;
            }

            parent.toggleClass('collapsed');

            if (!parent.hasClass('collapsed')) {
                toggle.siblings('.list-group-content').slideDown('fast');
                if (typeof o.onExpand === 'function') {
                    o.onExpand(parent);
                } else {
                    if (typeof window[o.onExpand] === 'function') {
                        window[o.onExpand](parent);
                    } else {
                        result = eval("(function(){"+o.onExpand+"})");
                        result.call(parent);
                    }
                }
            } else {
                toggle.siblings('.list-group-content').slideUp('fast');
                if (typeof o.onCollapse === 'function') {
                    o.onCollapse(parent);
                } else {
                    if (typeof window[o.onCollapse] === 'function') {
                        window[o.onCollapse](parent);
                    } else {
                        result = eval("(function(){"+o.onCollapse+"})");
                        result.call(parent);
                    }
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });

        element.on('click', '.list', function(e){
            var list = $(this);
            var result;

            element.find('.list').removeClass('active');
            list.addClass('active');
            if (typeof o.onActivate === 'function') {
                o.onActivate(list);
            } else {
                if (typeof window[o.onActivate] === 'function') {
                    window[o.onActivate](list);
                } else {
                    result = eval("(function(){"+o.onActivate+"})");
                    result.call(list);
                }
            }
            if (typeof o.onListClick === 'function') {
                o.onListClick(list);
            } else {
                if (typeof window[o.onListClick] === 'function') {
                    window[o.onListClick](list);
                } else {
                    result = eval("(function(){"+o.onListClick+"})");
                    result.call(list);
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/notify.js
var _notify_container = false;
var _notifies = [];

var Notify = {

	_container: null,
	_notify: null,
	_timer: null,

	version: "3.0.0",

	options: {
		icon: '', // to be implemented
		caption: '',
		content: '',
		shadow: true,
		width: 'auto',
		height: 'auto',
		style: false, // {background: '', color: ''}
		position: 'right', //right, left
		timeout: 3000,
		keepOpen: false,
		type: 'default' //default, success, alert, info, warning
	},

	init: function(options) {
		this.options = $.extend({}, this.options, options);
		this._build();
		return this;
	},

	_build: function() {
		var that = this, o = this.options;

		this._container = _notify_container || $("<div/>").addClass("notify-container").appendTo('body');
		_notify_container = this._container;

		if (o.content === '' || o.content === undefined) {return false;}

		this._notify = $("<div/>").addClass("notify");

		if (o.type !== 'default') {
			this._notify.addClass(o.type);
		}

		if (o.shadow) {this._notify.addClass("shadow");}
		if (o.style && o.style.background !== undefined) {this._notify.css("background-color", o.style.background);}
		if (o.style && o.style.color !== undefined) {this._notify.css("color", o.style.color);}

		// add Icon
		if (o.icon !== '') {
			var icon = $(o.icon).addClass('notify-icon').appendTo(this._notify);
		}

		// add title
		if (o.caption !== '' && o.caption !== undefined) {
			$("<div/>").addClass("notify-title").html(o.caption).appendTo(this._notify);
		}
		// add content
		if (o.content !== '' && o.content !== undefined) {
			$("<div/>").addClass("notify-text").html(o.content).appendTo(this._notify);
		}

		// add closer
		var closer = $("<span/>").addClass("notify-closer").appendTo(this._notify);
		closer.on('click', function(){
			that.close(0);
		});

		if (o.width !== 'auto') {this._notify.css('min-width', o.width);}
		if (o.height !== 'auto') {this._notify.css('min-height', o.height);}

		this._notify.hide().appendTo(this._container).fadeIn('slow');
		_notifies.push(this._notify);

		if (!o.keepOpen) {
			this.close(o.timeout);
		}

	},

	close: function(timeout) {
		var self = this;

		if(timeout === undefined) {
			return this._hide();
		}

		setTimeout(function() {
			self._hide();
		}, timeout);

		return this;
	},

	_hide: function() {
		var that = this;

		if(this._notify !== undefined) {
			this._notify.fadeOut('slow', function() {
				$(this).remove();
				_notifies.splice(_notifies.indexOf(that._notify), 1);
			});
			return this;
		} else {
			return false;
		}
	},

	closeAll: function() {
		_notifies.forEach(function(notEntry) {
			notEntry.hide('slow', function() {
				notEntry.remove();
				_notifies.splice(_notifies.indexOf(notEntry), 1);
			});
		});
		return this;
	}
};

$.Notify = function(options) {
	return Object.create(Notify).init(options);
};

$.Notify.show = function(message, title, icon) {
	return $.Notify({
		content: message,
		caption: title,
		icon: icon
	});
};


// Source: js/widgets/panel.js
$.widget("metro.panel", {

    version: "3.0.0",

    options: {
        onExpand: function(panel){},
        onCollapse: function(panel){}
    },

    _create: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('collapsible')) {element.addClass('collapsible');}

        if (element.hasClass("collapsible")) {
            var toggle = element.children(".heading");
            var content = element.children(".content");

            toggle.on("click", function(){
                var result;

                if (element.hasClass("collapsed")) {
                    content.slideDown('fast', function(){
                        element.removeClass('collapsed');
                        if (typeof o.onExpand === 'function') {
                            o.onExpand(element);
                        } else {
                            if (typeof window[o.onExpand] === 'function') {
                                window[o.onExpand](element);
                            } else {
                                result = eval("(function(){"+o.onExpand+"})");
                                result.call(element);
                            }
                        }
                    });
                } else {
                    content.slideUp('fast', function(){
                        element.addClass('collapsed');
                        if (typeof o.onCollapse === 'function') {
                            o.onCollapse(element);
                        } else {
                            if (typeof window[o.onCollapse] === 'function') {
                                window[o.onCollapse](element);
                            } else {
                                result = eval("(function(){"+o.onCollapse+"})");
                                result.call(element);
                            }
                        }
                    });
                }

            });
        }

        element.data('panel', this);

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/plugin.js
$.widget( "metro.widget" , {

    version: "1.0.0",

    options: {
        someValue: null
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        element.data('widget', this);

    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/popovers.js
$.widget("metro.popover", {

    version: "3.0.0",

    options: {
        popoverText: '',
        popoverTimeout: 3000,
        popoverPosition: 'top', //top, bottom, left, right
        popoverBackground: 'bg-cyan',
        popoverColor: 'fg-white',
        popoverMode: 'none', //click, hover,
        popoverShadow: true,
        onPopup: function(popover){}
    },

    popover: {},

    _create: function(){
        var element = this.element;

        this.createPopover();
        element.data('popover', this);

    },

    createPopover: function(){
        var that = this, element,
            o = this.options;

        element = this.element;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        var popover, content_container, marker_class;

        popover = $("<div/>").addClass("popover").appendTo('body').hide();
        $("<div/>").appendTo(popover);

        if (o.popoverShadow) {
            popover.addClass("popover-shadow");
        }

        if (o.popoverBackground) {
            if (o.popoverBackground[0] === '#') {
                popover.css('background-color', o.popoverBackground);
            } else {
                popover.addClass(o.popoverBackground);
            }
        }
        if (o.popoverColor) {
            if (o.popoverColor[0] === '#') {
                popover.css('color', o.popoverColor);
            } else {
                popover.addClass(o.popoverColor);
            }
        }

        switch (o.popoverPosition) {
            case 'left': marker_class = 'marker-on-right'; break;
            case 'right': marker_class = 'marker-on-left'; break;
            case 'bottom': marker_class = 'marker-on-top'; break;
            default: marker_class = 'marker-on-bottom';
        }

        popover.css({
            position: 'fixed'
        });

        popover.addClass(marker_class);

        this.popover = popover;

        this.setText(o.popoverText);

        element.on(o.popoverMode, function(e){
            if (!popover.data('visible')) {
                that.show();
            }
        });

        $(window).scroll(function(){
            //that.popover.hide();
            if (that.popover.data('visible')) {
                that.setPosition();
            }
        });

    },

    setPosition: function(){
        var o = this.options, popover = this.popover, element = this.element;

        if (o.popoverPosition === 'top') {
            popover.css({
                top: element.offset().top - $(window).scrollTop() - popover.outerHeight() - 10,
                left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
            });
        } else if (o.popoverPosition === 'bottom') {
            popover.css({
                top: element.offset().top - $(window).scrollTop() + element.outerHeight() + 10,
                left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
            });
        } else if (o.popoverPosition === 'right') {
            popover.css({
                top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                left: element.offset().left + element.outerWidth() - $(window).scrollLeft() + 10
            });
        } else if (o.popoverPosition === 'left') {
            popover.css({
                top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                left: element.offset().left - popover.outerWidth() - $(window).scrollLeft() - 10
            });
        }
        return this;
    },

    setText: function(text){
        this.popover.children('div').html(text);
    },

    show: function(){
        var o = this.options, popover = this.popover;

        this.setPosition();

        popover.fadeIn(function(){
            popover.data('visible', true);

            if (typeof o.onPopup === 'function') {
                o.onPopup(popover);
            } else {
                if (typeof window[o.onPopup] === 'function') {
                    window[o.onPopup](popover);
                } else {
                    var result = eval("(function(){"+o.onPopup+"})");
                    result.call(popover);
                }
            }

            setTimeout(function(){
                popover.fadeOut(
                    function(){popover.data('visible', false);}
                );
            }, o.popoverTimeout);
        });
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/preloaders.js
$.widget( "metro.preloader" , {

    version: "3.0.0",

    options: {
        type: 'ring',
        style: 'light'
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createStructure();

        element.data('preloader', this);

    },

    _createRing: function(){
        var that = this, element = this.element, o = this.options;
        var i, wrap, circle;

        for(i = 0; i < 5 ; i++) {
            wrap = $("<div/>").addClass('wrap').appendTo(element);
            circle = $("<div/>").addClass('circle').appendTo(wrap);
        }
    },

    _createMetro: function(){
        var that = this, element = this.element, o = this.options;
        var i, circle;

        for(i = 0; i < 5 ; i++) {
            circle = $("<div/>").addClass('circle').appendTo(element);
        }
    },

    _createSquare: function(){
        var that = this, element = this.element, o = this.options;
        var i, square;

        for(i = 0; i < 4 ; i++) {
            square = $("<div/>").addClass('square').appendTo(element);
        }
    },

    _createCycle: function(){
        var that = this, element = this.element, o = this.options;
        var i, cycle;

        //for(i = 0; i < 3 ; i++) {
            cycle = $("<div/>").addClass('cycle').appendTo(element);
        //}
    },

    _createStructure: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass("preloader-"+o.type);
        if (o.style !== 'light') {
            element.addClass(o.style + '-style');
        }

        element.html('');

        switch (o.type) {
            case 'ring': this._createRing(); break;
            case 'metro': this._createMetro(); break;
            case 'square': this._createSquare(); break;
            case 'cycle': this._createCycle(); break;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/presenter.js
$.widget( "metro.presenter" , {

    version: "3.0.0",

    options: {
        height: '200',
        width: '100%',
        effect: 'random',
        duration: 1000,
        timeout: 2000,
        sceneTimeout: 2000,
        easing: 'swing'
    },

    _acts: undefined,
    _currentAct: 0,
    _actDone: true,
    _interval: undefined,
    _effects: ['top', 'bottom', 'left', 'right'],
    _actor_positions: [],


    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createPresenter();
        this._showScene();

        element.data('presenter', this);

    },

    _createPresenter: function (){
        var that = this, element = this.element, o = this.options;
        var acts = element.find('.act');

        acts.hide();

        this._acts = acts;

        element.css({
            height: o.height,
            width: o.width
        });
    },

    _showScene: function(){
        var that = this, element = this.element, o = this.options;

        this._interval = setInterval(function(){
            if (that._actDone) {
                that._currentAct++;

                if (that._currentAct == that._acts.length) {
                    that._currentAct = 0;
                }

                //that._closeAct();
                that._showAct();
            }
        }, 500);
    },

    _closeAct: function(){
        var that = this, element = this.element, o = this.options;
        var index = this._currentAct;
        setTimeout(function(){
            if (that._acts[index] !== undefined) $(that._acts[index]).fadeOut(1000, function(){
                that._actDone = true;
            });
        }, o.sceneTimeout);
    },

    _showAct: function(){
        var that = this, element = this.element, o = this.options;

        var act = $(this._acts[this._currentAct]);
        var actors = act.find('.actor');
        var i;

        this._actDone = false;

        act.fadeIn(1000);

        actors.css({
            opacity: 0,
            position: 'absolute',
            display: 'none'
        });

        i = 0;
        $.each(actors, function(){
            var actor = $(this), pos = {top: actor.data('position').split(",")[0], left: actor.data('position').split(",")[1]};//that._actor_positions[$(that._acts[that._currentAct]).attr('id')][actor.attr('id')];
            var actor_effect, actor_duration, actor_timeout, actor_easing;

            actor_effect = actor.data('effect') !== undefined ? actor.data('effect') : o.effect;
            if (actor_effect === 'random') {
                actor_effect = that._effects[Math.floor(Math.random() * that._effects.length)];
            }
            actor_duration = actor.data('duration') !== undefined ? actor.data('duration') : o.duration;
            actor_timeout = actor.data('timeout') !== undefined ? actor.data('timeout') : o.timeout;
            actor_easing = actor.data('easing') !== undefined ? actor.data('easing') : o.easing;

            if (actor_effect === 'top') {
                setTimeout(function(){
                    actor.css({
                        top: - (element.height()),
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'bottom') {
                setTimeout(function(){
                    actor.css({
                        top: element.height(),
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'left') {
                setTimeout(function(){
                    actor.css({
                        left: - element.width(),
                        top: pos.top,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'right') {
                setTimeout(function(){
                    actor.css({
                        left: element.width(),
                        top: pos.top,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else { //fade
                setTimeout(function(){
                    actor.css({
                        top: pos.top,
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, 'swing', function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            }

            i++;
        });

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/progressbar.js
$.widget( "metro.progress" , {

    version: "3.0.0",

    options: {
        color: 'default',
        colors: false,
        value: 0,
        animate: false,
        onProgress: function(value){}
    },

    colorsDim: {},

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var bar = element.children('.bar:last-child');

        if (!element.hasClass('progress')) {
            element.addClass('progress');
        }

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (bar.length === 0) {
            bar = $('<div/>').addClass('bar').appendTo(element);
        }

        if (o.colors) {
            var p = 0;
            $.each(o.colors, function(c,v){
                that.colorsDim[c] = [p,v];
                p = v + 1;
            });
        }

        this.set(o.value);
        this.color(o.color);

        element.data('progress', this);

    },

    color: function(value){
        var element = this.element, o = this.options;
        var bar = element.children('.bar:last-child');
        var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

        if (isOk) {
            bar.css({
                'background-color': value
            });
        } else {
            bar.removeClass(function(index, css){
                return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
            }).addClass(value);
        }

        o.color = value;
    },

    set: function(value){
        if (value !== undefined) {
            var element = this.element, o = this.options, colors = this.colorsDim;
            var bar = element.children('.bar:last-child');
            var that = this, gradient = [];

            if (parseInt(value) < 0) {
                return;
            }


            if (o.colors) {

                $.each(colors, function (c, v) {
                    if (value >= v[0] && value <= v[1]) {
                        that.color(c);
                        return true;
                    }
                });
            }

            o.value = value;

            if (o.animate !== false) {
                var ani_speed = isNaN(o.animate) ? 500 : o.animate;
                bar.animate({
                    width: o.value + '%'
                }, ani_speed, function(){
                    if (typeof o.onProgress === 'function') {
                        o.onProgress(value);
                    } else {
                        if (typeof window[o.onProgress] === 'function') {
                            window[o.onProgress](value);
                        } else {
                            var result = eval("(function(){"+o.onProgress+"})");
                            result.call(value);
                        }
                    }
                });
            } else {
                bar.css({
                    width: o.value + '%'
                });
                if (typeof o.onProgress === 'function') {
                    o.onProgress(value);
                } else {
                    if (typeof window[o.onProgress] === 'function') {
                        window[o.onProgress](value);
                    } else {
                        var result = eval("(function(){"+o.onProgress+"})");
                        result.call(value);
                    }
                }
            }

        } else {
            return this.options.value;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/rating.js
$.widget( "metro.rating" , {

    version: "3.0.0",

    options: {
        stars: 5,
        value: 0,
        half: true,
        static: false,
        showScore: true,
        scoreTitle: "Current: ",
        size: 'default',
        colorRate: false,
        onRate: function(v, s, w){return true;},
        onRated: function(v, s, w){}
    },

    _value: 0,
    _values: [],

    _create: function () {
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._value = parseFloat(o.value);
        this._values[0] = Math.ceil(o.stars * 1 / 3);
        this._values[1] = Math.ceil(o.stars * 2 / 3);
        this._values[2] = o.stars;

        this._createRating();
        this._createEvents();
        this._setValue(this._value);
        this._setScore(this._value);

        element.data('rating', this);

    },

    _createRating: function(){
        var element = this.element, o = this.options;
        var i, star, stars, score;

        if (!element.hasClass('rating')) {element.addClass('rating');}
        switch (o.size) {
            case 'small': element.addClass('small'); break;
            case 'large': element.addClass('large'); break;
            default: break;
        }

        if (o.static) {
            element.addClass('static');
        }

        for (i = 0; i < o.stars; i++) {
            star = $("<span/>").addClass('star').appendTo(element).data('star-value', i+1);
        }

        if (o.showScore) {
            score = $("<span/>").addClass('score').appendTo(element);
        }

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var stars;

        stars = element.find('.star');

        stars.on('click', function(e){

            if (o.static || element.hasClass('static') || element.data('static')) {
                return false;
            }

            var result, value = $(this).data('star-value'),
                star = this,
                rating = that;

            if (typeof o.onRate === 'function') {
                if (!o.onRate(value, star, rating)) {return false;}
            } else {
                if (typeof window[o.onRate] === 'function') {
                    if (!window[o.onRate](value, star, rating)) {return false;}
                } else {
                    result = eval("(function(){"+o.onRate+"})");
                    if (!result.call(value, star, rating)) {return false;}
                }
            }

            if (typeof o.onRated === 'function') {
                o.onRated(value, star, rating);
            } else {
                if (typeof window[o.onRated] === 'function') {
                    window[o.onRated](value, star, rating);
                } else {
                    result = eval("(function(){"+o.onRated+"})");
                    result.call(value, star, rating);
                }
            }

            that._value = $(this).data('star-value');
            that._setValue();
            that._setScore();

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _setValue: function(){
        var stars, o = this.options, element = this.element;
        if (o.stars) {
            stars = element.find('.star').removeClass('on half');
            var index = Math.floor(this._value) - 1;
            var half = (this._value - Math.floor(this._value)) * 10 > 0;
            $(stars[index]).addClass('on');
            $(stars[index]).prevAll().addClass('on');
            if (half) {
                $(stars[index]).next().addClass('on half');
            }
        }

        if (o.colorRate) {
            element.removeClass('poor regular good');
            if (this._value <= this._values[0]) {element.addClass('poor');}
            else if (this._value > this._values[0] && this._value <= this._values[1]) {element.addClass('regular');}
            else if (this._value > this._values[1]) {element.addClass('good');}
        }
    },

    _setScore: function(){
        var value = this._value, element = this.element, o = this.options;

        if (value !== undefined) {
            element.find(".score").html(o.scoreTitle + value);
        }
    },

    value: function(value){
        if (value !== undefined) {
            this._value = value;
            this._setValue();
            this._setScore();
        } else {
            return this._value;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/select.js
$.widget( "metro.select" , {

    version: "3.0.0",

    options: {
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var func_options = [
            'templateResult',
            'templateSelection',
            'matcher',
            'initSelection',
            'query'
        ];

        $.each(element.data(), function(key, value){
            try {
                o[key] = $.parseJSON(value);
            } catch (e) {
                o[key] = value;
            }
        });

        func_options.map(function(func, index){
            if (o[func] !== undefined) {
                o[func] = window[o[func]];
            }
        });

        if (o.dropdownParent !== undefined) {
            o.dropdownParent = $(o.dropdownParent);
        }

        if($().select2) {
            try {
                element.find("select").select2(o);
            } catch (e) {

            }
        } else {
            console.log('You are trying to use support for Select2, but the plugin is not found!');
        }

        element.data('select', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/slider.js
$.widget("metro.slider", {

    version: "3.0.0",

    options: {
        position: 0,
        accuracy: 0,
        color: 'default',
        completeColor: 'default',
        markerColor: 'default',
        colors: false,
        showHint: false,
        permanentHint: false,
        hintPosition: 'top',
        vertical: false,
        min: 0,
        max: 100,
        animate: true,
        minValue: 0,
        maxValue: 100,
        currValue: 0,
        returnType: 'value',
        target: false,

        onChange: function(value, slider){},

        _slider : {
            vertical: false,
            offset: 0,
            length: 0,
            marker: 0,
            ppp: 0,
            start: 0,
            stop: 0
        }
    },

    _create: function(){
        var that = this,
            element = this.element;


        var o = this.options,
            s = o._slider;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        o.accuracy = o.accuracy < 0 ? 0 : o.accuracy;
        o.min = o.min < 0 ? 0 : o.min;
        o.min = o.min > o.max ? o.max : o.min;
        o.max = o.max > 100 ? 100 : o.max;
        o.max = o.max < o.min ? o.min : o.max;
        o.position = this._correctValue(element.data('position') > o.min ? (element.data('position') > o.max ? o.max : element.data('position')) : o.min);
        o.colors = o.colors ? o.colors.split(",") : false;

        s.vertical = o.vertical;
        if (o.vertical && !element.hasClass('vertical')) {
            element.addClass('vertical');
        }
        if (o.permanentHint && !element.hasClass('permanent-hint')) {
            element.addClass('permanent-hint');
        }

        if (!o.vertical && o.hintPosition === 'bottom') {
            element.addClass('hint-bottom');
        }

        if (o.vertical && o.hintPosition === 'left') {
            element.addClass('hint-left');
        }

        this._createSlider();
        this._initPoints();
        this._placeMarker(o.position);

        var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';

        element.children('.marker').on(event_down, function (e) {
            e.preventDefault();
            that._startMoveMarker(e);
        });

        element.on(event_down, function (e) {
            e.preventDefault();
            that._startMoveMarker(e);
        });

        element.data('slider', this);

    },

    _startMoveMarker: function(e){
        var element = this.element, o = this.options, that = this, hint = element.children('.slider-hint');
        var returnedValue;

        var event_move = isTouchDevice() ? 'touchmove' : 'mousemove';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseup mouseleave';

        $(element).on(event_move, function (event) {
            that._movingMarker(event);
            if (!element.hasClass('permanent-hint')) {
                hint.css('display', 'block');
            }
        });
        $(element).on(event_up, function () {
            $(element).off('mousemove');
            $(element).off('mouseup');
            element.data('value', o.position);
            element.trigger('changed', o.position);

            returnedValue = o.returnType === 'value' ? that._valueToRealValue(o.position) : o.position;

            if (!element.hasClass('permanent-hint')) {
                hint.css('display', 'none');
            }
        });

        this._initPoints();

        this._movingMarker(e);
    },

    _movingMarker: function (ev) {
        var element = this.element, o = this.options;
        var cursorPos,
            percents,
            valuePix,

            vertical = o._slider.vertical,
            sliderOffset = o._slider.offset,
            sliderStart = o._slider.start,
            sliderEnd = o._slider.stop,
            sliderLength = o._slider.length,
            markerSize = o._slider.marker;

        var event = !isTouchDevice() ? ev.originalEvent : ev.originalEvent.touches[0];

        //console.log(event);

        if (vertical) {
            cursorPos = event.pageY - sliderOffset;
        } else {
            cursorPos = event.pageX - sliderOffset;
        }

        if (cursorPos < sliderStart) {
            cursorPos = sliderStart;
        } else if (cursorPos > sliderEnd) {
            cursorPos = sliderEnd;
        }

        if (vertical) {
            valuePix = sliderLength - cursorPos - markerSize / 2;
        } else {
            valuePix = cursorPos - markerSize / 2;
        }

        percents = this._pixToPerc(valuePix);

        this._placeMarker(percents);

        o.currValue = this._valueToRealValue(percents);
        o.position = percents;

        var returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

        if (o.target) {
            $(o.target).val(returnedValue);
        }

        if (typeof o.onChange === 'function') {
            o.onChange(returnedValue, element);
        } else {
            if (typeof window[o.onChange] === 'function') {
                window[o.onChange](returnedValue, element);
            } else {
                var result = eval("(function(){"+o.onChange+"})");
                result.call(returnedValue, element);
            }
        }
    },

    _placeMarker: function (value) {
        var size, size2, o = this.options, colorParts, colorIndex = 0, colorDelta, element = this.element,
            marker = this.element.children('.marker'),
            complete = this.element.children('.complete'),
            hint = this.element.children('.slider-hint'), hintValue,
            oldPos = this._percToPix(o.position);

        colorParts = o.colors.length;
        colorDelta = o._slider.length / colorParts;

        if (o._slider.vertical) {
            var oldSize = this._percToPix(o.position) + o._slider.marker,
                oldSize2 = o._slider.length - oldSize;
            size = this._percToPix(value) + o._slider.marker;
            size2 = o._slider.length - size;
            this._animate(marker.css('top', oldSize2),{top: size2});
            this._animate(complete.css('height', oldSize),{height: size});

            if (colorParts) {
                colorIndex = Math.round(size / colorDelta)-1;
                complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
            }
            if (o.showHint) {
                hintValue = this._valueToRealValue(value);
                hint.html(hintValue).css('top', size2 - hint.height()/2 + (element.hasClass('large') ? 8 : 0));
            }
        } else {
            size = this._percToPix(value);
            this._animate(marker.css('left', oldPos),{left: size});
            this._animate(complete.css('width', oldPos),{width: size});
            if (colorParts) {
                colorIndex = Math.round(size / colorDelta)-1;
                complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
            }
            if (o.showHint) {
                hintValue = this._valueToRealValue(value);
                hint.html(hintValue).css({left: size - hint.width() / 2 + (element.hasClass('large') ? 6 : 0)});
            }
        }
    },

    _valueToRealValue: function(value){
        var o = this.options;
        var real_value;

        var percent_value = (o.maxValue - o.minValue) / 100;

        real_value = value * percent_value + o.minValue;

        return Math.round(real_value);
    },

    _animate: function (obj, val) {
        var o = this.options;

        if(o.animate) {
            obj.stop(true).animate(val);
        } else {
            obj.css(val);
        }
    },

    _pixToPerc: function (valuePix) {
        var valuePerc;
        valuePerc = valuePix * this.options._slider.ppp;
        return Math.round(this._correctValue(valuePerc));
    },

    _percToPix: function (value) {
        if (this.options._slider.ppp === 0) {
            return 0;
        }
        return Math.round(value / this.options._slider.ppp);
    },

    _correctValue: function (value) {
        var o = this.options;
        var accuracy = o.accuracy;
        var max = o.max;
        var min = o.min;
        if (accuracy === 0) {
            return value;
        }
        if (value === max) {
            return max;
        }
        if (value === min) {
            return min;
        }
        value = Math.floor(value / accuracy) * accuracy + Math.round(value % accuracy / accuracy) * accuracy;
        if (value > max) {
            return max;
        }
        if (value < min) {
            return min;
        }
        return value;
    },

    _initPoints: function(){
        var o = this.options, s = o._slider, element = this.element;

        if (s.vertical) {
            s.offset = element.offset().top;
            s.length = element.height();
            s.marker = element.children('.marker').height();
        } else {
            s.offset = element.offset().left;
            s.length = element.width();
            s.marker = element.children('.marker').width();
        }

        s.ppp = o.max / (s.length - s.marker);
        s.start = s.marker / 2;
        s.stop = s.length - s.marker / 2;
    },

    _createSlider: function(){
        var element = this.element,
            o = this.options,
            complete, marker, hint;

        element.html('');

        complete = $("<div/>").addClass("complete").appendTo(element);
        marker = $("<a/>").addClass("marker").appendTo(element);

        if (o.showHint) {
            hint = $("<span/>").addClass("slider-hint").appendTo(element);
        }

        if (o.color !== 'default') {
            if (o.color.isColor()) {
                element.css('background-color', o.color);
            } else {
                element.addClass(o.color);
            }
        }
        if (o.completeColor !== 'default') {
            if (o.completeColor.isColor()) {
                complete.css('background-color', o.completeColor);
            } else {
                complete.addClass(o.completeColor);
            }
        }
        if (o.markerColor !== 'default') {
            if (o.markerColor.isColor()) {
                marker.css('background-color', o.markerColor);
            } else {
                marker.addClass(o.markerColor);
            }
        }
    },

    value: function (value) {
        var element = this.element, o = this.options, returnedValue;

        if (typeof value !== 'undefined') {

            value = value > o.max ? o.max : value;
            value = value < o.min ? o.min : value;

            this._placeMarker(parseInt(value));
            o.position = parseInt(value);

            returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

            if (o.target) {
                $(o.target).val(returnedValue);
            }

            if (typeof o.onChange === 'function') {
                o.onChange(returnedValue, element);
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](returnedValue, element);
                } else {
                    var result = eval("(function(){"+o.onChange+"})");
                    result.call(returnedValue, element);
                }
            }

            return this;
        } else {
            returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;
            return returnedValue;
        }
    },

    _destroy: function(){},

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/stepper.js
$.widget("metro.stepper", {

    version: "3.0.0",

    options: {
        steps: 3,
        start: 1,
        type: 'default',
        clickable: true,
        onStep: function(index, step){},
        onStepClick: function(index, step){}
    },

    _create: function(){
        var element = this.element, o = this.options, element_id = element.attr('id');

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('stepper')) {element.addClass('stepper');}
        if (element_id === undefined) {
            element_id = window.uniqueId(this.widgetName+'_');
            element.attr('id', element_id);
        }

        this._createStepper();
        if (o.clickable) {this._createEvents();}
        this._positioningSteps();
        this._stepTo(o.start);

        element.data('stepper', this);

    },

    _createEvents: function(){
        var that = this, element = this.element, o= this.options;
        element.on('click', 'li', function(e){
            var step = $(this).data('step');


            if (typeof o.onStepClick === 'function') {
                o.onStepClick(step - 1, step);
            } else {
                if (typeof window[o.onStepClick] === 'function') {
                    window[o.onStepClick](step - 1, step);
                } else {
                    var result = eval("(function(){"+o.onStepClick+"})");
                    result.call(step - 1, step);
                }
            }

            element.trigger("stepclick", step);
        });
    },

    _createStepper: function(){
        var element = this.element, o= this.options;
        var i, ul, li;

        ul = $("<ul/>");

        switch(o.type) {
            case 'diamond': element.addClass('diamond'); break;
            case 'cycle': element.addClass('cycle'); break;
        }

        for(i=0;i< o.steps;i++) {
            li = $("<li/>").data('step', i + 1).appendTo(ul);
        }
        ul.appendTo(element);
    },

    _positioningSteps: function(){
        var that = this, element = this.element, o = this.options,
            steps = element.find("li"),
            element_width = element.width(),
            steps_length = steps.length-1,
            step_width = $(steps[0]).width();

        $.each(steps, function(i, step){
            var left = i === 0 ? 0 : (element_width - step_width)/steps_length * i;
            console.log(element_width);
            $(step).animate({
                left: left
            });
        });
    },

    _stepTo: function(step){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        steps.removeClass('current').removeClass('complete');

        $.each(steps, function(i, s){
            if (i < step - 1) {$(s).addClass('complete');}
            if (i === step - 1) {
                $(s).addClass('current') ;

                if (typeof o.onStep === 'function') {
                    o.onStep(i+1, s);
                } else {
                    if (typeof window[o.onStep] === 'function') {
                        window[o.onStep](i+1, s);
                    } else {
                        var result = eval("(function(){"+o.onStep+"})");
                        result.call(i+1, s);
                    }
                }
            }
        });
    },

    stepTo: function(step){
        this._stepTo(step);
    },

    first: function(){
        var o = this.options;
        o.start = 1;
        this._stepTo(o.start);
    },

    last: function(){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        o.start = steps.length;
        this._stepTo(o.start);
    },

    next: function(){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        if (o.start + 1 > steps.length) {return;}

        o.start++;
        this._stepTo(o.start);
    },

    prior: function(){
        var o = this.options;

        if (o.start - 1 === 0) {return;}

        o.start--;
        this._stepTo(o.start);
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});


// Source: js/widgets/streamer.js
$.widget("metro.streamer", {

    version: "3.0.0",

    options: {
        scrollBar: false,
        meterStart: 9,
        meterStop: 19,
        meterInterval: 20,
        slideToTime: "default",
        slideSleep: 1000,
        slideSpeed: 1000,
        onClick: function(event){}
    },

    _create: function(){
        var that = this, element = this.element, o = this.options,
            streams = element.find(".stream"),
            events = element.find(".event"),
            events_container = element.find(".events"),
            events_area = element.find(".events-area"),
            groups = element.find(".event-group"),
            event_streams = element.find(".event-stream");


        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        element.data('streamSelect', -1);

        var meter = $("<ul/>").addClass("meter");
        var i, j, m, start = o.meterStart, stop = o.meterStop, interval = o.meterInterval;

        var _intervals = [];
        for (i = start; i<stop; i++) {
            for (j = 0; j < 60; j+=interval) {
                m = (i<10?"0"+i:i)+":"+(j<10?"0"+j:j);
                $("<li/>").addClass("js-interval-"+ m.replace(":", "-")).html("<em>"+m+"</em>").appendTo(meter);
                _intervals.push(m);
            }
        }
        element.data("intervals", _intervals);
        meter.insertBefore(element.find(".events-grid"));

        //console.log(element.data("intervals"));

        // Re-Calc all event-stream width and set background for time
        element.find(".event-stream").each(function(i, s){
            var event_stream_width = 0;
            var events = $(s).find(".event");

            events.each(function(i, el){
                event_stream_width += $(el).outerWidth() + parseInt($(el).css('margin-left'));
            });

            $(s).css({
                width: (event_stream_width + ( (events.length-1) * 2 ) + 1)
            });

            $(s).find(".time").css("background-color", $(streams[i]).css('background-color'));
        });

        // Set scrollbar
        events_container.css({
            'overflow-x': (o.scrollBar ? 'scroll' : 'hidden')
        });

        // Set streamer height
        element.css({
            height: element.find(".streams").outerHeight() + (o.scrollBar ? 20 : 0)
        });

        // Re-Calc events-area width
        var events_area_width = 0;
        groups.each(function(i, el){
            events_area_width += $(el).outerWidth();
        });
        events_area_width += ( (groups.length-1) * 2 ) + 10;
        events_area.css('width', events_area_width);

        events.each(function(i, el){
            addTouchEvents(el);
        });

        element.mousewheel(function(event, delta){
            var scroll_value = delta * 50;
            events_container.scrollLeft(events_container.scrollLeft() - scroll_value);
            return false;
        });

        streams.each(function(i, s){
            $(s).mousedown(function(e){
                if (element.data('streamSelect') == i) {
                    events.removeClass('event-disable');
                    element.data('streamSelect', -1);
                } else {
                    element.data('streamSelect', i);
                    events.addClass('event-disable');
                    $(event_streams[i]).find(".event").removeClass("event-disable");
                }
            });
        });

        this._createEvents();

        this.slideToTime(o.slideToTime, o.slideSleep, o.slideSpeed);

        element.data('streamer', this);
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var events = element.find(".event");

        events.on('click', function(e){

            var event = $(this);

            if (e.ctrlKey) {
                $(this).toggleClass("selected");
            }

            if (typeof o.onClick === 'function') {
                o.onClick(event);
            } else {
                if (typeof window[o.onClick] === 'function') {
                    window[o.onClick](event);
                } else {
                    var result = eval("(function(){"+o.onClick+"})");
                    result.call(event);
                }
            }

            e.preventDefault();
        });

        element.find(".js-go-previous-time").on('click', function(e){
            var next_index = element.data("intervals").indexOf(element.data("current-time"));
            if (next_index == 0) {
                return;
            }
            next_index--;
            var new_time = element.data("intervals")[next_index];
            that.slideToTime(new_time, 0, o.slideSpeed);
        });

        element.find(".js-go-next-time").on('click', function(e){
            var next_index = element.data("intervals").indexOf(element.data("current-time"));
            if (next_index == element.data("intervals").length - 1) {
                return;
            }
            next_index++;
            var new_time = element.data("intervals")[next_index];
            that.slideToTime(new_time, 0, o.slideSpeed);
        });

        element.find(".js-show-all-streams").on("click", function(e){
            element.find(".event").removeClass("event-disable");
            element.data('streamSelect', -1);
            e.preventDefault();
        });


        element.find(".js-schedule-mode").on("click", function(e){
            $(this).toggleClass("active");
            element.data("schedule-mode", $(this).hasClass("inverse"));
            e.preventDefault();
        });
    },

    slideToTime: function(time, sleep, speed){
        var that = this, element = this.element,
            interval, _time;

        if (time === 'default') {
            interval = element.find(".meter li")[0];
            time = interval.className.replace("js-interval-", "").replace("-", ":");
        } else {
            _time = time.split(":");

            if (_time[0].length === 1) {
                time = '0' + time;
            }

        }

        interval = element.find(".meter li.js-interval-"+time.replace(":", "-"))[0];

        setTimeout(function(){
            element.find(".events").animate({
                scrollLeft:  (interval.offsetLeft - $('.streams').width())
            }, speed, function(){
                that._afterSlide();
            });
        }, sleep);

        element.data("current-time", time);
    },

    _afterSlide: function(){

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/tabcontrol.js
$.widget( "metro.tabcontrol" , {

    version: "3.0.0",

    options: {
        openTarget: false,
        saveState: false,
        onTabClick: function(tab){return true;},
        onTabChange: function(tab){},
        _current: {tab: false, frame: false}
    },


    _create: function () {
        var that = this, element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');
        var tab, target, frame;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {

            var stored_target = window.localStorage.getItem(element.attr('id')+"-stored-tab");
            if (stored_target && stored_target !== 'undefined') {
                tab = element.find("a[href='"+stored_target+"']");
                if (tab) {
                    target = tab.attr('href');
                    frame = target && target.isUrl() ? false : $(target);
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            }
        }

        if (!o._current.tab && o.openTarget !== false) {

            tab = element.find("a[href='"+ o.openTarget+"']");
            if (tab) {
                target = tab.attr('href');
                frame = target && target.isUrl() ? false : $(target);
                o._current.tab = tab;
                o._current.frame = frame;
            }
        }

        if (!o._current.tab) {

            $.each(tabs, function (i, v) {
                var tab = $(v), target = tab.attr('href'), frame = target.isUrl() ? false : $(target);
                if (tab.parent().hasClass('active') && !tab.parent().hasClass('disabled') && frame !== false) {
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            });
        }

        if (!o._current.tab) {

            for(var i = 0; i < tabs.length; i++) {
                if (!$(tabs[i]).attr('href').isUrl() && !$(tabs[i]).parent().hasClass('disabled')) {
                    o._current.tab = $(tabs[i]);
                    o._current.frame = $($(tabs[i]).attr('href'));
                    break;
                }
            }
        }

        this._createEvents();
        this._openTab();

        //this._hideTabs();
        //
        //$(window).on('resize', function(){
        //    that._hideTabs();
        //});

        element.data('tabcontrol', this);

    },

    _hideTabs: function(){
        var element = this.element;
        var w = element.outerWidth();
        var _tabs = element.children('.tabs').find('li:not(.non-visible-tabs)');
        var _nvt = element.children('.tabs').find('.non-visible-tabs').children('.d-menu');

        $.each(_tabs, function(){
            var $tab = $(this), tab = this;
            if (tab.offsetLeft + tab.offsetWidth + 30 > w) {
                var new_tab = $tab.clone(true);
                new_tab.appendTo(_nvt);
                $tab.remove();
            }
        });
    },

    _openTab: function(){
        var element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');

        tabs.parent().removeClass('active');
        frames.hide();

        o._current.tab.parent().addClass('active');
        o._current.frame.show();

        if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {
            window.localStorage.setItem(element.attr('id')+"-stored-tab", o._current.tab.attr('href'));
        }
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');

        element.on('click', '.tabs > li > a', function(e){
            var result;
            var tab = $(this), target = tab.attr('href'), frame = $(target);

            if (tab.parent().hasClass('disabled')) {return false;}

            if (typeof o.onTabClick === 'function') {
                if (!o.onTabClick(tab)) {return false;}
            } else {
                if (typeof window[o.onTabClick] === 'function') {
                    if (!window[o.onTabClick](tab)) {return false;}
                } else {
                    result = eval("(function(){"+o.onTabClick+"})");
                    if (!result.call(tab)) {return false;}
                }
            }

            if (target.isUrl()) {
                window.location.href = target;
                return true;
            }

            o._current.tab = tab;
            o._current.frame = frame;

            that._openTab();

            if (typeof o.onTabChange === 'function') {
                o.onTabChange(tab);
            } else {
                if (typeof window[o.onTabChange] === 'function') {
                    window[o.onTabChange](tab);
                } else {
                    result = eval("(function(){"+o.onTabChange+"})");
                    result.call(tab);
                }
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    hideTab: function(tab){

    },

    showTab: function(tab){

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/tile.js
$.widget( "metro.tile" , {

    version: "3.0.0",

    options: {
        effect: 'slideLeft',
        period: 4000,
        duration: 700,
        easing: 'doubleSqrt',
        onClick: function(tile){}
    },

    _frames: {},
    _currentIndex: 0,
    _interval: 0,
    _outPosition: 0,
    _size: {},

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createTransformTile();
        this._createLiveTile();
        this._createEvents();

        element.data('tile', this);

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var event = isTouchDevice() ? 'touchstart' : 'click';

        element.on(event, function(e){
            if (element[0].tagName === "A") {

            } else {
                if (typeof o.onClick === 'function') {
                    o.onClick(element);
                } else {
                    if (typeof window[o.onClick] === 'function') {
                        window[o.onClick](element);
                    } else {
                        var result = eval("(function(){"+o.onClick+"})");
                        result.call(element);
                    }
                }
            }
        });
    },

    _createLiveTile: function(){
        var that = this, element = this.element, o = this.options;
        var event_down = isTouchDevice() ? 'touchstart' : 'mouseenter';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseleave';

        this._frames = element.find(".live-slide");
        if (this._frames.length <= 1) {return false;}

        $.easing.doubleSqrt = function(t) {return Math.sqrt(Math.sqrt(t));};

        this._size = {
            'width': element.width(),
            'height': element.height()
        };

        element.on(event_down, function(){
            that.stop();
        });

        element.on(event_up, function(){
            that.start();
        });

        this.start();
    },

    start: function(){
        var that = this;
        this._interval = setInterval(function(){
            that._animate();
        }, this.options.period);
    },

    stop: function(){
        clearInterval(this._interval);
    },

    _animate: function(){
        var currentFrame = this._frames[this._currentIndex], nextFrame;
        this._currentIndex += 1;
        if (this._currentIndex >= this._frames.length) {this._currentIndex = 0;}
        nextFrame = this._frames[this._currentIndex];

        switch (this.options.effect) {
            case 'slideLeft': this._effectSlideLeft(currentFrame, nextFrame); break;
            case 'slideRight': this._effectSlideRight(currentFrame, nextFrame); break;
            case 'slideDown': this._effectSlideDown(currentFrame, nextFrame); break;
            case 'slideUpDown': this._effectSlideUpDown(currentFrame, nextFrame); break;
            case 'slideLeftRight': this._effectSlideLeftRight(currentFrame, nextFrame); break;
            default: this._effectSlideUp(currentFrame, nextFrame);
        }
    },

    _effectSlideLeftRight: function(currentFrame, nextFrame){
        if (this._currentIndex % 2 === 0) {
            this._effectSlideLeft(currentFrame, nextFrame);
        } else {
            this._effectSlideRight(currentFrame, nextFrame);
        }
    },

    _effectSlideUpDown: function(currentFrame, nextFrame){
        if (this._currentIndex % 2 === 0) {
            this._effectSlideUp(currentFrame, nextFrame);
        } else {
            this._effectSlideDown(currentFrame, nextFrame);
        }
    },

    _effectSlideUp: function(currentFrame, nextFrame){
        var _out = this._size.height;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({top: -_out}, options);
        $(nextFrame)
            .css({top: _out})
            .show()
            .animate({top: 0}, options);
    },

    _effectSlideDown: function(currentFrame, nextFrame){
        var _out = this._size.height;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({top: _out}, options);
        $(nextFrame)
            .css({top: -_out})
            .show()
            .animate({top: 0}, options);
    },

    _effectSlideLeft: function(currentFrame, nextFrame){
        var _out = this._size.width;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({left: _out * -1}, options);
        $(nextFrame)
            .css({left: _out})
            .show()
            .animate({left: 0}, options);
    },

    _effectSlideRight: function(currentFrame, nextFrame){
        var _out = this._size.width;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({left: _out}, options);
        $(nextFrame)
            .css({left: -_out})
            .show()
            .animate({left: 0}, options);
    },

    _createTransformTile: function(){
        var that = this, element = this.element, o = this.options;
        var dim = {w: element.width(), h: element.height()};
        var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseup';
        var event_leave = isTouchDevice() ? 'touchend' : 'mouseleave';


        element.on(event_down, function(e){
            var X = e.pageX - $(this).offset().left, Y = e.pageY - $(this).offset().top;
            var transform = 'top';

            if (X < dim.w * 1/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                transform = 'left';
            } else if (X > dim.w * 2/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                transform = 'right';
            } else if (X > dim.w*1/3 && X<dim.w*2/3 && Y > dim.h/2) {
                transform = 'bottom';
            }

            $(this).addClass("tile-transform-"+transform);

            //console.log(transform);

            if (element[0].tagName === 'A' && element.attr('href')) {
                setTimeout(function(){
                    document.location.href = element.attr('href');
                }, 500);
            }
        });

        element.on(event_up, function(){
            $(this)
                .removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
        element.on(event_leave, function(){
            $(this)
                .removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/treeview.js
$.widget( "metro.treeview" , {

    version: "3.0.0",

    options: {
        doubleClick: true,
        onClick: function(leaf, node, pnode, tree){},
        onInputClick: function(leaf, node, pnode, tree){},
        onExpand: function(leaf, node, pnode, tree){},
        onCollapse: function(leaf, node, pnode, tree){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._initTree();
        this._createEvents();

        element.data('treeview', this);
    },


    _createCheckbox: function(leaf, parent){
        var input, checkbox, check;

        input = $("<label/>").addClass("input-control checkbox small-check").insertBefore(leaf);
        checkbox = $("<input/>").attr('type', 'checkbox').appendTo(input);
        check = $("<span/>").addClass('check').appendTo(input);
        if (parent.data('name') !== undefined) {
            checkbox.attr('name', parent.data('name'));
        }
        if (parent.data('id') !== undefined) {
            checkbox.attr('id', parent.data('id'));
        }
        if (parent.data('checked') !== undefined) {
            checkbox.prop('checked', parent.data('checked'));
        }
        if (parent.data('readonly') !== undefined) {
            checkbox.prop('disabled', parent.data('readonly'));
        }
        if (parent.data('disabled') !== undefined) {
            checkbox.prop('disabled', parent.data('disabled'));
            if (parent.data('disabled') === true) {
                parent.addClass('disabled');
            }
        }
        if (parent.data('value') !==  undefined) {
            checkbox.val(parent.data('value'));
        }
    },

    _createRadio: function(leaf, parent){
        var input, checkbox, check;

        input = $("<label/>").addClass("input-control radio small-check").insertBefore(leaf);
        checkbox = $("<input/>").attr('type', 'radio').appendTo(input);
        check = $("<span/>").addClass('check').appendTo(input);
        if (parent.data('name') !== undefined) {
            checkbox.attr('name', parent.data('name'));
        }
        if (parent.data('id') !== undefined) {
            checkbox.attr('id', parent.data('id'));
        }
        if (parent.data('checked') !== undefined) {
            checkbox.prop('checked', parent.data('checked'));
        }
        if (parent.data('readonly') !== undefined) {
            checkbox.prop('disabled', parent.data('readonly'));
        }
        if (parent.data('disabled') !== undefined) {
            checkbox.prop('disabled', parent.data('disabled'));
            if (parent.data('disabled') === true) {
                parent.addClass('disabled');
            }
        }
        if (parent.data('value') !==  undefined) {
            checkbox.val(parent.data('value'));
        }
    },

    _initTree: function(){
        var that = this, element = this.element, o = this.options;
        var leafs = element.find('.leaf');
        $.each(leafs, function(){
            var leaf = $(this), parent = leaf.parent('li'), ul = leaf.siblings('ul'), node = $(leaf.parents('.node')[0]);
            //var input, checkbox, check;

            if (parent.data('mode') === 'checkbox') {
                that._createCheckbox(leaf, parent);
            }

            if (parent.data('mode') === 'radio') {
                that._createRadio(leaf, parent);
            }

            if (ul.length > 0) {
                if (!parent.hasClass('node')) {
                    parent.addClass('node');
                }
            }
            if (parent.hasClass('collapsed')) {
                ul.hide();
            }
        });
    },

    _renderChecks: function(check){
        var element = this.element, that = this, o = this.options;
        var state = check.is(":checked");
        var parent = $(check.parent().parent());
        var children_checks = parent.children('ul').find('[type="checkbox"]');

        children_checks.prop('checked', state).removeClass('indeterminate');

        $.each(element.find('.node[data-mode=checkbox]').reverse(), function(){
            var node = $(this),
                ch = node.children('.input-control').find('[type="checkbox"]'),
                children_all = node.children('ul').find('[type="checkbox"]'),
                children_checked = node.children('ul').find('[type="checkbox"]:checked');

            ch.removeClass('indeterminate');
            if (children_checked.length === 0) {
                ch.prop("checked", false);
                ch.removeClass('indeterminate');
            } else
            if (children_checked.length > 0 && children_all.length > children_checked.length) {
                ch.prop('checked', true);
                ch.addClass('indeterminate');
            }
        });

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        element.on('change', 'input:checkbox', function(){
            that._renderChecks($(this));
        });

        element.on('click', 'input', function(){
            var leaf = $(this),
                node = $(leaf.parents('.node')[0]),
                parent = leaf.parent('li'),
                check = leaf.siblings('.input-control').find('input:checkbox'),
                radio = leaf.siblings('.input-control').find('input:radio'),
                new_check_state,
                check_disabled;

            if (check.length > 0) {
                new_check_state = !check.is(":checked");
                check_disabled = check.is(":disabled");
                if (!check_disabled) {check.prop('checked', new_check_state);}
                that._renderChecks(check);
            }
            if (radio.length > 0) {
                check_disabled = radio.is(":disabled");
                if (!check_disabled) {radio.prop('checked', true);}
            }

            if (typeof o.onInputClick === 'function') {
                o.onInputClick(leaf, parent, node, that);
            } else {
                if (typeof window[o.onInputClick] === 'function') {
                    window[o.onInputClick](leaf, parent, node, that);
                } else {
                    var result = eval("(function(){"+o.onInputClick+"})");
                    result.call(leaf, parent, node, that);
                }
            }
        });

        element.on('click', '.leaf', function(){
            var leaf = $(this),
                node = $(leaf.parents('.node')[0]),
                parent = leaf.parent('li');

            element.find('.leaf').parent('li').removeClass('active');
            parent.addClass('active');

            if (typeof o.onClick === 'function') {
                o.onClick(leaf, parent, node, that);
            } else {
                if (typeof window[o.onClick] === 'function') {
                    window[o.onClick](leaf, parent, node, that);
                } else {
                    var result = eval("(function(){"+o.onClick+"})");
                    result.call(leaf, parent, node, that);
                }
            }
        });

        if (o.doubleClick) {
            element.on('dblclick', '.leaf', function (e) {
                var leaf = $(this), parent = leaf.parent('li'), node = $(leaf.parents('.node')[0]);
                var result;

                if (parent.hasClass("keep-open")) {
                    return false;
                }

                parent.toggleClass('collapsed');
                if (!parent.hasClass('collapsed')) {
                    parent.children('ul').fadeIn('fast');

                    if (typeof o.onExpand === 'function') {
                        o.onExpand(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onExpand] === 'function') {
                            window[o.onExpand](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){"+o.onExpand+"})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                } else {
                    parent.children('ul').fadeOut('fast');

                    if (typeof o.onCollapse === 'function') {
                        o.onCollapse(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onCollapse] === 'function') {
                            window[o.onCollapse](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){"+o.onCollapse+"})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            });
        }

        element.on('click', '.node-toggle', function(e){
            var leaf = $(this).siblings('.leaf'), parent = $(this).parent('li'), node = $(leaf.parents('.node')[0]);
            var result;

            if (parent.hasClass("keep-open")) {return false;}

            parent.toggleClass('collapsed');
            if (!parent.hasClass('collapsed')) {
                parent.children('ul').fadeIn('fast');
                if (typeof o.onExpand === 'function') {
                    o.onExpand(parent, leaf, node, that);
                } else {
                    if (typeof window[o.onExpand] === 'function') {
                        window[o.onExpand](parent, leaf, node, that);
                    } else {
                        result = eval("(function(){"+o.onExpand+"})");
                        result.call(parent, leaf, node, that);
                    }
                }
            } else {
                parent.children('ul').fadeOut('fast');
                if (typeof o.onCollapse === 'function') {
                    o.onCollapse(parent, leaf, node, that);
                } else {
                    if (typeof window[o.onCollapse] === 'function') {
                        window[o.onCollapse](parent, leaf, node, that);
                    } else {
                        result = eval("(function(){"+o.onCollapse+"})");
                        result.call(parent, leaf, node, that);
                    }
                }
            }
            e.stopPropagation();
            e.preventDefault();
        });
    },

    addLeaf: function(parent, name, data){
        var element = this.element;
        var leaf, li, ul;

        if (parent) {
            if (parent[0].tagName === "LI") {parent.addClass('node');}
            if (parent.children('.node-toggle').length === 0) {
                $("<span/>").addClass('node-toggle').appendTo(parent);
            }
        }

        ul = parent ? $(parent).children('ul') : element.children('ul');

        if (ul.length === 0) {
            ul = $("<ul/>").appendTo(parent ? parent : element);
        }

        li = $("<li/>").appendTo( ul );

        if (data !== undefined) {
            if (data.tagName !== undefined) {
                leaf = $("<"+data.tagName+"/>").addClass("leaf").appendTo(li);
            } else {
                leaf = $("<span/>").addClass("leaf").appendTo(li);
            }
        } else {
            leaf = $("<span/>").addClass("leaf").appendTo(li);
        }

        leaf.html(name);

        if (data !== undefined) {
            $.each(data, function(key, value){
                li.attr("data-"+key, value);
            });
            if (data.mode !== undefined) {
                switch (data.mode) {
                    case 'checkbox' : this._createCheckbox(leaf, li); break;
                    case 'radio' : this._createRadio(leaf, li); break;
                }
            }
        }

        return this;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/validator.js
$.widget( "metro.validator" , {

    version: "1.0.0",

    options: {
        showErrorState: true,
        showErrorHint: true,
        showRequiredState: true,
        showSuccessState: true,
        hintSize: 0,
        hintBackground: '#FFFCC0',
        hintColor: '#000000',
        hideError: 2000,
        hideHint: 5000,
        hintEasing: 'easeInQuad',
        hintEasingTime: 400,
        hintMode: 'hint', // hint, line
        hintPosition: 'right',
        focusInput: true,
        onBeforeSubmit: function(form, result){return true;},
        onErrorInput: function(input){},
        onSubmit: function(form){return true;}
    },

    _scroll: 0,

    funcs: {
        required: function(val){
            return val.trim() !== "";
        },
        minlength: function(val, len){
            if (len == undefined || isNaN(len) || len <= 0) {
                return false;
            }
            return val.trim().length >= len;
        },
        maxlength: function(val, len){
            if (len == undefined || isNaN(len) || len <= 0) {
                return false;
            }
            return val.trim().length <= len;
        },
        min: function(val, min_value){
            if (min_value == undefined || isNaN(min_value)) {
                return false;
            }
            if (val.trim() === "") {
                return false;
            }
            if (isNaN(val)) {
                return false;
            }
            return val >= min_value;
        },
        max: function(val, max_value){
            if (max_value == undefined || isNaN(max_value)) {
                return false;
            }
            if (val.trim() === "") {
                return false;
            }
            if (isNaN(val)) {
                return false;
            }
            return val <= max_value;
        },
        email: function(val){
            return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(val);
        },
        url: function(val){
            return /^(?:[a-z]+:)?\/\//i.test(val);
        },
        date: function(val){
            return !!(new Date(val) !== "Invalid Date" && !isNaN(new Date(val)));
        },
        number: function(val){
            return (val - 0) == val && (''+val).trim().length > 0;
        },
        digits: function(val){
            return /^\d+$/.test(val);
        },
        hexcolor: function(val){
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
        },
        pattern: function(val, pat){
            if (pat == undefined) {
                return false;
            }
            var reg = new RegExp(pat);
            return reg.test(val);
        }
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.hintMode !== 'line') {
            o.hintMode = 'hint2';
        }

        this._scroll = $(window).scrollTop();

        this._createValidator();

        element.data('validator', this);

    },

    _createValidator: function(){
        var that = this, element = this.element, o = this.options;
        var inputs = element.find("[data-validate-func]");

        element.attr('novalidate', 'novalidate');

        if (o.showRequiredState) {
            $.each(inputs, function(){
                var input = $(this);
                if (input.parent().hasClass('input-control')) {
                    input.parent().addClass('required');
                } else {
                    input.addClass('required');
                }
            });
        }

        inputs.on('focus', function(){
        });

        //console.log(this._scroll);

        $(window).scroll(function(e){
            var st = $(this).scrollTop();
            var delta = isNaN(st - this._scroll) ? 0 : st - this._scroll;
            $(".validator-hint.hint2").css({
                top: '-='+delta
            });
            this._scroll = st;
        });

        if (element[0].onsubmit) {
            this._onsubmit = element[0].onsubmit;
            element[0].onsubmit = null;
        } else {
            this._onsubmit = null;
        }

        element[0].onsubmit = function(){
            return that._submit();
        };
    },

    _submit: function(){
        var that = this, element = this.element, o = this.options;
        var inputs = element.find("[data-validate-func]");
        var submit = element.find(":submit").attr('disabled', 'disabled').addClass('disabled');

        var result = 0;
        $('.validator-hint').hide();
        inputs.removeClass('error success');
        $.each(inputs, function(i, v){
            var input = $(v);
            if (input.parent().hasClass('input-control')) {
                input.parent().removeClass('error success');
            }
        });

        $.each(inputs, function(i, v){
            var input = $(v);
            var func = input.data('validateFunc'), arg = input.data('validateArg');
            var this_result = that.funcs[func](input.val(), arg);

            if (!this_result) {
                if (typeof o.onErrorInput === 'function') {
                    o.onErrorInput(input);
                } else {
                    if (typeof window[o.onErrorInput] === 'function') {
                        window[o.onErrorInput](input);
                    } else {
                        result = eval("(function(){"+o.onErrorInput+"})");
                        result.call(input);
                    }
                }
            }

            if (!this_result && o.showErrorState) {
                that._showError(input);
            }
            if (!this_result && o.showErrorHint) {
                setTimeout(function(){
                    that._showErrorHint(input);
                }, i*100);

            }
            if (this_result && o.showSuccessState) {
                that._showSuccess(input);
            }
            if (!this_result && i == 0 && o.focusInput) {
                input.focus();
            }
            result += !this_result ? 1 : 0;
        });

        if (typeof o.onBeforeSubmit === 'function') {
            result += !o.onBeforeSubmit(element, result) ? 1 : 0;
        } else {
            if (typeof window[o.onBeforeSubmit] === 'function') {
                result += window[o.onBeforeSubmit](element, result) ? 1 : 0;
            } else {
                var f0 = eval("(function(){"+o.onBeforeSubmit+"})");
                result += f0.call(element, result) ? 1 : 0;
            }
        }

        if (result !== 0) {
            submit.removeAttr('disabled').removeClass('disabled');
            return false;
        }

        if (typeof o.onSubmit === 'function') {
            result = o.onSubmit(element[0]);
        } else {
            if (typeof window[o.onSubmit] === 'function') {
                result = window[o.onSubmit](element[0]);
            } else {
                var f = eval("(function(){"+o.onSubmit+"})");
                result = f.call(element[0]);
            }
        }

        submit.removeAttr('disabled').removeClass('disabled');

        return result;
    },

    _showSuccess: function(input){
        if (input.parent().hasClass('input-control')) {
            input.parent().addClass('success');
        } else {
            input.addClass('success');
        }
    },

    _showError: function(input){
        var o = this.options;

        if (input.parent().hasClass('input-control')) {
            input.parent().addClass('error');
        } else {
            input.addClass('error');
        }

        if (o.hideError && o.hideError > 0) {
            setTimeout(function(){
                input.parent().removeClass('error');
            }, o.hideError);
        }
    },

    _showErrorHint: function(input){
        var o = this.options,
            msg = input.data('validateHint'),
            pos = input.data('validateHintPosition') || o.hintPosition,
            mode = input.data('validateHintMode') || o.hintMode,
            background = input.data('validateHintBackground') || o.hintBackground,
            color = input.data('validateHintColor') || o.hintColor;

        var hint, top, left;

        if (msg === undefined) {
            return false;
        }

        hint = $("<div/>").addClass(mode+' validator-hint');//.appendTo(input.parent());
        hint.html(msg !== undefined ? this._format(msg, input.val()) : '');
        hint.css({
            'min-width': o.hintSize
        });

        if (background.isColor()) {
            hint.css('background-color', background);
        } else {
            hint.addClass(background);
        }

        if (color.isColor()) {
            hint.css('color', color);
        } else {
            hint.addClass(color);
        }

        // Position
        if (mode === 'line') {
            hint.addClass('hint2').addClass('line');
            hint.css({
                'position': 'relative',
                'width': input.parent().hasClass('input-control') ? input.parent().width() : input.width(),
                'z-index': 100
            });
            hint.appendTo(input.parent());
            hint.fadeIn(o.hintEasingTime, function(){
                setTimeout(function () {
                    hint.hide().remove();
                }, o.hideHint);
            });
        } else {
            hint.appendTo("body");
            // right
            if (pos === 'right') {
                left = input.offset().left + input.outerWidth() + 15 - $(window).scrollLeft();
                top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                hint.addClass(pos);
                hint.css({
                    top: top,
                    left: $(window).width() + 100
                });
                hint.show().animate({
                    left: left
                }, o.hintEasingTime, o.hintEasing, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else if (pos === 'left') {
                left = input.offset().left - hint.outerWidth() - 10 - $(window).scrollLeft();
                top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                hint.addClass(pos);
                hint.css({
                    top: top,
                    left: -input.offset().left - hint.outerWidth() - 10
                });
                hint.show().animate({
                    left: left
                }, o.hintEasingTime, o.hintEasing, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else if (pos === 'top') {
                left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                top = input.offset().top - $(window).scrollTop() - hint.outerHeight() - 20;

                hint.addClass(pos);
                hint.css({
                    top: -hint.outerHeight(),
                    left: left
                }).show().animate({
                    top: top
                }, o.hintEasingTime, o.hintEasing, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else /*bottom*/ {
                left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                top = input.offset().top - $(window).scrollTop() + input.outerHeight();

                hint.addClass(pos);
                hint.css({
                    top: $(window).height(),
                    left: left
                }).show().animate({
                    top: top
                }, o.hintEasingTime, o.hintEasing, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            }
        }
    },

    _format: function( source, params ) {
        if ( arguments.length === 1 ) {
            return function() {
                var args = $.makeArray( arguments );
                args.unshift( source );
                return $.validator.format.apply( this, args );
            };
        }
        if ( arguments.length > 2 && params.constructor !== Array  ) {
            params = $.makeArray( arguments ).slice( 1 );
        }
        if ( params.constructor !== Array ) {
            params = [ params ];
        }
        $.each( params, function( i, n ) {
            source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
                return n;
            });
        });
        return source;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/window.js
$.widget( "metro.window" , {

    version: "3.0.0",

    options: {
        parent: 'default',
        captionStyle: false,
        contentStyle: false,
        buttons: {
            btnMin: false,
            btnMax: false,
            btnClose: false
        },
        title: false,
        content: false,
        icon: false,
        type: 'default', // 'modal'
        size: false, // {width: x, height: y}

        onBtnMinClick: function(e){e.preventDefault();},
        onBtnMaxClick: function(e){e.preventDefault();},
        onBtnCloseClick: function(e){e.preventDefault();},
        onShow: function(e){e.preventDefault();},
        onHide: function(e){e.preventDefault();}
    },

    _create: function () {
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createWindow();

        element.data('window', this);

    },

    _createWindow: function(){
        var that = this, element = this.element, o = this.options;
        var wind = element, capt, cont;

        wind.addClass("window");
        capt = $("<div/>").addClass("window-caption");
        cont = $("<div/>").addClass("window-content");

        if (o.icon || o.title) {capt.appendTo(wind);}
        cont.appendTo(wind);

        if (typeof o.size === 'object') {
            $.each(o.size, function(key, value){
                cont.css(key, value);
            });
        }

        if (o.captionStyle && typeof o.captionStyle === 'object') {
            $.each(o.captionStyle, function(key, value){
                if (value.isColor()) {
                    capt.css(key, value + " !important");
                } else {
                    capt.addClass(value);
                }
            });
        }

        if (o.contentStyle && typeof o.contentStyle === 'object') {
            $.each(o.contentStyle, function(key, value){
                if (value.isColor()) {
                    cont.css(key, value + " !important");
                } else {
                    cont.addClass(value);
                }
            });
        }

        wind.appendTo(o.parent !== 'default' ? o.parent : element.parent());

        this.icon();
        this.title();
        this.buttons();
        this.content();
    },

    icon: function(){
        var o = this.options;
        var capt = this.element.children('.window-caption');
        var icon = capt.find(".window-caption-icon");

        if (o.icon) {
            if (icon.length === 0) {
                $("<span/>").addClass('window-caption-icon').html(o.icon).appendTo(capt);
            } else {
                icon.html(o.icon);
            }

        }
    },

    title: function(){
        var o = this.options;
        var capt = this.element.children('.window-caption');
        var title = capt.find(".window-caption-title");

        if (o.title) {
            if (title.length === 0) {
                $("<span/>").addClass('window-caption-title').html(o.title).appendTo(capt);
            } else {
                title.html(o.title);
            }
        }
    },

    buttons: function(){
        var o = this.options;
        var bMin, bMax, bClose;
        var capt = this.element.children('.window-caption');

        if (capt.length === 0) {return;}

        if (o.buttons) {
            var btnMin = o.buttons.btnMin;
            var btnMax = o.buttons.btnMax;
            var btnClose = o.buttons.btnClose;

            if (btnMin && btnMin !== false) {
                bMin = $("<span/>").addClass('btn-min').appendTo(capt);
                if (typeof btnMin === 'object') {
                    bMin.css(btnMin);
                }
                if (typeof o.onBtnMinClick === 'string') {
                    var bMinFn = window[o.onBtnMinClick];
                    bMin.on('click', bMinFn);
                } else {
                    bMin.on('click', o.onBtnMinClick(e));
                }
            }

            if (btnMax && btnMax !== false) {
                bMax = $("<span/>").addClass('btn-max').appendTo(capt);
                if (typeof btnMax === 'object') {
                    bMax.css(btnMax);
                }
                if (typeof o.onBtnMaxClick === 'string') {
                    var bMaxFn = window[o.onBtnMaxClick];
                    bMax.on('click', bMaxFn);
                } else {
                    bMax.on('click', o.onBtnMaxClick(e));
                }
            }

            if (btnClose && btnClose !== false) {
                bClose = $("<span/>").addClass('btn-close').appendTo(capt);
                if (typeof btnClose === 'object') {
                    bClose.css(btnClose);
                }
                if (typeof o.onBtnCloseClick === 'string') {
                    var bCloseFn = window[o.onBtnCloseClick];
                    bClose.on('click', bCloseFn);
                } else {
                    bClose.on('click', o.onBtnCloseClick(e));
                }
            }
        }
    },

    content: function(){
        var o = this.options;
        var c = o.content;
        var content = this.element.children('.window-content');

        if (!c) {return;}

        if (c.isUrl()) {
            if (c.indexOf('youtube') > -1) {
                var iframe = $("<iframe>");
                var video_container = $("<div/>").addClass('video-container').appendTo(content);

                iframe
                    .attr('src', c)
                    .attr('frameborder', '0');

                iframe.appendTo(video_container);
            }
        } else {
            content.html(c);
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/wizard.js
$.widget("metro.wizard", {

    version: "3.0.0",

    options: {
        stepper: true,
        stepperType: 'default',
        stepperClickable: false,
        startPage: 'default',
        finishStep: 'default',
        locale: window.METRO_CURRENT_LOCALE,
        buttons: {
            cancel: true,
            help: true,
            prior: true,
            next: true,
            finish: true
        },

        onCancel: function(page, wiz){},
        onHelp: function(page, wiz){},
        onPrior: function(page, wiz){return true;},
        onNext: function(page, wiz){return true;},
        onFinish: function(page, wiz){},

        onPage: function(page, wiz){},
        onStepClick: function(step){}
    },

    _stepper: undefined,
    _currentStep: 0,
    _steps: undefined,

    _create: function(){
        var that = this,
            element = this.element,
            o = this.options,
            steps = element.find(".step");

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._steps = steps;

        if (o.stepper) {
            this._stepper = this._createStepper(steps.length)
                .insertBefore(element.find('.steps'))
                .stepper({
                    clickable: o.stepperClickable
                }).on('stepclick', function(e, s){
                    that.stepTo(s);
                    if (typeof o.onStepClick === 'function') {
                        o.onStepClick(s);
                    } else {
                        if (typeof window[o.onStepClick] === 'function') {
                            window[o.onStepClick](s);
                        } else {
                            var result = eval("(function(){"+o.onStepClick+"})");
                            result.call(s);
                        }
                    }
                });
        }

        if (element.data('locale') !== undefined) {o.locale = element.data('locale');}

        this._createEvents();

        var sp = (o.startPage !== 'default' && parseInt(o.startPage) > 1) ? o.startPage : 1;
        this.stepTo(sp);

        if (typeof o.onPage === 'string') {
            window[o.onPage](this._currentStep + 1, element);
        } else {
            o.onPage(this._currentStep + 1, element);
        }

        element.data('wizard', this);

    },

    _createStepper: function(steps){
        var stepper, o = this.options;

        stepper = $("<div/>").addClass("stepper")
            .attr("data-role", "stepper")
            .attr("data-steps", steps);

        if (o.stepperType !== 'default') {
            stepper.addClass(o.stepperType);
        }

        return stepper;
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        if (o.buttons) {
            var actions = $("<div/>").addClass("actions").appendTo(element);
            var group_left = $("<div/>").addClass("group-left").appendTo(actions);
            var group_right = $("<div/>").addClass("group-right").appendTo(actions);
            var cancel_button, help_button, prior_button, next_button, finish_button;

            if (o.buttons.cancel) {
                cancel_button = $("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[o.locale].buttons[2]);
                if (typeof o.buttons.cancel === "boolean") {
                    cancel_button.appendTo(group_left);
                } else {
                    if (o.buttons.cancel.title) {
                        cancel_button.html(o.buttons.cancel.title);
                    }
                    if (o.buttons.cancel.cls) {
                        cancel_button.addClass(o.buttons.cancel.cls);
                    }
                    if (o.buttons.cancel.group && o.buttons.cancel.group !== "left") {
                        cancel_button.appendTo(group_right);
                    } else {
                        cancel_button.appendTo(group_left);
                    }
                }
                cancel_button.on('click', function(){
                    if (typeof o.onCancel === 'function') {
                        o.onCancel(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onCancel] === 'function') {
                            window[o.onCancel](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onCancel+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
            if (o.buttons.help) {
                help_button = $("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[o.locale].buttons[3]);
                if (typeof o.buttons.help === "boolean") {
                    help_button.appendTo(group_right);
                } else {
                    if (o.buttons.help.title) {
                        help_button.html(o.buttons.help.title);
                    }
                    if (o.buttons.help.cls) {
                        help_button.addClass(o.buttons.help.cls);
                    }
                    if (o.buttons.help.group && o.buttons.help.group !== "left") {
                        help_button.appendTo(group_right);
                    } else {
                        help_button.appendTo(group_left);
                    }
                }
                help_button.on('click', function(){
                    if (typeof o.onHelp === 'function') {
                        o.onHelp(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onHelp] === 'function') {
                            window[o.onHelp](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onHelp+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
            if (o.buttons.prior) {
                prior_button = $("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[o.locale].buttons[4]);
                if (typeof o.buttons.prior === "boolean") {
                    prior_button.appendTo(group_right);
                } else {
                    if (o.buttons.prior.title) {
                        prior_button.html(o.buttons.prior.title);
                    }
                    if (o.buttons.prior.cls) {
                        prior_button.addClass(o.buttons.prior.cls);
                    }
                    if (o.buttons.prior.group && o.buttons.prior.group !== "left") {
                        prior_button.appendTo(group_right);
                    } else {
                        prior_button.appendTo(group_left);
                    }
                }
                prior_button.on('click', function(){
                    if (typeof o.onPrior === 'function') {
                        if (o.onPrior(that._currentStep+1, element)) {that.prior();}
                    } else {
                        if (typeof window[o.onPrior] === 'function') {
                            if (window[o.onPrior](that._currentStep+1, element)) {that.prior();}
                        } else {
                            var result = eval("(function(){"+o.onPrior+"})");
                            if (result.call(that._currentStep+1, element)) {that.prior();}
                        }
                    }
                });
            }
            if (o.buttons.next) {
                next_button = $("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[o.locale].buttons[5]);
                if (typeof o.buttons.next === "boolean") {
                    next_button.appendTo(group_right);
                } else {
                    if (o.buttons.next.title) {
                        next_button.html(o.buttons.next.title);
                    }
                    if (o.buttons.next.cls) {
                        next_button.addClass(o.buttons.next.cls);
                    }
                    if (o.buttons.next.group && o.buttons.next.group !== "left") {
                        next_button.appendTo(group_right);
                    } else {
                        next_button.appendTo(group_left);
                    }
                }
                next_button.on('click', function(){
                    if (typeof o.onNext === 'function') {
                        if (o.onNext(that._currentStep+1, element)) {that.next();}
                    } else {
                        if (typeof window[o.onNext] === 'function') {
                            if (window[o.onNext](that._currentStep+1, element)) {that.next();}
                        } else {
                            var result = eval("(function(){"+o.onNext+"})");
                            if (result.call(that._currentStep+1, element)) {that.next();}
                        }
                    }
                });
            }
            if (o.buttons.finish) {
                finish_button = $("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[o.locale].buttons[6]);
                if (typeof o.buttons.finish === "boolean") {
                    finish_button.appendTo(group_right);
                } else {
                    if (o.buttons.finish.title) {
                        finish_button.html(o.buttons.finish.title);
                    }
                    if (o.buttons.finish.cls) {
                        finish_button.addClass(o.buttons.finish.cls);
                    }
                    if (o.buttons.finish.group && o.buttons.finish.group !== "left") {
                        finish_button.appendTo(group_right);
                    } else {
                        finish_button.appendTo(group_left);
                    }
                }
                finish_button.on('click', function(){
                    if (typeof o.onFinish === 'function') {
                        o.onFinish(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onFinish] === 'function') {
                            window[o.onFinish](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onFinish+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
        }
    },

    next: function(){
        var element = this.element, that = this, o = this.options;
        var new_step = this._currentStep + 1;

        if (new_step === this._steps.length) {return false;}

        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();


        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

        var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        if (new_step === this._steps.length - 1) {
            this.element.find('.btn-next').attr('disabled', true);
        } else {
            this.element.find('.btn-next').attr('disabled', false);
        }

        if (new_step > 0) {
            this.element.find('.btn-prior').attr('disabled', false);
        }

        return true;
    },

    prior: function(){
        var element = this.element, that = this, new_step = this._currentStep - 1;
        var o = this.options;

        if (new_step < 0) {return false;}

        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();

        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

        var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        if (new_step === 0) {
            this.element.find('.btn-prior').attr('disabled', true);
        } else {
            this.element.find('.btn-prior').attr('disabled', false);
        }

        if (new_step < finish) {
            this.element.find('.btn-next').attr('disabled', false);
        }

        return true;
    },

    stepTo: function(step){
        var element = this.element, that = this, new_step = step - 1;
        var o = this.options;

        if (new_step < 0) {return false;}
        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();

        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', step);}

        var finish = (o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep);
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        this.element.find('.btn-next').attr('disabled', (new_step >= finish));
        this.element.find('.btn-prior').attr('disabled', (new_step <= 0));

        return true;
    },

    stepper: function(){
        return this._stepper;
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});


// Source: js/widgets/wizard2.js
$.widget( "metro.wizard2" , {

    version: "3.0.0",

    options: {
        start: 1,
        finish: 'default',
        buttonLabels: {
            prev: '&lt;',
            next: '&gt;',
            finish: 'OK',
            help: '?'
        },
        onPrior: function(page, wiz){return true;},
        onNext: function(page, wiz){return true;},
        onFinish: function(page, wiz){},
        onHelp: function(page, wiz){},
        onPage: function(page, wiz){}

    },

    _step: 1,
    _steps: undefined,

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._step = o.start;
        this._steps = element.children('.step');
        this._height = 0;
        this._width = 0;

        if (o.finish === 'default') {
            o.finish = this._steps.length;
        }

        $.each(this._steps, function(i, v){
            if ($(v).outerHeight() > that._height) {that._height = $(v).outerHeight();}
            //console.log(i, $(v).outerHeight(), that._height);
            if ($(v).hasClass('active')) {
                that._step = i + 1;
            }
        });

        this._width = element.innerWidth() - ( (this._steps.length - 1) * 24 +  (this._steps.length));

        element.children('.step').css({
            height: this._height + 48
        });

        $(window).resize(function(){
            that._width = element.innerWidth() - ( (that._steps.length - 1) * 24 +  (that._steps.length));
            that.step(that._step);
        });

        this._createActionBar();
        this.step(o.start);
        this._placeActionBar();

        element.data('wizard2', this);
    },

    _createActionBar: function(){
        var that = this, element = this.element, o = this.options;
        var bar = $("<div/>").addClass('action-bar').appendTo(element);
        var btn_prev, btn_next, btn_help, btn_finish;

        btn_help = $("<button/>").html(o.buttonLabels.help).addClass('button cycle-button medium-button wiz-btn-help place-left').appendTo(bar);
        btn_finish = $("<button/>").html(o.buttonLabels.finish).addClass('button cycle-button medium-button wiz-btn-finish place-right').appendTo(bar);
        btn_next = $("<button/>").html(o.buttonLabels.next).addClass('button cycle-button medium-button wiz-btn-next place-right').appendTo(bar);
        btn_prev = $("<button/>").html(o.buttonLabels.prev).addClass('button cycle-button medium-button wiz-btn-prev place-right').appendTo(bar);

        btn_help.on('click', function(){
            if (typeof o.onHelp === 'function') {
                o.onHelp(that._step, that);
            } else {
                if (typeof window[o.onHelp] === 'function') {
                    window[o.onHelp](that._step, that);
                } else {
                    var result = eval("(function(){"+o.onHelp+"})");
                    result.call(that._step, that);
                }
            }
        });

        btn_finish.on('click', function(){
            if (typeof o.onFinish === 'function') {
                o.onFinish(that._step, that);
            } else {
                if (typeof window[o.onFinish] === 'function') {
                    window[o.onFinish](that._step, that);
                } else {
                    var result = eval("(function(){"+o.onFinish+"})");
                    result.call(that._step, that);
                }
            }
        });

        btn_prev.on('click', function(){
            if (typeof o.onPrior === 'function') {
                if (o.onPrior(that._step, element)) {that.prior();}
            } else {
                if (typeof window[o.onPrior] === 'function') {
                    if (window[o.onPrior](that._step, element)) {that.prior();}
                } else {
                    var result = eval("(function(){"+o.onPrior+"})");
                    if (result.call(that._step, element)) {that.prior();}
                }
            }
        });

        btn_next.on('click', function(){
            if (typeof o.onNext === 'function') {
                if (o.onNext(that._step, element)) {that.next();}
            } else {
                if (typeof window[o.onNext] === 'function') {
                    if (window[o.onNext](that._step, element)) {that.next();}
                } else {
                    var result = eval("(function(){"+o.onNext+"})");
                    if (result.call(that._step, element)) {that.next();}
                }
            }
        });
    },

    _placeActionBar: function(){
        var element = this.element, o = this.options;
        var action_bar = element.find('.action-bar');
        var curr_frame = element.find('.step.active');
        var left = curr_frame.position().left, right = curr_frame.innerWidth();

        action_bar.css({
            left: left,
            width: right
        });
    },

    step: function(index){
        var o = this.options;

        this.element.children('.step')
            .removeClass('active prev next');

        $(this.element.children('.step')[index - 1])
            .addClass('active')
            .css('width', this._width);

        this.element.children('.step.active').prevAll().addClass('prev').css('width', 0);
        this.element.children('.step.active').nextAll().addClass('next').css('width', 0);

        this._placeActionBar();

        if (index === 1) {
            this.element.find('.wiz-btn-prev').hide();
        } else {
            this.element.find('.wiz-btn-prev').show();
        }

        if (index === this._steps.length) {
            this.element.find('.wiz-btn-next').hide();
        } else {
            this.element.find('.wiz-btn-next').show();
        }

        if (index !== o.finish) {
            this.element.find('.wiz-btn-finish').hide();
        } else {
            this.element.find('.wiz-btn-finish').show();
        }

    },

    prior: function(){
        var new_step = this._step - 1;
        if (new_step <= 0) {
            return false;
        }

        this._step = new_step;

        this.step(new_step);

        return true;
    },

    next: function(){
        var new_step = this._step + 1;
        if (new_step > this._steps.length) {return false;}

        this._step = new_step;

        this.step(new_step);

        return true;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});


 return $.Metro.init();

}));
/*!
 * Metro UI CSS v3.0.12 (http://metroui.org.ua)
 * Copyright 2012-2015 Sergey Pimenov
 * Licensed under MIT (http://metroui.org.ua/license.html)
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(jQuery){"use strict";function keyHandler(a){if("string"==typeof a.data&&(a.data={keys:a.data}),a.data&&a.data.keys&&"string"==typeof a.data.keys){var b=a.handler,c=a.data.keys.toLowerCase().split(" ");a.handler=function(a){if(this===a.target||!($.hotkeys.options.filterInputAcceptingElements&&$.hotkeys.textInputTypes.test(a.target.nodeName)||$.hotkeys.options.filterContentEditable&&$(a.target).attr("contenteditable")||$.hotkeys.options.filterTextInputs&&$.inArray(a.target.type,$.hotkeys.textAcceptingInputTypes)>-1)){var d="keypress"!==a.type&&$.hotkeys.specialKeys[a.which],e=String.fromCharCode(a.which).toLowerCase(),f="",g={};$.each(["alt","ctrl","shift"],function(b,c){a[c+"Key"]&&d!==c&&(f+=c+"+")}),a.metaKey&&!a.ctrlKey&&"meta"!==d&&(f+="meta+"),a.metaKey&&"meta"!==d&&f.indexOf("alt+ctrl+shift+")>-1&&(f=f.replace("alt+ctrl+shift+","hyper+")),d?g[f+d]=!0:(g[f+e]=!0,g[f+$.hotkeys.shiftNums[e]]=!0,"shift+"===f&&(g[$.hotkeys.shiftNums[e]]=!0));for(var h=0,i=c.length;i>h;h++)if(g[c[h]])return b.apply(this,arguments)}}}}function handler(a){var b,c=a||window.event,d=[].slice.call(arguments,1),e=0,f=0,g=0,h=0,i=0;return a=$.event.fix(c),a.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta),c.detail&&(e=-1*c.detail),c.deltaY&&(g=-1*c.deltaY,e=g),c.deltaX&&(f=c.deltaX,e=-1*f),void 0!==c.wheelDeltaY&&(g=c.wheelDeltaY),void 0!==c.wheelDeltaX&&(f=-1*c.wheelDeltaX),h=Math.abs(e),(!lowestDelta||lowestDelta>h)&&(lowestDelta=h),i=Math.max(Math.abs(g),Math.abs(f)),(!lowestDeltaXY||lowestDeltaXY>i)&&(lowestDeltaXY=i),b=e>0?"floor":"ceil",e=Math[b](e/lowestDelta),f=Math[b](f/lowestDeltaXY),g=Math[b](g/lowestDeltaXY),d.unshift(a,e,f,g),($.event.dispatch||$.event.handle).apply(this,d)}function preCode(a){var b=Array.prototype.slice.call(document.querySelectorAll(a),0);b.forEach(function(a){var b=a.textContent.replace(/^[\r\n]+/,"").replace(/\s+$/g,"");if(/^\S/gm.test(b))return void(a.textContent=b);for(var c,d,e,f=/^[\t ]+/gm,g=1e3;c=f.exec(b);)e=c[0].length,g>e&&(g=e,d=c[0]);1e3!=g&&(a.textContent=b.replace(new RegExp("^"+d,"gm"),""))})}function touch2Mouse(a){var b,c=a.changedTouches[0];switch(a.type){case"touchstart":b="mousedown";break;case"touchend":b="mouseup";break;case"touchmove":b="mousemove";break;default:return}"mousedown"==b&&(eventTimer=(new Date).getTime(),startX=c.clientX,startY=c.clientY,mouseDown=!0),"mouseup"==b&&((new Date).getTime()-eventTimer<=500?b="click":(new Date).getTime()-eventTimer>1e3&&(b="longclick"),eventTimer=0,mouseDown=!1),"mousemove"==b&&mouseDown&&(deltaX=c.clientX-startX,deltaY=c.clientY-startY,moveDirection=deltaX>deltaY?"horizontal":"vertical");var d=document.createEvent("MouseEvent");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(d),a.preventDefault()}var $=jQuery;if("undefined"==typeof jQuery)throw new Error("Metro's JavaScript requires jQuery");window.METRO_VERSION="3.0.12",void 0===window.METRO_AUTO_REINIT&&(window.METRO_AUTO_REINIT=!0),void 0===window.METRO_LANGUAGE&&(window.METRO_LANGUAGE="en"),void 0===window.METRO_LOCALE&&(window.METRO_LOCALE="EN_en"),void 0===window.METRO_CURRENT_LOCALE&&(window.METRO_CURRENT_LOCALE="en"),void 0===window.METRO_SHOW_TYPE&&(window.METRO_SHOW_TYPE="slide"),void 0===window.METRO_DEBUG&&(window.METRO_DEBUG=!0),void 0===window.METRO_CALENDAR_WEEK_START&&(window.METRO_CALENDAR_WEEK_START=0),window.canObserveMutation="MutationObserver"in window,String.prototype.isUrl=function(){var a=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return a.test(this)},String.prototype.isColor=function(){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this)},Array.prototype.shuffle=function(){for(var a,b,c=this.length;0!==c;)b=Math.floor(Math.random()*c),c-=1,a=this[c],this[c]=this[b],this[b]=a;return this},Array.prototype.clone=function(){return this.slice(0)},Array.prototype.unique=function(){for(var a=this.concat(),b=0;b<a.length;++b)for(var c=b+1;c<a.length;++c)a[b]===a[c]&&a.splice(c--,1);return a},window.uniqueId=function(){var a=(new Date).getTime(),b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:3&c|8).toString(16)});return b},window.isTouchDevice=function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0},window.METRO_LOCALES={en:{months:["January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Su","Mo","Tu","We","Th","Fr","Sa"],buttons:["Today","Clear","Cancel","Help","Prior","Next","Finish"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre","Jan","Fév","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"],days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Di","Lu","Ma","Me","Je","Ve","Sa"],buttons:["Aujourd'hui","Effacer","Annuler","Aide","Précedent","Suivant","Fin"]},nl:{months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December","Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag","Zo","Ma","Di","Wo","Do","Vr","Za"],buttons:["Vandaag","Verwijderen","Annuleren","Hulp","Vorige","Volgende","Einde"]},ua:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень","Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],days:["Неділя","Понеділок","Вівторок","Середа","Четвер","П’ятниця","Субота","Нд","Пн","Вт","Ср","Чт","Пт","Сб"],buttons:["Сьогодні","Очистити","Скасувати","Допомога","Назад","Вперед","Готово"]},ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Вс","Пн","Вт","Ср","Чт","Пт","Сб"],buttons:["Сегодня","Очистить","Отменить","Помощь","Назад","Вперед","Готово"]},zhCN:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","日","一","二","三","四","五","六"],buttons:["今日","清除","Cancel","Help","Prior","Next","Finish"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre","Gen"," Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],days:["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica","Lun","Mar","Mer","Gio","Ven","Sab","Dom"],buttons:["Oggi","Cancella","Cancel","Help","Prior","Next","Finish"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember","Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","So","Mo","Di","Mi","Do","Fr","Sa"],buttons:["Heute","Zurücksetzen","Abbrechen","Hilfe","Früher","Später","Fertig"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Do","Lu","Mar","Mié","Jue","Vi","Sáb"],buttons:["Hoy","Limpiar","Cancel","Help","Prior","Next","Finish"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],days:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado","Dom","Seg","Ter","Qua","Qui","Sex","Sab"],buttons:["Hoje","Limpar","Cancelar","Ajuda","Anterior","Seguinte","Terminar"]},pl:{months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień","Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Nd","Pon","Wt","Śr","Czw","Pt","Sob"],buttons:["Dzisiaj","Wyczyść","Anuluj","Pomoc","Poprzedni","Następny","Koniec"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec","Led","Ún","Bř","Dub","Kvě","Če","Čer","Srp","Zá","Ří","Li","Pro"],days:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota","Ne","Po","Út","St","Čt","Pá","So"],buttons:["Dnes","Vyčistit","Zrušit","Pomoc","Předešlý","Další","Dokončit"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],days:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],buttons:["วันนี้","ล้าง","ยกเลิก","ช่วยเหลือ","กลับ","ต่อไป","เสร็จ"]}};var dateFormat=function(){var a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,b=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,c=/[^-+\dA-Z]/g,d=function(a,b){for(a=String(a),b=b||2;a.length<b;)a="0"+a;return a};return function(e,f,g){var h=dateFormat;1!==arguments.length||"[object String]"!==Object.prototype.toString.call(e)||/\d/.test(e)||(f=e,e=void 0),e=e?new Date(e):new Date,f=String(h.masks[f]||f||h.masks["default"]),"UTC:"===f.slice(0,4)&&(f=f.slice(4),g=!0);var i=window.METRO_CURRENT_LOCALE||"en",j=g?"getUTC":"get",k=e[j+"Date"](),l=e[j+"Day"](),m=e[j+"Month"](),n=e[j+"FullYear"](),o=e[j+"Hours"](),p=e[j+"Minutes"](),q=e[j+"Seconds"](),r=e[j+"Milliseconds"](),s=g?0:e.getTimezoneOffset(),t={d:k,dd:d(k),ddd:window.METRO_LOCALES[i].days[l],dddd:window.METRO_LOCALES[i].days[l+7],m:m+1,mm:d(m+1),mmm:window.METRO_LOCALES[i].months[m],mmmm:window.METRO_LOCALES[i].months[m+12],yy:String(n).slice(2),yyyy:n,h:o%12||12,hh:d(o%12||12),H:o,HH:d(o),M:p,MM:d(p),s:q,ss:d(q),l:d(r,3),L:d(r>99?Math.round(r/10):r),t:12>o?"a":"p",tt:12>o?"am":"pm",T:12>o?"A":"P",TT:12>o?"AM":"PM",Z:g?"UTC":(String(e).match(b)||[""]).pop().replace(c,""),o:(s>0?"-":"+")+d(100*Math.floor(Math.abs(s)/60)+Math.abs(s)%60,4),S:["th","st","nd","rd"][k%10>3?0:(k%100-k%10!==10)*k%10]};return f.replace(a,function(a){return a in t?t[a]:a.slice(1,a.length-1)})}}();dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},Date.prototype.format=function(a,b){return dateFormat(this,a,b)};var widget_uuid=0,widget_slice=Array.prototype.slice;$.cleanData=function(a){return function(b){var c,d,e;for(e=0;null!=(d=b[e]);e++)try{c=$._data(d,"events"),c&&c.remove&&$(d).triggerHandler("remove")}catch(f){}a(b)}}($.cleanData),$.widget=function(a,b,c){var d,e,f,g,h={},i=a.split(".")[0];return a=a.split(".")[1],d=i+"-"+a,c||(c=b,b=$.Widget),$.expr[":"][d.toLowerCase()]=function(a){return!!$.data(a,d)},$[i]=$[i]||{},e=$[i][a],f=$[i][a]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},$.extend(f,e,{version:c.version,_proto:$.extend({},c),_childConstructors:[]}),g=new b,g.options=$.widget.extend({},g.options),$.each(c,function(a,c){return $.isFunction(c)?void(h[a]=function(){var d=function(){return b.prototype[a].apply(this,arguments)},e=function(c){return b.prototype[a].apply(this,c)};return function(){var a,b=this._super,f=this._superApply;return this._super=d,this._superApply=e,a=c.apply(this,arguments),this._super=b,this._superApply=f,a}}()):void(h[a]=c)}),f.prototype=$.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||a:a},h,{constructor:f,namespace:i,widgetName:a,widgetFullName:d}),e?($.each(e._childConstructors,function(a,b){var c=b.prototype;$.widget(c.namespace+"."+c.widgetName,f,b._proto)}),delete e._childConstructors):b._childConstructors.push(f),$.widget.bridge(a,f),f},$.widget.extend=function(a){for(var b,c,d=widget_slice.call(arguments,1),e=0,f=d.length;f>e;e++)for(b in d[e])c=d[e][b],d[e].hasOwnProperty(b)&&void 0!==c&&(a[b]=$.isPlainObject(c)?$.isPlainObject(a[b])?$.widget.extend({},a[b],c):$.widget.extend({},c):c);return a},$.widget.bridge=function(a,b){var c=b.prototype.widgetFullName||a;$.fn[a]=function(d){var e="string"==typeof d,f=widget_slice.call(arguments,1),g=this;return e?this.each(function(){var b,e=$.data(this,c);return"instance"===d?(g=e,!1):e?$.isFunction(e[d])&&"_"!==d.charAt(0)?(b=e[d].apply(e,f),b!==e&&void 0!==b?(g=b&&b.jquery?g.pushStack(b.get()):b,!1):void 0):$.error("no such method '"+d+"' for "+a+" widget instance"):$.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+d+"'")}):(f.length&&(d=$.widget.extend.apply(null,[d].concat(f))),this.each(function(){var a=$.data(this,c);a?(a.option(d||{}),a._init&&a._init()):$.data(this,c,new b(d,this))})),g}},$.Widget=function(){},$.Widget._childConstructors=[],$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(a,b){b=$(b||this.defaultElement||this)[0],this.element=$(b),this.uuid=widget_uuid++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=$(),this.hoverable=$(),this.focusable=$(),b!==this&&($.data(b,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===b&&this.destroy()}}),this.document=$(b.style?b.ownerDocument:b.document||b),this.window=$(this.document[0].defaultView||this.document[0].parentWindow)),this.options=$.widget.extend({},this.options,this._getCreateOptions(),a),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(a,b){var c,d,e,f=a;if(0===arguments.length)return $.widget.extend({},this.options);if("string"==typeof a)if(f={},c=a.split("."),a=c.shift(),c.length){for(d=f[a]=$.widget.extend({},this.options[a]),e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];if(a=c.pop(),1===arguments.length)return void 0===d[a]?null:d[a];d[a]=b}else{if(1===arguments.length)return void 0===this.options[a]?null:this.options[a];f[a]=b}return this._setOptions(f),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(a,b,c){var d,e=this;"boolean"!=typeof a&&(c=b,b=a,a=!1),c?(b=d=$(b),this.bindings=this.bindings.add(b)):(c=b,b=this.element,d=this.widget()),$.each(c,function(c,f){function g(){return a||e.options.disabled!==!0&&!$(this).hasClass("ui-state-disabled")?("string"==typeof f?e[f]:f).apply(e,arguments):void 0}"string"!=typeof f&&(g.guid=f.guid=f.guid||g.guid||$.guid++);var h=c.match(/^([\w:-]*)\s*(.*)$/),i=h[1]+e.eventNamespace,j=h[2];j?d.delegate(j,i,g):b.bind(i,g)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b),this.bindings=$(this.bindings.not(a).get()),this.focusable=$(this.focusable.not(a).get()),this.hoverable=$(this.hoverable.not(a).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(a){$(a.currentTarget).addClass("ui-state-hover")},mouseleave:function(a){$(a.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(a){$(a.currentTarget).addClass("ui-state-focus")},focusout:function(a){$(a.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(a,b,c){var d,e,f=this.options[a];if(c=c||{},b=$.Event(b),b.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase(),b.target=this.element[0],e=b.originalEvent)for(d in e)d in b||(b[d]=e[d]);return this.element.trigger(b,c),!($.isFunction(f)&&f.apply(this.element[0],[b].concat(c))===!1||b.isDefaultPrevented())}},$.each({show:"fadeIn",hide:"fadeOut"},function(a,b){$.Widget.prototype["_"+a]=function(c,d,e){"string"==typeof d&&(d={effect:d});var f,g=d?d===!0||"number"==typeof d?b:d.effect||b:a;d=d||{},"number"==typeof d&&(d={duration:d}),f=!$.isEmptyObject(d),d.complete=e,d.delay&&c.delay(d.delay),f&&$.effects&&$.effects.effect[g]?c[a](d):g!==a&&c[g]?c[g](d.duration,d.easing,e):c.queue(function(b){$(this)[a](),e&&e.call(c[0]),b()})}});var widget=$.widget;$.fn.reverse=Array.prototype.reverse,$.Metro=function(a){a=$.extend({},a)},$.Metro.hotkeys=[],$.Metro.initWidgets=function(){var a=$("[data-role]"),b=$("[data-hotkey]");$.each(b,function(){var a=$(this),b=a.data("hotkey").toLowerCase();a.data("hotKeyBonded")!==!0&&($.Metro.hotkeys.push(b),$(document).on("keyup",null,b,function(){return void 0!==a?("A"===a[0].tagName&&void 0!==a.attr("href")&&""!==a.attr("href").trim()&&"#"!==a.attr("href").trim()?document.location.href=a.attr("href"):a.click(),!1):void 0}),a.data("hotKeyBonded",!0))}),$.each(a,function(){var a=$(this),b=a.data("role").split(/\s*,\s*/);b.map(function(b){try{void 0!==$.fn[b]&&a.data(b+"-initiated")!==!0&&($.fn[b].call(a),a.data(b+"-initiated",!0))}catch(c){window.METRO_DEBUG&&console.log(c.message,c.stack)}})})},$.Metro.init=function(){if($.Metro.initWidgets(),window.METRO_AUTO_REINIT)if(window.canObserveMutation){var a,b,c;b={childList:!0,subtree:!0},c=function(a){a.map(function(a){if(a.addedNodes)for(var b,c,d,e,f=0,g=a.addedNodes.length;g>f;f++)b=$(a.addedNodes[f]),d=b.find("[data-role]"),e=b.find("[data-hotkey]"),$.each(e,function(){var a=$(this),b=a.data("hotkey").toLowerCase();a.data("hotKeyBonded")!==!0&&($.Metro.hotkeys.push(b),$(document).on("keyup",null,b,function(){return void 0!==a?("A"===a[0].tagName&&void 0!==a.attr("href")&&""!==a.attr("href").trim()&&"#"!==a.attr("href").trim()?document.location.href=a.attr("href"):a.click(),!1):void 0}),a.data("hotKeyBonded",!0))}),c=void 0!==b.data("role")?$.merge(d,b):d,c.length&&$.each(c,function(){var a=$(this),b=a.data("role").split(/\s*,\s*/);b.map(function(b){try{void 0!==$.fn[b]&&a.data(b+"-initiated")!==!0&&($.fn[b].call(a),a.data(b+"-initiated",!0))}catch(c){window.METRO_DEBUG&&console.log(c.message,c.stack)}})})})},a=new MutationObserver(c),a.observe(document,b)}else{var d,e=$("body").html();setInterval(function(){d=$("body").html(),e!==d&&(e=d,$.Metro.initWidgets())},100)}},$.easing.jswing=$.easing.swing,$.extend($.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return $.easing[$.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),-(h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g))+c)},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),h*Math.pow(2,-10*b)*Math.sin(2*(b*e-f)*Math.PI/g)+d+c)},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:2==(b/=e/2)?c+d:(g||(g=.3*e*1.5),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)*.5+d+c)},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-$.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*$.easing.easeInBounce(a,2*b,0,d,e)+c:.5*$.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),$.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},$.each(["keydown","keyup","keypress"],function(){$.event.special[this]={add:keyHandler}});var toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],lowestDelta,lowestDeltaXY;if($.event.fixHooks)for(var i=toFix.length;i;)$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;$.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=toBind.length;a;)this.addEventListener(toBind[--a],handler,!1);else this.onmousewheel=handler},teardown:function(){if(this.removeEventListener)for(var a=toBind.length;a;)this.removeEventListener(toBind[--a],handler,!1);else this.onmousewheel=null}},$.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}}),document.addEventListener("DOMContentLoaded",function(){preCode("pre code, textarea")},!1);var hasTouch="ontouchend"in window,eventTimer,moveDirection="undefined",startX,startY,deltaX,deltaY,mouseDown=!1,addTouchEvents=function(a){hasTouch&&(a.addEventListener("touchstart",touch2Mouse,!0),a.addEventListener("touchmove",touch2Mouse,!0),a.addEventListener("touchend",touch2Mouse,!0))};$.widget("metro.accordion",{version:"3.0.0",options:{closeAny:!1,speed:"fast",onFrameOpen:function(){return!0},onFrameOpened:function(){},onFrameClose:function(){return!0},onFrameClosed:function(){}},init:function(){var a=this,b=this.element;b.on("click",".heading",function(b){var c=$(this).parent();return c.hasClass("disabled")?!1:(c.hasClass("active")?a._closeFrame(c):a._openFrame(c),b.preventDefault(),void b.stopPropagation())})},_closeAllFrames:function(){var a=this,b=this.element.children(".frame.active");$.each(b,function(){a._closeFrame($(this))})},_openFrame:function(frame){var o=this.options,content=frame.children(".content"),result;if("function"==typeof o.onFrameOpen){if(!o.onFrameOpen(frame))return!1}else if("function"==typeof window[o.onFrameOpen]){if(!window[o.onFrameOpen](frame))return!1}else if(result=eval("(function(){"+o.onFrameOpen+"})"),!result.call(frame))return!1;o.closeAny&&this._closeAllFrames(),content.slideDown(o.speed),frame.addClass("active"),"function"==typeof o.onFrameOpened?o.onFrameOpened(frame):"function"==typeof window[o.onFrameOpened]?window[o.onFrameOpened](frame):(result=eval("(function(){"+o.onFrameOpened+"})"),result.call(frame))},_closeFrame:function(frame){var o=this.options,content=frame.children(".content"),result;if("function"==typeof o.onFrameClose){if(!o.onFrameClose(frame))return!1}else if("function"==typeof window[o.onFrameClose]){if(!window[o.onFrameClose](frame))return!1}else if(result=eval("(function(){"+o.onFrameClose+"})"),!result.call(frame))return!1;content.slideUp(o.speed,function(){frame.removeClass("active")}),"function"==typeof o.onFrameClosed?o.onFrameClosed(frame):"function"==typeof window[o.onFrameClosed]?window[o.onFrameClosed](frame):(result=eval("(function(){"+o.onFrameClosed+"})"),result.call(frame))},_create:function(){var a=this,b=this.options,c=this.element;$.each(this.element.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),a.init(),c.data("accordion",this)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.appbar",{version:"3.0.0",options:{flexstyle:"app-bar-menu",flexclean:!1,flextolerance:3},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._initBar(),a.data("appbar",this)},_calculateFreeSpace:function(){var a,b,c=this,d=(this.element,this.options,0),e=0;d=$(c.menusParent).width(),a=$(c.menusParent).children(":visible").not(".app-bar-pullmenu");for(var f,g=[],h=[],i=[],j=0,k=a.length;k>j;j++)switch(f=$(a[j]).css("float")){case"left":g.push(a[j]);break;case"right":h.push(a[j]);break;default:i.push(a[j])}h.reverse(),a=new Array,a=g.concat(i,h),a=$(a),e+=parseInt($(a).first().css("margin-left"));for(var j=0,k=a.length-1;k>=j;j++)e+=$(a[j]).outerWidth(),j!==k&&(e+=Math.max(parseInt($(a[j]).css("margin-right")),parseInt($(a[j+1]).css("margin-left"))));return e+=parseInt($(a[k]).css("margin-right")),b=d-e,c.freeSpace=b,c.childrenWidth=e,c.menusParentWidth=d,b},_originIndexMove:function(a,b){var c=$(a).children().filter(function(){return parseInt($(this).attr("data-flexorderorigin"))<parseInt($(b).attr("data-flexorderorigin"))});c.length>0?$(c).last().after(b):(c=$(a).children().filter(function(){return parseInt($(this).attr("data-flexorderorigin"))>parseInt($(b).attr("data-flexorderorigin"))}),c.length>0?$(c).first().before(b):$(a).append(b))},_moveMenuEntry:function(a){{var b=this;this.element,this.options}if(a=a||"toPullMenu","toPullMenu"===a){var c=$(b.allMenuEntries).not(".app-bar-pullmenu-entry").last();if(0===c.length)return!1;var d=$(c).parent(),e=$(b.flexVisibles).index($(c).parent()),f=$(b.pullMenu).find(".app-bar-pullmenubar").eq(e);return b._originIndexMove(f,c),$(c).addClass("app-bar-pullmenu-entry"),$(f).removeClass("hidden").show(),0===$(d).children().length&&$(d).addClass("hidden"),$(b.pullButton).show(),c}if("fromPullMenu"===a){var g=$(b.allMenuEntries).filter(".app-bar-pullmenu-entry").first(),f=$(g).parent(),e=$(f).index(),d=$(b.flexVisibles).eq(e);return $(d).removeClass("hidden"),$(g).removeClass("app-bar-pullmenu-entry"),b._originIndexMove(d,g),0===$(f).children().length&&$(f).addClass("hidden").hide(),0===$(b.pullMenu).children(".app-bar-pullmenubar").not(".hidden").length&&($(b.pullMenu).hide().addClass("hidden"),$(b.pullButton).hide()),0===g.length?!1:g}},_checkMenuEntries:function(){for(var a=this,b=(this.element,this.options),c=!1,d=0,e=a.allMenuEntries.length;e>d;d++){a._calculateFreeSpace();var f=a.freeSpace;if(!(f<b.flextolerance||b.flexclean)){if(a._moveMenuEntry("fromPullMenu")){c=!0;continue}break}if(!a._moveMenuEntry("toPullMenu"))break;if(c)break}},resize:function(){{var a=this;this.element,this.options}a.initiatedAsFlex&&this._checkMenuEntries()},_initBar:function(){var a=this,b=this.element,c=this.options;a.lastFlexAction=void 0,a.pullButton=$(b).find(".app-bar-pullbutton");var d=$(b).find(".app-bar-menu");a.initiatedAsFlex=!1,c.flexclean=$(b).is("[data-flexclean='true']")||c.flexclean,c.flexstyle=$(b).attr("data-flexstyle")||c.flexstyle;var e,f;a.flexVisibles=$(),a.allMenuEntries=$(),a.menusParent=$(),a.pullMenu=$(),d.length>0&&$(b).is(":not('.no-flexible')")&&(a.flexVisibles=$(d).not(".no-flexible"),a.flexVisibles.length>0&&(a.initiatedAsFlex=!0,a.flexVisibles.sort(function(a,b){var c=parseInt($(a).data("flexorder"))||$(a).index()+1,d=parseInt($(b).data("flexorder"))||$(b).index()+1;return c-d}),$(a.flexVisibles).each(function(){e=this,f=$(e).children(),$(f).each(function(){$(this).attr("data-flexorderorigin",$(this).index()),$(this).is("[data-flexorder]")||$(this).attr("data-flexorder",$(this).index()+1)}),f.sort(function(a,b){var c=parseInt($(a).data("flexorder")),d=parseInt($(b).data("flexorder"));return c-d}),$(e).is("[data-flexdirection='reverse']")&&f.reverse(),$.merge(a.allMenuEntries,$(f).not(".no-flexible"))}),a.menusParent=$(b).find(".app-bar-menu").first().parent(),a.pullButton.length>0||(a.pullButton=$('<div class="app-bar-pullbutton automatic"></div>'),$(a.menusParent).append(a.pullButton)),a.pullMenu=$('<nav class="app-bar-pullmenu hidden" />'),a.flexVisibles.each(function(){$(a.pullMenu).append($('<ul class="app-bar-pullmenubar hidden '+c.flexstyle+'" />'))}),$(a.menusParent).append($('<div class="clearfix" style="width: 0;">')),$(a.pullMenu).addClass("flexstyle-"+c.flexstyle),$(a.menusParent).append(a.pullMenu),a._checkMenuEntries(),$(a.pullButton).on("click",function(){a=$(this).closest("[data-role=appbar]").data("appbar"),$(a.pullMenu).is(":hidden")?($(a.pullMenu).show(),$(a.pullMenu).find(".app-bar-pullmenubar").hide().not(".hidden").slideDown("fast")):$(a.pullMenu).find(".app-bar-pullmenubar").not(".hidden").show().slideUp("fast",function(){
$(a.pullMenu).hide()})}),$(window).resize(function(){$("[data-role=appbar]:not(.no-flexible)").each(function(){$(this).data("appbar").resize()})}),$(window).load(function(){$("[data-role=appbar]:not(.no-flexible)").each(function(){$(this).data("appbar").resize()})}),$("[data-role=appbar]:not(.no-flexible) [src]").on("load",function(){var a=$(this).closest("[data-role=appbar]").data("appbar");a.resize()})))},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.group",{version:"3.0.0",options:{groupType:"one-state",buttonStyle:!1,onChange:function(){return!0},onChanged:function(){}},_create:function(){var that=this,element=this.element,o=this.options,result;$.each(element.data(),function(a,b){if(a in o)try{o[a]=$.parseJSON(b)}catch(c){o[a]=b}}),element.hasClass("group-of-buttons")||element.addClass("group-of-buttons");for(var buttons=element.find(".button, .toolbar-button"),i=0;i<buttons.length;i++)$(buttons[i]).data("index",i);o.buttonStyle!==!1&&buttons.addClass(o.buttonStyle),element.on("click",".button, .toolbar-button",function(){var button=$(this),index=button.data("index");if("function"==typeof o.onChange){if(!o.onChange(index,button))return!1}else if("function"==typeof window[o.onChange]){if(!window[o.onChange](index,button))return!1}else if(result=eval("(function(){"+o.onChange+"})"),!result.call(index,button))return!1;"one-state"===o.groupType?(buttons.removeClass("active"),$(this).addClass("active")):$(this).toggleClass("active"),"function"==typeof o.onChanged?o.onChanged(index,button):"function"==typeof window[o.onChanged]?window[o.onChanged](index,button):(result=eval("(function(){"+o.onChanged+"})"),result.call(index,button))}),element.data("group",this)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.calendar",{version:"3.0.0",options:{format:"yyyy-mm-dd",multiSelect:!1,startMode:"day",weekStart:window.METRO_CALENDAR_WEEK_START,otherDays:!0,date:new Date,minDate:!1,maxDate:!1,preset:!1,exclude:!1,stored:!1,buttons:!0,buttonToday:!0,buttonClear:!0,syncCalenderToDateField:!0,locale:"en",actions:!0,condensedGrid:!1,scheme:"default",getDates:function(){},dayClick:function(){}},_year:0,_month:0,_day:0,_today:new Date,_event:"",_mode:"day",_distance:0,_events:[],_create:function(){var a=this,b=this.element,c=this.options;$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),"string"==typeof c.date&&(c.date=new Date(c.date)),c.minDate!==!1&&"string"==typeof c.minDate&&(c.minDate=new Date(c.minDate.replace(/\./g,"-")+"T00:00:00Z"),c.minDate.setTime(c.minDate.getTime()-864e5)),c.maxDate!==!1&&"string"==typeof c.maxDate&&(c.maxDate=new Date(c.maxDate.replace(/\./g,"-")+"T00:00:00Z")),this.locales=window.METRO_LOCALES,this._year=c.date.getFullYear(),this._distance=c.date.getFullYear()-4,this._month=c.date.getMonth(),this._day=c.date.getDate(),this._mode=c.startMode,b.data("_storage",[]),b.data("_exclude",[]),b.data("_stored",[]),b.hasClass("calendar")||b.addClass("calendar");var d,e;c.preset&&(d=/\s*,\s*/,e=c.preset.split(d),$.each(e,function(){void 0!==new Date(this)&&a.setDate(this)})),c.exclude&&(d=/\s*,\s*/,e=c.exclude.split(d),$.each(e,function(){void 0!==new Date(this)&&a.setDateExclude(this)})),c.stored&&(d=/\s*,\s*/,e=c.stored.split(d),$.each(e,function(){void 0!==new Date(this)&&a.setDateStored(this)})),"default"!==c.scheme&&b.addClass(c.scheme),this._renderCalendar(),b.data("calendar",this)},_renderButtons:function(a){var b,c,d=this.options;if(this.options.buttons){var e=d.buttonToday?"<button class='button calendar-btn-today small-button success'>"+this.locales[d.locale].buttons[0]+"</button>":"",f=d.buttonClear?"<button class='button calendar-btn-clear small-button warning'>"+this.locales[d.locale].buttons[1]+"</button>":"";b=$("<div/>").addClass("calendar-row calendar-actions"),c=$("<div/>").addClass("align-center").html(e+f),c.appendTo(b),b.appendTo(a)}},_renderMonth:function(){var a=this.options,b=this._year,c=this._month,d=(this._day,this._event,28);1===c&&(b%100!==0&&b%4===0||b%400===0)&&(d=29);var e,f,g,h,i,j=["31",""+d,"31","30","31","30","31","31","30","31","30","31"],k=j[c],l=this._dateFromNumbers(b,c+1,1).getDay();this.element.html(""),e=$("<div/>").addClass("calendar-grid"),a.condensedGrid&&e.addClass("condensed no-border"),f=$("<div/>").addClass("calendar-row no-margin"),$("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(f),$("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(f),$("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>"+this.locales[a.locale].months[c]+" "+b+"</a>").appendTo(f),$("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(f),$("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(f),f.addClass("calendar-header").appendTo(e);var m;for(f=$("<div/>").addClass("calendar-row week-days"),h=0;7>h;h++)a.weekStart?(m=h+1,7===m&&(m=0),g=$("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(f),i=$("<div/>").html(this.locales[a.locale].days[m+7]).appendTo(g)):(g=$("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(f),i=$("<div/>").html(this.locales[a.locale].days[h+7]).appendTo(g));f.addClass("calendar-subheader").appendTo(e);var n=this._month-1;0>n&&(n=11);var o=j[n],p=(a.weekStart?l+6:l)%7,q="";for(f=$("<div/>").addClass("calendar-row"),h=0;p>h;h++)a.otherDays&&(q=o-(p-h-1)),g=$("<div/>").addClass("calendar-cell empty").appendTo(f),i=$("<div/>").addClass("other-day").html(q).appendTo(g),a.otherDays||i.css("visibility","hidden");var r,s,t,u=(a.weekStart?l+6:l)%7;for(h=1;k>=h;h++)u%=7,0===u&&(f.appendTo(e),f=$("<div/>").addClass("calendar-row")),g=$("<div/>").addClass("calendar-cell align-center day"),i=$("<div/>").appendTo(g),a.minDate!==!1&&this._dateFromNumbers(b,c+1,h)<a.minDate||a.maxDate!==!1&&this._dateFromNumbers(b,c+1,h)>a.maxDate?(g.removeClass("day"),i.addClass("other-day"),t=h):t="<a href='#'>"+h+"</a>",i.html(t),b===this._today.getFullYear()&&c===this._today.getMonth()&&this._today.getDate()===h&&g.addClass("today"),r=this._dateNumberStringyFy(this._year,this._month+1,h),this.element.data("_storage").indexOf(r)>=0&&(s=g.find("a"),s.parent().parent().addClass("selected")),this.element.data("_exclude").indexOf(r)>=0&&(s=g.find("a"),s.parent().parent().addClass("exclude")),this.element.data("_stored").indexOf(r)>=0&&(s=g.find("a"),s.parent().parent().addClass("stored")),g.appendTo(f),u++;var v="";for(h=u+1;7>=h;h++)a.otherDays&&(v=h-u),g=$("<div/>").addClass("calendar-cell empty").appendTo(f),i=$("<div/>").addClass("other-day").html(v).appendTo(g),a.otherDays||i.css("visibility","hidden");f.appendTo(e),this._renderButtons(e),e.appendTo(this.element)},_renderMonths:function(){var a,b,c,d,e;for(this.element.html(""),a=$("<div/>").addClass("calendar-grid"),this.options.condensedGrid&&a.addClass("condensed no-border"),b=$("<div/>").addClass("calendar-row"),$("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(b),$("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>"+this._year+"</a>").appendTo(b),$("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(b),b.addClass("calendar-header").appendTo(a),b=$("<div/>").addClass("calendar-row"),e=0,d=0;12>d;d++)c=$("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='"+d+"'>"+this.locales[this.options.locale].months[d+12]+"</a>"),this._month===d&&(new Date).getFullYear()===this._year&&c.addClass("today"),c.appendTo(b),(e+1)%4===0&&(b.appendTo(a),b=$("<div/>").addClass("calendar-row")),e+=1;this._renderButtons(a),a.appendTo(this.element)},_renderYears:function(){var a,b,c,d,e;for(this.element.html(""),a=$("<div/>").addClass("calendar-grid"),this.options.condensedGrid&&a.addClass("condensed no-border"),b=$("<div/>").addClass("calendar-row cells4"),$("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(b),$("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>"+this._distance+"-"+(this._distance+11)+"</a>").appendTo(b),$("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(b),b.addClass("calendar-header").appendTo(a),b=$("<div/>").addClass("calendar-row"),e=0,d=this._distance;d<this._distance+12;d++)c=$("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='"+d+"'>"+d+"</a>"),(new Date).getFullYear()===d&&c.addClass("today"),c.appendTo(b),(e+1)%4===0&&(b.appendTo(a),b=$("<div/>").addClass("calendar-row")),e+=1;this._renderButtons(a),a.appendTo(this.element)},_renderCalendar:function(){switch(this._mode){case"year":this._renderYears();break;case"month":this._renderMonths();break;default:this._renderMonth()}this._initButtons()},_initButtons:function(){var that=this,o=this.options,table=this.element.find(".calendar-grid");"day"===this._mode?(table.find(".btn-select-month").on("click",function(a){a.preventDefault(),a.stopPropagation(),that._mode="month",that._renderCalendar()}),table.find(".btn-previous-month").on("click",function(a){that._event="eventPrevious",a.preventDefault(),a.stopPropagation(),that._month-=1,that._month<0&&(that._year-=1,that._month=11),that._renderCalendar()}),table.find(".btn-next-month").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._month+=1,12===that._month&&(that._year+=1,that._month=0),that._renderCalendar()}),table.find(".btn-previous-year").on("click",function(a){that._event="eventPrevious",a.preventDefault(),a.stopPropagation(),that._year-=1,that._renderCalendar()}),table.find(".btn-next-year").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._year+=1,that._renderCalendar()}),table.find(".day a").on("click",function(e){if(e.preventDefault(),e.stopPropagation(),$(this).parent().parent().hasClass("exclude"))return!1;var d=new Date(that._paddy(that._year,4),that._paddy(that._month,2),that._paddy(parseInt($(this).html()),2)).format(that.options.format,null),d0=new Date(that._paddy(that._year,4),that._paddy(that._month,2),that._paddy(parseInt($(this).html()),2));if(that.options.multiSelect?($(this).parent().parent().toggleClass("selected"),$(this).parent().parent().hasClass("selected")?that._addDate(that._dateStringyFy(d0)):that._removeDate(that._dateStringyFy(d0))):(table.find(".day a").parent().parent().removeClass("selected"),$(this).parent().parent().addClass("selected"),that.element.data("_storage",[]),that._addDate(that._dateStringyFy(d0))),"function"==typeof o.dayClick)o.dayClick(d,d0);else if("function"==typeof window[o.dayClick])window[o.dayClick](d,d0);else{var result=eval("(function(){"+o.dayClick+"})");result.call(d,d0)}})):"month"===this._mode?(table.find(".month a").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._month=parseInt($(this).data("month")),that._mode="day",that._renderCalendar()}),table.find(".btn-previous-year").on("click",function(a){that._event="eventPrevious",a.preventDefault(),a.stopPropagation(),that._year-=1,that._renderCalendar()}),table.find(".btn-next-year").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._year+=1,that._renderCalendar()}),table.find(".btn-select-year").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._mode="year",that._renderCalendar()})):(table.find(".year a").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._year=parseInt($(this).data("year")),that._mode="month",that._renderCalendar()}),table.find(".btn-previous-year").on("click",function(a){that._event="eventPrevious",a.preventDefault(),a.stopPropagation(),that._distance-=10,that._renderCalendar()}),table.find(".btn-next-year").on("click",function(a){that._event="eventNext",a.preventDefault(),a.stopPropagation(),that._distance+=10,that._renderCalendar()})),table.find(".calendar-btn-today").on("click",function(a){a.preventDefault(),a.stopPropagation(),that._mode=that.options.startMode,that.options.date=new Date,that._year=that.options.date.getFullYear(),that._month=that.options.date.getMonth(),that._day=that.options.date.getDate(),that._renderCalendar()}),table.find(".calendar-btn-clear").on("click",function(a){a.preventDefault(),a.stopPropagation(),that.options.date=new Date,that._year=that.options.date.getFullYear(),that._month=that.options.date.getMonth(),that._day=that.options.date.getDate(),that.element.data("_storage",[]),that._renderCalendar()})},_addDate:function(a){var b=this.element.data("_storage").indexOf(a);0>b&&this.element.data("_storage").push(a)},_removeDate:function(a){var b=this.element.data("_storage").indexOf(a);this.element.data("_storage").splice(b,1)},_addDateExclude:function(a){var b=this.element.data("_exclude").indexOf(a);0>b&&this.element.data("_exclude").push(a)},_addDateStored:function(a){var b=this.element.data("_stored").indexOf(a);0>b&&this.element.data("_stored").push(a)},_removeDateExclude:function(a){var b=this.element.data("_exclude").indexOf(a);this.element.data("_exclude").splice(b,1)},_removeDateStored:function(a){var b=this.element.data("_stored").indexOf(a);this.element.data("_stored").splice(b,1)},_paddy:function(a,b,c){var d="undefined"!=typeof c?c:"0",e=new Array(1+b).join(d);return(e+a).slice(-e.length)},_dateFromNumbers:function(a,b,c){return new Date(this._paddy(a,4)+"/"+this._paddy(b,2)+"/"+this._paddy(c,2))},_dateNumberStringyFy:function(a,b,c){return this._dateFromNumbers(a,b,c).format("yyyy-mm-dd")},_dateStringyFy:function(a){return this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate())},setDate:function(a){var b;a=new Date(a),b=this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate()),this._addDate(b),this.options.syncCalenderToDateField&&(this._year=a.getFullYear(),this._month=a.getMonth(),this._day=a.getDate()),this._renderCalendar()},setDateExclude:function(a){var b;a=new Date(a),b=this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate()),this._addDateExclude(b),this._renderCalendar()},setDateStored:function(a){var b;a=new Date(a),b=this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate()),this._addDateStored(b),this._renderCalendar()},getDate:function(a){return new Date(void 0!==a?this.element.data("_storage")[a]:this.element.data("_storage")[0]).format(this.options.format)},getDates:function(){var a;return a=$.merge($.merge([],this.element.data("_storage")),this.element.data("_stored")),a.unique()},unsetDate:function(a){var b;a=new Date(a),b=this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate()),this._removeDate(b),this._renderCalendar()},unsetDateExclude:function(a){var b;a=new Date(a),b=this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate()),this._removeDateExclude(b),this._renderCalendar()},unsetDateStored:function(a){var b;a=new Date(a),b=this._dateNumberStringyFy(a.getFullYear(),a.getMonth()+1,a.getDate()),this._removeDateStored(b),this._renderCalendar()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.carousel",{version:"3.0.0",options:{auto:!0,period:5e3,duration:1e3,effect:"slide",effectFunc:"linear",direction:"left",controls:!0,controlNext:!1,controlPrev:!1,markers:!0,stop:!0,width:"100%",height:!1,_slides:{},_currentIndex:0,_interval:0,_outPosition:0,_animating:!1},_create:function(){var a=this,b=this.options,c=this.element;$.each(c.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),b._slides=c.find(".slide");var d=0;$.each(b._slides,function(){var a,b=$(this);a=b.outerHeight(),a>d&&(d=a)}),c.css({width:b.width,height:b.height?b.height:d}),b._slides.length<=1||(b.markers&&this._markers(),b.controls&&this._controls(),b.stop&&c.on("mouseenter",function(){clearInterval(b._interval)}).on("mouseleave",function(){a.options.auto&&a._autoStart()}),c.find(".slide").hide(),c.find(".slide:nth-child(1)").show(),b.auto&&this._autoStart(),c.data("carousel",this))},_autoStart:function(){var a=this,b=this.options;b._interval=setInterval(function(){a._slideTo("left"===b.direction?"next":"prior")},b.period)},_slideTo:function(a){var b,c=this.element,d=this.options,e=d._slides[d._currentIndex];switch(void 0===a&&(a="next"),"prior"===a?(d._currentIndex-=1,d._currentIndex<0&&(d._currentIndex=d._slides.length-1),d._outPosition=this.element.width()):"next"===a&&(d._currentIndex+=1,d._currentIndex>=d._slides.length&&(d._currentIndex=0),d._outPosition=-this.element.width()),b=d._slides[d._currentIndex],this.options.effect){case"switch":this._effectSwitch(e,b);break;case"slowdown":this._effectSlowdown(e,b,this.options.duration);break;case"fade":this._effectFade(e,b,this.options.duration);break;default:this._effectSlide(e,b,this.options.duration)}c.find(".carousel-bullets a").each(function(){var a=$(this).data("num");a===d._currentIndex?$(this).addClass("bullet-on"):$(this).removeClass("bullet-on")})},_slideToSlide:function(a){var b=this.options,c=b._slides[b._currentIndex],d=b._slides[a];if(b._currentIndex===a)return!1;switch(b._outPosition=a>b._currentIndex?-this.element.width():this.element.width(),this.options.effect){case"switch":this._effectSwitch(c,d);break;case"slowdown":this._effectSlowdown(c,d);break;case"fade":this._effectFade(c,d);break;default:this._effectSlide(c,d)}b._currentIndex=a},_controls:function(){var a,b,c=this,d=this.element,e=this.options;a=$("<span/>").addClass("carousel-switch-next").html("&gt;"),b=$("<span/>").addClass("carousel-switch-prev").html("&lt;"),e.controlNext&&a.html(e.controlNext),e.controlPrev&&b.html(e.controlPrev),a.appendTo(d),b.appendTo(d),e._slides.length>1?(b.on("click",function(){e._animating===!1&&(c._slideTo("prior"),e._animating=!0,setTimeout(function(){e._animating=!1},e.duration))}),a.on("click",function(){e._animating===!1&&(c._slideTo("next"),e._animating=!0,setTimeout(function(){e._animating=!1},e.duration))})):(a.hide(),b.hide())},_markers:function(){var a,b,c,d=this,e=this.options;for(a=$('<div class="carousel-bullets" />'),c=0;c<e._slides.length;c++)b=$('<a class="carousel-bullet" href="javascript:void(0)" data-num="'+c+'"></a>'),0===c&&b.addClass("bullet-on"),b.appendTo(a);a.find("a").on("click",function(b){var c=$(this),f=c.data("num");return a.find("a").removeClass("bullet-on"),c.addClass("bullet-on"),f===e._currentIndex?!1:(d._slideToSlide(f),b.preventDefault(),void b.stopPropagation())}),a.appendTo(this.element)},_effectSwitch:function(a,b){$(a).hide(),$(b).css({left:0}).show(),this.element.css({height:$(b).outerHeight()})},_effectSlide:function(a,b){var c=this.options;$(a).animate({left:c._outPosition},c.duration,c.effectFunc),$(b).css("left",-1*c._outPosition).show(),this.element.css({height:$(b).outerHeight()}),$(b).animate({left:0},c.duration,c.effectFunc)},_effectSlowdown:function(a,b){var c=this.options,d={duration:c.duration,easing:"doubleSqrt"};$.easing.doubleSqrt=function(a){return Math.sqrt(Math.sqrt(a))},$(a).animate({left:c._outPosition},d),$(b).css("left",-1*c._outPosition).show(),this.element.css({height:$(b).outerHeight()}),$(b).animate({left:0},d)},_effectFade:function(a,b){var c=this.options;$(a).fadeOut(c.duration),$(b).css({left:0}).fadeIn(c.duration),this.element.css({height:$(b).outerHeight()})},slideTo:function(a){this._slideToSlide(a)},nextSlide:function(){this._slideTo("next")},priorSlide:function(){this._slideTo("prior")},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.charm",{version:"3.0.0",options:{position:"right",opacity:1,outside:!1,timeout:0,duration:400},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._createCharm(),a.data("charm",this)},_createCharm:function(){var a=this,b=this.element,c=this.options;b.addClass("charm").addClass(c.position+"-side").css({opacity:c.opacity}).hide();var d=$("<span/>").addClass("charm-closer").appendTo(b);d.on("click",function(){a.close()}),c.outside===!0&&b.on("mouseleave",function(){a.close()})},_showCharm:function(){var a,b=this,c=this.element,d=this.options;"left"===d.position||"right"===d.position?(a=c.outerWidth(),"left"===d.position?c.css({left:-a}).show().animate({left:0},d.duration):c.css({right:-a}).show().animate({right:0},d.duration)):(a=c.outerHeight(),"top"===d.position?c.css({top:-a}).show().animate({top:0},d.duration):c.css({bottom:-a}).show().animate({bottom:0},d.duration)),d.timeout>0&&(this._timeout_interval=setInterval(function(){c.is(":hover")||(b.close(),clearInterval(this._timeout_interval))},d.timeout))},_hideCharm:function(){var a,b=this.element,c=this.options;"left"===c.position||"right"===c.position?(a=b.outerWidth(),"left"===c.position?b.animate({left:-a},c.duration,function(){b.hide()}):b.animate({right:-a},c.duration,function(){b.hide()})):(a=b.outerHeight(),"top"===c.position?b.animate({top:-a},c.duration,function(){b.hide()}):b.animate({bottom:-a},c.duration,function(){b.hide()})),clearInterval(this._timeout_interval)},open:function(){{var a=this.element;this.options}a.data("opened")!==!0&&(a.data("opened",!0),this._showCharm())},close:function(){{var a=this.element;this.options}a.data("opened")!==!1&&(a.data("opened",!1),this._hideCharm())},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.clock",{version:"1.0.0",options:{format:"24",showSeconds:!0,showDate:!1,dateFormat:"american"},_create:function(){{var a=this.element;this.options}this._setOptionsFromDOM(),this._createClock(),a.data("clock",this)},_tick:function(){var a=this.element,b=this.options,c=new Date,d=c.getHours(),e=c.getMinutes(),f=c.getSeconds(),g=c.getDay(),h=c.getDate(),i=c.getMonth()+1,j=c.getFullYear(),k="";"12"==b.format&&(k=" AM",d>11&&(k=" PM"),d>12&&(d-=12),0==d&&(d=12)),d=this._leadZero(d),e=this._leadZero(e),f=this._leadZero(f),g=this._leadZero(h),i=this._leadZero(i);var l,m="";l="american"==b.dateFormat?j+"-"+i+"-"+g:g+"-"+i+"-"+j,b.showDate&&(m+=l),m+="<span></span> <span class='hour'>"+d+"</span>:<span class='minute'>"+e+"</span>",b.showSeconds&&(m+=":<span class='second'>"+f+"</span>"),m+="<span class='ap'>"+k+"</span>",a.html(m)},_leadZero:function(a){return 10>a?"0"+a:a},_createClock:function(){{var a=this,b=this.element;this.options}b.addClass("clock"),this._tick(),this._clockInterval=setInterval(function(){a._tick()},1e3)},_setOptionsFromDOM:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}})},_destroy:function(){clearInterval(this._clockInterval)},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.countdown",{version:"3.0.0",options:{stop:!1,days:!1,hours:!1,minutes:!1,seconds:!1,backgroundColor:"bg-cyan",digitColor:"fg-white",dividerColor:"fg-dark",labelColor:"fg-grayLight",labels:{days:"days",hours:"hours",minutes:"mins",seconds:"secs"},onTick:function(){},onStop:function(){}},_interval:0,_interval2:0,_alarmOn:void 0,_create:function(){var a=this,b=this.element,c=this.options;$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),this._alarmOn=new Date,c.stop!==!1&&(this._alarmOn=new Date(c.stop));var d=864e5,e=36e5,f=6e4,g=1e3;c.days!==!1&&("object"==typeof this._alarmOn&&(this._alarmOn=this._alarmOn.getTime()),this._alarmOn=this._alarmOn+c.days*d),c.hours!==!1&&("object"==typeof this._alarmOn&&(this._alarmOn=this._alarmOn.getTime()),this._alarmOn=this._alarmOn+c.hours*e),c.minutes!==!1&&("object"==typeof this._alarmOn&&(this._alarmOn=this._alarmOn.getTime()),this._alarmOn=this._alarmOn+c.minutes*f),c.seconds!==!1&&("object"==typeof this._alarmOn&&(this._alarmOn=this._alarmOn.getTime()),this._alarmOn=this._alarmOn+c.seconds*g),this._createDigits(),b.find(".digit").text("0"),a._tick(),b.data("countdown",this)},_createDigits:function(){var a,b,c=this.element,d=this.options,e=["days","hours","minutes","seconds"];e.map(function(e){a=$("<div/>").addClass("part "+e).attr("data-day-text",d.labels[e]).appendTo(c),$("<div/>").addClass("digit").appendTo(a),$("<div/>").addClass("digit").appendTo(a),d.labelColor.isColor()?a.css({color:d.labelColor}):a.addClass(d.labelColor),d.backgroundColor.isColor()?a.find(".digit").css({background:d.backgroundColor}):a.find(".digit").addClass(d.backgroundColor),d.digitColor.isColor()?a.find(".digit").css({color:d.digitColor}):a.find(".digit").addClass(d.digitColor),"seconds"!==e&&(b=$("<div/>").addClass("divider").text(":").appendTo(c),d.dividerColor.isColor()?b.css({color:d.dividerColor}):b.addClass(d.dividerColor))})},_blink:function(){this.element.toggleClass("tick")},_tick:function(){var that=this,o=this.options,element=this.element,days=86400,hours=3600,minutes=60,left,d,h,m,s;this._interval2=setInterval(function(){that._blink()},500),this._interval=setInterval(function(){var result;left=Math.floor((that._alarmOn-new Date)/1e3),0>left&&(left=0),d=Math.floor(left/days),left-=d*days,that._update("days",d),0===d&&element.find(".part.days").addClass("disabled"),h=Math.floor(left/hours),left-=h*hours,that._update("hours",h),0===d&&0===h&&element.find(".part.hours").addClass("disabled"),m=Math.floor(left/minutes),left-=m*minutes,that._update("minutes",m),0===d&&0===h&&0===m&&element.find(".part.minutes").addClass("disabled"),s=left,that._update("seconds",s),"function"==typeof o.onTick?o.onTick(d,h,m,s):"function"==typeof window[o.onTick]?window[o.onTick](d,h,m,s):(result=eval("(function(){"+o.onTick+"})"),result.call(d,h,m,s)),0===d&&0===h&&0===m&&0===s&&(element.find(".part").addClass("disabled"),"function"==typeof o.onStop?o.onStop():"function"==typeof window[o.onStop]?window[o.onStop]():(result=eval("(function(){"+o.onStop+"})"),result.call()),that._stop("all"),that._trigger("alarm"),clearInterval(that._interval))},1e3)},_update:function(a,b){var c,d,e=this.element,f=Math.floor(b/10)%10,g=b%10;c=e.find("."+a+" .digit:eq(0)"),d=e.find("."+a+" .digit:eq(1)"),g!==parseInt(d.text())&&(d.toggleClass("scaleIn"),setTimeout(function(){d.text(g).toggleClass("scaleIn")},500)),f!==parseInt(c.text())&&(c.toggleClass("scaleIn"),setTimeout(function(){c.text(f).toggleClass("scaleIn")},500))},_stop:function(){clearInterval(this._interval),clearInterval(this._interval2)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.datatable",{version:"3.0.0",options:{},_create:function(){var a=this.element,b=this.options;if($.each(a.data(),function(a,c){try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),$().dataTable)try{a.dataTable(b)}catch(c){}else alert("dataTable plugin required");a.data("datatable",this)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.datepicker",{version:"3.0.0",options:{format:"yyyy.mm.dd",preset:!1,minDate:!1,maxDate:!1,effect:"fade",position:"bottom",locale:window.METRO_CURRENT_LOCALE,weekStart:window.METRO_CALENDAR_WEEK_START,otherDays:!1,exclude:!1,stored:!1,buttons:!1,buttonToday:!0,buttonClear:!0,condensedGrid:!1,scheme:"default",onSelect:function(){}},_calendar:void 0,_create:function(){var a=this,b=this.element,c=this.options,d=b.children("input"),e=b.children("button");$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),this._createCalendar(),d.attr("readonly",!0),e.attr("type","button"),e.on("click",function(b){b.stopPropagation(),"none"===a._calendar.css("display")?a._show():a._hide()}),b.on("click",function(b){b.stopPropagation(),"none"===a._calendar.css("display")?a._show():a._hide()}),$("html").on("click",function(){$(".calendar-dropdown").hide()}),b.data("datepicker",this)},_createCalendar:function(){var _calendar,that=this,element=this.element,o=this.options;switch(_calendar=$("<div/>").css({position:"absolute",display:"none","max-width":220,"z-index":1e3}).addClass("calendar calendar-dropdown").appendTo(element),_calendar.calendar({multiSelect:!1,format:o.format,buttons:!1,buttonToday:!1,buttonClear:!1,locale:o.locale,otherDays:o.otherDays,weekStart:o.weekStart,condensedGrid:o.condensedGrid,exclude:o.exclude,stored:o.stored,date:o.preset?o.preset:new Date,minDate:o.minDate,maxDate:o.maxDate,scheme:o.scheme,dayClick:function(d,d0){if(_calendar.calendar("setDate",d0),that.element.children("input[type=text]").val(d),that.element.children("input[type=text]").trigger("change",d0),that.element.children("input[type=text]").blur(),that._hide(),"function"==typeof o.onSelect)o.onSelect(d,d0);else if("function"==typeof window[o.onSelect])window[o.onSelect](d,d0);else{var result=eval("(function(){"+o.onSelect+"})");result.call(d,d0)}}}),o.preset!==!1&&(_calendar.calendar("setDate",o.preset),element.find("input, .datepicker-output").val(_calendar.calendar("getDate"))),this.options.position){case"top":_calendar.css({top:0-_calendar.height(),left:0});break;default:_calendar.css({top:"100%",left:0})}this._calendar=_calendar},_show:function(){"slide"===this.options.effect?($(".calendar-dropdown").slideUp("fast"),this._calendar.slideDown("fast")):"fade"===this.options.effect?($(".calendar-dropdown").fadeOut("fast"),this._calendar.fadeIn("fast")):($(".calendar-dropdown").hide(),this._calendar.show())},_hide:function(){"slide"===this.options.effect?this._calendar.slideUp("fast"):"fade"===this.options.effect?this._calendar.fadeOut("fast"):this._calendar.hide()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.dialog",{version:"3.0.0",options:{modal:!1,overlay:!1,overlayColor:"default",type:"default",place:"center",position:"default",content:!1,hide:!1,width:"auto",height:"auto",background:"default",color:"default",closeButton:!1,windowsStyle:!1,show:!1,_interval:void 0,_overlay:void 0,onDialogOpen:function(){},onDialogClose:function(){}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),b.overlay&&this._createOverlay(),this._createDialog(),a.data("dialog",this),b.show&&this.open()},_createOverlay:function(){var a=(this.element,this.options),b=$("body").find(".dialog-overlay");0===b.length&&(b=$("<div/>").addClass("dialog-overlay")),a.overlayColor&&(a.overlayColor.isColor()?b.css({background:a.overlayColor}):b.addClass(a.overlayColor)),a._overlay=b},_createDialog:function(){var a=this,b=this.element,c=this.options;b.addClass("dialog"),"default"!==c.type&&b.addClass(c.type),c.windowsStyle&&(c.width="auto",b.css({left:0,right:0})),"default"!==c.background&&(c.background.isColor()?b.css({background:c.background}):b.addClass(c.background)),"default"!==c.color&&(c.color.isColor()?b.css({color:c.color}):b.addClass(c.color)),b.css({width:c.width,height:c.height}),c.closeButton&&$("<span/>").addClass("dialog-close-button").appendTo(b).on("click",function(){a.close()}),this._hide()},_hide:function(){var a=this.element;a.css({visibility:"hidden"})},_show:function(){var a=this.element;a.css({visibility:"visible"})},_setPosition:function(){var a=this.element,b=this.options,c=a.width(),d=a.height();a.css({left:b.windowsStyle===!1?($(window).width()-c)/2:0,top:($(window).height()-d)/2})},toggle:function(){var a=this.element;a.data("opened")?this.close():this.open()},open:function(){var that=this,element=this.element,o=this.options,overlay;if(this._setPosition(),element.data("opened",!0),o.overlay&&(overlay=o._overlay,overlay.appendTo("body").show()),this._show(),"function"==typeof o.onDialogOpen)o.onDialogOpen(element);else if("function"==typeof window[o.onDialogOpen])window[o.onDialogOpen](element);
else{var result=eval("(function(){"+o.onDialogOpen+"})");result.call(element)}o.hide&&parseInt(o.hide)>0&&(o._interval=setTimeout(function(){that.close()},parseInt(o.hide)))},close:function(){var that=this,element=this.element,o=this.options;if(clearInterval(o._interval),o.overlay&&$("body").find(".dialog-overlay").remove(),element.data("opened",!1),this._hide(),"function"==typeof o.onDialogClose)o.onDialogClose(element);else if("function"==typeof window[o.onDialogClose])window[o.onDialogClose](element);else{var result=eval("(function(){"+o.onDialogClose+"})");result.call(element)}},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.draggable",{version:"3.0.0",options:{dragElement:null,dragArea:null,onDragStart:function(){},onDragStop:function(){},onDragMove:function(){}},drag:!1,oldCursor:null,oldZindex:null,oldPosition:null,_create:function(){{var a=this.element;this.options}this._setOptionsFromDOM(),this._createDraggable(),a.data("draggable",this)},_createDraggable:function(){var that=this,element=this.element,o=this.options,dragElement=o.dragElement?element.find(o.dragElement):element;addTouchEvents(element[0]),dragElement.on("mousedown",function(e){var result,el=$(this);that.drag=!0,"function"==typeof o.onDragStart?o.onDragStart(element):"function"==typeof window[o.onDragStart]?window[o.onDragStart](element):(result=eval("(function(){"+o.onDragStart+"})"),result.call(element)),that.oldCursor=el.css("cursor")?el.css("cursor"):"default",that.oldZindex=element.css("z-index"),dragElement.css({cursor:"move"}),element.css({"z-index":"2000"});var dragArea=$(o.dragArea?o.dragArea:window),os={left:o.dragArea?dragArea.offset().left:0,top:o.dragArea?dragArea.offset().top:0},drg_h=element.outerHeight(),drg_w=element.outerWidth(),pos_y=element.offset().top+drg_h-e.pageY,pos_x=element.offset().left+drg_w-e.pageX;dragArea.on("mousemove",function(e){var offset,pageX,pageY;if(!that.drag)return!1;pageX=e.pageX-os.left,pageY=e.pageY-os.top;var t=pageY>0?pageY+pos_y-drg_h:0,l=pageX>0?pageX+pos_x-drg_w:0,t_delta=dragArea.innerHeight()+dragArea.scrollTop()-element.outerHeight(),l_delta=dragArea.innerWidth()+dragArea.scrollLeft()-element.outerWidth();t>=0&&t_delta>=t&&element.offset({top:t+os.top}),l>=0&&l_delta>=l&&element.offset({left:l+os.left}),offset={left:l,top:t},"function"==typeof o.onDragMove?o.onDragMove(element,offset):"function"==typeof window[o.onDragMove]?window[o.onDragMove](element,offset):(result=eval("(function(){"+o.onDragMove+"})"),result.call(element,offset))}),e.preventDefault()}),dragElement.on("mouseup",function(e){var result,el=$(this);that.drag=!1,dragElement.css({cursor:that.oldCursor}),element.css({"z-index":that.oldZindex,position:that.oldPosition}),"function"==typeof o.onDragStop?o.onDragStop(element):"function"==typeof window[o.onDragStop]?window[o.onDragStop](element):(result=eval("(function(){"+o.onDragStop+"})"),result.call(element)),e.preventDefault()})},_setOptionsFromDOM:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.dropdown",{version:"3.0.0",options:{effect:window.METRO_SHOW_TYPE,toggleElement:!1,noClose:!1,onDrop:function(){},onUp:function(){}},_create:function(){var a,b=this,c=this.element,d=this.options,e=this.element,f=this.name,g=this.element.parent();$.each(c.data(),function(a,b){if(a in d)try{d[a]=$.parseJSON(b)}catch(c){d[a]=b}}),a=d.toggleElement?$(d.toggleElement):g.children(g.children(".dropdown-toggle").length>0?".dropdown-toggle":"a:nth-child(1)"),void 0!==METRO_SHOW_TYPE&&(this.options.effect=METRO_SHOW_TYPE),a.on("click."+f,function(a){if(g.siblings(g[0].tagName).removeClass("active-container"),$(".active-container").removeClass("active-container"),"block"!==e.css("display")||e.hasClass("keep-open")){if($("[data-role=dropdown]").each(function(a,c){e.parents("[data-role=dropdown]").is(c)||$(c).hasClass("keep-open")||"block"!==$(c).css("display")||b._close(c)}),e.hasClass("horizontal")){e.css({visibility:"hidden",display:"block"});var c=$(e.children("li")[0]).outerWidth();e.css({visibility:"visible",display:"none"});var d=e.children("li").length*c+(e.children("li").length-1);e.css("width",d)}b._open(e),g.addClass("active-container")}else b._close(e);a.preventDefault(),a.stopPropagation()}),d.noClose===!0&&c.on("click",function(a){a.stopPropagation()}),$(e).find("li.disabled a").on("click",function(a){a.preventDefault()}),$(document).on("click",function(){$("[data-role=dropdown]").each(function(a,c){$(c).hasClass("keep-open")||"block"!==$(c).css("display")||b._close(c)})}),c.data("dropdown",this)},_open:function(el){var parent=this.element.parent(),o=this.options,toggle=o.toggleElement?$(o.toggleElement):parent.children(parent.children(".dropdown-toggle").length>0?".dropdown-toggle":"a:nth-child(1)");switch(this.options.effect){case"fade":$(el).fadeIn("fast");break;case"slide":$(el).slideDown("fast");break;default:$(el).show()}if(this._trigger("onOpen",null,el),toggle.addClass("active-toggle"),"function"==typeof o.onDrop)o.onDrop(el);else if("function"==typeof window[o.onDrop])window[o.onDrop](el);else{var result=eval("(function(){"+o.onDrop+"})");result.call(el)}},_close:function(el){var parent=$(el).parent(),o=this.options,toggle=o.toggleElement?$(o.toggleElement):parent.children(parent.children(".dropdown-toggle").length>0?".dropdown-toggle":"a:nth-child(1)");switch(this.options.effect){case"fade":$(el).fadeOut("fast");break;case"slide":$(el).slideUp("fast");break;default:$(el).hide()}if(this._trigger("onClose",null,el),toggle.removeClass("active-toggle"),"function"==typeof o.onUp)o.onUp(el);else if("function"==typeof window[o.onUp])window[o.onUp](el);else{var result=eval("(function(){"+o.onUp+"})");result.call(el)}},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.fitImage",{version:"3.0.0",options:{shadow:!1,overlay:!1,type:"default",frameColor:"default",format:"hd"},_create:function(){var a,b,c,d,e,f=this.element,g=this.options,h=f.parent(),i=f.attr("src");$.each(f.data(),function(a,b){if(a in g)try{g[a]=$.parseJSON(b)}catch(c){g[a]=b}}),$("<img/>").attr("src",i).load(function(){a=this.width,b=this.height}).remove();var j=$("<div/>").addClass("image-container").css("width","100%").appendTo(h),k=$("<div/>").addClass("frame").appendTo(j);switch(c=k.innerWidth(),d=k.innerHeight(),g.format){case"sd":d=3*c/4;break;case"square":d=c;break;case"cycle":d=c;break;case"fill-h":d="100%",j.css("height","100%");break;case"fill":d="100%",j.css("height","100%");break;default:d=9*c/16}if(e=$("<div/>").css({width:"100%",height:d,"background-image":"url("+i+")","background-size":"cover","background-repeat":"no-repeat","border-radius":"cycle"===g.format?"50%":"0"}),$(window).on("resize",function(){var a=k.innerWidth(),b=k.innerHeight();switch(g.format){case"sd":b=3*a/4;break;case"square":b=a;break;case"cycle":b=a;break;case"fill-h":b="100%",j.css("height","100%");break;case"fill":b="100%",j.css("height","100%");break;default:b=9*a/16}e.css({height:b})}),"default"!==g.frameColor&&(g.frameColor.isUrl()?k.css("background-color",g.frameColor):k.addClass(g.frameColor)),g.overlay!==!1){$("<div/>").addClass("image-overlay").html(g.overlay).appendTo(j)}switch(g.shadow!==!1&&j.addClass("block-shadow"),e.appendTo(k),g.type){case"diamond":j.addClass("diamond"),e.addClass("image-replacer");break;case"bordered":j.addClass("bordered");break;case"polaroid":j.addClass("polaroid");break;case"handing":j.addClass("handing");break;case"handing-ani":j.addClass("handing ani");break;case"handing-ani-hover":j.addClass("handing ani-hover")}j.addClass("image-format-"+g.format),f.remove()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.fluentmenu",{version:"3.0.0",options:{onSpecialClick:function(){},onTabClick:function(){},onTabChange:function(){}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._createMenu(),a.data("fluentmenu",this)},_createMenu:function(){var that=this,element=this.element,o=this.options,active_tab=$(element.find(".tabs-holder > li.active")[0]);this.openTab(active_tab),element.on("click",".tabs-holder > li > a",function(e){var a=$(this),li=a.parent("li"),result;if(li.hasClass("special"))"function"==typeof o.onSpecialClick?o.onSpecialClick(a,li):"function"==typeof window[o.onSpecialClick]?window[o.onSpecialClick](a,li):(result=eval("(function(){"+o.onSpecialClick+"})"),result.call(a,li));else{var panel=$(a.attr("href"));that._hidePanels(),that._showPanel(panel),element.find(".tabs-holder > li").removeClass("active"),a.parent("li").addClass("active"),"function"==typeof o.onTabClick?o.onTabClick(a,li):"function"==typeof window[o.onTabClick]?window[o.onTabClick](a,li):(result=eval("(function(){"+o.onTabClick+"})"),result.call(a,li)),"function"==typeof o.onTabChange?o.onTabChange(a,li):"function"==typeof window[o.onTabChange]?window[o.onTabChange](a,li):(result=eval("(function(){"+o.onTabChange+"})"),result.call(a,li))}e.preventDefault()})},_hidePanels:function(){this.element.find(".tab-panel").hide()},_showPanel:function(a){void 0==a&&(a=this.element.find(".tabs-holder li.active a").attr("href")),$(a).show()},openTab:function(a){var b=this.element,c=(this.options,$(a.children("a").attr("href")));return 0===c.length?!1:(this._hidePanels(),this._showPanel(c),b.find(".tabs-holder > li").removeClass("active"),void a.addClass("active"))},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.grid",{version:"3.0.0",options:{equalHeight:!0},_create:function(){var a=this,b=this.element,c=this.options;$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),c.equalHeight&&(setTimeout(function(){a._setEqualHeight()},50),$(window).on("resize",function(){a._setEqualHeight()})),b.data("grid",this)},_setEqualHeight:function(){var a=this.element,b=(this.options,a.find(".row"));$.each(b,function(){var a=$(this),b=a.children(".cell"),c=0;b.css("min-height","0"),$.each(b,function(){$(this).outerHeight()>c&&(c=$(this).outerHeight())}),b.css("min-height",c)})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.hint",{version:"3.0.0",options:{hintPosition:"auto",hintBackground:"#FFFCC0",hintColor:"#000000",hintMaxSize:200,hintMode:"default",hintShadow:!1,hintBorder:!0,hintTimeout:0,hintTimeDelay:0,_hint:void 0},_create:function(){var a=this,b=(this.element,this.options);this.element.on("mouseenter",function(c){$(".hint, .hint2").remove(),b.hintTimeDelay>0?setTimeout(function(){a.createHint(),b._hint.show()},b.hintTimeDelay):(a.createHint(),b._hint.show()),c.preventDefault()}),this.element.on("mouseleave",function(a){b._hint.length&&b._hint.hide().remove(),a.preventDefault()})},createHint:function(){var a,b=this.element,c=b.data("hint").split("|"),d=this.options;if($.each(b.data(),function(a,b){if(a in d)try{d[a]=$.parseJSON(b)}catch(c){d[a]=b}}),"TD"===b[0].tagName||"TH"===b[0].tagName){var e=$("<div/>").css("display","inline-block").html(b.html());b.html(e),b=e}var f=c.length>1?c[0]:!1,g=c.length>1?c[1]:c[0];a=$("<div/>").appendTo("body"),a.addClass(2===d.hintMode?"hint2":"hint"),d.hintBorder||a.addClass("no-border"),f&&$("<div/>").addClass("hint-title").html(f).appendTo(a),$("<div/>").addClass("hint-text").html(g).appendTo(a),a.addClass(d.position),d.hintShadow&&a.addClass("shadow"),d.hintBackground&&(d.hintBackground.isColor()?a.css("background-color",d.hintBackground):a.addClass(d.hintBackground)),d.hintColor&&(d.hintColor.isColor()?a.css("color",d.hintColor):a.addClass(d.hintColor)),d.hintMaxSize>0&&a.css({"max-width":d.hintMaxSize}),"top"===d.hintPosition?(a.addClass("top"),a.css({top:b.offset().top-$(window).scrollTop()-a.outerHeight()-20,left:2===d.hintMode?b.offset().left+b.outerWidth()/2-a.outerWidth()/2-$(window).scrollLeft():b.offset().left-$(window).scrollLeft()})):"right"===d.hintPosition?(a.addClass("right"),a.css({top:2===d.hintMode?b.offset().top+b.outerHeight()/2-a.outerHeight()/2-$(window).scrollTop()-10:b.offset().top-10-$(window).scrollTop(),left:b.offset().left+b.outerWidth()+15-$(window).scrollLeft()})):"left"===d.hintPosition?(a.addClass("left"),a.css({top:2===d.hintMode?b.offset().top+b.outerHeight()/2-a.outerHeight()/2-$(window).scrollTop()-10:b.offset().top-10-$(window).scrollTop(),left:b.offset().left-a.outerWidth()-10-$(window).scrollLeft()})):(a.addClass("bottom"),a.css({top:b.offset().top-$(window).scrollTop()+b.outerHeight(),left:2===d.hintMode?b.offset().left+b.outerWidth()/2-a.outerWidth()/2-$(window).scrollLeft():b.offset().left-$(window).scrollLeft()})),d._hint=a,d.hintTimeout>0&&setTimeout(function(){d._hint.length&&d._hint.hide().remove()},d.hintTimeout)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.input",{version:"3.0.0",options:{showLabelOnValue:!1},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),a.hasClass("file")&&this._createInputFile(),a.hasClass("text")&&this._createInputText(),a.hasClass("password")&&this._createInputText(),a.hasClass("select")&&this._createInputSelect(),a.hasClass("textarea")&&this._createInputTextarea(),a.hasClass("modern")&&this._createInputModern(),a.data("input",this)},_createInputModern:function(){var a=this.element,b=a.find("input"),c=a.find(".placeholder");""!==b.val()&&c.css({display:"none"}),b.on("blur",function(){c.css(""!==b.val()?{display:"none"}:{display:"block"})}),b.on("focus",function(){c.css(""!==b.val()?{display:"none"}:{display:"block"})})},_createInputFile:function(){var a,b,c,d=this.element;a=$("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>"),b=d.children(".button"),c=d.children('input[type="file"]'),c.css("z-index",0),a.insertAfter(c),c.attr("tabindex","-1"),b.attr("type","button"),a.attr("placeholder",c.attr("placeholder")),c.on("change",function(){var b=$(this).val();""!==b&&(a.val(b.replace(/.+[\\\/]/,"")),a.attr("title",b.replace(/.+[\\\/]/,"")))}),d.on("click",".button, .input-file-wrapper",function(){c.trigger("click")})},_createInputText:function(){var a=this.element,b=a.find(".helper-button.clear"),c=a.find(".helper-button.reveal"),d=a.find("input"),e=a.find(".helper-button"),f=a.find(".button"),g=a.find(".input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required"),h=0,i="rtl"===a.attr("dir")||a.parents("[dir='rtl']").length>0;$.each(f,function(){var a=$(this);h+=a.outerWidth()}),i?(d.css({"padding-left":h+5}),g.css({left:h+8})):(d.css({"padding-right":h+5}),g.css({right:h+8})),e.attr("tabindex",-1).attr("type","button"),b&&b.on("click",function(){d.val("").trigger("change").focus()}),c&&a.hasClass("password")&&c.on("mousedown",function(){d.attr("type","text")}).on("mouseup",function(){d.attr("type","password").focus()})},_createInputSelect:function(){},_createInputTextarea:function(){},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.keypad",{version:"3.0.0",options:{target:!1,shuffle:!1,length:!1,keys:["1","2","3","4","5","6","7","8","9","0"],onKey:function(){},onChange:function(){}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),"string"==typeof b.keys&&(b.keys=b.keys.split(",")),b.target!==!1&&(b.target=$(b.target)),this._createKeypad(),a.data("keypad",this)},_shuffleKeys:function(){var a=(this.element,this.options),b=a.keys.slice(0),c=this._keypad,d=b.length+2;a.shuffle&&(b=b.shuffle()),c.html("").css({width:d/4*32+2*(d/4+1)+2}),b.map(function(a){$("<div/>").addClass("key").html(a).data("key",a).appendTo(c)}),$("<div/>").addClass("key").html("&larr;").data("key","&larr;").appendTo(c),$("<div/>").addClass("key").html("&times;").data("key","&times;").appendTo(c)},_createKeypad:function(){var that=this,element=this.element,o=this.options,keypad;element.hasClass("input-control")?(keypad=$("<div/>").addClass("keypad keypad-dropdown").css({position:"absolute","z-index":1e3,display:"none"}).appendTo(element),o.target=element.find("input"),element.on("click",function(a){"none"===keypad.css("display")?keypad.show():keypad.hide();var b=$(".keypad.keypad-dropdown");$.each(b,function(){$(this).is(keypad)||$(this).hide()}),a.stopPropagation()}),$("html").on("click",function(){$(".keypad.keypad-dropdown").hide()})):(keypad=element,keypad.addClass("keypad")),o.target!==!1&&$(o.target).attr("readonly",!0),"dropdown"===keypad.parent().data("role")&&keypad.parent().css({top:"100%"}),this._keypad=keypad,this._shuffleKeys(),keypad.on("click",".key",function(e){var key=$(this),result;if(o.target){if("&larr;"!==key.data("key")&&"&times;"!==key.data("key")){if(o.length&&$(o.target).val().length===o.length)return!1;$(o.target).val($(o.target).val()+""+key.data("key"))}else if("&times;"===key.data("key")&&$(o.target).val(""),"&larr;"===key.data("key")){var val=$(o.target).val();$(o.target).val(val.substring(0,val.length-1))}o.target.trigger("change")}"function"==typeof o.onKey?o.onKey(key):"function"==typeof window[o.onKey]?window[o.onKey](key):(result=eval("(function(){"+o.onKey+"})"),result.call(key)),"function"==typeof o.onChange?o.onChange(o.target.val()):"function"==typeof window[o.onChange]?window[o.onChange](o.target.val()):(result=eval("(function(){"+o.onChange+"})"),result.call({value:o.target.val()})),o.shuffle&&that._shuffleKeys(),e.preventDefault(),e.stopPropagation()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.listview",{version:"3.0.0",options:{onExpand:function(){},onCollapse:function(){},onActivate:function(){},onListClick:function(){}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._initList(),this._createEvents(),a.data("listview",this)},_initList:function(){var a=this.element,b=(this.options,a.find(".list-group"));$.each(b,function(){var a=$(this);a.hasClass("collapsed")&&a.find(".list-group-content").hide()})},_createEvents:function(){var that=this,element=this.element,o=this.options;element.on("click",".list-group-toggle",function(e){var toggle=$(this),parent=toggle.parent(),result;toggle.parent().hasClass("keep-open")||(parent.toggleClass("collapsed"),parent.hasClass("collapsed")?(toggle.siblings(".list-group-content").slideUp("fast"),"function"==typeof o.onCollapse?o.onCollapse(parent):"function"==typeof window[o.onCollapse]?window[o.onCollapse](parent):(result=eval("(function(){"+o.onCollapse+"})"),result.call(parent))):(toggle.siblings(".list-group-content").slideDown("fast"),"function"==typeof o.onExpand?o.onExpand(parent):"function"==typeof window[o.onExpand]?window[o.onExpand](parent):(result=eval("(function(){"+o.onExpand+"})"),result.call(parent))),e.preventDefault(),e.stopPropagation())}),element.on("click",".list",function(e){var list=$(this),result;element.find(".list").removeClass("active"),list.addClass("active"),"function"==typeof o.onActivate?o.onActivate(list):"function"==typeof window[o.onActivate]?window[o.onActivate](list):(result=eval("(function(){"+o.onActivate+"})"),result.call(list)),"function"==typeof o.onListClick?o.onListClick(list):"function"==typeof window[o.onListClick]?window[o.onListClick](list):(result=eval("(function(){"+o.onListClick+"})"),result.call(list)),e.preventDefault(),e.stopPropagation()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}});var _notify_container=!1,_notifies=[],Notify={_container:null,_notify:null,_timer:null,version:"3.0.0",options:{icon:"",caption:"",content:"",shadow:!0,width:"auto",height:"auto",style:!1,position:"right",timeout:3e3,keepOpen:!1,type:"default"},init:function(a){return this.options=$.extend({},this.options,a),this._build(),this},_build:function(){var a=this,b=this.options;if(this._container=_notify_container||$("<div/>").addClass("notify-container").appendTo("body"),_notify_container=this._container,""===b.content||void 0===b.content)return!1;if(this._notify=$("<div/>").addClass("notify"),"default"!==b.type&&this._notify.addClass(b.type),b.shadow&&this._notify.addClass("shadow"),b.style&&void 0!==b.style.background&&this._notify.css("background-color",b.style.background),b.style&&void 0!==b.style.color&&this._notify.css("color",b.style.color),""!==b.icon){$(b.icon).addClass("notify-icon").appendTo(this._notify)}""!==b.caption&&void 0!==b.caption&&$("<div/>").addClass("notify-title").html(b.caption).appendTo(this._notify),""!==b.content&&void 0!==b.content&&$("<div/>").addClass("notify-text").html(b.content).appendTo(this._notify);var c=$("<span/>").addClass("notify-closer").appendTo(this._notify);c.on("click",function(){a.close(0)}),"auto"!==b.width&&this._notify.css("min-width",b.width),"auto"!==b.height&&this._notify.css("min-height",b.height),this._notify.hide().appendTo(this._container).fadeIn("slow"),_notifies.push(this._notify),b.keepOpen||this.close(b.timeout)},close:function(a){var b=this;return void 0===a?this._hide():(setTimeout(function(){b._hide()},a),this)},_hide:function(){var a=this;return void 0!==this._notify?(this._notify.fadeOut("slow",function(){$(this).remove(),_notifies.splice(_notifies.indexOf(a._notify),1)}),this):!1},closeAll:function(){return _notifies.forEach(function(a){a.hide("slow",function(){a.remove(),_notifies.splice(_notifies.indexOf(a),1)})}),this}};return $.Notify=function(a){return Object.create(Notify).init(a)},$.Notify.show=function(a,b,c){return $.Notify({content:a,caption:b,icon:c})},$.widget("metro.panel",{version:"3.0.0",options:{onExpand:function(){},onCollapse:function(){}},_create:function(){var element=this.element,o=this.options;if($.each(element.data(),function(a,b){if(a in o)try{o[a]=$.parseJSON(b)}catch(c){o[a]=b}}),element.hasClass("collapsible")||element.addClass("collapsible"),element.hasClass("collapsible")){var toggle=element.children(".heading"),content=element.children(".content");toggle.on("click",function(){var result;element.hasClass("collapsed")?content.slideDown("fast",function(){element.removeClass("collapsed"),"function"==typeof o.onExpand?o.onExpand(element):"function"==typeof window[o.onExpand]?window[o.onExpand](element):(result=eval("(function(){"+o.onExpand+"})"),result.call(element))}):content.slideUp("fast",function(){element.addClass("collapsed"),"function"==typeof o.onCollapse?o.onCollapse(element):"function"==typeof window[o.onCollapse]?window[o.onCollapse](element):(result=eval("(function(){"+o.onCollapse+"})"),result.call(element))})})}element.data("panel",this)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.widget",{version:"1.0.0",options:{someValue:null},_create:function(){{var a=this.element;this.options}this._setOptionsFromDOM(),a.data("widget",this)},_setOptionsFromDOM:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.popover",{version:"3.0.0",options:{popoverText:"",popoverTimeout:3e3,popoverPosition:"top",popoverBackground:"bg-cyan",popoverColor:"fg-white",popoverMode:"none",popoverShadow:!0,onPopup:function(){}},popover:{},_create:function(){var a=this.element;this.createPopover(),a.data("popover",this)},createPopover:function(){var a,b=this,c=this.options;a=this.element,$.each(a.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}});var d,e;switch(d=$("<div/>").addClass("popover").appendTo("body").hide(),$("<div/>").appendTo(d),c.popoverShadow&&d.addClass("popover-shadow"),c.popoverBackground&&("#"===c.popoverBackground[0]?d.css("background-color",c.popoverBackground):d.addClass(c.popoverBackground)),c.popoverColor&&("#"===c.popoverColor[0]?d.css("color",c.popoverColor):d.addClass(c.popoverColor)),c.popoverPosition){case"left":e="marker-on-right";break;case"right":e="marker-on-left";break;case"bottom":e="marker-on-top";break;default:e="marker-on-bottom"}d.css({position:"fixed"}),d.addClass(e),this.popover=d,this.setText(c.popoverText),a.on(c.popoverMode,function(){d.data("visible")||b.show()}),$(window).scroll(function(){b.popover.data("visible")&&b.setPosition()})},setPosition:function(){var a=this.options,b=this.popover,c=this.element;return"top"===a.popoverPosition?b.css({top:c.offset().top-$(window).scrollTop()-b.outerHeight()-10,left:c.offset().left+c.outerWidth()/2-b.outerWidth()/2-$(window).scrollLeft()}):"bottom"===a.popoverPosition?b.css({top:c.offset().top-$(window).scrollTop()+c.outerHeight()+10,left:c.offset().left+c.outerWidth()/2-b.outerWidth()/2-$(window).scrollLeft()}):"right"===a.popoverPosition?b.css({top:c.offset().top+c.outerHeight()/2-b.outerHeight()/2-$(window).scrollTop(),left:c.offset().left+c.outerWidth()-$(window).scrollLeft()+10}):"left"===a.popoverPosition&&b.css({top:c.offset().top+c.outerHeight()/2-b.outerHeight()/2-$(window).scrollTop(),left:c.offset().left-b.outerWidth()-$(window).scrollLeft()-10}),this},setText:function(a){this.popover.children("div").html(a)},show:function(){var o=this.options,popover=this.popover;this.setPosition(),popover.fadeIn(function(){if(popover.data("visible",!0),"function"==typeof o.onPopup)o.onPopup(popover);else if("function"==typeof window[o.onPopup])window[o.onPopup](popover);else{var result=eval("(function(){"+o.onPopup+"})");result.call(popover)}setTimeout(function(){popover.fadeOut(function(){popover.data("visible",!1)})},o.popoverTimeout)})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.preloader",{version:"3.0.0",options:{type:"ring",style:"light"},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._createStructure(),a.data("preloader",this)},_createRing:function(){{var a,b,c,d=this.element;this.options}for(a=0;5>a;a++)b=$("<div/>").addClass("wrap").appendTo(d),c=$("<div/>").addClass("circle").appendTo(b)},_createMetro:function(){{var a,b,c=this.element;this.options}for(a=0;5>a;a++)b=$("<div/>").addClass("circle").appendTo(c)},_createSquare:function(){{var a,b,c=this.element;this.options}for(a=0;4>a;a++)b=$("<div/>").addClass("square").appendTo(c)},_createCycle:function(){{var a,b=this.element;this.options}a=$("<div/>").addClass("cycle").appendTo(b)},_createStructure:function(){var a=this.element,b=this.options;switch(a.addClass("preloader-"+b.type),"light"!==b.style&&a.addClass(b.style+"-style"),a.html(""),b.type){case"ring":this._createRing();break;case"metro":this._createMetro();break;case"square":this._createSquare();break;case"cycle":this._createCycle()}},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.presenter",{version:"3.0.0",options:{height:"200",width:"100%",effect:"random",duration:1e3,timeout:2e3,sceneTimeout:2e3,easing:"swing"},_acts:void 0,_currentAct:0,_actDone:!0,_interval:void 0,_effects:["top","bottom","left","right"],_actor_positions:[],_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._createPresenter(),this._showScene(),a.data("presenter",this)},_createPresenter:function(){var a=this.element,b=this.options,c=a.find(".act");c.hide(),this._acts=c,a.css({height:b.height,width:b.width})},_showScene:function(){{var a=this;this.element,this.options}this._interval=setInterval(function(){a._actDone&&(a._currentAct++,a._currentAct==a._acts.length&&(a._currentAct=0),a._showAct())},500)},_closeAct:function(){var a=this,b=(this.element,this.options),c=this._currentAct;setTimeout(function(){void 0!==a._acts[c]&&$(a._acts[c]).fadeOut(1e3,function(){a._actDone=!0})},b.sceneTimeout)},_showAct:function(){var a,b=this,c=this.element,d=this.options,e=$(this._acts[this._currentAct]),f=e.find(".actor");this._actDone=!1,e.fadeIn(1e3),f.css({opacity:0,position:"absolute",display:"none"}),a=0,$.each(f,function(){var e,g,h,i,j=$(this),k={top:j.data("position").split(",")[0],left:j.data("position").split(",")[1]};e=void 0!==j.data("effect")?j.data("effect"):d.effect,"random"===e&&(e=b._effects[Math.floor(Math.random()*b._effects.length)]),g=void 0!==j.data("duration")?j.data("duration"):d.duration,h=void 0!==j.data("timeout")?j.data("timeout"):d.timeout,i=void 0!==j.data("easing")?j.data("easing"):d.easing,"top"===e?setTimeout(function(){j.css({top:-c.height(),left:k.left,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function(){j[0]==f[f.length-1]&&b._closeAct()})},a*h):"bottom"===e?setTimeout(function(){j.css({top:c.height(),left:k.left,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function(){j[0]==f[f.length-1]&&b._closeAct()})},a*h):"left"===e?setTimeout(function(){j.css({left:-c.width(),top:k.top,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function(){j[0]==f[f.length-1]&&b._closeAct()})},a*h):"right"===e?setTimeout(function(){j.css({left:c.width(),top:k.top,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function(){j[0]==f[f.length-1]&&b._closeAct()})},a*h):setTimeout(function(){j.css({top:k.top,left:k.left,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,"swing",function(){j[0]==f[f.length-1]&&b._closeAct()})},a*h),a++})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.progress",{version:"3.0.0",options:{color:"default",colors:!1,value:0,animate:!1,onProgress:function(){}},colorsDim:{},_create:function(){var a=this,b=this.element,c=this.options,d=b.children(".bar:last-child");if(b.hasClass("progress")||b.addClass("progress"),$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),0===d.length&&(d=$("<div/>").addClass("bar").appendTo(b)),c.colors){var e=0;$.each(c.colors,function(b,c){a.colorsDim[b]=[e,c],e=c+1})}this.set(c.value),this.color(c.color),b.data("progress",this)},color:function(a){var b=this.element,c=this.options,d=b.children(".bar:last-child"),e=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);e?d.css({"background-color":a}):d.removeClass(function(a,b){return(b.match(/(^|\s)bg-\S+/g)||[]).join(" ")}).addClass(a),c.color=a},set:function(value){if(void 0===value)return this.options.value;var element=this.element,o=this.options,colors=this.colorsDim,bar=element.children(".bar:last-child"),that=this,gradient=[];if(!(parseInt(value)<0))if(o.colors&&$.each(colors,function(a,b){return value>=b[0]&&value<=b[1]?(that.color(a),!0):void 0}),o.value=value,o.animate!==!1){var ani_speed=isNaN(o.animate)?500:o.animate;bar.animate({width:o.value+"%"},ani_speed,function(){if("function"==typeof o.onProgress)o.onProgress(value);else if("function"==typeof window[o.onProgress])window[o.onProgress](value);else{var result=eval("(function(){"+o.onProgress+"})");result.call(value)}})}else if(bar.css({width:o.value+"%"}),"function"==typeof o.onProgress)o.onProgress(value);else if("function"==typeof window[o.onProgress])window[o.onProgress](value);else{var result=eval("(function(){"+o.onProgress+"})");result.call(value)}},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.rating",{version:"3.0.0",options:{stars:5,value:0,half:!0,"static":!1,showScore:!0,scoreTitle:"Current: ",size:"default",colorRate:!1,onRate:function(){return!0},onRated:function(){}},_value:0,_values:[],_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._value=parseFloat(b.value),this._values[0]=Math.ceil(1*b.stars/3),this._values[1]=Math.ceil(2*b.stars/3),this._values[2]=b.stars,
this._createRating(),this._createEvents(),this._setValue(this._value),this._setScore(this._value),a.data("rating",this)},_createRating:function(){var a,b,c,d=this.element,e=this.options;switch(d.hasClass("rating")||d.addClass("rating"),e.size){case"small":d.addClass("small");break;case"large":d.addClass("large")}for(e["static"]&&d.addClass("static"),a=0;a<e.stars;a++)b=$("<span/>").addClass("star").appendTo(d).data("star-value",a+1);e.showScore&&(c=$("<span/>").addClass("score").appendTo(d))},_createEvents:function(){var that=this,element=this.element,o=this.options,stars;stars=element.find(".star"),stars.on("click",function(e){if(o["static"]||element.hasClass("static")||element.data("static"))return!1;var result,value=$(this).data("star-value"),star=this,rating=that;if("function"==typeof o.onRate){if(!o.onRate(value,star,rating))return!1}else if("function"==typeof window[o.onRate]){if(!window[o.onRate](value,star,rating))return!1}else if(result=eval("(function(){"+o.onRate+"})"),!result.call(value,star,rating))return!1;"function"==typeof o.onRated?o.onRated(value,star,rating):"function"==typeof window[o.onRated]?window[o.onRated](value,star,rating):(result=eval("(function(){"+o.onRated+"})"),result.call(value,star,rating)),that._value=$(this).data("star-value"),that._setValue(),that._setScore(),e.preventDefault(),e.stopPropagation()})},_setValue:function(){var a,b=this.options,c=this.element;if(b.stars){a=c.find(".star").removeClass("on half");var d=Math.floor(this._value)-1,e=10*(this._value-Math.floor(this._value))>0;$(a[d]).addClass("on"),$(a[d]).prevAll().addClass("on"),e&&$(a[d]).next().addClass("on half")}b.colorRate&&(c.removeClass("poor regular good"),this._value<=this._values[0]?c.addClass("poor"):this._value>this._values[0]&&this._value<=this._values[1]?c.addClass("regular"):this._value>this._values[1]&&c.addClass("good"))},_setScore:function(){var a=this._value,b=this.element,c=this.options;void 0!==a&&b.find(".score").html(c.scoreTitle+a)},value:function(a){return void 0===a?this._value:(this._value=a,this._setValue(),this._setScore(),void 0)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.select",{version:"3.0.0",options:{},_create:function(){var a=this.element,b=this.options,c=["templateResult","templateSelection","matcher","initSelection","query"];if($.each(a.data(),function(a,c){try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),c.map(function(a){void 0!==b[a]&&(b[a]=window[b[a]])}),void 0!==b.dropdownParent&&(b.dropdownParent=$(b.dropdownParent)),$().select2)try{a.find("select").select2(b)}catch(d){}else console.log("You are trying to use support for Select2, but the plugin is not found!");a.data("select",this)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.slider",{version:"3.0.0",options:{position:0,accuracy:0,color:"default",completeColor:"default",markerColor:"default",colors:!1,showHint:!1,permanentHint:!1,hintPosition:"top",vertical:!1,min:0,max:100,animate:!0,minValue:0,maxValue:100,currValue:0,returnType:"value",target:!1,onChange:function(){},_slider:{vertical:!1,offset:0,length:0,marker:0,ppp:0,start:0,stop:0}},_create:function(){var a=this,b=this.element,c=this.options,d=c._slider;$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),c.accuracy=c.accuracy<0?0:c.accuracy,c.min=c.min<0?0:c.min,c.min=c.min>c.max?c.max:c.min,c.max=c.max>100?100:c.max,c.max=c.max<c.min?c.min:c.max,c.position=this._correctValue(b.data("position")>c.min?b.data("position")>c.max?c.max:b.data("position"):c.min),c.colors=c.colors?c.colors.split(","):!1,d.vertical=c.vertical,c.vertical&&!b.hasClass("vertical")&&b.addClass("vertical"),c.permanentHint&&!b.hasClass("permanent-hint")&&b.addClass("permanent-hint"),c.vertical||"bottom"!==c.hintPosition||b.addClass("hint-bottom"),c.vertical&&"left"===c.hintPosition&&b.addClass("hint-left"),this._createSlider(),this._initPoints(),this._placeMarker(c.position);var e=isTouchDevice()?"touchstart":"mousedown";b.children(".marker").on(e,function(b){b.preventDefault(),a._startMoveMarker(b)}),b.on(e,function(b){b.preventDefault(),a._startMoveMarker(b)}),b.data("slider",this)},_startMoveMarker:function(a){var b,c=this.element,d=this.options,e=this,f=c.children(".slider-hint"),g=isTouchDevice()?"touchmove":"mousemove",h=isTouchDevice()?"touchend":"mouseup mouseleave";$(c).on(g,function(a){e._movingMarker(a),c.hasClass("permanent-hint")||f.css("display","block")}),$(c).on(h,function(){$(c).off("mousemove"),$(c).off("mouseup"),c.data("value",d.position),c.trigger("changed",d.position),b="value"===d.returnType?e._valueToRealValue(d.position):d.position,c.hasClass("permanent-hint")||f.css("display","none")}),this._initPoints(),this._movingMarker(a)},_movingMarker:function(ev){var element=this.element,o=this.options,cursorPos,percents,valuePix,vertical=o._slider.vertical,sliderOffset=o._slider.offset,sliderStart=o._slider.start,sliderEnd=o._slider.stop,sliderLength=o._slider.length,markerSize=o._slider.marker,event=isTouchDevice()?ev.originalEvent.touches[0]:ev.originalEvent;cursorPos=vertical?event.pageY-sliderOffset:event.pageX-sliderOffset,sliderStart>cursorPos?cursorPos=sliderStart:cursorPos>sliderEnd&&(cursorPos=sliderEnd),valuePix=vertical?sliderLength-cursorPos-markerSize/2:cursorPos-markerSize/2,percents=this._pixToPerc(valuePix),this._placeMarker(percents),o.currValue=this._valueToRealValue(percents),o.position=percents;var returnedValue="value"===o.returnType?this._valueToRealValue(o.position):o.position;if(o.target&&$(o.target).val(returnedValue),"function"==typeof o.onChange)o.onChange(returnedValue,element);else if("function"==typeof window[o.onChange])window[o.onChange](returnedValue,element);else{var result=eval("(function(){"+o.onChange+"})");result.call(returnedValue,element)}},_placeMarker:function(a){var b,c,d,e,f,g=this.options,h=0,i=this.element,j=this.element.children(".marker"),k=this.element.children(".complete"),l=this.element.children(".slider-hint"),m=this._percToPix(g.position);if(d=g.colors.length,e=g._slider.length/d,g._slider.vertical){var n=this._percToPix(g.position)+g._slider.marker,o=g._slider.length-n;b=this._percToPix(a)+g._slider.marker,c=g._slider.length-b,this._animate(j.css("top",o),{top:c}),this._animate(k.css("height",n),{height:b}),d&&(h=Math.round(b/e)-1,k.css("background-color",g.colors[0>h?0:h])),g.showHint&&(f=this._valueToRealValue(a),l.html(f).css("top",c-l.height()/2+(i.hasClass("large")?8:0)))}else b=this._percToPix(a),this._animate(j.css("left",m),{left:b}),this._animate(k.css("width",m),{width:b}),d&&(h=Math.round(b/e)-1,k.css("background-color",g.colors[0>h?0:h])),g.showHint&&(f=this._valueToRealValue(a),l.html(f).css({left:b-l.width()/2+(i.hasClass("large")?6:0)}))},_valueToRealValue:function(a){var b,c=this.options,d=(c.maxValue-c.minValue)/100;return b=a*d+c.minValue,Math.round(b)},_animate:function(a,b){var c=this.options;c.animate?a.stop(!0).animate(b):a.css(b)},_pixToPerc:function(a){var b;return b=a*this.options._slider.ppp,Math.round(this._correctValue(b))},_percToPix:function(a){return 0===this.options._slider.ppp?0:Math.round(a/this.options._slider.ppp)},_correctValue:function(a){var b=this.options,c=b.accuracy,d=b.max,e=b.min;return 0===c?a:a===d?d:a===e?e:(a=Math.floor(a/c)*c+Math.round(a%c/c)*c,a>d?d:e>a?e:a)},_initPoints:function(){var a=this.options,b=a._slider,c=this.element;b.vertical?(b.offset=c.offset().top,b.length=c.height(),b.marker=c.children(".marker").height()):(b.offset=c.offset().left,b.length=c.width(),b.marker=c.children(".marker").width()),b.ppp=a.max/(b.length-b.marker),b.start=b.marker/2,b.stop=b.length-b.marker/2},_createSlider:function(){var a,b,c,d=this.element,e=this.options;d.html(""),a=$("<div/>").addClass("complete").appendTo(d),b=$("<a/>").addClass("marker").appendTo(d),e.showHint&&(c=$("<span/>").addClass("slider-hint").appendTo(d)),"default"!==e.color&&(e.color.isColor()?d.css("background-color",e.color):d.addClass(e.color)),"default"!==e.completeColor&&(e.completeColor.isColor()?a.css("background-color",e.completeColor):a.addClass(e.completeColor)),"default"!==e.markerColor&&(e.markerColor.isColor()?b.css("background-color",e.markerColor):b.addClass(e.markerColor))},value:function(value){var element=this.element,o=this.options,returnedValue;if("undefined"!=typeof value){if(value=value>o.max?o.max:value,value=value<o.min?o.min:value,this._placeMarker(parseInt(value)),o.position=parseInt(value),returnedValue="value"===o.returnType?this._valueToRealValue(o.position):o.position,o.target&&$(o.target).val(returnedValue),"function"==typeof o.onChange)o.onChange(returnedValue,element);else if("function"==typeof window[o.onChange])window[o.onChange](returnedValue,element);else{var result=eval("(function(){"+o.onChange+"})");result.call(returnedValue,element)}return this}return returnedValue="value"===o.returnType?this._valueToRealValue(o.position):o.position},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.stepper",{version:"3.0.0",options:{steps:3,start:1,type:"default",clickable:!0,onStep:function(){},onStepClick:function(){}},_create:function(){var a=this.element,b=this.options,c=a.attr("id");$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),a.hasClass("stepper")||a.addClass("stepper"),void 0===c&&(c=window.uniqueId(this.widgetName+"_"),a.attr("id",c)),this._createStepper(),b.clickable&&this._createEvents(),this._positioningSteps(),this._stepTo(b.start),a.data("stepper",this)},_createEvents:function(){var that=this,element=this.element,o=this.options;element.on("click","li",function(e){var step=$(this).data("step");if("function"==typeof o.onStepClick)o.onStepClick(step-1,step);else if("function"==typeof window[o.onStepClick])window[o.onStepClick](step-1,step);else{var result=eval("(function(){"+o.onStepClick+"})");result.call(step-1,step)}element.trigger("stepclick",step)})},_createStepper:function(){var a,b,c,d=this.element,e=this.options;switch(b=$("<ul/>"),e.type){case"diamond":d.addClass("diamond");break;case"cycle":d.addClass("cycle")}for(a=0;a<e.steps;a++)c=$("<li/>").data("step",a+1).appendTo(b);b.appendTo(d)},_positioningSteps:function(){var a=this.element,b=(this.options,a.find("li")),c=a.width(),d=b.length-1,e=$(b[0]).width();$.each(b,function(a,b){var f=0===a?0:(c-e)/d*a;console.log(c),$(b).animate({left:f})})},_stepTo:function(step){var element=this.element,o=this.options,steps=element.find("li");steps.removeClass("current").removeClass("complete"),$.each(steps,function(i,s){if(step-1>i&&$(s).addClass("complete"),i===step-1)if($(s).addClass("current"),"function"==typeof o.onStep)o.onStep(i+1,s);else if("function"==typeof window[o.onStep])window[o.onStep](i+1,s);else{var result=eval("(function(){"+o.onStep+"})");result.call(i+1,s)}})},stepTo:function(a){this._stepTo(a)},first:function(){var a=this.options;a.start=1,this._stepTo(a.start)},last:function(){var a=this.element,b=this.options,c=a.find("li");b.start=c.length,this._stepTo(b.start)},next:function(){var a=this.element,b=this.options,c=a.find("li");b.start+1>c.length||(b.start++,this._stepTo(b.start))},prior:function(){var a=this.options;a.start-1!==0&&(a.start--,this._stepTo(a.start))},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.streamer",{version:"3.0.0",options:{scrollBar:!1,meterStart:9,meterStop:19,meterInterval:20,slideToTime:"default",slideSleep:1e3,slideSpeed:1e3,onClick:function(){}},_create:function(){var a=this.element,b=this.options,c=a.find(".stream"),d=a.find(".event"),e=a.find(".events"),f=a.find(".events-area"),g=a.find(".event-group"),h=a.find(".event-stream");$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),a.data("streamSelect",-1);var i,j,k,l=$("<ul/>").addClass("meter"),m=b.meterStart,n=b.meterStop,o=b.meterInterval,p=[];for(i=m;n>i;i++)for(j=0;60>j;j+=o)k=(10>i?"0"+i:i)+":"+(10>j?"0"+j:j),$("<li/>").addClass("js-interval-"+k.replace(":","-")).html("<em>"+k+"</em>").appendTo(l),p.push(k);a.data("intervals",p),l.insertBefore(a.find(".events-grid")),a.find(".event-stream").each(function(a,b){var d=0,e=$(b).find(".event");e.each(function(a,b){d+=$(b).outerWidth()+parseInt($(b).css("margin-left"))}),$(b).css({width:d+2*(e.length-1)+1}),$(b).find(".time").css("background-color",$(c[a]).css("background-color"))}),e.css({"overflow-x":b.scrollBar?"scroll":"hidden"}),a.css({height:a.find(".streams").outerHeight()+(b.scrollBar?20:0)});var q=0;g.each(function(a,b){q+=$(b).outerWidth()}),q+=2*(g.length-1)+10,f.css("width",q),d.each(function(a,b){addTouchEvents(b)}),a.mousewheel(function(a,b){var c=50*b;return e.scrollLeft(e.scrollLeft()-c),!1}),c.each(function(b,c){$(c).mousedown(function(){a.data("streamSelect")==b?(d.removeClass("event-disable"),a.data("streamSelect",-1)):(a.data("streamSelect",b),d.addClass("event-disable"),$(h[b]).find(".event").removeClass("event-disable"))})}),this._createEvents(),this.slideToTime(b.slideToTime,b.slideSleep,b.slideSpeed),a.data("streamer",this)},_createEvents:function(){var that=this,element=this.element,o=this.options,events=element.find(".event");events.on("click",function(e){var event=$(this);if(e.ctrlKey&&$(this).toggleClass("selected"),"function"==typeof o.onClick)o.onClick(event);else if("function"==typeof window[o.onClick])window[o.onClick](event);else{var result=eval("(function(){"+o.onClick+"})");result.call(event)}e.preventDefault()}),element.find(".js-go-previous-time").on("click",function(){var a=element.data("intervals").indexOf(element.data("current-time"));if(0!=a){a--;var b=element.data("intervals")[a];that.slideToTime(b,0,o.slideSpeed)}}),element.find(".js-go-next-time").on("click",function(){var a=element.data("intervals").indexOf(element.data("current-time"));if(a!=element.data("intervals").length-1){a++;var b=element.data("intervals")[a];that.slideToTime(b,0,o.slideSpeed)}}),element.find(".js-show-all-streams").on("click",function(a){element.find(".event").removeClass("event-disable"),element.data("streamSelect",-1),a.preventDefault()}),element.find(".js-schedule-mode").on("click",function(a){$(this).toggleClass("active"),element.data("schedule-mode",$(this).hasClass("inverse")),a.preventDefault()})},slideToTime:function(a,b,c){var d,e,f=this,g=this.element;"default"===a?(d=g.find(".meter li")[0],a=d.className.replace("js-interval-","").replace("-",":")):(e=a.split(":"),1===e[0].length&&(a="0"+a)),d=g.find(".meter li.js-interval-"+a.replace(":","-"))[0],setTimeout(function(){g.find(".events").animate({scrollLeft:d.offsetLeft-$(".streams").width()},c,function(){f._afterSlide()})},b),g.data("current-time",a)},_afterSlide:function(){},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.tabcontrol",{version:"3.0.0",options:{openTarget:!1,saveState:!1,onTabClick:function(){return!0},onTabChange:function(){},_current:{tab:!1,frame:!1}},_create:function(){{var a,b,c,d=this.element,e=this.options,f=d.children(".tabs").find("li").children("a");d.children(".frames").children("div")}if($.each(d.data(),function(a,b){if(a in e)try{e[a]=$.parseJSON(b)}catch(c){e[a]=b}}),e.saveState&&void 0!==d.attr("id")&&""!==d.attr("id").trim()){var g=window.localStorage.getItem(d.attr("id")+"-stored-tab");g&&"undefined"!==g&&(a=d.find("a[href='"+g+"']"),a&&(b=a.attr("href"),c=b&&b.isUrl()?!1:$(b),e._current.tab=a,e._current.frame=c))}if(e._current.tab||e.openTarget===!1||(a=d.find("a[href='"+e.openTarget+"']"),a&&(b=a.attr("href"),c=b&&b.isUrl()?!1:$(b),e._current.tab=a,e._current.frame=c)),e._current.tab||$.each(f,function(a,b){var c=$(b),d=c.attr("href"),f=d.isUrl()?!1:$(d);c.parent().hasClass("active")&&!c.parent().hasClass("disabled")&&f!==!1&&(e._current.tab=c,e._current.frame=f)}),!e._current.tab)for(var h=0;h<f.length;h++)if(!$(f[h]).attr("href").isUrl()&&!$(f[h]).parent().hasClass("disabled")){e._current.tab=$(f[h]),e._current.frame=$($(f[h]).attr("href"));break}this._createEvents(),this._openTab(),d.data("tabcontrol",this)},_hideTabs:function(){var a=this.element,b=a.outerWidth(),c=a.children(".tabs").find("li:not(.non-visible-tabs)"),d=a.children(".tabs").find(".non-visible-tabs").children(".d-menu");$.each(c,function(){var a=$(this),c=this;if(c.offsetLeft+c.offsetWidth+30>b){var e=a.clone(!0);e.appendTo(d),a.remove()}})},_openTab:function(){var a=this.element,b=this.options,c=a.children(".tabs").find("li").children("a"),d=a.children(".frames").children("div");c.parent().removeClass("active"),d.hide(),b._current.tab.parent().addClass("active"),b._current.frame.show(),b.saveState&&void 0!==a.attr("id")&&""!==a.attr("id").trim()&&window.localStorage.setItem(a.attr("id")+"-stored-tab",b._current.tab.attr("href"))},_createEvents:function(){var that=this,element=this.element,o=this.options,tabs=element.children(".tabs").find("li").children("a"),frames=element.children(".frames").children("div");element.on("click",".tabs > li > a",function(e){var result,tab=$(this),target=tab.attr("href"),frame=$(target);if(tab.parent().hasClass("disabled"))return!1;if("function"==typeof o.onTabClick){if(!o.onTabClick(tab))return!1}else if("function"==typeof window[o.onTabClick]){if(!window[o.onTabClick](tab))return!1}else if(result=eval("(function(){"+o.onTabClick+"})"),!result.call(tab))return!1;return target.isUrl()?(window.location.href=target,!0):(o._current.tab=tab,o._current.frame=frame,that._openTab(),"function"==typeof o.onTabChange?o.onTabChange(tab):"function"==typeof window[o.onTabChange]?window[o.onTabChange](tab):(result=eval("(function(){"+o.onTabChange+"})"),result.call(tab)),e.preventDefault(),void e.stopPropagation())})},hideTab:function(){},showTab:function(){},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.tile",{version:"3.0.0",options:{effect:"slideLeft",period:4e3,duration:700,easing:"doubleSqrt",onClick:function(){}},_frames:{},_currentIndex:0,_interval:0,_outPosition:0,_size:{},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._createTransformTile(),this._createLiveTile(),this._createEvents(),a.data("tile",this)},_createEvents:function(){var that=this,element=this.element,o=this.options,event=isTouchDevice()?"touchstart":"click";element.on(event,function(e){if("A"===element[0].tagName);else if("function"==typeof o.onClick)o.onClick(element);else if("function"==typeof window[o.onClick])window[o.onClick](element);else{var result=eval("(function(){"+o.onClick+"})");result.call(element)}})},_createLiveTile:function(){var a=this,b=this.element,c=(this.options,isTouchDevice()?"touchstart":"mouseenter"),d=isTouchDevice()?"touchend":"mouseleave";return this._frames=b.find(".live-slide"),this._frames.length<=1?!1:($.easing.doubleSqrt=function(a){return Math.sqrt(Math.sqrt(a))},this._size={width:b.width(),height:b.height()},b.on(c,function(){a.stop()}),b.on(d,function(){a.start()}),void this.start())},start:function(){var a=this;this._interval=setInterval(function(){a._animate()},this.options.period)},stop:function(){clearInterval(this._interval)},_animate:function(){var a,b=this._frames[this._currentIndex];switch(this._currentIndex+=1,this._currentIndex>=this._frames.length&&(this._currentIndex=0),a=this._frames[this._currentIndex],this.options.effect){case"slideLeft":this._effectSlideLeft(b,a);break;case"slideRight":this._effectSlideRight(b,a);break;case"slideDown":this._effectSlideDown(b,a);break;case"slideUpDown":this._effectSlideUpDown(b,a);break;case"slideLeftRight":this._effectSlideLeftRight(b,a);break;default:this._effectSlideUp(b,a)}},_effectSlideLeftRight:function(a,b){this._currentIndex%2===0?this._effectSlideLeft(a,b):this._effectSlideRight(a,b)},_effectSlideUpDown:function(a,b){this._currentIndex%2===0?this._effectSlideUp(a,b):this._effectSlideDown(a,b)},_effectSlideUp:function(a,b){var c=this._size.height,d={duration:this.options.duration,easing:this.options.easing};$(a).animate({top:-c},d),$(b).css({top:c}).show().animate({top:0},d)},_effectSlideDown:function(a,b){var c=this._size.height,d={duration:this.options.duration,easing:this.options.easing};$(a).animate({top:c},d),$(b).css({top:-c}).show().animate({top:0},d)},_effectSlideLeft:function(a,b){var c=this._size.width,d={duration:this.options.duration,easing:this.options.easing};$(a).animate({left:-1*c},d),$(b).css({left:c}).show().animate({left:0},d)},_effectSlideRight:function(a,b){var c=this._size.width,d={duration:this.options.duration,easing:this.options.easing};$(a).animate({left:c},d),$(b).css({left:-c}).show().animate({left:0},d)},_createTransformTile:function(){var a=this.element,b=(this.options,{w:a.width(),h:a.height()}),c=isTouchDevice()?"touchstart":"mousedown",d=isTouchDevice()?"touchend":"mouseup",e=isTouchDevice()?"touchend":"mouseleave";a.on(c,function(c){var d=c.pageX-$(this).offset().left,e=c.pageY-$(this).offset().top,f="top";d<1*b.w/3&&(e<1*b.h/2||e>1*b.h/2)?f="left":d>2*b.w/3&&(e<1*b.h/2||e>1*b.h/2)?f="right":d>1*b.w/3&&d<2*b.w/3&&e>b.h/2&&(f="bottom"),$(this).addClass("tile-transform-"+f),"A"===a[0].tagName&&a.attr("href")&&setTimeout(function(){document.location.href=a.attr("href")},500)}),a.on(d,function(){$(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")}),a.on(e,function(){$(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.treeview",{version:"3.0.0",options:{doubleClick:!0,onClick:function(){},onInputClick:function(){},onExpand:function(){},onCollapse:function(){}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._initTree(),this._createEvents(),a.data("treeview",this)},_createCheckbox:function(a,b){var c,d,e;c=$("<label/>").addClass("input-control checkbox small-check").insertBefore(a),d=$("<input/>").attr("type","checkbox").appendTo(c),e=$("<span/>").addClass("check").appendTo(c),void 0!==b.data("name")&&d.attr("name",b.data("name")),void 0!==b.data("id")&&d.attr("id",b.data("id")),void 0!==b.data("checked")&&d.prop("checked",b.data("checked")),void 0!==b.data("readonly")&&d.prop("disabled",b.data("readonly")),void 0!==b.data("disabled")&&(d.prop("disabled",b.data("disabled")),b.data("disabled")===!0&&b.addClass("disabled")),void 0!==b.data("value")&&d.val(b.data("value"))},_createRadio:function(a,b){var c,d,e;c=$("<label/>").addClass("input-control radio small-check").insertBefore(a),d=$("<input/>").attr("type","radio").appendTo(c),e=$("<span/>").addClass("check").appendTo(c),void 0!==b.data("name")&&d.attr("name",b.data("name")),void 0!==b.data("id")&&d.attr("id",b.data("id")),void 0!==b.data("checked")&&d.prop("checked",b.data("checked")),void 0!==b.data("readonly")&&d.prop("disabled",b.data("readonly")),void 0!==b.data("disabled")&&(d.prop("disabled",b.data("disabled")),b.data("disabled")===!0&&b.addClass("disabled")),void 0!==b.data("value")&&d.val(b.data("value"))},_initTree:function(){var a=this,b=this.element,c=(this.options,b.find(".leaf"));$.each(c,function(){{var b=$(this),c=b.parent("li"),d=b.siblings("ul");$(b.parents(".node")[0])}"checkbox"===c.data("mode")&&a._createCheckbox(b,c),"radio"===c.data("mode")&&a._createRadio(b,c),d.length>0&&(c.hasClass("node")||c.addClass("node")),c.hasClass("collapsed")&&d.hide()})},_renderChecks:function(a){var b=this.element,c=(this.options,a.is(":checked")),d=$(a.parent().parent()),e=d.children("ul").find('[type="checkbox"]');e.prop("checked",c).removeClass("indeterminate"),$.each(b.find(".node[data-mode=checkbox]").reverse(),function(){var a=$(this),b=a.children(".input-control").find('[type="checkbox"]'),c=a.children("ul").find('[type="checkbox"]'),d=a.children("ul").find('[type="checkbox"]:checked');b.removeClass("indeterminate"),0===d.length?(b.prop("checked",!1),b.removeClass("indeterminate")):d.length>0&&c.length>d.length&&(b.prop("checked",!0),b.addClass("indeterminate"))})},_createEvents:function(){var that=this,element=this.element,o=this.options;element.on("change","input:checkbox",function(){that._renderChecks($(this))}),element.on("click","input",function(){var leaf=$(this),node=$(leaf.parents(".node")[0]),parent=leaf.parent("li"),check=leaf.siblings(".input-control").find("input:checkbox"),radio=leaf.siblings(".input-control").find("input:radio"),new_check_state,check_disabled;if(check.length>0&&(new_check_state=!check.is(":checked"),check_disabled=check.is(":disabled"),check_disabled||check.prop("checked",new_check_state),that._renderChecks(check)),radio.length>0&&(check_disabled=radio.is(":disabled"),check_disabled||radio.prop("checked",!0)),"function"==typeof o.onInputClick)o.onInputClick(leaf,parent,node,that);else if("function"==typeof window[o.onInputClick])window[o.onInputClick](leaf,parent,node,that);else{var result=eval("(function(){"+o.onInputClick+"})");result.call(leaf,parent,node,that)}}),element.on("click",".leaf",function(){var leaf=$(this),node=$(leaf.parents(".node")[0]),parent=leaf.parent("li");if(element.find(".leaf").parent("li").removeClass("active"),parent.addClass("active"),"function"==typeof o.onClick)o.onClick(leaf,parent,node,that);else if("function"==typeof window[o.onClick])window[o.onClick](leaf,parent,node,that);else{var result=eval("(function(){"+o.onClick+"})");result.call(leaf,parent,node,that)}}),o.doubleClick&&element.on("dblclick",".leaf",function(e){var leaf=$(this),parent=leaf.parent("li"),node=$(leaf.parents(".node")[0]),result;return parent.hasClass("keep-open")?!1:(parent.toggleClass("collapsed"),parent.hasClass("collapsed")?(parent.children("ul").fadeOut("fast"),"function"==typeof o.onCollapse?o.onCollapse(parent,leaf,node,that):"function"==typeof window[o.onCollapse]?window[o.onCollapse](parent,leaf,node,that):(result=eval("(function(){"+o.onCollapse+"})"),result.call(parent,leaf,node,that))):(parent.children("ul").fadeIn("fast"),"function"==typeof o.onExpand?o.onExpand(parent,leaf,node,that):"function"==typeof window[o.onExpand]?window[o.onExpand](parent,leaf,node,that):(result=eval("(function(){"+o.onExpand+"})"),result.call(parent,leaf,node,that))),e.stopPropagation(),void e.preventDefault())}),element.on("click",".node-toggle",function(e){var leaf=$(this).siblings(".leaf"),parent=$(this).parent("li"),node=$(leaf.parents(".node")[0]),result;return parent.hasClass("keep-open")?!1:(parent.toggleClass("collapsed"),parent.hasClass("collapsed")?(parent.children("ul").fadeOut("fast"),"function"==typeof o.onCollapse?o.onCollapse(parent,leaf,node,that):"function"==typeof window[o.onCollapse]?window[o.onCollapse](parent,leaf,node,that):(result=eval("(function(){"+o.onCollapse+"})"),result.call(parent,leaf,node,that))):(parent.children("ul").fadeIn("fast"),"function"==typeof o.onExpand?o.onExpand(parent,leaf,node,that):"function"==typeof window[o.onExpand]?window[o.onExpand](parent,leaf,node,that):(result=eval("(function(){"+o.onExpand+"})"),result.call(parent,leaf,node,that))),e.stopPropagation(),void e.preventDefault())})},addLeaf:function(a,b,c){var d,e,f,g=this.element;if(a&&("LI"===a[0].tagName&&a.addClass("node"),0===a.children(".node-toggle").length&&$("<span/>").addClass("node-toggle").appendTo(a)),f=a?$(a).children("ul"):g.children("ul"),0===f.length&&(f=$("<ul/>").appendTo(a?a:g)),e=$("<li/>").appendTo(f),d=void 0!==c&&void 0!==c.tagName?$("<"+c.tagName+"/>").addClass("leaf").appendTo(e):$("<span/>").addClass("leaf").appendTo(e),d.html(b),void 0!==c&&($.each(c,function(a,b){e.attr("data-"+a,b)}),void 0!==c.mode))switch(c.mode){case"checkbox":this._createCheckbox(d,e);break;case"radio":this._createRadio(d,e)}return this},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.validator",{version:"1.0.0",options:{showErrorState:!0,showErrorHint:!0,showRequiredState:!0,showSuccessState:!0,hintSize:0,hintBackground:"#FFFCC0",hintColor:"#000000",hideError:2e3,hideHint:5e3,hintEasing:"easeInQuad",hintEasingTime:400,hintMode:"hint",hintPosition:"right",focusInput:!0,onBeforeSubmit:function(){return!0},onErrorInput:function(){},onSubmit:function(){return!0}},_scroll:0,funcs:{required:function(a){return""!==a.trim()},minlength:function(a,b){return void 0==b||isNaN(b)||0>=b?!1:a.trim().length>=b},maxlength:function(a,b){return void 0==b||isNaN(b)||0>=b?!1:a.trim().length<=b},min:function(a,b){return void 0==b||isNaN(b)?!1:""===a.trim()?!1:isNaN(a)?!1:a>=b},max:function(a,b){return void 0==b||isNaN(b)?!1:""===a.trim()?!1:isNaN(a)?!1:b>=a},email:function(a){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a)},url:function(a){return/^(?:[a-z]+:)?\/\//i.test(a)},date:function(a){return!("Invalid Date"===new Date(a)||isNaN(new Date(a)))},number:function(a){return a-0==a&&(""+a).trim().length>0},digits:function(a){return/^\d+$/.test(a)},hexcolor:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},pattern:function(a,b){if(void 0==b)return!1;var c=new RegExp(b);return c.test(a)}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),"line"!==b.hintMode&&(b.hintMode="hint2"),this._scroll=$(window).scrollTop(),this._createValidator(),a.data("validator",this)},_createValidator:function(){var a=this,b=this.element,c=this.options,d=b.find("[data-validate-func]");b.attr("novalidate","novalidate"),c.showRequiredState&&$.each(d,function(){var a=$(this);a.parent().hasClass("input-control")?a.parent().addClass("required"):a.addClass("required")}),d.on("focus",function(){}),$(window).scroll(function(){var a=$(this).scrollTop(),b=isNaN(a-this._scroll)?0:a-this._scroll;$(".validator-hint.hint2").css({top:"-="+b}),this._scroll=a}),b[0].onsubmit?(this._onsubmit=b[0].onsubmit,b[0].onsubmit=null):this._onsubmit=null,b[0].onsubmit=function(){return a._submit()}},_submit:function(){var that=this,element=this.element,o=this.options,inputs=element.find("[data-validate-func]"),submit=element.find(":submit").attr("disabled","disabled").addClass("disabled"),result=0;if($(".validator-hint").hide(),inputs.removeClass("error success"),$.each(inputs,function(a,b){var c=$(b);c.parent().hasClass("input-control")&&c.parent().removeClass("error success")}),$.each(inputs,function(i,v){var input=$(v),func=input.data("validateFunc"),arg=input.data("validateArg"),this_result=that.funcs[func](input.val(),arg);this_result||("function"==typeof o.onErrorInput?o.onErrorInput(input):"function"==typeof window[o.onErrorInput]?window[o.onErrorInput](input):(result=eval("(function(){"+o.onErrorInput+"})"),result.call(input))),!this_result&&o.showErrorState&&that._showError(input),!this_result&&o.showErrorHint&&setTimeout(function(){that._showErrorHint(input)},100*i),this_result&&o.showSuccessState&&that._showSuccess(input),!this_result&&0==i&&o.focusInput&&input.focus(),result+=this_result?0:1}),"function"==typeof o.onBeforeSubmit)result+=o.onBeforeSubmit(element,result)?0:1;else if("function"==typeof window[o.onBeforeSubmit])result+=window[o.onBeforeSubmit](element,result)?1:0;else{var f0=eval("(function(){"+o.onBeforeSubmit+"})");result+=f0.call(element,result)?1:0}if(0!==result)return submit.removeAttr("disabled").removeClass("disabled"),!1;if("function"==typeof o.onSubmit)result=o.onSubmit(element[0]);else if("function"==typeof window[o.onSubmit])result=window[o.onSubmit](element[0]);else{var f=eval("(function(){"+o.onSubmit+"})");result=f.call(element[0])}return submit.removeAttr("disabled").removeClass("disabled"),result},_showSuccess:function(a){a.parent().hasClass("input-control")?a.parent().addClass("success"):a.addClass("success")},_showError:function(a){var b=this.options;a.parent().hasClass("input-control")?a.parent().addClass("error"):a.addClass("error"),
b.hideError&&b.hideError>0&&setTimeout(function(){a.parent().removeClass("error")},b.hideError)},_showErrorHint:function(a){var b,c,d,e=this.options,f=a.data("validateHint"),g=a.data("validateHintPosition")||e.hintPosition,h=a.data("validateHintMode")||e.hintMode,i=a.data("validateHintBackground")||e.hintBackground,j=a.data("validateHintColor")||e.hintColor;return void 0===f?!1:(b=$("<div/>").addClass(h+" validator-hint"),b.html(void 0!==f?this._format(f,a.val()):""),b.css({"min-width":e.hintSize}),i.isColor()?b.css("background-color",i):b.addClass(i),j.isColor()?b.css("color",j):b.addClass(j),void("line"===h?(b.addClass("hint2").addClass("line"),b.css({position:"relative",width:a.parent().hasClass("input-control")?a.parent().width():a.width(),"z-index":100}),b.appendTo(a.parent()),b.fadeIn(e.hintEasingTime,function(){setTimeout(function(){b.hide().remove()},e.hideHint)})):(b.appendTo("body"),"right"===g?(d=a.offset().left+a.outerWidth()+15-$(window).scrollLeft(),c=a.offset().top+a.outerHeight()/2-b.outerHeight()/2-$(window).scrollTop()-10,b.addClass(g),b.css({top:c,left:$(window).width()+100}),b.show().animate({left:d},e.hintEasingTime,e.hintEasing,function(){setTimeout(function(){b.hide().remove()},e.hideHint)})):"left"===g?(d=a.offset().left-b.outerWidth()-10-$(window).scrollLeft(),c=a.offset().top+a.outerHeight()/2-b.outerHeight()/2-$(window).scrollTop()-10,b.addClass(g),b.css({top:c,left:-a.offset().left-b.outerWidth()-10}),b.show().animate({left:d},e.hintEasingTime,e.hintEasing,function(){setTimeout(function(){b.hide().remove()},e.hideHint)})):"top"===g?(d=a.offset().left+a.outerWidth()/2-b.outerWidth()/2-$(window).scrollLeft(),c=a.offset().top-$(window).scrollTop()-b.outerHeight()-20,b.addClass(g),b.css({top:-b.outerHeight(),left:d}).show().animate({top:c},e.hintEasingTime,e.hintEasing,function(){setTimeout(function(){b.hide().remove()},e.hideHint)})):(d=a.offset().left+a.outerWidth()/2-b.outerWidth()/2-$(window).scrollLeft(),c=a.offset().top-$(window).scrollTop()+a.outerHeight(),b.addClass(g),b.css({top:$(window).height(),left:d}).show().animate({top:c},e.hintEasingTime,e.hintEasing,function(){setTimeout(function(){b.hide().remove()},e.hideHint)})))))},_format:function(a,b){return 1===arguments.length?function(){var b=$.makeArray(arguments);return b.unshift(a),$.validator.format.apply(this,b)}:(arguments.length>2&&b.constructor!==Array&&(b=$.makeArray(arguments).slice(1)),b.constructor!==Array&&(b=[b]),$.each(b,function(b,c){a=a.replace(new RegExp("\\{"+b+"\\}","g"),function(){return c})}),a)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.window",{version:"3.0.0",options:{parent:"default",captionStyle:!1,contentStyle:!1,buttons:{btnMin:!1,btnMax:!1,btnClose:!1},title:!1,content:!1,icon:!1,type:"default",size:!1,onBtnMinClick:function(a){a.preventDefault()},onBtnMaxClick:function(a){a.preventDefault()},onBtnCloseClick:function(a){a.preventDefault()},onShow:function(a){a.preventDefault()},onHide:function(a){a.preventDefault()}},_create:function(){var a=this.element,b=this.options;$.each(a.data(),function(a,c){if(a in b)try{b[a]=$.parseJSON(c)}catch(d){b[a]=c}}),this._createWindow(),a.data("window",this)},_createWindow:function(){var a,b,c=this.element,d=this.options,e=c;e.addClass("window"),a=$("<div/>").addClass("window-caption"),b=$("<div/>").addClass("window-content"),(d.icon||d.title)&&a.appendTo(e),b.appendTo(e),"object"==typeof d.size&&$.each(d.size,function(a,c){b.css(a,c)}),d.captionStyle&&"object"==typeof d.captionStyle&&$.each(d.captionStyle,function(b,c){c.isColor()?a.css(b,c+" !important"):a.addClass(c)}),d.contentStyle&&"object"==typeof d.contentStyle&&$.each(d.contentStyle,function(a,c){c.isColor()?b.css(a,c+" !important"):b.addClass(c)}),e.appendTo("default"!==d.parent?d.parent:c.parent()),this.icon(),this.title(),this.buttons(),this.content()},icon:function(){var a=this.options,b=this.element.children(".window-caption"),c=b.find(".window-caption-icon");a.icon&&(0===c.length?$("<span/>").addClass("window-caption-icon").html(a.icon).appendTo(b):c.html(a.icon))},title:function(){var a=this.options,b=this.element.children(".window-caption"),c=b.find(".window-caption-title");a.title&&(0===c.length?$("<span/>").addClass("window-caption-title").html(a.title).appendTo(b):c.html(a.title))},buttons:function(){var a,b,c,d=this.options,f=this.element.children(".window-caption");if(0!==f.length&&d.buttons){var g=d.buttons.btnMin,h=d.buttons.btnMax,i=d.buttons.btnClose;if(g&&g!==!1)if(a=$("<span/>").addClass("btn-min").appendTo(f),"object"==typeof g&&a.css(g),"string"==typeof d.onBtnMinClick){var j=window[d.onBtnMinClick];a.on("click",j)}else a.on("click",d.onBtnMinClick(e));if(h&&h!==!1)if(b=$("<span/>").addClass("btn-max").appendTo(f),"object"==typeof h&&b.css(h),"string"==typeof d.onBtnMaxClick){var k=window[d.onBtnMaxClick];b.on("click",k)}else b.on("click",d.onBtnMaxClick(e));if(i&&i!==!1)if(c=$("<span/>").addClass("btn-close").appendTo(f),"object"==typeof i&&c.css(i),"string"==typeof d.onBtnCloseClick){var l=window[d.onBtnCloseClick];c.on("click",l)}else c.on("click",d.onBtnCloseClick(e))}},content:function(){var a=this.options,b=a.content,c=this.element.children(".window-content");if(b)if(b.isUrl()){if(b.indexOf("youtube")>-1){var d=$("<iframe>"),e=$("<div/>").addClass("video-container").appendTo(c);d.attr("src",b).attr("frameborder","0"),d.appendTo(e)}}else c.html(b)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.wizard",{version:"3.0.0",options:{stepper:!0,stepperType:"default",stepperClickable:!1,startPage:"default",finishStep:"default",locale:window.METRO_CURRENT_LOCALE,buttons:{cancel:!0,help:!0,prior:!0,next:!0,finish:!0},onCancel:function(){},onHelp:function(){},onPrior:function(){return!0},onNext:function(){return!0},onFinish:function(){},onPage:function(){},onStepClick:function(){}},_stepper:void 0,_currentStep:0,_steps:void 0,_create:function(){var that=this,element=this.element,o=this.options,steps=element.find(".step");$.each(element.data(),function(a,b){if(a in o)try{o[a]=$.parseJSON(b)}catch(c){o[a]=b}}),this._steps=steps,o.stepper&&(this._stepper=this._createStepper(steps.length).insertBefore(element.find(".steps")).stepper({clickable:o.stepperClickable}).on("stepclick",function(e,s){if(that.stepTo(s),"function"==typeof o.onStepClick)o.onStepClick(s);else if("function"==typeof window[o.onStepClick])window[o.onStepClick](s);else{var result=eval("(function(){"+o.onStepClick+"})");result.call(s)}})),void 0!==element.data("locale")&&(o.locale=element.data("locale")),this._createEvents();var sp="default"!==o.startPage&&parseInt(o.startPage)>1?o.startPage:1;this.stepTo(sp),"string"==typeof o.onPage?window[o.onPage](this._currentStep+1,element):o.onPage(this._currentStep+1,element),element.data("wizard",this)},_createStepper:function(a){var b,c=this.options;return b=$("<div/>").addClass("stepper").attr("data-role","stepper").attr("data-steps",a),"default"!==c.stepperType&&b.addClass(c.stepperType),b},_createEvents:function(){var that=this,element=this.element,o=this.options;if(o.buttons){var actions=$("<div/>").addClass("actions").appendTo(element),group_left=$("<div/>").addClass("group-left").appendTo(actions),group_right=$("<div/>").addClass("group-right").appendTo(actions),cancel_button,help_button,prior_button,next_button,finish_button;o.buttons.cancel&&(cancel_button=$("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[o.locale].buttons[2]),"boolean"==typeof o.buttons.cancel?cancel_button.appendTo(group_left):(o.buttons.cancel.title&&cancel_button.html(o.buttons.cancel.title),o.buttons.cancel.cls&&cancel_button.addClass(o.buttons.cancel.cls),cancel_button.appendTo(o.buttons.cancel.group&&"left"!==o.buttons.cancel.group?group_right:group_left)),cancel_button.on("click",function(){if("function"==typeof o.onCancel)o.onCancel(that._currentStep+1,element);else if("function"==typeof window[o.onCancel])window[o.onCancel](that._currentStep+1,element);else{var result=eval("(function(){"+o.onCancel+"})");result.call(that._currentStep+1,element)}})),o.buttons.help&&(help_button=$("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[o.locale].buttons[3]),"boolean"==typeof o.buttons.help?help_button.appendTo(group_right):(o.buttons.help.title&&help_button.html(o.buttons.help.title),o.buttons.help.cls&&help_button.addClass(o.buttons.help.cls),help_button.appendTo(o.buttons.help.group&&"left"!==o.buttons.help.group?group_right:group_left)),help_button.on("click",function(){if("function"==typeof o.onHelp)o.onHelp(that._currentStep+1,element);else if("function"==typeof window[o.onHelp])window[o.onHelp](that._currentStep+1,element);else{var result=eval("(function(){"+o.onHelp+"})");result.call(that._currentStep+1,element)}})),o.buttons.prior&&(prior_button=$("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[o.locale].buttons[4]),"boolean"==typeof o.buttons.prior?prior_button.appendTo(group_right):(o.buttons.prior.title&&prior_button.html(o.buttons.prior.title),o.buttons.prior.cls&&prior_button.addClass(o.buttons.prior.cls),prior_button.appendTo(o.buttons.prior.group&&"left"!==o.buttons.prior.group?group_right:group_left)),prior_button.on("click",function(){if("function"==typeof o.onPrior)o.onPrior(that._currentStep+1,element)&&that.prior();else if("function"==typeof window[o.onPrior])window[o.onPrior](that._currentStep+1,element)&&that.prior();else{var result=eval("(function(){"+o.onPrior+"})");result.call(that._currentStep+1,element)&&that.prior()}})),o.buttons.next&&(next_button=$("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[o.locale].buttons[5]),"boolean"==typeof o.buttons.next?next_button.appendTo(group_right):(o.buttons.next.title&&next_button.html(o.buttons.next.title),o.buttons.next.cls&&next_button.addClass(o.buttons.next.cls),next_button.appendTo(o.buttons.next.group&&"left"!==o.buttons.next.group?group_right:group_left)),next_button.on("click",function(){if("function"==typeof o.onNext)o.onNext(that._currentStep+1,element)&&that.next();else if("function"==typeof window[o.onNext])window[o.onNext](that._currentStep+1,element)&&that.next();else{var result=eval("(function(){"+o.onNext+"})");result.call(that._currentStep+1,element)&&that.next()}})),o.buttons.finish&&(finish_button=$("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[o.locale].buttons[6]),"boolean"==typeof o.buttons.finish?finish_button.appendTo(group_right):(o.buttons.finish.title&&finish_button.html(o.buttons.finish.title),o.buttons.finish.cls&&finish_button.addClass(o.buttons.finish.cls),finish_button.appendTo(o.buttons.finish.group&&"left"!==o.buttons.finish.group?group_right:group_left)),finish_button.on("click",function(){if("function"==typeof o.onFinish)o.onFinish(that._currentStep+1,element);else if("function"==typeof window[o.onFinish])window[o.onFinish](that._currentStep+1,element);else{var result=eval("(function(){"+o.onFinish+"})");result.call(that._currentStep+1,element)}}))}},next:function(){var element=this.element,that=this,o=this.options,new_step=this._currentStep+1;if(new_step===this._steps.length)return!1;if(this._currentStep=new_step,this._steps.hide(),$(this._steps[new_step]).show(),"function"==typeof o.onPage)o.onPage(that._currentStep+1,element);else if("function"==typeof window[o.onPage])window[o.onPage](that._currentStep+1,element);else{var result=eval("(function(){"+o.onPage+"})");result.call(that._currentStep+1,element)}void 0!==this._stepper&&this._stepper.stepper("stepTo",this._currentStep+1);var finish="default"===o.finishStep?this._steps.length-1:o.finishStep;return new_step===finish?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0),new_step===this._steps.length-1?this.element.find(".btn-next").attr("disabled",!0):this.element.find(".btn-next").attr("disabled",!1),new_step>0&&this.element.find(".btn-prior").attr("disabled",!1),!0},prior:function(){var element=this.element,that=this,new_step=this._currentStep-1,o=this.options;if(0>new_step)return!1;if(this._currentStep=new_step,this._steps.hide(),$(this._steps[new_step]).show(),"function"==typeof o.onPage)o.onPage(that._currentStep+1,element);else if("function"==typeof window[o.onPage])window[o.onPage](that._currentStep+1,element);else{var result=eval("(function(){"+o.onPage+"})");result.call(that._currentStep+1,element)}void 0!==this._stepper&&this._stepper.stepper("stepTo",this._currentStep+1);var finish="default"===o.finishStep?this._steps.length-1:o.finishStep;return new_step===finish?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0),0===new_step?this.element.find(".btn-prior").attr("disabled",!0):this.element.find(".btn-prior").attr("disabled",!1),finish>new_step&&this.element.find(".btn-next").attr("disabled",!1),!0},stepTo:function(step){var element=this.element,that=this,new_step=step-1,o=this.options;if(0>new_step)return!1;if(this._currentStep=new_step,this._steps.hide(),$(this._steps[new_step]).show(),"function"==typeof o.onPage)o.onPage(that._currentStep+1,element);else if("function"==typeof window[o.onPage])window[o.onPage](that._currentStep+1,element);else{var result=eval("(function(){"+o.onPage+"})");result.call(that._currentStep+1,element)}void 0!==this._stepper&&this._stepper.stepper("stepTo",step);var finish="default"===o.finishStep?this._steps.length-1:o.finishStep;return new_step===finish?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0),this.element.find(".btn-next").attr("disabled",new_step>=finish),this.element.find(".btn-prior").attr("disabled",0>=new_step),!0},stepper:function(){return this._stepper},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.widget("metro.wizard2",{version:"3.0.0",options:{start:1,finish:"default",buttonLabels:{prev:"&lt;",next:"&gt;",finish:"OK",help:"?"},onPrior:function(){return!0},onNext:function(){return!0},onFinish:function(){},onHelp:function(){},onPage:function(){}},_step:1,_steps:void 0,_create:function(){var a=this,b=this.element,c=this.options;$.each(b.data(),function(a,b){if(a in c)try{c[a]=$.parseJSON(b)}catch(d){c[a]=b}}),this._step=c.start,this._steps=b.children(".step"),this._height=0,this._width=0,"default"===c.finish&&(c.finish=this._steps.length),$.each(this._steps,function(b,c){$(c).outerHeight()>a._height&&(a._height=$(c).outerHeight()),$(c).hasClass("active")&&(a._step=b+1)}),this._width=b.innerWidth()-(24*(this._steps.length-1)+this._steps.length),b.children(".step").css({height:this._height+48}),$(window).resize(function(){a._width=b.innerWidth()-(24*(a._steps.length-1)+a._steps.length),a.step(a._step)}),this._createActionBar(),this.step(c.start),this._placeActionBar(),b.data("wizard2",this)},_createActionBar:function(){var that=this,element=this.element,o=this.options,bar=$("<div/>").addClass("action-bar").appendTo(element),btn_prev,btn_next,btn_help,btn_finish;btn_help=$("<button/>").html(o.buttonLabels.help).addClass("button cycle-button medium-button wiz-btn-help place-left").appendTo(bar),btn_finish=$("<button/>").html(o.buttonLabels.finish).addClass("button cycle-button medium-button wiz-btn-finish place-right").appendTo(bar),btn_next=$("<button/>").html(o.buttonLabels.next).addClass("button cycle-button medium-button wiz-btn-next place-right").appendTo(bar),btn_prev=$("<button/>").html(o.buttonLabels.prev).addClass("button cycle-button medium-button wiz-btn-prev place-right").appendTo(bar),btn_help.on("click",function(){if("function"==typeof o.onHelp)o.onHelp(that._step,that);else if("function"==typeof window[o.onHelp])window[o.onHelp](that._step,that);else{var result=eval("(function(){"+o.onHelp+"})");result.call(that._step,that)}}),btn_finish.on("click",function(){if("function"==typeof o.onFinish)o.onFinish(that._step,that);else if("function"==typeof window[o.onFinish])window[o.onFinish](that._step,that);else{var result=eval("(function(){"+o.onFinish+"})");result.call(that._step,that)}}),btn_prev.on("click",function(){if("function"==typeof o.onPrior)o.onPrior(that._step,element)&&that.prior();else if("function"==typeof window[o.onPrior])window[o.onPrior](that._step,element)&&that.prior();else{var result=eval("(function(){"+o.onPrior+"})");result.call(that._step,element)&&that.prior()}}),btn_next.on("click",function(){if("function"==typeof o.onNext)o.onNext(that._step,element)&&that.next();else if("function"==typeof window[o.onNext])window[o.onNext](that._step,element)&&that.next();else{var result=eval("(function(){"+o.onNext+"})");result.call(that._step,element)&&that.next()}})},_placeActionBar:function(){var a=this.element,b=(this.options,a.find(".action-bar")),c=a.find(".step.active"),d=c.position().left,e=c.innerWidth();b.css({left:d,width:e})},step:function(a){var b=this.options;this.element.children(".step").removeClass("active prev next"),$(this.element.children(".step")[a-1]).addClass("active").css("width",this._width),this.element.children(".step.active").prevAll().addClass("prev").css("width",0),this.element.children(".step.active").nextAll().addClass("next").css("width",0),this._placeActionBar(),1===a?this.element.find(".wiz-btn-prev").hide():this.element.find(".wiz-btn-prev").show(),a===this._steps.length?this.element.find(".wiz-btn-next").hide():this.element.find(".wiz-btn-next").show(),a!==b.finish?this.element.find(".wiz-btn-finish").hide():this.element.find(".wiz-btn-finish").show()},prior:function(){var a=this._step-1;return 0>=a?!1:(this._step=a,this.step(a),!0)},next:function(){var a=this._step+1;return a>this._steps.length?!1:(this._step=a,this.step(a),!0)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}}),$.Metro.init()});