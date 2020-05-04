import React from 'react';

interface IPreview {
    url: string;
}

const Preview = (props: IPreview) => {

    return (
        <div>
            <div style={{ left: "0", width: "100%", height: "0", position: "relative", paddingBottom: "141.4214%" }}>
                <iframe src={props.url}
                    style={{ border: "0", top: "0", left: "0", width: "100%", height: "100%", position: 'absolute' }}
                    allowFullScreen></iframe>
            </div>
        </div>
    );

}

export default Preview;