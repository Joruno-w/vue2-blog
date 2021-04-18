export default function (fn,duration = 1000) {
	let timer = null;
	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(()=>{
			fn.apply(this,arguments);
			timer = null;
		},duration);
	}
}
