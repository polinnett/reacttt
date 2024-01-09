import React from "react";
import { UniversityTable } from "../UniversityTable";
import { Form } from "../Form";

export const Home = () => {
    return (
        <>
            <h1>Главная</h1>
            <Form />
            <UniversityTable/>
        </>
    )
}