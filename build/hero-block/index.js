(()=>{"use strict";var e,t={5754:()=>{const e=window.wp.blocks,t=JSON.parse('{"name":"create-block/hero-block"}'),a=window.React,l=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.components,{name:c}=t;(0,e.registerBlockType)(c,{edit:e=>{const{attributes:{pretitle:t,title:c,mediaID:o,mediaURL:s,movieID:i,movieURL:m,hero_excerpt:h,linkLabel:d,animated_border_button:b,hasLinkNofollow:p,openNewTab:u,heroSplit:v},setAttributes:g}=e,E=(0,r.useBlockProps)(),_=e=>{g({pretitle:e})},N=e=>{g({title:e})},w=e=>{g({hero_excerpt:e})},x=e=>{e.preventDefault()};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:(0,l.__)("Hero","hero-block-block"),initialOpen:!0},(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.ToggleControl,{label:"Hero Split",help:v?"Has rel nofollow.":"No rel nofollow.",checked:v,onChange:()=>{g({heroSplit:!v})}}))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(r.MediaUploadCheck,null,(0,a.createElement)(r.MediaUpload,{label:"Hero Image",onSelect:e=>{g({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:o,render:({open:e})=>(0,a.createElement)(n.Button,{className:o?"image-button":"button button-large",onClick:e},o?(0,l.__)("Change Image","ufl-block"):(0,l.__)("Upload Image","ufl-block"))})),0!=o&&(0,a.createElement)(r.MediaUploadCheck,null,(0,a.createElement)(n.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","ufl-block"))))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(r.MediaUploadCheck,null,(0,a.createElement)(r.MediaUpload,{label:"Hero Movie Upload",value:i,onSelect:e=>{g({movieURL:e.url,movieID:e.id})},render:({open:e})=>(0,a.createElement)(n.Button,{className:i?"image-button":"button button-large",onClick:e},i?(0,l.__)("Change Movie","ufl-block"):(0,l.__)("Upload Movie","ufl-block"))})),i&&(0,a.createElement)(r.MediaUploadCheck,null,(0,a.createElement)(n.Button,{onClick:()=>{e.setAttributes({movieID:0,movieURL:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove Movie","ufl-block"))))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.TextControl,{label:(0,l.__)("Hero Intro","hero-block"),value:t,onChange:_,help:(0,l.__)("Optional","hero-block")}))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.TextControl,{label:(0,l.__)("Hero Title","hero-block"),value:c,onChange:N,help:(0,l.__)("","hero-block")}))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.TextareaControl,{label:(0,l.__)("Hero Description","hero-block"),value:h,onChange:w,help:(0,l.__)("","hero-block")}))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.TextControl,{label:(0,l.__)("Button Text","hero-block"),value:d,onChange:e=>{g({linkLabel:e})},help:(0,l.__)("","hero-block")}))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.TextControl,{label:(0,l.__)("Button Destination","hero-block"),value:b,onChange:e=>{g({animated_border_button:e})},help:(0,l.__)("","hero-block")}))),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.ToggleControl,{label:"Open in New Tab?",help:u?"Has rel nofollow.":"No rel nofollow.",checked:u,onChange:()=>{g({openNewTab:!u})}}))))),s&&m?(0,a.createElement)("section",{...E},(0,a.createElement)("div",{className:"hero-wrapper verScroll_Col hero-container-video"},(0,a.createElement)("video",{id:"hero-video",className:"hero-bg-img",style:{backgroundImage:"url("+s+")"},muted:!0,autoPlay:!0,playsinline:!0,loop:!0},(0,a.createElement)("source",{src:m,type:"video/mp4"})),(0,a.createElement)("div",{className:"banner-video-controls"},(0,a.createElement)("button",{className:"icon-button play-video",id:"play-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-play"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},(0,a.createElement)("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Play")),(0,a.createElement)("button",{className:"icon-button pause-video",id:"pause-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-pause"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512"},(0,a.createElement)("path",{d:"M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Pause"))),(0,a.createElement)("div",{className:"hero-object-wrapper"},(0,a.createElement)("div",{className:"hero-object",id:"object1"},(0,a.createElement)("img",{className:"vce-single-image",width:"10",height:"219",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp",alt:""})),(0,a.createElement)("div",{className:"hero-object",id:"object2"},(0,a.createElement)("img",{loading:"lazy",className:"vce-single-image",width:"2",height:"363",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp",alt:""}))),(0,a.createElement)("div",{className:"hero-banner-wrapper hero__text"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero Pre Title"),value:t,onChange:_,className:"banner_subtitle_text"})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText,{tagName:"h1",className:"banner_title_text",placeholder:(0,l.__)("Write the instructions…"),value:c,onChange:N}),(0,a.createElement)("br",null),(0,a.createElement)("div",{className:"hero-excerpt-btn-wrapper"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero excerpt"),value:h,onChange:w,className:"hero__excerpt"}),(0,a.createElement)(n.ExternalLink,{href:b,className:"button animated-border-button button-border-orange button-text-light",rel:p?"nofollow":"noopener noreferrer",target:u?"_blank":"_self",onClick:x},d)))))):m?(0,a.createElement)("section",{...E},(0,a.createElement)("div",{className:"hero-wrapper verScroll_Col hero-container-video"},(0,a.createElement)("video",{id:"hero-video",className:"hero-bg-img",muted:!0,autoPlay:!0,playsinline:!0,loop:!0},(0,a.createElement)("source",{src:m,type:"video/mp4"})),(0,a.createElement)("div",{className:"banner-video-controls"},(0,a.createElement)("button",{className:"icon-button play-video",id:"play-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-play"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},(0,a.createElement)("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Play")),(0,a.createElement)("button",{className:"icon-button pause-video",id:"pause-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-pause"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512"},(0,a.createElement)("path",{d:"M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Pause"))),(0,a.createElement)("div",{className:"hero-object-wrapper"},(0,a.createElement)("div",{className:"hero-object",id:"object1"},(0,a.createElement)("img",{className:"vce-single-image",width:"10",height:"219",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp",alt:""})),(0,a.createElement)("div",{className:"hero-object",id:"object2"},(0,a.createElement)("img",{loading:"lazy",className:"vce-single-image",width:"2",height:"363",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp",alt:""}))),(0,a.createElement)("div",{className:"hero-banner-wrapper hero__text"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero Pre Title"),value:t,onChange:_,className:"banner_subtitle_text"})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText,{tagName:"h1",className:"banner_title_text",placeholder:(0,l.__)("Write the instructions…"),value:c,onChange:N}),(0,a.createElement)("br",null),(0,a.createElement)("div",{className:"hero-excerpt-btn-wrapper"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero excerpt"),value:h,onChange:w,className:"hero__excerpt"}),(0,a.createElement)(n.ExternalLink,{href:b,className:"button animated-border-button button-border-orange button-text-light",rel:p?"nofollow":"noopener noreferrer",target:u?"_blank":"_self",onClick:x},d)))))):v?(0,a.createElement)("section",{className:"container-fluid p-0 w-100 hero-split-container"},(0,a.createElement)("div",{className:"hero-wrapper hero-split-wrapper"},(0,a.createElement)("div",{className:"split-hero-content"},(0,a.createElement)("div",{className:"split-hero-content-wrapper"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero Pre Title"),value:t,onChange:_,className:"banner_subtitle_text"})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText,{tagName:"h1",className:"banner_title_text",placeholder:(0,l.__)("Write the instructions…"),value:c,onChange:N}),(0,a.createElement)("br",null),(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero excerpt"),value:h,onChange:w,className:"hero__excerpt"}),(0,a.createElement)(n.ExternalLink,{href:b,className:"button animated-border-button button-border-orange button-dark-bg",rel:p?"nofollow":"noopener noreferrer",target:u?"_blank":"_self",onClick:x},d)))),(0,a.createElement)("div",{className:"hero-bg-img",style:{backgroundImage:"url("+s+")"}}))):(0,a.createElement)("section",{...E},(0,a.createElement)("div",{className:"hero-wrapper verScroll_Col"},(0,a.createElement)("div",{className:"hero-bg-img",style:{backgroundImage:"url("+s+")"}}),(0,a.createElement)("div",{className:"hero-object-wrapper"},(0,a.createElement)("div",{className:"hero-object",id:"object1"},(0,a.createElement)("img",{className:"vce-single-image",width:"10",height:"219",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp",alt:""})),(0,a.createElement)("div",{className:"hero-object",id:"object2"},(0,a.createElement)("img",{loading:"lazy",className:"vce-single-image",width:"2",height:"363",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp",alt:""}))),(0,a.createElement)("div",{className:"hero-banner-wrapper hero__text"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero Pre Title"),value:t,onChange:_,className:"banner_subtitle_text"})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText,{tagName:"h1",className:"banner_title_text",placeholder:(0,l.__)("Write the instructions…"),value:c,onChange:N}),(0,a.createElement)("br",null),(0,a.createElement)("div",{className:"hero-excerpt-btn-wrapper"},(0,a.createElement)(r.RichText,{tagName:"p",placeholder:(0,l.__)("Write Hero excerpt"),value:h,onChange:w,className:"hero__excerpt"}),(0,a.createElement)(n.ExternalLink,{href:b,className:"button animated-border-button button-border-orange button-text-light",rel:p?"nofollow":"noopener noreferrer",target:u?"_blank":"_self",onClick:x},d)))))))},save:e=>{const{attributes:{pretitle:t,title:l,mediaID:n,mediaURL:c,movieID:o,movieURL:s,hero_excerpt:i,linkLabel:m,animated_border_button:h,hasLinkNofollow:d,openNewTab:b,heroSplit:p}}=e,u=r.useBlockProps.save();return(0,a.createElement)(a.Fragment,null,c&&s?(0,a.createElement)("section",{...u},(0,a.createElement)("div",{className:"hero-wrapper verScroll_Col hero-container-video"},(0,a.createElement)("video",{id:"hero-video",className:"hero-bg-img",style:{backgroundImage:"url("+c+")"},muted:!0,autoPlay:!0,playsinline:!0,loop:!0},(0,a.createElement)("source",{src:s,type:"video/mp4"})),(0,a.createElement)("div",{className:"banner-video-controls"},(0,a.createElement)("button",{className:"icon-button play-video",id:"play-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-play"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},(0,a.createElement)("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Play")),(0,a.createElement)("button",{className:"icon-button pause-video",id:"pause-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-pause"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512"},(0,a.createElement)("path",{d:"M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Pause"))),(0,a.createElement)("div",{className:"hero-object-wrapper"},(0,a.createElement)("div",{className:"hero-object",id:"object1"},(0,a.createElement)("img",{className:"vce-single-image",width:"10",height:"219",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp",alt:""})),(0,a.createElement)("div",{className:"hero-object",id:"object2"},(0,a.createElement)("img",{loading:"lazy",className:"vce-single-image",width:"2",height:"363",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp",alt:""}))),(0,a.createElement)("div",{className:"hero-banner-wrapper hero__text"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"banner_subtitle_text",value:t})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText.Content,{tagName:"h1",value:l}),(0,a.createElement)("br",null),(0,a.createElement)("div",{className:"hero-excerpt-btn-wrapper"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"hero__excerpt",value:i}),h&&(0,a.createElement)("a",{href:h,className:"button animated-border-button button-border-orange button-text-light",rel:d?"nofollow":"noopener noreferrer",target:b?"_blank":"_self"},m)))))):s?(0,a.createElement)("section",{...u},(0,a.createElement)("div",{className:"hero-wrapper verScroll_Col hero-container-video"},(0,a.createElement)("video",{id:"hero-video",className:"hero-bg-img",muted:!0,autoPlay:!0,playsinline:!0,loop:!0},(0,a.createElement)("source",{src:s,type:"video/mp4"})),(0,a.createElement)("div",{className:"banner-video-controls"},(0,a.createElement)("button",{className:"icon-button play-video",id:"play-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-play"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},(0,a.createElement)("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Play")),(0,a.createElement)("button",{className:"icon-button pause-video",id:"pause-video"},(0,a.createElement)("i",{"aria-hidden":"true",className:"fas fa-pause"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512"},(0,a.createElement)("path",{d:"M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"})))," ",(0,a.createElement)("span",{className:"visually-hidden sr-only"},"Pause"))),(0,a.createElement)("div",{className:"hero-object-wrapper"},(0,a.createElement)("div",{className:"hero-object",id:"object1"},(0,a.createElement)("img",{className:"vce-single-image",width:"10",height:"219",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp",alt:""})),(0,a.createElement)("div",{className:"hero-object",id:"object2"},(0,a.createElement)("img",{loading:"lazy",className:"vce-single-image",width:"2",height:"363",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp",alt:""}))),(0,a.createElement)("div",{className:"hero-banner-wrapper hero__text"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"banner_subtitle_text",value:t})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText.Content,{tagName:"h1",value:l}),(0,a.createElement)("br",null),(0,a.createElement)("div",{className:"hero-excerpt-btn-wrapper"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"hero__excerpt",value:i}),h&&(0,a.createElement)("a",{href:h,className:"button animated-border-button button-border-orange button-text-light",rel:d?"nofollow":"noopener noreferrer",target:b?"_blank":"_self"},m)))))):p?(0,a.createElement)("section",{className:"container-fluid p-0 w-100 hero-split-container"},(0,a.createElement)("div",{className:"hero-wrapper hero-split-wrapper"},(0,a.createElement)("div",{className:"split-hero-content"},(0,a.createElement)("div",{className:"split-hero-content-wrapper"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"banner_subtitle_text",value:t})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText.Content,{tagName:"h1",value:l}),(0,a.createElement)("br",null),(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"hero__excerpt",value:i}),h&&(0,a.createElement)("a",{href:h,className:"button animated-border-button button-border-orange button-text-light",rel:d?"nofollow":"noopener noreferrer",target:b?"_blank":"_self"},m)))),(0,a.createElement)("div",{className:"hero-bg-img",style:{backgroundImage:"url("+c+")"}}))):(0,a.createElement)("section",{...u},(0,a.createElement)("div",{className:"hero-wrapper verScroll_Col"},c&&(0,a.createElement)("div",{className:"hero-bg-img",style:{backgroundImage:"url("+c+")"}}),(0,a.createElement)("div",{className:"hero-object-wrapper"},(0,a.createElement)("div",{className:"hero-object",id:"object1"},(0,a.createElement)("img",{className:"vce-single-image",width:"10",height:"219",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp",alt:""})),(0,a.createElement)("div",{className:"hero-object",id:"object2"},(0,a.createElement)("img",{loading:"lazy",className:"vce-single-image",width:"2",height:"363",src:"/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp",alt:""}))),(0,a.createElement)("div",{className:"hero-banner-wrapper hero__text"},(0,a.createElement)("div",{className:"banner_subtitle"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"banner_subtitle_text",value:t})),(0,a.createElement)("div",{className:"banner_title"},(0,a.createElement)(r.RichText.Content,{tagName:"h1",value:l}),(0,a.createElement)("br",null),(0,a.createElement)("div",{className:"hero-excerpt-btn-wrapper"},(0,a.createElement)(r.RichText.Content,{tagName:"p",className:"hero__excerpt",value:i}),h&&(0,a.createElement)("a",{href:h,className:"button animated-border-button button-border-orange button-text-light",rel:d?"nofollow":"noopener noreferrer",target:b?"_blank":"_self"},m)))))))}})}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,a,r,n)=>{if(!a){var c=1/0;for(m=0;m<e.length;m++){for(var[a,r,n]=e[m],o=!0,s=0;s<a.length;s++)(!1&n||c>=n)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(o=!1,n<c&&(c=n));if(o){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,r,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={7350:0,1898:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[c,o,s]=a,i=0;if(c.some((t=>0!==e[t]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(s)var m=s(l)}for(t&&t(a);i<c.length;i++)n=c[i],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},a=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[1898],(()=>l(5754)));r=l.O(r)})();