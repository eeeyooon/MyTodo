import styled from 'styled-components';

type ToastProps = {
	text: string;
};

function Toast(props: ToastProps) {
	const { text } = props;
	return <ToastWrapper>{text}</ToastWrapper>;
}

export default Toast;

const ToastWrapper = styled.div`
	width: 311px;
	height: 55px;
	border-radius: 15px;
	background-color: #fff;
	color: #1c1c1c;
	text-align: center;
	line-height: 55px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
