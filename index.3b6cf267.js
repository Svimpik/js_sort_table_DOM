function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t=document.querySelector("table");document.querySelectorAll("thead tr th").forEach(function(e,n){e.addEventListener("click",function(){!function(e){for(var n=t.querySelector("tbody"),o=Array.from(n.querySelectorAll("tr")).sort(function(r,t){var n=r.querySelectorAll("td")[e].textContent.trim(),o=t.querySelectorAll("td")[e].textContent.trim();return 2===e?(n=parseInt(n,10))-(o=parseInt(o,10)):3===e?(n=Number(n.replace(/[$,]/g,"")))-(o=Number(o.replace(/[$,]/g,""))):n>o?1:-1});n.firstChild;)n.removeChild(n.firstChild);n.append.apply(n,function(t){if(Array.isArray(t))return r(t)}(o)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(o)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}(n)})});
//# sourceMappingURL=index.3b6cf267.js.map
