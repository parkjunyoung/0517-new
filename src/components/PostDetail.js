import React, { Component } from 'react';

class PostDetail extends Component {
    render() {
        return (
            <div>{this.props.match.params.id}번째 포스트</div>
        );
    }
}
export default PostDetail;