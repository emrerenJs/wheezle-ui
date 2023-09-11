import { LoadingProps } from "./Loading.types";
import style from './Loading.module.scss';

export const Loading = (props: LoadingProps) => {
    const { size = 50 } = props;
    return (
        <div role="progressbar" className={style['spinner-container']}>
            <div style={{
                width: `${size}px`,
                height: `${size}px`,
                borderStyle: 'solid',
                borderWidth: `${(size/6)}px`,
                borderRadius: '50%',
            }} className={style['loading-spinner']} />
        </div>
    )
};