import './Thanks.css';
import {
	BsFillEmojiHeartEyesFill,
	BsFillEmojiSmileFill,
	BsFillEmojiNeutralFill,
	BsFillEmojiFrownFill,
} from 'react-icons/bs';

const emojiData = {
	unsatisfied: <BsFillEmojiFrownFill />,
	neutral: <BsFillEmojiNeutralFill />,
	satisfied: <BsFillEmojiSmileFill />,
	very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
	return (
		<div className="thanks-container">
			<h2>Falta pouco...</h2>
			<p>
				A sua opinião é muito importante, em breve você reberá um cupo
				de 10% de desconto para a sua próxima compra.
			</p>
			<p>
				Para concluir a sua avaliação clique no botão de Enviar abaixo.
			</p>
			<h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
			<p className="review-data">
				<span>Satisfação com o produto: {emojiData[data.review]}</span>
				<div className="review-data">
					<span>Comentário: {data.comment}</span>
				</div>
			</p>
		</div>
	);
};

export default Thanks;
