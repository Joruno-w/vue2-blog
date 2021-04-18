import {getCompRootDom} from "@/utils";
import styles from './showMessage.module.less';
import Icon from '@/components/Icon';
export default function (options = {}) {
	const {content = '', type = 'info',duration = 2000,container= document.body,callback} = options;
	const div = document.createElement('div');
	const iconDOM = getCompRootDom(Icon,{type});
	const typeClass = `${styles['message-' + type]}`;
	div.className = `${styles.message} ${typeClass}`;
	div.innerHTML = `<span class='${styles.icon}'>${iconDOM.outerHTML}</span>
<div>${content}</div>`;
	if (getComputedStyle(container).position === 'static') {
		container.style.position = 'relative';
	}

	getComputedStyle(div).left;

	div.style.opacity = 1;
	div.style.transform = `translate(-50%,-50%)`;

	setTimeout(()=>{
		div.style.opacity = 0;
		div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
		div.addEventListener('transitionend',()=>{
			div.remove();
			callback && callback()
		},{once: true});
	},duration);
	container.appendChild(div);
}
