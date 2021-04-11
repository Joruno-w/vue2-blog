<template>
	<div class="pager-container">
		<a href="" @click.prevent="pageChange(1)" :class="{disabled: current === 1}">|&lt;&lt;</a>
		<a href="" @click.prevent="pageChange(current - 1)" :class="{disabled: current === 1}">&lt;&lt;</a>
		<a href=""
		   v-for="(n,i) in numbers"
		   :key="i"
		   @click.prevent="pageChange(n)"
		   :class="{active: n === current}"
		>{{ n }}</a>
		<a href="" @click.prevent="pageChange(current+1)" :class="{disabled: current === pageNumber}">&gt;&gt;</a>
		<a href="" @click.prevent="pageChange(pageNumber)" :class="{disabled: current === pageNumber}">&gt;&gt;|</a>
	</div>
</template>

<script>
export default {
	name: "Pager",
	props: {
		current: {
			type: Number,
			default: 1
		},
		limit: {
			type: Number,
			default: 5
		},
		total: {
			type: Number,
			default: 100
		},
		visibleNumber: {
			type: Number,
			default: 10
		}
	},
	methods: {
		pageChange(newPage){
			if (newPage < 1){
				newPage = 1;
			}
			if (newPage > this.pageNumber){
				newPage = this.pageNumber;
			}
			if (newPage === this.current) return;
			this.$emit('pageChange',newPage)
		}
	},
	computed: {
		pageNumber() {
			return Math.ceil(this.total / this.limit);
		},
		visibleMin() {
			let min = this.current - Math.floor(this.visibleNumber / 2);
			if (min < 1) {
				min = 1;
			}
			return min;
		},
		visibleMax() {
			let max = this.visibleMin + this.visibleNumber - 1;
			if (max > this.pageNumber) {
				max = this.pageNumber;
			}
			return max;
		},
		numbers() {
			const nums = [];
			for (let i = this.visibleMin; i <= this.visibleMax; i++) {
				nums.push(i);
			}
			return nums;
		}
	}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.pager-container {
	display: flex;
	justify-content: center;
	margin-top: 50px;

	a {
		margin: 0 10px;
		color: @primary;

		&.active {
			color: @words;
			font-weight: bold;
			cursor: text;
		}

		&.disabled {
			cursor: not-allowed;
			color: @lightWords;
		}
	}
}
</style>
