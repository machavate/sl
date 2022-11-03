import { Component, InputHTMLAttributes, ReactNode } from "react";
import { LeftTool, RightTool, Tool } from "./styles";
import Link from "next/link";

export interface ToolBarProps extends InputHTMLAttributes<ToolBar> {
}

export class ToolBar extends Component<ToolBarProps, any> {

    constructor(props: ToolBarProps) {
        super(props)
    }

    render(): ReactNode {
        return (
            <Tool>
                <LeftTool>
                    <Link href={"https://aervel.com"}>
                        <a>
                            <svg width={16} height={44} viewBox="0 0 4.233 11.642" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M.174 8.508c.567-.19 1.166-.226 1.602-.285 3.51-.477 2.017-3.438 2.017-3.438S-.37 3.04.174 8.508zM2.892 3.135c-.021.767.419 1.286.818 1.385 0 0 .214-.95-.818-1.385z" />
                                </g>
                            </svg>
                        </a>
                    </Link>
                </LeftTool>
                <RightTool>
                    <Link href={"https://support.aervel.com"}>
                        <a>
                            <svg viewBox="0 0 99.6097412109375 99.6572265625" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.545 14.55c27.246 0 49.805-22.607 49.805-49.804 0-27.246-22.608-49.805-49.854-49.805C31.3-85.059 8.74-62.5 8.74-35.254c0 27.197 22.608 49.805 49.805 49.805zm0-8.3c-23.047 0-41.455-18.457-41.455-41.504 0-23.047 18.36-41.504 41.406-41.504 23.047 0 41.504 18.457 41.553 41.504.049 23.047-18.457 41.504-41.504 41.504zm-1.026-31.396c2.442 0 3.956-1.514 3.956-3.467v-.586c0-2.735 1.562-4.444 4.98-6.69 4.736-3.125 8.106-6.005 8.106-11.816 0-8.154-7.227-12.5-15.528-12.5-8.398 0-13.916 3.955-15.234 8.447-.244.83-.44 1.611-.44 2.442 0 2.148 1.758 3.369 3.37 3.369 2.783 0 3.222-1.514 4.785-3.32 1.611-2.686 3.955-4.297 7.226-4.297 4.444 0 7.324 2.49 7.324 6.25 0 3.32-2.05 4.931-6.298 7.86-3.516 2.442-6.153 5.03-6.153 9.815v.635c0 2.588 1.416 3.858 3.907 3.858zm-.097 14.6c2.832 0 5.273-2.247 5.273-5.079 0-2.88-2.392-5.078-5.273-5.078s-5.274 2.246-5.274 5.078c0 2.783 2.442 5.078 5.274 5.078z" transform="translate(-8.74 85.059)" />
                            </svg>
                        </a>
                    </Link>
                </RightTool>
            </Tool>
        )
    }
}

