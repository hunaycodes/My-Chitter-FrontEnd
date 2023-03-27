
import PropTypes from "prop-types";

const SinglePeep = ({ peep }) => {

    const { username, peepContent, date } = peep;

    return (
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title">@{username}</h5>
                <p className="card-text">{peepContent}</p>
                <p className="card-text">
                    <small className="text-muted">{date}</small>
                </p>
            </div>
        </div>
    );
};

SinglePeep.propTypes = {
    peep: PropTypes.shape({
        username: PropTypes.string.isRequired,
        peepContent: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default SinglePeep;
