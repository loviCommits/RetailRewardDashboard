import PropTypes from "prop-types";
import "../../styles/cards.css"

const StatsCard = ({
  title,
  value,
  icon
}) => {

  return (

    <div className="stats-card">

      <div className="stats-card-top">

        <div>

          <p className="stats-card-title">
            {title}
          </p>

          <h2 className="stats-card-value">
            {value}
          </h2>

        </div>

        <div className="stats-card-icon">
          {icon}
        </div>

      </div>

    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,

  icon: PropTypes.node
};

export default StatsCard;