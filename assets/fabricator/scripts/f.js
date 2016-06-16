!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),e.exports=n(3)},function(e,t,n){"use strict";n(2),Prism.hooks.add("before-insert",function(e){return e.highlightedCode=e.highlightedCode.replace(/\(\s([\w\s\-\/\+]*)\s\)/g,'<span class="irrelevant">$1</span>')});var i=window.fabricator={};i.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},i.options.menu=window.matchMedia(i.options.mq).matches,i.test={},i.test.sessionStorage=function(){var e="_f";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}(),i.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(i.options)),i.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},i.getOptions=function(){return i.test.sessionStorage?JSON.parse(sessionStorage.fabricator):i.options},i.setActiveItem=function(){var e=function(){for(var e,t=(window.location.pathname+window.location.hash).replace(/^\//g,""),n=i.dom.menuItems.length-1;n>=0;n--){var a=i.dom.menuItems[n];e=a.getAttribute("href").replace(/^\//g,""),e===t?a.classList.add("f-active"):a.classList.remove("f-active")}};return window.addEventListener("hashchange",e),e(),this},i.menuToggle=function(){var e=i.dom.menuToggle,t=i.getOptions(),n=function(){t.menu=!i.dom.root.classList.contains("f-menu-active"),i.dom.root.classList.toggle("f-menu-active"),i.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};e.addEventListener("click",function(){n()});for(var a=function(){window.matchMedia(i.options.mq).matches||n()},r=0;r<i.dom.menuItems.length;r++)i.dom.menuItems[r].addEventListener("click",a);return this},i.allItemsToggles=function(){for(var e={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},t=document.querySelectorAll(".f-controls [data-f-toggle-control]"),n=i.getOptions(),a=function(t,a){for(var r=document.querySelector(".f-controls [data-f-toggle-control="+t+"]"),s=e[t],o=0;o<s.length;o++)a?s[o].classList.remove("f-item-hidden"):s[o].classList.add("f-item-hidden");a?r.classList.add("f-active"):r.classList.remove("f-active"),n.toggles[t]=a,i.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(n))},r=0;r<t.length;r++)t[r].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),n=e.currentTarget.className.indexOf("f-active")<0;a(t,n)});for(var s in n.toggles)n.toggles.hasOwnProperty(s)&&a(s,n.toggles[s]);return this},i.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=this.parentNode.parentNode,n=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+n+"]").classList.toggle("f-item-hidden")},n=0;n<e.length;n++)e[n].addEventListener("click",t);return this},i.setInitialMenuState=function(){var e=document.querySelector("html"),t=window.matchMedia(i.options.mq),n=function(t){t.matches&&i.getOptions().menu?e.classList.add("f-menu-active"):e.classList.remove("f-menu-active")};return t.addListener(n),n(t),this},function(){i.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().setActiveItem()}()},function(e,t){(function(t){"use strict";var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,i=n.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,i.util.encode(e.content),e.alias):"Array"===i.util.type(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function s(e){var t=i.util.type(e);switch(t){case"Object":var s={};for(var n in e)e.hasOwnProperty(n)&&(s[n]=i.util.clone(e[n]));return s;case"Array":return e.map&&e.map(function(e){return i.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var r=a[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var o={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=r[l]}return i.languages.DFS(i.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=o)}),a[e]=o},DFS:function(e,t,n,a){a=a||{};for(var r in e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==i.util.type(e[r])||a[i.util.objId(e[r])]?"Array"!==i.util.type(e[r])||a[i.util.objId(e[r])]||(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,r,a)):(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,null,a)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n);for(var a,r=n.elements||document.querySelectorAll(n.selector),s=0;a=r[s++];)i.highlightElement(a,e===!0,n.callback)},highlightElement:function(t,a,r){for(var s,o,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1],o=i.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var u=t.textContent,c={element:t,language:s,grammar:o,code:u};if(!u||!o)return void i.hooks.run("complete",c);if(i.hooks.run("before-highlight",c),a&&n.Worker){var g=new Worker(i.filename);g.onmessage=function(e){c.highlightedCode=e.data,i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(c.element),i.hooks.run("after-highlight",c),i.hooks.run("complete",c)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=i.highlight(c.code,c.grammar,c.language),i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(t),i.hooks.run("after-highlight",c),i.hooks.run("complete",c)},highlight:function(e,t,n){var r=i.tokenize(e,t);return a.stringify(i.util.encode(r),n)},tokenize:function(e,t,n){var a=i.Token,r=[e],s=t.rest;if(s){for(var o in s)t[o]=s[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var l=t[o];l="Array"===i.util.type(l)?l:[l];for(var u=0;u<l.length;++u){var c=l[u],g=c.inside,d=!!c.lookbehind,h=!!c.greedy,f=0,p=c.alias;c=c.pattern||c;for(var m=0;m<r.length;m++){var v=r[m];if(r.length>e.length)break e;if(!(v instanceof a)){c.lastIndex=0;var b=c.exec(v),y=1;if(!b&&h&&m!=r.length-1){var w=r[m+1].matchedStr||r[m+1],k=v+w;if(m<r.length-2&&(k+=r[m+2].matchedStr||r[m+2]),c.lastIndex=0,b=c.exec(k),!b)continue;var x=b.index+(d?b[1].length:0);if(x>=v.length)continue;var S=b.index+b[0].length,A=v.length+w.length;y=3,A>=S&&(y=2,k=k.slice(0,A)),v=k}if(b){d&&(f=b[1].length);var x=b.index+f,b=b[0].slice(f),S=x+b.length,E=v.slice(0,x),L=v.slice(S),I=[m,y];E&&I.push(E);var T=new a(o,g?i.tokenize(b,g):b,p,b);I.push(T),L&&I.push(L),Array.prototype.splice.apply(r,I)}}}}}return r},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}}},a=i.Token=function(e,t,n,i){this.type=e,this.content=t,this.alias=n,this.matchedStr=i||null};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===i.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var s="Array"===i.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}i.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=(o?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+o+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,s=t.immediateClose;n.postMessage(i.highlight(r,i.languages[a],a)),s&&n.close()},!1),n.Prism):n.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(i.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",i.highlightAll)),n.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=i),"undefined"!=typeof t&&(t.Prism=i),i.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.util.clone(i.languages.css),i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css"}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),i.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript"}}),i.languages.js=i.languages.javascript,i.languages.scss=i.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/}}}),i.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),i.languages.insertBefore("scss","property",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),i.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:/\B!(?:default|optional)\b/i,"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),i.languages.scss.atrule.inside.rest=i.util.clone(i.languages.scss)}).call(t,function(){return this}())},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(4),o=(i(s),function(){function e(){a(this,e),this.searchField=document.getElementById("search-materials"),this.materialsList=document.getElementById("materials-list"),this.materials=this.materialsList.querySelectorAll("option"),this.initSearch()}return r(e,[{key:"initSearch",value:function(){var e=this;new Awesomplete(this.searchField),this.searchField.addEventListener("awesomplete-selectcomplete",function(t){var n=t.currentTarget.value,i=e.getMaterial(n);t.currentTarget.value="",i&&(window.location=window.location.origin+i)}),window.location.hash.length||this.searchField.focus()}},{key:"getMaterial",value:function(e){for(var t=0;t<this.materials.length;t++){var n=this.materials[t];if(n.value===e)return n.value}return!1}}]),e}());window.Kanbasu=new o},function(e,t){!function(){function t(e){var t=Array.isArray(e)?{label:e[0],value:e[1]}:"object"==typeof e&&"label"in e&&"value"in e?e:{label:e,value:e};this.label=t.label||t.value,this.value=t.value}function n(e,t,n){for(var i in t){var a=t[i],r=e.input.getAttribute("data-"+i.toLowerCase());"number"==typeof a?e[i]=parseInt(r):a===!1?e[i]=null!==r:a instanceof Function?e[i]=null:e[i]=r,e[i]||0===e[i]||(e[i]=i in n?n[i]:a)}}function i(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function a(e,t){return o.call((t||document).querySelectorAll(e))}function r(){a("input.awesomplete").forEach(function(e){new s(e)})}var s=function(e,t){var a=this;this.input=i(e),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),t=t||{},n(this,{minChars:2,maxItems:10,autoFirst:!1,data:s.DATA,filter:s.FILTER_CONTAINS,sort:s.SORT_BYLENGTH,item:s.ITEM,replace:s.REPLACE},t),this.index=-1,this.container=i.create("div",{className:"awesomplete",around:e}),this.ul=i.create("ul",{hidden:"hidden",inside:this.container}),this.status=i.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),i.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(e){var t=e.keyCode;a.opened&&(13===t&&a.selected?(e.preventDefault(),a.select()):27===t?a.close():38!==t&&40!==t||(e.preventDefault(),a[38===t?"previous":"next"]()))}}),i.bind(this.input.form,{submit:this.close.bind(this)}),i.bind(this.ul,{mousedown:function(e){var t=e.target;if(t!==this){for(;t&&!/li/i.test(t.nodeName);)t=t.parentNode;t&&0===e.button&&(e.preventDefault(),a.select(t,e.target))}}}),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||t.list||[],s.all.push(this)};s.prototype={set list(e){if(Array.isArray(e))this._list=e;else if("string"==typeof e&&e.indexOf(",")>-1)this._list=e.split(/\s*,\s*/);else if(e=i(e),e&&e.children){var t=[];o.apply(e.children).forEach(function(e){if(!e.disabled){var n=e.textContent.trim(),i=e.value||n,a=e.label||n;""!==i&&t.push({label:a,value:i})}}),this._list=t}document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden",""),this.index=-1,i.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden"),this.autoFirst&&-1===this.index&&this["goto"](0),i.fire(this.input,"awesomplete-open")},next:function(){var e=this.ul.children.length;this["goto"](this.index<e-1?this.index+1:-1)},previous:function(){var e=this.ul.children.length;this["goto"](this.selected?this.index-1:e-1)},"goto":function(e){var t=this.ul.children;this.selected&&t[this.index].setAttribute("aria-selected","false"),this.index=e,e>-1&&t.length>0&&(t[e].setAttribute("aria-selected","true"),this.status.textContent=t[e].textContent,i.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(e,t){if(e?this.index=i.siblingIndex(e):e=this.ul.children[this.index],e){var n=this.suggestions[this.index],a=i.fire(this.input,"awesomplete-select",{text:n,origin:t||e});a&&(this.replace(n),this.close(),i.fire(this.input,"awesomplete-selectcomplete",{text:n}))}},evaluate:function(){var e=this,n=this.input.value;n.length>=this.minChars&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(i){return new t(e.data(i,n))}).filter(function(t){return e.filter(t,n)}).sort(this.sort).slice(0,this.maxItems),this.suggestions.forEach(function(t){e.ul.appendChild(e.item(t,n))}),0===this.ul.children.length?this.close():this.open()):this.close()}},s.all=[],s.FILTER_CONTAINS=function(e,t){return RegExp(i.regExpEscape(t.trim()),"i").test(e)},s.FILTER_STARTSWITH=function(e,t){return RegExp("^"+i.regExpEscape(t.trim()),"i").test(e)},s.SORT_BYLENGTH=function(e,t){return e.length!==t.length?e.length-t.length:t>e?-1:1},s.ITEM=function(e,t){var n=""===t?e:e.replace(RegExp(i.regExpEscape(t.trim()),"gi"),"<mark>$&</mark>");return i.create("li",{innerHTML:n,"aria-selected":"false"})},s.REPLACE=function(e){this.input.value=e.value},s.DATA=function(e){return e},Object.defineProperty(t.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),t.prototype.toString=t.prototype.valueOf=function(){return""+this.label};var o=Array.prototype.slice;return i.create=function(e,t){var n=document.createElement(e);for(var a in t){var r=t[a];if("inside"===a)i(r).appendChild(n);else if("around"===a){var s=i(r);s.parentNode.insertBefore(n,s),n.appendChild(s)}else a in n?n[a]=r:n.setAttribute(a,r)}return n},i.bind=function(e,t){if(e)for(var n in t){var i=t[n];n.split(/\s+/).forEach(function(t){e.addEventListener(t,i)})}},i.fire=function(e,t,n){var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!0);for(var a in n)i[a]=n[a];return e.dispatchEvent(i)},i.regExpEscape=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},i.siblingIndex=function(e){for(var t=0;e=e.previousElementSibling;t++);return t},"undefined"!=typeof Document&&("loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r)),s.$=i,s.$$=a,"undefined"!=typeof self&&(self.Awesomplete=s),"object"==typeof e&&e.exports&&(e.exports=s),s}()}]);