import { ThreeDots } from 'react-loader-spinner';
import s from './loader.module.css'
export const Loader = () => {
    return (
        <ThreeDots wrapperClass={ s.loader} color="rgb(250, 124, 56)" width="100"/>
    )
}