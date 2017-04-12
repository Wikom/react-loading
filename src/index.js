/**
 * Created by rouven on 12.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Symbol from 'react-symbol'

const Loading = ({title}) =>
    <div className="pageWaiter">
        <div className="pageWaiter-inner">
            <Symbol symbol="cog" spinning={true}/>
        </div>
        <p className="pageWaiter-note">{title}</p>
    </div>;

Loading.defaultProps = {
    title: 'Ihre Daten werden geladen...'
};

Loading.propTypes = {
    title: PropTypes.string
};

export default Loading;