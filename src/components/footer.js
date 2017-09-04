import React from 'react';

export default (props) => {
    return (
        <div>
            <footer className="hg__footer">
                <div className="contactus">
                    <h3>Tracy Kennedy MS.</h3>
                    <div clasclassNames="address">
                            <h1 className="bigOne"></h1>
                            <ul id="address">
                            <li><i className="fa fa-road"></i> Carthage High School</li>
                            <li>#1 Bulldog Drive</li>
                            <li>Carthage, Texas 75633</li>
                        </ul>        
                    </div>
                    <div className="content">
                        <pre id="object"></pre>
                    </div>
                    <div clclassNameass="contacttypes">
                        <ul id="contactinfo">
                            <li><i className="fa fa-envelope-o"></i> Email: tkennedy@carthageisd.org</li>
                            <li><i className="fa fa-phone"></i> Phone: 903-693-2552</li>
                            <li>Conference: 4th Period</li>
                            <li>Room: D5</li>
                        </ul>
                    </div>   
                </div>
            </footer>
        </div>
    );
}