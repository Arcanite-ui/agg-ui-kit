var l=Object.defineProperty;var n=(o,e)=>l(o,"name",{value:e,configurable:!0});import"./jsx-runtime.5029a01a.js";import{c as t,A as m,M as d}from"./Props.d4c265c0.js";import"./iframe.b2ef32d2.js";import"./string.f9337457.js";import"./es.map.constructor.6ca83134.js";import"./es.number.to-fixed.f955c00b.js";function s(){return s=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(o[a]=i[a])}return o},s.apply(this,arguments)}n(s,"_extends");const g={},c="wrapper";function p({components:o,...e}){return t(c,s({},g,e,{components:o,mdxType:"MDXLayout"}),t(d,{title:"Getting Started/Introduction",mdxType:"Meta"}),t("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"subheading"},"Learn"),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in ",t("code",null,"stories/Introduction.stories.mdx")))}n(p,"MDXContent");p.isMDXComponent=!0;const x=n(()=>{throw new Error("Docs-only story")},"__page");x.parameters={docsOnly:!0};const r={title:"Getting Started/Introduction",includeStories:["__page"]},h={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>t(m,{mdxStoryNameToKey:h,mdxComponentAnnotations:r},t(p,null))};const N=["__page"];export{N as __namedExportsOrder,x as __page,r as default};
//# sourceMappingURL=Introduction.stories.19b3a4dd.js.map
