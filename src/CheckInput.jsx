import React, { Component } from 'react'

const MAX_TEXT_LENGTH = 15;

class CheckInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            message: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }
    handleInputChange(e) {
        this.setState({ content: e.target.value })
    }
    handleOnKeyDown(e) {
        if (e.charCode === 13) {
            let message = '';
            const { content } = this.state;
            if (content.length > 0 && content.length <= MAX_TEXT_LENGTH) {
                message = 'Nội dung hợp lệ';
            } else if (content.length > MAX_TEXT_LENGTH) {
                message = 'Nội dung quá dài, vui lòng đảm bảo nội dung nhỏ hơn hoặc bằng 15 ký tự';
            }
            this.setState({ message, })
        }
    }
    render() {
        const { content } = this.state;
        return (
            <div>
                <h3>Nội dung</h3>
                <input
                    value={content}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleOnKeyDown}
                    name="name"
                    placeholder='Nhập nội dung' />
                {this.state.message && (<div>
                    <h3>{this.state.message}</h3>
                </div>)}
            </div>
        )
    }
}

export default CheckInput;