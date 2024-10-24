import PropTypes from 'prop-types';

function CoffeShop({content}) {
	return (
		<div>
			<h1>{content.title}</h1>
		</div>
	)
}

CoffeShop.propTypes = {content: PropTypes.object};
export default CoffeShop;
