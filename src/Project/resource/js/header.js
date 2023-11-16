$(function(){

	
	
	//디폴트는 한국으로 utc 시차변수
	let defaultTime = 9;


	let script = {

		curTime: function(){
			
			let date = new Date();

			//utc 시간에 utc 시차변수를 계산해서 현재 고른 지역의 시간을 구한다.
			let time = new Date(date.getTime() + ((date.getTimezoneOffset() * 60000) + (3600000 * defaultTime) ));
					
			
			const hours = time.getHours();
			const minutes = time.getMinutes();
			const seconds = time.getSeconds();
		
			// console.log(time);
			// console.log(hours);
			// console.log(minutes);
			// console.log(seconds);
		
			$(' p.time-write').html((hours < 10 ? `0${hours}` : hours) + ":" + (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds));

		},
		
		worldTime: function(){

			// UTC에서 시차를 고려한 특정 지역의 시간 구하기
			const now = new Date();

			console.log("현재 위치의 시간 : " + now);

			//getTime => 현재 시간을 밀리초 단위로 계산(1초 = 1000)
			console.log("현재 위치의 시간의 밀리초 단위 : " + now.getTime()); 

			//getTimezoneOffset => 호스트 컴퓨터와 UTC 사이의 시간차를 분으로 가져옴.
			console.log("현재 위치와 UTC 사이의 시차(분 단위) : " +  now.getTimezoneOffset()); 

			//호스트 컴퓨터와 UTC 사이의 시간차를 분으로 가져온 값을 다시 ms단위로 바꿔줌
			console.log("현재 위치와 UTC 사이의 시차(분 단위)의 ms단위 : " + now.getTimezoneOffset() * 60000)

			
			//현재 시간에 호스트 컴퓨터와 UTC 사이의 시간차를 빼서 UTC 시간을 구한다
			const localTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
			console.log("UTC 시간 : " + localTime);

			//위에서 구한 UTC시간에 시간을 구하고 싶은 지역의 UTC 시차에 3600000(60분의 밀리초 단위)을 곱해서 더한다. 
			const newYorkTime = new Date(localTime.getTime() + (3600000 * -4)); 

			//toLocalString => date를 입력시 사용자의 문화권에 맞는 시간표기법으로 년,월,일 시간을 리턴
			//				   number 입력시 3자리 숫자마다 콤마
			//				   array 배열의 모든 요소를 문자열로 반환
			console.log("현재 뉴욕의 시간은 : " + newYorkTime.toLocaleString());
		},

		utcTime: function (){

			const time = new Date();
						
			return new Date (time.getTime() + (time.getTimezoneOffset() * 60000));

		},

		worldTimeList: function(e){
			
			let contryName = e;
			
			$(".txt span").text(contryName);

			$('#timeSel option').each(function(index, v){
		
				if(contryName == v.text) {
					defaultTime = v.value;
				}
				
			});
			
		},

	}


	script.worldTime();

	script.curTime();

	setInterval(script.curTime, 1000);
	

	
});