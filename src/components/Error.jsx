// import { PropTypes } from "prop-types";

// const Error = ({ mensaje }) => {
//   return (
//     <div className="font-bold mb-6 bg-red-600 text-white text-center p-3 uppercase rounded-lg">
//       {mensaje}
//     </div>
//   );
// };

// Error.propTypes = {
//   mensaje: PropTypes.string,
// };

// export default Error;

import { PropTypes } from "prop-types";

const Error = ({ children }) => {
  return (
    <div className="font-bold mb-6 bg-red-600 text-white text-center p-3 uppercase rounded-lg">
      {children}
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.string,
};

export default Error;
