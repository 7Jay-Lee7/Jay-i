"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("30098647-5b93-42d0-9dab-3ada6eb6d368");
    }, []);

    return null;
}