/**
 * 对象深拷贝；
 * @param obj
 * @returns
 */
export function deepCopy(obj) {
    let tmp = JSON.stringify(obj);
    return JSON.parse(tmp);
}

/**
 * 判断闰年；
 * @param year
 * @returns {boolean}
 */
export function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

/**
 * 是否是空对象；
 * @param obj
 * @returns {boolean}
 */
export function isEmptyObject(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
export function formatTime(time, fmt) {
    if (typeof time === 'string') {
        return time;
    }
    if ((time instanceof Date) === false) {
        return null;
    }
    var o = {
        "M+": time.getMonth() + 1, //月份
        "d+": time.getDate(), //日
        "h+": time.getHours(), //小时
        "m+": time.getMinutes(), //分
        "s+": time.getSeconds(), //秒
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度
        "S": time.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}