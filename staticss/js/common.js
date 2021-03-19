$(function (){
    $('#j_addReportError').click(function (){
        console.log(book);
        $.post('/home/chapter/report', {'id': book.Info.Id, 'source_id': book.chapter.source_id, 'chapter_id': book.chapter.id}, function (d){
				if(view.mold=="web"){
					layer.msg("您的反馈我们已经收到！");
				}else{
					layer.open({content: "您的反馈我们已经收到！",skin: 'msg',time: 2});
				}
        }, 'json');
    });
});