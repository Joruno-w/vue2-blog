function delay(duration = 1000) {
	return new Promise(resolve => {
		setTimeout(()=>{
			resolve();
		},duration);
	});
}

export async function login(loginId,loginPwd) {
	await delay();
	if (loginId === 'admin' && loginPwd === '123123'){
		const user = {
			loginId,
			name: '管理员'
		}
		localStorage.setItem('loginUser',JSON.stringify(user));
		return user;
	}
	return null;
}

export async function loginOut() {
	await delay();
	localStorage.removeItem('loginUser');
}

export async function whoAmI(){
	await delay();
	const loginUser = localStorage.getItem('loginUser');
	if (loginUser){
		return JSON.parse(loginUser);
	}
	return null;
}
