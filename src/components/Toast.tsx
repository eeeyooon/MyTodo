import styled from 'styled-components';

type ToastProps = {
	modalContent: string;
};

function Toast(props: ToastProps) {
	const { modalContent } = props;
	return <ToastWrapper>{modalContent}</ToastWrapper>;
}

export default Toast;

const ToastWrapper = styled.div`
	width: 311px;
	height: 55px;
	border-radius: 15px;
	background-color: #fff;
	background-color: rgba(0, 85, 255, 0.6);
	color: #fff;
	text-align: center;
	line-height: 55px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
