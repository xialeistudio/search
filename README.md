jquery.search
======

基于jquery开发的读取url查询参数的小插件

##开发环境##
本插件基于jquery 2.1.1 开发，其他版本jquery请自行测试

##使用教程##
请确保每个key后面的值经过了 `encodeURIComponent()` 方法编码
示例url:http://www.example.com/?name=example&age=20
1.获取指定key的值
	$.x_search('name'); //返回 example
2.获取所有
	$.x_search();//返回[{name:"example"},{age:"20"}]

##作者主页##
[JustThink](http://www.ddhigh.com/ "JustThink")