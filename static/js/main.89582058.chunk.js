(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),o=t.n(c),l=t(7),i=t(1),u=t(4),s=t.n(u);function m(e){var n=e.value,t=e.onClick,a=e.isHighlighted;return r.a.createElement("button",{className:s()("square",{"square-highlight":a}),onClick:t},n)}function v(e){var n=e.squares,t=e.onClick,a=e.winnerLine,c=function(e){return r.a.createElement(m,{isHighlighted:a.includes(e),key:e,value:n[e],onClick:function(){return t(e)}})};return r.a.createElement("div",null,function(e){for(var n=[],t=0;t<e.length;t+=3){for(var a=[],o=t;o<t+3;o++)a.push(c(o));n.push(r.a.createElement("div",{key:t,className:"board-row"},a))}return n}(n))}function f(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var a=Object(i.a)(n[t],3),r=a[0],c=a[1],o=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return{winner:e[r],line:n[t]}}return{winner:null,line:[]}}function h(){var e,n=Object(a.useState)([{squares:Array(9).fill(null),location:null}]),t=Object(i.a)(n,2),c=t[0],o=t[1],u=Object(a.useState)(!0),m=Object(i.a)(u,2),h=m[0],d=m[1],g=Object(a.useState)(0),b=Object(i.a)(g,2),E=b[0],w=b[1],k=Object(a.useState)(!1),O=Object(i.a)(k,2),p=O[0],q=O[1],j=c[E],C=f(j.squares),y=C.winner,N=C.line,S=c.map((function(e,n){var t=function(e){var n=e%3+1;return[Math.trunc(e/3)+1,n]}(e.step),a=Object(i.a)(t,2),c=a[0],o=a[1],l=n?"Go to move #".concat(n," [").concat(c,",").concat(o,"]"):"Go to game start";return r.a.createElement("li",{key:n},r.a.createElement("button",{className:s()({"selected-move":E===n}),onClick:function(){return w(e=n),void d(e%2===0);var e}},l))})),B=j.squares.filter(Boolean).length===j.squares.length;return e=y?"Winner: "+y:B?"Draw":"Next player: "+(h?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(v,{squares:j.squares,onClick:function(e){return function(e){var n=c.slice(0,E+1),t=n[n.length-1].squares.slice();f(t).winner||t[e]||(t[e]=h?"X":"O",o([].concat(Object(l.a)(n),[{squares:t,step:e}])),w(n.length),d(!h))}(e)},winnerLine:N})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("button",{onClick:function(){o([{squares:Array(9).fill(null),location:null}]),d(!0),w(0),q(!1)}},"Reset"),r.a.createElement("button",{onClick:function(){q(!p)}},"Change to ".concat(p?"ascending ":"descending "," order")),r.a.createElement("ol",null,p?S.reverse():S)))}t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.89582058.chunk.js.map