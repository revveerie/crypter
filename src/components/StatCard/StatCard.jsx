import React from "react";
import { useState, useEffect } from "react";

const StatCard = ( prop ) => {
    return (
        <>
            <div className="coin-card__info">
                <div className="coin-card__info-row">
                    <div className="coin-card__price">{prop}</div>
                </div>
            </div>
        </>
    )
}

export default StatCard;