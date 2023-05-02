import React from 'react';
import Card1 from "../Card1";
import {Phone} from "react-feather";

function Index() {
    return (
        <section className={"p-10 lg:p-48 pt-36 lg:pt-48"}>
            <div className="list grid grid-cols-3 gap-4">
                <Card1 Icon={Phone} heading={"Web Development"} description={"some description"}/>
                <Card1 Icon={Phone} heading={"Web Development"} description={"some description"}/>
                <Card1 Icon={Phone} heading={"Web Development"} description={"some description"}/>
            </div>
        </section>
    );
}

export default Index;