import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{

    document.title= `${title} | ToyZone `;
    },[title])
};
export default useTitle