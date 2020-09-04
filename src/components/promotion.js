import React from 'react';


export class Promotion extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="text">
                <h1 className="text__headline">Join our Community</h1>
                <h2 className="text__sec-headline">30 day, hassie free money back guarentee</h2>
                <p className="text__basic">perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> 
            </div>
        );
    }
}