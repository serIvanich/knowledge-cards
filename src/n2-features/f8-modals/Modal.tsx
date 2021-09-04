import React, {CSSProperties} from "react";

interface IModal {
    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: ()=>void;

    width:number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?: ()=>void;

    isShow: boolean;
}

const Modal: React.FC<IModal> = (
    {
        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {
        },
        width,
        height,
        modalStyle,
        modalOnClick,
        isShow,
        children
    },
) => {
    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vh - ${width / 2}px)`;

    if (!isShow) return null;

    return (
        <>
            { enableBackground && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vh',

                    background: 'black',
                    opacity: 0.35,
                    zIndex: 20,

                    ...backgroundStyle,
                }}
                onClick = {backgroundOnClick}

                />
            }
            <div style={{
                position: 'fixed',
                top,
                left,
                width,
                height,
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                zIndex: 21,
                borderRadius: '15%',
                ...modalStyle,

            }}
                 onClick = {modalOnClick} >
                {children}
            </div>
        </>
    )
}

export default Modal