(()=>{"use strict";var e,t={4806:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,o=JSON.parse('{"UU":"create-block/featured-video"}');(0,e.registerBlockType)(o.UU,{edit:e=>{const{attributes:{title:o,subTitle:r,mediaID:i,mediaURL:c,link:m,linkLabel:s,hasLinkNofollow:d,openNewTab:u,youtubeEmbed:f},setAttributes:p}=e,b=((0,a.useBlockProps)(),e=>{p({title:e})}),v=e=>{p({subTitle:e})},E=e=>{e.preventDefault()};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Featured Video","featured-video"),initialOpen:!0},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(a.MediaUpload,{onSelect:e=>{p({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:i,help:(0,l.__)("Optional","featured-video"),render:({open:e})=>(0,t.createElement)(n.Button,{className:i?"image-button":"button button-large",onClick:e},i?(0,l.__)("Change Image","ufl-block"):(0,l.__)("Upload Image","ufl-block"))})),0!=i&&(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(n.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","ufl-block"))))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Video - Youtube Video ID","featured-video"),value:f,onChange:e=>{p({youtubeEmbed:e})},help:(0,l.__)("example: if URL of video is: https://www.youtube.com/watch?v=aqz-KE-bpKQ. The ID is aqz-KE-bpKQ ","featured-video")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Title","featured-video"),value:o,onChange:b,help:(0,l.__)("","featured-video")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Description","featured-video"),value:r,onChange:v,help:(0,l.__)("Optional","featured-video")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Button Text","featured-video"),value:s,onChange:e=>{p({linkLabel:void 0===e?"":e})},help:(0,l.__)("Optional","featured-video")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Button Destination","featured-video"),value:m,onChange:e=>{p({link:e})},help:(0,l.__)("Optional","featured-video")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.ToggleControl,{label:"Open in New Tab?",help:u?"Has rel nofollow.":"No rel nofollow.",checked:u,onChange:()=>{p({openNewTab:!u})}}))))),(0,t.createElement)("section",{className:"featured-video"},(0,t.createElement)("div",{className:"container-fluid single-video-container"},(0,t.createElement)("div",{className:"row align-items-start"},(0,t.createElement)("a",{href:"https://www.youtube.com/embed/"+f+"?autoplay=1&rel=0",className:"video-wrapper","aria-label":"Play Video","data-toggle":"lightbox",onClick:E},(0,t.createElement)("div",{className:"video-play"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,t.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff",strokeWidth:"2","data-name":"Ellipse 145"},(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,t.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),c?(0,t.createElement)("img",{className:"img-fluid video-thumb",src:c,alt:(0,l.__)("Play Video ","ufl-block")}):(0,t.createElement)("img",{className:"img-fluid video-thumb",src:"https://i1.ytimg.com/vi/"+f+"/0.jpg",alt:(0,l.__)("Play Video ","ufl-block")}))),(0,t.createElement)("div",{className:"featured-video-content-wrapper"},(0,t.createElement)("div",{className:"col-12 col-md-8"},(0,t.createElement)(a.RichText,{tagName:"h2",placeholder:(0,l.__)("Write title…"),value:o,onChange:b,className:"text-white"}),(0,t.createElement)(a.RichText,{tagName:"p",placeholder:(0,l.__)("Write title…"),value:r,onChange:v,className:"text-white"})),(0,t.createElement)(n.ExternalLink,{href:m,className:"button animated-border-button button-border-orange button-dark-bg",rel:d?"nofollow":"noopener noreferrer",target:u?"_blank":"_self",onClick:E},s)))))},save:e=>{const{attributes:{title:n,subTitle:o,mediaID:r,mediaURL:i,link:c,linkLabel:m,hasLinkNofollow:s,openNewTab:d,youtubeEmbed:u}}=e;return a.useBlockProps.save(),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("section",{className:"featured-video"},(0,t.createElement)("div",{className:"container-fluid single-video-container"},(0,t.createElement)("div",{className:"row align-items-start"},i?(0,t.createElement)("a",{href:"https://www.youtube.com/embed/"+u+"?autoplay=1&rel=0",className:"video-wrapper","aria-label":"Play Video","data-toggle":"lightbox"},(0,t.createElement)("div",{className:"video-play"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,t.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff",strokeWidth:"2","data-name":"Ellipse 145"},(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,t.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),(0,t.createElement)("img",{className:"img-fluid video-thumb",src:i,alt:(0,l.__)("Play Video","ufl-block")})):(0,t.createElement)("a",{href:"https://www.youtube.com/embed/"+u+"?autoplay=1&rel=0",className:"video-wrapper","aria-label":"Play Video","data-toggle":"lightbox"},(0,t.createElement)("div",{className:"video-play"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,t.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff",strokeWidth:"2","data-name":"Ellipse 145"},(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,t.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),(0,t.createElement)("img",{className:"img-fluid video-thumb",src:"https://i1.ytimg.com/vi/"+u+"/0.jpg",alt:(0,l.__)("Play Video","ufl-block")}))),(0,t.createElement)("div",{className:"featured-video-content-wrapper"},(0,t.createElement)("div",{className:"col-12 col-md-8"},(0,t.createElement)("h2",{className:"text-white"},n),(0,t.createElement)("p",{className:"text-white"},o)),c&&(0,t.createElement)("a",{href:c,className:"button animated-border-button button-border-orange button-dark-bg",rel:s?"nofollow":"noopener noreferrer",target:d?"_blank":"_self"},m)))))}})}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,l,n,o)=>{if(!l){var r=1/0;for(s=0;s<e.length;s++){for(var[l,n,o]=e[s],i=!0,c=0;c<l.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(s--,1);var m=n();void 0!==m&&(t=m)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[l,n,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={834:0,9526:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,o,[r,i,c]=l,m=0;if(r.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var s=c(a)}for(t&&t(l);m<r.length;m++)o=r[m],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[9526],(()=>a(4806)));n=a.O(n)})();