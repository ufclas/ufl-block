(()=>{"use strict";var e,t={8893:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,o=window.wp.blockEditor,a=(window.wp.components,e=>{const{attributes:{sectionTitle:a,loadmore:n},setAttributes:l}=e,c=(0,o.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...c},(0,t.createElement)("section",{className:"featured-video"},(0,t.createElement)("div",{className:"row align-items-center"},(0,t.createElement)("div",{className:"col-12 text-left mb-5"},(0,t.createElement)(o.RichText,{tagName:"h2",placeholder:(0,r.__)("Write title…"),value:a,className:"text-white",onChange:e=>{l({sectionTitle:e})}}))),(0,t.createElement)("div",{className:"container-fluid multiple-video-container"},(0,t.createElement)(o.InnerBlocks,{renderAppender:o.InnerBlocks.ButtonBlockAppender,template:[["create-block/featured-video-row"]],allowedBlocks:["create-block/featured-video-row"]}),(0,t.createElement)("a",{className:"video-load-more button animated-border-button button-border-orange button-dark-bg"},"Load More")))))}),n=JSON.parse('{"UU":"create-block/featured-video-multiple"}');(0,e.registerBlockType)(n.UU,{edit:a,save:e=>{const{attributes:{sectionTitle:r,sectionSubtitle:a,buttonLabel:n}}=e,l=o.useBlockProps.save();return(0,t.createElement)("div",{...l},(0,t.createElement)("section",{class:"featured-video"},r&&(0,t.createElement)("div",{className:"row align-items-center"},(0,t.createElement)("div",{className:"col-12 text-left mb-5"},(0,t.createElement)("h2",{className:"text-white"},r))),(0,t.createElement)("div",{class:"container-fluid multiple-video-container"},(0,t.createElement)(o.InnerBlocks.Content,null),(0,t.createElement)("a",{className:"video-load-more button animated-border-button button-border-orange button-dark-bg"},"Load More"))))}})}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,a,n)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,a,n]=e[d],c=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(c=!1,n<l&&(l=n));if(c){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,a,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={5065:0,2237:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[l,c,i]=r,s=0;if(l.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(i)var d=i(o)}for(t&&t(r);s<l.length;s++)n=l[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},r=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[2237],(()=>o(8893)));a=o.O(a)})();