(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,u=e.title,s=c(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},6436:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var r,o,i,a,c=n(7294),u=n(2309),s=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return c.createElement("div",{className:"gpt3__navbar"},c.createElement("div",{className:"gpt3__navbar-links"},c.createElement("div",{className:"gpt3__navbar-links_logo"},c.createElement("img",{src:"data:image/png;base64,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",className:"App-logo",alt:"logo Andr7st"}),c.createElement("h1",null,"Andr7st")),c.createElement("div",{className:"gpt3__navbar-links_container"},c.createElement("p",null,c.createElement("a",{href:"#home"},"inicio")),c.createElement("p",null,c.createElement("a",{href:"#aboutMe"},"acerca de")),c.createElement("p",null,c.createElement("a",{href:"#practices"},"práctica")))),c.createElement("div",{className:"gpt3__navbar-sign"},c.createElement("button",{type:"button"},"Log")),c.createElement("div",{className:"gpt3__navbar-menu"},t?c.createElement(u.eSQ,{color:"#fff",size:27,onClick:function(){return n(!1)}}):c.createElement(u.nrC,{color:"#fff",size:27,onClick:function(){return n(!0)}}),t&&c.createElement("div",{className:"gpt3__navbar-menu_container bounce-in-top "}," ",c.createElement("div",{className:"gpt3__navbar-menu_container-links"},c.createElement("p",null,c.createElement("a",{href:"#home"},"inicio")),c.createElement("p",null,c.createElement("a",{href:"#aboutMe"},"acerca de")),c.createElement("p",null,c.createElement("a",{href:"#practices"},"práctica"))),c.createElement("div",{className:"gpt3__navbar-menu_container-links-sign"},c.createElement("button",{type:"button"},"Log ")))))},l=n(5697),f=n.n(l),p=n(4839),d=n.n(p),m=n(2993),y=n.n(m),h=n(6494),b=n.n(h),A="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",O="href",S="http-equiv",C="innerHTML",N="itemprop",k="name",P="property",x="rel",j="src",U="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",R="defer",B="encodeSpecialCharacters",M="onChangeClientState",K="titleTemplate",V=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Q="data-react-helmet",I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},X=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},D=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=ee(e,w.TITLE),n=ee(e,K);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,L);return t||r||void 0},W=function(e){return ee(e,M)||function(){}},Y=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},_=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+I(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==N||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=b()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),se(f,p);var d={baseTag:fe(w.BASE,n),linkTags:fe(w.LINK,i),metaTags:fe(w.META,a),noscriptTags:fe(w.NOSCRIPT,c),scriptTags:fe(w.SCRIPT,s),styleTags:fe(w.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ue=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Q):n.getAttribute(Q)!==a.join(",")&&n.setAttribute(Q,a.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Q]=!0,o=de(n,r),[c.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),i=ue(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+D(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+D(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case g:return{toComponent:function(){return de(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Q]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+D(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(A,n,r),htmlAttributes:me(g,o,r),link:me(w.LINK,i,r),meta:me(w.META,a,r),noscript:me(w.NOSCRIPT,c,r),script:me(w.SCRIPT,u,r),style:me(w.STYLE,s,r),title:me(w.TITLE,{title:f,titleAttributes:p},r)}},he=d()((function(e){return{baseTag:_([O,U],e),bodyAttributes:Y(A,e),defer:ee(e,R),encode:ee(e,B),htmlAttributes:Y(g,e),linkTags:$(w.LINK,[x,O],e),metaTags:$(w.META,[k,T,S,P,N],e),noscriptTags:$(w.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:$(w.SCRIPT,[j,C],e),styleTags:$(w.STYLE,[E],e),title:J(e),titleAttributes:Y(v,e)}}),(function(e){ae&&oe(ae),e.defer?ae=re((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),ye)((function(){return null})),be=(o=he,a=i=function(e){function t(){return q(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return Z({},o,((t={})[r.type]=a,t.titleAttributes=Z({},i),t));case w.BODY:return Z({},o,{bodyAttributes:Z({},i)});case w.HTML:return Z({},o,{htmlAttributes:Z({},i)})}return Z({},o,((n={})[r.type]=Z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[V[n]||n]=e[n],t}),t)}(G(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},X(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var Ae=n(5444),ge=function(e){var t=e.title,n=e.description,r=(0,Ae.useStaticQuery)("2468095761").site,o=n||r.siteMetadata.description;return c.createElement(be,{htmlAttributes:{lang:"en"},title:t+" | "+r.siteMetadata.title,meta:[{name:"description",content:o}]})};function ve(){return c.createElement("div",null,c.createElement(ge,{title:"Andr7st | index"}),c.createElement(s,null),c.createElement("h1",null,"Andr7st"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c3ccbeb89cb6b1fbcfcd.js.map