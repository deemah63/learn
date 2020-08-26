var start = new Date(2020,7,19);
	var end = new Date();
	var total1000 = Math.floor((end - start)/864);
	var total = Math.floor((end - start)/86400000);
	$('#result').text(total1000/100000);
	function draw_num() {
		$('#result').text(total1000/100000);
		end = new Date();
		total1000 = Math.floor((end - start)/864);
		total = Math.floor((end - start)/86400000);
			var progress = (total1000/100000 - total)*100 + '%';
	$('.progress-in').css('width', progress);
	}
	setInterval(draw_num, 1000);
	
	var progress = (total1000/100000 - total)*100 + '%';
	$('.progress-in').css('width', progress);

	var arr = [];
	var sort = total;
	for (let i = 0; i < total; i++) {
		
		var temp_sort = sort%3;
		
		arr[i] = temp_sort;
		sort = (sort - temp_sort)/3
		if (sort < 1) {break;}
	}
	things_arr = ['common', 'great', 'rare', 'epic', 'perfect_epic'];

	for (let i = 0; i < arr.length; i++) {
		var content = '<span class="square ' + things_arr[i] + '"></span>';
		for (let j = 0; j < arr[i]; j++) {
		$('#square span:last').after(content);
		}
	}


	var rewards = [
		'Теперь ты можешь купить курс по верстке',
		'Теперь ты можешь купить протеин',
		'Теперь ты можешь заказать кальян на дом'
	]

	if (total == 9) {$('.rewards').html(rewards[0]);}
	if (total == 18) {$('.rewards').html(rewards[1]);}
	if (total == 27) {$('.rewards').html(rewards[2]);}