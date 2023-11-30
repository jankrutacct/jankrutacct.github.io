/*! For license information please see 187.main.js.LICENSE.txt */
"use strict";(self.webpackChunkwp5_top_nav=self.webpackChunkwp5_top_nav||[]).push([[187],{8187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(8416),a=n.n(r),o=n(4992),i=n(1955),c=n(1370);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){var t=s((0,r.useState)("0"),2),n=t[0],u=t[1],m=s((0,r.useState)(""),2),p=m[0],d=m[1],f=function(e){console.log("event.detail",e.detail),console.log("sessionStorage.clickcount",sessionStorage.getItem("clickcount")),u(e.detail)};return(0,r.useEffect)((function(){return new EventSource("http://localhost:4502/api/wknd/sseservlet").onmessage=function(e){console.log("SSE onmessage:",e.data),e.data&&u(e.data)},window.addEventListener("addToCart",f),function(){window.removeEventListener("addToCart",f)}}),[]),(0,r.useEffect)((function(){var e=new CustomEvent("searchItems",{detail:p});i.Z.set("searchQuery",p,{sameSite:"strict"}),window.dispatchEvent(e)}),[p]),a().createElement("div",{className:"top-nav-container flex"},a().createElement("h2",{className:"display-inline ml-10"},a().createElement(c.Bungalow,{className:"mr-10"}),"Acct company"),a().createElement("h2",{className:"display-inline ml-3p"},a().createElement(c.AcUnit,{className:"mr-10"}),"Departments"),a().createElement("h2",{className:"display-inline ml-3p"},a().createElement(c.Campaign,{className:"mr-10"}),"Services"),a().createElement(o.Autocomplete,{className:"display-inline search-container",disablePortal:!0,id:"combo-box-demo",options:["Pillow","White","Bed","Black","Queen"],sx:{width:300},renderInput:function(e){return a().createElement(o.TextField,l({},e,{label:"Search items on this site"}))},onChange:function(e,t){d(t)}}),a().createElement("h2",{className:"display-inline ml-3p"},a().createElement(c.AccountBox,{className:"mr-10"}),"Sign In"),a().createElement("h2",{className:"display-inline ml-3p"},a().createElement(c.ShoppingCart,{className:"mr-5"}),"Cart ",a().createElement("span",{className:"cart_item"},null==n?void 0:n.trim())))}},1955:(e,t,n)=>{function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:()=>a});var a=function e(t,n){function a(e,a,o){if("undefined"!=typeof document){"number"==typeof(o=r({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+i}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var o=n[a].split("="),i=o.slice(1).join("=");try{var c=decodeURIComponent(o[0]);if(r[c]=t.read(i,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){a(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);