import React, { useEffect, useState } from "react";

export default function OtherComponents(props) {
    return (
        <section>
            <div className="container">
                <h2 className="bg-info m-auto my-5 text-center text-dark w-50">Code Splitting</h2>
                <div className="col-md-6 offset-3">
                    <p>Other Component loaded using CodeSplitting</p>
                </div>
            </div>
        </section>
    );
}