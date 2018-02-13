import React from 'react';
import myResults from './dataPack';

export class SearchList extends React.Component {
    render() {
        const items = myResults().map((el, i) => {
            return (
                <li key={i}>
                    <a href={el.photo_link} className="student-group">
                        <h2>{el.full_name}</h2>
                        <img src={el.photo_link}/>
                        <span>{el.status}</span>
                    </a>
                </li>
            )
        });
        return (
            <ul className="searchList">
                {items}
            </ul>

        )
    }
}