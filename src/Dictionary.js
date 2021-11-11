import React from 'react';
import PropTypes from 'prop-types';

// class Dict extends React.Component {
//     render() {
//         return (
//             <div>{r_hanja}</div>
//         )
//     }

// }

function Dictionary({r_word, r_hanja, r_pos, r_des, r_seq}) {
    const container = {
        width: '60%',
        columns: '1',
        margin: 'auto'
    }
    const items = {
        width: '100%',
        marginBottom: '10px',
        padding: '20px',
        background: 'aliceblue',
        display: 'inline-block'
    }
    const words = {
        fontSize: '15pt',
        fontWeight: 'bold',
        textAlign: 'left',
        whiteSpace: 'nowrap'

    }
    const seq = {
        display: 'inline',
        fontStyle: 'oblique'
    }
    const hanja = {
        display: 'inline'
    }
    const pos = {
        display: 'inline',
        fontSize: '10pt'
    }
    const des = {
        textAlign: 'left'
    }
    return (
        <div style={container}>
            <div style={items}>
                <div style={words}>{r_word}
                    <sup style={seq}>{r_seq}</sup>
                    <div style={hanja}>{r_hanja}</div>
                    <div style={pos}>{r_pos}</div>
                </div>
                <p style={des}>{r_des}</p>
            </div>
        </div>
    )
}

Dictionary.propTypes = {
    r_word: PropTypes.string,
    r_seq: PropTypes.string,
    r_hanja: PropTypes.string,
    r_pos: PropTypes.string,
    r_link: PropTypes.string,
    r_des: PropTypes.string
}

export default Dictionary;