/**
 * $.x_search
 * @extends jquery 2.1.1(基于该版本开发，其他版本自测)
 * @fileOverview 获取url queryString
 * @author xialeistudio
 * @email 1065890063@qq.com
 * @site www.ddhigh.com
 * @version 0.0.1
 * @date 2014-08-12
 * @license MIT
 * @example
 * 获取当个Key
 * $.x_search('name');
 * 获取所有
 * $.x_search();
 */
(function($) {
	$.x_search = function(_name,target) {
		if(typeof target == 'undefined'){
			target =  window.location.search;
		}
		if (typeof _name == 'undefined') {
			//所有
			var query =target.substr(1, window.location.search.length-1).split('&');
			var data = [];
			for (var i = 0; i < query.length; i++) {
				var tmp = query[i].split('=');
				data.push({
					key: tmp[0],
					data: decodeURIComponent(tmp[1])
				});
			}
			return data;
		}
		else {
			//指定Key
			try {
				var regex = new RegExp(_name+'=([^&]+)?');
				return decodeURIComponent(target.match(regex)[1]);
			}
			catch (e) {
				return null;
			}
		}
	};
})(jQuery);