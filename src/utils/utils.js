function getCookies (target) {
    // let cookie = document.cookie;
    // console.log(cookie);
    // let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    // if (arr = cookie.match(reg))
    // return unescape(arr[2]);
    // else
    // return null;
    let value;
    document.cookie.split('; ').forEach((v) => {
        let coo = v.split('=')
        if (target === coo[0]) {
            value = coo[1]
        }
    })
    return value;
}
function setCookies (a, b) {
    if (!a || !b) return;
    document.cookie = a + '=' + b;
}
function delCookies (name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookies(name);
    if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
}
export {getCookies, setCookies, delCookies}