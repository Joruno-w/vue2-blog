<template>
	<div class='blog-toc-container'>
		<h2>目录</h2>
		<RightList :list="tocWithSelect" @select="handleSelect"/>
	</div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import debounce from "@/utils/debounce";
export default {
	name: "BlogTOC",
	components: {
		RightList
	},
	props: {
		toc: {
			type: Array
		}
	},
	data(){
		return{
			activeAnchor: ''
		}
	},
	computed: {
		tocWithSelect(){
			const getTOC = (toc = [])=>{
				return toc.map(it=>({
					...it,
					selected: it.anchor === this.activeAnchor,
					children: getTOC(it.children)
				}))
			}
			return getTOC(this.toc);
		},
		doms(){
			const doms = [];
			const addToDoms = toc=>{
				for (const t of toc){
					doms.push(document.getElementById(t.anchor));
					if (t.children && t.children.length){
						addToDoms(t.children);
					}
				}
			}
			addToDoms(this.toc);
			return doms;
		}
	},
	created() {
		this.debounceSetSelect = debounce(this.setSelect,300);
		this.$bus.$on('mainScroll',this.debounceSetSelect);
	},
	destroyed() {
		this.$bus.$off('mainScroll',this.debounceSetSelect);
	},
	methods: {
		handleSelect(item){
			location.hash = item.anchor;
		},
		setSelect(scrollDom){
			if (!scrollDom) return;
			this.activeAnchor = '';
			const range = 200;
			for (const dom of this.doms){
				const top = dom.getBoundingClientRect().top;
				if (top >= 0 && top <= range){
					this.activeAnchor = dom.id;
				}else if (top > range){
					return;
				}else{
					this.activeAnchor = dom.id;
				}
			}
		}
	}
}
</script>

<style scoped lang="less">
.blog-toc-container{
	h2{
		font-weight: bold;
		letter-spacing: .5em;
		font-size: 1em;
		margin: 0;
	}
}
</style>
