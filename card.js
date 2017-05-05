$(document).ready(function(){
	$('#input textarea').on('change', function(e){
		renderMessages();
	});

	function renderMessages(){
		var flair = $('#flair').val(),
			logo = $('#logo').val(),
			header = $('#header').val(),
			body = $('#body').val();

		window.localStorage.setItem("flair", flair);
		window.localStorage.setItem("logo", logo);
		window.localStorage.setItem("header", header);
		window.localStorage.setItem("body", body);

		var html1 = '';
		var html2 = '';
		if(logo !== null && logo !== ''){
			html1 += '<img class="card-sponsor" src="' + logo + '" />';
		}
		if(body !== null && body !== ''){
			html1 += '<div class="card has-body collapsed">';
		}
		else{
			html1 += '<div class="card">';
		}
		var html = '';
			if(flair !== null && flair !== ''){
				html += '<div class="flair ' + flair + '"></div>';
			}
			html += '<div class="content">';
			html += 	'<div class="header">';
			html += 		header;
			html += 	'</div>';
			if(body !== null && body !== ''){
				html += 	'<div class="body">';
				html += 		body;
				html += 	'</div>';
			}
			html += '</div>';
			html += '</div>';

			html1 += html;

		$('#pml').html(html2 + html1);

		
		$('.has-body').on('click', toggleCollapsed);
	}

	function toggleCollapsed(e){
		$(this).toggleClass('collapsed');
	}

	function init(){
		$('#flair').val(window.localStorage.getItem("flair"));
		$('#logo').val(window.localStorage.getItem("logo"));
		$('#header').val(window.localStorage.getItem("header"));
		$('#body').val(window.localStorage.getItem("body"));

		renderMessages();
	}
	init();
});