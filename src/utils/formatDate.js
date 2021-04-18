export default function (timestamp,showTime = false) {
	const date = new Date(+timestamp);
	const year = date.getFullYear();
	const month = (date.getMonth()+1).toString().padStart(2,'0');
	const day = date.getDate().toString().padStart(2,'0');
	let str = `${year}-${month}-${day}`;
	if (showTime){
		const hour = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		str += ` ${hour}:${minutes}:${seconds}`;
	}
	return str;
}
