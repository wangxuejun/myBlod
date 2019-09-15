<template>
	<div class="component kmAricle">
		<div class="kmArcile-common_head">
			<img src="../../../static/img/head/men.jpg">
			<span>陨落</span>
			<div class="kmArcile-common_tag">前端/js</div>
		</div>
		<div class="kmArcile-common_content">
			<div class="kmArcile-common_left">
				<h3>JavaScript数据结构 - 栈</h3>
				<p>栈的使用遍布程序语言实现的方方面面，从表达式求值到处理函数调用。</p>
			</div>
			<div class="kmArcile-common_right" v-if="info.img">
				<img src="../../../static/img/abridge.jpg">
				<van-image
				  width="100"
				  height="100"
				  fit="contain"
				  lazy-load
				  src="../../../static/img/abridge.jpg"
				/>
			</div>
		</div>
		<div class="kmArcile-common_tool" @click.stop="stop">
			<!-- <van-rate
			  v-model="info.love"
			  icon="star"
			  color="#ff9900"
			  void-color="#dcdee2"
			/> -->
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			info: {
				type: Object,
				required: true
			}
		},
		methods:{
			stop () {}
		}
	}
</script>
<style scoped lang="less">
	@import '../../assets/css/common.less';
	.component{
		background-color: white;
		margin-bottom: 10px;
		padding: 15px;
	}
	.kmArcile-common_head{
		.flex;
		.kmArcile-common_tag{
			flex: 1;
			text-align: right;
		}
		img{
			overflow: hidden;
			margin-right: 10px;
			border-radius: 50%;
		}
	}
	.kmArcile-common_content{
		.flex;
	}
	.kmArcile-common_left{
		p{
			font-size: 14px;
		}
	}
	.kmArcile-common_right{
		width: 100px;
		height: 100px;
		overflow: hidden;
		flex-shrink: 0;
		margin-left: 10px;
		position: relative;
		border-radius: 5px;
		img{
			height: 100%;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.kmArcile-common_tool{
		padding-top: 10px;
		.van-rate{
			width: 100px;
			.flex;
		}
	}
	@media screen and (max-width: 700px) {
		.kmArcile-common_head{
			img{
				width: 30px;
				height: 30px;
			}
			span{

			}
		}
	}
	@media screen and (min-width: 701px){
		.kmArcile-common_head{
			img{
				width: 50px;
				height: 50px;
			}
			span{

			}
		}
	}
</style>