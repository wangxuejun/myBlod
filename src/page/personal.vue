<template>
  <div class="inPage">
    <div class="header">
      <img src="../assets/img/head/men.jpg">
      <div>
        <p>陨落</p>
			</div>
		</div>
    <div :class="'line ' + item.cls" v-for="(item, index) in list" :key="index">
			<Icon :type="item.icon" class="leftIcon" :color="item.color"/>
			<div>
				<span>{{item.name}}</span>
				<Icon type="ios-arrow-forward" color="#515a6e"/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'personalPage',
  data () {
    return {
      list: [
				{
					cls: 'space',
					icon: 'md-notifications',
					color: '#00BFFF',
					name: '消息中心'
				},
				{
					icon: 'ios-bug',
					color: '#EE6363',
					name: '阅读记录'
				},
				{
					cls: 'borderNone',
					icon: 'md-star',
					color: '#FFB90F',
					name: '我的收藏'
				},
				{
					cls: 'space',
					icon: 'ios-pricetag',
					color:'#7a86d5',
					name: '标签管理'
				},
				{
					icon: 'md-create',
					color: '#19be6b',
					name: '写作记录'
				},
				{
					cls: 'borderNone',
					icon: 'md-person-add',
					color: '#F4A460',
					name: '我的关注'
				},
				{
					cls: 'space',
					icon: 'md-settings',
					color: '#9C9C9C',
					name: '设置'
				}
			]
    }
  }
};
</script>
<style scoped lang="less">
@import '../assets/css/common.less';
.inPage{
	background-color: @color_bg;
	min-height: calc(100% + 50px);
}
.header{
	margin-top: -50px;
  height: 200px;
  width: 100%;
  color: white;
  background: linear-gradient(@color_stress, @color_primary);
  padding: 50px 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
  	width: 60px;
  	height: 60px;
  	border-radius: 30px;
  }
  >div{
  	padding-top: 10px;
  	p{
  		text-align: center;
  	}
  }
}
.line{
	.flex;
	background-color: white;
	align-items: center;
	height: 54px;
	padding: 0 10px;
	&.space{
		margin-top: 10px;
	}
	&.borderNone >div{
		border-bottom: none;
	}
	i{
		font-size: 24px;
		&::before{
			// color: @color_content;
		}
	}
	.leftIcon{
		padding-right: 10px;
	}
	>div{
		.flex;
		height: 54px;
		flex: 1;
		border-bottom: .5px solid @color_border;
	}
}
</style>
