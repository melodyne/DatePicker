# DatePicker 价格日历控件

![效果图](https://github.com/295124540/DatePicker/blob/master/show.gif)

数据格式
```
[
    {
        "day": "2016-07-07",
        "price": "158"
    },
    {
        "day": "2017-07-11",
        "price": "158"
    },
    {
        "day": "2017-07-12",
        "price": "158"
    },
    {
        "day": "2017-07-13",
        "price": "158"
    },
    {
        "day": "2017-07-14",
        "price": "158"
    },
    {
        "day": "2017-07-15",
        "price": "158"
    }
]
```
第一步：引入这三个文件
```
<link href="css/datepicker.css" rel="stylesheet"/>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/zlDate.js"></script>
```
第二步：初始化组键
```
pickerEvent.setPriceArr(data);
pickerEvent.Init(e);
```
第三步：全局实现修改价格方法
```
/**
 * 修改价格
 * @param date           // 日期
 * @param newPrice       // 新价格
 * @param calendarPrice  // 日历控件对象
 */
function changePrice(date, newPrice, calendarPrice) {
    
    alert('修改价格' + date + "天的价格为" + newPrice);
    
    /*
       在这里实现修改，也就是在这里用调用你的修改接口
       修改成功 则执行 calendarPrice.show();
     */
     
}
```
如果对你有帮助请给个star！

