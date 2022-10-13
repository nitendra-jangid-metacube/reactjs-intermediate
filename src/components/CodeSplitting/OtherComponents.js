import React, { useEffect, useState } from "react";

export default function OtherComponents(props) {
    return (
        <section>
            <div className="container">
                <div className="col-md-6 offset-3">
                    <p>Other Component loaded using CodeSplitting</p>
                </div>
            </div>
        </section>
    );
}