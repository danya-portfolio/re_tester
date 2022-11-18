import React, {useState} from 'react';
import styles from "./index.module.css";
import {actions, defaultAction, flagList} from "../../../../common/constants";
import {useRegExp} from "../../../../hooks/useRegExp";


const Form = () => {
    const [action, setAction] = useState(defaultAction);
    const [flag, setFlag] = useState(flagList);
    const [reg, text, replaceText, resultText]= useRegExp(action, flag);

    return (
        <div className={styles.form}>
            <h2>
                Тестер
            </h2>
            <div>
                <h3>
                    Регулярное выражение
                </h3>
                <input
                    required
                    type='text'
                    placeholder='регулярное выражение'
                    {...reg}
                />
            </div>
            <div>
                <h3>
                    Текст
                </h3>
                <textarea
                    required
                    placeholder='текстовая строка'
                    {...text}
                />
            </div>
            <div>
                <h3>
                    Действие
                </h3>
                <select
                    required
                    onChange={(e)=>{setAction(e.target.value)}}
                >
                    {
                        actions.map(act =>
                            <option key={act.value} value={act.value} >{act.name}</option>
                        )
                    }
                </select>
            </div>
            {
                action==='replace'
                    ?   <p>
                        <input
                            type='text'
                            placeholder='Заменить на (необезательно)'
                            {...replaceText}
                            defaultValue=""
                        />
                    </p>
                    :   <></>
            }
            <div>
                <h3>
                    Флаг
                </h3>
                <div>
                    {
                        flag.map(checkbox =>
                            <div key={checkbox.key}
                                 className={styles.flagList}>
                                <input
                                    key={checkbox.key}
                                    id={checkbox.key}
                                    type='checkbox'
                                />
                                <label  htmlFor={checkbox.key}
                                        onClick={(e)=>{setFlag(flag.map(cb=>{
                                            if(cb === checkbox)
                                                cb.active = !cb.active;
                                            return cb;
                                        }))}}
                                >{ checkbox.name }</label>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <h3>
                    Результат
                </h3>
                <textarea
                    disabled
                    value={resultText}
                />
            </div>
        </div>
    )
}

export default Form;