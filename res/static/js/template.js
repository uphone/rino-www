const __FOOTER = '<div class="footer">' +
'<div class="layui-container">' +
'<p class="footer-web">' +
'<a href="javascript:;">友情链接</a>' +
'<a href="http://www.chinagreentown.com" target="_blank">绿城集团</a>' +
'<a href="https://www.hwabaotrust.com" target="_blank">华宝信托</a>' +
'<a href="http://bg.baosteel.com" target="_blank">宝钢集团</a>' +
'<a href="http://www.chinakingking.com" target="_blank">青岛金王</a>' +
'<a href="http://www.zlsoftware.com" target="_blank">昭隆软件</a>' +
'</p>' +
'<div class="layui-row footer-contact">' +
'<div class="layui-col-sm2 layui-col-lg1"><img src="res/static/img/ewm.png" style="width:86px;height:86px;"></div>' +
'<div class="layui-col-sm10 layui-col-lg11">' +
'<div class="layui-row">' +
'<div class="layui-col-sm6 layui-col-md8 layui-col-lg8">' +
'<p class="contact-top">' +
'<i class="layui-icon layui-icon-cellphone"></i>&nbsp;189-64169187&nbsp;&nbsp;&nbsp;[ whenever ]' +
'</p>' +
'<p class="contact-top">' +
'<i class="layui-icon layui-icon-website"></i>&nbsp;021-60882339&nbsp;&nbsp;&nbsp;[ 9:00-18:00 ]' +
'</p>' +
'<p class="contact-bottom"><i class="layui-icon layui-icon-release"></i>&nbsp;<a style="color:orange;" href="mailto:sales@rino123.com">sales@rino123.com</a></span></p>' +
'</div>' +
'<div class="layui-col-sm6 layui-col-md4 layui-col-lg4">' +
'<p class="contact-top"><i class="layui-icon layui-icon-location"></i><span class="right"><a href="https://www.amap.com/search?query=上海市奉贤区程普路377号" style="color:orange;" target="_blank">上海市奉贤区程普路377号</a></span></p>' +
'<p class="contact-bottom"><span class="right">Copyright&nbsp;©&nbsp;2011-2019 <a href="http://www.beian.miit.gov.cn" style="color:orange;" target="_blank">沪ICP备15011502号-1</a></span></p>' +
'</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>';

const __HEADER = (idx) => {
    let ret =
'<div class="nav">'+
'<div class="layui-container">'+
'<div class="nav-logo">'+
'<a href="http://www.rino123.com">'+
'<img src="res/static/img/logo.png" alt="锐鸟软件">'+
'</a>'+
'</div>'+
'<div class="nav-list">'+
'<button>'+
'<span></span><span></span><span></span>'+
'</button>'+
'<ul class="layui-nav" lay-filter="">'+
'<li class="layui-nav-item'+(idx==1?' layui-this':'')+'"><a href="index.html">首页</a></li>'+
'<li class="layui-nav-item'+(idx==2?' layui-this':'')+'"><a href="product.html">产品</a></li>'+
'<li class="layui-nav-item'+(idx==3?' layui-this':'')+'"><a href="impIndex.html">智能管理平台</a></li>'+
'<li class="layui-nav-item'+(idx==4?' layui-this':'')+'"><a href="case.html">案例</a></li>'+
'<li class="layui-nav-item'+(idx==5?' layui-this':'')+'"><a href="about.html">关于</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>';
    return ret;
}

