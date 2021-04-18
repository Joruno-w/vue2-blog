<template>
	<div class="home-container" v-loading="loading">
		<ul @transitionend="handleTransitionend" class="carousel-container" ref="container" :style="{marginTop}" @wheel="handleWheel">
			<li v-for="item in data" :key="item.id">
				<CarouselItem :carousel="item"/>
			</li>
		</ul>
		<div v-show="index >= 1" class="icon icon-up" @click="switchTo(index-1)">
			<Icon type="arrowUp"/>
		</div>
		<div v-show="index < data.length - 1" class="icon icon-down" @click="switchTo(index+1)">
			<Icon type="arrowDown"/>
		</div>
		<ul class="indicators">
			<li :class="{active: index === i}" v-for="(item,i) in data" :key="item.id" @click="switchTo(i)"></li>
		</ul>
	</div>
</template>

<script>
import CarouselItem from "@/views/Home/CarouselItem";
import Icon from "@/components/Icon";
import {mapState} from 'vuex';

export default {
	components: {
		Icon,
		CarouselItem
	},
	data() {
		return {
			index: 0,
			containerHeight: 0,
			scrolling: false,
		}
	},
	created() {
		this.$store.dispatch('banner/fetchData');
	},
	mounted() {
		this.containerHeight = this.$refs.container.clientHeight;
		window.addEventListener("resize",this.handleResize);
	},
	destroyed() {
		window.removeEventListener("resize",this.handleResize);
	},
	computed: {
		marginTop(){
			return - this.index * this.containerHeight + 'px';
		},
		...mapState('banner',['loading','data'])
	},
	methods: {
		switchTo(i){
			this.index = i;
		},
		handleResize(){
			this.containerHeight = this.$refs.container.clientHeight;
		},
		handleWheel(e){
			 if (this.scrolling){
			 	return;
			 }
			 if (e.deltaY < -20 && this.index > 0){
				this.scrolling = true;
				this.index --;
			 }else if (e.deltaY > 20 && this.index < this.data.length - 1){
				this.scrolling = true;
				this.index ++;
			 }
		},
		handleTransitionend(){
			this.scrolling = false;
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
@keyframes jump-down{
	from{
		transform: translateY(-10px);
	}
	50%{
		transform: translateY(10px);
	}
	to{
		transform: translateY(-10px);
	}
}
@keyframes jump-up{
	from{
		transform: translateY(10px);
	}
	50%{
		transform: translateY(-10px);
	}
	to{
		transform: translateY(10px);
	}
}
.home-container {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	@gap: 25px;
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.carousel-container{
		width: 100%;
		height: 100%;
		transition: .7s;
		li{
			width: 100%;
			height: 100%;
		}
	}
	.icon {
		.self-center();
		cursor: pointer;
		font-size: 30px;
		color: @gray;
		&.icon-up {
			top: @gap;
			animation: jump-up 1.5s infinite;
		}
		&.icon-down {
			bottom: @gap;
			top: auto;
			animation: jump-down 1.5s infinite;
		}
	}
	.indicators{
		.self-center();
		left: auto;
		right: 10px;
		li{
			width:5px;
			height: 5px;
			border-radius: 50%;
			border: 1px solid #fff;
			margin-bottom: 10px;
			cursor: pointer;
			&.active{
				background-color: #fff;
			}
		}
	}
}
</style>
