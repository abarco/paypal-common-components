module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r={ELEMENT:"element",TEXT:"text",COMPONENT:"component",FRAGMENT:"fragment"};function o(n,e){for(var t=[],r=0;r<n.length;r++){var o=n[r].render(e);if(o)if(Array.isArray(o))for(var i=0;i<o.length;i++){var a=o[i];a&&t.push(a)}else t.push(o)}return t}var i=function(){function n(n,e,t){this.type=r.ELEMENT,this.name=void 0,this.props=void 0,this.children=void 0,this.onRender=void 0,this.name=n,this.props=e,this.children=t;var o=e.onRender;"function"==typeof o&&(this.onRender=o,delete e.onRender)}var e=n.prototype;return e.render=function(n){var e=n(this);return this.onRender&&this.onRender(e),e},e.renderChildren=function(n){return o(this.children,n)},n}(),a=function(){function n(n){this.type=r.FRAGMENT,this.children=void 0,this.children=n}return n.prototype.render=function(n){return o(this.children,n)},n}(),p=function(){function n(n){this.type=r.TEXT,this.text=void 0,this.text=n}return n.prototype.render=function(n){return n(this)},n}(),d=function(){function n(n,e,t){this.type=r.COMPONENT,this.component=void 0,this.props=void 0,this.children=void 0,this.component=n,this.props=e,this.children=t}var e=n.prototype;return e.renderComponent=function(n){var e=this.props,t=function(n){var e=l(Array.isArray(n)?n:[n]);if(1===e.length)return e[0];if(e.length>1)return new a(e)}(this.component(e,this.children));if(t)return t.render(n)},e.render=function(n){return n(this)},e.renderChildren=function(n){return o(this.children,n)},n}();function l(n){for(var e=[],t=0;t<n.length;t++){var o=n[t];if(o)if("string"==typeof o)e.push(new p(o));else if(Array.isArray(o))for(var i=0,a=l(o);i<a.length;i++){var d=a[i];e.push(d)}else{if(!o||o.type!==r.ELEMENT&&o.type!==r.TEXT&&o.type!==r.COMPONENT)throw new TypeError("Unrecognized node type: "+typeof o);e.push(o)}}return e}var c,s=function(n,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];if(e=e||{},r=l(r),"string"==typeof n)return new i(n,e,r);if("function"==typeof n)return new d(n,e,r);throw new TypeError("Expected jsx element to be a string or a function")},u="0123456789abcdef";var f={HTML:"html",IFRAME:"iframe",SCRIPT:"script",NODE:"node",DEFAULT:"default"},h={ID:"id",INNER_HTML:"innerHTML",EL:"el"};function v(n,e){for(var t=e.props,r=0,o=Object.keys(t);r<o.length;r++){var i=o[r],a=t[i];null!=a&&i!==h.EL&&i!==h.INNER_HTML&&(i.match(/^on[A-Z][a-z]/)&&"function"==typeof a?n.addEventListener(i.slice(2).toLowerCase(),a):"string"==typeof a||"number"==typeof a?n.setAttribute(i,a.toString()):"boolean"==typeof a&&!0===a&&n.setAttribute(i,""))}n.tagName.toLowerCase()!==f.IFRAME||t.id||n.setAttribute(h.ID,"jsx-iframe-"+"xxxxxxxxxx".replace(/./g,function(){return u.charAt(Math.floor(Math.random()*u.length))}))}var y=((c={})[f.IFRAME]=function(n,e){var t=e.children[0];if(1!==e.children.length||!t||t.type!==r.ELEMENT||t.name!==f.HTML)throw new Error("Expected only single html element node as child of "+f.IFRAME+" element");n.addEventListener("load",function(){var e=n.contentWindow;if(!e)throw new Error("Expected frame to have contentWindow");for(var o=e.document,i=o.documentElement;i.children&&i.children.length;)i.removeChild(i.children[0]);for(var a=t.render(function(n){void 0===n&&(n={});var e=n.doc,t=void 0===e?document:e;return function n(e){if(e.type===r.COMPONENT)return e.renderComponent(n);if(e.type===r.TEXT)return function(n,e){return n.createTextNode(e.text)}(t,e);if(e.type===r.ELEMENT){var o=function(n,e){return e.props[h.EL]?e.props[h.EL]:n.createElement(e.name)}(t,e);return v(o,e),function(n,e,t,r){if(e.props.hasOwnProperty(h.INNER_HTML)){if(e.children.length)throw new Error("Expected no children to be passed when "+h.INNER_HTML+" prop is set");var o=e.props[h.INNER_HTML];if("string"!=typeof o)throw new TypeError(h.INNER_HTML+" prop must be string");e.name===f.SCRIPT?n.text=o:(n.innerHTML=o,function(n,e){void 0===e&&(e=window.document);for(var t=0,r=n.querySelectorAll("script");t<r.length;t++){var o=r[t],i=o.parentNode;if(i){var a=e.createElement("script");a.text=o.textContent,i.replaceChild(a,o)}}}(n,t))}else{var i=y[e.name]||y[f.DEFAULT];i(n,e,r)}}(o,e,t,n),o}throw new TypeError("Unhandleable node")}}({doc:o}));a.children.length;)i.appendChild(a.children[0])})},c[f.SCRIPT]=function(n,e){var t=e.children[0];if(1!==e.children.length||!t||t.type!==r.TEXT)throw new Error("Expected only single text node as child of "+f.SCRIPT+" element");n.text=t.text},c[f.DEFAULT]=function(n,e,t){for(var r=0,o=e.renderChildren(t);r<o.length;r++){var i=o[r];n.appendChild(i)}},c);var m="\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n";function E(n){var e=n.nonce;return s("html",null,s("head",null,s("title",null,"PayPal"),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),s("body",null,s("div",{class:"preloader spinner"},s("style",{nonce:e},m),s("div",{class:"spinWrap"},s("p",{class:"spinnerImage"}),s("p",{class:"loader"})))))}t.d(e,"SpinnerPage",function(){return E})}]);