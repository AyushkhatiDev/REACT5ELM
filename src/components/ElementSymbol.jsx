import PropTypes from 'prop-types';

const ElementSymbol = ({ element, className }) => (
  <div 
    className={`absolute ${className} bg-gray-400/10 backdrop-blur-sm rounded-full w-24 h-24 
    flex items-center justify-center transform hover:scale-110 transition-all duration-300`}
  >
    <span className="text-sm font-medium text-gray-300">{element}</span>
  </div>
);

ElementSymbol.propTypes = {
  element: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ElementSymbol;
