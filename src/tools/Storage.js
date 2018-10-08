export default {
  set:function (key,data) {
    data=JSON.stringify(data);
    var res=window.localStorage.setItem(key,data);
  },
  get:function (key) {
    var data=window.localStorage.getItem(key);
    data=data==null?"[]":data;
    data=JSON.parse(data);
    return data;
  }
}
