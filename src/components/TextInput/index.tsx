import * as React from 'react';
import styles from './index.scss';

export type Props = {
    children?: string,
    color: string,
    hint: string,
    id: string,
    labelledBy: string,
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void),
    multiline: boolean,
    required: boolean,
    requirementsText: string,
    size: string
    value?: string
};

export default class TextInput extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    getClassNames() : string {
        const { color, size } = this.props;
        let classNames : string[] = [styles["text-input"]];

        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");
    }

    getProps() : any {
        const { hint, id, labelledBy, required, requirementsText } = this.props;
        return {
            "id": id,
            "name": id,
            "aria-labelledby": labelledBy,
            "className": this.getClassNames(),
            "placeholder": hint,
            "required": required,
            "tabIndex": 0,
            "title": requirementsText,
            "type": "text"
        };
    }

    render() {
        const { multiline } = this.props;

        if(true === multiline) {
            return (
                <textarea onChange={this.props.onChange} {...this.getProps()}>
                    {this.props.value}
                </textarea>
            );
        }

        return <input onChange={this.props.onChange} value={this.props.value} {...this.getProps()} />
        
    }

}