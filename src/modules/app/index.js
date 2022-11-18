import React, {useState} from 'react';

import styles from './index.module.css';
import Table from "./components/table";
import Form from "./components/form";
import {rules} from "../../common/constants";


const App = () => {
    const [mode, setMode] = useState('dark');
    return (
        <div className={[styles.page, mode==='dark'?styles.dark:styles.light].join(" ")}>
            <header>
                <h1>
                    Тестер регулярных выражений

                </h1>
                <div className={styles.mode}
                     onClick={()=>{setMode(mode==='dark'?'light':'dark')}}
                >
                    {mode}
                </div>
            </header>
            <section>
                <Form/>
            </section>
            <section>
                <Table title={rules.title}
                       rows={rules.body}
                       headRows={rules.head}
                />
            </section>
        </div>
    )
}

export default App;