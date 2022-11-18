import React from 'react';

import styles from './index.module.css';


const Table = ({title, rows, headRows}) => {
    return (
        <div>
            <h2>{title}</h2>
            <table className={styles.table} border={1} cellPadding={10}>
                <thead>
                {
                    headRows.map((rule) =>
                        <tr key={rule.name}>
                            <th>{rule.name}</th>
                            <th>{rule.decription}</th>
                        </tr>
                    )

                }
                </thead>
                <tbody>
                {
                    rows.map((rule) =>
                        <tr key={rule.name}>
                            <td>{rule.name}</td>
                            <td>{rule.decription}</td>
                        </tr>
                    )

                }
                </tbody>
            </table>
        </div>
    )
}

export default Table;