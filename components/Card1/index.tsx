import React from 'react';
import {Icon as IconType} from "react-feather"
import Card1Style from "./Card1.style";

interface cardProps{
    Icon:IconType,
    heading:string,
    description:string,
}

function Index({Icon}:cardProps) {
    return (
        <Card1Style className="card w-full bg-gray-900">
            <div className="content relative h-full z-0">
                <div className="icon">
                    <Icon height={35} width={35}/>
                </div>
                <div className="card-heading my-8 text-3xl font-semibold">
                    <h2>
                        Heading Text
                    </h2>
                </div>

                <div className="card-body mb-6 text-md">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </Card1Style>
    );
}

export default Index;