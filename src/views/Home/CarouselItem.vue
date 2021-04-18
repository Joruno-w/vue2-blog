<template>
	<div class="carousel-item-container" ref="container" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
		<div class="carousel-img" :style="imgPosition" ref="img">
			<ImageLoader @load="this.showWords" :src="carousel.bigImg" :placeholder="carousel.midImg"/>
		</div>
		<div class="title" ref="title">{{carousel.title}}</div>
		<div class="desc" ref="desc">{{carousel.description}}</div>
	</div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
	name: "CarouselItem",
	props: ['carousel'],
	data(){
		return{
			titleWidth: 0,
			descWidth: 0,
			mouseX: 0,
			mouseY: 0,
			innerSize: null,
			containerSize: null,
		}
	},
	components: {
		ImageLoader,
	},
	computed: {
		imgPosition(){
			if (!this.innerSize || !this.containerSize) return;
			const extraWidth = this.innerSize.width - this.containerSize.width;
			const extraHeight = this.innerSize.height - this.containerSize.height;
			const left = (-extraWidth / this.containerSize.width) * this.mouseX;
			const top = (-extraHeight / this.containerSize.height) * this.mouseY;
			return{
				transform: `translate(${left}px,${top}px)`
			}
		},
		center(){
			return{
				x: this.$refs.container.clientWidth / 2,
				y: this.$refs.container.clientHeight / 2
			}
		}
	},
	mounted() {
		this.titleWidth = this.$refs.title.clientWidth;
		this.descWidth = this.$refs.desc.clientWidth;
		this.setSize();
		this.mouseX = this.center.x;
		this.mouseY = this.center.y;
		window.addEventListener("resize",this.setSize);
	},
	destroyed() {
		window.removeEventListener("resize",this.setSize)
	},
	methods: {
		showWords(){
			this.$refs.title.style.opacity = 1;
			this.$refs.title.style.width = 0;
			this.$refs.title.clientWidth;
			this.$refs.title.style.transition = '.6s';
			this.$refs.title.style.width = this.titleWidth + 'px';

			this.$refs.desc.style.opacity = 1;
			this.$refs.desc.style.width = 0;
			this.$refs.desc.clientWidth;
			this.$refs.desc.style.transition = '.6s .6s';
			this.$refs.desc.style.width = this.descWidth + 'px';
		},
		setSize(){
			this.innerSize = {
				width: this.$refs.img.clientWidth,
				height: this.$refs.img.clientHeight
			}
			this.containerSize = {
				width: this.$refs.container.clientWidth,
				height: this.$refs.container.clientHeight
			}
		},
		handleMouseMove(e){
			const {left,top} = this.$refs.container.getBoundingClientRect();
			this.mouseX = e.clientX - left;
			this.mouseY = e.clientY - top;
		},
		handleMouseLeave(){
			this.mouseX = this.center.x;
			this.mouseX = this.center.y;
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container{
	width: 100%;
	height: 100%;
	color: #fff;
	position: relative;
	overflow: hidden;
}
.carousel-img{
	width: 110%;
	height: 110%;
	transition: .4s;
	position: absolute;
	left: 0;
	top: 0;
}
.title,.desc{
	position: absolute;
	left: 50px;
	white-space: nowrap;
	overflow: hidden;
	text-shadow: 1px 0 1px rgba(0,0,0,.5),
	-1px 0 1px rgba(0,0,0,.5),
	0 1px 1px rgba(0,0,0,.5),
	0 -1px 1px rgba(0,0,0,.5);
	opacity: 0;
}
.title{
	font-size: 25px;
	top: calc(55% - 20px);
}
.desc{
	font-size: 18px;
	top: calc(55% + 20px);
	color: lighten(@lightWords,20%);
}
</style>
