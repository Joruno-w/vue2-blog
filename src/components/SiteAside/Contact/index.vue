<template>
	<ul class="contact-container">
		<li v-for="item in list" :key="item.icon">
			<a href="">
				<Icon :type="item.icon" :class="{weixin: item.icon === 'weixin'}"/>
				<span>{{item.text}}</span>
			</a>
			<div class="pop">
				<img src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="">
			</div>
		</li>
	</ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	components: {
		Icon
	},
	data(){
		return{
			list: [
				{
					icon: 'github',
					text: 'ow-mrtq',
				},
				{
					icon: 'mail',
					text: '1710642275@qq.com',
				},
				{
					icon: 'qq',
					text: '1710642275',
				},
				{
					icon: 'weixin',
					text: 'wsl1710642275',
				},
			]
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
	.contact-container {
		list-style: none;
		color: @lightWords;
		@itemHeight: 30px;
		padding-left: 25px;
		li{
			position: relative;
			height: @itemHeight;
			margin: 15px 0;
			a{
				display: flex;
				align-items: center;
			}
			.weixin{
				margin-left: -3px;
				font-size: 30px;
			}
			&:hover{
				color: @primary;
				cursor: pointer;
				.pop{
					transform: scaleY(1);
				}
			}
			.pop{
				transform: scaleY(0);
				transform-origin: center bottom;
				position: absolute;
				padding: 10px 15px;
				background-color: #fff;
				border-radius: 5px;
				left: 0;
				bottom: @itemHeight + 5px;
				transition: .3s;
				img{
					width: 100%;
					height: 100%;
				}
				&::after{
					content: "";
					position: absolute;
					background-color: #fff;
					width: 8px;
					height: 8px;
					left: 50%;
					transform: translateX(-50%) rotate(45deg);
					bottom: -4px;
				}
			}
		}
	}
	.icon-container{
		font-size: 24px;
		margin-right: 7px;
	}
</style>
