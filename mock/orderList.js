module.exports = {
	api: '/guide/order/list',
	response: function(req, res) {
		res.json({
                    "msg": "success",
                    "data": {
                        "totalRow": 1,//总条数
                        "pageNumber": 1,//当前第几页
                        "lastPage": true,//是否最后一页
                        "firstPage": true,//是否为最后一页
                        "totalPage": 1,//总页数
                        "pageSize": 10,//每页行数
                        "list": [
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }
                            ,{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },
                            {
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            },{
                                "order_num": "2017071021590013411",//订单编号
                                "book_user_id": 13,//游客ID
                                "create_time": "2017-07-10 01:02:10",//创建时间
                                "view_line_content": "故宫西线慢悠悠",//线路内容
                                "visit_date": "2017-07-12",//出行日期
                                "visit_time": "09:00",//出行时间
                                "contact_name": "小小罩",//联系人姓名
                                "contact_phone": "13184060728",//联系人电话
                                "resource_path": null,//景点默认图处相对路径
                                "view_spot_id": null,//景点ID
                                "person_num": 5,//出行人数
                                "amount": 300.00,//总费用
                                "book_status": 1,//订单状态:1=待导游确认,2=游客取消,3=导游主动取消,4=导游确认超时,5=待游客付款,6=支付超时,7=已付款,8=已出行完成,9=有投诉待确认,10=已退款,11=待评价,12=已评价
                                "update_time": "2017-07-10 01:02:10" //上一次更新时间
                            }


                        ]
                    },
                    "prefix": "http://127.0.0.1:6070/",
                    "res_code": 200
                });
	}
}