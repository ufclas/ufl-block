(()=>{"use strict";var e,t={5738:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,r=JSON.parse('{"UU":"create-block/slider-manual"}');(0,e.registerBlockType)(r.UU,{edit:e=>{const{attributes:{title:r,subTitle:s,link:o,linkLabel:c,hasLinkNofollow:i,openNewTab:m},setAttributes:u}=e,d=(0,a.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Slider","slider-manual")},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Title","slider-manual"),value:r,onChange:e=>u({title:e}),help:(0,l.__)("","slider-manual")}))))),(0,t.createElement)("div",{...d},(0,t.createElement)("section",{className:"slider-manual-container py-3 slider-section"},(0,t.createElement)("div",{className:"row mb-2"},(0,t.createElement)("div",{className:"col-12 col-lg-8 col-xxl-7 text-center mx-auto"},(0,t.createElement)(a.RichText,{tagName:"h2",className:"display-5 mt-2 mb-3",value:r,onChange:e=>u({title:e})}))),(0,t.createElement)("div",{className:"slider"},(0,t.createElement)(a.InnerBlocks,{renderAppender:a.InnerBlocks.ButtonBlockAppender,template:[["create-block/slider-manual-inner"]],allowedBlocks:["create-block/slider-manual-inner"]})),(0,t.createElement)("div",{className:"mobile-slide-btn"},(0,t.createElement)("button",{className:"slideLeft",type:"button"},(0,t.createElement)("span",{"aria-label":"Previous"},"‹")),(0,t.createElement)("button",{className:"slideRight",type:"button"},(0,t.createElement)("span",{"aria-label":"Next"},"›"))),(0,t.createElement)("div",{className:"text-center see-more-news"},(0,t.createElement)(n.ExternalLink,{href:o,className:"animated-underline-button",rel:i?"nofollow":"noopener noreferrer",target:m?"_blank":"_self",onClick:e=>{e.preventDefault()}},c)))))},save:e=>{const{attributes:{title:l,subTitle:n,link:r,linkLabel:s,hasLinkNofollow:o,openNewTab:c}}=e,i=a.useBlockProps.save();return(0,t.createElement)("div",{...i},(0,t.createElement)("section",{className:"slider-manual-container py-3 slider-section"},(0,t.createElement)("div",{className:"row mb-2"},(0,t.createElement)("div",{className:"col-12 col-lg-8 col-xxl-7 text-center mx-auto"},(0,t.createElement)(a.RichText.Content,{className:"display-5 mt-2 mb-3",tagName:"h2",value:l}))),(0,t.createElement)("div",{className:"slider"},(0,t.createElement)(a.InnerBlocks.Content,null)),(0,t.createElement)("div",{className:"mobile-slide-btn"},(0,t.createElement)("button",{className:"slideLeft",type:"button"},(0,t.createElement)("span",{"aria-label":"Previous"},"‹")),(0,t.createElement)("button",{className:"slideRight",type:"button"},(0,t.createElement)("span",{"aria-label":"Next"},"›"))),(0,t.createElement)("div",{className:"text-center see-more-news"},r&&(0,t.createElement)("a",{href:r,className:"animated-underline-button",rel:o?"nofollow":"noopener noreferrer",target:c?"_blank":"_self"},s))))}})}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var s=1/0;for(m=0;m<e.length;m++){for(var[l,n,r]=e[m],o=!0,c=0;c<l.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(o=!1,r<s&&(s=r));if(o){e.splice(m--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,n,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={566:0,1530:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[s,o,c]=l,i=0;if(s.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var m=c(a)}for(t&&t(l);i<s.length;i++)r=s[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(m)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[1530],(()=>a(5738)));n=a.O(n)})();