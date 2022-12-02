var m=Object.defineProperty;var s=(t,n)=>m(t,"name",{value:n,configurable:!0});import{u as f,a as y,d as h,b as l,r as i,e as u,f as v,n as g,g as c}from"./vue.esm-bundler.a324432b.js";const B=s(()=>{const t=f();return y(()=>{var a;const n=t==null?void 0:t.default;if(!n)return!1;const o=n()[0];return o?!!((a=o.children)!=null&&a.toString().trim()):!1})},"hasDefaultSlot"),b=["disabled"],_={key:0,class:"icon__container"},S={key:1},d=h({__name:"AButton",props:{disabled:{type:Boolean,default:!1},size:{default:"md"},appearance:{default:"primary"},ghost:{type:Boolean,default:!1}},setup(t){const n=B();return(e,o)=>(c(),l("button",{class:g(["btn",{disabled:t.disabled,ghost:t.ghost,[t.size]:!0,[t.appearance]:!0}]),disabled:t.disabled},[e.$slots.icon?(c(),l("span",_,[i(e.$slots,"icon",{},void 0,!0)])):u("",!0),v(n)?(c(),l("span",S,[i(e.$slots,"default",{},void 0,!0)])):u("",!0)],10,b))}});const x=s((t,n)=>{const e=t.__vccOpts||t;for(const[o,a]of n)e[o]=a;return e},"_export_sfc"),p=x(d,[["__scopeId","data-v-c1fa3287"]]);d.__docgenInfo={exportName:"default",displayName:"AButton",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:'"md"'}},{name:"appearance",required:!1,type:{name:"ButtonAppearance"},defaultValue:{func:!1,value:'"primary"'}},{name:"ghost",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"},{name:"default"}]};const M={parameters:{storySource:{source:`import { Meta, StoryFn } from "@storybook/vue3"
import AButton from "./AButton.vue"

export default {
	title: "Components/Button",
	component: AButton,
	argTypes: {
		default: {
			table: {
				type: {
					summary: null,
				},
			},
			control: {
				type: "text",
			},
			description: "Use this slot to place content inside the button",
		},
		icon: {
			table: {
				type: {
					summary: null,
				},
			},
			control: {
				type: "text",
			},
			description: "Use this slot to place an icon inside the button",
		},
		appearance: {
			description: "Appearance of the button",
			control: {
				options: ["primary", "secondary", "tertiary", "danger", "success"],
				type: "select",
			},
		},
		size: {
			description: "Size of the button",
			control: {
				options: ["xs", "sm", "md", "lg"],
				type: "select",
			},
		},
	},
} as Meta<typeof AButton>

const Template: StoryFn<typeof AButton> = (args) => ({
	components: { AButton },
	setup() {
		return { args }
	},
	template: \`
		<AButton v-bind="args">
		{{ args.default }}
		<template v-if="\${!!args["icon"]}" #icon>
			\${args["icon"]}
		</template>
		</AButton>
	\`,
})

export const Primary = Template.bind({})
Primary.args = {
	default: "Button",
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	default: "Button",
	icon: \`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200
		440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99
		 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z"/>
	 </svg>
	\`,
}

export const IconButton = Template.bind({})
IconButton.args = {
	icon: \`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200
		440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99
		 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z"/>
	 </svg>
	\`,
}
`,locationsMap:{primary:{startLoc:{col:42,line:47},endLoc:{col:2,line:60},startBody:{col:42,line:47},endBody:{col:2,line:60}},"with-icon":{startLoc:{col:42,line:47},endLoc:{col:2,line:60},startBody:{col:42,line:47},endBody:{col:2,line:60}},"icon-button":{startLoc:{col:42,line:47},endLoc:{col:2,line:60},startBody:{col:42,line:47},endBody:{col:2,line:60}}}}},title:"Components/Button",component:p,argTypes:{default:{table:{type:{summary:null}},control:{type:"text"},description:"Use this slot to place content inside the button"},icon:{table:{type:{summary:null}},control:{type:"text"},description:"Use this slot to place an icon inside the button"},appearance:{description:"Appearance of the button",control:{options:["primary","secondary","tertiary","danger","success"],type:"select"}},size:{description:"Size of the button",control:{options:["xs","sm","md","lg"],type:"select"}}}},r=s(t=>({components:{AButton:p},setup(){return{args:t}},template:`
		<AButton v-bind="args">
		{{ args.default }}
		<template v-if="${!!t.icon}" #icon>
			${t.icon}
		</template>
		</AButton>
	`}),"Template"),w=r.bind({});w.args={default:"Button"};const C=r.bind({});C.args={default:"Button",icon:`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200
		440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99
		 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z"/>
	 </svg>
	`};const A=r.bind({});A.args={icon:`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200
		440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99
		 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z"/>
	 </svg>
	`};const T=["Primary","WithIcon","IconButton"];export{A as IconButton,w as Primary,C as WithIcon,T as __namedExportsOrder,M as default};
//# sourceMappingURL=AButton.stories.0903fe8d.js.map
