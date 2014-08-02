jquery.search
======

基于jquery开发的读取url查询参数的小插件,功能：

查询给定的url查询指定key的值

查询window.location.search查询指定key的值

查询window.location.search所有queryString的键值对数组


##开发环境##
本插件基于jquery 2.1.1 开发，其他版本jquery请自行测试

##使用教程##

请确保每个key后面的值经过了 `encodeURIComponent()` 方法编码

示例url:http://www.example.com/?name=example&age=20

1.获取指定key的值

	$.x_search('name'); //返回 example

2.获取所有

	$.x_search();//返回[{name:"example"},{age:"20"}]

3.获取指定url的指定值

	$.x_search('name','http://www.site.com/?name=exa');//返回 exa

##作者主页##
[JustThink](http://www.ddhigh.com/ "JustThink")