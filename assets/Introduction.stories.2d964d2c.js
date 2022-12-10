var i=Object.defineProperty;var r=(a,e)=>i(a,"name",{value:e,configurable:!0});import"./jsx-runtime.ef926b23.js";import{c as t,A as m,M as u}from"./Props.8b61da39.js";import"./iframe.a3615836.js";import"./string.cc952914.js";import"./es.map.constructor.51641b46.js";import"./es.number.to-fixed.ce8902a2.js";function s(){return s=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(a[l]=o[l])}return a},s.apply(this,arguments)}r(s,"_extends");const c={},d="wrapper";function p({components:a,...e}){return t(d,s({},c,e,{components:a,mdxType:"MDXLayout"}),t(u,{title:"Getting Started/Introduction",mdxType:"Meta"}),t("h1",null,"Getting Started"),t("h2",null,"Installation guide"),t("p",null,"Ensure your system has installed latest version of yarn or npm."),t("h3",null,"Installation via Yarn"),t("pre",null,t("code",{parentName:"pre",className:"language-shell"},`$ yarn add agg-ui-kit
`)),t("h3",null,"Installation via NPM"),t("pre",null,t("code",{parentName:"pre",className:"language-shell"},`$ npm install agg-ui-kit
`)),t("h3",null,"Import styles in you entry file"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`import "agg-ui-kit/dist/style.css"
`)),t("h3",null,"Example usage of the component"),t("pre",null,t("code",{parentName:"pre",className:"language-html"},`<template>
    <div>
        <AButton @click="handleClick" appearance="primary"> Awesome button </AButton>
    </div>
</template>

<script setup lang="ts">
    import { AButton } from "agg-ui-kit"

    const handleClick = () => {
        console.log("Click")
    }
<\/script>
`)))}r(p,"MDXContent");p.isMDXComponent=!0;const g=r(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const n={title:"Getting Started/Introduction",includeStories:["__page"]},y={};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>t(m,{mdxStoryNameToKey:y,mdxComponentAnnotations:n},t(p,null))};const A=["__page"];export{A as __namedExportsOrder,g as __page,n as default};
//# sourceMappingURL=Introduction.stories.2d964d2c.js.map
