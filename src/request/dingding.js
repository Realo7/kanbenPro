import CryptoJS from 'crypto-js'; // 加密，用于生成数字签名
import * as dd from 'dingtalk-jsapi'; // 钉钉JSAPI
import axios from 'axios'; // HTTP请求

// 从钉钉服务器获取token
/**
 * 获取token信息
 * @param {Object} params {corpid, corpsecret}
 */
async function getToken(params) {
  const res = await axios.get('/proxy/gettoken', { params })
    .then((response) => response.data.access_token)
    .catch((err) => err);
  return res;
}
// 根据上面获取的access_token，从钉钉服务器获取ticket。
async function getJsticket(params) {
  const res = await axios.get('/proxy/get_jsapi_ticket', { params })
    .then((response) => response.data.ticket);
  return res;
}
/* 钉钉官网的demo是后台实现生成数字签名，
通过crypto-js前端加密库就可以将这个功能移植到前端来。
*/
function getJsApiSingnature(ticket, nonce, timeStamp, url) {
  const plainTex = `jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timeStamp}&url=${url}`;
  const signature = CryptoJS.SHA1(plainTex).toString();
  return signature;
}
// 通过dd.config设置需要的权限
// 步骤4：设置权限
dd.config({
  AgentId: '1173585641',
  CorpId: 'ding4acdfb4fff883932', // 必填，企业ID
  timeStamp, // 必填，生成签名的时间戳
  nonceStr: nonce, // 必填，生成签名的随机串
  signature, // 必填，签名
  jsApiList: [
    'biz.user.get',
    'device.geolocation.get',
    'biz.util.uploadImage',
  ], // 必填，需要使用的jsapi列表，注意：不要带dd。
});
export {
  getToken,
  getJsticket,
  getJsApiSingnature,
};
