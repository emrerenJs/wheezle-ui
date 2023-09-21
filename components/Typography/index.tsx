import clsx from "clsx";
import { TypographyProps, TypographyVariants } from "./Typography.types";
import style from './Typography.module.scss';

export const Typography = (props: TypographyProps) => {
    const { variant = TypographyVariants.BODY_MEDIUM, color = 'default', children } = props;
    const Wrapper = variant.startsWith('heading') ? "h1" : "p";

    return <Wrapper className={clsx(style['text'], style[variant], style[color])}>{ children }</Wrapper>
};