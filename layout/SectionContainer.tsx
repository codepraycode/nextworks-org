import { PropsWithChildren } from "react";

export default function SectionContainer(props: PropsWithChildren) {

    return (
        <div className="mx-auto container px-4 lg:px-8">{props.children}</div>
    );
}