import {useState, useEffect} from "react";
import {useInput} from "./useInput";


export const useRegExp = (action, flag) => {
    const reg = useInput("");
    const text = useInput("");
    const replaceText = useInput("");
    const [resultText, setResultText] = useState("");

    useEffect(()=>{
        if(action === undefined || text.value==='' || reg.value==='')
            return;
        let flags = "m";
        if(action === 'extract'){
            flags += flag.reduce((pv, cv)=>{
                if(!cv.active)
                    return pv;
                return pv + cv.key[0]
            },"");
            let re = RegExp(reg.value, flags);
            const rt = text.value.match(re);

            setResultText(
                rt===null?"":rt.join(', ')
            )
        }
        if(action==="replace"){
            flags += flag.reduce((pv, cv)=>{
                if(!cv.active)
                    return pv;
                return pv + cv.key[0]

            },"");
            let re = RegExp(reg.value, flags);
            setResultText(
                text.value.replace(re, replaceText.value)
            )
        }

    }, [
        action,
        flag,
        reg,
        text,
        replaceText,
    ])


    return [reg, text, replaceText, resultText];
}

